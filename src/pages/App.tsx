import React from "react";
import Navbar from "../components/Navbar";
import footer from "../components/footer"; 
import Home from "./Home";
import SweetsAndTreats from "../components/SweetsAndTreats";
import CashewSweetSection from "../components/CashewSweetsSection";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Render the Home component */}
        <Home />

        {/* Render the SweetsAndTreats component */}
        <SweetsAndTreats />

        {/* Render the CashewSweetSection component */}
        <CashewSweetSection />
      </main>

      {/* Footer */}
      <footer/>
    </div>
  );
};

export default App;
