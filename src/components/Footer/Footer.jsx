import React from "react";
import Heading from "../common/Heading/Heading";

const Footer = (props) => {
  return (
    <footer className="bg-white text-darkcolor dark:bg-darkcolor dark:text-textcolor rotate-180 shadow-md shadow-darkcolor dark:shadow-white">
      <div className="container page-center py-2 rotate-180 flex items-center gap-5">
        <div>
          <Heading
            headingClass="text-xl font-semibold font-serif duration-300"
            headingName="M.R Portfolio"
          />
        </div>
        <div>
           <p>
            © {new Date().getFullYear()} M.R Portfolio. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
