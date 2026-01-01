import React from "react";
import Heading from "../common/Heading/Heading";
import skillsCards from "../../utils/constants/SkillsCards";
import SkillsCards from "../common/SkillsCards/SkillsCards";
import circleImage from "/assets/images/circle-shape.webp";

const Skills = () => {
  return (
    <div
      id="skills"
      className="text-darkcolor dark:bg-darkcolor dark:text-textcolor py-5 pt-15"
    >
      <div className="container page-center">
        <div className="flex items-center justify-center">
          <img className="w-15" src={circleImage} alt="circleImage" />
          <Heading
            headingClass="text-4xl py-5 font-semibold font-serif duration-300"
            headingName="My Skills"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCards.map((data) => {
            const { id, title, description, level, icon } = data;
            return (
              <div key={id}>
                <SkillsCards
                  icon={icon}
                  title={title}
                  description={description}
                  level={level}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Skills.propTypes = {

// }

export default Skills;
