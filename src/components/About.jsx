import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full pt-20 pb-20 md:pb-64 justify-center items-center"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <h2 className="text-4xl  font-semibold text-center">ABOUT ME</h2>
          <p className="leading-8 font-regular text-sm md:text-base md:leading-10 mt-4 text-center">
            Explore here for a deeper insight into my background showcasing my
            expertise in programming, technology and current skillset.
          </p>
        </div>
        <div></div>
        <div className="pt-10 md:flex gap-8">
          <div className="md:w-1/2 py-6 md:pt-14">
            <h3 className=" text-2xl md:text-3xl font-semibold text-center  my-4">
              Discover more about me!
            </h3>
            <p className="leading-8 md:leading-10 font-regular  text-sm md:text-base">
              I specialize as a Frontend Web Developer, crafting the interface
              of websites and web applications that contribute to the success of
              the final product. Browse through my Projects section to explore
              some of my completed work. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            </p>
            <Link to="contact" smooth duration={500}>
              <div className="bg-primary text-black w-fit cursor-pointer rounded border-black border-b-2 px-16 py-4 my-4 md:font-bold md:px-16 md:py-2 mx-auto font-medium hover:text-gray-700">
                Contact
              </div>
            </Link>
          </div>
          <div name="skills" className="pt-20  md:w-1/2 md:pt-8">
            <div className="py-6 md:my-4 bg-skillsbg">
              <h3 className="text-2xl md:text-3xl font-semibold text-center">
                My Skills
              </h3>
              <ul className="pt-6 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-x-3 lg:gap-x-0 place-items-center">
                <li className="text-center bg-black text-primary w-36 md:w-24 py-1 md:py-2">
                  HTML
                </li>
                <li className="text-center bg-black text-primary w-36 md:w-24 py-1 md:py-2">
                  CSS
                </li>
                <li className="text-center bg-black text-primary w-36 md:w-24 py-1 md:py-2">
                  Javascript
                </li>
                <li className="text-center bg-black text-primary w-36 md:w-24 py-1 md:py-2">
                  React
                </li>
                <li className="text-center bg-black text-primary w-36 md:w-24 py-1 md:py-2">
                  Next JS
                </li>
                <li className="text-center bg-black text-primary w-36 md:w-24 py-1 md:py-2">
                  Typescript
                </li>
                <li className="text-center bg-black text-primary w-36 md:w-24 py-1 md:py-2">
                  Tailwind
                </li>
                <li className="text-center bg-black text-primary w-36 md:w-24 py-1 md:py-2">
                  Bootstrap
                </li>
                <li className="text-center bg-black text-primary w-36 md:w-24 py-1 md:py-2">
                  SEO
                </li>
                <li className="text-center bg-black text-primary w-36 md:w-24 py-1 md:py-2">
                  GitHub
                </li>
                <li className="text-center bg-black text-primary w-36 md:w-24 py-1 md:py-2">
                  Figma
                </li>
                <li className="text-center bg-black text-primary w-36 md:w-24 py-1 md:py-2">
                  MySQL
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
