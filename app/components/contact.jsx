import React from "react";
import Image from "next/image";
import config from '@/tailwind.config.mjs';

const Contact = () => {
    return (
      <div id="services" className= "w-full px-[12%] py-4 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-Ovo">
                Contact Me </h4>
            <h2 className="text-center text-5xl font-Ovo">My Services</h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I am a Game & Backend Developer from Uttar Pradesh, India with experience 
                in Game Development, Backend Systems, and Open Source contributions.
            </p>
      </div>  
    )
}   

export default Contact;
