import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Snack {
  id: number;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
}

const chipsAndSnacks: Snack[] = [
  { id: 22, name: "Banana Chips", price: 100.0, image: "/assets/savouries-dropdown-items/banana-chips-2.jpg", inStock: true },
  { id: 23, name: "Masala Potato Chips", price: 110.0, image: "/assets/savouries-dropdown-items/masala-potato-chips-2.jpg", inStock: true },
  { id: 24, name: "Ribbon Murukku", price: 130.0, image: "/assets/savouries-dropdown-items/ribbon-murukku-2.jpg", inStock: false },
  { id: 25, name: "Andhra Murukku", price: 90.0, image: "/assets/savouries-dropdown-items/andhra-murukku-2.jpg", inStock: true },
  { id: 26, name: "Butter Murukku", price: 120.0, image: "/assets/savouries-dropdown-items/butter-murukku-2.jpg", inStock: true },
  { id: 27, name: "Namkeen Paara", price: 130.0, image: "/assets/savouries-dropdown-items/namkeen-paara-2.jpg", inStock: true },
];

const ChipsAndSnacksSection: React.FC = () => {
  const [inStockOnly, setInStockOnly] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  const filteredSnacks = chipsAndSnacks.filter((snack) =>
    (!inStockOnly || snack.inStock) &&
    snack.price >= priceRange[0] &&
    snack.price <= priceRange[1]
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Chips & Snacks</h2>

      <div className="flex gap-4 mb-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={() => setInStockOnly(!inStockOnly)}
          />
          In Stock Only
        </label>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredSnacks.map((snack) => (
          <Link
            key={snack.id}
            to={`/product-details/${snack.id}`}
            className="p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={snack.image}
              alt={snack.name}
              className="w-full h-40 object-cover mb-2"
            />
            <h3 className="text-lg font-semibold">{snack.name}</h3>
            <p className="text-gray-700">₹ {snack.price}</p>
            {!snack.inStock && (
              <span className="text-red-500">Out of stock</span>
            )}
          </Link>
        ))}
      </div>

      {filteredSnacks.length === 0 && (
        <p className="text-gray-500 mt-4">No items found in this range.</p>
      )}
    </div>
  );
};

export default ChipsAndSnacksSection;