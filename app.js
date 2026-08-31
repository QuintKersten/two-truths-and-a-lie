// ============ GAME STATE ============
let state = {
  score: 0, streak: 0, maxStreak: 0, round: 0, correct: 0,
  total: 10, results: [], currentFactIndex: -1, usedCountries: [],
  roundFacts: [], gameActive: false, mode: 'classic',
  continent: null, timed: false, timedLeft: 0, timedScore: 0,
  timedCorrect: 0, timedTotal: 0, timedActive: false
};

const ROUNDS_PER_GAME = 10;
const TIMED_SECONDS = 30;
let timerInterval = null;

// ============ PERSISTENCE ============
function loadStats() {
  try {
    return JSON.parse(localStorage.getItem('ttal_stats')) || { best: 0, games: 0, correct: 0, total: 0, ach: {} };
  } catch(e) { return { best: 0, games: 0, correct: 0, total: 0, ach: {} }; }
}
function saveStats(s) { localStorage.setItem('ttal_stats', JSON.stringify(s)); }
let stats = loadStats();

// ============ INIT ============
function init() {
  createStars();
  const db = window.FACTS_DB || [];
  document.getElementById('totalCountries').textContent = db.length;
  document.getElementById('cCountHero').textContent = db.length;
  document.getElementById('totalFacts').textContent = db.length * 3;
  document.getElementById('bestScore').textContent = stats.best;
  buildContinentFilter();
  renderExplorer();
  renderAchievements();
}

function createStars() {
  const c = document.getElementById('stars');
  for (let i = 0; i < 70; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    s.style.left = Math.random()*100+'%';
    s.style.top = Math.random()*100+'%';
    s.style.setProperty('--d', (2+Math.random()*3)+'s');
    s.style.animationDelay = Math.random()*3+'s';
    s.style.width = s.style.height = (1+Math.random()*2)+'px';
    c.appendChild(s);
  }
}

// ============ NAVIGATION ============
function showSection(sec) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('sec-' + sec).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.querySelector(`.nav-link[data-sec="${sec}"]`).classList.add('active');
  if (sec === 'explore') renderExplorer();
  if (sec === 'achieve') renderAchievements();
}

// ============ GAME START ============
function startGame(mode) {
  state = { score:0, streak:0, maxStreak:0, round:0, correct:0, total:10,
    results:[], currentFactIndex:-1, usedCountries:[], roundFacts:[],
    gameActive:true, mode, continent:null, timed:false, timedLeft:0,
    timedScore:0, timedCorrect:0, timedTotal:0, timedActive:false };

  if (mode === 'continent') {
    document.getElementById('heroSection').style.display = 'none';
    document.getElementById('contPicker').style.display = 'flex';
    document.getElementById('gameArea').style.display = 'none';
    return;
  }
  if (mode === 'timed') {
    state.timed = true;
    state.total = 999;
    state.timedActive = true;
    state.timedLeft = TIMED_SECONDS;
    document.getElementById('timerWrap').classList.add('on');
  }
  if (mode === 'daily') {
    // deterministic daily selection based on date
    const day = Math.floor(Date.now() / 86400000);
    const db = window.FACTS_DB || [];
    const idx = day % db.length;
    state.usedCountries = [];
    state.dailyCountry = db[idx];
  }

  document.getElementById('heroSection').style.display = 'none';
  document.getElementById('contPicker').style.display = 'none';
  document.getElementById('shareSection').style.display = 'none';
  document.getElementById('gameArea').style.display = 'block';
  updateScoreBar();
  buildProgressDots();
  nextRound();
}

function pickContinent(cont) {
  state.continent = cont;
  document.getElementById('contPicker').style.display = 'none';
  document.getElementById('gameArea').style.display = 'block';
  updateScoreBar();
  buildProgressDots();
  nextRound();
}

// ============ ROUND LOGIC ============
function getAvailableFacts() {
  const db = window.FACTS_DB || [];
  let pool = db;
  if (state.continent) pool = db.filter(c => c.co === state.continent);
  if (state.mode === 'daily' && state.dailyCountry) pool = [state.dailyCountry];
  return pool.filter((_, i) => !state.usedCountries.includes(i));
}

function pickCountry() {
  const available = getAvailableFacts();
  if (available.length === 0) {
    state.usedCountries = [];
    const db = window.FACTS_DB || [];
    const pool = state.continent ? db.filter(c=>c.co===state.continent) : db;
    return pool[Math.floor(Math.random()*pool.length)];
  }
  const idx = Math.floor(Math.random()*available.length);
  const db = window.FACTS_DB || [];
  const pool = state.continent ? db.filter(c=>c.co===state.continent) : db;
  const originalIdx = pool.indexOf(available[idx]);
  state.usedCountries.push(originalIdx);
  return available[idx];
}

function nextRound() {
  if (state.timed) {
    if (!state.timedActive) return;
    loadTimedRound();
    return;
  }
  if (state.round >= state.total) { endGame(); return; }

  state.round++;
  state.currentFactIndex = -1;
  const country = pickCountry();
  state.roundFacts = country.facts;

  const indices = [0,1,2];
  shuffle(indices);

  document.getElementById('cFlag').textContent = country.f;
  document.getElementById('cName').textContent = country.c;
  const diffEl = document.getElementById('cDiff');
  diffEl.textContent = country.d;
  diffEl.className = 'c-diff ' + country.d;

  const grid = document.getElementById('factsGrid');
  grid.innerHTML = '';
  const labels = ['Statement A','Statement B','Statement C'];

  indices.forEach((origIdx, displayIdx) => {
    const fact = country.facts[origIdx];
    const card = document.createElement('div');
    card.className = 'fc';
    card.dataset.origIdx = origIdx;
    card.innerHTML = `
      <div class="fc-num">${labels[displayIdx]}</div>
      <div class="fc-txt">${fact.t}</div>
      <div class="fc-expl">${fact.e}</div>
    `;
    card.addEventListener('click', () => pickFact(card, origIdx));
    grid.appendChild(card);
  });

  document.getElementById('banner').className = 'banner';
  document.getElementById('nextBtn').className = 'next-btn';
  updateProgressDots();
  updateScoreBar();
}

function loadTimedRound() {
  state.currentFactIndex = -1;
  const country = pickCountry();
  state.roundFacts = country.facts;
  const indices = [0,1,2];
  shuffle(indices);

  document.getElementById('cFlag').textContent = country.f;
  document.getElementById('cName').textContent = country.c;
  const diffEl = document.getElementById('cDiff');
  diffEl.textContent = country.d;
  diffEl.className = 'c-diff ' + country.d;

  const grid = document.getElementById('factsGrid');
  grid.innerHTML = '';
  const labels = ['Statement A','Statement B','Statement C'];

  indices.forEach((origIdx, displayIdx) => {
    const fact = country.facts[origIdx];
    const card = document.createElement('div');
    card.className = 'fc';
    card.dataset.origIdx = origIdx;
    card.innerHTML = `
      <div class="fc-num">${labels[displayIdx]}</div>
      <div class="fc-txt">${fact.t}</div>
      <div class="fc-expl">${fact.e}</div>
    `;
    card.addEventListener('click', () => pickFact(card, origIdx));
    grid.appendChild(card);
  });

  document.getElementById('banner').className = 'banner';
  document.getElementById('nextBtn').className = 'next-btn';
  updateScoreBar();
}

function pickFact(card, origIdx) {
  if (state.gameActive && state.currentFactIndex !== -1) return;
  state.currentFactIndex = origIdx;
  const fact = state.roundFacts[origIdx];
  const allCards = document.querySelectorAll('.fc');
  const pickedCorrectly = fact.ok === false;

  allCards.forEach(c => c.classList.add('locked'));
  allCards.forEach(c => {
    const idx = parseInt(c.dataset.origIdx);
    const isLie = state.roundFacts[idx].ok === false;
    c.classList.add('rev');
    if (isLie) {
      c.classList.add('lie-card');
      c.querySelector('.fc-num').innerHTML += ' <span style="color:var(--lie)">← THE LIE</span>';
    } else {
      c.classList.add('truth');
      c.querySelector('.fc-num').innerHTML += ' <span style="color:var(--trn)">✓ TRUE</span>';
    }
    if (idx === origIdx && !pickedCorrectly) c.classList.add('wrong');
  });

  const banner = document.getElementById('banner');
  if (pickedCorrectly) {
    state.streak++;
    state.correct++;
    if (state.streak > state.maxStreak) state.maxStreak = state.streak;
    let mult = 1;
    if (state.streak >= 8) mult = 5;
    else if (state.streak >= 5) mult = 3;
    else if (state.streak >= 3) mult = 2;
    const points = 10 * mult;
    state.score += points;
    state.results.push(true);

    banner.className = 'banner b-ok show';
    document.getElementById('bIcon').textContent = state.streak >= 5 ? '🔥' : '✅';
    document.getElementById('bText').textContent = state.streak >= 5 ? `On FIRE! +${points} (${mult}×)` : `Correct! +${points}`;
    document.getElementById('bSub').textContent = state.streak >= 3 ? `Streak: ${state.streak}!` : 'Nice one!';
    if (state.streak >= 5) launchConfetti();
  } else {
    state.streak = 0;
    state.results.push(false);
    banner.className = 'banner b-no show';
    document.getElementById('bIcon').textContent = '❌';
    document.getElementById('bText').textContent = 'Not quite!';
    document.getElementById('bSub').textContent = 'Streak reset.';
  }

  updateScoreBar();

  if (state.timed) {
    // auto-advance after short delay
    setTimeout(() => {
      if (state.timedActive) loadTimedRound();
    }, 900);
  } else {
    document.getElementById('nextBtn').classList.add('show');
    document.getElementById('nextBtn').textContent = state.round >= state.total ? 'See Results →' : 'Next Country →';
  }
}

// ============ TIMED MODE ============
function startTimedTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    state.timedLeft--;
    const pct = (state.timedLeft / TIMED_SECONDS) * 100;
    document.getElementById('timerBar').style.width = pct + '%';
    if (state.timedLeft <= 0) {
      clearInterval(timerInterval);
      state.timedActive = false;
      endGame();
    }
  }, 1000);
}

// ============ END GAME ============
function endGame() {
  state.gameActive = false;
  if (timerInterval) clearInterval(timerInterval);
  document.getElementById('timerWrap').classList.remove('on');
  document.getElementById('gameArea').style.display = 'none';
  document.getElementById('shareSection').style.display = 'block';

  // update stats
  stats.games++;
  stats.correct += state.correct;
  stats.total += state.results.length;
  if (state.score > stats.best) stats.best = state.score;
  saveStats(stats);
  document.getElementById('bestScore').textContent = stats.best;

  const pct = state.results.length > 0 ? Math.round((state.correct / state.results.length) * 100) : 0;
  document.getElementById('shareScore').textContent = state.score + ' pts';
  document.getElementById('shareDetail').textContent =
    `${state.correct}/${state.results.length} correct (${pct}%) • Best streak: ${state.maxStreak} 🔥`;

  if (pct >= 80) launchConfetti();
  checkAchievements();
  renderAchievements();
}

// ============ UI UPDATES ============
function updateScoreBar() {
  document.getElementById('sbStreak').textContent = state.streak;
  document.getElementById('sbScore').textContent = state.score;
  document.getElementById('sbRound').textContent = state.timed
    ? state.timedLeft + 's'
    : state.round + '/' + state.total;
  const pct = state.round > 0 ? Math.round((state.correct / state.round) * 100) + '%' : '—';
  document.getElementById('sbAcc').textContent = pct;
}

function buildProgressDots() {
  const c = document.getElementById('dots');
  c.innerHTML = '';
  for (let i = 0; i < state.total; i++) {
    const d = document.createElement('div');
    d.className = 'dot';
    d.id = 'dot-' + i;
    c.appendChild(d);
  }
}

function updateProgressDots() {
  for (let i = 0; i < state.total; i++) {
    const d = document.getElementById('dot-' + i);
    if (!d) continue;
    d.className = 'dot';
    if (i < state.results.length) d.classList.add(state.results[i] ? 'ok' : 'no');
    else if (i === state.round - 1) d.classList.add('now');
  }
}

// ============ EXPLORER ============
let explorerContinent = 'All';
function buildContinentFilter() {
  const c = document.getElementById('contFilter');
  const conts = ['All', ...new Set((window.FACTS_DB||[]).map(x => x.co))];
  c.innerHTML = conts.map(ct => `<button class="cont-btn ${ct==='All'?'active':''}" onclick="setExplorerCont('${ct}')">${ct}</button>`).join('');
}
function setExplorerCont(ct) {
  explorerContinent = ct;
  document.querySelectorAll('#contFilter .cont-btn').forEach(b => b.classList.toggle('active', b.textContent === ct));
  renderExplorer();
}
function renderExplorer() {
  const db = window.FACTS_DB || [];
  const q = (document.getElementById('exSearch')?.value || '').toLowerCase();
  let list = db;
  if (explorerContinent !== 'All') list = list.filter(c => c.co === explorerContinent);
  if (q) list = list.filter(c => c.c.toLowerCase().includes(q));
  document.getElementById('explorerCount').textContent = `Showing ${list.length} of ${db.length} countries`;
  const grid = document.getElementById('exGrid');
  grid.innerHTML = list.map(c => `
    <div class="ex-card" onclick="openModal('${c.c.replace(/'/g,"\\'")}')">
      <div class="ex-flag">${c.f}</div>
      <div class="ex-name">${c.c}</div>
      <div class="ex-cont">${c.co} • ${c.d}</div>
    </div>
  `).join('');
}
function filterExplorer() { renderExplorer(); }

function openModal(name) {
  const db = window.FACTS_DB || [];
  const c = db.find(x => x.c === name);
  if (!c) return;
  const labels = ['Statement A','Statement B','Statement C'];
  const factsHtml = c.facts.map((f, i) => `
    <div style="padding:14px;border:1px solid var(--brd);border-radius:12px;margin-bottom:10px;background:var(--s2)">
      <div style="font-size:.7rem;color:var(--dim);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">${labels[i]}</div>
      <div style="font-size:.95rem;line-height:1.5">${f.t}</div>
      <div style="margin-top:8px;font-size:.75rem;color:${f.ok ? 'var(--trn)' : 'var(--lie)'};font-weight:700">${f.ok ? '✓ TRUE' : '✗ THE LIE'}</div>
      <div style="margin-top:6px;font-size:.8rem;color:var(--dim);line-height:1.4">${f.e}</div>
    </div>
  `).join('');
  document.getElementById('exModalInner').innerHTML = `
    <button class="ex-modal-close" onclick="closeModal()">✕</button>
    <div style="font-size:2.5rem;margin-bottom:8px">${c.f}</div>
    <h2 style="font-family:'Space Grotesk',sans-serif;margin-bottom:4px">${c.c}</h2>
    <div style="font-size:.8rem;color:var(--dim);margin-bottom:16px">${c.co} • Difficulty: ${c.d}</div>
    ${factsHtml}
    <button class="next-btn show" style="margin-top:8px" onclick="closeModal();startGame('classic')">Play a game →</button>
  `;
  document.getElementById('exModal').classList.add('show');
}
function closeModal() { document.getElementById('exModal').classList.remove('show'); }

// ============ ACHIEVEMENTS ============
const ACHIEVEMENTS = [
  { id:'first', icon:'🎯', name:'First Steps', desc:'Complete your first game' },
  { id:'streak3', icon:'🔥', name:'On Fire', desc:'Reach a 3-streak' },
  { id:'streak5', icon:'⚡', name:'Unstoppable', desc:'Reach a 5-streak' },
  { id:'streak8', icon:'🚀', name:'Legend', desc:'Reach an 8-streak' },
  { id:'perfect', icon:'💯', name:'Perfect Game', desc:'Get 100% in a game' },
  { id:'score100', icon:'🏆', name:'Century', desc:'Score 100+ in one game' },
  { id:'games5', icon:'🎮', name:'Veteran', desc:'Play 5 games' },
  { id:'explorer', icon:'🧭', name:'Explorer', desc:'Explore 10 countries' }
];

function checkAchievements() {
  if (stats.games >= 1) stats.ach.first = true;
  if (state.maxStreak >= 3) stats.ach.streak3 = true;
  if (state.maxStreak >= 5) stats.ach.streak5 = true;
  if (state.maxStreak >= 8) stats.ach.streak8 = true;
  if (state.results.length > 0 && state.correct === state.results.length) stats.ach.perfect = true;
  if (state.score >= 100) stats.ach.score100 = true;
  if (stats.games >= 5) stats.ach.games5 = true;
  saveStats(stats);
}

function renderAchievements() {
  const grid = document.getElementById('achGrid');
  grid.innerHTML = ACHIEVEMENTS.map(a => {
    const unlocked = !!stats.ach[a.id];
    return `
      <div class="ach ${unlocked ? 'unlocked' : 'locked'}">
        <div class="ach-icon">${a.icon}</div>
        <div class="ach-name">${a.name}</div>
        <div class="ach-desc">${a.desc}</div>
      </div>
    `;
  }).join('');
}

// ============ SHARING ============
function shareResults(type) {
  const text = `🌍 Two Truths & a Lie: World Edition\n\nScore: ${state.score} pts\nCorrect: ${state.correct}/${state.results.length}\nBest streak: ${state.maxStreak} 🔥\n\nCan you beat me?`;
  if (type === 'copy') {
    navigator.clipboard.writeText(text).then(() => showToast('📋 Results copied!'));
  } else if (type === 'tweet') {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
  }
}

// ============ UTILITIES ============
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}
function launchConfetti() {
  const c = document.getElementById('confetti');
  const colors = ['#7c5ce7','#00c9a7','#ffd866','#ff6b6b','#a78bfa','#55efc4','#ff7675'];
  for (let i = 0; i < 60; i++) {
    const el = document.createElement('div');
    el.className = 'conf';
    el.style.left = Math.random()*100+'%';
    el.style.top = '-10px';
    el.style.background = colors[Math.floor(Math.random()*colors.length)];
    el.style.setProperty('--dur', (1.5+Math.random()*2)+'s');
    el.style.animationDelay = Math.random()*0.5+'s';
    el.style.width = (6+Math.random()*8)+'px';
    el.style.height = (6+Math.random()*8)+'px';
    el.style.borderRadius = Math.random()>0.5 ? '50%' : '2px';
    c.appendChild(el);
  }
  setTimeout(() => c.innerHTML = '', 4000);
}

// ============ GO ============
init();
