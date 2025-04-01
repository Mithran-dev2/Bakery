// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/footer";
// import Home from "./Home";
// import SweetsAndTreats from "../components/SweetsAndTreats";
// import CashewSweetsSection from "../components/CashewSweetsSection";
// import AlmondSweetsSection from "../components/AlmondSweetsSection";
// import GheeSweetsSection from "../components/GheeSweetsSection";
// import MilkSweetsSection from "../components/MilksweetsSection";
// import MixedDryFruitSweetsSection from "../components/MixedDryFruitSweetsSection";
// import MixtureSevSection from "../components/MixturesSevSection";
// import ChipsAndSnacksSection from "../components/ChipsAndSnacksSection";
// import RoastedBakedSavouries from "../components/RoastedBakedSavouriesSection";
// import DryFruitTraySection from "../components/DryFruitsTraySection";
// import ProductDetails from "../components/ProductDetails";
// import  { CartProvider } from "../context/setCartCount";
// const App: React.FC = () => {
//   return (
//     <CartProvider>
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         {/* Navbar */}
//         <Navbar />

//         {/* Main Content */}
//         <main className="flex-grow">
//           <Routes>
//             {/* Home Page */}
//             <Route path="/" element={<Home />} />

//             {/* Sweets & Treats Section */}
//             <Route path="/home" element={<SweetsAndTreats />} />

//             {/* Cashew Sweets */}
//             <Route path="/sweets/cashew-sweets" element={<CashewSweetsSection />} />

//             {/* Almond Sweets */}
//             <Route path="/sweets/almond-sweets" element={<AlmondSweetsSection />} />
//             <Route path="/product-details/:id" element={<ProductDetails />} />
//             {/* Ghee Sweets */}
//             <Route path="/sweets/Ghee-sweets" element={<GheeSweetsSection />} />

//             {/* Milk Sweets */}
//             <Route path="/sweets/milk-sweets" element={<MilkSweetsSection />} />

//             {/* Milk Sweets */}
//             <Route path="/sweets/mixed-dry-fruit-sweets" element={<MixedDryFruitSweetsSection />} />

//             {/* Mixture & Sev */}
//             <Route path="/savouries/mixture-sev" element={<MixtureSevSection />} />

//             {/* Chips & Snacks */}
//             <Route path="/savouries/chipsandsnacks" element={<ChipsAndSnacksSection />} />

//             {/* Roasted & Baked */}
//             <Route path="/savouries/RoastedBaked" element={<RoastedBakedSavouries />} />

//             {/* Dry fruits Tray */}
//             <Route path="/savouries/DryFruitsTray" element={<DryFruitTraySection />} />



//           </Routes>
//         </main>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </Router>
//     </CartProvider>
//   );
// };

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Home from "./Home";
import SweetsAndTreats from "../components/SweetsAndTreats";
import CashewSweetsSection from "../components/CashewSweetsSection";
import AlmondSweetsSection from "../components/AlmondSweetsSection";
import GheeSweetsSection from "../components/GheeSweetsSection";
import MilkSweetsSection from "../components/MilksweetsSection";
import MixedDryFruitSweetsSection from "../components/MixedDryFruitSweetsSection";
import MixtureSevSection from "../components/MixturesSevSection";
import ChipsAndSnacksSection from "../components/ChipsAndSnacksSection";
import RoastedBakedSavouries from "../components/RoastedBakedSavouriesSection";
import DryFruitTraySection from "../components/DryFruitsTraySection";
import ProductDetails from "../components/ProductDetails";
import { CartProvider } from "../context/setCartCount";


// Sample product data
const products = [
  { id: 1, name: "Banana Chips", price: 100, image: "image.jpg", weight: "250g", quantity: 1 },
  { id: 2, name: "Almond Cookies", price: 150, image: "image2.jpg", weight: "300g", quantity: 1 },
];

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              {/* Home Page */}
              <Route path="/" element={<Home />} />

              {/* Sweets & Treats Section */}
              <Route path="/home" element={<SweetsAndTreats />} />

              {/* Cashew Sweets */}
              <Route path="/sweets/cashew-sweets" element={<CashewSweetsSection />} />

              {/* Almond Sweets */}
              <Route path="/sweets/almond-sweets" element={<AlmondSweetsSection />} />
              <Route path="/product-details/:id" element={<ProductDetails />} />

              {/* Ghee Sweets */}
              <Route path="/sweets/Ghee-sweets" element={<GheeSweetsSection />} />

              {/* Milk Sweets */}
              <Route path="/sweets/milk-sweets" element={<MilkSweetsSection />} />

              {/* Mixed Dry Fruit Sweets */}
              <Route path="/sweets/mixed-dry-fruit-sweets" element={<MixedDryFruitSweetsSection />} />

              {/* Mixture & Sev */}
              <Route path="/savouries/mixture-sev" element={<MixtureSevSection />} />

              {/* Chips & Snacks */}
              <Route path="/savouries/chipsandsnacks" element={<ChipsAndSnacksSection />} />

              {/* Roasted & Baked */}
              <Route path="/savouries/RoastedBaked" element={<RoastedBakedSavouries />} />

              {/* Dry Fruits Tray */}
              <Route path="/savouries/DryFruitsTray" element={<DryFruitTraySection />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;



