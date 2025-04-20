import React from "react";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import config from "@/tailwind.config.mjs";

const Work = () => {
    return (
        <div id="work" className="w-full px-[12%] py-4 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">
                My Portfolio </h4>
            <h2 className="text-center text-5xl font-Ovo">My Work</h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Welcome to my Backend, Game and Other  Development Projects Portfolio.! Explore a collection of my projects 
                showcasing my skills in Backend Development, Game Development.
            </p>
            <div className='grid grid-cols-4 my-10 gap-5'>
                {workData.map((project,index)=>(
                    <div key={index} className='relative aspect-square group'>
                        <div className='absolute inset-0 bg-no-repeat bg-cover bg-center rounded-lg'
                        style={{backgroundImage:`url(${project.bgImage})`}}>
                        </div>
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5
                        left-1/2 -translate-x-1/2 py-3 px-5 flex items-center 
                        justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9
                            aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] 
                            group-hover:bg-lime-300 transition'>
                                <Image src={assets.send_icon} alt='Send Icon' className='w-5'/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a href="">Show More<Image src={assets.right_arrow_bold} alt='Right Arrow'
            className='w-4'/>

            </a>
        </div>
    )
}

export default Work;
