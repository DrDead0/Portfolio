import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

const Contact = () => {
    // web3 from has been used to send email to the user
    // and to change email address visit that website and generate a key and paste it in access_key

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "997656e2-4a90-43e4-be9b-27ca7ad17f8b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return (
      <div id="contact" className= "w-full px-[12%] py-4 scroll-mt-20 relative">
        <div className="absolute inset-0 -z-10">
          <Image 
            src="/footer-bg-color.png" 
            alt="background" 
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <h4 className="text-center mb-2 text-lg font-Ovo">
            Connect with me </h4>
            <h2 className="text-center text-5xl font-Ovo">Get in Touch</h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I'd love to hear from you.! If you have any questions, comments, or feedback, please use the form below.
            </p>
            <form  onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-2 gap-6 mt-4 mb-8'>
                   <input type="text" placeholder="Enter Your Name" required
                   className="w-full p-3 outline-none border-[0.5px] border-gray-400
                   rounded-md bg-white" name="name"/> 
                   <input type="text" placeholder="Enter Your Email" required
                   className='w-full p-3 outline-none border-[0.5px] border-gray-400
                   rounded-md bg-white' name="email"/> 
                </div>
                <textarea rows='6' placeholder='Enter Your Message' required
                className='w-full p-4 outline-none border-[0.5px] border-gray-400
                rounded-md bg-white mb-6 resize-none'></textarea>
                <button type='submit' className="py-3 px-8 w-max flex items-center justify-center
                gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500
                " name="message">Submit Now
                <Image src={assets.right_arrow_white} alt='right arrow' className='w-4'/></button>
                <p className='mt-4 '>{result}</p>
            </form>
      </div>  
    )
}   

export default Contact;
