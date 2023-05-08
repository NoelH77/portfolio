import React from "react";

const About = () => {
  return (
    <div name="about" className="about w-full h-screen bg-cover text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 ">
          I'm self-taught and I like to learn on my own to develop as a person
          new skills and knowledge in the area of technology.
        </p>

        <br />

        <p className="text-xl ">
          I'm currently
          studying an engineering degree in information technology management at
          the Virtual University of the State of Guanajuato and taking an
          intensive full stack web programming course to train myself in the
          area of web technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
