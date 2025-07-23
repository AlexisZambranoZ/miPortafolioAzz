import { ExternalLink, Github } from "lucide-react"
import { useTheme } from "../../../context/use-theme"

export function Projects() {
    const { theme } = useTheme()

    const projects = [
        {
            title: "E-commerce Platform",
            description:
                "Plataforma de comercio electrónico completa con carrito de compras, pagos y panel de administración.",
            image: "/placeholder.svg?height=300&width=400",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Task Management App",
            description: "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real.",
            image: "/placeholder.svg?height=300&width=400",
            technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Weather Dashboard",
            description: "Dashboard del clima con pronósticos detallados y visualizaciones interactivas.",
            image: "/placeholder.svg?height=300&width=400",
            technologies: ["React", "Chart.js", "Weather API", "Tailwind"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Social Media App",
            description: "Red social con funciones de posts, comentarios, likes y mensajería en tiempo real.",
            image: "/placeholder.svg?height=300&width=400",
            technologies: ["React Native", "Firebase", "Redux", "Socket.io"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Portfolio Website",
            description: "Sitio web de portafolio personal con diseño responsivo y animaciones suaves.",
            image: "/placeholder.svg?height=300&width=400",
            technologies: ["Next.js", "Framer Motion", "Tailwind", "MDX"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Learning Platform",
            description: "Plataforma de aprendizaje en línea con cursos, quizzes y seguimiento de progreso.",
            image: "/placeholder.svg?height=300&width=400",
            technologies: ["Vue.js", "Express", "MySQL", "JWT"],
            liveUrl: "#",
            githubUrl: "#",
        },
    ]

    // Clases dinámicas para tema
    const bgMain = theme === "light" ? "bg-white" : "bg-gray-900"
    const cardBg = theme === "light" ? "bg-white" : "bg-gray-800"
    const cardBorder = theme === "light" ? "border-gray-200" : "border-gray-700"
    const cardShadowLight = "hover:shadow-xl"
    const cardShadowDark = "dark:hover:shadow-2xl"
    const textMain = theme === "light" ? "text-gray-900" : "text-white"
    const textSecondary = theme === "light" ? "text-gray-600" : "text-gray-300"
    const badgeBg = theme === "light" ? "bg-blue-100 text-blue-800" : "bg-blue-900 text-blue-200"
    const linkText = theme === "light" ? "text-gray-900" : "text-white"

    return (
        <section id="proyectos" className={`py-20 transition-colors duration-300 ${bgMain}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${textMain}`}>
                        Proyectos
                    </h2>
                    <p className={`text-lg max-w-3xl mx-auto transition-colors duration-300 ${textSecondary}`}>
                        Una selección de proyectos en los que he trabajado, mostrando diferentes tecnologías y enfoques de
                        desarrollo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`${cardBg} rounded-lg shadow-lg ${cardShadowLight} ${cardShadowDark} transition-all duration-300 overflow-hidden border ${cardBorder} group`}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                            </div>

                            <div className="p-6">
                                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${textMain}`}>
                                    {project.title}
                                </h3>

                                <p className={`text-sm mb-4 transition-colors duration-300 ${textSecondary}`}>
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className={`px-3 py-1 rounded-full text-xs transition-colors duration-300 ${badgeBg}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex space-x-4">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center px-4 py-2 border text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 ${linkText} border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700`}
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Ver Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center px-4 py-2 border text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 ${linkText} border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700`}
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        Código
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
