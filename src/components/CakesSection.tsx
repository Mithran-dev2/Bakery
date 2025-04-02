import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Cake {
  id: number;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
}

const cakes: Cake[] = [
  { id: 34, name: "White Forest Cake", price: 500.0, image: "/assets dropdown Items/white-forest-cake-B6.jpg", inStock: true },
  { id: 35, name: "Fresh Fruit Cake", price: 650.0, image: "/assets dropdown Items/fresh-fruit-cake-B6.jpg", inStock: true },
  { id: 36, name: "Pistachio Raspberry cake", price: 600.0, image: "/assets dropdown Items/pistachio-raspberry-cake-B6.jpg", inStock: true },
  { id: 37, name: "BlueBerry Cake", price: 600.0, image: "/assets dropdown Items/blueberry-cake-B6.jpg", inStock: true },
  { id: 38, name: "Chocolate Mud Cake", price: 600.0, image: "/assets dropdown Items/chocolate-mud-cake-B6.jpg", inStock: true },
  { id: 39, name: "Baked CheeseCake (each at 600)", price: 600.0, image: "/assets dropdown Items/baked-cheesecake-B6.jpg", inStock: true },
  { id: 40, name: "Cup Cakes (each at 100)", price: 100.0, image: "/assets dropdown Items/cupcake-B6.jpg", inStock: true },


];

const CakeSection: React.FC = () => {
  const [inStockOnly, setInStockOnly] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  const filteredCakes = cakes.filter(
    (cake) =>
      (!inStockOnly || cake.inStock) &&
      cake.price >= priceRange[0] &&
      cake.price <= priceRange[1]
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Cakes</h2>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={() => setInStockOnly(!inStockOnly)}
          />
          In Stock Only
        </label>

        {/* Price Filter */}
        <div className="flex items-center gap-2">
          <span>Price:</span>
          <input
            type="number"
            placeholder="Min"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
            className="border px-2 py-1 w-20"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="border px-2 py-1 w-20"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCakes.map((cake) => (
          <Link
            key={cake.id}
            to={`/product-details/${cake.id}`}
            className="p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={cake.image}
              alt={cake.name}
              className="w-full h-40 object-cover mb-2"
            />
            <h3 className="text-lg font-semibold">{cake.name}</h3>
            <p className="text-gray-700">₹ {cake.price}</p>
            {!cake.inStock && (
              <span className="text-red-500">Out of stock</span>
            )}
          </Link>
        ))}
      </div>

      {filteredCakes.length === 0 && (
        <p className="text-gray-500 mt-4">No cakes found in this range.</p>
      )}
    </div>
  );
};

export default CakeSection;
