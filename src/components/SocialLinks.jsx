import React from "react";
import { FaGithubSquare, FaMedium } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={40} />
        </>
      ),
      href: "https://linkedin.com",
    },
    {
      id: 1,
      child: (
        <>
          <FaMedium size={40} />
        </>
      ),
      href: "https://linkedin.com",
    },
    {
      id: 1,
      child: (
        <>
          <FaGithubSquare size={40} />
        </>
      ),
      href: "https://linkedin.com",
    },
    {
      id: 1,
      child: (
        <>
          <IoMail size={40} />
        </>
      ),
      href: "https://linkedin.com",
    },
  ];

  return (
    <div className="hidden md:flex flex-col left-0 top-[35%] text-white absolute">
      <ul className="hidden md:flex flex-col gap-8 px-4">
        {links.map(({ id, child, href }) => (
          <li className="cursor-pointer hover:bg-primary hover:text-black hover:pd-0">
            <a href={href} target="_blank" rel="noreferrer">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
