import React, { useState } from "react";
import { Navlinks } from "../../utils/constants/Navlink";

const ResponsiveMenu = () => {
  return (
    <div className="bg-textcolor text-darkcolor dark:bg-darkcolor dark:text-textcolor sticky top-10 md:hidden">
      <ul className="p-2 shadow-darkcolor dark:shadow-textcolor">
        {Navlinks.map((links) => {
          return (
            <li
              className=" text-2xl font-serif hover:text-bluecolor dark:hover:text-hover duration-300"
              key={links.id}
            >
              <a href={links.link}>{links.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResponsiveMenu;
