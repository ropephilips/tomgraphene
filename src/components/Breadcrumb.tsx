"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs(){
    const pathname = usePathname();
    
    //split path into parts and remove empty strings
    const pathParts = pathname.split("/").filter(Boolean);

    //capitalize each part nicely
    const formatPart = (str: string) => 
        str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, "");

    //Build cumulative links for each segment (so each breadcrumbs works)

    // const paths  = pathParts.map((part, idx) => {
    //     if (part.toLowerCase() === "services") {
    //         return { name: "Services", href: "/#services"};
    //     }
    //     return {
    //        name: formatPart(part),
    //        href: "/" + pathParts.slice(0, idx + 1).join("/"),
    //     };     
    // });
    
    const paths = pathParts.map((part, idx) => ({
        name: formatPart(part),
        href: "/" + pathParts.slice(0, idx + 1).join("/"),
    }));
    return (
        <nav aria-label="Breadcrumbs" className="text-sm mb-6 flex items-center flex-wrap gap-2">
           
                    <Link rel="stylesheet" href="/" className="hover:text-blue-600">
                      Home
                    </Link>


                {paths.map((item , idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        <span></span>
                        {idx === paths.length - 1 ? (
                            <span className="text-gray-900 font-medium">{item.name}</span>
                        ):(
                           <Link href={item.href.toLocaleLowerCase() === "services" ? "service" : item.href} className="hover:text-blue-600">
                            {item.name}
                           </Link>
                        )}
                    </div>
                ))}
            
        </nav>
    );
}