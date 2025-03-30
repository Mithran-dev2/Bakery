import { Product } from "../Types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <div className="flex items-center mt-1">
          {product.originalPrice && (
            <span className="line-through text-gray-500 mr-2">
              Rs. {product.originalPrice}
            </span>
          )}
          <span className="font-bold text-red-600">Rs. {product.price}</span>
        </div>
        {/* Add more product info as needed */}
      </div>
    </div>
  );
};

export default ProductCard;