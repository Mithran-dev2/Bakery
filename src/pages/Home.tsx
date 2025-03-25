import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="text-center bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <h1 className="text-4xl font-bold text-red-600">Heartly Welcome to Our Store</h1>
        <div className="flex items-center justify-center mt-4">
          <img src="/assets/bakery logo.jpg" alt="Shree Mithai Logo" className="w-40 h-auto" />
        </div>
      </motion.div>

      {/* Best of our Classics */}
      <section className="mt-10 px-4">
        <h2 className="text-3xl font-bold mb-6 text-red-600">Best of our Classics!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Kaju Katli", price: "287.50", img: "/assets/kaju-katli.jpg" },
            { name: "Boondhi Ladoo", price: "185.00", img: "/assets/boondhi-ladoo.jpg" },
            { name: "Spl. Madras Mixture", price: "74.00", img: "/assets/spl-madras-mixture.jpg" },
            { name: "Spl. Cow Milk Peda", price: "180.00", img: "/assets/spl-cow-milk-peda.jpg" },
            { name: "Kaju boat", price: "305.50", img: "/assets/kaju-boat.jpg" },
            { name: "Kaju mango roll", price: "290.50", img: "/assets/kaju-mango-roll.jpg" },
            { name: "Kesar badam katli", price: "287.50", img: "/assets/kesar-badam-katli.jpg" },
            { name: "sangam Burfi", price: "300.00", img: "/assets/sangam-burfi.jpg" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white p-4 rounded-lg shadow-lg"
            >
              <img src={item.img} alt={item.name} className="w-full h-56 object-cover rounded-md" />
              <h3 className="mt-4 font-semibold text-gray-800">{item.name}</h3>
              <p className="text-red-600 font-bold">from Rs. {item.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Explore Our Collection */}
      <section className="mt-10 px-4">
        <h2 className="text-3xl font-bold mb-6 text-red-600">Explore Our Collection</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {/* Add more items here */}
        </motion.div>
      </section>
    </div>
  );
};

export default Home;