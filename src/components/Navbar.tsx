// import React, { useState } from "react";
// import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
// import { useCart, CartItem } from "../context/setCartCount"; 
// import SweetsDropdown from "./SweetsDropDown";
// import SavouriesDropdown from "./SavouriesDropDown";
// import BakeryDropdown from "./BakeryDropDown";
// import BulkOrder from "./BulkOrder";

// const Navbar: React.FC = () => {
//   const [cartOpen, setCartOpen] = useState(false);
//   const { cartItems } = useCart();
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//   // Navigation items
//   const navItems = ["Sweets", "Savouries", "Bakery", "Hampers", "Bulk Orders"];

//   // Toggle dropdown for each nav item
//   const toggleDropdown = (item: string) => {
//     setOpenDropdown(openDropdown === item ? null : item);
//   };

//   // Price calculation (demo logic)
//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const tax = 0;      // Adjust as needed
//   const shipping = 0; // Adjust as needed
//   const total = subtotal + tax + shipping;

//   return (
//     <nav className="bg-white border-b-2 border-red-600 relative">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         {/* Logo */}
//         <div>
//           <img src="/assets/bakery logo.jpg" alt="Shree Mithai Logo" className="h-12" />
//         </div>

//         {/* Navigation Links */}
//         <ul className="flex space-x-6 text-black font-semibold relative">
//           {navItems.map((item, index) => (
//             <li key={index} className="cursor-pointer hover:text-red-600 relative">
//               <button
//                 className="focus:outline-none flex items-center"
//                 onClick={() => toggleDropdown(item)}
//               >
//                 {item} <span className="ml-1">▼</span>
//               </button>

//               {/* Render the dropdown if open */}
//               {openDropdown === item && (
//                 <div className="absolute left-0 mt-2 z-50 bg-white shadow-lg rounded-md">
//                   {item === "Sweets" && <SweetsDropdown />}
//                   {item === "Savouries" && <SavouriesDropdown />}
//                   {item === "Bakery" && <BakeryDropdown />}

//                   {/* HAMPERS - Render your hamper dropdown or static content here */}
//                   {item === "Hampers" && (
//                     <div className="p-4">
//                       <h3 className="font-bold mb-2">Hampers</h3>
//                       <p className="text-sm text-gray-700">
//                         {/* Replace with hamper content or a dedicated hamper component */}
//                         This is the Hampers dropdown content.
//                       </p>
//                     </div>
//                   )}

//                   {/* BULK ORDERS - Directly render the BulkOrder component */}
//                   {item === "Bulk Orders" && (
//                     <div className="p-4 w-96">
//                       <BulkOrder />
//                     </div>
//                   )}
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Right Icons */}
//         <div className="flex items-center space-x-6 text-black">
//           <FaSearch className="text-lg cursor-pointer hover:text-red-600" />
//           <FaUser className="text-lg cursor-pointer hover:text-red-600" />

//           {/* Cart Icon & Badge */}
//           <div className="relative" onClick={() => setCartOpen(!cartOpen)}>
//             <FaShoppingCart className="text-lg cursor-pointer hover:text-red-600" />
//             <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
//               {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Cart Dropdown / Sidebar */}
//       {cartOpen && (
//         <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-md p-4 z-50">
//           <h3 className="text-lg font-semibold mb-2">Cart</h3>

//           {cartItems.length === 0 ? (
//             <p className="text-gray-500">Your cart is empty.</p>
//           ) : (
//             <>
//               {/* List of items */}
//               <ul className="space-y-4 mb-4">
//                 {cartItems.map((item: CartItem) => (
//                   <li key={item.id} className="flex items-center justify-between">
//                     {/* Left: Image & details */}
//                     <div className="flex items-center gap-2">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-16 h-16 object-cover rounded"
//                       />
//                       <div>
//                         <p className="font-semibold">{item.name}</p>
//                         <p className="text-sm text-gray-600">Weight: {item.weight}</p>
//                         <p className="text-sm text-gray-600">Price: ₹ {item.price.toFixed(2)}</p>
//                       </div>
//                     </div>
//                     {/* Right: Quantity & Remove */}
//                     <div className="flex flex-col items-end">
//                       <span className="text-sm">Qty: {item.quantity}</span>
//                       {/* Optional remove button */}
//                       {/* <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-500">
//                           Remove
//                       </button> */}
//                     </div>
//                   </li>
//                 ))}
//               </ul>

//               {/* Order Special Instructions */}
//               <div className="mb-4">
//                 <label className="block text-sm font-semibold mb-1">
//                   Order Special Instructions
//                 </label>
//                 <textarea
//                   className="w-full border rounded p-2 text-sm"
//                   rows={2}
//                   placeholder="Any specific requests?"
//                 />
//               </div>

//               {/* Price Summary */}
//               <div className="text-sm space-y-1 mb-4">
//                 <div className="flex justify-between">
//                   <span>Subtotal</span>
//                   <span>₹ {subtotal.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Tax</span>
//                   <span>Calculated at checkout</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Shipping</span>
//                   <span>Calculated at checkout</span>
//                 </div>
//                 <div className="flex justify-between font-semibold">
//                   <span>Total</span>
//                   <span>₹ {total.toFixed(2)}</span>
//                 </div>
//               </div>

//               {/* Buttons */}
//               <div className="flex flex-col space-y-2">
//                 <button className="bg-gray-800 text-white py-2 rounded font-semibold">
//                   VIEW CART
//                 </button>
//                 <button className="bg-red-600 text-white py-2 rounded font-semibold">
//                   CHECK OUT
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { useCart, CartItem } from "../context/setCartCount";
import SweetsDropdown from "./SweetsDropDown";
import SavouriesDropdown from "./SavouriesDropDown";
import BakeryDropdown from "./BakeryDropDown";
import BulkOrder from "./BulkOrder";

const Navbar: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems } = useCart();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Navigation items
  const navItems = ["Sweets", "Savouries", "Bakery", "Hampers", "Bulk Orders"];

  // Toggle dropdown for each nav item
  const toggleDropdown = (item: string) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  // Price calculation (demo logic)
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = 0;      // Adjust as needed
  const shipping = 0; // Adjust as needed
  const total = subtotal + tax + shipping;

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
                {item}
                {/* Only show the dropdown icon for items other than Hampers and Bulk Orders */}
                {item !== "Hampers" && item !== "Bulk Orders" && <span className="ml-1">▼</span>}
              </button>

              {/* Render the dropdown if open */}
              {openDropdown === item && (
                <div className="absolute left-0 mt-2 z-50 bg-white shadow-lg rounded-md">
                  {item === "Sweets" && <SweetsDropdown />}
                  {item === "Savouries" && <SavouriesDropdown />}
                  {item === "Bakery" && <BakeryDropdown />}
                  {item === "Hampers" && (
                    <div className="p-4">
                      <h3 className="font-bold mb-2">Hampers</h3>
                      <p className="text-sm text-gray-700">
                        This is the Hampers content. Replace with your hamper details.
                      </p>
                    </div>
                  )}
                  {item === "Bulk Orders" && (
                    <div className="p-4 w-96">
                      <BulkOrder />
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center space-x-6 text-black">
          <FaSearch className="text-lg cursor-pointer hover:text-red-600" />
          <FaUser className="text-lg cursor-pointer hover:text-red-600" />
          <div className="relative" onClick={() => setCartOpen(!cartOpen)}>
            <FaShoppingCart className="text-lg cursor-pointer hover:text-red-600" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </div>
        </div>
      </div>

      {/* Cart Dropdown / Sidebar */}
      {cartOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-md p-4 z-50">
          <h3 className="text-lg font-semibold mb-2">Cart</h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              <ul className="space-y-4 mb-4">
                {cartItems.map((item: CartItem) => (
                  <li key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-600">Weight: {item.weight}</p>
                        <p className="text-sm text-gray-600">Price: ₹ {item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-sm">Qty: {item.quantity}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Order Special Instructions
                </label>
                <textarea
                  className="w-full border rounded p-2 text-sm"
                  rows={2}
                  placeholder="Any specific requests?"
                />
              </div>

              <div className="text-sm space-y-1 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹ {total.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <button className="bg-gray-800 text-white py-2 rounded font-semibold">
                  VIEW CART
                </button>
                <button className="bg-red-600 text-white py-2 rounded font-semibold">
                  CHECK OUT
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;






