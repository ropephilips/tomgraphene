"use client"
import { useState, useEffect } from "react";
export default function CTASection(){

  const [text, setText] = useState("");
  const fullText = "Let's kickstart that project with you.";
  const typingSpeed = 50;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
        if (i < fullText.length){
            setText(fullText.substring(0, i + 1));
            i++;
        } else {
            clearInterval(interval);
        }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

    const scrollToContact = () => {
        const section = document.getElementById("contact");
        if (section) {
            section.scrollIntoView({behavior: "smooth", block: "start"});
        }
    };
    return (

        <section className="py-4 bg-black/100 text-start">
        <div className="max-w-3xl mx-auto px-6 bg-black font-serif shadow-md p-8">
            <p className="text-sm text-orange-400 uppercase mb-4">Ready To Scale Your Business?</p>
            <h2 className="text-white text-lg lg:text-2xl leading-tight font-bold animate-blink">
                {text}
            </h2>
            <button onClick={scrollToContact}
                className="cursor-pointer mt-4 bg-auto-400 shadow-gray-400 font-bold py-2 px-4 
                rounded-lg shadow-md text-white hover:bg-orange-400 focus:bg-orange-400 transition duration-300">
                   Drop us a message
            </button>
        </div>
    
    </section>
    )
}