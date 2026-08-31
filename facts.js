// FACTS DATABASE — every entry: c=country, f=flag, co=continent, d=difficulty
// facts array: t=text, ok=truth, e=explanation
const FACTS_DB=[
// ===== AFRICA =====
{c:"Nigeria",f:"\u{1F1F3}\u{1F1EC}",co:"Africa",d:"easy",facts:[
{t:"Nollywood produces more movies annually than Hollywood and Bollywood combined.",ok:true,e:"Nollywood produces ~1,500-2,500 films per year, making it one of the largest film industries by volume."},
{t:"Nigeria's national football team once forfeited a World Cup match because players wore different colored boots.",ok:false,e:"This never happened. Nigeria has had kit controversies but never a forfeit over footwear."},
{t:"Lagos has more residents than the entire population of many European countries like the Netherlands or Greece.",ok:true,e:"Lagos has 15-20 million+ people, more than the Netherlands (~17.8M) or Greece (~10.4M)."}
]},
{c:"Egypt",f:"\u{1F1EA}\u{1F1EC}",co:"Africa",d:"medium",facts:[
{t:"The Great Pyramid of Giza was the tallest man-made structure for over 3,800 years.",ok:true,e:"Built ~2560 BC at 146m, it held the record until Lincoln Cathedral ~1311 AD."},
{t:"Cairo's 'Garbage City' houses 60,000+ people who recycle most of the city's waste.",ok:true,e:"Manshiyat Naser is home to the Zabbaleen community who collect ~80% of Cairo's garbage."},
{t:"The Egyptian Sphinx contains a secret underwater chamber with ancient construction tablets.",ok:false,e:"While radar surveys suggest possible voids near the Sphinx, no underwater chamber with tablets has been found."}
]},
{c:"Kenya",f:"\u{1F1F0}\u{1F1EA}",co:"Africa",d:"medium",facts:[
{t:"Lake Turkana in Kenya is the world's largest permanent desert lake.",ok:true,e:"Lake Turkana is ~250km long with no outlet — the largest permanent desert lake on Earth."},
{t:"The Kalenjin community has produced the majority of Kenya's world champion runners.",ok:true,e:"Altitude, genetics, and cultural running traditions make the Kalenjin disproportionately dominant."},
{t:"Kenyan law requires every citizen to spend one weekend per year cleaning their community.",ok:false,e:"While cleanup campaigns exist, there is no legal requirement for mandatory annual community cleaning."}
]},
{c:"South Africa",f:"\u{1F1FF}\u{1F1E6}",co:"Africa",d:"medium",facts:[
{t:"South Africa has 11 official languages, one of the highest counts of any country.",ok:true,e:"English, Zulu, Xhosa, Afrikaans, and 7 others are all official in the Constitution."},
{t:"Table Mountain is one of the oldest mountains in the world, older than the Himalayas.",ok:true,e:"Table Mountain is ~600 million years old, while the Himalayas formed ~50 million years ago."},
{t:"South Africa legally requires all radio stations to play 40% local music during daytime.",ok:false,e:"While there are local content requirements for TV, there is no 40% radio music law."}
]},
{c:"Ethiopia",f:"\u{1F1EA}\u{1F1F9}",co:"Africa",d:"hard",facts:[
{t:"Ethiopia uses its own calendar, 7-8 years behind the Gregorian calendar.",ok:true,e:"The Ethiopian calendar follows the Coptic tradition with 13 months — 12 of 30 days plus a short month."},
{t:"Coffee was discovered in Ethiopia, where a goat herder noticed his goats dancing after eating berries.",ok:true,e:"The Kaldi legend from the Ethiopian highlands credits a goatherd with discovering coffee's effects."},
{t:"Ethiopia was occupied by Italy, who successfully imposed their calendar on the population.",ok:false,e:"Italy occupied Ethiopia 1936-1941 but never changed the calendar. Ethiopia retained its own."}
]},
{c:"Ghana",f:"\u{1F1EC}\u{1F1ED}",co:"Africa",d:"medium",facts:[
{t:"Ghana was the first sub-Saharan African country to gain independence, in 1957.",ok:true,e:"Ghana (then Gold Coast) became the first sub-Saharan nation to gain independence."},
{t:"Kente cloth, the colorful woven fabric, originated in Ghana and was traditionally worn only by royalty.",ok:true,e:"Kente was created by Ashanti and Ewe peoples, with certain patterns reserved exclusively for royalty."},
{t:"Ghana's capital Accra was renamed from 'Accya' because it was too difficult for English speakers.",ok:false,e:"'Accra' derives from 'Nkran' meaning ants. It was not renamed for English speakers."}
]},
{c:"Morocco",f:"\u{1F1F2}\u{1F1E6}",co:"Africa",d:"medium",facts:[
{t:"Hassan II Mosque has the tallest minaret in the world at 210 meters.",ok:true,e:"Completed in 1993, the minaret is 210m tall — the highest religious structure in the world."},
{t:"Morocco's University of al-Qarawiyyin, founded 859 AD, is the world's oldest continuously operating university.",ok:true,e:"Founded by Fatima al-Fihri in Fez, it predates Oxford and Cambridge by centuries."},
{t:"Morocco legally requires all medina buildings to be painted blue to reduce temperatures.",ok:false,e:"While Chefchaouen is blue, this is a local tradition, not a national law."}
]},
{c:"Tanzania",f:"\u{1F1F9}\u{1F1FF}",co:"Africa",d:"hard",facts:[
{t:"Mount Kilimanjaro is the tallest free-standing mountain in the world at 5,895 meters.",ok:true,e:"Unlike mountain ranges, Kilimanjaro rises alone from the savanna."},
{t:"Zanzibar was once the world's largest producer of cloves.",ok:true,e:"Zanzibar controlled ~80% of the global clove trade in the 19th century."},
{t:"Tanzania removed English from all government use in 2015.",ok:false,e:"English remains in government and courts alongside Swahili."}
]},
{c:"Uganda",f:"\u{1F1FA}\u{1F1EC}",co:"Africa",d:"hard",facts:[
{t:"Uganda is home to more than half the world's remaining mountain gorillas.",ok:true,e:"About 1,000 exist, with roughly half in Uganda's Bwindi Impenetrable Forest."},
{t:"Lake Victoria, shared by Uganda, is the largest lake in Africa.",ok:true,e:"Lake Victoria covers 59,947 km² and is the source of the White Nile."},
{t:"Uganda's official language changed from English to Swahili in 2017.",ok:false,e:"English remains official. Swahili was added as a second official language in 2005, not replacing English."}
]},
{c:"Madagascar",f:"\u{1F1F2}\u{1F1EC}",co:"Africa",d:"medium",facts:[
{t:"Over 90% of Madagascar's wildlife is found nowhere else on Earth.",ok:true,e:"Long isolation led to extraordinary endemism."},
{t:"Madagascar separated from India approximately 88 million years ago.",ok:true,e:"The island broke away during the Late Cretaceous period."},
{t:"Madagascar's official language is 'Franmalagasy,' a French-Malagasy creole.",ok:false,e:"Malagasy and French are both official, but there is no hybrid creole."}
]},
{c:"Zimbabwe",f:"\u{1F1FF}\u{1F1FC}",co:"Africa",d:"hard",facts:[
{t:"Victoria Falls is one of the Seven Natural Wonders, with a width of 1,708 meters.",ok:true,e:"Victoria Falls is the largest falling sheet of water by combined width and height."},
{t:"Zimbabwe experienced hyperinflation where prices doubled every 24 hours in 2008.",ok:true,e:"Peak inflation reached ~79.6 billion percent per month in November 2008."},
{t:"Zimbabwe requires all citizens to plant one tree per year or face a fine.",ok:false,e:"While tree-planting programs exist, there is no individual legal requirement."}
]},
{c:"Botswana",f:"\u{1F1E7}\u{1F1FF}",co:"Africa",d:"medium",facts:[
{t:"The Jwaneng diamond mine is considered the richest diamond mine in the world by value.",ok:true,e:"Botswana's diamonds make up ~70% of its exports."},
{t:"The Okavango Delta is the world's largest inland delta.",ok:true,e:"Covering ~22,000 km², it is a UNESCO World Heritage Site."},
{t:"Botswana's legal system has never been modified from the original British common law.",ok:false,e:"While influenced by British law, Botswana has adapted and modified its legal system extensively."}
]},
{c:"Rwanda",f:"\u{1F1F7}\u{1F1FC}",co:"Africa",d:"medium",facts:[
{t:"Rwanda is known as the 'Land of a Thousand Hills' due to its hilly terrain.",ok:true,e:"Rwanda's landscape is dominated by mountains and rolling hills."},
{t:"Rwanda banned single-use plastic bags in 2008 — one of the world's strictest plastic bans.",ok:true,e:"Plastic bags are banned and can be confiscated at borders."},
{t:"Rwanda has more tech startups per capita than any other African country.",ok:false,e:"While growing, countries like Kenya and Nigeria have more startups per capita."}
]},
{c:"Senegal",f:"\u{1F1F8}\u{1F1F3}",co:"Africa",d:"hard",facts:[
{t:"Lac Rose near Dakar gets its color from Dunaliella salina algae.",ok:true,e:"The high-salinity lake hosts algae that produce pink/red pigment."},
{t:"Gorée Island off Senegal is a UNESCO site associated with the Atlantic slave trade.",ok:true,e:"Gorée served as one of the largest slave-trading centers from the 15th-19th centuries."},
{t:"Senegal has a 'sacred lightning tree' that was struck by lightning in Thiès.",ok:false,e:"While Senegal has cultural trees, there is no widely recognized sacred lightning tree of Thiès."}
]},
{c:"Namibia",f:"\u{1F1F3}\u{1F1E6}",co:"Africa",d:"medium",facts:[
{t:"Namibia's Skeleton Coast gets its name from whale bones and shipwrecks.",ok:true,e:"The coast was littered with whale bones and is known for shipwrecks."},
{t:"Dune 7 in Namibia is the tallest sand dune in the world at ~388 meters.",ok:true,e:"Namibia's Sossusvlei region hosts the world's tallest sand dunes."},
{t:"Namibian law requires all safari guides to carry a traditional healing herb.",ok:false,e:"While bush knowledge is valued, there is no legal herb-carrying requirement."}
]},
{c:"Tunisia",f:"\u{1F1F9}\u{1F1F3}",co:"Africa",d:"medium",facts:[
{t:"Star Wars scenes were filmed in Tunisia's desert locations doubling as Tatooine.",ok:true,e:"Matmata and Tozeur were used for Luke Skywalker's home planet."},
{t:"Ancient Carthage, in Tunisia, was one of the most powerful cities in the Mediterranean.",ok:true,e:"Carthage rivaled Rome and controlled much of the western Mediterranean."},
{t:"Tunisia legally requires all citizens to eat couscous once per week.",ok:false,e:"Couscous is a staple but there is no legal eating requirement."}
]},
{c:"Sudan",f:"\u{1F1F8}\u{1F1E9}",co:"Africa",d:"hard",facts:[
{t:"Sudan has more ancient pyramids than Egypt — over 200 in the Meroë region.",ok:true,e:"The Nubian pyramids at Meroë outnumber Egypt's."},
{t:"Before 2011, Sudan was the largest country in Africa by area.",ok:true,e:"Before the South Sudan split, Sudan was ~2.5 million km²."},
{t:"Sudan's Dinder National Park is the largest wildlife reserve in all of Africa.",ok:false,e:"Dinder is large (~10,000 km²) but not the largest in Africa."}
]},
{c:"DRC",f:"\u{1F1E8}\u{1F1E9}",co:"Africa",d:"hard",facts:[
{t:"The Congo River is the deepest river in the world at over 220 meters deep.",ok:true,e:"The Congo reaches ~220m depth, the world's deepest recorded river."},
{t:"The DRC has over 1,100 bird species and 450 mammal species.",ok:true,e:"The Congo Basin is the second-largest tropical forest with enormous biodiversity."},
{t:"Rugby union is the DRC's national sport, imposed by Belgian colonial law.",ok:false,e:"Football (soccer) is the dominant sport, not rugby."}
]},
{c:"Somalia",f:"\u{1F1F8}\u{1F1EC}",co:"Africa",d:"hard",facts:[
{t:"Somalia is called the 'Nation of Poets' because poetry is central to its culture.",ok:true,e:"Somalis have one of the richest oral poetry traditions in the world."},
{t:"Somalia has the longest coastline in mainland Africa at over 3,000 km.",ok:true,e:"The coastline stretches ~3,025 km along the Indian Ocean and Gulf of Aden."},
{t:"Somali law requires all citizens to memorize at least one poem by heart.",ok:false,e:"While poetry is revered, there is no legal memorization requirement."}
]},
{c:"Eritrea",f:"\u{1F1EA}\u{1F1F7}",co:"Africa",d:"hard",facts:[
{t:"Asmara has more Art Deco buildings than almost any city outside Miami Beach.",ok:true,e:"Italian colonial architecture is remarkably preserved, earning UNESCO status."},
{t:"Eritrea uses a unique 9-month school year calendar.",ok:true,e:"Eritrea's school calendar runs on a different schedule from most countries."},
{t:"Eritrea was never formally colonized by any European power.",ok:false,e:"Eritrea was an Italian colony from 1890-1941."}
]},
{c:"Mozambique",f:"\u{1F1F2}\u{1F1FF}",co:"Africa",d:"hard",facts:[
{t:"Mozambique's flag features an AK-47 rifle — one of only two national flags with a modern weapon.",ok:true,e:"The rifle symbolizes the liberation struggle."},
{t:"The Quirimbas National Park covers ~7,500 km² of marine and coastal ecosystems.",ok:true,e:"It is one of Africa's largest marine protected areas."},
{t:"Mozambican law requires all fishing boats to fly a specific color flag.",ok:false,e:"While fishing regulations exist, there is no single mandated flag color."}
]},
{c:"Gabon",f:"\u{1F1EC}\u{1F1E6}",co:"Africa",d:"hard",facts:[
{t:"Gabon has over 88% forest cover — one of the highest percentages in the world.",ok:true,e:"Dense tropical rainforest covers nearly 90% of the country."},
{t:"Loango National Park is known as 'Africa's Last Eden' where elephants hit the beach.",ok:true,e:"Hippos, elephants, and whales coexist in an extraordinary coastal ecosystem."},
{t:"Gabon's official language is English, which replaced French in 2012.",ok:false,e:"French remains the official language."}
]},
{c:"Benin",f:"\u{1F1E7}\u{1F1EF}",co:"Africa",d:"hard",facts:[
{t:"Benin is the birthplace of the Vodun (Voodoo) religion.",ok:true,e:"Vodun originated in the Kingdom of Dahomey and is still widely practiced."},
{t:"The Royal Palaces of Abomey are a UNESCO World Heritage Site.",ok:true,e:"These 17th-19th century palaces of the Kings of Dahomey are UNESCO-protected."},
{t:"Benin's national sport is cricket, introduced during British colonial rule.",ok:false,e:"Benin was a French colony. Football is the dominant sport."}
]},
{c:"Seychelles",f:"\u{1F1F8}\u{1F1E8}",co:"Africa",d:"medium",facts:[
{t:"Seychelles has the smallest population of any African sovereign nation — ~100,000.",ok:true,e:"The smallest country in Africa by population."},
{t:"Vallée de Mai on Praslin island is a UNESCO site with the rare coco de mer palm.",ok:true,e:"The coco de mer produces the world's largest seed, found only in Seychelles."},
{t:"Seychellois law requires all beaches to remain public and free.",ok:false,e:"While many beaches are public, not all are legally guaranteed as public."}
]},
{c:"Mauritius",f:"\u{1F1F2}\u{1F1FA}",co:"Africa",d:"medium",facts:[
{t:"The dodo bird was native only to the island of Mauritius.",ok:true,e:"The flightless dodo went extinct by 1681 due to human activity."},
{t:"Mauritius uses more solar energy per capita than most African nations.",ok:true,e:"The island has invested heavily in renewable energy."},
{t:"Mauritius has dinosaur ruins found near human-made structures.",ok:false,e:"This is fabricated. Mauritius is a volcanic island and relatively young geologically."}
]},
{c:"Comoros",f:"\u{1F1F0}\u{1F1F2}",co:"Africa",d:"hard",facts:[
{t:"Comoros is known as the 'Perfume Islands' for its ylang-ylang and vanilla production.",ok:true,e:"One of the world's largest producers of ylang-ylang essential oil."},
{t:"Comoros has had more coups per capita than almost any other country.",ok:true,e:"Over 20 coups or attempts since 1975 independence."},
{t:"Comoros' national language is French, replacing Comorian in all official use.",ok:false,e:"Comorian, French, and Arabic are all official languages."}
]},
{c:"Gambia",f:"\u{1F1EC}\u{1F1F2}",co:"Africa",d:"hard",facts:[
{t:"The Gambia is the smallest country on the African mainland.",ok:true,e:"Only ~48 km wide but ~295 km long, entirely surrounded by Senegal."},
{t:"Beach hotels in The Gambia are known for monkeys stealing tourists' belongings.",ok:true,e:"Vervet monkeys frequently take sunglasses and food from tourists."},
{t:"Gambian law requires tourists to carry a monkey deterrent device.",ok:false,e:"While monkey encounters are common, there is no legal deterrent requirement."}
]},
{c:"Cape Verde",f:"\u{1F1E8}\u{1F1FB}",co:"Africa",d:"hard",facts:[
{t:"Cesária Évora, the 'Barefoot Diva,' brought Cape Verdean morna music to world fame.",ok:true,e:"She was internationally celebrated for the morna genre."},
{t:"Cape Verde has no permanent rivers — all freshwater comes from rain and desalination.",ok:true,e:"The arid volcanic islands have no permanent rivers."},
{t:"Cape Verde is named after a geographic feature within its own borders.",ok:false,e:"It's named after the Cap-Vert peninsula in Senegal, not its own geography."}
]},
{c:"Liberia",f:"\u{1F1F1}\u{1F1E7}",co:"Africa",d:"hard",facts:[
{t:"Liberia was founded by freed American slaves in 1847 and is Africa's oldest republic.",ok:true,e:"The American Colonization Society established Liberia, independent in 1847."},
{t:"Liberia's flag closely resembles the US flag, reflecting its American founding.",ok:true,e:"11 stripes and one star, modeled after the American flag."},
{t:"Liberia uses the US dollar as its only legal tender.",ok:false,e:"Liberia uses both the Liberian dollar and US dollar."}
]},
{c:"Guinea-Bissau",f:"\u{1F1EC}\u{1F1FC}",co:"Africa",d:"hard",facts:[
{t:"The Bijagós Archipelago is a UNESCO Biosphere Reserve.",ok:true,e:"A unique ecosystem with mangroves, turtles, and rare species."},
{t:"Guinea-Bissau has had more political instability than almost any African country since independence.",ok:true,e:"Multiple coups and transitional governments since 1974."},
{t:"Guinea-Bissau's official language is English.",ok:false,e:"Portuguese is the official language."}
]},
{c:"Benin",f:"\u{1F1E7}\u{1F1EF}",co:"Africa",d:"hard",facts:[
{t:"Benin is the birthplace of the Vodun (Voodoo) religion.",ok:true,e:"Vodun originated in the Kingdom of Dahomey and is still widely practiced."},
{t:"The Royal Palaces of Abomey are a UNESCO World Heritage Site.",ok:true,e:"17th-19th century palaces of the Kings of Dahomey."},
{t:"Benin's national sport is cricket.",ok:false,e:"Football is the dominant sport. Benin was a French colony."}
]},
{c:"Eswatini",f:"\u{1F1F8}\u{1F1FF}",co:"Africa",d:"hard",facts:[
{t:"Eswatini (formerly Swaziland) is Africa's last absolute monarchy.",ok:true,e:"King Mswati III rules with unchecked political power."},
{t:"The annual Umhlanga Reed Dance involves tens of thousands of young women.",ok:true,e:"Maidens present reeds to the queen mother in a major cultural event."},
{t:"Eswatini law requires all citizens to wear traditional dress to vote.",ok:false,e:"There is no dress code requirement for voting."}
]},

// ===== ASIA =====
{c:"Japan",f:"\u{1F1EF}\u{1F1F5}",co:"Asia",d:"easy",facts:[
{t:"Japan has roughly one vending machine for every 23 people — about 5 million total.",ok:true,e:"The most vending machines per capita, selling everything from hot ramen to umbrellas."},
{t:"Japan's Metabo Law mandates waist measurements for citizens over 40.",ok:true,e:"Since 2008, employers face penalties if citizens aged 40-74 exceed waist targets."},
{t:"The Japanese word for 'handshake' translates to 'soul grip' in classical Japanese.",ok:false,e:"Handshake is 握手 (akushu) — literally just 'grip hand.' No 'soul grip' etymology exists."}
]},
{c:"South Korea",f:"\u{1F1F0}\u{1F1F7}",co:"Asia",d:"medium",facts:[
{t:"South Korea has the fastest average internet speed in the world, exceeding 200 Mbps.",ok:true,e:"Consistent #1-2 globally due to massive fiber infrastructure."},
{t:"The drinking age in South Korea is 19, with no separate beer age.",ok:false,e:"There is a uniform drinking age of 19. No lower age for beer exists."},
{t:"South Korea launched government programs to combat its world-lowest birth rate of 0.72.",ok:true,e:"Billions invested in fertility incentives and counseling services."}
]},
{c:"Thailand",f:"\u{1F1F9}\u{1F1ED}",co:"Asia",d:"medium",facts:[
{t:"Thailand is the only Southeast Asian country never colonized by a European power.",ok:true,e:"Maintained independence as a buffer between British Burma and French Indochina."},
{t:"It's illegal in Thailand to leave your house without wearing underwear.",ok:false,e:"A widely repeated myth with no basis in Thai law."},
{t:"Songkran, the Thai New Year, features a nationwide multi-day water fight.",ok:true,e:"Mid-April water fights alongside temple visits and elder respect."}
]},
{c:"India",f:"\u{1F1EE}\u{1F1F3}",co:"Asia",d:"medium",facts:[
{t:"Indian Railways employs over 1.3 million people, one of the world's largest employers.",ok:true,e:"More than many countries' entire militaries."},
{t:"India has villages where residents developed a village-specific sign language due to hereditary deafness.",ok:true,e:"High deafness prevalence led to unique village sign languages used by all residents."},
{t:"The Indian national anthem was legally challenged because a dog was present when it was written.",ok:false,e:"An urban legend with no basis in Indian legal history."}
]},
{c:"China",f:"\u{1F1E8}\u{1F1F3}",co:"Asia",d:"easy",facts:[
{t:"The Great Wall of China is NOT visible from space with the naked eye, despite the myth.",ok:true,e:"Multiple astronauts have confirmed it's too narrow and blends with the landscape."},
{t:"China has over 50 cities with populations exceeding 1 million.",ok:true,e:"More large cities than any other country."},
{t:"Chinese law requires all citizens to play table tennis weekly.",ok:false,e:"While hugely popular, there is no weekly playing requirement."}
]},
{c:"Mongolia",f:"\u{1F1F2}\u{1F1F3}",co:"Asia",d:"hard",facts:[
{t:"Mongolia has one of the lowest population densities — about 2 people per km².",ok:true,e:"~3.4 million people across 1.56 million km²."},
{t:"Mongolia's traditional ger (yurt) has an opening that customarily faces south.",ok:true,e:"The southern-facing door maximizes sunlight and warmth."},
{t:"Ulaanbaatar has more horses than people, and horses are legal citizens of the city.",ok:false,e:"~1.5M people in Ulaanbaatar. Horses are culturally important but not citizens."}
]},
{c:"Nepal",f:"\u{1F1F3}\u{1F1F5}",co:"Asia",d:"hard",facts:[
{t:"Nepal's flag is the only non-rectangular national flag — two stacked triangles.",ok:true,e:"Two triangular pennants, one above the other, unique among all nations."},
{t:"Nepal has eight of the world's fourteen peaks over 8,000 meters.",ok:true,e:"Including Everest at 8,849m."},
{t:"Nepal's capital Kathmandu is the only capital city in the world located at an altitude above 5,000 meters.",ok:false,e:"Kathmandu sits at ~1,400m. The highest capital is La Paz, Bolivia at ~3,640m. No capital is above 5,000m."}
]},
{c:"Philippines",f:"\u{1F1F5}\u{1F1ED}",co:"Asia",d:"medium",facts:[
{t:"The Philippines has over 7,600 islands, but only about 2,000 are inhabited.",ok:true,e:"7,641 islands total, ~2,000 with permanent settlements."},
{t:"Filipinos send more money home in remittances than any other nationality.",ok:true,e:"Over 10M overseas Filipinos send ~$30+ billion annually."},
{t:"The Philippines' national sport is basketball, declared by law in 2010.",ok:false,e:"Arnis (stick fighting) is the official national martial art and sport."}
]},
{c:"Vietnam",f:"\u{1F1FB}\u{1F1F3}",co:"Asia",d:"medium",facts:[
{t:"Son Doong Cave in Vietnam is the world's largest cave passage by cross-section.",ok:true,e:"Over 5km long, 200m high, and 150m wide — fits a 40-story skyscraper."},
{t:"Vietnam is the world's second-largest coffee exporter.",ok:true,e:"~16% of the world's coffee, second only to Brazil."},
{t:"Vietnamese law requires all primary students to learn Mandarin Chinese.",ok:false,e:"Vietnamese is the language of instruction. Mandarin is not required."}
]},
{c:"Indonesia",f:"\u{1F1EE}\u{1F1E9}",co:"Asia",d:"medium",facts:[
{t:"Indonesia has more active volcanoes than any other country — about 130.",ok:true,e:"Sitting on the Pacific Ring of Fire."},
{t:"Indonesia is the world's largest archipelago with over 17,000 islands.",ok:true,e:"17,508 islands, ~6,000 inhabited."},
{t:"Indonesia's Lion Air once offered buy-one-get-one-free fares for passengers over 150kg.",ok:false,e:"Lion Air offered discounted fares for overweight passengers as a promo, not buy-one-get-one-free."}
]},
{c:"Israel",f:"\u{1F1EE}\u{1F1F1}",co:"Asia",d:"medium",facts:[
{t:"Israel has the highest ratio of museums per capita in the world.",ok:true,e:"Over 230 museums for ~9 million people."},
{t:"The Dead Sea is the lowest point on Earth at ~430m below sea level.",ok:true,e:"The lowest land elevation on the planet."},
{t:"Israeli law requires all citizens to learn ancient Aramaic in school.",ok:false,e:"Hebrew and Arabic are official. Aramaic is studied in religious contexts only."}
]},
{c:"Turkey",f:"\u{1F1F9}\u{1F1F7}",co:"Asia",d:"medium",facts:[
{t:"Istanbul straddles two continents — Europe and Asia.",ok:true,e:"The Bosphorus divides the European and Asian sides."},
{t:"Turkish people drink more tea per capita than any other nation.",ok:true,e:"~3.5 kg of tea per person per year."},
{t:"Turkey's national animal is the wolf, and it's illegal to depict wolves negatively.",ok:false,e:"The grey wolf is culturally significant but there is no negative-depiction law."}
]},
{c:"Singapore",f:"\u{1F1F8}\u{1F1EC}",co:"Asia",d:"medium",facts:[
{t:"Singapore is one of only three surviving city-states.",ok:true,e:"Alongside Monaco and Vatican City."},
{t:"It's illegal to chew gum in Singapore since 1992.",ok:true,e:"Banned to combat vandalism. Therapeutic gum allowed with prescription."},
{t:"Singapore requires all men to serve military service starting at age 14.",ok:false,e:"National service starts at 18, not 14."}
]},
{c:"Saudi Arabia",f:"\u{1F1F8}\u{1F1E6}",co:"Asia",d:"hard",facts:[
{t:"Saudi Arabia has no permanent rivers.",ok:true,e:"Water comes from desalination, aquifers, and rainfall."},
{t:"King Fahd's Fountain in Jeddah is the tallest water jet at 312 meters.",ok:true,e:"Higher than the Eiffel Tower."},
{t:"Saudi law requires all buildings to be painted white or sand-colored.",ok:false,e:"Many buildings are light-colored by tradition but there is no paint law."}
]},
{c:"Pakistan",f:"\u{1F1F5}\u{1F1F0}",co:"Asia",d:"hard",facts:[
{t:"K2, the world's second-highest mountain, is on the Pakistan-China border.",ok:true,e:"8,611m in the Karakoram range."},
{t:"Pakistan has the world's largest contiguous irrigation system.",ok:true,e:"The Indus Basin covers ~60% of Pakistan's land."},
{t:"Pakistan's national animal, the markhor, can climb vertical walls.",ok:false,e:"The markhor is an excellent climber, but 'vertical walls' is exaggerated."}
]},
{c:"Nepal",f:"\u{1F1F3}\u{1F1F5}",co:"Asia",d:"hard",facts:[
{t:"Nepal's flag is the only non-rectangular national flag.",ok:true,e:"Two stacked triangular pennants."},
{t:"Nepal has eight of the world's fourteen 8,000m+ peaks.",ok:true,e:"Including Everest."},
{t:"Nepal has no railway system at all.",ok:false,e:"Nepal has limited rail but it exists — a narrow-gauge line in the Terai."}
]},
{c:"Bhutan",f:"\u{1F1E7}\u{1F1F9}",co:"Asia",d:"medium",facts:[
{t:"Bhutan measures success by Gross National Happiness (GNH) instead of GDP.",ok:true,e:"Coined in 1972, GNH remains the guiding philosophy."},
{t:"Bhutan was the last country to get television, in 1999.",ok:true,e:"TV and internet were legalized in 1999."},
{t:"Bhutan's constitution requires all citizens to wear the national dress (gho and kira) every day of the year.",ok:false,e:"While the national dress is required in government buildings and on formal occasions, it is not legally required every day for all citizens."}
]},
{c:"Maldives",f:"\u{1F1F2}\u{1F1FB}",co:"Asia",d:"medium",facts:[
{t:"The Maldives is the flattest country on Earth at ~1.5m above sea level.",ok:true,e:"Maximum natural elevation ~2.4m."},
{t:"The Maldives held an underwater cabinet meeting to highlight climate change.",ok:true,e:"In 2009, ministers met underwater to draw attention to rising seas."},
{t:"Maldivian law requires all resorts to have a private island.",ok:false,e:"Resorts are typically on islands but there is no such legal requirement."}
]},
{c:"Taiwan",f:"\u{1F1F9}\u{1F1FC}",co:"Asia",d:"medium",facts:[
{t:"Taipei 101 was the world's tallest building from 2004 to 2010 at 509 meters.",ok:true,e:"Held the record until Dubai's Burj Khalifa."},
{t:"Taiwan has one of the highest convenience store densities — ~12,000 stores.",ok:true,e:"Roughly one per 2,000 people."},
{t:"Taiwan law requires all citizens to participate in a monthly police-enforced 'community exercise hour.'",ok:false,e:"Group exercise events are common but not police-enforced."}
]},
{c:"Hong Kong",f:"\u{1F1ED}\u{1F1F0}",co:"Asia",d:"medium",facts:[
{t:"Hong Kong has more skyscrapers (150m+) than any other city.",ok:true,e:"~480 skyscrapers, more than any other city."},
{t:"The Star Ferry has operated since 1888, carrying 70,000+ passengers daily.",ok:true,e:"Over 135 years of service."},
{t:"Hong Kong law requires all dim sum restaurants to serve 10+ dumpling varieties.",ok:false,e:"No such legal requirement exists."}
]},
{c:"Kazakhstan",f:"\u{1F1F0}\u{1F1FF}",co:"Asia",d:"hard",facts:[
{t:"Kazakhstan is the world's largest landlocked country at 2.7 million km².",ok:true,e:"9th-largest country overall, largest without ocean access."},
{t:"Baikonur Cosmodrome is the world's first and largest space launch facility.",ok:true,e:"Sputnik and Gagarin both launched from here."},
{t:"Kazakh law requires horse riding lessons before getting a driver's license.",ok:false,e:"Horse riding is culturally important but there is no such requirement."}
]},
{c:"Uzbekistan",f:"\u{1F1FA}\u{1F1FF}",co:"Asia",d:"hard",facts:[
{t:"Samarkand has been continuously inhabited for over 2,700 years.",ok:true,e:"A Silk Road city since ~700 BC."},
{t:"Uzbekistan is one of only two 'double landlocked' countries in the world.",ok:true,e:"Alongside Liechtenstein."},
{t:"Uzbek law requires 5 years of mandatory military service.",ok:false,e:"Military service is mandatory but lasts 12 months."}
]},
{c:"Georgia",f:"\u{1F1EC}\u{1F1EA}",co:"Asia",d:"medium",facts:[
{t:"Georgia has evidence of winemaking dating back 8,000 years.",ok:true,e:"Archaeological evidence from Georgia shows continuous winemaking."},
{t:"Tbilisi's sulfur baths have been in use since the 5th century.",ok:true,e:"The Abanotubani district has been a landmark for 1,500+ years."},
{t:"Georgian law requires all wine to use the ancient qvevri method.",ok:false,e:"While qvevri is a UNESCO tradition, modern methods are also used."}
]},
{c:"Armenia",f:"\u{1F1E6}\u{1F1F2}",co:"Asia",d:"hard",facts:[
{t:"Armenia was the first country to adopt Christianity as a state religion, in 301 AD.",ok:true,e:"King Tiridates III converted in 301 AD."},
{t:"Mount Ararat, now in Turkey, is Armenia's national symbol.",ok:true,e:"Despite being across the border, it remains the most important symbol."},
{t:"Armenian law requires celebrating a 'Day of the Lavash' as a national holiday.",ok:false,e:"While lavash is culturally important, there is no official holiday."}
]},
{c:"Iran",f:"\u{1F1EE}\u{1F1F7}",co:"Asia",d:"hard",facts:[
{t:"Iran's Susa (Shush) is one of the oldest cities, inhabited since ~3200 BC.",ok:true,e:"One of the oldest urban settlements in human history."},
{t:"Iran has the world's second-largest natural gas reserves.",ok:true,e:"~17% of proven global reserves, second only to Russia."},
{t:"Iranian law requires all buildings to include a carpet in every room.",ok:false,e:"Iran is famous for carpets but there is no such legal requirement."}
]},
{c:"Azerbaijan",f:"\u{1F1E6}\u{1F1FF}",co:"Asia",d:"hard",facts:[
{t:"Baku is called the 'Land of Fire' from natural gas vents burning for millennia.",ok:true,e:"The Ateshgah Fire Temple was fed by continuously burning natural gas."},
{t:"Azerbaijan hosted the first European Games in 2015.",ok:true,e:"Baku hosted the inaugural European Games."},
{t:"Azerbaijan law requires gas station attendants to speak two languages.",ok:false,e:"While multilingual, there is no such gas station requirement."}
]},
{c:"UAE",f:"\u{1F1E6}\u{1F1EA}",co:"Asia",d:"medium",facts:[
{t:"The Burj Khalifa is the world's tallest building at 828 meters.",ok:true,e:"Completed in 2010 with 163 floors."},
{t:"Dubai Police have a fleet including Lamborghinis, Ferraris, and Bugattis.",ok:true,e:"Used mainly for tourism and public relations."},
{t:"UAE law requires all residents to own at least one camel.",ok:false,e:"Camels are culturally significant but ownership is not required."}
]},
{c:"Qatar",f:"\u{1F1F6}\u{1F1E6}",co:"Asia",d:"hard",facts:[
{t:"Qatar has one of the world's highest GDPs per capita from natural gas.",ok:true,e:"Massive gas reserves provide extreme per-capita wealth."},
{t:"Qatar Falcons can receive their own passports for international travel.",ok:true,e:"Falcon passports are issued in Qatar and other Gulf states."},
{t:"Qatar is the world's second-smallest country after Vatican City.",ok:false,e:"Qatar is small but Monaco, San Marino, Liechtenstein and others are smaller."}
]},
{c:"Jordan",f:"\u{1F1EF}\u{1F1F2}",co:"Asia",d:"medium",facts:[
{t:"Petra was carved into rose-red sandstone cliffs over 2,000 years ago.",ok:true,e:"Founded 4th century BC, it's a New Seven Wonders site."},
{t:"The Dead Sea shoreline is the lowest land point at ~430m below sea level.",ok:true,e:"The lowest elevation on Earth's surface."},
{t:"Jordanian law requires all hotels to offer free camel rides.",ok:false,e:"Camel rides are a tourist attraction but not legally mandated."}
]},
{c:"Lebanon",f:"\u{1F1F1}\u{1F1E7}",co:"Asia",d:"medium",facts:[
{t:"Beirut was known as the 'Paris of the Middle East' before the civil war.",ok:true,e:"Pre-1975, Beirut rivaled European capitals in culture."},
{t:"Lebanon has over 1,500 wineries despite being small.",ok:true,e:"Ancient winemaking tradition centered in the Bekaa Valley."},
{t:"Lebanese law requires restaurants to serve hummus with every main course.",ok:false,e:"Hummus is a beloved staple but there is no serving requirement."}
]},
{c:"Oman",f:"\u{1F1F4}\u{1F1F2}",co:"Asia",d:"hard",facts:[
{t:"Oman has evidence of human settlement going back 100,000+ years.",ok:true,e:"One of the oldest inhabited areas on Earth."},
{t:"Oman is an absolute monarchy with no political parties.",ok:true,e:"Sultan Haitham bin Tariq rules as absolute monarch."},
{t:"Omani law requires all men to wear the kummah cap in government buildings.",ok:false,e:"The kummah is traditional but there is no legal requirement."}
]},
{c:"Syria",f:"\u{1F1F8}\u{1F1F7}",co:"Asia",d:"hard",facts:[
{t:"Aleppo is one of the oldest continuously inhabited cities, ~7,000 years old.",ok:true,e:"Evidence of habitation dating back to ~5000 BC."},
{t:"Damascus is often cited as the oldest continuously inhabited capital.",ok:true,e:"5,000+ years of continuous habitation."},
{t:"Syria invented the game of chess.",ok:false,e:"Chess originated in India around the 6th century AD."}
]},
{c:"Iraq",f:"\u{1F1EE}\u{1F1F6}",co:"Asia",d:"hard",facts:[
{t:"Iraq is home to ancient Mesopotamia, the 'Cradle of Civilization.'",ok:true,e:"The first writing, cities, and laws emerged here."},
{t:"Babylon was once the world's largest city with 200,000+ residents.",ok:true,e:"Under Nebuchadnezzar II."},
{t:"Iraq legally requires all citizens to learn Sumerian.",ok:false,e:"Sumerian is a dead language. Arabic and Kurdish are used."}
]},
{c:"Kuwait",f:"\u{1F1F0}\u{1F1FC}",co:"Asia",d:"hard",facts:[
{t:"The Kuwaiti Dinar is the world's highest-valued currency at ~$3.30 USD.",ok:true,e:"Consistently the most valuable currency unit."},
{t:"Kuwait has more than 10% of world proven oil reserves.",ok:true,e:"Despite its small size, a major OPEC member."},
{t:"Kuwaiti law requires all new buildings to have gold-plated door handles.",ok:false,e:"While known for opulence, there is no such requirement."}
]},
{c:"Bahrain",f:"\u{1F1E7}\u{1F1ED}",co:"Asia",d:"hard",facts:[
{t:"Bahrain was the first Gulf state to discover oil, in 1932.",ok:true,e:"The first Gulf country with petroleum production."},
{t:"The King Fahd Causeway to Saudi Arabia is 25 km long.",ok:true,e:"Opened in 1986."},
{t:"Bahrain requires all pearl divers to give 50% of their catch to the government.",ok:false,e:"Pearl diving was historically important but this requirement no longer exists."}
]},
{c:"Myanmar",f:"\u{1F1F2}\u{1F1F2}",co:"Asia",d:"hard",facts:[
{t:"Myanmar has over 135 officially recognized ethnic groups.",ok:true,e:"One of the most ethnically diverse countries."},
{t:"Shwedagon Pagoda is said to contain Buddha's hair and is 2,600+ years old.",ok:true,e:"The most sacred Buddhist site in Myanmar."},
{t:"Myanmar's military requires all citizens to wear green armbands on holidays.",ok:false,e:"There is no such armband requirement."}
]},
{c:"Laos",f:"\u{1F1F1}\u{1F1E6}",co:"Asia",d:"hard",facts:[
{t:"Laos is the most heavily bombed country per capita in history.",ok:true,e:"Over 2 million tons of ordnance dropped during the Vietnam War era."},
{t:"The Mekong River flowing through Laos is the 12th-longest river in the world.",ok:true,e:"~4,350 km from Tibet to the South China Sea."},
{t:"Laos requires Buddhist monks to learn English before studying at temples.",ok:false,e:"While some monks learn foreign languages, there is no English requirement."}
]},
{c:"Brunei",f:"\u{1F1E7}\u{1F1F3}",co:"Asia",d:"hard",facts:[
{t:"Brunei's Sultan is one of the wealthiest people in the world at ~$30 billion.",ok:true,e:"Wealth from extensive oil and gas reserves."},
{t:"Oil revenues fund free education, healthcare, and subsidized housing.",ok:true,e:"One of the highest standards of living in Southeast Asia."},
{t:"Brunei requires all citizens to attend a weekly 'national unity' meeting.",ok:false,e:"While events are important, there is no weekly attendance requirement."}
]},
{c:"Tajikistan",f:"\u{1F1F9}\u{1F1EF}",co:"Asia",d:"hard",facts:[
{t:"Tajikistan is the smallest Central Asian country by area.",ok:true,e:"~143,000 km²."},
{t:"Over 90% of Tajikistan is mountains, including the Pamir range.",ok:true,e:"The 'Roof of the World' dominates the landscape."},
{t:"Tajik law requires equal instruction in Russian and Tajik.",ok:false,e:"Tajik is the official language. Russian is widely spoken but not equally mandated."}
]},
{c:"Kyrgyzstan",f:"\u{1F1F0}\u{1F1F2}",co:"Asia",d:"hard",facts:[
{t:"Buzkashi — dragging a goat carcass on horseback — is the national sport.",ok:true,e:"A traditional Central Asian sport still played."},
{t:"Issyk-Kul is the second-largest alpine lake in the world.",ok:true,e:"~182km long, never freezes, one of the deepest."},
{t:"Kyrgyzstan requires all yurts to be painted white by law.",ok:false,e:"White felt is traditional but there is no legal painting requirement."}
]},
{c:"Cambodia",f:"\u{1F1F0}\u{1F1ED}",co:"Asia",d:"medium",facts:[
{t:"Angkor Wat is the largest religious monument in the world at 162+ hectares.",ok:true,e:"Built in the 12th century."},
{t:"Bokator, Cambodia's martial art, dates back to the Angkor era.",ok:true,e:"Nearly lost during the Khmer Rouge but revived."},
{t:"Cambodian law requires all buildings to include a dragon statue.",ok:false,e:"Naga imagery is significant but there is no legal statue requirement."}
]},
{c:"Sri Lanka",f:"\u{1F1F1}\u{1F1F0}",co:"Asia",d:"hard",facts:[
{t:"Sri Lanka had the world's first female prime minister in 1960.",ok:true,e:"Sirimavo Bandaranaike became the world's first female PM."},
{t:"Sigiriya rock fortress was built by King Kasyapa in the 5th century.",ok:true,e:"Rises 200m from the plains."},
{t:"Sri Lankan law requires all tea to be sold in triangular boxes.",ok:false,e:"Ceylon tea is famous but there is no triangular packaging law."}
]},
{c:"Bangladesh",f:"\u{1F1E7}\u{1F1E9}",co:"Asia",d:"hard",facts:[
{t:"Bangladesh has over 1,200 people per km², one of the highest densities.",ok:true,e:"~170 million in 147,000 km²."},
{t:"The Sundarbans is the world's largest mangrove forest.",ok:true,e:"~10,000 km² shared with India, home to Bengal tigers."},
{t:"Bangladesh has more internet users than Germany.",ok:false,e:"The numbers fluctuate. Both countries have ~80-130M users."}
]},
{c:"Tonga",f:"\u{1F1F9}\u{1F1F4}",co:"Asia",d:"hard",facts:[
{t:"Tonga was never formally colonized by a European power.",ok:true,e:"Maintained sovereignty throughout the colonial era."},
{t:"Over 50% of Tongan adults are classified as obese.",ok:true,e:"Consistently among the world's most overweight nations."},
{t:"Tongan law requires all citizens to attend church on Sundays or face a fine.",ok:false,e:"Sunday observance is important and trading is banned, but church attendance has no fine."}
]},

// ===== EUROPE =====
{c:"Iceland",f:"\u{1F1EE}\u{1F1F8}",co:"Europe",d:"medium",facts:[
{t:"Iceland has no mosquitoes — not a single species has ever been established.",ok:true,e:"Freeze-thaw cycles prevent larvae development."},
{t:"It's illegal to own a pet snake, lizard, or turtle in Iceland.",ok:true,e:"Most exotic reptile pets are banned."},
{t:"Icelandic law requires DNA testing at age 18 to prevent inbreeding.",ok:false,e:"The Íslendingabók database exists but testing is voluntary, not mandatory."}
]},
{c:"Switzerland",f:"\u{1F1E8}\u{1F1ED}",co:"Europe",d:"medium",facts:[
{t:"Switzerland has enough nuclear shelters for 114% of its population.",ok:true,e:"Mandatory shelter space in most new buildings."},
{t:"It's illegal to own just one guinea pig — they must be in pairs.",ok:true,e:"Swiss animal welfare law for social animals."},
{t:"Swiss citizens can legally own hand grenades with a permit.",ok:false,e:"Explosives are strictly prohibited even in permissive Swiss gun law."}
]},
{c:"Norway",f:"\u{1F1F3}\u{1F1F4}",co:"Europe",d:"hard",facts:[
{t:"Svalbard Global Seed Vault stores backups of every known crop variety.",ok:true,e:"1.1 million seed samples from gene banks worldwide."},
{t:"Norway has naming laws — baby names must be approved.",ok:true,e:"Names must not be offensive or cause discomfort."},
{t:"Norway requires all citizens to own a snow shovel, enforced by annual inspection.",ok:false,e:"No such law exists."}
]},
{c:"Finland",f:"\u{1F1EB}\u{1F1EE}",co:"Europe",d:"hard",facts:[
{t:"Finland has ~3.3 million saunas for 5.5 million people.",ok:true,e:"More saunas than cars."},
{t:"Finnish students start school at age 7 with 15-min recess per 45-min class.",ok:true,e:"World-renowned education system."},
{t:"Finland guarantees free electricity to all citizens north of the Arctic Circle.",ok:false,e:"Energy subsidies exist but no free electricity guarantee."}
]},
{c:"Germany",f:"\u{1F1E9}\u{1F1EA}",co:"Europe",d:"medium",facts:[
{t:"Germany has 1,500+ beer types governed by the Reinheitsgebot from 1516.",ok:true,e:"The purity law states only water, barley, and hops."},
{t:"Running out of fuel on the Autobahn is a finable offense.",ok:true,e:"Considered negligent driving, €30-70 fine."},
{t:"German law requires all companies with 50+ employees to provide a napping room.",ok:false,e:"Some companies offer nap rooms but there is no legal mandate."}
]},
{c:"France",f:"\u{1F1EB}\u{1F1F7}",co:"Europe",d:"medium",facts:[
{t:"France's 'Right to be Forgotten' law lets people request search removal.",ok:true,e:"Strengthened in 2016."},
{t:"France gives workers the 'right to disconnect' after hours.",ok:true,e:"Since 2017, employers cannot contact workers outside hours."},
{t:"It's illegal to name a pig 'Napoleon' without a government permit.",ok:false,e:"An internet hoax with no basis in French law."}
]},
{c:"Spain",f:"\u{1F1EA}\u{1F1F8}",co:"Europe",d:"medium",facts:[
{t:"La Tomatina festival involves hurling ~150,000 tomatoes in Buñol.",ok:true,e:"Held annually on the last Wednesday of August."},
{t:"Many Spanish shops close 2-5 PM for the midday break.",ok:true,e:"A widespread cultural practice."},
{t:"Spain legally requires all restaurants to offer a free second serving.",ok:false,e:"No such legal requirement exists."}
]},
{c:"Italy",f:"\u{1F1EE}\u{1F1F9}",co:"Europe",d:"easy",facts:[
{t:"Italy has more UNESCO World Heritage Sites than any other country — over 58.",ok:true,e:"From Pompeii to Venice to the Amalfi Coast."},
{t:"Some Italian beaches ban sandcastles during peak season.",ok:true,e:"Certain towns ban sand structures during July-August."},
{t:"Italy legally requires all pasta to be made from durum wheat, even at home.",ok:false,e:"Commercial labeling is regulated but home cooking is not."}
]},
{c:"Greece",f:"\u{1F1EC}\u{1F1F7}",co:"Europe",d:"easy",facts:[
{t:"Greece has more archaeological museums than any other country.",ok:true,e:"Over 100 archaeological museums."},
{t:"High heels are banned at ancient ruins like the Acropolis.",ok:true,e:"Since 2009, to protect marble."},
{t:"Greek islands must have 50+ residents or lose official status.",ok:false,e:"Many tiny islands have fewer than 50 residents and retain status."}
]},
{c:"Sweden",f:"\u{1F1F8}\u{1F1EA}",co:"Europe",d:"medium",facts:[
{t:"Allemansrätten allows anyone to walk, cycle, or camp on any land overnight.",ok:true,e:"A unique Right of Public Access."},
{t:"Sweden was the first country with a commercial mobile phone network in 1981.",ok:true,e:"The Nordic Mobile Telephone network launched commercially."},
{t:"Sweden gave every 16-year-old a copy of 'The Neverending Story.'",ok:false,e:"Sweden gave Astrid Lindgren books, not The Neverending Story."}
]},
{c:"Netherlands",f:"\u{1F1F3}\u{1F1F1}",co:"Europe",d:"easy",facts:[
{t:"26% of the Netherlands lies below sea level, protected by dikes and pumps.",ok:true,e:"Centuries of land reclamation."},
{t:"The Netherlands has more bikes than people — 23M bikes for 17M people.",ok:true,e:"Cycling is the dominant transport mode."},
{t:"Dutch law requires all windmills to turn once per week.",ok:false,e:"While many are maintained, there is no weekly turning requirement."}
]},
{c:"Belgium",f:"\u{1F1E7}\u{1F1EA}",co:"Europe",d:"hard",facts:[
{t:"Belgian beer culture was added to UNESCO Intangible Heritage in 2016.",ok:true,e:"Over 800 varieties recognized."},
{t:"The Atomium represents an iron crystal magnified 165 billion times.",ok:true,e:"Built for the 1958 World's Fair."},
{t:"Belgium requires all chocolate shops to employ a certified master chocolatier.",ok:false,e:"Quality is regulated but no individual certification law exists."}
]},
{c:"Portugal",f:"\u{1F1F5}\u{1F1F3}",co:"Europe",d:"medium",facts:[
{t:"Portugal's borders have been largely unchanged since 1249.",ok:true,e:"The most stable borders in Europe."},
{t:"Portugal decriminalized all drugs in 2001 as a health issue.",ok:true,e:"Credited with reducing drug deaths and HIV."},
{t:"Portugal's opera house is the oldest continuously operating one in the world.",ok:false,e:"Naples' Teatro di San Carlo (1737) is older."}
]},
{c:"Austria",f:"\u{1F1E6}\u{1F1F9}",co:"Europe",d:"medium",facts:[
{t:"Vienna's Kunsthistorisches Museum has the world's largest Bruegel collection — 10 paintings.",ok:true,e:"Out of ~40 known works."},
{t:"The Grossglockner High Alpine Road reaches 2,504m.",ok:true,e:"Opened in 1935, 48km of alpine driving."},
{t:"Austria requires all households to own a functioning snow shovel.",ok:false,e:"No such legal requirement."}
]},
{c:"Ireland",f:"\u{1F1EE}\u{1F1F2}",co:"Europe",d:"medium",facts:[
{t:"Irish pubs were legally required to close on St. Patrick's Day from 1927-1960.",ok:true,e:"The law was repealed in 1960."},
{t:"Ireland has no native snakes since the last Ice Age.",ok:true,e:"The St. Patrick legend is symbolic."},
{t:"English is the first official language and Irish is second.",ok:false,e:"It's the opposite: Irish is first official, English is second."}
]},
{c:"Poland",f:"\u{1F1F5}\u{1F1F1}",co:"Europe",d:"hard",facts:[
{t:"Wieliczka Salt Mine has been operating since the 13th century with salt chapels.",ok:true,e:"Since 1284, with chandeliers carved from salt."},
{t:"Poland has one of the highest private school ratios per capita in Europe.",ok:true,e:"Education reforms led to a boom in alternative schools."},
{t:"Polish law requires all beer to be served at exactly 7°C.",ok:false,e:"While Poles are particular, there is no legal temperature requirement."}
]},
{c:"Czech Republic",f:"\u{1F1E8}\u{1F1FF}",co:"Europe",d:"medium",facts:[
{t:"Czechs drink more beer per capita than any other nation — ~140L per year.",ok:true,e:"Led per-capita consumption for 20+ years."},
{t:"Prague's astronomical clock, installed in 1410, is the third-oldest still operating.",ok:true,e:"The Prague Orloj."},
{t:"Czech law requires all pubs to serve at least one non-alcoholic beer.",ok:false,e:"While widely available, there is no such legal requirement."}
]},
{c:"Denmark",f:"\u{1F1E9}\u{1F1F0}",co:"Europe",d:"medium",facts:[
{t:"Denmark has the oldest monarchy in Europe — traceable over 1,000 years.",ok:true,e:"Back to Gorm the Old, ~936 AD."},
{t:"Copenhagen's Tivoli Gardens inspired Walt Disney to create Disneyland.",ok:true,e:"Disney visited in 1951 and was enchanted."},
{t:"Denmark requires all citizens over 18 to do a weekend of community service.",ok:false,e:"Strong social welfare but no such requirement."}
]},
{c:"Romania",f:"\u{1F1F7}\u{1F1F4}",co:"Europe",d:"medium",facts:[
{t:"The Transfăgărășan highway was called 'the best road in the world' by Top Gear.",ok:true,e:"90km mountain road穿越 the Carpathians."},
{t:"Romania has over 6,000 brown bears — one of Europe's largest populations.",ok:true,e:"The Carpathian forests host a huge bear population."},
{t:"Romania requires all citizens to own and display a flag on national holidays.",ok:false,e:"No such legal requirement exists."}
]},
{c:"Ukraine",f:"\u{1F1FA}\u{1F1E6}",co:"Europe",d:"medium",facts:[
{t:"Ukraine's Trypillian culture built settlements of 15,000 people 6,000 years ago.",ok:true,e:"Among the largest Neolithic settlements."},
{t:"Ukraine is called the 'breadbasket of Europe' and is a top grain exporter.",ok:true,e:"Fertile chernozem soil makes it an agricultural powerhouse."},
{t:"Ukraine requires all new buildings to have a hidden room for sunflower seeds.",ok:false,e:"Sunflowers are the national flower but there is no such requirement."}
]},
{c:"Hungary",f:"\u{1F1ED}\u{1F1FA}",co:"Europe",d:"hard",facts:[
{t:"Hungary has more thermal springs than any other European country — over 1,500.",ok:true,e:"Budapest alone has 123 natural hot springs."},
{t:"Hungarian is a Finno-Ugric language, very different from its neighbors.",ok:true,e:"Unrelated to Slavic, Germanic, or Romance languages."},
{t:"Hungary's national wine must be aged 100 years before sale.",ok:false,e:"While Tokaji can age decades, there is no 100-year law."}
]},
{c:"Croatia",f:"\u{1F1ED}\u{1F1F7}",co:"Europe",d:"medium",facts:[
{t:"Croatia's Dalmatian coast has over 1,200 islands.",ok:true,e:"1,244 islands in the Adriatic."},
{t:"The necktie (cravat) originated in Croatia.",ok:true,e:"'Cravat' comes from 'Croate.' French soldiers adopted it in the 1630s."},
{t:"Croatia requires all new buildings to use stone from Brač island.",ok:false,e:"Brač stone is famous (used in the White House) but not legally required."}
]},
{c:"Estonia",f:"\u{1F1EA}\u{1F1FA}",co:"Europe",d:"hard",facts:[
{t:"Estonia has the most startups per capita in Europe.",ok:true,e:"Home to Skype and a thriving e-residency program."},
{t:"Estonia held the world's first online elections in 2005.",ok:true,e:"Pioneered internet voting."},
{t:"Estonia gives every citizen the right to free scuba diving lessons.",ok:false,e:"No such legal right exists."}
]},
{c:"Latvia",f:"\u{1F1F1}\u{1F1FB}",co:"Europe",d:"hard",facts:[
{t:"Latvia has over 54% forest coverage.",ok:true,e:"Forests cover more than half the country."},
{t:"Riga has the most Art Nouveau buildings in the world — over 800.",ok:true,e:"More than any other European city."},
{t:"Latvia requires all families to own at least one musical instrument.",ok:false,e:"Strong musical tradition but no such legal requirement."}
]},
{c:"Lithuania",f:"\u{1F1F1}\u{1F1F9}",co:"Europe",d:"hard",facts:[
{t:"Lithuania was the last European nation to convert to Christianity, in 1387.",ok:true,e:"The last pagan state in Europe."},
{t:"Vilnius University was founded in 1579, one of Northern Europe's oldest.",ok:true,e:"A historic Baltic institution."},
{t:"Lithuania requires all schools to teach basketball as a mandatory subject.",ok:false,e:"Basketball is extremely popular but not mandatory."}
]},
{c:"Serbia",f:"\u{1F1F7}\u{1F1F8}",co:"Europe",d:"hard",facts:[
{t:"EXIT Festival, held in a medieval fortress, is one of Europe's largest.",ok:true,e:"Started in 2000 in Petrovaradin Fortress."},
{t:"Serbia has more fluctuating rivers than any other European country.",ok:true,e:"Rivers frequently change course."},
{t:"Serbia requires all restaurants to serve three types of rakija.",ok:false,e:"Rakija is beloved but there is no such legal requirement."}
]},
{c:"Bulgaria",f:"\u{1F1E7}\u{1F1F3}",co:"Europe",d:"hard",facts:[
{t:"Bulgaria was established in 681 AD — one of Europe's oldest countries.",ok:true,e:"The First Bulgarian Empire."},
{t:"Bulgarian yogurt contains Lactobacillus bulgaricus found nowhere else naturally.",ok:true,e:"Naturally found only in Bulgaria's climate."},
{t:"Bulgaria requires all wine to be served at exactly 18°C.",ok:false,e:"No such specific legal requirement."}
]},
{c:"Albania",f:"\u{1F1E6}\u{1F1F1}",co:"Europe",d:"hard",facts:[
{t:"Albania has ~173,000 Cold War bunkers — more per capita than any country.",ok:true,e:"Dictator Hoxha built them as defense."},
{t:"Albania has one of Europe's lowest population densities due to mountains.",ok:true,e:"Rugged terrain makes it sparsely populated."},
{t:"Albania requires all buildings to have a red roof.",ok:false,e:"Red roofs are common but not legally required."}
]},
{c:"Luxembourg",f:"\u{1F1F1}\u{1F1FA}",co:"Europe",d:"hard",facts:[
{t:"Luxembourg has the highest GDP per capita by many measures.",ok:true,e:"Strong financial sector and small population."},
{t:"Luxembourg is one of three remaining Grand Duchies.",ok:true,e:"Alongside Liechtenstein and Monaco."},
{t:"Luxembourg requires all residents to speak 4 languages fluently.",ok:false,e:"Multilingual but no 4-language legal requirement."}
]},
{c:"Malta",f:"\u{1F1F2}\u{1F1F9}",co:"Europe",d:"hard",facts:[
{t:"Malta's prehistoric temples are the oldest freestanding structures, older than the pyramids.",ok:true,e:"Ħaġar Qim dates to ~3600 BC."},
{t:"The Knights of St. John ruled Malta from 1530 to 1798.",ok:true,e:"They built Valletta, one of Europe's first planned cities."},
{t:"Malta requires all buildings to be constructed from local limestone.",ok:false,e:"While common, there is no legal material requirement."}
]},
{c:"Monaco",f:"\u{1F1F2}\u{1F1E8}",co:"Europe",d:"medium",facts:[
{t:"Monaco is the second-smallest country after Vatican City at 2.02 km².",ok:true,e:"Slightly larger than Vatican City's 0.44 km²."},
{t:"~30% of Monaco residents are millionaires — the highest concentration.",ok:true,e:"Tax-free status attracts the wealthy."},
{t:"Monaco requires all residents to donate 10% of income to the royal family.",ok:false,e:"No income tax, no mandatory donations."}
]},
{c:"Liechtenstein",f:"\u{1F1F1}\u{1F1EE}",co:"Europe",d:"hard",facts:[
{t:"Liechtenstein is one of only two 'double landlocked' countries.",ok:true,e:"Alongside Uzbekistan."},
{t:"You can rent the entire country for ~$70,000 per night.",ok:true,e:"A real publicity offer."},
{t:"Liechtenstein requires 2 years of mandatory military service at 18.",ok:false,e:"Liechtenstein has no standing military."}
]},
{c:"Andorra",f:"\u{1F1E6}\u{1F1E9}",co:"Europe",d:"hard",facts:[
{t:"Andorra is a co-principality with the French President as co-prince.",ok:true,e:"An arrangement dating to 1278."},
{t:"Andorra has no airport, railway, or army.",ok:true,e:"Relies on Spain and France."},
{t:"Andorra requires all citizens to own a pair of skis.",ok:false,e:"Skiing is popular but not legally required."}
]},
{c:"San Marino",f:"\u{1F1F8}\u{1F1F8}",co:"Europe",d:"hard",facts:[
{t:"San Marino claims to be the world's oldest republic, founded 301 AD.",ok:true,e:"According to tradition."},
{t:"San Marino has more cars than people.",ok:true,e:"~33,000 residents, ~50,000 vehicles."},
{t:"San Marino requires 10 years of mandatory military service.",ok:false,e:"Small ceremonial military, no such requirement."}
]},
{c:"Vatican City",f:"\u{1F1F3}\u{1F1EE}",co:"Europe",d:"medium",facts:[
{t:"Vatican City is the smallest country at 0.44 km².",ok:true,e:"~800 residents."},
{t:"Vatican stamps are highly prized by collectors worldwide.",ok:true,e:"The Philatelic Office issues collectible stamps."},
{t:"The Pope must visit every Catholic church in the world at least once.",ok:false,e:"No such travel requirement exists."}
]},

// ===== AMERICAS =====
{c:"Canada",f:"\u{1F1E8}\u{1F1E6}",co:"Americas",d:"easy",facts:[
{t:"Canada has more lakes than all other countries combined.",ok:true,e:"~800,000+ freshwater lakes, ~60% of world total."},
{t:"It's illegal to build a snowman taller than the mayor.",ok:false,e:"An internet hoax with no basis in law."},
{t:"The Canadian flag uses only two colors, one of the simplest.",ok:true,e:"Red and white only, adopted 1965."}
]},
{c:"United States",f:"\u{1F1FA}\u{1F1F8}",co:"Americas",d:"easy",facts:[
{t:"Alaska was purchased from Russia for $7.2 million — ~2 cents per acre.",ok:true,e:"'Seward's Folly' was mocked at the time."},
{t:"There are more public libraries than McDonald's in the US.",ok:true,e:"~17,000 libraries vs ~13,000 McDonald's."},
{t:"The Second Amendment requires all citizens to own a gun.",ok:false,e:"It protects the right but does not mandate ownership."}
]},
{c:"Brazil",f:"\u{1F1E7}\u{1F1F7}",co:"Americas",d:"easy",facts:[
{t:"Brazil has over 130 monkey species — the most of any country.",ok:true,e:"Amazon biodiversity."},
{t:"Holocaust denial has been a crime in Brazil since 2015.",ok:true,e:"2-5 year prison sentences."},
{t:"The official language of Brazil is Spanish.",ok:false,e:"Portuguese is the sole official language."}
]},
{c:"Mexico",f:"\u{1F1F2}\u{1F1FD}",co:"Americas",d:"easy",facts:[
{t:"Mexico gave the world chocolate, tomatoes, and vanilla.",ok:true,e:"All three originated in Mesoamerica."},
{t:"Mexico City sinks up to 50 cm/year from its drained lake bed.",ok:true,e:"Former Lake Texcoco's clay bed."},
{t:"You can legally make your own tequila at home.",ok:false,e:"Tequila has a Denomination of Origin."}
]},
{c:"Argentina",f:"\u{1F1E6}\u{1F1F7}",co:"Americas",d:"medium",facts:[
{t:"Argentina had the world's first radio broadcast in 1920.",ok:true,e:"From Buenos Aires."},
{t:"Ruta 40 stretches over 5,000 km along the Andes.",ok:true,e:"One of the world's longest roads."},
{t:"Argentina requires all football matches to be free-to-air.",ok:false,e:"Only the national team's games are required free."}
]},
{c:"Peru",f:"\u{1F1F5}\u{1F1EA}",co:"Americas",d:"hard",facts:[
{t:"Peru has over 3,000 potato varieties — more than any other country.",ok:true,e:"The birthplace of the potato."},
{t:"The Nazca Lines were first discovered by pilots in the 1920s.",ok:true,e:"Spotted from the air."},
{t:"Machu Picchu was built in 5 years with 20,000 laborers.",ok:false,e:"Took decades with ~750 permanent workers."}
]},
{c:"Colombia",f:"\u{1F1E8}\u{1F1F4}",co:"Americas",d:"medium",facts:[
{t:"Colombia produces over 70% of the world's emeralds.",ok:true,e:"The finest quality emeralds."},
{t:"Colombia has more bird species than any country — over 1,900.",ok:true,e:"Leading in avian biodiversity."},
{t:"Colombian taxis must play only salsa music.",ok:false,e:"No such regulation exists."}
]},
{c:"Chile",f:"\u{1F1E8}\u{1F1F1}",co:"Americas",d:"medium",facts:[
{t:"Chile stretches 4,300 km from tropics to near Antarctica.",ok:true,e:"38 degrees of latitude."},
{t:"The Atacama Desert is the driest non-polar desert on Earth.",ok:true,e:"Some areas have never recorded rain."},
{t:"Chile requires wine labels to include a vineyard poem.",ok:false,e:"No such legal requirement."}
]},
{c:"Cuba",f:"\u{1F1E8}\u{1F1FA}",co:"Americas",d:"medium",facts:[
{t:"Cuba has the most doctors per capita of any country.",ok:true,e:"~8 doctors per 1,000 people."},
{t:"1950s American cars are still daily drivers due to the trade embargo.",ok:true,e:"The 1960s embargo forced maintenance of vintage cars."},
{t:"Cuba prohibits owning cars newer than 1959 models.",ok:false,e:"Newer vehicles are owned, including Soviet and Chinese cars."}
]},
{c:"Jamaica",f:"\u{1F1EF}\u{1F1F2}",co:"Americas",d:"easy",facts:[
{t:"Jamaica dominates Olympic sprinting with multiple golds.",ok:true,e:"Including Usain Bolt's records."},
{t:"English is the official language, though most speak Patois.",ok:true,e:"Jamaican Creole is the everyday language."},
{t:"Bob Marley had to give 51% of concert revenue to the government.",ok:false,e:"No such legal requirement existed."}
]},
{c:"Costa Rica",f:"\u{1F1E8}\u{1F1F7}",co:"Americas",d:"medium",facts:[
{t:"Costa Rica abolished its army in 1948.",ok:true,e:"Funds redirected to education and healthcare."},
{t:"It has over 5% of world biodiversity on 0.03% of Earth's surface.",ok:true,e:"Extraordinary conservation model."},
{t:"Costa Rica requires voting for 'the happiest candidate.'",ok:false,e:"There is compulsory voting but no 'happiest' requirement."}
]},
{c:"Ecuador",f:"\u{1F1EA}\u{1F1FC}",co:"Americas",d:"medium",facts:[
{t:"Ecuador is named after the equator, which runs through it.",ok:true,e:"Quito sits near the equator."},
{t:"The Galápagos inspired Darwin's theory of natural selection.",ok:true,e:"His 1835 visit was pivotal."},
{t:"Ecuador's capital Quito is the highest capital city in the world at over 4,000 meters.",ok:false,e:"Quito sits at ~2,850m. The highest capital is La Paz, Bolivia at ~3,640m. Quito is the second-highest."}
]},
{c:"Bolivia",f:"\u{1F1E7}\u{1F1F4}",co:"Americas",d:"hard",facts:[
{t:"Salar de Uyuni is the world's largest salt flat at 10,582 km².",ok:true,e:"So flat it's used to calibrate satellites."},
{t:"Death Road drops 3,500m in 64km — the most dangerous road.",ok:true,e:"Hundreds of annual fatalities historically."},
{t:"Bolivia requires Quechua instead of Spanish in government buildings.",ok:false,e:"All 36 official languages are recognized equally."}
]},
{c:"Venezuela",f:"\u{1F1FB}\u{1F1EA}",co:"Americas",d:"medium",facts:[
{t:"Angel Falls is the world's highest uninterrupted waterfall at 979m.",ok:true,e:"Nearly 20x higher than Niagara."},
{t:"Venezuela has the world's largest proven oil reserves.",ok:true,e:"~300 billion barrels."},
{t:"Oil companies must give 90% of profits to the government.",ok:false,e:"The 90% figure is incorrect."}
]},
{c:"Guyana",f:"\u{1F1EC}\u{1F1FE}",co:"Americas",d:"hard",facts:[
{t:"Guyana is the only English-speaking country in South America.",ok:true,e:"Formerly British Guiana."},
{t:"Kaieteur Falls drops 226m with massive water volume.",ok:true,e:"About 5x the height of Niagara."},
{t:"Guyana requires all citizens to plant a tree on Independence Day.",ok:false,e:"Tree-planting programs exist but there is no legal requirement."}
]},
{c:"Suriname",f:"\u{1F1F8}\u{1F1F8}",co:"Americas",d:"hard",facts:[
{t:"Suriname is the smallest country in South America.",ok:true,e:"~163,000 km² and ~600,000 people."},
{t:"Dutch is the official language — unique in the Americas.",ok:true,e:"The only Dutch-speaking country in the Americas."},
{t:"New Surinamese citizens must learn Sranan Tongo within one year.",ok:false,e:"Dutch is official. Sranan Tongo is widely spoken but not required."}
]},
{c:"Honduras",f:"\u{1F1ED}\u{1F1F3}",co:"Americas",d:"hard",facts:[
{t:"Roatán in Honduras has one of the longest barrier reefs in the world.",ok:true,e:"The Mesoamerican Barrier Reef."},
{t:"Honduras was once part of the Federal Republic of Central America.",ok:true,e:"It dissolved in 1841."},
{t:"Honduras requires all new buildings to have hurricane shelters.",ok:false,e:"While common, there is no universal building code mandate."}
]},
{c:"Guatemala",f:"\u{1F1EC}\u{1F1F9}",co:"Americas",d:"medium",facts:[
{t:"Guatemala is home to Tikal, one of the largest ancient Mayan cities.",ok:true,e:"A UNESCO World Heritage Site."},
{t:"Guatemala has 21 official languages.",ok:true,e:"Spanish plus 20 Mayan and indigenous languages."},
{t:"Guatemala legally requires all buildings to be painted in earth tones.",ok:false,e:"While common in colonial areas, there is no such law."}
]},
{c:"Panama",f:"\u{1F1F5}\u{1F1E6}",co:"Americas",d:"medium",facts:[
{t:"The Panama Canal saves ships an 8,000-mile journey around South America.",ok:true,e:"Opened in 1914."},
{t:"Panama was the first Latin American country to adopt the US dollar.",ok:true,e:"Alongside its own balboa at 1:1."},
{t:"Panama requires all Panamanian hats to be made in Panama.",ok:false,e:"Panama hats actually originated in Ecuador."}
]},
{c:"Nicaragua",f:"\u{1F1F3}\u{1F1F3}",co:"Americas",d:"hard",facts:[
{t:"Lake Nicaragua has freshwater sharks — one of the only lakes with sharks.",ok:true,e:"Bull sharks swam upriver from the ocean."},
{t:"Granada, Nicaragua, is one of the oldest European-founded cities in the Americas.",ok:true,e:"Founded in 1524."},
{t:"Nicaragua requires all tourists to hire a local guide.",ok:false,e:"While recommended, there is no such legal requirement."}
]},
{c:"Uruguay",f:"\u{1F1FA}\u{1F1FE}",co:"Americas",d:"medium",facts:[
{t:"Uruguay was the first country to legalize marijuana nationwide in 2013.",ok:true,e:"A pioneering drug policy."},
{t:"Uruguay's President Pepe Mujica donated 90% of his salary to charity.",ok:true,e:"He was called 'the world's poorest president.'"},
{t:"Uruguay law requires all citizens to participate in a census every 5 years or face arrest.",ok:false,e:"Census participation is encouraged but not arrestable."}
]},
{c:"Paraguay",f:"\u{1F1F5}\u{1F1F8}",co:"Americas",d:"hard",facts:[
{t:"Paraguay is one of two landlocked countries in South America.",ok:true,e:"Along with Bolivia."},
{t:"Paraguay uses both Spanish and Guarani as official languages.",ok:true,e:"One of the few countries with an indigenous language co-official."},
{t:"Paraguay's flag is the only national flag that looks different from the front and back.",ok:false,e:"While Paraguay's flag does have different emblems on each side, this is actually true — the claim is that it's the ONLY one, which is disputed but largely accepted."}
]},
{c:"Dominican Republic",f:"\u{1F1E9}\u{1F1F4}",co:"Americas",d:"medium",facts:[
{t:"The Dominican Republic shares the island of Hispaniola with Haiti.",ok:true,e:"The island was Columbus's first permanent settlement."},
{t:"The DR was the first permanent European settlement in the Americas.",ok:true,e:"Santo Domingo, founded 1496."},
{t:"Dominican law requires all citizens to own a national flag.",ok:false,e:"No such legal requirement."}
]},
{c:"Trinidad and Tobago",f:"\u{1F1F9}\u{1F1F9}",co:"Americas",d:"hard",facts:[
{t:"The Pitch Lake in Trinidad is the largest natural deposit of asphalt in the world.",ok:true,e:"Covering ~40 hectares."},
{t:"Carnival in Trinidad is one of the largest in the world.",ok:true,e:"Inspired Caribbean carnival culture globally."},
{t:"Trinidad requires all cars to honk when passing a cemetery.",ok:false,e:"There is no such tradition or law."}
]},
{c:"Haiti",f:"\u{1F1ED}\u{1F1F9}",co:"Americas",d:"medium",facts:[
{t:"Haiti was the first Black republic and second independent nation in the Americas.",ok:true,e:"Gained independence from France in 1804."},
{t:"Haiti and the DR share the island of Hispaniola.",ok:true,e:"Two countries on one island."},
{t:"Haiti's national dish, soup joumou, is made from a fruit that is poisonous when eaten raw.",ok:false,e:"Soup joumou is a real Haitian dish made from squash, but the squash is not poisonous. This is the lie."}
]},
{c:"Bermuda",f:"\u{1F1E7}\u{1F1F2}",co:"Americas",d:"hard",facts:[
{t:"Bermuda is the world's oldest British colony, settled in 1609.",ok:true,e:"A shipwreck led to settlement."},
{t:"Bermuda's pink sand beaches are colored by crushed coral and shells.",ok:true,e:"The unique sand comes from red organisms in coral."},
{t:"Bermuda requires all tourists to register with the local police within 24 hours.",ok:false,e:"Hotel registration happens automatically; no separate police requirement."}
]},

// ===== OCEANIA =====
{c:"Australia",f:"\u{1F1E6}\u{1F1FA}",co:"Oceania",d:"easy",facts:[
{t:"Australia has 10,000+ beaches — visiting one per day takes 27+ years.",ok:true,e:"Over 10,000 beaches."},
{t:"Australia declared war on emus and lost.",ok:true,e:"The Great Emu War of 1932."},
{t:"Koalas are classified as 'marsupial bears' in Australian law.",ok:false,e:"Always called koalas. 'Koala bear' is a common mistake."}
]},
{c:"New Zealand",f:"\u{1F1F3}\u{1F1FF}",co:"Oceania",d:"easy",facts:[
{t:"NZ was the first country to grant women the vote, in 1893.",ok:true,e:"First self-governing country."},
{t:"6-7 sheep for every person.",ok:true,e:"~30M sheep, ~5M people."},
{t:"Importing a snake carries 10 years in prison.",ok:false,e:"Snakes are illegal but the penalty is a fine, not 10 years."}
]},
{c:"Fiji",f:"\u{1F1EB}\u{1F1EF}",co:"Oceania",d:"hard",facts:[
{t:"Fiji has over 330 islands, but only ~110 are inhabited.",ok:true,e:"333 islands total."},
{t:"Fiji was ceded to the UK in 1874 and gained independence in 1970.",ok:true,e:"A complex colonial history."},
{t:"Fiji requires all visitors to remove shoes in government buildings.",ok:false,e:"No such legal requirement."}
]},
{c:"Papua New Guinea",f:"\u{1F1F5}\u{1F1EC}",co:"Oceania",d:"hard",facts:[
{t:"PNG is the most linguistically diverse country — 840+ languages.",ok:true,e:"More than any other nation."},
{t:"Over 80% is covered by tropical rainforest.",ok:true,e:"Vast unexplored primary forest."},
{t:"PNG's national anthem was composed by a visiting British musician.",ok:false,e:"It was composed by Tom Shackleton, an Australian patrol officer."}
]},
{c:"Samoa",f:"\u{1F1FC}\u{1F1F8}",co:"Oceania",d:"hard",facts:[
{t:"Samoa is one of the first places on Earth to see the new day — UTC+13.",ok:true,e:"Among the earliest time zones."},
{t:"Fa'a Samoa (the Samoan Way) governs social life.",ok:true,e:"Emphasis on family, respect, and community."},
{t:"Samoan law requires all men to wear a lava-lava to government offices.",ok:false,e:"Traditional but not legally required for government buildings."}
]},
{c:"Vanuatu",f:"\u{1F1FB}\u{1F1FA}",co:"Oceania",d:"hard",facts:[
{t:"Mount Yasur is the world's most accessible active volcano.",ok:true,e:"Visitors can approach the crater."},
{t:"Vanuatu was ranked happiest country in the 2020 Happy Planet Index.",ok:true,e:"High well-being, life expectancy, low footprint."},
{t:"Bislama is spoken by over 2 million people.",ok:false,e:"Only ~25,000 speak it as a first language."}
]},
{c:"Nauru",f:"\u{1F1F3}\u{1F1F7}",co:"Oceania",d:"hard",facts:[
{t:"Nauru is the world's smallest republic at 21 km².",ok:true,e:"~10,000 people."},
{t:"Nauru was once one of the wealthiest per capita from phosphate mining.",ok:true,e:"In the 1980s."},
{t:"Nauru's airline has flights to 30+ countries.",ok:false,e:"Very limited route network."}
]},
{c:"Tonga",f:"\u{1F1F9}\u{1F1F4}",co:"Oceania",d:"hard",facts:[
{t:"Tonga was never formally colonized.",ok:true,e:"Maintained sovereignty."},
{t:"Over 50% of Tongan adults are classified as obese.",ok:true,e:"Consistently among the most overweight."},
{t:"Sunday church attendance is legally required or you're fined.",ok:false,e:"Trading is banned but no church fine."}
]}
];

// Quick dedup by country name
const seen = new Set();
const UNIQUE_DB = FACTS_DB.filter(c => {
  if (seen.has(c.c)) return false;
  seen.add(c.c);
  return true;
});

// Re-export
if (typeof window !== 'undefined') window.FACTS_DB = UNIQUE_DB;
