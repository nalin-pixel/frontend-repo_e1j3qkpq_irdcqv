import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

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
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-white/70 border-b border-neutral-200' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => handleClick('home')} className="font-semibold tracking-tight text-neutral-900">
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-rose-500 mr-2 align-middle" />
          Your Name
        </button>
        <div className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
          {sections.map((s) => (
            <button key={s.id} onClick={() => handleClick(s.id)} className="hover:text-neutral-900 transition-colors">
              {s.label}
            </button>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {sections.map((s) => (
              <button key={s.id} onClick={() => handleClick(s.id)} className="text-left py-2 text-neutral-800">
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
