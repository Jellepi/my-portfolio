import React, { useState } from 'react'

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
    <div id='contact' className='h-screen w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <h4 className='text-center mb-2 text-xl font-ovo'>Connect with me</h4>
      <h2 className='text-center text-5xl'>Get in touch</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        nobis molestias et tempore assumenda dolorem vel 
        porro quidem maxime voluptate.
      </p>

      <form className='max-w-2xl mx-auto' onSubmit={onSubmit}>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <input type="text" placeholder='Enter your name' required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name'/>
          <input type="email" placeholder='Enter your email' required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email'/>
        </div>
        <textarea rows={6} placeholder='Enter your message' required
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message'></textarea>
        <button type='submit'
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full
          mx-auto hover:bg-black duration-500'>Submit Now</button>
      </form>

      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-white text-black px-6 py-3 rounded-lg shadow-xl animate-fade-in">
          {result}
        </div>
      )}
    </div>
  )
}

export default Contact