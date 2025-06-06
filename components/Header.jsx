import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { motion } from "motion/react"

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const adjustHeaderHeight = () => {
      if (headerRef.current) {
        const navbarHeight = 80;
        const windowHeight = window.innerHeight;
        const contentHeight = headerRef.current.scrollHeight;
        
        if (contentHeight + navbarHeight < windowHeight) {
          headerRef.current.style.minHeight = `${windowHeight - navbarHeight}px`;
        } else {
          headerRef.current.style.minHeight = 'auto';
        }
      }
    };

    adjustHeaderHeight();
    window.addEventListener('resize', adjustHeaderHeight);
    return () => window.removeEventListener('resize', adjustHeaderHeight);
  }, []);

  return (
    <div ref={headerRef} className='w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-3 pt-28 pb-16'>
      <motion.div
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        transition={{duration: 0.8, type: 'spring', stiffness: 100}}
        className="relative"
      >
        {/* Glowing Ring */}
        <motion.div
          className="absolute -inset-4 rounded-full"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20" />
        </motion.div>

        {/* Game Grid */}
        <motion.div
          className="absolute -inset-8"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute inset-0 border border-white/10 rounded-full" />
            <div className="absolute inset-4 border border-white/10 rounded-full" />
            <div className="absolute inset-8 border border-white/10 rounded-full" />
          </div>
        </motion.div>

        {/* Glowing Particles */}
        <motion.div
          className="absolute -inset-8"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full relative">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white rounded-full"
                style={{
                  top: `${(Math.sin(i * Math.PI / 3) * 50 + 50).toFixed(2)}%`,
                  left: `${(Math.cos(i * Math.PI / 3) * 50 + 50).toFixed(2)}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Profile Image Container */}
        <div className="relative z-20">
          <div className="relative">
            <motion.div
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30"
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <Image 
              src={assets.profile_img} 
              alt='' 
              className='rounded-full w-44 relative z-10'
              style={{ color: 'transparent' }}
              priority
            />
          </div>
        </div>
      </motion.div>

      <motion.h3 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.2}}
        className='flex items-end gap-2 text-xl md:text-2xl mb-2 font-Ovo'>
            Hi! I'm Ashish Chaurasiya <motion.div
              animate={{ rotate: [0, 20, 0, -20, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            ><Image 
              src={assets.hand_icon} 
              alt='' 
              className='w-6'
              style={{ color: 'transparent' }}
            /></motion.div></motion.h3>
      <motion.h1 
        initial={{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.3}}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Game & Backend Developer Based in India.</motion.h1>

      <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.4}}
        className='max-w-2xl mx-auto font-Ovo'>
        I am a Game & Backend Developer From Uttar Pradesh, India doing Multiple Things Like Game Development, 
        Backend Development, and also Open Source Contributor.
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a 
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.5}}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors duration-300'
        >
          Contact Me <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          ><Image 
            src={assets.right_arrow_white} 
            alt='' 
            className='w-4'
            style={{ color: 'transparent' }}
          /></motion.div>
        </motion.a>

        <motion.a 
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.6}}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/sample-resume.pdf" download 
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black hover:bg-gray-100 dark:hover:bg-gray-100 transition-colors duration-300'
        >
          My Resume <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          ><Image 
            src={assets.download_icon} 
            alt='' 
            className='w-4'
            style={{ color: 'transparent' }}
          /></motion.div>
        </motion.a>
      </div>

      <motion.div
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 1.4}}
        className='flex items-center gap-6 mt-2 mb-16'
      >
        <a href="https://github.com/DrDead0" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform duration-300'>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/ashish-gamedev/" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform duration-300'>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/a.shiss.h" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform duration-300'>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="https://x.com/I_Am_Mr_Ashu" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform duration-300'>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </motion.div>
    </div>
  )
}

export default Header;
