import { ExternalLink, Github, Code, Terminal, Braces, GitBranch } from "lucide-react";
import { useTheme } from "../../../context/use-theme";

import genNotas from "../img/Proyects/Gen_notas.png";

export function Projects() {
    const { theme } = useTheme();

    const projects = [
        {
            title: "Generador de Notas",
            description:
                "Aplicación web para generar notas de remisión de forma digital, eliminando la necesidad de escribirlas a mano.",
            image: genNotas,
            technologies: ["React", "TypeScript", "Tailwind"],
            liveUrl: "https://racing-admin-notas.netlify.app/",
            githubUrl: "https://github.com/AlexisZambranoZ/racing-adminNotas.git",
        },
        {
            title: "Task Management App",
            description:
                "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real.",
            image: "/placeholder.svg?height=300&width=400",
            technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Weather Dashboard",
            description:
                "Dashboard del clima con pronósticos detallados y visualizaciones interactivas.",
            image: "/placeholder.svg?height=300&width=400",
            technologies: ["React", "Chart.js", "Weather API", "Tailwind"],
            liveUrl: "#",
            githubUrl: "#",
        },
        // ... más proyectos si quieres
    ];

    const bgMain =
        theme === "light"
            ? "bg-gradient-to-r from-white via-blue-100 to-blue-200 relative overflow-hidden"
            : "bg-gradient-to-r from-gray-800 via-gray-900 to-black relative overflow-hidden"


    const textMain = theme === "light" ? "text-gray-900" : "text-white";

    const textSecondary = theme === "light" ? "text-gray-600" : "text-gray-300";

    const btnPrimaryBg =
        theme === "light" ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600";

    const btnPrimaryText = "text-white";

    const btnSecondaryText = theme === "light" ? "text-gray-900" : "text-white";

    const codeElementsOpacity = theme === "light" ? "opacity-20" : "opacity-30";
    const codeSymbolsOpacity = theme === "light" ? "opacity-15" : "opacity-25";

    return (
        <section id="proyectos" className={`relative py-20 ${bgMain}`}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className={`absolute top-20 left-10 transition-colors duration-300 ${theme === "light" ? "text-blue-600" : "text-blue-400"
                        } ${codeElementsOpacity} animate-pulse`}
                >
                    <Code size={35} />
                </div>
                <div
                    className={`absolute top-40 right-20 transition-colors duration-300 ${theme === "light" ? "text-green-600" : "text-green-400"
                        } ${codeElementsOpacity} animate-bounce`}
                >
                    <Terminal size={30} />
                </div>
                <div
                    className={`absolute bottom-40 left-20 transition-colors duration-300 ${theme === "light" ? "text-purple-600" : "text-purple-400"
                        } ${codeElementsOpacity} animate-pulse`}
                >
                    <Braces size={40} />
                </div>
                <div
                    className={`absolute bottom-20 right-40 transition-colors duration-300 ${theme === "light" ? "text-cyan-600" : "text-cyan-400"
                        } ${codeElementsOpacity} animate-bounce`}
                >
                    <GitBranch size={25} />
                </div>

                <div
                    className={`absolute top-60 left-1/4 transition-colors duration-300 ${theme === "light" ? "text-indigo-600" : "text-yellow-400"
                        } ${codeSymbolsOpacity} font-mono text-5xl animate-pulse`}
                >
                    {"{}"}
                </div>
                <div
                    className={`absolute top-32 right-1/3 transition-colors duration-300 ${theme === "light" ? "text-red-600" : "text-red-400"
                        } ${codeSymbolsOpacity} font-mono text-3xl animate-bounce`}
                >
                    {"</>"}
                </div>
                <div
                    className={`absolute bottom-60 right-10 transition-colors duration-300 ${theme === "light" ? "text-blue-600" : "text-indigo-400"
                        } ${codeSymbolsOpacity} font-mono text-4xl animate-pulse`}
                >
                    {"()"}
                </div>

                {/* Gradiente sutil superpuesto */}
                <div
                    className={`absolute inset-0 transition-colors duration-300 ${theme === "light"
                        ? "bg-gradient-to-r from-blue-50/30 via-transparent to-purple-50/30"
                        : "bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"
                        }`}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className={`text-3xl sm:text-4xl font-bold mb-12 transition-colors duration-300 ${textMain}`}>
                    Proyectos
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, idx) => (
                        <article
                            key={idx}
                            className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 transition-shadow duration-300 hover:shadow-xl overflow-hidden`}
                        >
                            <div className="relative overflow-hidden group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                            </div>
                            <div className="p-6 text-left">
                                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${textMain}`}>
                                    {project.title}
                                </h3>
                                <p className={`mb-4 text-sm transition-colors duration-300 ${textSecondary}`}>
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${theme === "light"
                                                ? "bg-blue-100 text-blue-800"
                                                : "bg-blue-900 text-blue-200"
                                                }`}
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
                                        className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${btnPrimaryBg} ${btnPrimaryText} shadow-lg hover:shadow-xl transform hover:scale-105`}
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Ver Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center px-4 py-2 rounded-lg font-medium border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 border-gray-300 dark:border-gray-600 ${btnSecondaryText} hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105`}
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        Código
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
