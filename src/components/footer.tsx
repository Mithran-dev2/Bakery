// import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-black text-white py-10">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
//           {/* Logo */}
//           <div>
//             <img src="/assets/bakery logo.jpg" alt="Shree Mithai" className="h-16" />
//           </div>

//           {/* About Section */}
//           <div>
//             <h3 className="font-bold mb-3 uppercase">About</h3>
//             <ul className="space-y-2">
//               {[
//                 "Home Page",
//                 "About Us",
//                 "Our Branches",
//                 "Search",
//                 "All Products",
//                 "Leave Us Your Feedback",
//                 "Contact Us",
//               ].map((item, index) => (
//                 <li key={index} className="hover:text-red-500 cursor-pointer transition">
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Policies Section */}
//           <div>
//             <h3 className="font-bold mb-3 uppercase">Policies</h3>
//             <ul className="space-y-2">
//               {[
//                 "Terms & Conditions",
//                 "Privacy Policy",
//                 "Refund Policy",
//                 "Shipping Policy",
//               ].map((item, index) => (
//                 <li key={index} className="hover:text-red-500 cursor-pointer transition">
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Explore Section */}
//           <div>
//             <h3 className="font-bold mb-3 uppercase">Explore</h3>
//             <ul className="space-y-2">
//               {["Sweets", "Savouries", "Bakery", "Hampers", "Bulk Orders"].map((item, index) => (
//                 <li key={index} className="hover:text-red-500 cursor-pointer transition">
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Social Icons */}
//         <div className="flex justify-center space-x-6 mt-8">
//           {[
//             { icon: <FaFacebook />, link: "#" },
//             { icon: <FaInstagram />, link: "#" },
//             { icon: <FaTwitter />, link: "#" },
//             { icon: <FaYoutube />, link: "#" },
//           ].map((social, index) => (
//             <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
//               <span className="text-2xl cursor-pointer hover:text-red-500 transition">
//                 {social.icon}
//               </span>
//             </a>
//           ))}
//         </div>

//         {/* Copyright */}
//         <p className="text-center text-sm mt-6">
//           © {new Date().getFullYear()} Shree Mithai • Powered by Shopify
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden text-black py-10"
    >
      {/* Background Gradient Animation */}
      <motion.div
        animate={{
          background: [
            "linear-gradient(45deg, #f8f8f8, #e0e0e0)", // Off-white gradient
            "linear-gradient(45deg, #333333, #000000)", // Black gradient
            "linear-gradient(45deg, #f8f8f8, #e0e0e0)", // Back to Off-white
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0 w-full h-full z-[-1]"
      />

      {/* Floating Black Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-black rounded-full opacity-40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -10, 10, 0],
            x: [0, -5, 5, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Logo with Hover Effect */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="/assets/bakery logo.jpg" alt="Shree Mithai" className="h-16 mx-auto" />
          </motion.div>

          {/* About Section */}
          <div>
            <h3 className="font-bold mb-3 uppercase">About</h3>
            <ul className="space-y-2">
              {[
                "Home Page",
                "About Us",
                "Our Branches",
                "Search",
                "All Products",
                "Leave Us Your Feedback",
                "Contact Us",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5, color: "#f87171" }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer transition"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Policies Section */}
          <div>
            <h3 className="font-bold mb-3 uppercase">Policies</h3>
            <ul className="space-y-2">
              {[
                "Terms & Conditions",
                "Privacy Policy",
                "Refund Policy",
                "Shipping Policy",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5, color: "#f87171" }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer transition"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="font-bold mb-3 uppercase">Explore</h3>
            <ul className="space-y-2">
              {["Sweets", "Savouries", "Bakery", "Hampers", "Bulk Orders"].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5, color: "#f87171" }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer transition"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons with Hover Animation */}
        <div className="flex justify-center space-x-6 mt-8">
          {[
            { icon: <FaFacebook />, link: "#" },
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaTwitter />, link: "#" },
            { icon: <FaYoutube />, link: "#" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#f87171" }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-2xl cursor-pointer transition">{social.icon}</span>
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-sm mt-6 opacity-80">
          © {new Date().getFullYear()} Shree Mithai • Powered by Shopify
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;



