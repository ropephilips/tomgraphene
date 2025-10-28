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
               We are a Canada-based IT solutions and technology company providing end-to-end digital transformation services to global clients.
               Our expertise spans cloud computing, cybersecurity, web applications developement, digital marketing, and project management - helping
               organizations scale with confidence in a connected world.
               <br />
               <br />
               Our mission is simple - to simplify technology for businesses so they can focus on what matters most: growth, innovation, and impact.
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

            <div className="text-start mb-4 mt-4 lg:py-4">
                <h2 className="text-lg md:text-xl text-gray-700 tracking-widest font-bold font-serif mb-2">Who We Are</h2>
                <p className="text-sm md:text-lg text-gray-700 items-start tracking-tight">
                    Tomgraphene was founded with a vision to bridge the gap between technology and business performance.
                    Our team of experienced developers, cloud engineers, and digital strategists collaborate to deliver scalable, secure,
                    and sustainable solutions tailored to every client's unique needs.
                    <br />
                    We combine technical expertise with business insight, helping startups, enterprises, and organizations adapt to the ever-changing digital landscape.
                </p>
            </div>

            <div className="text-start mb-4 md:mb-8 mt-4 lg:py-4 ">
                <h2 className="text-lg md:text-2xl text-gray-700 tracking-widest font-bold font-serif mb-2">Our Core Values</h2>
                <ul className="list-disc pl-2 text-xs md:text-sm text-gray-700 items-start tracking-wider space-y-2">
                    <li>
                        <strong>Innovation: </strong> We stay ahead by embracing emerging technologies and creative problem-solving.
                    </li>
                    <li>
                        <strong>Integrity: </strong> We build trust through transparency, accountability, and results.
                    </li>
                    <li>
                        <strong>Excellence: </strong> Every project we deliver reflects our commitment to quality and performance.
                    </li>
                    <li>
                        <strong>Security: </strong> We safeguard client data and systems with top-tier cybersecurity standards.
                    </li>
                    <li>
                        <strong>Sustainability: </strong> We build solutions designed to scale, evolve and last.
                    </li>
                </ul>
            </div>
             
            <div className="bg-gray-100 rounded-lg p-6 mb-6"> 
                
            <div className="text-start mb-4">
               <h2 className="text-xs lg:text-sm text-gray-700 uppercase tracking-widest mb-2">our mission</h2>
               <p className="text-sm text-gray-800 items-start tracking-tight ">
                To deliver reliable, secure, and innovative digital solutions that empower organizations worldwide to
                operate smarter, faster, and more efficiently.
               </p>
            </div>

            <div className="text-start mb-4">
               <h2 className="text-xs lg:text-sm text-gray-700 uppercase tracking-widest mb-2">our vision</h2>
               <p className="text-sm text-gray-800 items-start tracking-tight ">
                To become a global leader in intelligent IT solutions, helping businesses leverage technology to 
                drive sustainable growth and digital transformation.
               </p>
            </div>
            </div>

            <div className="text-start mb-4 mt-4 px-2 py-4">
                <h2 className="text-lg md:text-xl text-gray-700 tracking-widest font-bold font-serif mb-2">What Makes Us Different</h2>
                <ul className="list-disc pl-2 text-xs md:text-sm text-gray-700 items-start tracking-wider space-y-2">
                    <li>
                        <strong>Global Expertise, Local Insight:</strong> Based in canada, serving clients across continents.
                    </li>
                    <li>
                        <strong>Comprehensive Solutions:</strong> From strategy and design to deployment and support - all under one roof.
                    </li>
                    <li>
                        <strong>Industry Experience:</strong> Proven success across sectors like fintech, real estate, education, Agricbusiness and manufacturing.
                    </li>
                    <li>
                        <strong>Agile & Scalable:</strong> We adapt quickly to clients needs, timelines, and technologies.
                    </li>
                    <li>
                        <strong>Customer-Centric:</strong> Your growth defines our success - not the other way around.
                    </li>
                </ul>
            </div>
             
             <div className="bg-gradient-to-r from-gray-500 via-black to-orange-400 text-white p-4 rounded-lg shadow-md">
                <p className="text-sm lg:text-lg font-serif items-start">Let's turn your vision into reality - one solution at a time.</p>
                <p className="text-center text-sm md:text-lg px-2 font-bold font-serif mt-1 uppercase tracking-[0.30em]">
                    📩 Contact Us today to start your transformation
                    <br />
                    <span className="italic lowercase tracking-[0.20em] text-orange-300">info@tomgrapehene.com</span>
                </p>
             </div>

           </div>
         
            
        </section>
    );
}