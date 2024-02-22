import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const About = () => {
  const skillsList = [
    { id: 1, skill: "HTML" },
    { id: 2, skill: "CSS" },
    { id: 3, skill: "Javascript" },
    { id: 4, skill: "React" },
    { id: 5, skill: "Bootstrap" },
    { id: 6, skill: "SASS" },
    { id: 7, skill: "Tailwind" },
    { id: 8, skill: "Figma" },
    { id: 9, skill: "SQL" },
    { id: 10, skill: "PHP" },
    { id: 11, skill: "GitHub" },
    { id: 12, skill: "SEO" },
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
      name="about"
      className="w-full h-full pt-20 pb-20 md:pb-64 justify-center items-center"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl  font-semibold text-center">ABOUT ME</h2>
          <p className="leading-8 font-regular text-sm md:text-base md:leading-10 mt-4 text-center">
            Explore here for a deeper insight into my background showcasing my
            expertise in programming, technology and current skillset.
          </p>
        </motion.div>
        <div></div>
        <div className="pt-10 md:flex gap-8">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:w-1/2 py-6 md:pt-14"
          >
            <h3 className=" text-2xl md:text-3xl font-semibold text-center  my-4">
              Discover more about me!
            </h3>
            <p className="leading-8 md:leading-10 font-regular  text-sm md:text-base">
              I believe in creating interfaces that not only look stunning but
              also enhance the overall user experience. Collaboration is at the
              heart of my process. Working closely with designers, UX experts,
              and backend developers, I transform static designs into dynamic,
              user-friendly interfaces. I believe that the best outcomes emerge
              when diverse skills come together to create something greater than
              the sum of its parts. Continuous learning is key to staying
              relevant in the dynamic world of front-end development. My
              curiosity drives me to explore emerging technologies, attend
              conferences, and engage with the vibrant developer community.
            </p>
            <Link to="contact" smooth duration={500}>
              <div className="bg-primary text-black w-fit cursor-pointer rounded border-black border-b-2 px-16 py-4 my-4 md:font-bold md:px-16 md:py-2 mx-auto font-medium hover:text-gray-700">
                Contact
              </div>
            </Link>
          </motion.div>
          <div name="skills" className="pt-20  md:w-1/2 md:pt-8">
            <div className="py-6 md:my-4 bg-skillsbg">
              <motion.h3
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-semibold text-center"
              >
                My Skills
              </motion.h3>
              <ul className="pt-6 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-x-3 lg:gap-x-0 place-items-center">
                {skillsList.map(({ id, skill }) => (
                  <motion.li
                    key={id}
                    variants={fadeInVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center bg-black text-primary w-36 md:w-24 py-1 md:py-2"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
