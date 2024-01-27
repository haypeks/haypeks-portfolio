import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <h2 className="text-4xl font-semibold text-center mt-16">CONTACT</h2>
        <p className="leading-8 font-regular text-sm md:text-base md:leading-10 mt-4 mb-16 text-center">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
        <div className="flex justify-center items-center">
          <form action="" className="flex flex-col gap-4 w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-secondary border-2 rounded-md text-black focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-secondary border-2 rounded-md text-black focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-secondary border-2 rounded-md text-black focus:outline-none"
            ></textarea>
            <button className="bg-primary text-black border-b-2 border-black my-1 w-fit cursor-pointer rounded px-6 py-1 md:font-bold md:px-16 md:py-2 font-medium hover:scale-125 hover:text-gray-700">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
