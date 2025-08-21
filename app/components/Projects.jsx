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
    
    <motion.div className='grid grid-cols-auto my-10 gap-6'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{delay:0.9, duration: 0.6 }}
    >
        {workData.map((project, index)=>(
            <motion.div key={index}
             whileHover={{scale:1.05}}
             transition={{duration:0.3}}  
            className='aspect-square bg-no-repeat bg-cover bg-center 
            rounded-lg relative cursor-pointer group'
            style={{backgroundImage:`url(${project.bgImage})`}}>
               <div className='bg-white w-10/12 rounded-md absolute bottom-5 
               left-1/2 -translate-x-1/2 py-3 px-5 flex items-center 
               justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold dark:text-black'>{project.title}</h2>
                        <p className='text-sm text-gray-700'>{project.description}</p>
                    </div>
                    <div className='border rounded-full border-black 
                    w-9 aspect-square flex items-center justify-center 
                    shadow-[2px_2px_0_#000] group-hover:bg-purple-500 
                    transition'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5'/>
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
