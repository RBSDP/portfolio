import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const SocialLinks = () => {

    const links =[
        {
            id:1,
            child :( <>
                GitHub <FaGithub size={30}/>
            </>),
            href:"https://github.com/RBSDP",
            
            style:"rounded-tr-md "           
        },
        {
            id:2,
            child :( <>
                LinkedIn <FaLinkedinIn size={30}/>
            </>),
            href:"https://www.linkedin.com/in/raavi-balasivadurgaprasad-67484a203/",
            
                     
        },
        {
            id:3,
            child :( <>
                Mail <HiOutlineMail size={30}/>
            </>),
            href:"mailto:raavibalasivadurgaprasad@gmail.com",
            
                       
        },
        {
            id:4,
            child :( <>
                Resume <BsFillPersonLinesFill size={30}/>
            </>),
            href:"https://drive.google.com/file/d/10SFJjdVaFoNyyVT8C5HIwfZ3A0Nxt6P-/view?usp=drive_link",
            download:true,
            
            style:"rounded-tr-md "  
        },
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>

        {links.map(({id,child,href,style,download}) =>(
            <li key = {id} className='flex justify-between items-center w-40  h-14 px-4 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] bg-gray-500 +" "+style '>
            <a href={href} className='flex justify-between items-center w-full text-white' download={download} target="_blank" rel='noreferrer'>
               {child} 
            </a>
        </li>
        ))}
        
      </ul>
    </div>
  )
}

export default SocialLinks
