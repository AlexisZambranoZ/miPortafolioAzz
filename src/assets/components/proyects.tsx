import { ExternalLink, Github, Code, Terminal, Braces, GitBranch } from "lucide-react";
import { useTheme } from "../../../context/use-theme";

import genNotas from "../img/Proyects/Gen_notas.png";
import tiendaActzgo from "../img/Proyects/Tienda_Atzgo.png";
import tiendaRegalos from "../img/Proyects/TiendaRegalos.png";

export function Projects() {
    const { theme } = useTheme();

    const projects = [
        {
            title: "Generador de Notas",
            description:
                "Aplicación web que permite generar notas de remisión de forma digital, eliminando la necesidad de hacerlo manualmente.",
            image: genNotas,
            technologies: ["React", "TypeScript", "Tailwind"],
            liveUrl: "https://racing-admin-notas.netlify.app/",
            githubUrl: "https://github.com/AlexisZambranoZ/racing-adminNotas.git",
        },
        {
            title: "Tienda Acatzingo",
            description:
                "Sitio web de muestra desarrollado para la venta de productos en papelerías y tiendas locales.",
            image: tiendaActzgo,
            technologies: ["React", "TypeScript", "Node.js", "Express", "Tailwind"],
            // liveUrl: "", // No se coloca para deshabilitar el botón
            githubUrl: "https://github.com/AlexisZambranoZ/Tienda-Modelo",
        },
        {
            title: "Tienda De Regalos",
            description:
                "Applicacion sencilla para el manejo y control de inventario de una tienda de regalos local",
            image: tiendaRegalos,
            technologies: ["C#", ".NET"],
            liveUrl: "", // No se coloca para deshabilitar el botón
            githubUrl: "https://github.com/AlexisZambranoZ/Regaos_inventario",
        }
    ];

    const bgMain = theme === "light"
        ? "bg-gradient-to-r from-white via-blue-100 to-blue-200 relative overflow-hidden"
        : "bg-gradient-to-r from-gray-800 via-gray-900 to-black relative overflow-hidden";

    const textMain = theme === "light" ? "text-gray-900" : "text-white";
    const textSecondary = theme === "light" ? "text-gray-600" : "text-gray-300";
    const btnPrimaryBg = theme === "light" ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600";
    const btnPrimaryText = "text-white";
    const btnSecondaryText = theme === "light" ? "text-gray-900" : "text-white";
    const codeElementsOpacity = theme === "light" ? "opacity-20" : "opacity-30";
    const codeSymbolsOpacity = theme === "light" ? "opacity-15" : "opacity-25";

    return (
        <section id="proyectos" className={`relative py-20 ${bgMain}`}>
            {/* Fondo decorativo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-20 left-10 ${codeElementsOpacity} ${theme === "light" ? "text-blue-600" : "text-blue-400"} animate-pulse`}>
                    <Code size={35} />
                </div>
                <div className={`absolute top-40 right-20 ${codeElementsOpacity} ${theme === "light" ? "text-green-600" : "text-green-400"} animate-bounce`}>
                    <Terminal size={30} />
                </div>
                <div className={`absolute bottom-40 left-20 ${codeElementsOpacity} ${theme === "light" ? "text-purple-600" : "text-purple-400"} animate-pulse`}>
                    <Braces size={40} />
                </div>
                <div className={`absolute bottom-20 right-40 ${codeElementsOpacity} ${theme === "light" ? "text-cyan-600" : "text-cyan-400"} animate-bounce`}>
                    <GitBranch size={25} />
                </div>
                <div className={`absolute top-60 left-1/4 ${codeSymbolsOpacity} ${theme === "light" ? "text-indigo-600" : "text-yellow-400"} font-mono text-5xl animate-pulse`}>
                    {"{}"}
                </div>
                <div className={`absolute top-32 right-1/3 ${codeSymbolsOpacity} ${theme === "light" ? "text-red-600" : "text-red-400"} font-mono text-3xl animate-bounce`}>
                    {"</>"}
                </div>
                <div className={`absolute bottom-60 right-10 ${codeSymbolsOpacity} ${theme === "light" ? "text-blue-600" : "text-indigo-400"} font-mono text-4xl animate-pulse`}>
                    {"()"}
                </div>
                <div className={`absolute inset-0 ${theme === "light" ? "bg-gradient-to-r from-blue-50/30 via-transparent to-purple-50/30" : "bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"}`} />
            </div>

            {/* Contenido */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className={`text-3xl sm:text-4xl font-bold mb-12 ${textMain}`}>
                    Proyectos
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, idx) => (
                        <article
                            key={idx}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 transition-shadow duration-300 hover:shadow-xl overflow-hidden"
                        >
                            <div className="relative overflow-hidden group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                            </div>
                            <div className="p-6 text-left">
                                <h3 className={`text-xl font-semibold mb-2 ${textMain}`}>
                                    {project.title}
                                </h3>
                                <p className={`mb-4 text-sm ${textSecondary}`}>
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
                                    {project.liveUrl ? (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${btnPrimaryBg} ${btnPrimaryText} shadow-lg hover:shadow-xl transform hover:scale-105`}
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Ver Demo
                                        </a>
                                    ) : (
                                        <button
                                            disabled
                                            className="inline-flex items-center px-4 py-2 rounded-lg font-medium bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 cursor-not-allowed"
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Demo no disponible
                                        </button>
                                    )}

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
