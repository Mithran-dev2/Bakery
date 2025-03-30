import React, { useState } from "react";
import { Link } from "react-router-dom";
import SweetsAndTreats from "../components/SweetsAndTreats";

const Home: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const classics = [
    { id: 1, name: "Kaju Katli", price: "287.50", img: "/assets/kaju-katli.jpg" },
    { id: 2, name: "Boondhi Ladoo", price: "185.00", img: "/assets/boondhi-ladoo.jpg" },
    { id: 3, name: "Spl. Madras Mixture", price: "74.00", img: "/assets/spl-madras-mixture.jpg" },
    { id: 4, name: "Spl. Cow Milk Peda", price: "180.00", img: "/assets/spl-cow-milk-peda.jpg" },
    { id: 5, name: "Kaju Boat", price: "305.50", img: "/assets/kaju-boat.jpg" },
    { id: 6, name: "Kaju Mango Roll", price: "290.50", img: "/assets/kaju-mango-roll.jpg" },
    { id: 7, name: "Kesar Badam Katli", price: "287.50", img: "/assets/kesar-badam-katli.jpg" },
    { id: 8, name: "Rasmalai", price: "287.50", img: "/assets dropdown Items/rasmalai-MS2.jpg" },
    { id: 9, name: "Long Jamun", price: "287.50", img: "/assets dropdown Items/long-jamun-GH2.jpg" },
    { id: 10, name: "Soan ", price: "287.50", img: "/assets dropdown Items/soan-papdi-GS2.jpg" },
    { id: 12, name: "Butterscotch Burfi", price: "287.50", img: "/assets dropdown Items/butterscotch-burfi-MS2.jpg" },
    { id: 13, name: "Almond Khaleeji", price: "287.50", img: "/assets dropdown Items/almond-khaleeji-DS2.JPG" },
    { id: 14, name: "Badam Pista Roll", price: "287.50", img: "/assets dropdown Items/badam-pista-roll-2.jpg" },
    { id: 15, name: "Badam Malai Burfi", price: "287.50", img: "/assets dropdown Items/badam-malai-burfi-2.jpg" },
    { id: 16, name: "Dry Fruit Mixture", price: "250.00", img: "/assets/savouries-dropdown-items/dry-fruit-mixture-sev.jpg" },
    { id: 17, name: "Khara Boondhi", price: "180.00", img: "/assets/savouries-dropdown-items/khara-boondhi-sev.jpg" },
    { id: 18, name: "Mota Mixture", price: "120.00", img: "/assets/savouries-dropdown-items/mota-mixture-sev.jpg" },
    { id: 19, name: "Navdhanyaam Mixture", price: "180.00", img: "/assets/savouries-dropdown-items/navdhanyam-mixture-sev.jpg" },
    { id: 20, name: "Palak Sev", price: "150.00", img: "/assets/savouries-dropdown-items/palak-sev-sev.jpg" },
    { id: 21, name: "Special Madras Mixture", price: "200.00", img: "/assets/savouries-dropdown-items/spl-madras-mixture-Sev.jpg" },
    
  ];

  const visibleItems = showAll ? classics : classics.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold">Heartly Welcome to Our Store</h1>
        <div className="flex justify-center mt-4">
          <img
            src="/assets/bakery-logo.jpg"
            alt="Shree Mithai Logo"
            className="w-40 h-auto"
          />
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex-1">
        {/* Best of our Classics */}
        <section className="text-center py-10">
          <h2 className="text-2xl font-bold mb-6">Best of our Classics!</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
            {visibleItems.map((item) => (
              <div key={item.id} className="text-center overflow-hidden border rounded-lg p-4 shadow-md">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-56 object-cover rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                />
                <h3 className="mt-4 font-semibold">{item.name}</h3>
                <p className="text-red-600 font-bold">from Rs. {item.price}</p>
                <Link to={`/product-details/${item.id}`} className="text-blue-500 mt-2 inline-block">
                  View Details
                </Link>
              </div>
            ))}
          </div>
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-6 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              View All
            </button>
          )}
        </section>

        {/* Explore Our Collection */}
        <section className="text-center py-10">
          <h2 className="text-2xl font-bold mb-6">Explore Our Collection</h2>
          <SweetsAndTreats />
        </section>
      </main>

      {/* Footer Section */}
      <footer className="text-center py-4 bg-gray-100">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Shree Mithai. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;

/***************************************************************************************************** */

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import SweetsAndTreats from "../components/SweetsAndTreats";

// interface Product {
//   id: number;
//   name: string;
//   price: string;
//   img: string;
// }

// interface HomeProps {
//   products?: Product[]; // Made optional if you want to keep the classics array
// }

// const Home: React.FC<HomeProps> = ({ products }) => {
//   const [showAll, setShowAll] = useState(false);

//   // Use passed products or fall back to classics
//   const displayProducts = products || [
//     { id: 1, name: "Kaju Katli", price: "287.50", img: "/assets/kaju-katli.jpg" },
//     { id: 2, name: "Boondhi Ladoo", price: "185.00", img: "/assets/boondhi-ladoo.jpg" },
//     // ... rest of your classic products
//   ];

//   const visibleItems = showAll ? displayProducts : displayProducts.slice(0, 4);

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Header Section */}
//       <header className="text-center py-6">
//         <h1 className="text-3xl font-bold">Heartly Welcome to Our Store</h1>
//         <div className="flex justify-center mt-4">
//           <img
//             src="/assets/bakery-logo.jpg"
//             alt="Shree Mithai Logo"
//             className="w-40 h-auto"
//           />
//         </div>
//       </header>

//       {/* Main Content Section */}
//       <main className="flex-1">
//         {/* Best of our Classics */}
//         <section className="text-center py-10">
//           <h2 className="text-2xl font-bold mb-6">Best of our Classics!</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
//             {visibleItems.map((item) => (
//               <div key={item.id} className="text-center overflow-hidden border rounded-lg p-4 shadow-md">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-full h-56 object-cover rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
//                 />
//                 <h3 className="mt-4 font-semibold">{item.name}</h3>
//                 <p className="text-red-600 font-bold">from Rs. {item.price}</p>
//                 <Link to={`/product-details/${item.id}`} className="text-blue-500 mt-2 inline-block">
//                   View Details
//                 </Link>
//               </div>
//             ))}
//           </div>
//           {!showAll && displayProducts.length > 4 && (
//             <button
//               onClick={() => setShowAll(true)}
//               className="mt-6 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
//             >
//               View All
//             </button>
//           )}
//         </section>

//         {/* Explore Our Collection */}
//         <section className="text-center py-10">
//           <h2 className="text-2xl font-bold mb-6">Explore Our Collection</h2>
//           <SweetsAndTreats />
//         </section>
//       </main>

//       {/* Footer Section */}
//       <footer className="text-center py-4 bg-gray-100">
//         <p className="text-sm text-gray-600">
//           © {new Date().getFullYear()} Shree Mithai. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Home;




