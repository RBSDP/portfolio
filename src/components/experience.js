import React from 'react'

import Html from "../assets/experience/html.png"

import css from "../assets/experience/css.png"

import github from "../assets/experience/github.png"

import javascript from "../assets/experience/javascript.png"

import nodejs from "../assets/experience/node.png"

import reactpng from "../assets/experience/react.png"

import tailwing from "../assets/experience/tailwind.png"









const Experience = () => {

    const techstack = [
        {
            id:1,
            src:Html,
            title :'HTML',
            style :'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title :'CSS',
            style :'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title :'Javascript',
            style :'shadow-yellow-500'
        },
        {
            id:4,
            src:reactpng,
            title :'REACT',
            style :'shadow-blue-600'
        },
        {
            id:5,
            src:tailwing,
            title :'Tailwing',
            style :'shadow-sky-500'
        },
        {
            id:6,
            src:github,
            title :'GitHub',
            style :'shadow-gray-400'
        },
        {
            id:7,
            src:nodejs,
            title :'Node.js',
            style :'shadow-green-500'
        },
    ]



  return (
    <div name = 'experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-full '>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
            <p className='py-6'>These are the technolodies i have worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            
            {
                techstack.map(({id,src,title,style})=>{
                    return(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt=""  className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    )
                })
            }
            
            
        </div>
      </div>
    </div>
  )
}

export default Experience
