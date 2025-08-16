import { assets, workData } from '@/assests/assets'
import Image from 'next/image'
import React from 'react'

const Experience = () => {
  return (
    <div id='experience' className='w-full px-[12%] py-10 scroll-mt-20'>
       <h4 className='text-center mb-2 text-xl font-ovo'>
        My Portfolio</h4>
      <h2 className='text-center text-5xl'>
       My latest experience</h2>
       <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Inventore deleniti atque at eos voluptatem ipsum, esse, laborum 
        repellat asperiores, nobis molestias et tempore assumenda dolorem vel 
        porro quidem maxime voluptate.</p>
    
    <div className='grid grid-cols-auto my-10 gap-6'>
        {workData.map((project, index)=>(
            <div key={index} 
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            style={{backgroundImage:`url(${project.bgImage})`}}>
               <div></div>
                <div>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
                <div>
                    <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                </div>
            </div>
        ))}
    </div>
    
    </div>
  )
}

export default Experience
