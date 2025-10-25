"use client"
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import SupportModal from "@/components/StartedModal"; 
import { useState ,  useEffect } from "react";


export default function web_app(){
   const [showModal, setShowModal] = useState(false);
     useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth"});
    },[]);

    return (
        <section className="bg-gradient-to-b from-white via-gray-100 to-white min-h-screen py-8 lg:py-15">
        
              {/* Hero Section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto px-6 text-center"
              >
                <h1 className="text-xs md:text-sm text-gray-900 text-start uppercase mb-3 tracking-[0.35em]">💻 Web apps development</h1>
                <p className="text-xl md:text-3xl font-semibold font-serif text-gray-600 mb-3 text-start">
                  Build high-performance web solutions that drive engagement and results
                </p>
        
                <p className="text-gray-700 text-xs md:text-sm mb-3 text-start tracking-[0.09em]">
                  Our team crafts custom web applications that are fast, secure, and scalable. 
                  Whether you're launching a new platform or modernizing and existing system, we deliver clean code,
                   seamless user experience, and business-ready functionality.
                </p>
        
                <div className="flex justify-start gap-4 mb-6">
                  <button onClick={() => setShowModal(true)}
                    className="px-6 py-2 bg-gray-700 cursor-pointer text-white md:tracking-[0.25em] rounded-full hover:bg-gray-900 focus:bg-gray-900 transition">
                      Get Started
                  </button>
                </div>
              </motion.div>
        
              {/* Intro Paragraph + Image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-5xl mx-auto px-6 text-center">
                
        
                {/* Image Section */}
                <div className="flex justify-center mb-3 md:mb-6">
                  <Image
                    src="/images/IMG_E8042.JPG"
                    alt="Web app development Illustration"
                    width={600}
                    height={300}
                    className="rounded-xl shadow-md"
                    priority
                  />
                </div>
              </motion.div>
        
              {/* What We Offer */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="max-w-6xl mx-auto px-6 py-12"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-center font-serif text-gray-700 mb-6">We Develop</h2>
        
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Corporate and enterprise web platforms",
                      desc: "Scalable, secure, and high-performing platforms built for business growth.",
                    },
                    {
                      title: "E-commerce and booking systems",
                      desc: "Custom platforms that simplify transactions and boost online sales.",
                    },
                    {
                      title: "Progressive Web Apps (PWAs)",
                      desc: "Fast, responsive web apps with native mobile experience and offline access.",
                    },
                    {
                      title: "SaaS applications and APIs",
                      desc: "Reliable cloud-based software and API solutions for scalable digital operations.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition"
                    >
                      <h3 className="font-semibold text-lg mb-2 text-gray-800">{item.title}</h3>
                      <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
                    {/* <CTASection/> */}
              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/60 py-10 px-6"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-start md:text-center font-serif text-gray-700 mb-3">Our Approach</h2>
                <ul className="max-w-2xl mx-auto grid gap-3 text-gray-700 text-sm md:text-lg">
                  {[
                    "Built for speed and performance",
                    "Mobile-first and user-centered design",
                    "Secure backend systems",
                    "Continuous integration and deployment",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 space-y-0">
                      <CheckCircle className="text-green-500 w-5 h-5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <div className="max-w-3xl mx-auto px-6 bg-black font-serif shadow-md p-8 md:rounded-lg">
                                    <p className="text-xs text-orange-50 mb-3 uppercase animate-blink leading-tight">🙋‍ Ready to elevate your business?</p>
                                    <a href="/contact"
                                        className="cursor-pointer bg-auto-400 shadow-gray-400 font-bold py-2 px-4 
                                        rounded-lg shadow-md text-white hover:bg-orange-400 focus:bg-orange-400 transition duration-300">
                                           Drop us a message
                                    </a>
                              </div>

                                <p className="text-center text-sm md:text-lg px-2 font-bold font-serif mt-4 md:mt-6 uppercase text-gray-900 tracking-[0.40em]">
                                   From concept to code - we bring your digital ideals to life
                                 </p>

              
          <SupportModal isOpen={showModal} onClose={() => setShowModal(false)} />    
            </section>
        
                
    );
}