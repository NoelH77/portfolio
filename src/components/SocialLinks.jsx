import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BiBookBookmark } from "react-icons/bi"

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://linkedin.com/in/noel-eduardo-alvarez-de-horta-14b807269',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/NoelH77?tab=repositories',
        },
        {
            id: 3,
            child: (
                <>
                Email <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:noelhorta88@outlook.com',
        },
        {
            id: 4,
            child: (
                <>
                CV <BiBookBookmark size={30} />
                </>
            ),
            href: "https://drive.google.com/file/d/1NgPku1FpyItkY6HoO6plz2tADuo2NPy0/view?usp=share_link",
            style: "rounded-br-md",
            download: true,
        }
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map(({ id, child, href, style, download}) => (
                <li key={id} 
                className={`flex justify-between items-center w-40 h-14 
                px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-blue-950 ${style}` 
                + " " }>
                    <a href={href} className='flex justify-between items-center w-full text-white'
                    download={download}
                    target='_blank'
                    rel='noreferrer'>
                        {child}
                    </a>
                </li>
            ))}

        </ul>
    </div>
  )
}

export default SocialLinks