"use client"

import { Github, Linkedin, Mail, Download, Code, Terminal, Braces, GitBranch } from "lucide-react"
import { useTheme } from "../../../context/use-theme"
import fotoPerfil from "../img/Foto_Ing.Alexis.jpeg"
import cvAzz from "../doc/CV_AlexisZambranoZambrano.pdf"

export function Hero() {
    const { theme } = useTheme()

    const bgMain =
        theme === "light"
            ? "bg-gradient-to-r from-white via-blue-100 to-blue-200 relative overflow-hidden"
            : "bg-gradient-to-r from-gray-800 via-gray-900 to-black relative overflow-hidden"


    const textMain = theme === "light" ? "text-gray-900" : "text-white"

    const textSecondary = theme === "light" ? "text-gray-600" : "text-gray-300"

    const btnPrimaryBg = theme === "light" ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"

    const btnPrimaryText = "text-white"

    const btnSecondaryBorder =
        theme === "light" ? "border-gray-300 hover:bg-gray-50" : "border-gray-600 hover:bg-gray-800"

    const btnSecondaryText = theme === "light" ? "text-gray-900" : "text-white"

    // Clases para elementos de programación según tema
    const codeElementsOpacity = theme === "light" ? "opacity-20" : "opacity-30"
    const codeSymbolsOpacity = theme === "light" ? "opacity-15" : "opacity-25"

    return (
        <section id="inicio" className={`pt-16 min-h-screen flex items-center transition-colors duration-300 ${bgMain}`}>
            {/* Elementos de programación flotantes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Iconos flotantes de programación - menos cantidad */}
                <div
                    className={`absolute top-20 left-10 transition-colors duration-300 ${theme === "light" ? "text-blue-600" : "text-blue-400"} ${codeElementsOpacity} animate-pulse`}
                >
                    <Code size={35} />
                </div>
                <div
                    className={`absolute top-40 right-20 transition-colors duration-300 ${theme === "light" ? "text-green-600" : "text-green-400"} ${codeElementsOpacity} animate-bounce`}
                >
                    <Terminal size={30} />
                </div>
                <div
                    className={`absolute bottom-40 left-20 transition-colors duration-300 ${theme === "light" ? "text-purple-600" : "text-purple-400"} ${codeElementsOpacity} animate-pulse`}
                >
                    <Braces size={40} />
                </div>
                <div
                    className={`absolute bottom-20 right-40 transition-colors duration-300 ${theme === "light" ? "text-cyan-600" : "text-cyan-400"} ${codeElementsOpacity} animate-bounce`}
                >
                    <GitBranch size={25} />
                </div>

                {/* Símbolos de código más visibles pero menos cantidad */}
                <div
                    className={`absolute top-60 left-1/4 transition-colors duration-300 ${theme === "light" ? "text-indigo-600" : "text-yellow-400"} ${codeSymbolsOpacity} font-mono text-5xl animate-pulse`}
                >
                    {"{}"}
                </div>
                <div
                    className={`absolute top-32 right-1/3 transition-colors duration-300 ${theme === "light" ? "text-red-600" : "text-red-400"} ${codeSymbolsOpacity} font-mono text-3xl animate-bounce`}
                >
                    {"</>"}
                </div>
                <div
                    className={`absolute bottom-60 right-10 transition-colors duration-300 ${theme === "light" ? "text-blue-600" : "text-indigo-400"} ${codeSymbolsOpacity} font-mono text-4xl animate-pulse`}
                >
                    {"()"}
                </div>

                {/* Gradiente sutil superpuesto */}
                <div
                    className={`absolute inset-0 transition-colors duration-300 ${theme === "light"
                        ? "bg-gradient-to-r from-blue-50/30 via-transparent to-purple-50/30"
                        : "bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"
                        }`}
                ></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1
                                className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight transition-colors duration-300 ${textMain}`}
                            >
                                Alexis<span className="text-blue-600 dark:text-blue-400"> Zambrano </span>
                            </h1>
                            <h2 className={`text-xl sm:text-2xl font-medium transition-colors duration-300 ${textSecondary}`}>
                                Desarrollador Full Stack
                            </h2>
                            <p className={`text-lg max-w-2xl transition-colors duration-300 ${textSecondary}`}>
                                Desarrollador en crecimiento con dos años de experiencia construyendo aplicaciones web con
                                <span className={`font-semibold ${theme === "light" ? "text-red-600" : "text-red-400"}`}> Angular</span>{" "}
                                y
                                <span className={`font-semibold ${theme === "light" ? "text-purple-600" : "text-purple-400"}`}>
                                    {" "}
                                    .NET Core
                                </span>
                                . Apasionado por aprender, mejorar continuamente y crear soluciones que aporten valor.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 items-center">
                            <a
                                href="mailto:zambra873@gmail.com"
                                className={`cursor-pointer inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-lg hover:shadow-xl transform hover:scale-105 ${btnPrimaryBg} ${btnPrimaryText}`}
                            >
                                <Mail className="mr-2 h-4 w-4" />
                                Contáctame
                            </a>
                            <a href={cvAzz} download>
                                <button
                                    className={`cursor-pointer inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 border hover:scale-105 ${btnSecondaryBorder} ${btnSecondaryText}`}
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Descargar CV
                                </button>
                            </a>
                        </div>
                        <div className="flex space-x-6">
                            <a
                                href="https://github.com/AlexisZambranoZ"
                                className={`transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 ${textSecondary}`}
                            >
                                <Github className="h-6 w-6" />
                            </a>
                            <a
                                href="www.linkedin.com/in/alexis-zambrano-zambrano-21816a257"
                                className={`transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 ${textSecondary}`}
                            >
                                <Linkedin className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative" style={{ width: "25rem", height: "25rem" }}>
                            {/* Anillo animado sutil */}
                            <div
                                className={`absolute -inset-1 rounded-full transition-colors duration-300 animate-spin-slow ${theme === "light"
                                    ? "bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 opacity-60"
                                    : "bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-600 opacity-80"
                                    }`}
                            >
                                <div
                                    className={`w-full h-full rounded-full transition-colors duration-300 ${theme === "light" ? "bg-gray-50" : "bg-gray-800"}`}
                                ></div>
                            </div>

                            {/* Fondo degradado circular */}
                            <div
                                className={`w-full h-full rounded-full transition-colors duration-300 shadow-2xl ${theme === "light"
                                    ? "bg-gradient-to-br from-blue-400 to-purple-600"
                                    : "bg-gradient-to-br from-blue-500 to-purple-700"
                                    }`}
                            ></div>

                            {/* Imagen de perfil superpuesta */}
                            <img
                                src={fotoPerfil || "/placeholder.svg"}
                                alt="Foto de perfil"
                                className={`absolute inset-0 w-full h-full object-cover object-[center_15%] rounded-full border-4 shadow-xl transition-colors duration-300 ${theme === "light" ? "border-white" : "border-gray-800"
                                    }`}
                            />

                            {/* Iconos flotantes alrededor de la imagen - menos cantidad */}
                            <div
                                className={`absolute -top-3 -right-3 p-2 rounded-full shadow-lg animate-bounce transition-colors duration-300 ${theme === "light" ? "bg-blue-600" : "bg-blue-500"}`}
                            >
                                <Code className="h-5 w-5 text-white" />
                            </div>
                            <div
                                className={`absolute -bottom-3 -left-3 p-2 rounded-full shadow-lg animate-pulse transition-colors duration-300 ${theme === "light" ? "bg-purple-600" : "bg-purple-500"}`}
                            >
                                <Terminal className="h-5 w-5 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
