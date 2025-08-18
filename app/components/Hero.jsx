import { assets } from '@/assests/assets'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
   return(
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <div>
                <Image src={assets.profile_img} alt="" className="rounded-full w-32"/>
            </div>
             <h2 className="flex items-end gap-2 text-xl md:text-3xl mb-3 font-Ovo">
                Hi! I'm Jella Pintor! <Image src={assets.hand_icon} alt="" className="w-6"/> </h2>
            <h1 className="text-3xl sm:text-6xl lg-text-[66px]">
                Backend Developer based in the Philippines.
            </h1>
            <p className="max-w-2xl mx:auto">
                I am an aspiring backend developer from the Philippines, eager to learna and explore different technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact"
                className="px-10 py-3 border border-white rounded-full bg-black text-white 
                flex items-center gap-2 dark:bg-transparent"
                >Contact me <Image src={assets.right_arrow_white} alt="" className="w-4"/></a>
                <a href="/assests/public/PintorCV.pdf" download 
                className="px-10 py-3 border rounded-full border-gray-500 
                flex items-center gap-2 bg-white dark:text-black">
                    My Resume <Image src={assets.download_icon} alt="" className="w-4"/></a>
            </div>
        </div>
    )
}

export default Hero
