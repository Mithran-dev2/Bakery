import React from "react";

const sweets = [
  {
    name: "Kaju Katli",
    price: "Rs. 287.50",
    imgSrc: "/images/kaju-katli.jpg",
  },
  {
    name: "Spl. Cow Milk Peda",
    price: "Rs. 180.00",
    imgSrc: "/images/cow-milk-peda.jpg",
  },
  {
    name: "Boondhi Ladoo",
    price: "Rs. 185.00",
    imgSrc: "/images/boondhi-ladoo.jpg",
  },
  {
    name: "Kesar Peda",
    price: "Rs. 152.00",
    imgSrc: "/images/kesar-peda.jpg",
  },
];

const categories = [
  "Cashew Sweets",
  "Almond Sweets",
  "Ghee Sweets",
  "Milk Sweets",
  "Assorted Sweets",
  "Mixed Dry Fruit Sweets",
  "Halwa's & Other Sweets",
  "Bites & Chikki's",
  "Baklava",
  "Bengali Sweets",
];

const SweetsSection = () => {
  return (
    <div className="container mx-auto px-4 py-10 flex gap-8">
      {/* Sidebar */}
      <aside className="w-1/4">
        <h2 className="text-lg font-bold mb-4">SWEETS</h2>
        <ul className="space-y-2 text-black font-semibold">
          {categories.map((category, index) => (
            <li key={index} className="hover:text-red-500 cursor-pointer">
              {category}
            </li>
          ))}
        </ul>
      </aside>

      {/* Sweets Grid */}
      <section className="w-3/4">
        <h2 className="text-xl font-bold mb-6 border-b-2 w-fit">Sweets</h2>
        <div className="grid grid-cols-4 gap-6">
          {sweets.map((sweet, index) => (
            <div key={index} className="text-center">
              <img src={sweet.imgSrc} alt={sweet.name} className="rounded-lg w-full h-52 object-cover" />
              <h3 className="mt-2 font-bold">{sweet.name}</h3>
              <p className="text-gray-700">{`from ${sweet.price}`}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SweetsSection;
