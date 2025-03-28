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
import MixtureSevSection from "../components/MixtureSevSection";
import ChipsAndSnacksSection from "../components/ChipsAndSnacksSection";

const App: React.FC = () => {
  return (
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



          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
