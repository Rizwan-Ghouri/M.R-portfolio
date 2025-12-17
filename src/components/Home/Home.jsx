import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

const Home = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const getDocElement = document.documentElement;
  useEffect(() => {
    if(theme === "dark"){
        getDocElement.classList.add("dark");
        localStorage.setItem("theme","dark");
    }else{
        getDocElement.classList.remove("dark");
        localStorage.setItem("theme","light");
    }
  }, [theme]);

  return(
    // <div className="bg-white dark:bg-darkcolor dark:text-white h-screen">
    <div className="dark:bg-darkcolor dark:text-white">
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero theme={theme}/>
    </div>
  );
};

export default Home;
