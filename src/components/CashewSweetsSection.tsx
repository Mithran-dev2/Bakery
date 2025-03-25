import { useState } from "react";

const cashewSweets = [
  { id: 1, name: "Sangam Burfi", price: 500, image: "/assets dropdown Items/sangam-burfi-2.jpg", inStock: true },
  { id: 2, name: "Kesar kaju Katli", price: 600, image: "/assets dropdown Items/kesar-kaju-katli-2.jpg", inStock: true },
  { id: 3, name: "Kaju Anjeer", price: 700, image: "/assets dropdown Items/kaju-ball-2.jpg", inStock: false },
  { id: 4, name: "Kaju Chocolate", price: 550, image: "/images/kaju-chocolate.jpg", inStock: true },
  { id: 4, name: "Kaju Chocolate", price: 550, image: "/images/kaju-chocolate.jpg", inStock: true },
  { id: 4, name: "Kaju Chocolate", price: 550, image: "/images/kaju-chocolate.jpg", inStock: true },

];

export default function CashewSweetSection() {
  const [filters, setFilters] = useState({
    inStock: false,
    priceFrom: 0,
    priceTo: 1000,
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : Number(e.target.value) });
  };

  const filteredSweets = cashewSweets.filter((sweet) =>
    (filters.inStock ? sweet.inStock : true) &&
    sweet.price >= filters.priceFrom &&
    sweet.price <= filters.priceTo
  );

  return (
    <div className="p-6">
      {/* Filter Section */}
      <div className="flex gap-6">
        <div className="w-1/4 bg-white p-4 border rounded-md shadow-md">
          <h2 className="text-lg font-semibold">Availability</h2>
          <label className="flex items-center space-x-2 mt-2">
            <input type="checkbox" name="inStock" checked={filters.inStock} onChange={handleFilterChange} />
            <span>In Stock Only</span>
          </label>

          <h2 className="mt-4 text-lg font-semibold">Price</h2>
          <div className="flex gap-2 mt-2">
            <input
              type="number"
              name="priceFrom"
              value={filters.priceFrom}
              onChange={handleFilterChange}
              className="w-full border p-2 rounded"
              placeholder="₹ From"
            />
            <input
              type="number"
              name="priceTo"
              value={filters.priceTo}
              onChange={handleFilterChange}
              className="w-full border p-2 rounded"
              placeholder="₹ To"
            />
          </div>
        </div>

        {/* Product Listing */}
        <div className="w-3/4 grid grid-cols-3 gap-6">
          {filteredSweets.length > 0 ? (
            filteredSweets.map((sweet) => (
              <div key={sweet.id} className="bg-white p-4 border rounded-md shadow-md">
                <img src={sweet.image} alt={sweet.name} className="w-full h-40 object-cover rounded-md" />
                <h3 className="mt-2 text-lg font-semibold">{sweet.name}</h3>
                <p className="text-gray-600">₹ {sweet.price}</p>
                <button
                  className={`mt-2 px-4 py-2 rounded-md ${
                    sweet.inStock ? "bg-green-500 text-white" : "bg-gray-400 text-white cursor-not-allowed"
                  }`}
                  disabled={!sweet.inStock}
                >
                  {sweet.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-3">No sweets found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
