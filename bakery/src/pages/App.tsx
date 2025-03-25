import React from "react";
import Navbar from "../components/Navbar"; // Ensure correct import
import Footer from "../components/footer";
import Home from "./Home";
import SweetsAndTreats from "../components/SweetsAndTreats"; // Import the SweetsAndTreats component

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Render the Home component */}
        <Home />

        {/* Render the SweetsAndTreats component below the Home component */}
        <SweetsAndTreats />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;