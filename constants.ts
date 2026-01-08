import { ResourceItem, CountryProfile } from './types';

// --- START HERE RESOURCES ---

export const START_HERE_MEDIA: ResourceItem[] = [
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

export const START_HERE_BOOKS: ResourceItem[] = [
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

export const START_HERE_DATA: ResourceItem[] = [
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

export const COUNTRIES: CountryProfile[] = [
  {
    id: 'ng',
    name: 'Nigeria',
    region: 'West Africa',
    imageUrl: 'https://images.unsplash.com/photo-1618255928646-64155694249a?auto=format&fit=crop&q=80&w=1200',
    blurb: 'Africa’s most populous country and largest economy. Frequently used as a stand-in for "Africa" in global media, erasing its specificity and the diversity of the continent.',
    contextMatters: "Nigeria is often reduced to oil wealth, Nollywood, or security challenges. With over 250 ethnic groups, deep regional differences, and a complex federal system, Nigeria cannot be understood through single narratives.",
    misunderstandings: [
      "Lagos is not Nigeria — The commercial capital dominates media attention, but represents less than 10% of the population",
      "Oil wealth ≠ national prosperity — Nigeria is oil-rich but most Nigerians see little benefit; resource curse dynamics are critical context",
      "Nollywood's success doesn't represent the film industry's infrastructure — It's a story of hustle and informal networks, not institutional support",
      "Regional differences are political, not just cultural — North-South divides shape everything from elections to economic policy",
      "Nigeria's tech scene is not 'Africa's Silicon Valley' — It's one of several emerging tech hubs, each with different strengths"
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
      { id: 'ng-c1', title: "Fela Kuti's Afrobeat", description: "Not just music—a form of political resistance and social commentary that shaped Nigerian public discourse for decades.", type: 'audio' },
      { id: 'ng-c2', title: 'Half of a Yellow Sun', authorOrSource: 'Chimamanda Ngozi Adichie', description: "Essential for understanding the Biafran War and its lasting impact on Nigerian identity and politics.", type: 'book' },
      { id: 'ng-c3', title: 'Nollywood (Industry)', description: "Study it as informal economy, distribution innovation, and cultural soft power—not just entertainment.", type: 'video' }
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
    blurb: 'Often framed as East Africa’s economic anchor and a model of stability, obscuring complex ethnic politics, regional inequalities, and a history of contested elections.',
    contextMatters: "It's a tech hub (M-Pesa, Nairobi's startup scene) but also an agricultural economy where most people are rural. Kenya's political economy is shaped by colonial land dispossession and ethnic patronage networks.",
    misunderstandings: [
      "Nairobi ≠ Kenya — The capital's tech scene and middle class don't represent rural realities for most Kenyans",
      "M-Pesa's success is about infrastructure gaps, not just innovation — Mobile money filled a void left by poor banking infrastructure",
      "Stable democracy ignores electoral violence — 2007-08 post-election violence killed over 1,000 people; elections remain tense",
      "Tourism is significant, but not the whole economy — Agriculture (tea, coffee, horticulture) employs far more people",
      "Ethnic politics are not 'tribal' or irrational — They're rational responses to winner-take-all political systems and resource competition"
    ],
    media: [
      { id: 'ke-m1', title: 'The Elephant', description: "Long-form investigative and analytical journalism focused on democracy, history, and political economy.", type: 'journalism' },
      { id: 'ke-m2', title: 'Nation Media Group', description: "Kenya's largest media house. Mainstream coverage of politics, business, and society.", type: 'journalism' },
      { id: 'ke-m3', title: 'The Star', description: "Independent newspaper with strong political reporting. Good for opposition perspectives and investigative work.", type: 'journalism' }
    ],
    books: [
      { id: 'ke-b1', title: "It's Our Turn to Eat", authorOrSource: 'Michela Wrong', description: "Essential for understanding corruption, ethnic politics, and why institutional reform is so difficult in Kenya.", type: 'book' },
      { id: 'ke-b2', title: 'Kenya: Between Hope and Despair', authorOrSource: 'Godwin Murunga & Shadrack Nasong\'o', description: "Academic but accessible collection on Kenyan politics, economy, and society since independence.", type: 'book' },
      { id: 'ke-b3', title: 'Unbowed', authorOrSource: 'Wangari Maathai', description: "Memoir of the Nobel Prize winner. Shows the intersection of gender, environment, and power.", type: 'book' }
    ],
    data: [
      { id: 'ke-d1', title: 'Kenya National Bureau of Statistics', description: "Primary source for census, economic, and social data. Essential for understanding demographic trends.", type: 'data' },
      { id: 'ke-d2', title: 'Institute for Security Studies', description: "Strong analysis on governance, security, and regional dynamics affecting Kenya.", type: 'institution' }
    ],
    culture: [
      { id: 'ke-c1', title: 'Benga and Kikuyu Gospel music', description: "Understand Kenya's ethnic and regional identities through music that shapes political rallies and social life.", type: 'audio' },
      { id: 'ke-c2', title: 'Ngũgĩ wa Thiong\'o\'s novels', description: "Essential for understanding post-colonial disillusionment, language politics, and state power.", type: 'book' },
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
    blurb: 'The continent’s most industrialized economy and most unequal society. Its history of apartheid shapes everything—wealth distribution, spatial planning, education, politics.',
    contextMatters: "Often held up as a model democracy, but faces deep structural challenges: unemployment over 30%, electricity crises, state capture, and violent crime. South Africa cannot be understood without understanding how apartheid's economic and spatial architecture persists.",
    misunderstandings: [
      "The end of apartheid ≠ the end of apartheid's effects — Spatial segregation, wealth inequality, and education gaps remain deeply entrenched",
      "'Rainbow nation' is aspirational, not descriptive — Racial and economic fault lines are still sharp; reconciliation is incomplete",
      "Johannesburg and Cape Town are not representative — They're wealthier and whiter than the rest of the country",
      "'State capture' is not just corruption — It's systematic repurposing of state institutions for private/political gain",
      "South Africa's economy is not just mining — Financial services, manufacturing, and retail are significant"
    ],
    media: [
      { id: 'za-m1', title: 'Daily Maverick', description: "South Africa's premier investigative journalism outlet. Essential for understanding politics, institutions, corruption, and state capture.", type: 'journalism' },
      { id: 'za-m2', title: 'Mail & Guardian', description: "Strong investigative and analytical journalism on politics, economy, and society. Progressive editorial stance.", type: 'journalism' },
      { id: 'za-m3', title: 'News24', description: "High-traffic mainstream news. Good for breaking news and breadth.", type: 'journalism' }
    ],
    books: [
      { id: 'za-b1', title: 'Long Walk to Freedom', authorOrSource: 'Nelson Mandela', description: "Essential autobiography for understanding the liberation struggle, ANC history, and Mandela's political evolution.", type: 'book' },
      { id: 'za-b2', title: "The President's Keepers", authorOrSource: 'Jacques Pauw', description: "Investigative exposé of state capture under Jacob Zuma. Shows how institutions were systematically compromised.", type: 'book' },
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

export const ALL_MEDIA = [
  ...START_HERE_MEDIA,
  ...COUNTRIES.flatMap(c => c.media)
];

export const ALL_BOOKS = [
  ...START_HERE_BOOKS,
  ...COUNTRIES.flatMap(c => c.books)
];

export const ALL_DATA = [
  ...START_HERE_DATA,
  ...COUNTRIES.flatMap(c => c.data)
];

export const ALL_CULTURE = [
  ...COUNTRIES.flatMap(c => c.culture)
];