import React, { useState } from 'react'
import Image from 'next/image';
import { motion } from "motion/react"

const Contact = () => {
  const [result, setResult] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setShowPopup(true);

    const formData = new FormData(event.target);
    

    const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✔️ Message Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("❌ " + data.message);
    }

    // Hide popup after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <motion.div
    initial={{ opacity:0 }}
    whileInView={{ opacity: 1 }}
    transition={{duration: 1}}
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
      <motion.h4 className='text-center mb-2 text-xl font-ovo'
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5,delay: 0.3}}>
      Connect with me</motion.h4>
      
      <motion.h2 className='text-center text-5xl'
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5,delay: 0.5}}
      >Get in touch</motion.h2>
      
      <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5,delay: 0.7}}
      >
        I’d love to connect! Whether it’s about opportunities, 
        collaborations, or just sharing ideas, 
        feel free to reach out and I’ll get back to you as soon as I can.
      </motion.p>

      <motion.form className='max-w-2xl mx-auto' onSubmit={onSubmit}
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5,delay: 0.9}}
      >
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <motion.input
          initial={{x: -50, opacity: 0}}
          whileInView={{ x: 0, opacity: 1}}
          transition={{duration: 0.6,delay: 1.1}}

          type="text" placeholder='Enter your name' required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
            dark:bg-darkHover/30 dark:border-white/90' name='name'/>
          <motion.input
          initial={{x: 50, opacity: 0}}
          whileInView={{ x: 0, opacity: 1}}
          transition={{duration: 0.6,delay: 1.1}}

          type="email" placeholder='Enter your email' required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
            dark:bg-darkHover/30 dark:border-white/90' name='email'/>
        </div>
        <motion.textarea
        initial={{y: 100, opacity: 0}}
        whileInView={{ y: 0, opacity: 1}}
        transition={{duration: 0.6,delay: 1.1}}

        rows={6} placeholder='Enter your message' required
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6
          dark:bg-darkHover/30 dark:border-white/90' name='message'></motion.textarea>
        <motion.button type='submit'
         whileHover={{scale: 1.05}}
         transition={{duration: 0.3}}

          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full
          mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>Submit Now</motion.button>
      </motion.form>

      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-white text-black px-6 py-3 rounded-lg shadow-xl animate-fade-in">
          {result}
        </div>
      )}
    </motion.div>
  )
}

export default Contact