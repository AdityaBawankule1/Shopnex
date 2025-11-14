// src/types.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number; // Optional: for items on sale
  imageUrl: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;     // Optional: for "New" badge
  onSale?: boolean;    // Optional: for "Sale" badge
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  link: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  rating: number; // e.g., 4 or 5
}