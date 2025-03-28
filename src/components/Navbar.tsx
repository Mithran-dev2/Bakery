// import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

// const Navbar: React.FC = () => {
//   return (
//     <nav className="bg-white border-b-2 border-red-600">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
//         {/* Logo */}
//         <div>
//           <img src="/assets/bakery logo.jpg" alt="Shree Mithai Logo" className="h-12" />
//         </div>

//         {/* Navigation Links */}
//         <ul className="flex space-x-6 text-black font-semibold">
//           {["Sweets", "Savouries", "Bakery", "Hampers", "Bulk Orders"].map(
//             (item, index) => (
//               <li key={index} className="cursor-pointer hover:text-red-600">
//                 <button className="focus:outline-none flex items-center">
//                   {item} 
//                   {index < 3 && <span className="ml-1">▼</span>} {/* Dropdown Icon for First 3 */}
//                 </button>
//               </li>
//             )
//           )}
//         </ul>

//         {/* Action Icons */}
//         <div className="flex items-center space-x-6 text-black">
//           <FaSearch className="text-lg cursor-pointer hover:text-red-600" />
//           <FaUser className="text-lg cursor-pointer hover:text-red-600" />
          
//           {/* Shopping Cart */}
//           <div className="relative">
//             <FaShoppingCart className="text-lg cursor-pointer hover:text-red-600" />
//             <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
//               0 {/* TODO: Replace with dynamic cart count */}
//             </span>
//           </div>
//         </div>
        
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






import { useState } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import SweetsDropdown from "./SweetsDropDown";
import SavouriesDropdown from "./SavouriesDropDown";

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navItems = ["Sweets", "Savouries", "Bakery", "Hampers", "Bulk Orders"];

  const toggleDropdown = (item: string) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  return (
    <nav className="bg-white border-b-2 border-red-600 relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div>
          <img src="/assets/bakery logo.jpg" alt="Shree Mithai Logo" className="h-12" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-black font-semibold relative">
          {navItems.map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-red-600 relative">
              <button
                className="focus:outline-none flex items-center"
                onClick={() => toggleDropdown(item)}
              >
                {item} <span className="ml-1">▼</span>
              </button>

              {/* Render correct dropdown based on the selected menu item */}
              {openDropdown === item && (
                <div className="absolute left-0 mt-2 z-50 bg-white shadow-lg rounded-md">
                  {item === "Sweets" && <SweetsDropdown />}
                  {item === "Savouries" && <SavouriesDropdown />}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Action Icons */}
        <div className="flex items-center space-x-6 text-black">
          <FaSearch className="text-lg cursor-pointer hover:text-red-600" />
          <FaUser className="text-lg cursor-pointer hover:text-red-600" />
          <div className="relative">
            <FaShoppingCart className="text-lg cursor-pointer hover:text-red-600" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
              0 {/* TODO: Replace with dynamic cart count */}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
