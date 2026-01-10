import React from "react";
import Heading from "../Heading/Heading";

const SkillsCards = ({ title, description, level, icon }) => {
  const Icon = icon;

  return (
    <div
      // data-aos="fade-up"
      className="text-darkcolor dark:bg-darkcolor dark:text-textcolor rounded-2xl hover:border-2 dark:hover:border-bluecolor hover:border-Dhover duration-300 m-2"
    >
      <div className="p-5 shadow-darkcolor hover:duration-500 dark:shadow-textcolor rounded-2xl shadow-md ">
        <div className="flex items-center gap-2">
          <span>{<Icon className="text-3xl" />}</span>
          <Heading
            headingClass="text-3xl font-semibold font-serif duration-300"
            headingName={title}
          />
        </div>
        <div>
          <h2 className="font-semibold ">
            level : <span className="font-normal">{level}</span>
          </h2>
          <p className="font-semibold scroll-m-1">
            Description : <span className="font-normal">{description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

// SkillsCards.propTypes = {

// }

export default SkillsCards;
