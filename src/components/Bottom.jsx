import React from "react";
import Logo from "../images/logo.png";
import { FaGithubSquare, FaMedium } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Bottom = () => {
  return (
    <div name="footer" className="w-full  bg-black p-4 text-white">
      <div className="grid grid-cols-1 grid-ares-layout gap-8 place-items-center items-center">
        <div className="[grid-area:logo]">
          <img className="w-24 h-6.24" src={Logo} alt="" />
        </div>
        <nav>
          <h2>links</h2>
          <ul>
            <li>About</li>
            <li>Portfolio</li>
            <li>Skills</li>
            <li>Contact</li>
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
        <div className="[grid-area:copyright]">
          Copyright 2024. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Bottom;
