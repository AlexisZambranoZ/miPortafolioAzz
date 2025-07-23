import { Github, Linkedin, Mail, Download } from "lucide-react"
import { useTheme } from "../../../context/use-theme"

export function Hero() {
    const { theme } = useTheme()

    // Clases dinámicas según tema (como en About)
    const bgMain = theme === "light"
        ? "bg-gradient-to-br from-gray-50 to-gray-100"
        : "bg-gradient-to-br from-gray-900 to-gray-800"

    const textMain = theme === "light"
        ? "text-gray-900"
        : "text-white"

    const textSecondary = theme === "light"
        ? "text-gray-600"
        : "text-gray-300"

    const btnPrimaryBg = theme === "light"
        ? "bg-blue-600 hover:bg-blue-700"
        : "bg-blue-500 hover:bg-blue-600"

    const btnPrimaryText = "text-white"

    const btnSecondaryBorder = theme === "light"
        ? "border-gray-300 hover:bg-gray-50"
        : "border-gray-600 hover:bg-gray-800"

    const btnSecondaryText = theme === "light"
        ? "text-gray-900"
        : "text-white"


    return (
        <section
            id="inicio"
            className={`pt-16 min-h-screen flex items-center transition-colors duration-300 ${bgMain}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight transition-colors duration-300 ${textMain}`}>
                                Alexis<span className="text-blue-600 dark:text-blue-400"> Zambrano </span>
                            </h1>
                            <h2 className={`text-xl sm:text-2xl font-medium transition-colors duration-300 ${textSecondary}`}>
                                Desarrollador Full Stack
                            </h2>
                            <p className={`text-lg max-w-2xl transition-colors duration-300 ${textSecondary}`}>
                                Apasionado por crear experiencias digitales excepcionales. Especializado en React, Node.js y tecnologías modernas de desarrollo web.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 items-center">
                            <button
                                className={`cursor-pointer inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${btnPrimaryBg} ${btnPrimaryText}`}
                            >
                                <Mail className="mr-2 h-4 w-4" />
                                Contáctame
                            </button>
                            <button
                                className={`cursor-pointer inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 border ${btnSecondaryBorder} ${btnSecondaryText}`}
                            >
                                <Download className="mr-2 h-4 w-4" />
                                Descargar CV
                            </button>
                        </div>

                        <div className="flex space-x-6">
                            <a
                                href="#"
                                className={`transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${textSecondary}`}
                            >
                                <Github className="h-6 w-6" />
                            </a>
                            <a
                                href="#"
                                className={`transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${textSecondary}`}
                            >
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a
                                href="#"
                                className={`transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${textSecondary}`}
                            >
                                <Mail className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div
                                className={`w-80 h-80 rounded-full transition-colors duration-300 ${theme === "light"
                                    ? "bg-gradient-to-br from-blue-400 to-purple-600"
                                    : "bg-gradient-to-br from-blue-500 to-purple-700"
                                    }`}
                            ></div>
                            <img
                                src="/placeholder.svg?height=320&width=320"
                                alt="Foto de perfil"
                                className={`absolute inset-0 w-80 h-80 object-cover rounded-full border-4 shadow-xl transition-colors duration-300 ${theme === "light"
                                    ? "border-white"
                                    : "border-gray-800"
                                    }`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
