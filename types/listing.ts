export interface Listing {
  id: string;
  title: string;
  location: string;
  images: string[];
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  type: string;
  beds: number;
  baths: number;
  superhost: boolean;
}