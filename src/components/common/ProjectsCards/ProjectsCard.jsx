import React from "react";
import Heading from "../Heading/Heading";
import { FaGithub, FaLink } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
// import PropTypes from 'prop-types'

const ProjectsCard = ({
  title,
  description,
  video,
  tech,
  live,
  github,
  image,
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className=" dark:border-textcolor"
    >
      <div className="border-2 rounded-2xl hover:rounded-none hover:shadow-xl hover:shadow-darkcolor duration-500 overflow-hidden">
        <div
          onClick={() => window.open(live, "_blank")}
          className="cursor-pointer"
        >
          {/* video  */}
          {video ? (
            <div className="sm:h-48 md:h-50 overflow-hidden">
              <video
                src={video}
                loop
                muted
                autoPlay
                // controls
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <img className="w-full h-50" src={`${image}`} alt="" />
          )}

          {/* Content */}
          <div className="px-2 h-32 md:h-32 lg:h-36">
            <Heading
              headingClass="text-xl py-1 font-semibold font-serif duration-300"
              headingName={title}
            />
            <p className="text-sm md:text-md py-1">
              <span className="font-bold text-lg">description : </span>
              {description}
            </p>
            {/* tech */}
            <marquee className="rounded-lg" behavior="scroll" direction="left">

            <div className="flex lex-wrap items-center gap-3 text-md md:gap-4 px-2 my-1 text-darkcolor font-bold ">
              {tech.map((tech) => {
                return (
                  <div key={tech}>
                      {tech}
                  </div>
                );
              })}
            </div>
              </ marquee>
          </div>
        </div>

        {/* btn */}
        <div className="flex items-center justify-around space-x-3 text-2xl p-2">
          <a
            href={github}
            className="text-center p-2 hover:text-3xl duration-300 dark:bg-textcolor bg-darkcolor text-textcolor dark:text-darkcolor rounded-2xl"
            target="_blank"
            title="Github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.youtube.com/@GhouriDeveloper"
            className="text-center p-2 hover:text-3xl hover:text-red-700 duration-300 dark:bg-textcolor bg-darkcolor text-textcolor dark:text-darkcolor rounded-2xl"
            target="_blank"
            title="Youtube"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

// ProjectsCard.propTypes = {

// }

export default ProjectsCard;
