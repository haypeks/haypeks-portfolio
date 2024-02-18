import React from "react";
import { motion } from "framer-motion";

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

const Contact = () => {
  return (
    <div name="contact" className="w-full pt-20 pb-20 md:pb-64 full">
      <div className="flex flex-col p-4 justify-center mx-auto max-w-screen-lg h-full">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold text-center mt-0">CONTACT</h2>
          <p className="leading-8 font-regular text-sm md:text-base md:leading-10 mt-4 mb-16 text-center">
            Feel free to contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </motion.div>
        <div className="flex justify-center items-center">
          <motion.form
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            action="https://getform.io/f/1061a273-fdd1-4224-b21a-be6f6088dd96"
            method="POST"
            className="flex flex-col gap-4 w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-secondary border-2 rounded-md text-black focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-secondary border-2 rounded-md text-black focus:outline-none"
              required
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-secondary border-2 rounded-md text-black focus:outline-none"
              required
            ></textarea>
            <button className="bg-primary text-black border-b-2 border-black my-1 w-fit cursor-pointer rounded px-6 py-1 md:font-bold md:px-16 md:py-2 font-medium hover:scale-105 hover:text-gray-700">
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
