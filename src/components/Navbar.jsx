import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div
      className="flex justify-between items-center w-full h-20 text-white
    px-4 fixed bg-gray-900"
    >
      <div>
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r text-4xl sm:text-4xl font-extrabold 
           from-cyan-400 from-10% via-sky-600 via-30% to-indigo-500 ml-2">Noel</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium
            text-gray-500 hover:scale-110 duration-200 hover:text-blue-600"
          >
            <Link to={link} smooth duration={500} >{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer 
        pr-4 z-10 text-gray-500 duration-300 md:hidden hover:scale-110 hover:text-blue-600 "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} className="hover:duration-300" />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-start transition-all duration-300 absolute top-0
                right-0 w-80 h-screen bg-gradient-to-b from-black to-blue-950 
                text-gray-500"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:transition-all hover:pl-8 
              hover:duration-200 hover:bg-sky-700 hover:text-white"
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500} >{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
