import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

            {/* Milk Sweets */}
            <Route path="/sweets/mixed-dry-fruit-sweets" element={<MixedDryFruitSweetsSection />} />

            {/* Mixture & Sev */}
            <Route path="/savouries/mixture-sev" element={<MixtureSevSection />} />

            {/* Chips & Snacks */}
            <Route path="/savouries/chipsandsnacks" element={<ChipsAndSnacksSection />} />

            {/* Roasted & Baked */}
            <Route path="/savouries/RoastedBaked" element={<RoastedBakedSavouries />} />

            {/* Dry fruits Tray */}
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



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Components (fixed imports)
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


// // Product Data (fixed path)
// import { products } from "../Data/Product";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home products={products} />} />
//             <Route path="/home" element={<SweetsAndTreats />} />
            
//             {/* Unified product detail route */}
//             <Route 
//               path="/products/:id" 
//               element={<ProductDetails products={products} />} 
//             />

//             {/* Other routes remain unchanged */}
//             {/* ... */}
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

/*************************************************************************************************** */

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Components
// import Navbar from "../components/Navbar";
// import Footer from "../components/footer";
// import Home from "./Home";
// import SweetsAndTreats from "../components/SweetsAndTreats";
// import ProductDetails from "../components/ProductDetails";
// import ProductDetailPage from "../components/ProductDetails";

// // Product Data
// import { products } from "../Data/Product";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         {/* Navbar */}
//         <Navbar />

//         {/* Main Content */}
//         <main className="flex-grow">
//           <Routes>
//             {/* Home Page */}
//             <Route path="/" element={<Home products={products}/>} />
//             <Route path="/home" element={<SweetsAndTreats />} />
            
//             {/* Product Details Pages */}
//             <Route
//               path="/product-details/:id"
//               element={<ProductDetails products={products} />}
//             />
//             <Route path="/products/:id" element={<ProductDetailPage />} />
//           </Routes>
//         </main>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
