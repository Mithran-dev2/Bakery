// export interface Product {
//   id: string;
//   name: string;
//   price: number;
//   originalPrice?: number;
//   image: string;
//   images?: string[];
//   description: string;
//   category: string;
//   weightOptions: {
//     weight: number;
//     price: number;
//   }[];
//   defaultWeight: number;
//   bestBefore: string;
//   storageInstructions: string;
//   piecesInfo: string;
//   allergenInfo: string;
//   ingredients: string[];
//   nutritionalValues: {
//     name: string;
//     value: string;
//   }[];
//   isFeatured?: boolean;
//   isBestSeller?: boolean;
//   rating?: number;
//   reviewCount?: number;
//   tags?: string[];
//   variants?: {
//     name: string;
//     options: {
//       name: string;
//       priceDifference?: number;
//     }[];
//   };
// }

// // Optional: Create category types if needed
// export type ProductCategory = 'sweets' | 'savories' | 'dry-fruits';

export interface WeightOption {
    weight: number; // in grams
    weightLabel: string; // e.g. "250g", "1kg"
    price: number;
    hasSilverLeaf?: boolean;
    isDefault?: boolean;
  }
  
  export interface NutritionalValue {
    name: string;
    value: string;
    dailyValue?: string;
  }
  
  export interface ProductVariant {
    name: string;
    options: {
      name: string;
      priceDifference?: number;
      image?: string; // variant-specific image
    }[];
  }
  
  export interface Product {
    id: string;
    name: string;
    slug: string; // URL-friendly identifier
    price: number; // current price (show this prominently)
    originalPrice?: number; // strikethrough price if discounted
    image: string; // main image
    images?: string[]; // additional images for gallery
    description: string;
    detailedDescription?: string;
    category: ProductCategory;
    subCategory?: string; // e.g., "Almond Sweets", "Cashew Sweets"
    weightOptions: WeightOption[];
    bestBefore: string; // e.g., "6 months from manufacture"
    storageInstructions: string;
    piecesInfo?: string; // e.g., "Approx 12 pieces per 250g"
    allergenInfo: string;
    ingredients: string[];
    nutritionalValues: NutritionalValue[];
    isFeatured?: boolean;
    isBestSeller?: boolean;
    isOutOfStock?: boolean;
    rating?: number; // 1-5
    reviewCount?: number;
    tags?: string[];
    variants?: ProductVariant;
    manufacturingDate?: string; // ISO format
    discount?: number; // percentage
    shippingInfo?: {
      freeShipping?: boolean;
      shippingCost?: number;
      estimatedDelivery?: string;
    };
  }
  
  export type ProductCategory = 
    | 'sweets' 
    | 'savories' 
    | 'dry-fruits' 
    | 'festive-specials' 
    | 'sugar-free';