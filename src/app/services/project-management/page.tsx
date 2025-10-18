"use client"
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import SupportModal from "@/components/StartedModal"; 
import { useState ,  useEffect } from "react";



export default function Pm(){
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
                                <h1 className="text-xs md:text-sm text-gray-900 text-start uppercase mb-3 tracking-[0.35em]">📊 Project Management & IT Consulting</h1>
                                <p className="text-xl md:text-3xl font-semibold font-serif text-gray-600 mb-3 text-start">
                                 Turn ideas into successful scalable outcomes
                                </p>
                        
                                <p className="text-gray-700 text-xs md:text-sm mb-3 text-start tracking-[0.09em]">
                                  Our project management and It Consulting services help organizations streamline operations, 
                                  reduce risks, and deliver projects on time and within budget. 
                                  We provide both technical and business insights to ensure your IT investments deliver maximum value.
                                </p>
                        
                          <div className="flex justify-start gap-4 mb-6">
                          <button onClick={() => setShowModal(true)}
                            className="px-6 py-2 bg-gray-700 cursor-pointer text-white md:tracking-[0.25em] rounded-full hover:bg-gray-900 transition"
                          >
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
                                    src="/images/IMG_8047.JPG"
                                    alt="project management Illustration"
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
                                <h2 className="text-2xl md:text-3xl font-semibold text-center font-serif text-gray-700 mb-6">Our Capabilities</h2>
                        
                                <div className="grid md:grid-cols-2 gap-6">
                                  {[
                                    {
                                      title: "IT project planning and execution",
                                      desc: "Seamless transition to AWS, Google Cloud, or Microsoft Azure.",
                                    },
                                    {
                                      title: "Agile and Scrum project management",
                                      desc: "Integrate private and public clouds for maximum flexibility.",
                                    },
                                    {
                                      title: "Digital transformation strategy",
                                      desc: "Accelerate development cycles with CI/CD and automation.",
                                    },
                                    {
                                      title: "Process automation consulting",
                                      desc: "Reliable, secure storage with disaster recovery and redundancy.",
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
                                <h2 className="text-2xl md:text-3xl font-semibold text-start md:text-center font-serif text-gray-700 mb-2">What You Gain</h2>
                                <ul className="max-w-2xl mx-auto grid gap-3 text-gray-700 text-sm md:text-lg">
                                  {[
                                    "Improved operational efficiency",
                                    "Predictable delivery timelines",
                                    "Strategic technology alignment",
                                    "Lower implementation risks",
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
                                        rounded-lg shadow-md text-white hover:bg-orange-400 transition duration-300">
                                           Drop us a message
                                    </a>
                              </div>

                                <p className="text-center font-bold font-serif mt-4 md:mt-6 uppercase text-gray-900 tracking-[0.45em]">
                                     plan, manage, and deliver - with precision and purpose.
                                 </p>
          <SupportModal isOpen={showModal} onClose={() => setShowModal(false)} />
                            </section>
    );
}