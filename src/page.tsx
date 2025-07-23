import { Contact } from "lucide-react";
import { About } from "./assets/components/about";
import { Footer } from "./assets/components/footer";

import { Hero } from "./assets/components/hero";
import { Projects } from "./assets/components/proyects";
import { Skills } from "./assets/components/skills";
import Header from "./assets/components/header";


export default function Portfolio() {
    return (
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
    )
}
