import { assets, serviceData } from '@/assests/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Experience = () => {
  return (
    <motion.div 
    initial={{ opacity:0 }}
    whileInView={{ opacity: 1 }}
    transition={{duration: 1}}
    
    id='experience' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 className='text-center mb-2 text-xl font-ovo'
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5,delay: 0.3}}>
            My Experience</motion.h4>

        <motion.h2 className='text-center text-5xl'
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5,delay: 0.5}}>
        My previous title</motion.h2>
        <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5,delay: 0.7}}>
           Throughout my journey, I’ve gained hands-on experience working on diverse projects that strengthened my skills in software development. Someday I'd have different roles to show here but for now,
            here are some of the key experiences that would start my career path. </motion.p>

        <motion.div className='grid grid-cols-auto gap-2 my-5'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{delay:0.9, duration: 0.6 }}
        >
            {/* if you are going to add more exp here remember to check and add stuff  in assests.js */}
           {serviceData.map(({ icon, title, description, link }, index) => (
            <motion.div key={index}
            whileHover={{scale:1.05}}
            transition={{duration:0.3}} 
            className="border border-gray-400 rounded-lg px-8 py-12
            hover:shadow-black hover:bg-lightHover 
            hover: -translate-y-1 duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                <Image src={icon} alt="icon" className="w-10" />
                <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{description}</p>
                <a href={link} target="_blank" className="cursor-pointer flex items-center gap-2 text-sm mt-5">
                View Certificate
                <Image alt="" src={assets.right_arrow} className="w-4" />
                </a>
            </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Experience
