"use client";
import Image from "next/image";
import { useEffect, useState } from "react";



export default function About(){
  

    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const aboutSection = document.getElementById("about");
            if (aboutSection && aboutSection.getBoundingClientRect().top < window.innerHeight - 100){
                setAnimation(true);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    },[]);

    return (
        <section id="about" className="min-h-screen bg-gradient-to-b py-8 md:py-10 from-gray-50 to-white">
           <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="px-2 py-2 rounded-lg text-sm text-gray-700 font-medium pt-8 uppercase tracking-[0.35em]">About</h3>
            <h1 className="text-4xl font-serif font-semibold text-gray-900 mb-10 tracking-wider">
                Where enterprise technology solutions meets client purpose
            </h1>
            <p className="text-xs lg:text-sm text-start font-medium text-gray-800 tracking-wider mb-4"> At <strong>Tomgraphene</strong>, we deliver cutting edge
               technology solutions designed to protect, empower, and transform modern enterprises.
               Our specialized solutions combine advanced systems to strength your digital resilience.
            </p>
            <div className="block md:hidden">
                <Image src="/logo/logoS.PNG" alt="tomgrapehene Logo" width={150} height={100} 
                    className="w-80 h-auto object-cover object-center" priority />
            </div>
            <div className="hidden md:block relative w-full h-48 md:h-56 rounded-t-2xl rounded-b-2xl overflow-hidden">
                <Image src="/logo/logo.JPG" alt="projects"
                    fill className="object-cover brightness-100 contrast-100 saturate-150 opacity-100" 
                    sizes="(max-width: 768px) 100vw, 400px" priority/>
            </div>

            <div className="text-start mb-4 mt-4">
               <h2 className="text-xs lg:text-sm text-gray-700 uppercase tracking-widest mb-2">our mission</h2>
               <p className="text-sm text-gray-800 items-start tracking-tighter ">
                We believe technology solutions designed to protect, empower, and transform modern enterprises.
                Our specialized solutions combine advanced systems to strength your digital resilience.
               </p>
            </div>

            <div className="text-start mb-4">
               <h2 className="text-xs lg:text-sm text-gray-700 uppercase tracking-widest mb-2">our vision</h2>
               <p className="text-sm text-gray-800 items-start tracking-tighter ">
                We believe technology solutions designed to protect, empower, and transform modern enterprises.
                Our specialized solutions combine advanced systems to strength your digital resilience.
               </p>
            </div>


           </div>
         
            
        </section>
    );
}