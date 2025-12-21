import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "../Projects/Projects";

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
    // <div className="bg-white dark:bg-darkcolor dark:text-white">
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
