import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const social =[
    {
        platform:"Email",
        link:"mailto:ashokkumarpandian7@gmail.com",
        icon:MdEmail
    },
    {
        platform:"Whatsapp",
        link:"https://wa.me/+919655350649",
        icon:IoLogoWhatsapp
    },
    {
        platform:"Linkdin",
        link:"https://www.linkedin.com/in/ashok-kumar-p-030847247/",
        icon:FaLinkedin
    },
    {
        platform:"Github",
        link:"https://github.com/ashokkumar116",
        icon:FaGithub
    },
]

export const Footer = () => {
  return (
    <div id='footer' className='bg-black flex flex-col justify-center items-center p-5'>
        <div className="social flex justify-center items-center space-x-4">
            {social.map((item)=>{
                const IconComponent = item.icon;
                return(
                    <a href={item.link}><IconComponent className='text-5xl border-2 border-primary text-primary rounded-full p-3 hover:scale-[1.05] transition duration-300 ease-in-out' /></a>
                )
            })}
        </div>
        <div className="credit mt-5 text-center max-sm:text-sm py-5 ">
            <p>&copy; Designed and Developed by <a className='text-primary font-bold cursor-pointer' href="#">ASHOK KUMAR P</a></p>
        </div>
    </div>
  )
}
