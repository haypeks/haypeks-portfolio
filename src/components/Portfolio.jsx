import React from "react";
import manage from "../images/manage.jpg";
import portfolio from "../images/portfolio.jpg";
import tipcalculator from "../images/tipcalculator.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: manage,
      heading: "Manage",
      hrefDemo: "https://linkedin.com",
      hrefCode: "https://github.com",
      paragraph:
        "Lorem Ipsium rure dolor in reprehenderit in voluptate velit esse cillum dolo. rure dolor in reprehenderit in voluptate velit esse cillum dolo. rure dolor in reprehenderit in voluptate velit esse cillum dolo.rure dolor in reprehenderit in voluptate velit esse cillum dolo",
    },
    {
      id: 1,
      src: portfolio,
      heading: "Portfolio",
      hrefDemo: "https://linkedin.com",
      hrefCode: "https://github.com",
      paragraph:
        "Lorem Ipsium rure dolor in reprehenderit in voluptate velit esse cillum dolo. rure dolor in reprehenderit in voluptate velit esse cillum dolo. rure dolor in reprehenderit in voluptate velit esse cillum dolo.rure dolor in reprehenderit in voluptate velit esse cillum dolo",
    },
    {
      id: 1,
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
      className="w-full md:h-screen bg-secondary justify-center items-center"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div>
          <h2 className=" text-4xl font-semibold text-center mt-16">
            PROJECTS
          </h2>
          <p className="leading-8 font-regular text-sm md:text-base md:leading-10 my-4 text-center">
            Explore a collection of personal and client projects I've crafted,
            each accompanied by its own detailed case study
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16 px-6 sm:px-0">
            {portfolios.map(
              ({ id, src, heading, hrefDemo, hrefCode, paragraph }) => (
                <div
                  key={id}
                  className="shadow-md shadow-gray-600 bg-white p-4 md:my-8 rounded-lg "
                >
                  <img
                    className="border-2 md:w-auto md:h-30"
                    src={src}
                    alt=""
                  />
                  <h4 className=" text-base text-center font-semibold my-1">
                    {heading}
                  </h4>
                  <p className="text-gray-800 text-xs font-light">
                    {paragraph}
                  </p>
                  <div className="flex items-center gap-8 justify-evenly">
                    <button className="bg-primary text-black w-fit text-xs cursor-pointer px-4 py-1 rounded border-b-2 border-black mt-4 md:font-bold font-medium hover:scale-125 hover:text-gray-700">
                      <a href={hrefDemo}>Demo</a>
                    </button>
                    <button className="bg-primary text-black w-fit text-xs cursor-pointer px-4 py-1 rounded border-b-2 border-black mt-4 md:font-bold  font-medium hover:scale-125 hover:text-gray-700">
                      <a href={hrefCode}>Code</a>
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
