import React from 'react';

import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import github from "../assets/images/github.png";
import tailwind from "../assets/images/tailwind.png";

const Skills = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
            color: 'hover:text-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
            color: 'hover:text-blue-500',
        },
        {
            id: 3,
            src: js,
            title: 'Javascript',
            style: 'shadow-yellow-500',
            color: 'hover:text-yellow-500',
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-sky-300',
            color: 'hover:text-sky-300'
        },
        {
            id: 5,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400',
            color: 'hover:text-gray-400',
        },
        {
            id: 6,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400',
            color: 'hover:text-cyan-300',
        },
    ]

  return (
    <div name="experience" className='skills w-full h-screen bg-cover'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-full text-white'>

            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500
                p-2 inline'>Skills</p>
                <p className='py-6'>These are the technologies I've been learning during my apprenticeship at Academlo</p>
            </div>

            <div 
             className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 
            text-center py-8 px-12 sm:px-0 font-semibold'>

                {
                    techs.map(({ id, src, title, style, color}) => (
                        <div key={id} className={`shadow-lg place-content-center grid h-auto hover:scale-105 duration-500
                        py-2 rounded-lg ${style} ${color}`}>
                            <img src={src} alt="" className='w-20 h-20 object-cover mx-auto'/>
                            <p className={'mt-4'}>{title}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default Skills