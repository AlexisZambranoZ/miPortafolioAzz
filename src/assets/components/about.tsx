import { Briefcase, Code, GraduationCap, Palette, Rocket, Zap } from "lucide-react"
import { useTheme } from "../../../context/use-theme"

export function About() {
    const { theme } = useTheme()

    interface TimelineEvent {
        year: string
        title: string
        description: string
        icon: React.ReactNode
        type: "education" | "work" | "achievement" | "project"
    }

    const timelineEvents: TimelineEvent[] = [
        {
            year: "2019",
            title: "Inicio Universidad",
            description: "Comencé la carrera de Ingeniería en Redes Inteligentes y Ciberseguridad.",
            icon: <GraduationCap className="w-4 h-4" />,
            type: "education",
        },
        {
            year: "2021",
            title: "Primer interés en Programación",
            description: "Empecé a aprender JavaScript y CSS de forma autodidacta, impulsado por mi interés en la programación.",
            icon: <Code className="w-4 h-4" />,
            type: "education",
        },
        {
            year: "2023",
            title: "Prácticas Profesionales en RADEXP",
            description: "Realicé prácticas profesionales trabajando con Angular y Node.js.",
            icon: <Briefcase className="w-4 h-4" />,
            type: "work",
        },
        {
            year: "2023",
            title: "Graduación y Titulación",
            description: "Me gradué y obtuve mi título de Ingeniero en Redes Inteligentes y Ciberseguridad.",
            icon: <GraduationCap className="w-4 h-4" />,
            type: "education",
        },
        {
            year: "2023",
            title: "Primer Trabajo Profesional",
            description: "Comencé a trabajar en Elipgo Technology como desarrollador Full Stack con .NET y Angular.",
            icon: <Briefcase className="w-4 h-4" />,
            type: "work",
        },
        {
            year: "2025",
            title: "Aprendizaje de React",
            description: "Amplié mis habilidades aprendiendo React para crear aplicaciones web modernas.",
            icon: <Code className="w-4 h-4" />,
            type: "education",
        },
        {
            year: "Próximo",
            title: "Mi próxima empresa",
            description: "Ayúdame a mejorar mi experiencia y a hacer tus proyectos realidad.",
            icon: <Rocket className="w-4 h-4" />,
            type: "achievement",
        }

    ];


    const getEventColors = (type: TimelineEvent["type"], isDark = false) => {
        const colors = {
            education: isDark ? "bg-blue-900/20 border-blue-400 text-blue-300" : "bg-blue-50 border-blue-300 text-blue-700",
            work: isDark ? "bg-green-900/20 border-green-400 text-green-300" : "bg-green-50 border-green-300 text-green-700",
            achievement: isDark
                ? "bg-yellow-900/20 border-yellow-400 text-yellow-300"
                : "bg-yellow-50 border-yellow-300 text-yellow-700",
            project: isDark
                ? "bg-purple-900/20 border-purple-400 text-purple-300"
                : "bg-purple-50 border-purple-300 text-purple-700",
        }
        return colors[type]
    }


    const features = [
        {
            icon: Code,
            title: "Desarrollo Full Stack",
            description: "Experiencia en frontend y backend con tecnologías modernas",
        },
        {
            icon: Palette,
            title: "Diseño Web",
            description: "Convicción por transformar ideas en interfaces intuitivas y visualmente atractivas.",
        },
        {
            icon: Zap,
            title: "SCRUM",
            description: "Implementación de metodologías ágiles para mejorar la colaboración y la eficiencia en proyectos",
        }
    ]


    const bgMain =
        theme === "light"
            ? "bg-gradient-to-r from-white via-blue-100 to-blue-200 relative overflow-hidden"
            : "bg-gradient-to-r from-gray-800 via-gray-900 to-black relative overflow-hidden"


    const textMain = theme === "light" ? "text-gray-900" : "text-white"
    const textSecondary = theme === "light" ? "text-gray-600" : "text-gray-300"
    const cardBg = theme === "light" ? "bg-blue-300" : "bg-gray-600"
    const cardBorder = theme === "light" ? "border-gray-200" : "border-gray-700"
    const iconBg = theme === "light" ? "bg-blue-100 text-blue-600" : "bg-blue-900 text-blue-400"
    const sectionBg = theme === "light" ? "bg-blue-100" : "bg-gray-800"

    const codeElementsOpacity = theme === "light" ? "opacity-20" : "opacity-30"
    const codeSymbolsOpacity = theme === "light" ? "opacity-15" : "opacity-25"


    return (
        <section id="sobre-mi" className={`relative transition-colors duration-300 py-20 ${bgMain}`}>
            {/* Elementos de fondo decorativos flotantes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-20 left-10 ${codeElementsOpacity} animate-pulse ${theme === "light" ? "text-blue-600" : "text-blue-400"}`}>
                    <Code size={35} />
                </div>
                <div className={`absolute top-40 right-16 ${codeElementsOpacity} animate-bounce ${theme === "light" ? "text-purple-600" : "text-purple-400"}`}>
                    <Zap size={30} />
                </div>
                <div className={`absolute top-2/3 left-1/3 text-4xl font-mono ${codeSymbolsOpacity} animate-pulse ${theme === "light" ? "text-green-600" : "text-yellow-400"}`}>
                    {"</>"}
                </div>
                <div className={`absolute bottom-16 right-1/4 text-5xl font-mono ${codeSymbolsOpacity} animate-bounce ${theme === "light" ? "text-indigo-600" : "text-indigo-400"}`}>
                    {"{}"}
                </div>

                {/* Gradiente decorativo adicional */}
                <div
                    className={`absolute inset-0 ${theme === "light"
                        ? "bg-gradient-to-r from-blue-50/30 via-transparent to-purple-50/30"
                        : "bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"
                        }`}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`${textMain} text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300`}>
                        Sobre mí
                    </h2>
                    <p className={`${textSecondary} text-lg max-w-3xl mx-auto transition-colors duration-300`}>
                        Desarrollador principiante con pasión por transformar tus ideas en soluciones concretas.
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
                            <h3 className={`${textMain} text-xl font-semibold mb-4 transition-colors duration-300`}>
                                {feature.title}
                            </h3>
                            <p className={`${textSecondary} transition-colors duration-300`}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className={`${sectionBg} rounded-2xl p-8 md:p-12 transition-colors duration-300`}>
                    <div className={`${sectionBg} rounded-2xl p-8 md:p-12 transition-colors duration-300`}>
                        <div className="max-w-4xl mx-auto">
                            {/* Título centrado */}
                            <div className="text-center mb-12">
                                <h3 className={`${textMain} text-3xl font-bold mb-6 transition-colors duration-300`}>Mi historia</h3>
                                <div className={`${textSecondary} max-w-2xl mx-auto space-y-4 transition-colors duration-300`}>
                                    <p>
                                        Aquí te comparto una breve reseña de mi recorrido en el fascinante mundo de la programación.
                                    </p>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="relative">
                                {/* Línea vertical central */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

                                {/* Eventos */}
                                <div className="space-y-12">
                                    {timelineEvents.map((event, index) => {
                                        const isLeft = index % 2 === 0;

                                        return (
                                            <div key={index} className="relative flex items-center">
                                                {/* Contenido del evento - Lado izquierdo */}
                                                {isLeft && (
                                                    <div className="w-1/2 pr-8">
                                                        <div className="text-right">
                                                            <div
                                                                className={`
                      ${cardBg} rounded-lg p-6 shadow-md border ${cardBorder}
                      transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ml-auto max-w-sm
                    `}
                                                            >
                                                                <div className="flex items-center justify-end mb-3">
                                                                    <span
                                                                        className={`
                          text-sm font-semibold px-3 py-1 rounded-full
                          ${getEventColors(event.type)}
                        `}
                                                                    >
                                                                        {event.year}
                                                                    </span>
                                                                </div>
                                                                <h4 className={`${textMain} font-semibold mb-3 transition-colors duration-300`}>
                                                                    {event.title}
                                                                </h4>
                                                                <p className={`${textSecondary} text-sm transition-colors duration-300`}>
                                                                    {event.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Punto central del timeline */}
                                                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                                    <div
                                                        className={`
                  flex items-center justify-center w-12 h-12 rounded-full border-4
                  ${getEventColors(event.type)}
                  shadow-lg transition-all duration-300 hover:scale-110 bg-white dark:bg-gray-800
                `}
                                                    >
                                                        {event.icon}
                                                    </div>
                                                </div>

                                                {/* Contenido del evento - Lado derecho */}
                                                {!isLeft && (
                                                    <div className="w-1/2 pl-8 ml-auto">
                                                        <div
                                                            className={`
                    ${cardBg} rounded-lg p-6 shadow-md border ${cardBorder}
                    transition-all duration-300 hover:shadow-lg hover:-translate-y-1 max-w-sm
                  `}
                                                        >
                                                            <div className="flex items-center justify-start mb-3">
                                                                <span
                                                                    className={`
                        text-sm font-semibold px-3 py-1 rounded-full
                        ${getEventColors(event.type)}
                      `}
                                                                >
                                                                    {event.year}
                                                                </span>
                                                            </div>
                                                            <h4 className={`${textMain} font-semibold mb-3 transition-colors duration-300`}>
                                                                {event.title}
                                                            </h4>
                                                            <p className={`${textSecondary} text-sm transition-colors duration-300`}>{event.description}</p>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Espaciador para eventos del lado izquierdo */}
                                                {isLeft && <div className="w-1/2"></div>}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
