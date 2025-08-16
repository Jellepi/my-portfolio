import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assests/assets';

const Navbar = () => {

  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = ()=> {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = ()=> {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if(scrollY > 50 ){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    })
  },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
      <Image src={assets.header_bg_color} alt='' className='w-full' />
    </div>

      <nav className= {`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
      flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : "" } `}>
        <a href="#">
          <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt='logo'/>
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 text-xl'>
          <li><a className='font-outfit' href="#top">Home</a></li>
          <li><a className='font-outfit' href="#about">About me</a></li>
          <li><a className='font-outfit' href="#experience">Experience</a></li>
          <li><a className='font-outfit' href="#projects">Projects</a></li>
          <li><a className='font-outfit' href="#contact">Contact Me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          <button><Image src={assets.moon_icon} alt='darkModeIcon' className='w-10 l-10 ml-4 lg-flex gap-3 items-center'/></button>
          
          <button className='block md:hidden ml-3' onClick={openMenu} >
          <Image src={assets.menu_black} alt='' className='w-6 cursor-pointer'/></button>
        
        </div>

        {/*-- Mobile Menu --*/}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-irides4 transition duration-500 text-xl'>
          <div className='absolute right-6 top-6' onClick={closeMenu} >
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/>
          </div>

          <li><a className='font-outfit' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-outfit' onClick={closeMenu} href="#about">About me</a></li>
          <li><a className='font-outfit' onClick={closeMenu} href="#experience">Experience</a></li>
          <li><a className='font-outfit' onClick={closeMenu} href="#projects">Projects</a></li>
          <li><a className='font-outfit' onClick={closeMenu} href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar

