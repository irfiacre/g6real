interface SearchInterface {
  searchText: string;
  searchLocation: string;
}

interface ListingType {
  id: string;
  thumbnail: string;
  title: string;
  location: string;
  price: number;
  rooms: number;
  youtubeURL?: string;
  description?: string;
  bathrooms?: number;
  size: number;
  type: string;
  images?: Array<string>;
  isSold?: boolean; 
}

export type { SearchInterface, ListingType };
