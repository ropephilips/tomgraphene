"use client"
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import SupportModal from "@/components/StartedModal"; 
import { useState ,  useEffect } from "react";



export default function It_support(){
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
                        <h1 className="text-xs md:text-sm text-gray-900 text-start uppercase mb-3 tracking-[0.35em]">📞IT Support </h1>
                        <p className="text-xl md:text-3xl font-semibold font-serif text-gray-600 mb-3 text-start">
                         Reliable IT Support that keeps your business running smoothly
                        </p>
                
                        <p className="text-gray-700 text-xs md:text-sm mb-3 text-start tracking-[0.09em]">
                          At Tomgraphene, we understand that technology is the backbone of your business. 
                          That's why we offer comprehensive IT Support services designed to keep your system efficient, secure, and always online.
                          <br />
                          Whether you're a startup, a growing enterprise, or a global organization, 
                          our support team provides 24/7 technical assistance to ensure your business operations never skip a beat.
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
                            src="/images/IMG_8050.JPG"
                            alt="IT support Illustration"
                            width={600}
                            height={300}
                            className="rounded-xl shadow-md"
                            priority
                          />
                        </div>
                      </motion.div>
                
     <div className="max-w-6xl mx-auto text-gray-800 px-6 space-y-16 pb-20">
        {/* Managed IT Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white shadow-sm rounded-2xl p-8"
        >
          <h2 className="text-lg font-semibold mb-2 font-serif tracking-[0.15em] no-wrap">🖥Managed IT Services</h2>
          <p className="text-xs md:text-sm text-start text-gray-600 tracking-[0.09em] mb-4">
            Focus on business while we handle the tech. We provide end-to-end IT management, 
            from system monitoring and updates to troubleshooting and maintenance — ensuring 
            your network, devices, and applications run seamlessly.
          </p>

          <h4 className="font-medium mb-2 text-blue-600">Includes:</h4>
          <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
            {[
              "Network and server management",
              "Hardware and software maintenance",
              "IT infrastructure monitoring",
              "Data backup and disaster recovery",
              "Remote support",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm md:text-lg">
                <CheckCircle className="text-green-500 w-5 h-5" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Remote IT Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white shadow-sm rounded-2xl p-8"
        >
          <h2 className="text-lg font-semibold mb-2 font-serif tracking-[0.15em] no-wrap">🌎 Remote IT Support</h2>
          <p className="text-xs md:text-sm text-start text-gray-600 tracking-[0.09em] mb-4">
            No matter where you are in the world, our expert technicians are just a click away. 
            We use secure remote-access tools to diagnose and resolve issues quickly — reducing 
            downtime and keeping your teams productive.
          </p>

          <h4 className="font-medium mb-2 text-blue-600">You Get:</h4>
          <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
            {[
              "Instant problem resolution",
              "Secure and private remote sessions",
              "Reduced operational disruption",
              "24/7 availability",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm md:text-lg">
                <CheckCircle className="text-green-500 w-5 h-5" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Proactive Monitoring */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white shadow-sm rounded-2xl p-8"
        >
          <h2 className="text-lg font-semibold mb-2 font-serif tracking-[0.15em] no-wrap">🔐 Proactive Monitoring & Maintenance</h2>
          <p className="text-xs md:text-sm text-start text-gray-600 tracking-[0.09em] mb-4">
            We don’t wait for problems to happen — we prevent them. 
            Our proactive IT Support identifies vulnerabilities, monitors system health, 
            and applies updates automatically to ensure consistent performance and security.
          </p>

          <h4 className="font-medium mb-2 text-blue-600">Services Include:</h4>
          <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
            {[
              "Real-time system monitoring",
              "Patch management and updates",
              "Performance optimization",
              "Threat and intrusion detection",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm md:text-lg">
                <CheckCircle className="text-green-500 w-5 h-5" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Cloud & Network Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white shadow-sm rounded-2xl p-8"
        >
          <h2 className="text-lg font-semibold mb-2 font-serif tracking-[0.15em] no-wrap">🌥 Cloud & Network Support</h2>
          <p className="text-xs md:text-sm text-start text-gray-600 tracking-[0.09em] mb-4">
            From cloud migrations to network troubleshooting, we ensure your digital 
            environment stays optimized, secure, and scalable. Our team supports AWS, 
            Azure, and Google Cloud environments, helping you stay connected across 
            devices and locations.
          </p>

          <h4 className="font-medium mb-2 text-blue-600">Core Features:</h4>
          <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
            {[
              "Cloud setup and configuration",
              "Network troubleshooting",
              "VPN and remote access setup",
              "Data storage and recovery support",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm md:text-lg">
                <CheckCircle className="text-green-500 w-5 h-5" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* End User Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white shadow-sm rounded-2xl p-8"
        >
          <h2 className="text-lg font-semibold mb-2 font-serif tracking-[0.15em] no-wrap">👨‍💻 End-User Support & Helpdesk</h2>
          <p className="text-xs md:text-sm text-start text-gray-600 tracking-[0.09em] mb-4">
            We provide friendly, expert helpdesk support for your staff — ensuring fast 
            solutions and clear communication every time.
          </p>

          <h4 className="font-medium mb-2 text-blue-600">Support Includes:</h4>
          <ul className="grid md:grid-cols-2 gap-2 text-gray-700 text-sm md:text-lg">
            {[
              "Software and hardware assistance",
              "Email and connectivity troubleshooting",
              "Access management and password resets",
              "User training and onboarding",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
                
                       <div className="max-w-3xl mx-auto px-6 bg-black font-serif shadow-md p-8 md:rounded-lg">
                                    <p className="text-xs text-orange-50 mb-3 uppercase animate-blink leading-tight">🙋‍ Ready to elevate your business?</p>
                                    <a href="/contact"
                                        className="cursor-pointer bg-auto-400 shadow-gray-400 font-bold py-2 px-4 
                                        rounded-lg shadow-md text-white hover:bg-orange-400 transition duration-300">
                                           Drop us a message
                                    </a>
                              </div>

         {/* Reusable Modal */}
      <SupportModal isOpen={showModal} onClose={() => setShowModal(false)} />
                     
    </section>
    );
}