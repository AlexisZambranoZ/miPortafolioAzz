import { ThemeProvider } from "../context/theme-context"
import "./App.css"
import { About } from "./assets/components/about"
import { Footer } from "./assets/components/footer"
import { Hero } from "./assets/components/hero"
import { Projects } from "./assets/components/proyects"
import { Skills } from "./assets/components/skills"
import Header from "./assets/components/header"
import { Contact } from "./assets/components/contact"

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
