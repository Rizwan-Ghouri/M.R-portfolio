import {
  BiCloset,
  BiMenu,
  BiSolidMoon,
  BiSolidSun,
  BiWindowClose,
} from "react-icons/bi";
import { Navlinks } from "../../utils/constants/Navlink";
import PropTypes from "prop-types";
import Heading from "../common/Heading/Heading";
import ResponsiveMenu from "./ResponsiveMenu";
import { useState } from "react";

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <nav className="container page-center bg-textcolor text-darkcolor dark:bg-darkcolor dark:text-textcolor shadow-md shadow-darkcolor dark:shadow-textcolor px-4 py-1 fixed top-0 inset-x-0 z-50">
        <div className="flex items-center justify-between py-2 md:px-5">
          <div>
            <Heading
              headingClass="text-2xl font-semibold font-serif text-red-900 dark:text-yellow-400"
              headingName="M.R Portfolio"
            />
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center justify-between gap-8">
              {Navlinks.map((data) => {
                return (
                  <li
                    className="font-semibold text-lg hover:p-0.5 hover:border-b-2 duration-300 cursor-pointer hover:text-bluecolor"
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
          <div className="md:hidden flex justify-between">
            {theme === "dark" ? (
              <div className="flex gap-2 items-center">
                <BiSolidSun
                  className="text-2xl cursor-pointer"
                  onClick={() => setTheme("light")}
                />
                {showMenu ? (
                  <>
                    <button
                      className="text-2xl px-2 cursor-pointer md:hidden"
                      onClick={() => setShowMenu(false)}
                    >
                      X
                    </button>
                  </>
                ) : (
                  <BiMenu
                    className="text-3xl cursor-pointer md:hidden"
                    onClick={() => setShowMenu(true)}
                  />
                )}
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <BiSolidMoon
                  className="text-2xl cursor-pointer"
                  onClick={() => setTheme("dark")}
                />
                {showMenu ? (
                  <>
                    <button
                      className="text-2xl px-2 cursor-pointer md:hidden"
                      onClick={() => setShowMenu(false)}
                    >
                      X
                    </button>
                  </>
                ) : (
                  <BiMenu
                    className="text-3xl cursor-pointer md:hidden"
                    onClick={() => setShowMenu(true)}
                  />
                )}
              </div>
            )}
          </div>
        </div>
        {showMenu ? (
          <ResponsiveMenu className="block" setShowMenu={setShowMenu} />
        ) : null}
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Navbar;
