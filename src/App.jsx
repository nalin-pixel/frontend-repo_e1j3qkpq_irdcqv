import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import BackgroundTiles from './components/BackgroundTiles'
import FooterCave from './components/FooterCave'

function App() {
  return (
    <div className="bg-terraria text-white relative">
      {/* animated pixel shimmer */}
      <BackgroundTiles />

      <Navbar />
      <main className="relative z-[2]">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-white/10 relative z-[2]">
        <FooterCave />
      </footer>
    </div>
  )
}

export default App
