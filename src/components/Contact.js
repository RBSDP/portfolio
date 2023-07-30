import React from 'react'

const Contact = () => {
  return (
    <div name ="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='pb-8 '>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6 '>Submit the form below to get in touch with me</p>
        </div>
        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/701f80cb-02a0-4d4e-a6f5-d0640d48089b" method='POST' className='flex flex-col  w-full md:w-1/2'>
                <input type="text" name='name' placeholder='enter your name ' className='p-2 bg-transparent rounded-md text-white focus:outline-none' />
                <input type="text" name='email' placeholder='enter your email ' className='p-2 my-4 bg-transparent rounded-md text-white focus:outline-none' />
                <textarea name="message" id=""  rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='enter your message here'></textarea>
                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-11dgd0 duration-300'>Let's talk</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
