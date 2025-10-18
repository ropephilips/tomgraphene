import { NextSeoProps } from "next-seo";

const defaultSEOConfig: NextSeoProps = {
  title: "Ropephilips - Project management & Tech Solutions",
  description: "Ropephilips delivers professional project management , application development, SEO & social media marketing, IT support, and lead generation services.",
  canonical: "https://ropephilips.com/",
  openGraph: {
    type: "website",
    url: "https://ropephilips.com/",
    title: "Ropephilips - Project management & Tech Solutions",
    description: "Ropephilips helps businesses grow with expert project management, app development, SEO, and IT solutions.",
    images: [
    {  
      url: "https://ropephilips.com/og.png",
      width: 1200,
      height: 600,
      alt: "Ropephilips Portfolio",
    },
    ],
    siteName: "Ropephilips Portfolio", 
  },
   twitter: {
    handle: "@ropephilips",
    site: "@ropephilips",
    cardType: "summary_large_image",
  },
};
export default defaultSEOConfig;