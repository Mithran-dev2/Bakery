import React, { useState } from "react";

interface Sweet {
  id: number;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
}

const cashewSweets: Sweet[] = [
  { id: 1, name: "Sangam Burfi", price: 312.5, image: "/assets dropdown Items/sangam-burfi-2.jpg", inStock: true },
  { id: 2, name: "Kesar Kaju Katli", price: 337.5, image: "/assets dropdown Items/kesar-kaju-katli-2.jpg", inStock: true },
  { id: 3, name: "Kaju Ball", price: 337.5, image: "/assets dropdown Items/kaju-ball-2.jpg", inStock: true },
  { id: 4, name: "Kaju Roll", price: 350.0, image: "/assets dropdown Items/kaju-king-2.jpg", inStock: false },
];

const CashewSweetsSection: React.FC = () => {
  const [inStockOnly, setInStockOnly] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  const filteredSweets = cashewSweets.filter((sweet) =>
    (!inStockOnly || sweet.inStock) &&
    sweet.price >= priceRange[0] &&
    sweet.price <= priceRange[1]
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Cashew Sweets</h2>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        {/* In-stock filter */}
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
        {filteredSweets.map((sweet) => (
          <div key={sweet.id} className="border p-4 rounded-lg shadow">
            <img src={sweet.image} alt={sweet.name} className="w-full h-40 object-cover mb-2" />
            <h3 className="text-lg font-semibold">{sweet.name}</h3>
            <p className="text-gray-700">₹ {sweet.price}</p>
            {!sweet.inStock && <span className="text-red-500">Out of stock</span>}
          </div>
        ))}
      </div>

      {filteredSweets.length === 0 && <p className="text-gray-500 mt-4">No sweets found in this range.</p>}
    </div>
  );
};

export default CashewSweetsSection;
