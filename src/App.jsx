import React from "react";
import Hero from "./Components/LandingPage/Hero";
import Navbar from "./Components/Navbar";
import "./index.css";
import Slider from "./Components/LandingPage/Slider";
import PowerAi from "./Components/LandingPage/PowerAi";
import Review from "./Components/LandingPage/Review";
import Footer from "./Components/LandingPage/Footer";

const App = () => {
  return (
    <div className="flex flex-col">
      <div class="scrollWather"></div>
      <Navbar />
      <Hero />
      <Slider />
      <PowerAi />
      <Review />
      <Footer />
    </div>
  );
};

export default App;
