import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Menu from "./components/Menu.jsx";
import About from "./components/About.jsx";
import OtherMenu from "./components/OtherMenu.jsx";
import Review from "./components/Review.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="speciality">
        <Menu />
      </div>

      <div id="about">
        <About />
      </div>

      <br /><br />
      <Footer />
    </>
  );
};

export default App;
