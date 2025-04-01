// import React, { useState } from "react";

// interface Sweet {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   inStock: boolean;
// }

// const gheeSweets: Sweet[] = [
//   { id: 8, name: "Special Mysore Pak", price: 275.0, image: "/assets dropdown Items/spl-mysore-pak-GH2.jpg", inStock: true },
//   { id: 9, name: "Long Jamun", price: 300.0, image: "/assets dropdown Items/long-jamun-GH2.jpg", inStock: true },
//   { id: 10, name: "Soan Papdi", price: 350.0, image: "/assets dropdown Items/soan-papdi-GS2.jpg", inStock: false },
  
// ];

// const GheeSweetsSection: React.FC = () => {
//   const [inStockOnly, setInStockOnly] = useState(false);
//   const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

//   const filteredSweets = gheeSweets.filter((sweet) =>
//     (!inStockOnly || sweet.inStock) &&
//     sweet.price >= priceRange[0] &&
//     sweet.price <= priceRange[1]
//   );

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Ghee Sweets</h2>

//       {/* Filters */}
//       <div className="flex gap-4 mb-6">
//         {/* In-stock filter */}
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={inStockOnly}
//             onChange={() => setInStockOnly(!inStockOnly)}
//           />
//           In Stock Only
//         </label>

//         {/* Price Filter */}
//         <div className="flex items-center gap-2">
//           <span>Price:</span>
//           <input
//             type="number"
//             placeholder="Min"
//             value={priceRange[0]}
//             onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
//             className="border px-2 py-1 w-20"
//           />
//           <span>-</span>
//           <input
//             type="number"
//             placeholder="Max"
//             value={priceRange[1]}
//             onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
//             className="border px-2 py-1 w-20"
//           />
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {filteredSweets.map((sweet) => (
//           <div key={sweet.id} className="p-4 rounded-lg shadow-sm">
//             <img src={sweet.image} alt={sweet.name} className="w-full h-40 object-cover mb-2" />
//             <h3 className="text-lg font-semibold">{sweet.name}</h3>
//             <p className="text-gray-700">₹ {sweet.price}</p>
//             {!sweet.inStock && <span className="text-red-500">Out of stock</span>}
//           </div>
//         ))}
//       </div>

//       {filteredSweets.length === 0 && <p className="text-gray-500 mt-4">No sweets found in this range.</p>}
//     </div>
//   );
// };

// export default GheeSweetsSection;

import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Sweet {
  id: number;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
}

const gheeSweets: Sweet[] = [
  { id: 8, name: "Special Mysore Pak", price: 275.0, image: "/assets dropdown Items/spl-mysore-pak-GH2.jpg", inStock: true },
  { id: 9, name: "Long Jamun", price: 300.0, image: "/assets dropdown Items/long-jamun-GH2.jpg", inStock: true },
  { id: 10, name: "Soan Papdi", price: 350.0, image: "/assets dropdown Items/soan-papdi-GS2.jpg", inStock: false },
];

const GheeSweetsSection: React.FC = () => {
  const [inStockOnly, setInStockOnly] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  const filteredSweets = gheeSweets.filter((sweet) =>
    (!inStockOnly || sweet.inStock) &&
    sweet.price >= priceRange[0] &&
    sweet.price <= priceRange[1]
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Ghee Sweets</h2>

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

      
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredSweets.map((sweet) => (
          <Link key={sweet.id} to={`/product/${sweet.id}`}>
            <div className="p-4 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition">
              <img src={sweet.image} alt={sweet.name} className="w-full h-40 object-cover mb-2" />
              <h3 className="text-lg font-semibold">{sweet.name}</h3>
              <p className="text-gray-700">₹ {sweet.price}</p>
              {!sweet.inStock && <span className="text-red-500">Out of stock</span>}
            </div>
          </Link>
        ))}
      </div> */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredSweets.map((sweet) => (
                <Link
                  key={sweet.id}
                  to={`/product-details/${sweet.id}`}
                  className="p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={sweet.image}
                    alt={sweet.name}
                    className="w-full h-40 object-cover mb-2"
                  />
                  <h3 className="text-lg font-semibold">{sweet.name}</h3>
                  <p className="text-gray-700">₹ {sweet.price}</p>
                  {!sweet.inStock && (
                    <span className="text-red-500">Out of stock</span>
                  )}
                </Link>
              ))}
            </div>

      {filteredSweets.length === 0 && (
        <p className="text-gray-500 mt-4">No sweets found in this range.</p>
      )}
    </div>
  );
};

export default GheeSweetsSection;
