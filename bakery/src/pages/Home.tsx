
const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Heartly Welcome to Our Store </h1>
      <div className="flex items-center justify-center mt-4">
        <img src="/assets/bakery logo.jpg" alt="Shree Mithai Logo" className="w-40 h-auto" />
      </div>

      {/* Best of our Classics */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Best of our Classics!</h2>
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
            <div key={index} className="text-center">
              <img src={item.img} alt={item.name} className="w-full h-56 object-cover rounded-md" />
              <h3 className="mt-4 font-semibold">{item.name}</h3>
              <p className="text-red-600 font-bold">from Rs. {item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Our Collection */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Explore Our Collection</h2>
        
      </section>
     
    </div>
  );
};

export default Home;
