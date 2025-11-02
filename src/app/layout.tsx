"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import GotoTop from "@/components/GoToTop";
import Script from "next/script";
import Head from "next/head";



export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    const pathname = usePathname();

    const noPaddingRoutes = ["/"];
    const shouldAddPadding = !noPaddingRoutes.includes(pathname);

    return (
      <html lang="en">
<Head>
  <title>Tomgraphene | Digital Innovation & Tech Solutions</title>
  <meta
    name="description"
    content="We build scalable web platforms, SaaS, cloud computing and cybersecurity solutions for modern enterprises."
  />
  <meta
    name="keywords"
    content="web development, SaaS development, cybersecurity, cloud migration, digital marketing agency, Tomgraphene"
  />
  <meta property="og:title" content="Tomgraphene - Innovative Web & Tech Solutions" />
  <meta
    property="og:description"
    content="Empowering global businesses with cutting-edge web applications, APIs, and cybersecurity systems."
  />
  <meta property="og:url" content="https://tomgraphene.com" />
  <meta property="og:image" content="https://tomgraphene.com/og-image.JPG" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@tomgraphene" />
  <meta name="twitter:creator" content="@tomgraphene" />
  <link rel="short icon" href="/favicon.ico" type="image/x-icon" />
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="canonical" href="https://tomgraphene.com/" />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Tomgraphene",
        url: "https://tomgraphene.com",
        logo: "https://tomgraphene.com/logo.JPG",
        sameAs: [
          "https://linkedin.com/company/tomgraphene",
          "https://twitter.com/tomgraphene",
        ],
      }),
    }}
  />
</Head>

      <body className="antialiased">
        <Script async
          src="https://www.googletagmanager.com/gtag/js?id=G-LJYF719KGF"
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LJYF719KGF');
          `}
        </Script>
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