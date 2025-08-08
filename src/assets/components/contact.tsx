"use client";

import { Mail, Phone, MapPin, Code, GitBranch, Terminal, Braces } from "lucide-react";
import { useTheme } from "../../../context/use-theme";

export function Contact() {
    const { theme } = useTheme();

    const contactInfo = [
        {
            icon: Mail,
            title: "Correo electrónico",
            value: "zambra873@gmail.com",
            href: "mailto:zambra873@gmail.com",  
        },
        {
            icon: Phone,
            title: "Teléfono",
            value: "+52 249-159-3308",
            href: "tel:+522491593308", 
        },
        {
            icon: MapPin,
            title: "Ubicación",
            value: "Acaztingo , Puebla , México",
            href: "https://www.google.com/maps/search/?api=1&query=Acaztingo,+México",
        },
    ];


    const bgMain =
        theme === "light"
            ? "bg-gradient-to-r from-white via-blue-100 to-blue-200 relative overflow-hidden"
            : "bg-gradient-to-r from-gray-800 via-gray-900 to-black relative overflow-hidden";

    const textMain = theme === "light" ? "text-gray-900" : "text-white";
    const textSecondary = theme === "light" ? "text-gray-600" : "text-gray-300";
    const iconBg = theme === "light" ? "bg-blue-100 text-blue-600" : "bg-blue-900 text-blue-400";
    const codeElementsOpacity = theme === "light" ? "opacity-20" : "opacity-30";

    return (
        <section id="contacto" className={`py-24 px-4 ${bgMain} transition-colors duration-300`}>
            {/* Iconos flotantes y gradiente decorativo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className={`absolute top-24 left-10 ${theme === "light" ? "text-blue-600" : "text-blue-400"} ${codeElementsOpacity} animate-pulse`}>
                    <Code size={30} />
                </div>
                <div className={`absolute top-40 right-10 ${theme === "light" ? "text-green-600" : "text-green-400"} ${codeElementsOpacity} animate-bounce`}>
                    <Terminal size={26} />
                </div>
                <div className={`absolute bottom-32 left-14 ${theme === "light" ? "text-purple-600" : "text-purple-400"} ${codeElementsOpacity} animate-pulse`}>
                    <Braces size={36} />
                </div>
                <div className={`absolute bottom-20 right-20 ${theme === "light" ? "text-cyan-600" : "text-cyan-400"} ${codeElementsOpacity} animate-bounce`}>
                    <GitBranch size={22} />
                </div>

                {/* Gradiente decorativo */}
                <div
                    className={`absolute inset-0 transition-colors duration-300 ${theme === "light"
                        ? "bg-gradient-to-r from-blue-50/30 via-transparent to-purple-50/30"
                        : "bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"
                        }`}
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${textMain}`}>Contacto</h2>
                <p className={`text-lg mb-12 ${textSecondary}`}>
                    ¿Tienes un proyecto o idea en mente? No dudes en contactarme. Estoy disponible para colaboraciones, trabajo freelance o simplemente para charlar.
                </p>

                <div className="flex flex-col sm:flex-row justify-center space-y-10 sm:space-y-0 sm:space-x-20">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="flex flex-col items-center text-center max-w-xs">
                            <div className={`w-14 h-14 flex items-center justify-center rounded-full ${iconBg}`}>
                                <info.icon className="w-6 h-6" />
                            </div>
                            <h3 className={`mt-4 text-lg font-semibold ${textMain}`}>{info.title}</h3>
                            <a href={info.href} className={`mt-1 text-base hover:underline ${textSecondary}`}>
                                {info.value}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
