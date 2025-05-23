
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden text-black py-10">
      {/* Background Gradient */}
      <div className="absolute inset-0 w-full h-full z-[-1] bg-gradient-to-r from-gray-100 to-gray-300" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Logo */}
          <div>
            <img src="/assets/bakery logo.jpg" alt="Shree Mithai" className="h-16 mx-auto" />
          </div>

          {/* About Section */}
          <div>
            <h3 className="font-bold mb-3 uppercase">About</h3>
            <ul className="space-y-2">
              {["Home Page", "About Us", "Our Branches", "Search", "All Products", "Leave Us Your Feedback", "Contact Us"].map((item, index) => (
                <li key={index} className="cursor-pointer hover:text-red-500">{item}</li>
              ))}
            </ul>
          </div>

          {/* Policies Section */}
          <div>
            <h3 className="font-bold mb-3 uppercase">Policies</h3>
            <ul className="space-y-2">
              {["Terms & Conditions", "Privacy Policy", "Refund Policy", "Shipping Policy"].map((item, index) => (
                <li key={index} className="cursor-pointer hover:text-red-500">{item}</li>
              ))}
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="font-bold mb-3 uppercase">Explore</h3>
            <ul className="space-y-2">
              {["Sweets", "Savouries", "Bakery", "Hampers", "Bulk Orders"].map((item, index) => (
                <li key={index} className="cursor-pointer hover:text-red-500">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          {[
            { icon: <FaFacebook />, link: "#" },
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaTwitter />, link: "#" },
            { icon: <FaYoutube />, link: "#" },
          ].map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="text-2xl cursor-pointer hover:text-red-500">
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-sm mt-6 opacity-80">© {new Date().getFullYear()} ThenMozhi Sweets • Powered by Shopify</p>
      </div>
    </footer>
  );
};

export default Footer;
