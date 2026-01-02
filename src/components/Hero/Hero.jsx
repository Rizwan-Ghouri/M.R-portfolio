import React from "react";
import Heading from "../common/Heading/Heading";
import bannerImg from "/assets/images/features.webp.gif";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <div className=" bg-textcolor text-darkcolor dark:bg-darkcolor dark:text-textcolor pt-5">
      <div className="container page-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center min-h-145 ">
          <div className="space-y-3 order-2 sm:order-1 md:p-5 ">
            <div data-aos="fade-up" data-aos-delay="0">
              <Heading
                headingClass="text-md md:text-xl font-semibold font-serif duration-300"
                headingName="Assalamualikom I'm"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <Heading
                headingClass="text-xl md:text-3xl  font-semibold font-serif duration-300"
                headingName="Muhammad Rizwan"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <Heading
                headingClass="text-xl md:text-4xl font-semibold font-serif duration-300"
                headingName="I'm a Frontend Developer"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="700">
              <p className="text-lg">
                I am Passionate Frontend Developer Focused on Modern,
                User-Friendly Interfaces
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              className="flex items-center space-x-5 text-4xl py-5 "
            >
              <a
                href="https://www.linkedin.com/in/m-rizwanidrees/"
                target="_blank"
              >
                <FaLinkedinIn className="hover:text-3xl hover:text-bluecolor dark:dark:hover:text-hover duration-300" />
              </a>
              <a href="https://github.com/Rizwan-Ghouri" target="_blank">
                <FaGithub className="hover:text-3xl hover:text-bluecolor dark:dark:hover:text-hover duration-300" />
              </a>
            </div>
          </div>
          <div className="order-1 sm:order-2 p-8 ">
            <img className="gelatine" src={bannerImg} alt="mainImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
