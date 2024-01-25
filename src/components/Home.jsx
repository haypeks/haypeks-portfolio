import React from "react";
import { FaGithubSquare, FaMedium } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-950 h-screen w-full">
      <div className="flex flex-col justify-center items-center h-full px-6">
        <h2 className="text-white text-4xl font-semibold pt-20">
          HEY, I'M HAYPEKS
        </h2>
        <p className="text-gray-400 text-center text-sm pt-2 pb-6">
          A Front-End Developer with 3 years experience creating clean,
          efficient and visual appealing websites. I love to work on web
          applications using technologies like Javascript, React, Tailwind, Next
          Js.
        </p>
        <div className="bg-primary text-black w-fit rounded px-6 py-1 font-medium">
          Project
        </div>
        <ul className="flex text-white pt-36">
          <li className="px-4 cursor-pointer hover:bg-primary hover:text-black hover:p-0 ">
            <FaLinkedin size={40} />
          </li>
          <li className="px-4 cursor-pointer hover:bg-primary hover:text-black hover:p-0">
            <FaMedium size={40} />
          </li>
          <li className="px-4 cursor-pointer hover:bg-primary hover:text-black hover:p-0">
            <FaGithubSquare size={40} />
          </li>
          <li className="px-3 cursor-pointer hover:bg-primary hover:text-black hover:p-0">
            <IoMail size={40} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
