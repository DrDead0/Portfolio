import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-4 sm:px-6 md:px-[8%] lg:px-[12%] py-8 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.4}}
    >
    <motion.h4 
    initial={{opacity: 0, y: -20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.25, delay: 0.1}}
    className='text-center mb-1 text-base sm:text-lg font-Ovo'>
        Introduction</motion.h4>

    <motion.h2 
    initial={{opacity: 0, y: -20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.25, delay: 0.15}}
    className='text-center text-3xl sm:text-4xl md:text-5xl mb-6 font-Ovo'>
        About me</motion.h2>

    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.3}}
    className='flex w-full flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8 -mt-8 sm:-mt-12'>
            <motion.div
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6}}
            className='w-56 sm:w-72 md:w-80 lg:w-[24rem] rounded-3xl max-w-none overflow-hidden flex-shrink-0 mx-auto'>
                <Image src={assets.user_image} alt='user' className='w-full h-full object-cover rounded-3xl'/>
            </motion.div>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}
            className='flex-1 min-w-0 px-2 sm:px-0'>
                <p className='mb-3 sm:mb-4 text-sm sm:text-base max-w-2xl font-Ovo'
                >I am a passionate Game and Backend Developer with a strong interest in creating engaging gameplay and reliable systems. As a student, I actively contribute to open-source projects, constantly learning and improving. I enjoy solving real-world problems through clean code, creativity, and collaboration.</p>

                <motion.ul
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8, delay: 1}}
                className='flex mb-3 sm:mb-4'>
                    {infoList.map(({icon, iconDark, title, description,about}, index) => (
                        <motion.li 
                          key={index}
                          whileHover={{ 
                            scale: 1.02, 
                            y: -2,
                            boxShadow: isDarkMode 
                              ? '0 10px 22px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.05)'
                              : '0 8px 18px rgba(0,0,0,0.06)'
                          }}
                          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                          className='flex items-center gap-2 sm:gap-3 w-fit pr-4 sm:pr-6 border border-gray-200 dark:border-gray-600 rounded-xl p-2 cursor-pointer bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-900/90 backdrop-blur-sm shadow-sm duration-300 ease-out relative overflow-hidden group'>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-300 pointer-events-none" style={{background: 'radial-gradient(circle at 70% 30%, rgba(138,43,226,0.18) 0%, transparent 70%)'}} />
                            <div className='flex-shrink-0 bg-gray-50 dark:bg-gray-800 p-1.5 sm:p-2 rounded-lg relative z-10'>
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-5 sm:w-6'/>
                            </div>
                            <div className='relative z-10 text-left'>
                                <h3 className='font-semibold text-gray-700 dark:text-white text-sm'>{title}</h3>
                                <p className='text-gray-600 text-xs dark:text-white/80'>{description}</p>
                                <p className='text-gray-700 dark:text-white text-xs font-medium'>{about}</p>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.h4
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className='mb-2 sm:mb-3 text-gray-700 font-Ovo dark:text-white/80 text-sm sm:text-base'>Tech Stack & Tools</motion.h4>

                <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className='flex flex-wrap items-center gap-2 sm:gap-3 max-w-3xl'>
                    {toolsData.map((tool, index)=>(
                        <motion.li 
                        whileHover={{ scale: 1.1 }}
                        className='flex items-center justify-center w-10 sm:w-11 md:w-12 aspect-square border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer bg-transparent transition-transform duration-300'
                         key={index}>
                            <Image src={tool} alt='Tool' className='w-7 sm:w-8 md:w-9 drop-shadow-sm'/>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About
