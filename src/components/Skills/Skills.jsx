import React from "react";
import Heading from "../common/Heading/Heading";
import skillsCards from "../../utils/constants/SkillsCards";
import SkillsCards from "../common/SkillsCards/SkillsCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  function SampleNextArrow() {
    return null; // kuch render hi nahi hoga
  }
  function SamplePrevArrow() {
    return null; // kuch render hi nahi hoga
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,

        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,

          dots: true,
        },
      },
    ],
  };
  return (
    <div
      id="skills"
      className="text-darkcolor dark:bg-darkcolor dark:text-textcolor p-5 pt-15 h-100"
    >
      <div >
        <div className="flex items-center justify-center">
          <Heading
            headingClass="text-4xl py-5 font-semibold font-serif duration-300"
            headingName="My Skills"
          />
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
        <div className="slider-container">
          <Slider {...settings}>
            {skillsCards.map((data) => {
              const { id, title, description, level, icon } = data;
              return (
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3" key={id}>
                  <SkillsCards
                    icon={icon}
                    title={title}
                    description={description}
                    level={level}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

// Skills.propTypes = {

// }

export default Skills;
