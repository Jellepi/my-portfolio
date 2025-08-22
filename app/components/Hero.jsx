import { assets } from '@/assests/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Hero = () => {
   return(
    
        <div id='home' className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-screen filter blur-3xl opacity-80 animate-blob dark:shadow-[0_0_60px_30px_rgba(168,85,247,0.6)]"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-green-300 rounded-full mix-blend-screen filter blur-3xl opacity-80 animate-blob animation-delay-2000 dark:shadow-[0_0_60px_30px_rgba(34,197,94,0.6)]"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-screen filter blur-3xl opacity-80 animate-blob animation-delay-4000 dark:shadow-[0_0_60px_30px_rgba(236,72,153,0.6)]"></div>
        </div>

            <motion.div
            initial={{ scale:0 }}
            whileInView={{ scale: 1 }}
            transition={{duration: 0.8, type: 'spring', stiffness: 100}}
            >
                <Image src={assets.profile_img} alt="" className="rounded-full w-32 relative z-10 "/>

            </motion.div>
             <motion.h2 
             initial={{y: -20, opacity: 0}}
             whileInView={{y: 0, opacity: 1}}
             transition={{duration: 0.6,delay: 0.3}}

             className="flex items-end gap-2 text-xl md:text-3xl mb-3 font-Ovo relative z-10 ">
                Hi! I'm Jella Pintor! <Image src={assets.hand_icon} alt="" className="w-6"/> </motion.h2>
            <motion.h1 
             initial={{y: -30, opacity: 0}}
             whileInView={{y: 0, opacity: 1}}
             transition={{duration: 1.0,delay: 0.5}}
             className="text-3xl sm:text-6xl lg-text-[66px]">
                <span className='text-violet-600 dark:text-purple-200 relative z-10'>backend developer </span>based in the Philippines.
            </motion.h1>

            <motion.p className="max-w-2xl mx:auto relative z-10"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6,delay: 0.7}}
>
            I’m an aspiring backend developer from the Philippines with a strong passion for learning and exploring new technologies. I just love bashing my head through my keyboard until solutions eventually form.
            </motion.p>


            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <motion.a 
                    href="#contact"
                    initial={{y:30, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 1}}
                    className="group flex items-center gap-2 relative inline-block focus:ring-3 focus:outline-hidden"
                    >
                    <span
                        className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-violet-400 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                    ></span>

                    <span
                        className="relative inline-flex items-center gap-2 border-2 border-current px-6.5 py-3 text-sm tracking-widest text-black uppercase dark:text-white"
                    >
                        Contact me 
                        
                    </span>
                </motion.a>


                <motion.a href="/assests/public/PintorCV.pdf" download 
                initial={{y:30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6,delay: 1}}
                className="group flex items-center gap-2 relative inline-block focus:ring-3 focus:outline-hidden"
                    >
                    <span
                        className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-vividViolet transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                    ></span>

                    <span
                        className="relative inline-flex items-center gap-2 border-2 border-current px-5 py-3 text-sm tracking-widest text-black uppercase dark:text-white"
                    >
                    My Resume <Image src={assets.download_icon} alt="" className="w-4"/>
                    </span>
                </motion.a>
            </div>
        </div>
    )
}

export default Hero
