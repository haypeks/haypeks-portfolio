import React from "react";
import Logo from "../images/logo.png";
import { FaGithubSquare, FaMedium } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Bottom = () => {
  return (
    <div name="footer" className="w-full  bg-black p-4 text-white">
      <div className="grid layout gap-8 place-items-center py-8 items-center w-full">
        <div className="[grid-area:logo]">
          <img className="w-31.2 h-8.112" src={Logo} alt="" />
        </div>
        <nav>
          <ul className="text-xl flex flex-col gap-3 ">
            <li className="cursor-pointer text-gray-300">Home</li>
            <li className="cursor-pointer text-gray-300">About</li>
            <li className="cursor-pointer text-gray-300">Portfolio</li>
            <li className="cursor-pointer text-gray-300">Skills</li>
            <li className="cursor-pointer text-gray-300">Contact</li>
          </ul>
        </nav>
        <div className="[grid-area:socials]">
          <ul className="flex text-white ">
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
      <div className="text-sm text-center md:text-right md:mx-8">
        Copyright 2024 Haypeks. All Rights Reserved
      </div>
    </div>
  );
};

export default Bottom;
