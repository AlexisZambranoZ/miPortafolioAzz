import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Información personal */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Ing. Alexis Zambrano</h3>
                        <p className="text-gray-400 dark:text-gray-500 mb-4 transition-colors duration-300">
                            Desarrollador en crecimiento con dos años de experiencia construyendo aplicaciones web con Angular y .NET Core. Apasionado por aprender, mejorar continuamente y crear soluciones que aporten valor.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Enlaces rápidos */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#inicio"
                                    className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300"
                                >
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#sobre-mi"
                                    className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300"
                                >
                                    Sobre mí
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#habilidades"
                                    className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300"
                                >
                                    Habilidades
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#proyectos"
                                    className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300"
                                >
                                    Proyectos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contacto"
                                    className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300"
                                >
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Servicios */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Servicios</h3>
                        <ul className="space-y-2 text-gray-400 dark:text-gray-500 transition-colors duration-300">
                            <li>Desarrollo web</li>
                            <li>Aplicaciones de escritorio</li>
                            <li>Consultoría técnica</li>
                            <li>Mantenimiento</li>
                            <li>Diseño UI/UX</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 dark:text-gray-500 text-sm transition-colors duration-300">
                            © {currentYear} Alexis Zambrano Zambrano. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
