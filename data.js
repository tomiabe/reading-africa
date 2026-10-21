// ============================================================
// Reading Africa: data and icon definitions (vanilla port)
// ============================================================

// Lucide-style inline SVG icons (stroke = currentColor)
const ICONS = {
  home: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  compass: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
  fileText: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>',
  map: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>',
  newspaper: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>',
  bookOpen: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>',
  barChart: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>',
  film: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/></svg>',
  lightbulb: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
  arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  arrowLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>',
  arrowUpRight: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>',
  newspaperBig: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>',
  bookOpenBig: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>',
  barChartBig: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>',
  filmBig: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/></svg>',
  alertCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>'
};

// Navigation items (mirrors Sidebar.tsx, regrouped into Start / Library / Project)
const NAV_ITEMS = [
  { type: 'group', label: 'Start' },
  { id: 'manifesto', label: 'The Idea', icon: 'home' },
  { id: 'start_here', label: 'Start Here', icon: 'compass' },
  { id: 'countries', label: 'Country Gateways', icon: 'map' },
  { id: 'journalists', label: 'For Journalists', icon: 'fileText' },
  { type: 'group', label: 'Library' },
  { id: 'media', label: 'Media & Journalism', icon: 'newspaper' },
  { id: 'books', label: 'Books & Thinking', icon: 'bookOpen' },
  { id: 'research', label: 'Research & Data', icon: 'barChart' },
  { id: 'culture', label: 'Culture', icon: 'film' },
  { type: 'group', label: 'Project' },
  { id: 'contribute', label: 'Contribute', icon: 'lightbulb' },
];

// --- START HERE RESOURCES ---

const START_HERE_MEDIA = [
  {
    id: 'sh-m1',
    title: 'African Arguments',
    authorOrSource: 'Pan-African',
    description: 'Sharp essays on African politics, economics, and society. Excellent for nuance and long-form thinking.',
    type: 'journalism',
    tags: ['Essays', 'Politics'],
    imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sh-m2',
    title: 'The Continent',
    authorOrSource: 'Pan-African',
    description: 'Weekly newsletter offering reported stories and analysis across African countries. Strong on political context.',
    type: 'journalism',
    tags: ['Newsletter', 'Politics'],
    imageUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sh-m3',
    title: 'Premium Times',
    authorOrSource: 'Nigeria',
    description: 'Investigative reporting on governance, corruption, and accountability. A model for public-interest journalism.',
    type: 'journalism',
    tags: ['Investigative', 'Governance'],
    imageUrl: 'https://images.unsplash.com/photo-1624969862293-b749659ccc4e?auto=format&fit=crop&q=80&w=800'
  }
];

const START_HERE_BOOKS = [
  {
    id: 'sh-b1',
    title: "Africa's Long Road Since Independence",
    authorOrSource: 'Morten Jerven',
    description: 'Challenges lazy assumptions about African economic failure and how data is interpreted.',
    type: 'book',
    tags: ['Economics', 'History'],
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sh-b2',
    title: 'How Europe Underdeveloped Africa',
    authorOrSource: 'Walter Rodney',
    description: 'Foundational for understanding structural inequalities and historical power dynamics.',
    type: 'book',
    tags: ['History', 'Political Economy'],
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800'
  }
];

const START_HERE_DATA = [
  {
    id: 'sh-d1',
    title: 'African Development Bank (AfDB)',
    authorOrSource: 'Pan-African',
    description: 'Key data and reports on infrastructure, development finance, and regional integration.',
    type: 'data',
    tags: ['Development', 'Finance'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  }
];

// --- COUNTRIES ---

const COUNTRIES = [
  {
    id: 'ng',
    name: 'Nigeria',
    region: 'West Africa',
    imageUrl: 'https://images.unsplash.com/photo-1618255928646-64155694249a?auto=format&fit=crop&q=80&w=1200',
    blurb: 'Africa\u2019s most populous country and largest economy. Frequently used as a stand-in for "Africa" in global media, erasing its specificity and the diversity of the continent.',
    contextMatters: "Nigeria is often reduced to oil wealth, Nollywood, or security challenges. With over 250 ethnic groups, deep regional differences, and a complex federal system, Nigeria cannot be understood through single narratives.",
    misunderstandings: [
      "Lagos is not Nigeria \u2014 The commercial capital dominates media attention, but represents less than 10% of the population",
      "Oil wealth \u2260 national prosperity \u2014 Nigeria is oil-rich but most Nigerians see little benefit; resource curse dynamics are critical context",
      "Nollywood's success doesn't represent the film industry's infrastructure \u2014 It's a story of hustle and informal networks, not institutional support",
      "Regional differences are political, not just cultural \u2014 North-South divides shape everything from elections to economic policy",
      "Nigeria's tech scene is not 'Africa's Silicon Valley' \u2014 It's one of several emerging tech hubs, each with different strengths"
    ],
    media: [
      { id: 'ng-m1', title: 'Premium Times', description: "Nigeria's leading investigative outlet. Essential for understanding governance, corruption, and accountability.", type: 'journalism' },
      { id: 'ng-m2', title: 'Stears', description: "Deep analysis of Nigerian politics, economy, and society with strong data journalism. Best source for economic policy.", type: 'journalism' },
      { id: 'ng-m3', title: 'The Cable', description: "Fast, reliable reporting on politics and breaking news. Good for staying current on national developments.", type: 'journalism' }
    ],
    books: [
      { id: 'ng-b1', title: 'The Trouble with Nigeria', authorOrSource: 'Chinua Achebe', description: "Short, sharp, and still painfully relevant for conversations about leadership, corruption, and civic culture.", type: 'book' },
      { id: 'ng-b2', title: 'This House Has Fallen', authorOrSource: 'Karl Maier', description: "Explains Nigeria's post-independence political economy and the roots of contemporary challenges.", type: 'book' },
      { id: 'ng-b3', title: 'Nigeria: What Everyone Needs to Know', authorOrSource: 'John Campbell & Matthew Page', description: "Accessible overview of Nigerian history, politics, and society for those seeking foundational knowledge.", type: 'book' }
    ],
    data: [
      { id: 'ng-d1', title: 'National Bureau of Statistics', description: "Primary source for demographic and economic data. More granular and updated than many international databases.", type: 'data' },
      { id: 'ng-d2', title: 'BudgIT', description: "Makes Nigerian budget data accessible and understandable. Excellent for tracking public spending and accountability.", type: 'data' }
    ],
    culture: [
      { id: 'ng-c1', title: "Fela Kuti's Afrobeat", description: "Not just music\u2014a form of political resistance and social commentary that shaped Nigerian public discourse for decades.", type: 'audio' },
      { id: 'ng-c2', title: 'Half of a Yellow Sun', authorOrSource: 'Chimamanda Ngozi Adichie', description: "Essential for understanding the Biafran War and its lasting impact on Nigerian identity and politics.", type: 'book' },
      { id: 'ng-c3', title: 'Nollywood (Industry)', description: "Study it as informal economy, distribution innovation, and cultural soft power\u2014not just entertainment.", type: 'video' }
    ],
    specificity: [
      "North vs. South (religion, economy, politics)",
      "Federal vs. state governance",
      "Oil-producing regions vs. agricultural regions",
      "Pre- vs. post-1999 democratic transition",
      "Different presidential administrations (policy continuity is rare)"
    ]
  },
  {
    id: 'ke',
    name: 'Kenya',
    region: 'East Africa',
    imageUrl: 'https://images.unsplash.com/photo-1547471080-7528bca79ea8?auto=format&fit=crop&q=80&w=1200',
    blurb: 'Often framed as East Africa\u2019s economic anchor and a model of stability, obscuring complex ethnic politics, regional inequalities, and a history of contested elections.',
    contextMatters: "It's a tech hub (M-Pesa, Nairobi's startup scene) but also an agricultural economy where most people are rural. Kenya's political economy is shaped by colonial land dispossession and ethnic patronage networks.",
    misunderstandings: [
      "Nairobi \u2260 Kenya \u2014 The capital's tech scene and middle class don't represent rural realities for most Kenyans",
      "M-Pesa's success is about infrastructure gaps, not just innovation \u2014 Mobile money filled a void left by poor banking infrastructure",
      "Stable democracy ignores electoral violence \u2014 2007-08 post-election violence killed over 1,000 people; elections remain tense",
      "Tourism is significant, but not the whole economy \u2014 Agriculture (tea, coffee, horticulture) employs far more people",
      "Ethnic politics are not 'tribal' or irrational \u2014 They're rational responses to winner-take-all political systems and resource competition"
    ],
    media: [
      { id: 'ke-m1', title: 'The Elephant', description: "Long-form investigative and analytical journalism focused on democracy, history, and political economy.", type: 'journalism' },
      { id: 'ke-m2', title: 'Nation Media Group', description: "Kenya's largest media house. Mainstream coverage of politics, business, and society.", type: 'journalism' },
      { id: 'ke-m3', title: 'The Star', description: "Independent newspaper with strong political reporting. Good for opposition perspectives and investigative work.", type: 'journalism' }
    ],
    books: [
      { id: 'ke-b1', title: "It's Our Turn to Eat", authorOrSource: 'Michela Wrong', description: "Essential for understanding corruption, ethnic politics, and why institutional reform is so difficult in Kenya.", type: 'book' },
      { id: 'ke-b2', title: 'Kenya: Between Hope and Despair', authorOrSource: "Godwin Murunga & Shadrack Nasong'o", description: "Academic but accessible collection on Kenyan politics, economy, and society since independence.", type: 'book' },
      { id: 'ke-b3', title: 'Unbowed', authorOrSource: 'Wangari Maathai', description: "Memoir of the Nobel Prize winner. Shows the intersection of gender, environment, and power.", type: 'book' }
    ],
    data: [
      { id: 'ke-d1', title: 'Kenya National Bureau of Statistics', description: "Primary source for census, economic, and social data. Essential for understanding demographic trends.", type: 'data' },
      { id: 'ke-d2', title: 'Institute for Security Studies', description: "Strong analysis on governance, security, and regional dynamics affecting Kenya.", type: 'institution' }
    ],
    culture: [
      { id: 'ke-c1', title: 'Benga and Kikuyu Gospel music', description: "Understand Kenya's ethnic and regional identities through music that shapes political rallies and social life.", type: 'audio' },
      { id: 'ke-c2', title: "Ng\u0169g\u0129 wa Thiong'o's novels", description: "Essential for understanding post-colonial disillusionment, language politics, and state power.", type: 'book' },
      { id: 'ke-c3', title: 'Maasai cultural tourism vs. reality', description: "Examine how Kenya's most marketed ethnic group is also among its most marginalized.", type: 'profile' }
    ],
    specificity: [
      "Pre- and post-2010 constitution (devolution changed governance significantly)",
      "Regional differences (Coast, Rift Valley, Central, Western, Northeastern)",
      "Urban vs. rural economies",
      "Different presidential eras (Kenyatta, Moi, Kibaki, Uhuru, Ruto)",
      "Agricultural vs. service economy dynamics"
    ]
  },
  {
    id: 'za',
    name: 'South Africa',
    region: 'Southern Africa',
    imageUrl: 'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?auto=format&fit=crop&q=80&w=1200',
    blurb: 'The continent\u2019s most industrialized economy and most unequal society. Its history of apartheid shapes everything\u2014wealth distribution, spatial planning, education, politics.',
    contextMatters: "Often held up as a model democracy, but faces deep structural challenges: unemployment over 30%, electricity crises, state capture, and violent crime. South Africa cannot be understood without understanding how apartheid's economic and spatial architecture persists.",
    misunderstandings: [
      "The end of apartheid \u2260 the end of apartheid's effects \u2014 Spatial segregation, wealth inequality, and education gaps remain deeply entrenched",
      "'Rainbow nation' is aspirational, not descriptive \u2014 Racial and economic fault lines are still sharp; reconciliation is incomplete",
      "Johannesburg and Cape Town are not representative \u2014 They're wealthier and whiter than the rest of the country",
      "'State capture' is not just corruption \u2014 It's systematic repurposing of state institutions for private/political gain",
      "South Africa's economy is not just mining \u2014 Financial services, manufacturing, and retail are significant"
    ],
    media: [
      { id: 'za-m1', title: 'Daily Maverick', description: "South Africa's premier investigative journalism outlet. Essential for understanding politics, institutions, corruption, and state capture.", type: 'journalism' },
      { id: 'za-m2', title: 'Mail & Guardian', description: "Strong investigative and analytical journalism on politics, economy, and society. Progressive editorial stance.", type: 'journalism' },
      { id: 'za-m3', title: 'News24', description: "High-traffic mainstream news. Good for breaking news and breadth.", type: 'journalism' }
    ],
    books: [
      { id: 'za-b1', title: 'Long Walk to Freedom', authorOrSource: 'Nelson Mandela', description: "Essential autobiography for understanding the liberation struggle, ANC history, and Mandela's political evolution.", type: 'book' },
      { id: 'za-b2', title: "The President's Keepers", authorOrSource: 'Jacques Pauw', description: "Investigative expos\u00e9 of state capture under Jacob Zuma. Shows how institutions were systematically compromised.", type: 'book' },
      { id: 'za-b3', title: 'Born a Crime', authorOrSource: 'Trevor Noah', description: "Accessible, personal account of growing up in apartheid and post-apartheid South Africa.", type: 'book' },
      { id: 'za-b4', title: 'A History of South Africa', authorOrSource: 'Leonard Thompson', description: "Solid historical overview from pre-colonial times through apartheid's end.", type: 'book' }
    ],
    data: [
      { id: 'za-d1', title: 'Statistics South Africa (Stats SA)', description: "Official statistical agency. Good data on demographics, economy, labor.", type: 'data' },
      { id: 'za-d2', title: 'Institute for Security Studies', description: "Strong research on governance, crime, security sector, and regional dynamics.", type: 'institution' },
      { id: 'za-d3', title: 'Public Affairs Research Institute', description: "Excellent on state capacity, corruption, and governance. Essential for understanding state capture.", type: 'institution' }
    ],
    culture: [
      { id: 'za-c1', title: 'Kwaito music', description: "Post-apartheid township genre that shaped youth identity and political consciousness in the 1990s-2000s.", type: 'audio' },
      { id: 'za-c2', title: 'District 9', description: "Science fiction allegory of apartheid and xenophobia. Shows how cultural production processes historical trauma.", type: 'video' },
      { id: 'za-c3', title: 'Cry, the Beloved Country', authorOrSource: 'Alan Paton', description: "Classic novel on apartheid's social impacts. Still referenced in discussions of inequality and reconciliation.", type: 'book' }
    ],
    specificity: [
      "Apartheid vs. post-apartheid eras (1994 is a hard dividing line)",
      "Different ANC presidencies (Mandela, Mbeki, Zuma, Ramaphosa)",
      "Provincial differences (Gauteng vs. Western Cape vs. KwaZulu-Natal)",
      "Urban vs. rural dynamics (especially former 'homelands')",
      "Economic inequality within racial groups"
    ]
  }
];

// --- AGGREGATED LISTS FOR GENERAL SECTIONS ---

const ALL_MEDIA = START_HERE_MEDIA.concat(COUNTRIES.flatMap(c => c.media));
const ALL_BOOKS = START_HERE_BOOKS.concat(COUNTRIES.flatMap(c => c.books));
const ALL_DATA = START_HERE_DATA.concat(COUNTRIES.flatMap(c => c.data));
const ALL_CULTURE = COUNTRIES.flatMap(c => c.culture);
