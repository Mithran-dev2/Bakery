// import React from "react";

// const SweetsAndTreats: React.FC = () => {
//   return (
//     <div className="bg-white p-8 max-w-4xl mx-auto">
//       <h1 className="text-4xl font-bold text-center mb-6">
//         Sweets, treats & eats for every craving!
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Milk Sweets</h2>
//           <img
//             src="/assets/spl-cow-milk-peda.jpg"
//             alt="Milk Sweets"
//             className="w-full h-48 object-cover rounded-lg mb-4"
//           />

//           <h2 className="text-2xl font-semibold mb-4">Cashew Sweets</h2>
//           <img
//             src="/assets/cashew-sweets.jpg"
//             alt="Cashew Sweets"
//             className="w-full h-48 object-cover rounded-lg mb-4"
//           />

//           <h2 className="text-2xl font-semibold mb-4">Bakira & Kunita</h2>
//           <img
//             src="/assets/baklava-kunafa.jpg"
//             alt="Bakira & Kunita"
//             className="w-full h-48 object-cover rounded-lg mb-4"
//           />
//         </div>
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Savouries</h2>
//           <img
//             src="/assets/savouries.jpg"
//             alt="Savouries"
//             className="w-full h-48 object-cover rounded-lg mb-4"
//           />

//           <h2 className="text-2xl font-semibold mb-4">Assorted Sweets</h2>
//           <img
//             src="/assets/assorted-sweets.jpg"
//             alt="Assorted Sweets"
//             className="w-full h-48 object-cover rounded-lg mb-4"
//           />

//           <h2 className="text-2xl font-semibold mb-4">Ghee Sweets</h2>
//           <img
//             src="/assets/ghee-sweets.jpg"
//             alt="Ghee Sweets"
//             className="w-full h-48 object-cover rounded-lg mb-4"
//           />
//         </div>
//       </div>

//       <hr className="my-8 border-gray-300" />

//       {/* Wrapper div with maroon background */}
//       <div className="bg-red-900 text-white p-8">
//         <h2 className="text-3xl font-bold text-center mb-6">
//           Pan India Shipping!
//         </h2>
//         <p className="text-lg text-center mb-8">
//           We are now shipping a curated section of our virtual across the
//           country!
//         </p>

//         <div className="text-center">
//           <h3 className="text-2xl font-bold mb-4">
//             Bulk Corporate & Festive Orders
//           </h3>
//           <p className="text-lg mb-8">
//             Order in advance and in bulk from our Diwali & Dussehra special
//             collection.
//           </p>

//           <h3 className="text-2xl font-bold mb-4">Fresh & Seasonal</h3>
//           <p className="text-lg">
//             Our menu follows the seasons, featuring the best local produce
//             available.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SweetsAndTreats;



import React from "react";

const SweetsAndTreats: React.FC = () => {
  return (
    <div className="bg-white p-8 w-full min-h-screen flex flex-col">
      <h1 className="text-4xl font-bold text-center mb-6">
        Sweets, Treats & Eats for Every Craving!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
        {[
          { title: "Milk Sweets", image: "/assets/spl-cow-milk-peda.jpg" },
          { title: "Cashew Sweets", image: "/assets/cashew-sweets.jpg" },
          { title: "Baklava & Kunafa", image: "/assets/baklava-kunafa.jpg" },
          { title: "Savouries", image: "/assets/savouries.jpg" },
          { title: "Assorted Sweets", image: "/assets/assorted-sweets.jpg" },
          { title: "Ghee Sweets", image: "/assets/ghee-sweets.jpg" },
        ].map((item, index) => (
          <div key={index} className="group">
            <h2 className="text-2xl font-semibold mb-2 text-center">{item.title}</h2>
            <div className="overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pan India Shipping Section */}
      <div className="bg-red-900 text-white p-8 mt-8 w-full">
        <h2 className="text-3xl font-bold text-center mb-4">Pan India Shipping!</h2>
        <p className="text-lg text-center mb-6">
          We are now shipping a curated section of our virtual store across the country!
        </p>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Bulk Corporate & Festive Orders</h3>
          <p className="text-lg mb-6">
            Order in advance and in bulk from our Diwali & Dussehra special collection.
          </p>

          <h3 className="text-2xl font-bold mb-2">Fresh & Seasonal</h3>
          <p className="text-lg">
            Our menu follows the seasons, featuring the best local produce available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SweetsAndTreats;



