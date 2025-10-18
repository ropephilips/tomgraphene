"use client";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const services = [
   
    {
        title: "Cybersecurity",
        description: "In-depth market research and data analysis to identify opportunities and strategies.",
        image: "/icons/cybersecurity.PNG"
    },
    {
        title: "Application Developement",
        description: "Custom web applications, to scale and enhance performance.",
        image: "/icons/coding.png"
    },
    {
        title: "Cloud computing",
        description: "Optimized funnels that capture leads and maximize conversion rates.",
        image: "/icons/cloud.PNG"
    },
    {
        title: "Project Management",
        description: "Effective planning, execution and delivery of projects tailored to your business goals.",
        image: "/icons/market.png",
    },
    {
        title: "Digital Marketing",
        description: "Boost your online visibility and engage with customers through strategic campaigns.",
        image: "/icons/market-analysis.png"
    },
    {
        title: "IT Support",
        description: "Reliable IT support and system setup to keep your business running smoothly.",
        image: "/icons/network-admin.png"
    },
    

];

export default function ServicesSection(){
   
    return (
        <section id="services" className="py-8 lg:py-20 bg-gray-100 text-black flex items-center">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-xl md:text-4xl font-bold font-serif mb-8 tracking-[0.35em]">Our Services</h2>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div key={index}
                             className="relative group clip-bubble bg-white/45 rounded-lg shadow-md p-5 
                             hover:shadow-xl hover:bg-orange-200 hover:scale-105 
                                transition-transform duration-300">
                            <Image width={500} height={300} src={service.image} alt={service.title} className="w-16 h-16 mb-4" priority/>
                            <h3 className="text-xl font-serif font-semibold mb-2">{service.title}</h3>
                            <p className="text-black/50 font-serif text-sm">{service.description}</p>
                            <p className="text-xs absolute top-6 right-13 font-semibold tracking-[0.20em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">read more</p>
                            <button aria-label="Read more" 
                                  className="absolute top-4 right-4 bg-white w-8 h-8 rounded-full  items-center justify-center
                                  shadow-md hover:scale-105 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <FiArrowRight className="text-gray-800" size={20}/>
                            </button>
                        </div>
                    ))}
                </div>
               
            </div>
        </section>
    );
}
