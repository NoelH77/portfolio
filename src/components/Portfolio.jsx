import React from "react";
import store from "../assets/images/portfolio/store.jpg";
import random from "../assets/images/portfolio/random.jpg";
import weather from "../assets/images/portfolio/weather.jpeg";
import rick from "../assets/images/portfolio/rick.png";
import pokemon from "../assets/images/portfolio/pokemon.png";
import crud from "../assets/images/portfolio/crud.png";

import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: store,
      title: 'store',
      link: "https://storenoel.netlify.app/",
      child: (
        <>
          <li className="w-8 h-8 mt-1">
            <img src={html} alt="" />
            </li>
            <li className="w-8 h-8 mt-1">
              <img src={css} alt="" />
            </li>
            <li className="w-8 h-8 mt-1">
              <img src={js} alt="" />
            </li>
        </>
      )
    },
    {
      id: 2,
      src: random,
      title: 'random phrases',
      link: "https://space-react.netlify.app/",
      child: (
        <>
          <li className="w-8 h-8 mt-1">
            <img src={html} alt="" />
            </li>
            <li className="w-8 h-8 mt-1">
              <img src={css} alt="" />
            </li>
            <li className="w-8 h-8 mt-1">
              <img src={js} alt="" />
            </li>
            <li className="w-8 h-8 mt-1">
              <img src={react} alt="" />
            </li>
        </>
      )
    },
    {
      id: 3,
      src: weather,
      title: 'weather',
      link: "https://weather-react-noel.netlify.app/",
      child: (
        <>
          <li className="w-8 h-8 mt-1">
            <img src={html} alt="" />
            </li>
            <li className="w-8 h-8 mt-1">
              <img src={css} alt="" />
            </li>
            <li className="w-8 h-8 mt-1">
              <img src={js} alt="" />
            </li>
            <li className="w-8 h-8 mt-1">
              <img src={react} alt="" />
            </li>
            <li className="w-8 h-8 mt-1">
              <img src={tailwind} alt="" />
            </li>
        </>
      )
    },
    {
      id: 4,
      src: rick,
      title: 'rick and morty',
      link: "https://ricksanchex.netlify.app/",
      child: (
        <>
          <li className="w-8 h-8 mt-1">
            <img src={html} alt="" />
            </li>
            <li className="w-8 h-8 mt-1">
              <img src={css} alt="" />
            </li>
            <li className="w-8 h-8 mt-1">
              <img src={js} alt="" />
            </li>
            <li className="w-8 h-8 mt-1">
              <img src={react} alt="" />
            </li>
            <li className="w-8 h-8 mt-1">
              <img src={tailwind} alt="" />
            </li>
        </>
      )
    },
    {
      id: 5,
      src: crud,
      title: 'CRUD',
      link: "https://usercrud1.netlify.app/",
      child: (
        <>
          <li className="w-8 h-8 mt-1">
            <img src={html} alt="" />
            </li>
            <li className="w-8 h-8 mt-1">
              <img src={js} alt="" />
            </li>
            <li className="w-8 h-8 mt-1">
              <img src={react} alt="" />
            </li>
            <li className="w-8 h-8 mt-1">
              <img src={tailwind} alt="" />
            </li>
        </>
      )
    },
    {
      id: 6,
      src: pokemon,
      title: 'pokemon',
      link: "https://pokedexnoel.netlify.app/",
      child: (
        <>
          <li className="w-8 h-8 mt-1">
            <img src={html} alt="" />
            </li>
            <li className="w-8 h-8 mt-1">
              <img src={js} alt="" />
            </li>
            <li className="w-8 h-8 mt-1">
              <img src={react} alt="" />
            </li>
            <li className="w-8 h-8 mt-1">
              <img src={tailwind} alt="" />
            </li>
        </>
      )
    },
  ];


  return (
    <div
      name="portfolio"
      className="portfolio
    w-full text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">check the projects that I've developed throughout my apprenticeship</p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            

        {portfolios.map(({ id, src, title, child, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <div className="h-[200px]">
             
              <a href={link} target="_blank">
              <img
                src={src}
                alt="Pokemon"
                className="h-full w-full object-cover rounded-md duration-200 hover:scale-105"
              />
              </a>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="py-2 mt-2 font-semibold text-xl capitalize border-b-2">{title}</h2>
                <hr />
                <h2 className="py-1 capitalize text-sm">technologies</h2>
                <ul className="py-2 flex flex-wrap gap-4">
                  {child}
                </ul>
              </div>
            </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
