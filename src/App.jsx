import "./App.css";
import React from "react";
import HeaderNav from "./components/HeaderNav";
import Hero from "./components/Hero";
import About from "./components/About";
import MemberSection from "./components/MemberSection";
import DiscographySection from "./components/DiscographySection";
import FanclubSection from "./components/FanclabSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <HeaderNav />
      <Hero />
      <About />
      <MemberSection />
      <DiscographySection />
      <FanclubSection />
      <Footer />
    </div>
  );
}

export default App;
