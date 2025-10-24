"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import GotoTop from "@/components/GoToTop";

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    const pathname = usePathname();

    const noPaddingRoutes = ["/"];
    const shouldAddPadding = !noPaddingRoutes.includes(pathname);

    return (
        <html lang="en">
            <body className="antialiased">
                <Navbar/>
                <AnimatePresence mode="sync">
                    <motion.main
                      key={pathname} initial={{opacity: 0, y:20}}
                      animate={{opacity:1, y: 0}}
                      exit={{opacity: 0, y: -20}}
                      transition={{duration: 0.4, ease: "easeInOut"}}
                      className={`${shouldAddPadding ? "pt-15" : ""} min-h-screen`}>
                        {children}
                        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
                        <GotoTop/>
                    </motion.main>
                </AnimatePresence>
                <Footer/>
            </body>
        </html>
    )
}