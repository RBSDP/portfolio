import React from "react";
import heroimage from "../assets/heroimage.png.jpeg"
import {MdKeyboardArrowRight} from "react-icons/md"
import {Link} from 'react-scroll'

const Home = () =>{
    return <div name="home" className=" h-full w-full bg-gradient-to-b from-black via-black to-gray-800  text-white  md:h-screen  ">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-8  md:flex-row">
                <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Frontend Developer</h2>
                <p className="text-gray-500 py-4 max-w-med">Welcome to my portfolio website, where creativity meets code to craft delightful user experiences.</p>
                <div>
                    <Link to="portfolio" className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r form-cyan-500 to blue-500 cursor-pointer">
                        Portfolio <span className="group-hover:rotate-90 duration-300"><MdKeyboardArrowRight size={25} className="ml-1"/></span>
                    </Link>
                </div>
                </div>
                <div>
                    <img src={heroimage} alt="My profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
                </div>
            </div>  

    </div>
}

export default Home;