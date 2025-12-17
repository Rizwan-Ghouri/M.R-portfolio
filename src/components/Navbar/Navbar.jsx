import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { Navlinks } from "../../utils/constants/Navlink";
import PropTypes from "prop-types";
import Heading from "../common/Heading/Heading";

const Navbar = ({ theme, setTheme }) => {
  return (
    <nav className="bg-white text-darkcolor dark:bg-darkcolor dark:text-textcolor shadow-md shadow-darkcolor dark:shadow-white px-4 py-1 rounded-b-2xl relative z-10">
      <div className="container page-center">
        <div className="flex items-center justify-between p-2">
          <div>
            <Heading
              headingClass="text-xl font-semibold font-serif duration-300"
              headingName="Muhammad Rizwan"
            />
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center justify-between gap-8">
              {Navlinks.map((data) => {
                return (
                  <li
                    className="font-semibold text-lg hover:text-hover duration-300 cursor-pointer"
                    key={data.id}
                  >
                    <a href={data.link}>{data.name}</a>
                  </li>
                );
              })}
              {/* dark mode btn */}
              <div className="duration-300">
                {theme === "dark" ? (
                  <BiSolidSun
                    className="text-2xl cursor-pointer"
                    onClick={() => setTheme("light")}
                  />
                ) : (
                  <BiSolidMoon
                    className="text-2xl cursor-pointer"
                    onClick={() => setTheme("dark")}
                  />
                )}
              </div>
            </ul>
          </div>
          {/* dark mode btn */}
          <div className="md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                className="text-2xl cursor-pointer"
                onClick={() => setTheme("light")}
              />
            ) : (
              <BiSolidMoon
                className="text-2xl cursor-pointer"
                onClick={() => setTheme("dark")}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Navbar;
