export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price: number;
  images: string[];
  description: string;
  features?: string[];
  ingredients?: string;
  usage?: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  image?: string;
}