import { useTheme } from "../../../context/use-theme"

export function Skills() {
    const { theme } = useTheme()

    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React", level: 90 },
                { name: "TypeScript", level: 85 },
                { name: "Next.js", level: 80 },
                { name: "Tailwind CSS", level: 90 },
                { name: "HTML/CSS", level: 95 },
            ],
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", level: 85 },
                { name: "Express", level: 80 },
                { name: "Python", level: 75 },
                { name: "PostgreSQL", level: 80 },
                { name: "MongoDB", level: 70 },
            ],
        },
        {
            title: "Herramientas",
            skills: [
                { name: "Git", level: 90 },
                { name: "Docker", level: 70 },
                { name: "AWS", level: 65 },
                { name: "Figma", level: 80 },
                { name: "VS Code", level: 95 },
            ],
        },
    ]

    // Clases dinámicas según tema
    const bgMain = theme === "light" ? "bg-gray-50" : "bg-gray-800"
    const cardBg = theme === "light" ? "bg-white" : "bg-gray-900"
    const cardBorder = theme === "light" ? "border-gray-200" : "border-gray-700"
    const cardShadowHoverLight = "hover:shadow-xl"
    const cardShadowHoverDark = "dark:hover:shadow-2xl"
    const textMain = theme === "light" ? "text-gray-900" : "text-white"
    const textSecondary = theme === "light" ? "text-gray-600" : "text-gray-300"
    const borderText = theme === "light" ? "text-gray-700" : "text-gray-300"
    const progressBg = theme === "light" ? "bg-gray-200" : "bg-gray-700"
    const progressFill = theme === "light" ? "bg-blue-600" : "bg-blue-500"

    return (
        <section id="habilidades" className={`py-20 transition-colors duration-300 ${bgMain}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${textMain}`}>
                        Habilidades
                    </h2>
                    <p className={`text-lg max-w-3xl mx-auto transition-colors duration-300 ${textSecondary}`}>
                        Estas son las tecnologías y herramientas con las que trabajo regularmente para crear soluciones
                        excepcionales.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className={`${cardBg} rounded-lg shadow-lg ${cardShadowHoverLight} ${cardShadowHoverDark} transition-all duration-300 border ${cardBorder} p-8`}
                        >
                            <h3 className={`text-xl font-semibold mb-6 text-center transition-colors duration-300 ${textMain}`}>
                                {category.title}
                            </h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className={`text-sm font-medium transition-colors duration-300 ${borderText}`}>
                                                {skill.name}
                                            </span>
                                            <span className={`text-sm transition-colors duration-300 ${textSecondary}`}>
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className={`${progressBg} rounded-full h-2 transition-colors duration-300`}>
                                            <div
                                                className={`${progressFill} h-2 rounded-full transition-all duration-1000 ease-out`}
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
