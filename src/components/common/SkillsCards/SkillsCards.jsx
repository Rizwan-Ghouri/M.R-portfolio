import React from "react";
import Heading from "../Heading/Heading";
// import PropTypes from 'prop-types'

const SkillsCards = ({ title, description, level, icon }) => {
  const Icon = icon;

  return (
    <div data-aos="fade-up"  className="text-darkcolor dark:bg-darkcolor dark:text-white rounded-2xl hover:border duration-300">
      <div className="shadow-darkcolor  dark:shadow-textcolor rounded-2xl shadow-lg p-5">
        <div className="flex items-center gap-4">
          <span>{<Icon className="text-3xl" />}</span>
          <Heading
            headingClass="text-3xl font-semibold font-serif duration-300"
            headingName={title}
          />
        </div>
        <h2 className="font-semibold ">
          level : <span className="font-normal">{level}</span>
        </h2>
        <p className="font-semibold ">
          Description : <span className="font-normal">{description}</span>
        </p>
      </div>
    </div>
  );
};

// SkillsCards.propTypes = {

// }

export default SkillsCards;
