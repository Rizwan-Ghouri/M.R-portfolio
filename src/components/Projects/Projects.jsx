import React from "react";
import Heading from "../common/Heading/Heading";
import ProjectsCards from "../../utils/constants/ProjectsCards";
import ProjectsCard from "../common/ProjectsCards/ProjectsCard";
import circleImage from "/assets/images/circle-shape.webp";

const Projects = () => {
  return (
    <div id="projects" className="text-darkcolor bg-hover/50 pb-3 pt-15">
      <div className="container page-center">

        <div className="flex items-center justify-center">
            <img className="w-15" src={circleImage} alt="circleImage" />
          <Heading
            headingClass="text-4xl py-5 font-semibold font-serif duration-300"
            headingName="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-3">
          {ProjectsCards.map((projectData) => {
            const { id, title, description, video, tech, live, github,image } =
              projectData;
            return (
              <div key={id}>
                <ProjectsCard
                  title={title}
                  description={description}
                  video={video}
                  image={image}
                  tech={tech}
                  live={live}
                  github={github}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
