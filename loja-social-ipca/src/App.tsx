import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Donations from "./pages/Donations";
import Campaigns from "./pages/Campaigns";
import About from "./pages/About";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/doacoes" element={<Donations />} />
          <Route path="/campanhas" element={<Campaigns />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
