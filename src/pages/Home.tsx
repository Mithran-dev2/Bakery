// import SweetsAndTreats from "../components/SweetsAndTreats";

// const Home = () => {
//   return (
//     <div className="text-center">
//       <h1 className="text-2xl font-bold">Heartly Welcome to Our Store </h1>
//       <div className="flex items-center justify-center mt-4">
//         <img src="/assets/bakery logo.jpg" alt="Shree Mithai Logo" className="w-40 h-auto" />
//       </div>

//       {/* Best of our Classics */}
//       <section className="mt-10">
//         <h2 className="text-2xl font-bold mb-6">Best of our Classics!</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {[
//             { name: "Kaju Katli", price: "287.50", img: "/assets/kaju-katli.jpg" },
//             { name: "Boondhi Ladoo", price: "185.00", img: "/assets/boondhi-ladoo.jpg" },
//             { name: "Spl. Madras Mixture", price: "74.00", img: "/assets/spl-madras-mixture.jpg" },
//             { name: "Spl. Cow Milk Peda", price: "180.00", img: "/assets/spl-cow-milk-peda.jpg" },
//             { name: "Kaju boat", price: "305.50", img: "/assets/kaju-boat.jpg" },
//             { name: "Kaju mango roll", price: "290.50", img: "/assets/kaju-mango-roll.jpg" },
//             { name: "Kesar badam katli", price: "287.50", img: "/assets/kesar-badam-katli.jpg" },
//             { name: "sangam Burfi", price: "300.00", img: "/assets/sangam-burfi.jpg" },

//           ].map((item, index) => (
//             <div key={index} className="text-center">
//               <img src={item.img} alt={item.name} className="w-full h-56 object-cover rounded-md" />
//               <h3 className="mt-4 font-semibold">{item.name}</h3>
//               <p className="text-red-600 font-bold">from Rs. {item.price}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Explore Our Collection */}
//       <section className="mt-10">
//         <h2 className="text-2xl font-bold mb-6">Explore Our Collection</h2>
//         <SweetsAndTreats/>
        
//       </section>
     
//     </div>
//   );
// };

// export default Home;


import React, { useState } from "react";
import SweetsAndTreats from "../components/SweetsAndTreats";

const Home = () => {
  const [showAll, setShowAll] = useState(false);

  const classics = [
    { name: "Kaju Katli", price: "287.50", img: "/assets/kaju-katli.jpg" },
    { name: "Boondhi Ladoo", price: "185.00", img: "/assets/boondhi-ladoo.jpg" },
    { name: "Spl. Madras Mixture", price: "74.00", img: "/assets/spl-madras-mixture.jpg" },
    { name: "Spl. Cow Milk Peda", price: "180.00", img: "/assets/spl-cow-milk-peda.jpg" },
    { name: "Kaju Boat", price: "305.50", img: "/assets/kaju-boat.jpg" },
    { name: "Kaju Mango Roll", price: "290.50", img: "/assets/kaju-mango-roll.jpg" },
    { name: "Kesar Badam Katli", price: "287.50", img: "/assets/kesar-badam-katli.jpg" },
    { name: "Rasmalai", price: "287.50", img: "/assets dropdown Items/rasmalai-MS2.jpg" },
    { name: "Long Jamun", price: "287.50", img: "/assets dropdown Items/long-jamun-GH2.jpg" },
    { name: "Butterscotch Burfi", price: "287.50", img: "/assets dropdown Items/butterscotch-burfi-MS2.jpg" },
    { name: "Almond Khaleeji", price: "287.50", img: "/assets dropdown Items/almond-khaleeji-DS2.JPG" },
    { name: "Badam Pista Roll", price: "287.50", img: "/assets dropdown Items/badam-pista-roll-2.jpg" },
    { name: "Badam Malai Burfi", price: "287.50", img: "/assets dropdown Items/badam-malai-burfi-2.jpg" },
    { name: "Dry Fruit Mixture", price: "250.00", img: "/assets/savouries-dropdown-items/dry-fruit-mixture-sev.jpg" },
    { name: "Khara Boondhi", price: "180.00", img: "/assets/savouries-dropdown-items/khara-boondhi-sev.jpg" },
    { name: "Mota Mixture", price: "120.00", img: "/assets/savouries-dropdown-items/mota-mixture-sev.jpg" },
    { name: "Navdhanyaam Mixture", price: "180.00", img: "/assets/savouries-dropdown-items/navdhanyam-mixture-sev.jpg" },
    { name: "Palak Sev", price: "150.00", img: "/assets/savouries-dropdown-items/palak-sev-sev.jpg" },
    { name: "Special Madras Mixture", price: "200.00", img: "/assets/savouries-dropdown-items/spl-madras-mixture-Sev.jpg" },
    
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
            {visibleItems.map((item, index) => (
              <div key={index} className="text-center overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-56 object-cover rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                />
                <h3 className="mt-4 font-semibold">{item.name}</h3>
                <p className="text-red-600 font-bold">from Rs. {item.price}</p>
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



