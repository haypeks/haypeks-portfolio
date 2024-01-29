import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../images/logo.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },

    {
      id: 2,
      link: "about",
    },

    {
      id: 3,
      link: "portfolio",
    },

    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center  w-full py-4 px-4 bg-gray-900 fixed">
      <div>
        <img className="w-24 h-6.24" src={Logo} alt="" />
      </div>
      <div className="flex gap-4">
        <ul className="hidden sm:flex justify-between items-center text-white">
          {links.map(({ id, link }) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer uppercase text-xs hover:scale-110 duration-200 "
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <button className="bg-primary px-6  rounded -mr-2 sm:mr-0">
          <a href="./resume.pdf">Resume</a>
        </button>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-10 sm:hidden"
        >
          {nav ? (
            <FaTimes size={30} className="text-white" />
          ) : (
            <FaBars size={30} className="text-white" />
          )}
        </div>

        {nav && (
          <ul className="flex flex-col  gap-8 justify-center items-center absolute top-0 left-0 w-full h-screen mt-14 bg-black  text-white">
            {links.map(({ id, link }) => (
              <li
                key={link.id}
                className="px-4  cursor-pointer uppercase text-lg text-gray-300 hover:scale-110 duration-200 "
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
