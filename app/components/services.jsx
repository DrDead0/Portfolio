import React from 'react';
import { serviceData, assets } from '@/assets/assets';
import Image from 'next/image';
import config from '@/tailwind.config.mjs';
const Services = () => {
    return (
        <div id="services" className= "w-full px-[12%] py-4 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">
                What I Offer </h4>
            <h2 className="text-center text-5xl font-Ovo">My Services</h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I am a Game & Backend Developer from Uttar Pradesh, India with experience 
                in Game Development, Backend Systems, and Open Source contributions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
                {serviceData.map(({icon,title,description,link},index)=>(
                    <div key={index} className='border-[0.5px] border-gray-400 bg-white
                    rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 transition-all duration-300
                    hover:shadow-[4px_4px_#000]'>
                       <Image src={icon} alt='icon'  className='w-10'/>
                       <h3 className='text-lg my-4 text-gray-700 font-Ovo'>{title}
                       </h3>
                       <p className="text-sm text-gray-600 leading-5">{description}</p>
                       <a href={link} className=" flex items-center gap-2 text-sm mt-5">
                        Read More <Image src={assets.right_arrow} className="w-4" alt='' />
                       </a>
                    </div>
                ))}
            </div>
        </div>
    );
};  

export default Services;
