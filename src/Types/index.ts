export interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    images?: string[];
    description: string;
    category: string;
    weightOptions: {
      weight: number;
      price: number;
    }[];
    defaultWeight: number;
    bestBefore: string;
    storageInstructions: string;
    piecesInfo: string;
    allergenInfo: string;
    ingredients: string[];
    nutritionalValues: {
      name: string;
      value: string;
    }[];
    isFeatured?: boolean;
    isBestSeller?: boolean;
    rating?: number;
    reviewCount?: number;
    tags?: string[];
    variants?: {
      name: string;
      options: {
        name: string;
        priceDifference?: number;
      }[];
    };
  }
  
  // Optional: Create category types if needed
  export type ProductCategory = 'sweets' | 'savories' | 'dry-fruits';