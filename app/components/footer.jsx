import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
      <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo} alt="logo" className="w-36 mx-auto
            mb-2" />
            <div className="w-max flex items-center gap-2 mx-auto">
                <Image src={assets.mail_icon} alt="logo" className="w-6"/>
                ashish.chaursiaa@gmail.com
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between 
            border-t border-gray-300 mx-[10%] mt-12 py-6'>
                <p>© 2025 Ashish Chaurasia. All rights reserved.</p>
                <ul className='flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-4 sm:mt-0'>
                    <li>
                        <a target="_blank" href="https://github.com/DrDead0" className="text-sm sm:text-base hover:text-gray-600 transition-colors">Github</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/ashish-gamedev/" className="text-sm sm:text-base hover:text-gray-600 transition-colors">Linkedin</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.instagram.com/a.shiss.h" className="text-sm sm:text-base hover:text-gray-600 transition-colors">Instagram</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://twitter.com/I_Am_Mr_Ashu" className="text-sm sm:text-base hover:text-gray-600 transition-colors">Twitter</a>
                    </li>
                </ul>
            </div>
      </div>  
    )
}

export default Footer;  
