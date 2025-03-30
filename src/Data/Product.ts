import { Product } from "../Types";

export const products: Product[] = [
  {
    id: 'prod_001',
    name: 'Sangam Burfi',
    price: 312.5,
    originalPrice: 350,
    image: '/images/products/sangam-burfi.jpg',
    images: [
      '/images/products/sangam-burfi-1.jpg',
      '/images/products/sangam-burfi-2.jpg'
    ],
    description: 'A delicious blend of gulkhand and kesar...',
    category: 'sweets',
    weightOptions: [
      { weight: 250, price: 312.5 },
      { weight: 500, price: 600 }
    ],
    defaultWeight: 250,
    bestBefore: '6 Days',
    storageInstructions: 'Store in cool, dry place',
    piecesInfo: '1Kg - 80 Pcs Approx.',
    allergenInfo: 'Contains dairy and nuts',
    ingredients: ['Milk', 'Sugar', 'Gulkhand', 'Kesar', 'Nuts'],
    nutritionalValues: [
      { name: 'Energy', value: '150kcal' },
      { name: 'Protein', value: '5g' }
    ],
    isFeatured: true,
    rating: 4.5,
    reviewCount: 24
  },
  // Add more products...
];

// Helper functions
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};