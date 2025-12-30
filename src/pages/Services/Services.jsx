import Heading from "../../components/common/Heading/Heading";
import ServicesCards from "../../components/common/ServicesCards/ServicesCards";
import ServicesCard from "../../utils/constants/ServicesCard";

const Services = () => {
  return (
    <div id="services" className="bg-hover text-darkcolor min-h-120 pt-15">
      <div className="container page-center">
        <div className="flex items-center justify-center">
          <Heading
            headingClass="text-4xl py-5 font-semibold font-serif duration-300"
            headingName="My Services"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3">
          {ServicesCard.map((data) => {
            const {id, title, description, icon} = data;
            return (
              <div  key={id}>
                <ServicesCards  title={title} description={description} icon={icon} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
