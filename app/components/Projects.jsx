import { assets, workData } from '@/assests/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Projects = () => {
  return (
    <motion.div id='projects' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{ opacity:0 }}
    whileInView={{ opacity: 1 }}
    transition={{duration: 1}}
    >
        <motion.h4 className='text-center mb-2 text-xl font-ovo'
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5,delay: 0.3}}
        >
        My Portfolio</motion.h4>
        <motion.h2 className='text-center text-5xl'
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5,delay: 0.5}}
        >
       My latest works</motion.h2>
        <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5,delay: 0.7}}
        >
            Here’s a collection of projects I’ve worked on that highlight my skills in backend development, problem-solving, and building practical solutions.
            </motion.p>
    <motion.div 
    className="flex flex-wrap -m-4 my-10"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.9, duration: 0.6 }}
    >
    {workData.map((project, index) => (
        <motion.div 
        key={index} 
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="p-4 sm:w-1/2 lg:w-1/3"
        >
        <div className="h-full border-1 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md dark:hover:bg-darkHover/50 transition  duration-300 ease-in">
            
            {/* Project image */}
            <img 
            src={project.bgImage} 
            alt={project.title} 
            className="lg:h-72 md:h-48 w-full object-cover object-center" 
            />

            {/* Card body */}
            <div className="p-6  transition duration-300 ease-in">
            <h2 className="text-base font-medium text-indigo-300 mb-1">
                {project.tool || "Tools"}
            </h2>
            <h1 className="text-2xl font-semibold mb-3">
                {project.title}
            </h1>
            <p className="leading-relaxed mb-3">
                {project.description}
            </p>

            <div className="flex items-center flex-wrap">
                <a href={project.link || "#"} className="text-blue-400 inline-flex items-center md:mb-2 lg:mb-0">
                Read More
                </a>
            </div>
            </div>
        </div>
        </motion.div>
    ))}
    </motion.div>


{/*-- When adding new projects --*/}

    {/* <motion.a 
    initial={{y:30, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 0.6,delay: 1}}
    href="" className='w-max flex items-center justify-center gap-2
    text-gray-700 border-[0.5px] border-violet-700 rounded-full 
    py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500'> Show More <Image src={assets.right_arrow_bold} alt='right_arrow'
    className='w-4'/></motion.a>
     */}
    </motion.div>
  )
}

export default Projects
