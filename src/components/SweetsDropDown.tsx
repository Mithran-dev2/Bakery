// import { useState } from "react";

// const SweetsDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const sweetsCategories = [
//     "Cashew Sweets",
//     "Almond Sweets",
//     "Ghee Sweets",
//     "Milk Sweets",
//     "Assorted Sweets",
//     "Mixed Dry Fruit Sweets",
//   ];

//   return (
//     <div className="relative">
//       {/* Main Sweets Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="hover:text-red-500 flex items-center"
//       >
//         Sweets ▼
//       </button>

//       {/* Dropdown Menu */}
//       {isOpen && (
//         <div className="absolute left-0 mt-2 w-56 bg-white shadow-md rounded-md">
//           <ul>
//             {sweetsCategories.map((category, index) => (
//               <li key={index} className="border-b last:border-none">
//                 <a
//                   href={`/sweets/${category.toLowerCase().replace(/ /g, "-")}`}
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   {category}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SweetsDropdown;



// import { useState } from "react";

// const SweetsDropdown: React.FC = () => {
//   const sweetsCategories = [
//     "Cashew Sweets",
//     "Almond Sweets",
//     "Ghee Sweets",
//     "Milk Sweets",
//     "Assorted Sweets",
//     "Mixed Dry Fruit Sweets",
//   ];

//   return (
//     <div className="w-56 bg-white shadow-md rounded-md">
//       <ul>
//         {sweetsCategories.map((category, index) => (
//           <li key={index} className="border-b last:border-none">
//             <a
//               href={`/sweets/${category.toLowerCase().replace(/ /g, "-")}`}
//               className="block px-4 py-2 hover:bg-gray-100"
//             >
//               {category}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SweetsDropdown;

import { Link } from "react-router-dom";

const SweetsDropdown: React.FC = () => {
  const sweetsCategories = [
    "Cashew Sweets",
    "Almond Sweets",
    "Ghee Sweets",
    "Milk Sweets",
    "Mixed Dry Fruit Sweets",
  ];

  return (
    <div className="w-56 bg-white shadow-md rounded-md">
      <ul>
        {sweetsCategories.map((category, index) => {
          // Create a URL-friendly string
          const path = category.toLowerCase().replace(/ /g, "-");
          return (
            <li key={index} className="border-b last:border-none">
              <Link
                to={`/sweets/${path}`}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SweetsDropdown;
