import { assets, workData } from '@/assests/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Projects = ({isDarkMode}) => {
  const [selectedProject, setSelectedProject] = useState(null);

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
        My Portfolio
      </motion.h4>
      <motion.h2 className='text-center text-5xl'
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5,delay: 0.5}}
      >
        My latest works
      </motion.h2>
      <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5,delay: 0.7}}
      >
        Here’s a collection of projects I’ve worked on that highlight my skills in backend development, problem-solving, and building practical solutions.
      </motion.p>

      {/* Project Grid */}
      <motion.div 
        className="flex flex-wrap -m-4 my-10 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        {workData.map((project, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="p-4 sm:w-1/2 lg:w-1/3 z-1"
          >
            <div className="h-full border-1 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md dark:hover:bg-darkHover/50 transition z-10 duration-300 ease-in">
              
              {/* Project image */}
              <img 
                src={project.bgImage} 
                alt={project.title} 
                className="lg:h-72 md:h-48 w-full object-cover object-center" 
              />

              {/* Card body */}
              <div className="p-6 transition duration-300 ease-in">
                <h2 className="text-base font-medium text-violet-600 dark:text-purple-200 mb-1">
                  {project.tool || "Tools"}
                </h2>
                <h1 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h1>
                <p className="leading-relaxed mb-3">
                  {project.description}
                </p>

                <div className="flex items-center flex-wrap gap-5">
                  {project.hasDetails && (
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="text-blue-400 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Read More
                    </button>
                  )}

                  <a href={project.githubLink || "#"} target="_blank" 
                    onClick={(e) => {
                      if (project.isPrivate) {
                        e.preventDefault();
                        alert("🔒 This repository is private and not publicly available.");
                      }
                    }}
                    className="inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    <Image
                      src={isDarkMode ? assets.github_light : assets.github}
                      alt="GitHub"
                      className="h-6 w-6"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 max-w-2xl w-full relative">
            <button 
              onClick={() => setSelectedProject(null)} 
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 text-2xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-3">{selectedProject.title}</h2>
            <p className="mb-5">{selectedProject.longDescription || selectedProject.description}</p>

            {selectedProject.extraImages && (
              <div className="grid grid-cols-2 gap-4">
                {selectedProject.extraImages.map((img, i) => (
                  <img key={i} src={img} alt="" className="rounded-lg"/>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default Projects
