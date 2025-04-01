import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Savoury {
  id: number;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
}

const mixturesAndSev: Savoury[] = [
  { id: 16, name: "Special Madras Mixture", price: 150.0, image: "/assets/savouries-dropdown-items/spl-madras-mixture-Sev.jpg", inStock: true },
  { id: 17, name: "Navdhanyam Mixture", price: 120.0, image: "/assets/savouries-dropdown-items/navdhanyam-mixture-sev.jpg", inStock: true },
  { id: 18, name: "Mota Mixture", price: 130.0, image: "public/assets/savouries-dropdown-items/mota-mixture-sev.jpg", inStock: false },
  { id: 19, name: "Dry Fruit Mixture", price: 140.0, image: "/assets/savouries-dropdown-items/dry-fruit-mixture-sev.jpg", inStock: true },
  { id: 20, name: "Khara Boondhi", price: 140.0, image: "/assets/savouries-dropdown-items/khara-boondhi-sev.jpg", inStock: true },
  { id: 21, name: "Palak Sev", price: 140.0, image: "/assets/savouries-dropdown-items/palak-sev-sev.jpg", inStock: true },
];

const MixtureSevSection: React.FC = () => {
  const [inStockOnly, setInStockOnly] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  const filteredSavouries = mixturesAndSev.filter((savoury) =>
    (!inStockOnly || savoury.inStock) &&
    savoury.price >= priceRange[0] &&
    savoury.price <= priceRange[1]
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Mixtures & Sev</h2>

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
        {filteredSavouries.map((savoury) => (
          <Link
            key={savoury.id}
            to={`/product-details/${savoury.id}`}
            className="p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={savoury.image}
              alt={savoury.name}
              className="w-full h-40 object-cover mb-2"
            />
            <h3 className="text-lg font-semibold">{savoury.name}</h3>
            <p className="text-gray-700">₹ {savoury.price}</p>
            {!savoury.inStock && (
              <span className="text-red-500">Out of stock</span>
            )}
          </Link>
        ))}
      </div>

      {filteredSavouries.length === 0 && (
        <p className="text-gray-500 mt-4">No items found in this range.</p>
      )}
    </div>
  );
};

export default MixtureSevSection;