"use client";
import {motion, useInView} from "framer-motion";
import { useRef } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function PortfolioSection(){
     const ref = useRef(null);
     const inView = useInView(ref, {once: true});
    const projects = [
        {
            title: "Project Management Dashboard",
            image: "/portfolio/project1.JPG",
            description: "Managing project operations for client."
        },
        {
            title: "IT Support ",
            image: "/portfolio/project5.JPG",
            description: "Setup, monitor and manage online activities"
        },
        {
            title: "Branding Design",
            image: "/portfolio/project2.JPG",
            description: "SEO campaign for E-commerce"
        },
        {
            title: "Software Development",
            image: "/portfolio/project3.JPG",
            description: "Full-stack application"
        },
        {
            title: "Business online audit ",
            image: "/portfolio/project4.JPG",
            description: "online audit for business visibility."
        },
        {
            title: "Project Management Dashboard",
            image: "/portfolio/project6.JPG",
            description: "Admin dashboard for managing business data."
        }
    ];

    return (
       
        <section id="portfolio"
           ref={ref}
           className="py-8 bg-gradient-to-b from-gray-100 to-white text-center text-gray-300">
            <motion.h2 initial={{opacity: 0, y: 30}}
                animate={inView ? {opacity: 1, y: 0 } : {}}
                transition={{duration: 0.6}}
                className="text-sm md:text-lg lg:text-lg text-black font-serif font-bold mt-4 mb-6 lg:mb-12 tracking-[0.35em]">
                Some of our projects 
            </motion.h2>

                             <div className="block md:hidden">
                                <Swiper spaceBetween={20} slidesPerView={1}
                                pagination={{clickable: true}}
                                autoplay={{ delay: 5000, disableOnInteraction: false}}
                                modules={[Autoplay,Pagination]}>
            
                                    {projects.map((item, index) => (
                                        <SwiperSlide key={index} className="mb-2">
                                            <motion.div initial={{opacity:0, y: 30}}
                                            animate={inView ? {opacity: 1, y: 0} : {}}
                                            transition={{duration: 0.6}}
                                            className="w-full max-w-md mx-auto p-6 rounded-2xl relative flex flex-col m-h-[460px]">
                                           
                                          <Image src={item.image} alt={item.title} width={500} height={300} 
                                          className="w-full h-56 bg-cover bg-center rounded-t-lg" priority />

                                       <div className="flex flex-col justify-between flex-1 p-6 pb-6 bg-gray-900 rounded-b-lg">
                                         <span className="text-sm font-serif text-gray-100 -tracking-tighter">{item.description}</span>
                                         <h3 className="text-lg font-semibold text-gray-50 font-serif mt-1">{item.title}</h3>
                                
                                       </div>
                                            
                                         </motion.div>
                                            
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                             </div>

                                 <motion.div initial={{opacity: 0, y: 50}}
                                        animate={inView ? {opacity: 1, y: 0} : {}}
                                        transition={{ duration: 0.8, delay: 0.2}}
                                        className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
                                            {projects.map((item, index) => (
                                        
                                    <motion.div key={index} 
                                       initial={{opacity: 0, y: 30}} 
                                       animate={inView ? {opacity: 1, y: 0} : {}}
                                       transition={{ duration: 0.6, delay: index * 0.2 }} 
                                        className="w-full max-w-md mx-auto text-white p-6 rounded-2xl relative">
                                                        
                                         <Image src={item.image} alt={item.title} width={500} height={300} 
                                             className="w-full h-56 bg-cover bg-center rounded-t-lg" priority />

                                       <div className="p-4 bg-gray-700 rounded-b-lg">
                                         <span className="text-sm text-gray-100">{item.description}</span>
                                         <h3 className="text-lg font-semibold text-gray-50 font-serif mt-1">{item.title}</h3>
                                    
                                       </div>
                                            </motion.div>
                                            
                                            
                                        ))}
                                    </motion.div>

           

        </section>
    );
}