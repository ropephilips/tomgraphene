"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function GotoTop(){
    const [isVisible, setIsvisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsvisible(true);
            } else {
                setIsvisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
          {isVisible && (
            <button onClick={scrollToTop} 
            className="fixed bottom-5 right-5 z-50 bg-orange-600 text-white p-2 rounded-full 
            shadow-lg hover:bg-orange-700 focus:bg-orange-700 transition-all sm:buttom-8 sm:right-8">
                <FaArrowUp className="text-lg sm:xl md:text-2xl lg:text-2xl"/>
            </button>
          )}
        </>
    )
}