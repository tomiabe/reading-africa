export enum Category {
  MANIFESTO = 'manifesto',
  START_HERE = 'start_here',
  JOURNALISTS = 'journalists',
  MEDIA = 'media',
  BOOKS = 'books',
  RESEARCH = 'research',
  CULTURE = 'culture',
  COUNTRIES = 'countries',
  CONTRIBUTE = 'contribute'
}

export interface ResourceItem {
  id: string;
  title: string;
  authorOrSource?: string;
  description: string;
  type?: 'article' | 'book' | 'data' | 'video' | 'audio' | 'profile' | 'journalism' | 'institution';
  tags?: string[];
  imageUrl?: string;
  link?: string;
}

export interface CountryProfile {
  id: string;
  name: string;
  region: string;
  blurb: string;
  imageUrl?: string;
  contextMatters: string;
  misunderstandings: string[];
  media: ResourceItem[];
  books: ResourceItem[];
  data: ResourceItem[];
  culture: ResourceItem[];
  specificity: string[];
}