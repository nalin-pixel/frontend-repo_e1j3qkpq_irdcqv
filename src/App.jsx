import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Your Name — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-900">GitHub</a>
            <a href="#" className="hover:text-neutral-900">LinkedIn</a>
            <a href="#" className="hover:text-neutral-900">Resume</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
