import { useState, useEffect } from 'react'
import { Menu, X, Mountain, Sparkles } from 'lucide-react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-black/30 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => handleClick('home')} className="font-bold tracking-tight text-white flex items-center gap-2">
          <Mountain className="w-5 h-5 text-teal-300" />
          <span className="font-[var(--font-pixel)] uppercase">Your Name</span>
          <Sparkles className="w-4 h-4 text-teal-200" />
        </button>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          {sections.map((s) => (
            <button key={s.id} onClick={() => handleClick(s.id)} className="hover:text-white transition-colors relative">
              <span className="relative z-10">{s.label}</span>
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-teal-300 group-hover:w-full transition-all"></span>
            </button>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/40">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {sections.map((s) => (
              <button key={s.id} onClick={() => handleClick(s.id)} className="text-left py-2 text-white/90">
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
