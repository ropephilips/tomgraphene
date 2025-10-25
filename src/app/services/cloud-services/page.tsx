"use client"
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import SupportModal from "@/components/StartedModal"; 
import { useState ,  useEffect } from "react";


export default function cloud(){
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
        <h1 className="text-xs md:text-sm text-gray-900 text-start uppercase mb-3 tracking-[0.35em]">🌩Cloud Computing</h1>
        <p className="text-xl md:text-3xl font-semibold font-serif text-gray-600 mb-3 text-start">
          Scale without limits. Secure without compromise 
        </p>

        <p className="text-gray-700 text-xs md:text-sm mb-3 text-start tracking-[0.09em]">
          Our cloud computing solutions empower 
          businesses run smarter and more efficiently - anywhere in the world.<br/>
          We design, deploy, and manage cloud infrastructure that’s secure,
          flexible, and cost-effective — helping you migrate from legacy systems
          and embrace modern scalability.
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
            src="/images/IMG_E8051.JPG"
            alt="Cloud Computing Illustration"
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
        <h2 className="text-2xl md:text-3xl font-semibold text-center font-serif text-gray-700 mb-6">What We Offer</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Cloud Migration & Deployment",
              desc: "Seamless transition to AWS, Google Cloud, or Microsoft Azure.",
            },
            {
              title: "Hybrid & Multi-Cloud Environments",
              desc: "Integrate private and public clouds for maximum flexibility.",
            },
            {
              title: "Cloud Automation & DevOps Integration",
              desc: "Accelerate development cycles with CI/CD and automation.",
            },
            {
              title: "Data Storage & Backup Solutions",
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
        <h2 className="text-2xl md:text-3xl font-semibold text-center font-serif text-gray-700 mb-3">Benefits</h2>
        <ul className="max-w-2xl mx-auto grid gap-3 text-gray-700 text-sm md:text-lg">
          {[
            "Reduced operational costs",
            "Enhanced scalability and flexibility",
            "Improved security and disaster recovery",
            "Faster application deployment",
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

                                <p className="text-center font-bold font-serif mt-4 md:mt-6 text-sm md:text-lg px-2 uppercase text-gray-900 tracking-[0.40em]">
                                   Let us help unlock the full power of the cloud
                                 </p>

      
   <SupportModal isOpen={showModal} onClose={() => setShowModal(false)} />    
    </section>

        

        
    );
}