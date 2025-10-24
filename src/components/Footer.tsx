"use client";
import Image from "next/image";

import Link from "next/link";
import { FaSquareXTwitter, FaLinkedin , FaEnvelopeOpenText, FaWhatsapp, FaFacebook} from "react-icons/fa6";
export default function Footer(){
    // const scrollToHome = () => {
    //     document.getElementById("home")?.scrollIntoView({behavior: "smooth"});
    // };

    return (
        <footer className="bg-black text-white py-4 lg:py-8">
            <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6">

                <div className="bg-black border border-orange-400 rounded-lg text-white ">
                
                    <div className="flex flex-col items-center justify-center p-0 m-0 leading-0">
                        <Image src="/logo/logoL.PNG" alt="Logo" 
                          className="brightness-150 contrast-150 saturate-150 opacity-100 
                          w-50 h-15 object-cover object-center" width={100} height={50} priority />
                        <p className="pl-2 text-sm text-center font-serif font-bold leading-none">
                         Sign up to receive our newsletter
                        </p>
                    </div>
                        
                        <div className="p-6 rounded-lg shadow-lg w-full">
                         <form action="" >
                            <input type="email" name="email" placeholder="Email address..." required 
                              className="w-full text-sm text-white border border-orange-400 rounded-lg p-2 focus:outline-none focus:ring-orange-500" />
                            <button type="submit" 
                              className="w-full font-serif rounded-lg bg-orange-400 hover:bg-amber-400 cursor-pointer mt-2 text-black">
                               Subscribe
                            </button>
                        </form>
                        </div>
                        

                    
                </div>

                <div>
                    <h3 className="text-xl lg:text-2xl font-serif font-bold mb-2">Services</h3>
                    <ul className="space-y-0 text-sm font-serif">
                        <li><strong>Web Application Development</strong></li>
                        <li><strong>Cloud Computing</strong></li>
                        <li><strong>Cybersecurity</strong></li>
                        <li><strong>Digital Marketing</strong></li>
                        <li><strong>Project Management</strong></li>
                        <li><strong>IT Support & Consulting</strong></li>
                        
                    </ul>
                </div>
              
                <div>
                    <h4 className="text-sm lg:text-xl font-bold mb-2 font-serif ">Quick Links</h4>
                    <ul className="space-y-0.5 text-sm font-serif">
                        <li><a href="#home" className="hover:text-orange-500">Home</a></li>
                        <li><a href="#service" className="hover:text-orange-500">Service</a></li>
                        <li><a href="#portfolio" className="hover:text-orange-500">Portfolio</a></li>
                        <li><a href="#about" className="hover:text-orange-500">About</a></li>
                        <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
                        <li><Link href="#" className="hover:text-orange-500">Affiliates</Link></li>
                        <li><Link href="#" className="hover:text-orange-500">Careers</Link></li> 
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold font-serif mb-2">Contact</h4>
                    <div className="flex items-center space-x-1 text-sm">
                        <FaEnvelopeOpenText className="text-lg text-white"/> 
                          <span className="text-sm md:text-base font-serif">info@tomgraphene.com</span>
                    </div>
                    <div className="text-lg font-semibold font-serif mt-2">
                    <h4 className="mb-2 text-sm">Connect with us</h4>
                    <div>
                        <ul className="flex space-x-2">
                            <li><Link href="#"><FaSquareXTwitter className="hover:text-gray-500 transition-transform transform hover:scale-110"/></Link></li>
                            <li><Link href="#"><FaLinkedin className="hover:text-blue-700 transition-transform transform hover:scale-110"/></Link></li>
                            <li><Link href="#"><FaFacebook className="hover:text-blue-700 transition-transform transform hover:scale-110"/></Link></li>
                            <li><Link href="#"><FaWhatsapp className="hover:text-green-800 transition-transform transform hover:scale-110"/></Link></li>
                        </ul>
                    </div>
                </div>
                </div>
      
                <div className="mt-4 text-center font-serif text-white text-sm pt-2">
                   Tomgraphene&copy; {new Date().getFullYear()}  <br/>Privacy | Terms of use
                </div>
            </div>
        </footer>
    )
}