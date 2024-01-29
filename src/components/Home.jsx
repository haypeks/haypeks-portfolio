import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithubSquare, FaMedium } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="bg-gradient-to-b from-black via-black to-gray-950 h-screen w-full"
    >
      <div className="flex flex-col justify-center items-center h-full px-6">
        <h2 className="text-white mx-auto text-4xl lg:text-7xl font-semibold sm:px-20 pt-20 md:pt-0">
          <TypeAnimation
            sequence={["HEY! I'M HAYPEKS", 1000]}
            wrapper="span"
            speed={400}
            style={{ fontSize: "1em" }}
            repeat={1000}
            cursor={false}
          />
        </h2>
        <p className="text-gray-400 mx-auto lg:text-md text-center text-base pt-2 pb-6 sm:px-20 xl:w-4/6 w-full">
          A <strong className="text-white">Front-End Developer</strong> with 3
          years experience with a flair for turning ideas into visually
          appealing and interactive digital experiences. I specialize in
          crafting user interfaces that captivate, engage, and leave a lasting
          impression.
        </p>
        <Link to="portfolio" smooth duration={500}>
          <div className="bg-primary text-black w-fit cursor-pointer rounded px-6 py-1 md:font-bold md:px-16 md:py-2 font-medium hover:scale-110 hover:text-gray-700">
            Portfolio
          </div>
        </Link>
        <ul className="flex md:hidden text-white pt-36">
          <li className="px-4 cursor-pointer hover:bg-primary hover:text-black hover:p-0 ">
            <a href="https://linkedin.com/in/apeloko-timilehin-113902223">
              <FaLinkedin size={40} />
            </a>
          </li>
          <li className="px-4 cursor-pointer hover:bg-primary hover:text-black hover:p-0">
            <a href="https://medium.com/@apelokotimilehin">
              <FaMedium size={40} />
            </a>
          </li>
          <li className="px-4 cursor-pointer hover:bg-primary hover:text-black hover:p-0">
            <a href="https://github.com/haypeks">
              <FaGithubSquare size={40} />
            </a>
          </li>
          <li className="px-3 cursor-pointer hover:bg-primary hover:text-black hover:p-0">
            <a href="mailto:apelokotimilehin@haypeksdev.com">
              <IoMail size={40} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
