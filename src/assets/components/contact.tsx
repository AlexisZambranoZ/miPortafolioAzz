"use client";

import type React from "react";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Code, GitBranch, Terminal, Braces } from "lucide-react";
import { useTheme } from "../../../context/use-theme";

export function Contact() {
    const { theme } = useTheme();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Formulario enviado:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "tu.email@ejemplo.com",
            href: "mailto:tu.email@ejemplo.com",
        },
        {
            icon: Phone,
            title: "Teléfono",
            value: "+1 (555) 123-4567",
            href: "tel:+15551234567",
        },
        {
            icon: MapPin,
            title: "Ubicación",
            value: "Ciudad, País",
            href: "#",
        },
    ];

    // Estilos dinámicos
    const bgMain =
        theme === "light"
            ? "bg-gradient-to-r from-white via-blue-100 to-blue-200 relative overflow-hidden"
            : "bg-gradient-to-r from-gray-800 via-gray-900 to-black relative overflow-hidden"

    const textMain = theme === "light" ? "text-gray-900" : "text-white";
    const textSecondary = theme === "light" ? "text-gray-600" : "text-gray-300";
    const cardBg = theme === "light" ? "bg-white" : "bg-gray-900";
    const cardBorder = theme === "light" ? "border-gray-200" : "border-gray-700";
    const inputBg = theme === "light" ? "bg-white" : "bg-gray-800";
    const inputBorder = theme === "light" ? "border-gray-300" : "border-gray-600";
    const inputText = theme === "light" ? "text-gray-900" : "text-white";
    const inputPlaceholder = theme === "light" ? "placeholder-gray-500" : "placeholder-gray-400";
    const inputFocusRing = "focus:ring-2 focus:ring-blue-500 focus:border-transparent";
    const iconBg = theme === "light" ? "bg-blue-100 text-blue-600" : "bg-blue-900 text-blue-400";

    const codeElementsOpacity = theme === "light" ? "opacity-20" : "opacity-30";


    return (
        <section id="contacto" className={`py-20 transition-colors duration-300 ${bgMain}`}>
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
                <div className={`absolute inset-0 transition-colors duration-300 ${theme === "light"
                    ? "bg-gradient-to-r from-blue-50/30 via-transparent to-purple-50/30"
                    : "bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"
                    }`} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${textMain}`}>Contacto</h2>
                    <p className={`text-lg max-w-3xl mx-auto ${textSecondary}`}>
                        ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. Contáctame y trabajemos juntos para hacer realidad tus ideas.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Información de contacto */}
                    <div className="space-y-6">
                        <h3 className={`text-xl font-semibold mb-6 ${textMain}`}>Información de contacto</h3>
                        {contactInfo.map((info, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconBg}`}>
                                        <info.icon className="h-6 w-6" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className={`text-sm font-medium mb-1 ${textMain}`}>{info.title}</h4>
                                    <a href={info.href} className={`hover:text-blue-600 dark:hover:text-blue-400 ${textSecondary}`}>
                                        {info.value}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Formulario */}
                    <div className="lg:col-span-2">
                        <div className={`rounded-lg shadow-lg p-8 border ${cardBg} ${cardBorder}`}>
                            <h3 className={`text-xl font-semibold mb-6 ${textMain}`}>Envíame un mensaje</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className={`block text-sm font-medium mb-2 ${textSecondary}`}>Nombre</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Tu nombre"
                                            className={`w-full px-3 py-2 rounded-lg ${inputBg} ${inputBorder} ${inputText} ${inputPlaceholder} focus:outline-none ${inputFocusRing}`}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className={`block text-sm font-medium mb-2 ${textSecondary}`}>Email</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="tu.email@ejemplo.com"
                                            className={`w-full px-3 py-2 rounded-lg ${inputBg} ${inputBorder} ${inputText} ${inputPlaceholder} focus:outline-none ${inputFocusRing}`}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${textSecondary}`}>Asunto</label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Asunto del mensaje"
                                        className={`w-full px-3 py-2 rounded-lg ${inputBg} ${inputBorder} ${inputText} ${inputPlaceholder} focus:outline-none ${inputFocusRing}`}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${textSecondary}`}>Mensaje</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Escribe tu mensaje aquí..."
                                        className={`w-full px-3 py-2 rounded-lg resize-none ${inputBg} ${inputBorder} ${inputText} ${inputPlaceholder} focus:outline-none ${inputFocusRing}`}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                                >
                                    <Send className="mr-2 h-4 w-4" />
                                    Enviar mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
