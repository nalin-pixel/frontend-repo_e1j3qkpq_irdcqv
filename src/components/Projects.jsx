import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const demoProjects = [
  {
    title: 'Clean Notes',
    description: 'A distraction‑free notes app with keyboard shortcuts and markdown support.',
    tags: ['React', 'Tailwind', 'Vite'],
    link: '#',
  },
  {
    title: 'Campus Map',
    description: 'Interactive map of campus buildings with schedules and accessibility info.',
    tags: ['TypeScript', 'Leaflet', 'UX'],
    link: '#',
  },
  {
    title: 'Task API',
    description: 'FastAPI backend with MongoDB and JWT auth for a lightweight todo app.',
    tags: ['Python', 'FastAPI', 'MongoDB'],
    link: '#',
  },
]

export default function Projects() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-[var(--font-pixel)] uppercase tracking-widest text-teal-200">Work</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">Selected projects</h2>
          <p className="mt-3 text-white/80">A few recent builds. Clean code, accessible UI, and thoughtful details.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoProjects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative panel pixel-border p-5 transition-all ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="aspect-video rounded-xl bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_40%)] border border-white/10 mb-4" />
              <h3 className="text-lg font-semibold group-hover:text-teal-200 transition-colors">{p.title}</h3>
              <p className="mt-1 text-sm text-white/80">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs chip">{t}</span>
                ))}
              </div>
              <span className="pointer-events-none absolute inset-px rounded-[14px] border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
