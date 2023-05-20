import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiBookBookmark } from "react-icons/bi"

const Contact = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
           <FaLinkedin size={30}/>
           <p>LinkedIn</p>
        </>
      ),
      href: "https://linkedin.com/in/noel-eduardo-alvarez-de-horta-14b807269",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
           <FaGithub size={30} />
           <p>GitHub</p>
        </>
      ),
      href: "https://github.com/NoelH77?tab=repositories",
    },
    {
      id: 3,
      child: (
        <>
           <HiOutlineMail size={30} />
           <p>Mail</p>
        </>
      ),
      href: "mailto:noelhorta88@outlook.com",
    },
    {
      id: 4,
      child: (
        <>
          <BiBookBookmark size={30} />
          <p>CV</p>
        </>
      ),
      href: "https://drive.google.com/file/d/1fe7iNWaFl1u787kQM3yHA9aSjc0epyAP/view?usp=share_link",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-blue-950 from-10% via-sky-800 via-60% to-indigo-800  p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Contact me to keep in constant communication</p>
        </div>

        <div className="flex justify-center items-center">
          <form className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none hover:border-sky-300 hover:bg-gray-900/50"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none hover:border-sky-300 hover:bg-gray-900/50"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none hover:border-sky-300 hover:bg-gray-900/50"
            ></textarea>

            <button
              className="text-white bg-cyan-500 px-6 
            py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 hover:border-sky-300"
            >
                Contact me
            </button>
          </form>
        </div>
        <ul className="lg:hidden flex flex-wrap justify-center gap-10">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={` hover:scale-110 duration-300 ${style}`}>
            <a
              href={href}
              className="flex flex-col justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
      <footer className="py-5 grid place-content-center">&copy; Copyright 2023. From scratch. All rights reserved</footer>
      </div>
    </div>
  );
};

export default Contact;
