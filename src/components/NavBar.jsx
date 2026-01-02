import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => {


    const[scrolled,serScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            serScrolled(true)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[])


  return (
    <header className= {`navbar ${scrolled ? 'top-0 bg-black' : 'top-0 md:top-10  bg-transparent'}`}>
      <div
        className="mx-auto flex items-center justify-between">
        
        <a href="#hero" className="text-white-50 text-xl md:text-2xl">iPortFolio</a>

        <nav className="hidden lg:flex items-center">
            <ul className="flex space-x-8" >
                {navLinks.map(({link,name})=>(
                    <li key={name} className="text-white-50 relative">
                        <a href={link} className="relative group inline-block text-white">
                            <span className="transition-colors duration-300 hover:text-white">{name}</span>
                            
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"/>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>

        <a href="" className="contact-btn group">
            <div className="bg-white px-5 py-2 rounded-lg text-black group-hover:bg-black-50 transition-colors duration-300 hover:scale-105 ">
                <span className="group-hover:text-white transition-colors duration-300">Hire Me</span>
            </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
