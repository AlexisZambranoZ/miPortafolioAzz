"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "../../../context/use-theme"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#contacto", label: "Contacto" },
  ]

  const headerBgClass = theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700"
  const headerTextClass = theme === "light" ? "text-gray-900" : "text-white"
  const headerHoverClass = "hover:text-blue-600"
  const menuMobileBgClass = theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700"
  const menuMobileTextClass = theme === "light" ? "text-gray-600" : "text-white"

  return (
    <header
      className={`${headerBgClass} transition-colors duration-300 fixed top-0 w-full border-b z-50`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold text-blue-500`}>
              A <span className={`${headerTextClass}`}>Z </span>Z
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${headerTextClass} ${headerHoverClass} px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.label}
              </a>
            ))}

            {/* Botón de tema usando contexto global */}
            <button
              onClick={toggleTheme}
              className={`${headerTextClass} p-2 ${headerHoverClass}`}
              aria-label="Cambiar tema"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Botón mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className={`${menuMobileBgClass} border-t ${menuMobileTextClass}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`${menuMobileTextClass} hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors duration-200 block`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              {/* Botón de tema también en móvil usando contexto */}
              <button
                onClick={toggleTheme}
                className={`${menuMobileTextClass} hover:text-blue-600 w-full text-left px-3 py-2 transition`}
              >
                {theme === "dark" ? "Tema Claro ☀️" : "Tema Oscuro 🌙"}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
