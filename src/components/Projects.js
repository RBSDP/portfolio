import React from 'react'


import developerPortfolio from '../assets/portfolio/developerportfolio.png'
import githubuser from '../assets/portfolio/githubuser.png'
import shoppingcart from '../assets/portfolio/shoppingcart.png'
import tictactoe from '../assets/portfolio/tic_tac_toe.png'
import todo from '../assets/portfolio/todo.png'




const Projects = () => {

  const portfolio = [
    {
      id:1,
      src :developerPortfolio,
      demoLink : 'https://project-15-product-design-landing.netlify.app/',
      codelink:'https://github.com/RBSDP/product-design-landing-project-15'
    },
    {
      id:2,
      src :githubuser,
      demoLink : 'https://musical-dango-41cef7.netlify.app/',
      codelink:'https://github.com/RBSDP/githubUserGenerator'
    },
    {
      id:3,
      src :shoppingcart,
      demoLink : 'https://fascinating-cactus-baba09.netlify.app/',
      codelink:'https://github.com/RBSDP/redux_shoppingCart'
    },
    {
      id:4,
      src :tictactoe,
      demoLink : 'https://cosmic-syrniki-2d7aff.netlify.app/',
      codelink:'https://github.com/RBSDP/TIC_TAC_TOE'
    },
    {
      id:5,
      src :todo,
      demoLink : 'https://github.com/RBSDP/TODO_APP',
      codelink:'https://github.com/RBSDP/TODO_APP'
    },
    
  ]


  return (
    <div name = "portfolio" className='bg-gradient-to-b from-black  to-gray-800  w-full text-white h-fit  md:h-screen lg:h-full pb-20'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work</p>
        </div>
        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
            portfolio.map(({id,src,demoLink,codelink})=>{
              return(
              
              
                <div key ={id} className='shadow-md shadow-gray-600 rounded-lg'>
                  <img src={src} alt=""   className='rounded-md duration-200 hover:scale-105'/>
                  <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'><a href={demoLink}>Demo</a></button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'><a href={codelink}>Code</a></button>
                  </div>
                </div>
            )
            })
        }
        </div>
       


        
      </div>
    </div>
  )
}

export default Projects
