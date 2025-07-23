"use client"

import { Code, Palette, Zap } from "lucide-react"
import { useTheme } from "../../../context/use-theme"

export function About() {
    const { theme } = useTheme()

    const features = [
        {
            icon: Code,
            title: "Desarrollo Full Stack",
            description: "Experiencia en frontend y backend con tecnologías modernas",
        },
        {
            icon: Palette,
            title: "Diseño UI/UX",
            description: "Creación de interfaces intuitivas y atractivas",
        },
        {
            icon: Zap,
            title: "Optimización",
            description: "Enfoque en rendimiento y mejores prácticas",
        },
    ]

    // Helper para clases dinámicas según tema
    const bgMain = theme === "light" ? "bg-white" : "bg-gray-900"
    const textMain = theme === "light" ? "text-gray-900" : "text-white"
    const textSecondary = theme === "light" ? "text-gray-600" : "text-gray-300"
    const cardBg = theme === "light" ? "bg-white" : "bg-gray-800"
    const cardBorder = theme === "light" ? "border-gray-200" : "border-gray-700"
    const iconBg = theme === "light" ? "bg-blue-100 text-blue-600" : "bg-blue-900 text-blue-400"
    const sectionBg = theme === "light" ? "bg-gray-50" : "bg-gray-800"

    return (
        <section
            id="sobre-mi"
            className={`${bgMain} transition-colors duration-300 py-20`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2
                        className={`${textMain} text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300`}
                    >
                        Sobre mí
                    </h2>
                    <p
                        className={`${textSecondary} text-lg max-w-3xl mx-auto transition-colors duration-300`}
                    >
                        Soy un desarrollador apasionado con más de X años de experiencia creando soluciones web innovadoras. Me
                        especializo en tecnologías modernas y siempre busco aprender algo nuevo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`text-center p-8 ${cardBg} rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border ${cardBorder}`}
                        >
                            <div
                                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-colors duration-300 ${iconBg}`}
                            >
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <h3
                                className={`${textMain} text-xl font-semibold mb-4 transition-colors duration-300`}
                            >
                                {feature.title}
                            </h3>
                            <p className={`${textSecondary} transition-colors duration-300`}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className={`${sectionBg} rounded-2xl p-8 md:p-12 transition-colors duration-300`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3
                                className={`${textMain} text-2xl font-bold mb-6 transition-colors duration-300`}
                            >
                                Mi historia
                            </h3>
                            <div className={`${textSecondary} space-y-4 transition-colors duration-300`}>
                                <p>
                                    Comencé mi viaje en el desarrollo web hace X años, motivado por la pasión de crear soluciones que
                                    impacten positivamente en la vida de las personas.
                                </p>
                                <p>
                                    A lo largo de mi carrera, he trabajado en diversos proyectos, desde aplicaciones web hasta sistemas
                                    complejos, siempre enfocándome en la calidad y la experiencia del usuario.
                                </p>
                                <p>
                                    Cuando no estoy programando, disfruto aprender nuevas tecnologías, contribuir a proyectos open source
                                    y compartir conocimiento con la comunidad de desarrolladores.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="/placeholder.svg?height=400&width=400"
                                alt="Desarrollador trabajando"
                                className="rounded-lg shadow-lg max-w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
