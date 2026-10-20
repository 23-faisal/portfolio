import Footer from "./components/layout/footer";

import Hero from "./components/sections/hero";
import Projects from "./components/sections/projects";
import Skills from "./components/sections/skills";
import Experience from "./components/sections/experience";
import Navbar from "./components/layout/navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Navbar />

        <main>
          <Hero />
          <Projects />
          <Skills />
          <Experience />
        </main>

        <Footer />
      </div>
    </div>
  );
}
