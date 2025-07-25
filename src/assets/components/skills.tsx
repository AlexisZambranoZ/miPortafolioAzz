"use client"
import { Code, Terminal, Braces, GitBranch } from "lucide-react"
import { useTheme } from "../../../context/use-theme"

import angular from "../img/angular.png";
import js from "../img/js.png";
import react from "../img/react.png";
import ts from "../img/ts.png";
import vue from "../img/vue.png";
import boots from "../img/bstp.png";
import taildwind from "../img/taildwind.png";
import rxjs from "../img/rxjs.png";
import net from "../img/net_core.png";
import node from "../img/node.png";
import mysql from "../img/mysql.png";
import csharp from "../img/Csharp_Logo.png";
import figma from "../img/Figma.png"
import gitHub from "../img/GitHub.png"
import nest from "../img/Nest.js.png"
import nextJs from "../img/Next.js.png"
import astro from "../img/Astro.png"
import gitLab from "../img/GitLab.png"
import postCSS from "../img/PostCSS.png"
import swagger from "../img/Swagger.png"
import vscode from "../img/Visual Studio Code.png"
import visualStudio from "../img/Visual Studio.png"
import dbeaver from "../img/DBeaver.png"
import vuetify from "../img/Veutify.png"
import vite from "../img/Vite.js.png"
import slack from "../img/Slack.png"
import jira from "../img/Jira.png"
import postman from "../img/postman.png"
import mongo from "../img/MongoDB.png"


export function Skills() {
    const { theme } = useTheme()

    const frontendTechnologies = [
        { name: "Angular", icon: <img src={angular} alt="Angular" className="w-8 h-8" />, color: "text-red-600" },
        { name: "Bootstrap CSS", icon: <img src={boots} alt="Bootstrap CSS" className="w-8 h-8" />, color: "text-teal-500" },
        { name: "JavaScript", icon: <img src={js} alt="JavaScript" className="w-8 h-8" />, color: "text-yellow-500" },
        { name: "RxJS", icon: <img src={rxjs} alt="RxJS" className="w-8 h-8" />, color: "text-purple-600" },
        { name: "React", icon: <img src={react} alt="React" className="w-8 h-8" />, color: "text-cyan-500" },
        { name: "Tailwind CSS", icon: <img src={taildwind} alt="Tailwind CSS" className="w-8 h-8" />, color: "text-teal-500" },
        { name: "TypeScript", icon: <img src={ts} alt="TypeScript" className="w-8 h-8" />, color: "text-blue-600" },
        { name: "Vue.js", icon: <img src={vue} alt="Vue.js" className="w-8 h-8" />, color: "text-green-500" },
        { name: "Vuetify", icon: <img src={vuetify} alt="Vuetify" className="w-8 h-8" />, color: "text-blue-800" },
        { name: "Vite.js", icon: <img src={vite} alt="Vite.js" className="w-8 h-8" />, color: "text-purple-500" },
    ];

    const backendTechnologies = [
        { name: ".NET", icon: <img src={net} alt=".NET" className="w-8 h-8" />, color: "text-purple-700" },
        { name: "Express", icon: "⚡", color: "text-gray-600" },
        { name: "MySQL", icon: <img src={mysql} alt="MySQL" className="w-8 h-8" />, color: "text-orange-600" },
        { name: "Node.js", icon: <img src={node} alt="Node.js" className="w-8 h-8" />, color: "text-green-600" },
        { name: "C#", icon: <img src={csharp} alt="C#" className="w-8 h-8" />, color: "text-green-500" },
        { name: "Mongo DB", icon: <img src={mongo} alt="C#" className="w-8 h-8" />, color: "text-green-500" },
    ];

    const tools = [
        { name: "Figma", icon: <img src={figma} alt="Figma" className="w-8 h-8" />, color: "text-pink-500" },
        { name: "GitHub", icon: <img src={gitHub} alt="GitHub" className="w-8 h-8" />, color: "text-gray-800" },
        { name: "GitLab", icon: <img src={gitLab} alt="GitLab" className="w-8 h-8" />, color: "text-orange-600" },
        { name: "Nest.js", icon: <img src={nest} alt="Nest.js" className="w-8 h-8" />, color: "text-red-700" },
        { name: "Next.js", icon: <img src={nextJs} alt="Next.js" className="w-8 h-8" />, color: "text-black" },
        { name: "Astro", icon: <img src={astro} alt="Astro" className="w-8 h-8" />, color: "text-orange-400" },
        { name: "PostCSS", icon: <img src={postCSS} alt="PostCSS" className="w-8 h-8" />, color: "text-blue-500" },
        { name: "Swagger", icon: <img src={swagger} alt="Swagger" className="w-8 h-8" />, color: "text-green-500" },
        { name: "Visual Studio Code", icon: <img src={vscode} alt="VS Code" className="w-8 h-8" />, color: "text-blue-700" },
        { name: "Visual Studio", icon: <img src={visualStudio} alt="Visual Studio" className="w-8 h-8" />, color: "text-purple-700" },
        { name: "DBeaver", icon: <img src={dbeaver} alt="DBeaver" className="w-8 h-8" />, color: "text-blue-600" },
        { name: "Slack", icon: <img src={slack} alt="Slack" className="w-8 h-8" />, color: "text-pink-600" },
        { name: "Jira", icon: <img src={jira} alt="Jira" className="w-8 h-8" />, color: "text-blue-500" },
        { name: "Postman", icon: <img src={postman} alt="Postman" className="w-8 h-8" />, color: "text-orange-500" },
    ];




    const bgMain =
        theme === "light"
            ? "bg-gradient-to-r from-white via-blue-100 to-blue-200 relative overflow-hidden"
            : "bg-gradient-to-r from-gray-800 via-gray-900 to-black relative overflow-hidden"

    const textMain = theme === "light" ? "text-gray-900" : "text-white"
    const textSecondary = theme === "light" ? "text-gray-600" : "text-gray-300"
    const cardBg = theme === "light" ? "bg-white/80 backdrop-blur-sm" : "bg-gray-900/80 backdrop-blur-sm"
    const cardBorder = theme === "light" ? "border-gray-200" : "border-gray-700"
    const codeElementsOpacity = theme === "light" ? "opacity-20" : "opacity-30"
    const codeSymbolsOpacity = theme === "light" ? "opacity-15" : "opacity-25"

    return (
        <section id="habilidades" className={`py-20 transition-colors duration-300 ${bgMain}`}>
            {/* Iconos flotantes animados */}
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

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${textMain}`}>
                        Habilidades
                    </h2>
                    <p className={`text-lg max-w-3xl mx-auto transition-colors duration-300 ${textSecondary}`}>
                        Estas son las tecnologías y herramientas que utilizo para desarrollar proyectos, ya sean personales o profesionales.
                    </p>
                </div>

                <div className={`rounded-lg border ${cardBorder} p-8 ${cardBg}`}>
                    <h3 className={`text-2xl font-bold mb-8 text-center ${textMain}`}>
                        Tecnologías & Herramientas
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[...frontendTechnologies, ...backendTechnologies, ...tools].map((tech, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center p-4 rounded-lg border shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-md"
                            >
                                <div className="text-4xl mb-2">
                                    {tech.icon}
                                </div>
                                <span className={`text-sm font-medium text-center ${textMain}`}>
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
