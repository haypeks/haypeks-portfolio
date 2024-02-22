import React from "react";
import manage from "../images/manage.png";
import portfolio from "../images/portfolio.png";
import tipcalculator from "../images/tipcalculator.png";
import matak from "../images/matak.png";
import gamehub from "../images/gamehub.png";
import kry8 from "../images/kry8.png";
import { motion } from "framer-motion";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: kry8,
      heading: "Kry-8",
      hrefDemo: "https://eclectic-clafoutis-98a4e5.netlify.app",
      hrefCode: "https://github.com/haypeks/Landing-Page",
      paragraph:
        " an AI writing website crafted with React for a seamless and dynamic writing experience. With a sleek and responsive design,  it combines the efficiency of React to offer a user-centric platform for innovative content creation. Embrace a new era of gradient in web design.                ",
    },
    {
      id: 2,
      src: matak,
      heading: "Matak",
      hrefDemo: "https://grand-concha-1e5ca0.netlify.app",
      hrefCode: "https://github.com/haypeks/Ecommerce",
      paragraph:
        " is a responsive ecommerce website for a clothing business. Powered by the trio of HTML, CSS, and Vanilla JavaScript, this website is a testament to the elegance of simplicity. Built with users in mind, Matak offers a user-focused experience and responsive on all screen sizes.                    ",
    },
    {
      id: 3,
      src: portfolio,
      heading: "Portfolio",
      hrefDemo: "https://haypeks-portfolio.netlify.app",
      hrefCode: "https://github.com/haypeks/haypeks-portfolio",
      paragraph:
        "website was built using React and Tailwind. Harnessing the power of React, each component is carefully crafted to ensure a seamless, responsive, and engaging UI. Tailwind CSS allowed me to effortlessly create a visually striking design while the codebase are maintainable.                         ",
    },

    {
      id: 4,
      src: manage,
      heading: "Manage",
      hrefDemo: "https://eclectic-clafoutis-98a4e5.netlify.app",
      hrefCode: "https://github.com/haypeks/Landing-Page",
      paragraph:
        "is a landing page for a business that helps software teams to plan day-to-day tasks while keeping the larger team goals in view. This is a front-end Mentor challenge to test responsive skills.  There are lots of small details and slight content shifts for different screen sizes.                    ",
    },
    {
      id: 5,
      src: gamehub,
      heading: "GameHub",
      hrefDemo: "https://gaemehub.netlify.app/",
      hrefCode: "https://github.com/haypeks/gamehub",
      paragraph:
        "is a three in one gaming platform. It's interactive playground fueled by the capabilities of JavaScript. From dynamic game mechanics to real-time updates, the site leverages the versatility of JavaScript to create engaging and responsive gaming environments.",
    },
    {
      id: 6,
      src: tipcalculator,
      heading: "Tip Calculator",
      hrefDemo: "https://tiny-pudding-d7cfb1.netlify.app",
      hrefCode: "https://github.com/haypeks/Tip-calculator",
      paragraph:
        "One size doesn't fit all when it comes to tipping preferences. With TipCalcPro, users can easily customize tip percentages, split bills among friends, and fine-tune the settings to match their preferences. The goal is to provide flexibility and efficiency in every tipping scenario.",
    },
  ];

  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 1,
      },
    },
  };

  return (
    <div
      name="portfolio"
      className="w-full h-full py-20 bg-secondary justify-center items-center"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold text-center">PORTFOLIO</h2>
          <p className="leading-8 font-regular text-sm md:text-base md:leading-10 my-4 text-center">
            Explore a collection of personal and client projects I've crafted,
            each accompanied by its own detailed case study
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-8 sm:px-0 ">
          {portfolios.map(
            ({ id, src, heading, hrefDemo, hrefCode, paragraph }) => (
              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={id}
                className="shadow-sm shadow-gray-700 bg-white p-4 md:my-8  rounded-lg "
              >
                <img
                  className="border-2 border-black md:w-auto"
                  src={src}
                  alt=""
                />

                <p className="text-black text-xs py-4 font-light">
                  <strong className="mr-1 font-bold">{heading}</strong>
                  {paragraph}
                </p>
                <div className="flex items-center gap-8 justify-evenly ">
                  <button className="bg-primary text-black w-fit text-xs cursor-pointer px-4 py-1 rounded border-b-2 border-black mt-4 md:font-bold font-medium hover:scale-105 hover:text-gray-700 ">
                    <a href={hrefDemo}>Demo</a>
                  </button>
                  <button className="bg-primary text-black w-fit text-xs cursor-pointer px-4 py-1 rounded border-b-2 border-black mt-4 md:font-bold  font-medium hover:scale-105 hover:text-gray-700 ">
                    <a href={hrefCode}>Code</a>
                  </button>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
