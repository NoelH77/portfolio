import React from "react";
import Face from "../assets/images/photonew.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion as m } from "framer-motion";
 
const Home = () => {
  return (
    <div
      name="home"
      className="home h-screen w-full bg-cover"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center
      justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r text-5xl sm:text-7xl font-extrabold 
           from-cyan-400 from-10% via-sky-600 via-30% to-indigo-500">I'm a Web Developer</h2>
            <p className="text-gray-300 py-4 max-w-md">
              Hi, my name is Noel, i'm 20 years old, i'm from Mexico and i'm passionate about web technologies I'm learning full stack web development at Academlo  
            </p>
          
          <div className="place-content-center grid md:place-content-start">
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex
            items-center rounded-md bg-gradient-to-r 
            bg-cyan-500 ">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} 
                className="ml-1"/>
              </span>
            </Link>
          </div>
        </div>

        <m.div
          initial={{opacity: 0}} 
          animate={{opacity: 1}}
          transition={{duration: 2, ease: "easeOut"}} 
        className="mb-10">
          <img src={Face} alt="My picture" className="rounded-2xl
          mx-auto w-2/3 md:w-[450px]"/>
        </m.div>
      </div>
    </div>
  );
};

export default Home;
