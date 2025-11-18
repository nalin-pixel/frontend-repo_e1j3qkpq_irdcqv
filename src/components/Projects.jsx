import { useEffect, useState } from 'react'

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
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-600">Work</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Selected projects</h2>
          <p className="mt-3 text-neutral-700">A few recent builds. Clean code, accessible UI, and thoughtful details.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoProjects.map((p, idx) => (
            <a key={p.title} href={p.link} className={`group relative rounded-2xl border border-neutral-200 p-5 transition-all ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: `${idx * 60}ms` }}>
              <div className="aspect-video rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 mb-4" />
              <h3 className="text-lg font-semibold text-neutral-900 group-hover:underline underline-offset-4 decoration-rose-400">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-700">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-neutral-100 text-neutral-700 px-2 py-1">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
