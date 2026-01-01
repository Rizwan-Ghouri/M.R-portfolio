import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

// Components and Sections
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import ContectUs from "../../components/ContectUs/ContectUs";
import Footer from "../../components/Footer/Footer";
import Services from "../Services/Services";

const Home = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const getDocElement = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      getDocElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      getDocElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  
  return (
    <div className="overflow-x-hidden">

      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Skills />
      <Services />
      <Projects />
      <ContectUs />
      <Footer />
    </div>
  );
};

export default Home;
