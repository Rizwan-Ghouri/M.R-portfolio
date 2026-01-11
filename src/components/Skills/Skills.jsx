import React from "react";
import Heading from "../common/Heading/Heading";
import skillsCards from "../../utils/constants/SkillsCards";
import SkillsCards from "../common/SkillsCards/SkillsCards";

const Skills = () => {
  return (
    <div
      id="skills"
      className="text-darkcolor dark:bg-darkcolor dark:text-textcolor p-5 pt-15 h-full h-0-screen         flex flex-col justify-center items-center"
    >
      <div>
        <div className="flex items-center justify-center">
          <Heading
            headingClass="text-4xl py-5 font-semibold font-serif duration-300"
            headingName="My Skills"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCards.map((data, index) => (
            <div key={index}>
              <SkillsCards {...data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Skills.propTypes = {

// }

export default Skills;
