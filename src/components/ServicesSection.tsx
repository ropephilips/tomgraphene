"use client";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const services = [
  {
    link: "/services/cybersecurity",
    title: "Cybersecurity",
    description:
      "In-depth market research and data analysis to identify opportunities and strategies.",
    image: "/icons/cybersecurity.PNG",
  },
  {
    link: "/services/application-development",
    title: "Web App Development",
    description: "Custom web applications, to scale and enhance performance.",
    image: "/icons/coding.PNG",
  },
  {
    link: "/services/cloud-services",
    title: "Cloud Computing",
    description:
      "Optimized funnels that capture leads and maximize conversion rates.",
    image: "/icons/cloud.PNG",
  },
  {
    link: "/services/project-management",
    title: "Project Management",
    description:
      "Effective planning, execution and delivery of projects tailored to your business goals.",
    image: "/icons/market.PNG",
  },
  {
    link: "/services/digital-marketing",
    title: "Digital Marketing",
    description:
      "Boost your online visibility and engage with customers through strategic campaigns.",
    image: "/icons/market-analysis.PNG",
  },
  {
    link: "/services/it-support",
    title: "IT Support",
    description:
      "Reliable IT support and system setup to keep your business running smoothly.",
    image: "/icons/network-admin.PNG",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-8 lg:py-15 bg-gray-100 text-black flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-sm md:text-lg font-bold font-serif mb-2 tracking-[0.35em]">
          Our Services
        </h2>
        <h1 className="text-xl md:text-2xl font-serif font-semibold text-gray-900 mb-10 tracking-wider">
          Smart, Secure, and Scalable IT Solutions for Global Businesses
        </h1>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <div
                tabIndex={0} // 👈 makes card focusable (mobile "tap" support)
                className="relative group clip-bubble bg-white/45 rounded-lg shadow-md p-5 
                           hover:shadow-xl hover:bg-orange-200 hover:scale-105
                           focus:shadow-xl focus:bg-orange-200 focus:scale-105
                           active:shadow-xl active:bg-orange-200 active:scale-105
                           transition-all duration-300 ease-in-out cursor-pointer"
              >
                <Image
                  width={500}
                  height={300}
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16 mb-4 mx-auto"
                  priority
                />
                <h3 className="text-xl font-serif font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-black/50 font-serif text-sm">
                  {service.description}
                </p>

                <p
                  className="text-xs absolute top-6 right-13 font-semibold tracking-[0.20em] 
                             opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 
                             transition-opacity duration-300"
                >
                  read more
                </p>

                <button
                  aria-label="Read more"
                  className="absolute top-4 right-4 bg-white w-8 h-8 rounded-full flex items-center justify-center
                             shadow-md hover:scale-105 cursor-pointer
                             opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 
                             transition-opacity duration-300"
                >
                  <FiArrowRight className="text-gray-800" size={20} />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
