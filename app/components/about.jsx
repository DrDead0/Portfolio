import React from "react";
import Image from "next/image";
import { assets, infoList } from "@/assets/assets";

const About = () => {
    return (
        <div  id="about" className= "w-full px-[12%] py-4 scroll-mt-20 ">
            <h4 className="text-center mb-2 text-lg font-Ovo">
                Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About Me</h2>
            <div className="flex w-full flex-col lg:flex-row item-center gap-20 my-20">
                <div className="w-72 sm:96 rounded-3xl max-w-none -mt-4">
                    <Image src={assets.user_image} alt="UserImage" className=" w-full rounded-3xl"/>
                </div>
                <div className="flex-1">
                    <p className="mb-6 max-w-2xl font-Ovo">
                        I am a passionate Game and Backend Developer with a strong interest in creating engaging gameplay and reliable systems. As a student, I actively contribute to open-source projects, constantly learning and improving. I enjoy solving real-world problems through clean code, creativity, and collaboration.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {infoList.map(({icon, iconDark, title, description}, index) => (
                            <li className="border-[0.5px] border-gray-400 bg-white
                             rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 transition-all duration-300
                             hover:shadow-[4px_4px_#000]" key={index}>
                                <Image src={icon} alt={title}  className="w-7 mt-3"/>
                                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                                <p className="text-gray-600 text-sm">{description}</p>
                            </li>
                        ))} 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;
