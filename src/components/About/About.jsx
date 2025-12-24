import React from "react";
import Heading from "../common/Heading/Heading";
import { FaDownload, FaFile } from "react-icons/fa";
import mainImage from "/assets/images/mainImage.jpg";
import circleImage from "/assets/images/circle-shape.webp";
import Mypdf from "/assets/images/Muhammad Rizwan CV.pdf";

const About = () => {
  return (
    <div
      id="about"
      className="text-darkcolor bg-hover/35 dark:bg-hover/40 dark:text-darkcolor min-h-150"
    >
      <div className="container page-center p-5 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 place-items-center min-h-155">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="space-y-4 order-1 sm:order-2 md:p-5 py-7"
          >
            <div className="flex items-center">

            <img className="w-15" src={circleImage} alt="circleImage" />

            <Heading
              headingClass="text-4xl inline font-semibold font-serif duration-300"
              headingName="About Me"
              />
              </div>
            <p className="text-sm text-justify">
              “I am Rizwan Idrees, a passionate Frontend Developer with a strong
              foundation in HTML, CSS, and JavaScript. I specialize in building
              responsive, user-friendly web applications that offer seamless
              user experiences. Currently, I am deepening my expertise in React,
              a powerful JavaScript library for creating dynamic and interactive
              UIs. I thrive in collaborative environments and enjoy turning
              complex design concepts into clean, functional code. My focus is
              on writing efficient, maintainable front-end solutions that
              enhance performance and usability across devices”
            </p>
            <div className="flex items-center gap-5">
              <a
                href={Mypdf}
                download
                className="flex items-center justify-around w-40 border-2 p-2 rounded-lg font-semibold hover:bg-bluecolor hover:text-textcolor duration-300 cursor-pointer mb-5"
              >
                <FaDownload />
                Download CV
              </a>
              <a
                href="https://drive.google.com/file/d/15VyphN2YMefBmLP65j0a3py4XWHAzSDw/view"
                target="_blank"
                className="flex items-center justify-around w-40 border-2 p-2 rounded-lg font-semibold hover:bg-bluecolor hover:text-textcolor duration-300 cursor-pointer mb-5"
              >
                <FaFile />
                Certificate
              </a>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="bg-textcolor dark:bg-darkcolor p-0.5 shadow-darkcolor shadow-xl rounded-br-[60px] rounded-tl-[60px] rounded-tr-[30px]  md:order-1"
          >
            <img
              className="w-2xl md:w-md rounded-br-[60px] rounded-tl-[60px] rounded-tr-[30px] "
              src={mainImage}
              alt="mainImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
