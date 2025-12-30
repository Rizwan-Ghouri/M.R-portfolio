import React from "react";
import Heading from "../Heading/Heading";
// import PropTypes from 'prop-types'

const ServicesCards = ({ title, description, icon }) => {
  const Icon = icon;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className=" dark:border-textcolor "
    >
      <div className="border-2 hover:border-bluecolor rounded-2xl hover:rounded-none hover:shadow-xl hover:shadow-darkcolor duration-500 overflow-hidden h-72 flex text-center p-5 ">
        <div className="px-2 h-32 md:h-32 lg:h-36 flex flex-col space-y-2">
          <div className="flex justify-center">
            <p>{<Icon className="text-4xl md:text-6xl" />}</p>
          </div>
          <Heading
            headingClass="text-2xl text-center py-1 font-semibold font-serif duration-300"
            headingName={title}
          />
          <p className="text-sm md:text-md py-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

// ServicesCards.propTypes = {

// }

export default ServicesCards;
