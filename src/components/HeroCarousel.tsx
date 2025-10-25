"use client";
import { useState, useEffect } from "react";

export default function HeroCarousel(){
  const [text, setText] = useState("");
  const fullText = `At Tomgraphene technology and IT solutions, we design, build, and secure technology ecosystems that help businesses scale with confidence.
                    From cloud computing and cybersecurity to web applications and digital strategy 
                    - we fuse innovation with precision to create your solutions.`;
  const typingSpeed = 100;

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

    return (
       <section id="home" className="relative w-full min-h-screen pt-20 pb-16 bg-aurora text-white flex items-center">

       <div className="absolute inset-0 aurora-bg mix-blend-multiply bottom-0 bg-gradient-to-b from transparent to-gray-900"></div>
        <div className="absolute inset-0 bg-black/15 "></div>

         <div className="relative z-10 max-w-5xl mx-auto px-6 fade-up">

            <h1 className="text-4xl md:text-4xl font-bold font-serif leading-tight">
                Engineering digital systems as strong and adaptive as graphene.
            </h1>
            <p className="mt-4 text-sm md:text-lg lg:text-lg max-w-3xl font-serif tracking-tighter">
                {text}
            </p>

            <div className="mt-6 flex gap-2">
                <button onClick={() => document.getElementById("contact") ?.scrollIntoView({behavior: "smooth"})} 
                      className="cursor-pointer bg-orange-400 focus:bg-orange-500 hover:bg-orange-500 text-white px-5 py-3 rounded-lg font-serif font-semibold">
                    Get Started
                </button>
                <button onClick={() => document.getElementById("services") ?.scrollIntoView({behavior: "smooth"})} 
                      className="border border-orange-800 font-serif focus:bg-orange-500 hover:bg-orange-500 hover:text-white text-orange-400 px-5 py-3 rounded-lg font-semibold cursor-pointer">
                    Explore Our Solutions
                </button>
            </div>
         </div>

       </section>
    );
}