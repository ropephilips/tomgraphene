"use client";
import {motion, useInView} from "framer-motion";
import { useRef } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { FaStar, FaQuoteRight } from "react-icons/fa";

const testimonial = [
    {
        name: "Toyin",
        title: "CEO Beauritage Makeup",
        quote: "This team completely transformed my online presence. Their Social media marketing and online audit was top notch."
    },
    {
        name: "Abdul Ajibola ",
        title: "CEO Royal Property Solutions Limited",
        quote: "They helped with a marketing campaigns strategy and automated our customer relation that helped us effectively market our projects."
    },
    {
        name: "Tessy ",
        title: "CEO, Farra Farms Limited",
        quote: "This awesome team built a custom Fish farm management system with automation functions that reduced my expenses, thereby increasing my farm's revenue."
    },
    // {
    //     name: "Daniel Obasi",
    //     title: "Founder, Obasi Logistics",
    //     quote: "They built a custom application that reduced our manual workload by 60%, Fast, efficient and reliable."
    // },
    // {
    //     name: "Sandra Mia",
    //     title: "CMO, Sky Digital Agency",
    //     quote: "Their leads generation strategy doubled our conversations in just 3 weeks. Highly recommend their services."
    // },
    // {
    //     name: "Praise",
    //     title: "Gold Stores",
    //     quote: "Built a custom website and helped us with our SEO, making us visible to our local community."
    // }

];

export default function TestimonialSection(){
    const ref = useRef(null);
    const inView = useInView(ref, {once: true});
    return (
        <section id="testimonial"
           ref={ref}
           className="py-8 md:py-12 bg-gradient-to-b from-gray-100 to-white text-gray-300">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <span className=" tracking-[0.35em] bg-gray-200 text-orange-500 px-2 py-2 rounded-lg text-sm font-medium uppercase">
                   Testimonials
                </span>
                <motion.h2 initial={{opacity: 0, y: 30}}
                 animate={inView ? {opacity: 1, y: 0 } : {}}
                 transition={{duration: 0.6}}
                 className="text-sm md:text-lg lg:text-lg text-black font-serif font-bold mt-4 mb-8 lg:mb-12 tracking-widest">
                   Why leading teams trust Tomgraphene
                 </motion.h2>
                 <div className="relative max-w-5xl mx-auto mb-4 w-full h-40 md:h-60 lg:h-80">
                    <Image src="/images/testimonial.JPG" alt="happy clients" className="object-cover object-center md:object-[center_38%] rounded-2xl" fill priority />
                 </div>

                 <div className="block md:hidden">
                    <Swiper spaceBetween={20} slidesPerView={1}
                    pagination={false}
                    autoplay={{ delay: 3000, disableOnInteraction: false}}
                    modules={[Autoplay,Pagination]}>

                        {testimonial.map((item, index) => (
                            <SwiperSlide key={index} className="mb-3">
                                <motion.div initial={{opacity:0, y: 30}}
                                animate={inView ? {opacity: 1, y: 0} : {}}
                                transition={{duration: 0.6}}
                                className="w-full max-w-md mx-auto bg-gradient-to-br from-amber-400 to-indigo-300 text-white p-6 rounded-2xl relative">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex space-x-1">
                                            {[...Array(5)].map((_,i) => (
                                                <FaStar key={i} className="text-white" />
                                            ))}
                                        </div>
                                        <FaQuoteRight className="text-3xl opacity-80"/>
                                    </div>
                                <p className="font-serif mb-4 text-gray-900">{item.quote}</p>
                                <div className="absolute left-10 -bottom-3 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent
                                      border-r-transparent border-t-purple-200"></div>
                                </motion.div>
                                
                                <div className="w-full max-w-md mx-auto flex items-center justify-between text-gray-800 rounded-b-2xl mt-4 px-6 py-4">
                                    <div className="flex items-center space-x-3">
                                        <Image src="/icons/accounting.PNG" alt="image"
                                        width={48} height={48} className="rounded-full object-cover" priority/>
                                        
                                        <div className="flex-row">
                                      <h3 className="font-bold flex items-start">{item.name}</h3>
                                    <p className="text-xs text-gray-500">{item.title}</p>
                                    </div>
                                    </div>
                        
                                </div>
                                
                            </SwiperSlide>
                        ))}
                    </Swiper>
                 </div>
 
                <motion.div initial={{opacity: 0, y: 50}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{ duration: 0.8, delay: 0.2}}
                    className="hidden md:grid gap-10 md:grid-cols-3">
                        {testimonial.map((item, index) => (
                    
                <motion.div key={index} 
                   initial={{opacity: 0, y: 30}} 
                   animate={inView ? {opacity: 1, y: 0} : {}}
                   transition={{ duration: 0.6, delay: index * 0.2 }} 
                    className="w-full max-w-md mx-auto bg-gradient-to-br from-amber-400 to-indigo-300 text-white p-6 rounded-2xl relative">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex space-x-1">
                                            {[...Array(5)].map((_,i) => (
                                                <FaStar key={i} className="text-white" />
                                            ))}
                                        </div>
                                        <FaQuoteRight className="text-3xl opacity-80"/>
                                    </div>
                            <p className=" font-serif mb-4 text-gray-900">{item.quote}</p>
                            <div className="font-semibold text-white">{item.name}</div>
                            <div className="text-sm font-serif text-orange-800">{item.title}</div>
                        
                        </motion.div>
                        
                        
                    ))}
                </motion.div>
            </div>
        </section>
    );
}