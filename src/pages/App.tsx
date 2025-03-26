import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Home from "./Home";
import SweetsAndTreats from "../components/SweetsAndTreats";

import CashewSweetSection from "../components/CashewSweetsSection";

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

            Sweets & Treats Section
            <Route path="/home" element={<SweetsAndTreats />} />

            {/* Cashew Sweet Section */}
            <Route path="/sweet-section" element={<CashewSweetSection />} />
          </Routes>
          
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
