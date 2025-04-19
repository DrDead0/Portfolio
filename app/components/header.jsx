import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
    return (
        <div>
            <div>
            <Image src={assets.profile_img} alt="profile" className="rounded-full w-32"/>
            </div>
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi.! I'm Ashish Chaurasiya<Image src={assets.hand_icon} alt="HandIcon" 
                className="w-6"/></h3>
            <h1
            className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
                Game & Backend Developer Based in India</h1>
                <p className="max-w-2xl mx-auto font-Ovo">
                    I am a Game & Backend Developer From Uttar Pradesh, India doing Multiple Things 
                    Like Game Development, Backend Development, and also System Designer.
                </p>
                <div>
                    <a href="#contact"
                    className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2">Contact Me <Image src={assets.right_arrow_white} alt="RightArrow" className="w-4"/></a>
                    <a href="/sample-resume.pdf " download className='px-10 py-3 border rounded-full border-gray-500 flex item-center gap-2'>My Resume <Image src={assets.download_icon} alt="DownloadIcon" className="w-4"/></a>
                </div>
        </div>
    )
}
export default Header;
