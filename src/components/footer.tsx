import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-b from-red-900 to-black text-white py-10"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex justify-center md:justify-start"
          >
            <img src="/assets/bakery logo.jpg" alt="Shree Mithai" className="h-16" />
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
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
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-red-500 cursor-pointer transition"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Policies Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
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
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-red-500 cursor-pointer transition"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Explore Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="font-bold mb-3 uppercase">Explore</h3>
            <ul className="space-y-2">
              {["Sweets", "Savouries", "Bakery", "Hampers", "Bulk Orders"].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-red-500 cursor-pointer transition"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-6 mt-8"
        >
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
              whileHover={{ scale: 1.2 }}
            >
              <span className="text-2xl cursor-pointer hover:text-red-500 transition">
                {social.icon}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center text-sm mt-6"
        >
          © {new Date().getFullYear()} ThenMozhi Sweets • Powered by Shopify
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;