"use client";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Navbar(){
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const links = ["home", "service", "portfolio", "about", "contact"];

    useEffect (() =>{
        const handelScroll = () => {
            setScrolled(window.scrollY > 20)
            if (window.scrollY > 20 && menuOpen){
                setMenuOpen(false);
            }
        };
        window.addEventListener("scroll", handelScroll);
        return () => window.removeEventListener("scroll", handelScroll);
    }, [menuOpen])

     const scrollToSection = (id: string) => {
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
    };

    return(
        <nav className={`fixed w-full z-50 transition-colors duration-300 ${
            scrolled ? "bg-black backdrop:backdrop-blur-md shadow-md" : "bg-transparent" }`}>
    
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 pl-0 sm:pl-8">
                <div onClick={() => scrollToSection("home")} 
                    className="flex items-center space-x-2 cursor-pointer text-white font-bold font-serif">

                     <Image src="/logo/logoS.PNG" alt="Logo Icon" width={70} height={70} className="block md:hidden w-18 h-18 
                           brightness-125 contrast-125 saturate-150 opacity-100" priority={true} />
                     <Image src="/logo/logoL.PNG" alt="Logo" width={150} height={100} 
                           className="hidden md:block w-60 h-auto max-w-full max-h-full object-cover 
                           brightness-125 contrast-125 saturate-150 opacity-100" priority={true} />
                    
                </div>
            <div className="hidden md:flex space-x-8 font-serif rounded ">
                {links.map((link) => (
                    <button key={link} onClick={() => scrollToSection(link)} 
                       className="text-orange-400 hover:text-white transition cursor-pointer">
                       {link.charAt(0).toUpperCase() + link.slice(1)}
                    </button>
                ))}
            </div>

            <div className="md:hidden flex justify-between">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-orange-400 cursor-pointer">
                    {menuOpen ? <XMarkIcon className="h-7 w-7"/>: <Bars3Icon className="h-7 w-7" />}
                </button>
            </div>
        </div>

        {menuOpen && (
            
            <div className={`md:hidden bg-gray-50 rounded-2xl mx-auto ml-8 mr-6 shadow-md transform transition-all duration-500 ease-in-out
               ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} >
                <div className="flex flex-col gap-4 px-4 py-2 mb-2 w-3xl">
                {links.map((link) => (
                    <button key={link} onClick={() => scrollToSection(link)}
                      className="text-start py-0 px-0 text-sm text-black tracking-widest 
                      rounded hover:text-orange-500 cursor-pointer">
                       {link.charAt(0).toUpperCase() + link.slice(1)}
                    </button>
                ))}
                </div>

            </div>
          
        )}
        </nav>
    );
}