import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [showSweetsDropdown, setShowSweetsDropdown] = useState(false);
  const [showSavouriesDropdown, setShowSavouriesDropdown] = useState(false);

  // Data for Sweets dropdown
  const sweetsItems = [
    "Cashew Sweets",
    "Almond Sweets",
    "Chee Sweets",
    "Milk Sweets",
    "Mixed Dry Fruit Sweets",
    
  ];

  // Data for Savouries dropdown
  const savouriesItems = [
    "Mixtures & Sev",
    "Chips & Snacks",
    "Roasted/Baked Savouries",
    "Dry Fruit Savouries",
    "Dry Fruit Tray",
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border-b-2 border-red-600 sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <img
            src="/assets/bakery logo.jpg"
            alt="bakery"
            style={{ width: "1.5in", height: "0.75in" }}
            className="object-contain"
          />
        </motion.div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-black font-semibold">
          {["Sweets", "Savouries", "Bakery", "Hampers", "Bulk Orders"].map(
            (item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer hover:text-red-600 relative"
                onMouseEnter={() => {
                  if (item === "Sweets") setShowSweetsDropdown(true);
                  if (item === "Savouries") setShowSavouriesDropdown(true);
                }}
                onMouseLeave={() => {
                  if (item === "Sweets") setShowSweetsDropdown(false);
                  if (item === "Savouries") setShowSavouriesDropdown(false);
                }}
              >
                <button className="focus:outline-none flex items-center">
                  {item}
                  {index < 3 && <span className="ml-1">▼</span>}
                </button>

                {/* Sweets Dropdown */}
                {item === "Sweets" && showSweetsDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-48 z-50"
                  >
                    <ul className="py-2">
                      {sweetsItems.map((sweet, idx) => (
                        <li
                          key={idx}
                          className="px-4 py-2 hover:bg-red-50 cursor-pointer"
                        >
                          <a href={`/collections/${sweet.toLowerCase().replace(/\s+/g, "-")}`}>
                            {sweet}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Savouries Dropdown */}
                {item === "Savouries" && showSavouriesDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-48 z-50"
                  >
                    <ul className="py-2">
                      {savouriesItems.map((savoury, idx) => (
                        <li
                          key={idx}
                          className="px-4 py-2 hover:bg-red-50 cursor-pointer"
                        >
                          <a href={`/collections/${savoury.toLowerCase().replace(/\s+/g, "-")}`}>
                            {savoury}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.li>
            )
          )}
        </ul>

        {/* Action Icons */}
        <div className="flex items-center space-x-6 text-black">
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaSearch className="text-lg cursor-pointer hover:text-red-600" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaUser className="text-lg cursor-pointer hover:text-red-600" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <div className="relative">
              <FaShoppingCart className="text-lg cursor-pointer hover:text-red-600" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
                0 {/* TODO: Replace with dynamic cart count */}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;