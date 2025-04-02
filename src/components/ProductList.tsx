// src/components/ProductList.tsx
import React from "react";

// Define the Product type
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  weight: string;
  quantity: number;
}

// Define the component props interface
interface ProductListProps {
  products: Product[];
}

// The ProductList component displays a list of products
const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="p-4 rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-2"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-700">₹ {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
