import React from "react";
import manage from "../images/manage.jpg";
import portfolio from "../images/portfolio.jpg";
import tipcalculator from "../images/tipcalculator.jpg";
import matak from "../images/matak.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: manage,
      heading: "Manage",
      hrefDemo: "https://eclectic-clafoutis-98a4e5.netlify.app",
      hrefCode: "https://github.com/haypeks/Landing-Page",
      paragraph:
        "Lorem Ipsium rure dolor in reprehenderit in voluptate velit esse cillum dolo. rure dolor in reprehenderit in voluptate velit esse cillum dolo. rure dolor in reprehenderit in voluptate velit esse cillum dolo.rure dolor in reprehenderit in voluptate velit esse cillum dolo",
    },
    {
      id: 2,
      src: portfolio,
      heading: "Portfolio",
      hrefDemo: "https://haypeks-portfolio.netlify.app",
      hrefCode: "https://github.com/haypeks/haypeks-portfolio",
      paragraph:
        "Lorem Ipsium rure dolor in reprehenderit in voluptate velit esse cillum dolo. rure dolor in reprehenderit in voluptate velit esse cillum dolo. rure dolor in reprehenderit in voluptate velit esse cillum dolo.rure dolor in reprehenderit in voluptate velit esse cillum dolo",
    },
    {
      id: 3,
      src: matak,
      heading: "Matak",
      hrefDemo: "https://grand-concha-1e5ca0.netlify.app",
      hrefCode: "https://github.com/haypeks/Ecommerce",
      paragraph:
        "Lorem Ipsium rure dolor in reprehenderit in voluptate velit esse cillum dolo. rure dolor in reprehenderit in voluptate velit esse cillum dolo. rure dolor in reprehenderit in voluptate velit esse cillum dolo.rure dolor in reprehenderit in voluptate velit esse cillum dolo",
    },
    {
      id: 4,
      src: tipcalculator,
      heading: "Tip Calculator",
      hrefDemo: "https://tiny-pudding-d7cfb1.netlify.app",
      hrefCode: "https://github.com/haypeks/Tip-calculator",
      paragraph:
        "Lorem Ipsium rure dolor in reprehenderit in voluptate velit esse cillum dolo. rure dolor in reprehenderit in voluptate velit esse cillum dolo. rure dolor in reprehenderit in voluptate velit esse cillum dolo.rure dolor in reprehenderit in voluptate velit esse cillum dolo",
    },
    {
      id: 5,
      src: tipcalculator,
      heading: "Tip Calculator",
      hrefDemo: "https://linkedin.com",
      hrefCode: "https://github.com/haypeks/Tip-calculator",
      paragraph:
        "Lorem Ipsium rure dolor in reprehenderit in voluptate velit esse cillum dolo. rure dolor in reprehenderit in voluptate velit esse cillum dolo. rure dolor in reprehenderit in voluptate velit esse cillum dolo.rure dolor in reprehenderit in voluptate velit esse cillum dolo",
    },
    {
      id: 6,
      src: tipcalculator,
      heading: "Tip Calculator",
      hrefDemo: "https://linkedin.com",
      hrefCode: "https://github.com",
      paragraph:
        "Lorem Ipsium rure dolor in reprehenderit in voluptate velit esse cillum dolo. rure dolor in reprehenderit in voluptate velit esse cillum dolo. rure dolor in reprehenderit in voluptate velit esse cillum dolo.rure dolor in reprehenderit in voluptate velit esse cillum dolo",
    },
  ];
  return (
    <div
      name="portfolio"
      className="w-full h-full py-20 bg-secondary justify-center items-center"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div>
          <h2 className="text-4xl font-semibold text-center">PORTFOLIO</h2>
          <p className="leading-8 font-regular text-sm md:text-base md:leading-10 my-4 text-center">
            Explore a collection of personal and client projects I've crafted,
            each accompanied by its own detailed case study
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-8 sm:px-0">
          {portfolios.map(
            ({ id, src, heading, hrefDemo, hrefCode, paragraph }) => (
              <div
                key={id}
                className="shadow-sm shadow-gray-700 bg-white p-4 md:my-8  rounded-lg "
              >
                <img
                  className="border-2 border-black md:w-auto md:h-30"
                  src={src}
                  alt=""
                />

                <p className="text-black text-xs pt-4 font-light">
                  <strong className="mr-1 font-bold">{heading}</strong>
                  {paragraph}
                </p>
                <div className="flex items-center gap-8 justify-evenly">
                  <button className="bg-primary text-black w-fit text-xs cursor-pointer px-4 py-1 rounded border-b-2 border-black mt-4 md:font-bold font-medium hover:scale-105 hover:text-gray-700">
                    <a href={hrefDemo}>Demo</a>
                  </button>
                  <button className="bg-primary text-black w-fit text-xs cursor-pointer px-4 py-1 rounded border-b-2 border-black mt-4 md:font-bold  font-medium hover:scale-105 hover:text-gray-700">
                    <a href={hrefCode}>Code</a>
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
