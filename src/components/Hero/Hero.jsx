import React from "react";
import Heading from "../common/Heading/Heading";
import mainImage from "/assets/mainImage.jpg";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
// import PropTypes from 'prop-types'

const Hero = ({ theme }) => {
  return (
    <div className="text-darkcolor dark:bg-darkcolor dark:text-white">
      <div className="container page-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 min-h-140 place-items-center p-5">
          <div className="space-y-4 order-2 sm:order-1 p-2 md:p-12">
            <Heading
              headingClass="text-2xl font-semibold font-serif duration-300"
              headingName="Muhammad Rizwan"
            />
            <Heading
              headingClass="text-3xl font-semibold font-serif duration-300"
              headingName="I am Frontend Developer"
            />
            <p className="text-lg">
              I am Passionate Frontend Developer Focused on Modern,
              User-Friendly Interfaces
            </p>
            <div className="flex items-center space-x-5 text-4xl">
              <a href="https://www.linkedin.com/in/m-rizwanidrees/" target="_blank"><FaLinkedinIn className="hover:text-hover" /></a>
              <a href="https://github.com/Rizwan-Ghouri" target="_blank"><FaGithub className="hover:text-hover" /></a>
              <a href="https://wa.me/923211628950" target="_blank"><FaWhatsapp className="hover:text-hover" /></a>
            </div>
            <div>
              <button className="border-2 p-2 rounded-lg font-semibold hover:bg-hover hover:text-darkcolor cursor-pointer">Dowload CV</button>
            </div>
          </div>
          <div className="bg-darkcolor dark:bg-textcolor p-1 shadow-darkcolor dark:shadow-textcolor shadow-md rounded-br-[60px] rounded-tl-[60px] rounded-tr-[30px] m-6 order-1 sm:order-2">
            <img
              className="max-h-65 md:max-h-85 rounded-br-[60px] rounded-tl-[60px] rounded-tr-[30px] "
              src={mainImage}
              alt="mainImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Hero.propTypes = {

// }

export default Hero;
