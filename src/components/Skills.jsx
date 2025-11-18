import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
    { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'C++'] },
    { group: 'Frontend', items: ['React', 'Tailwind', 'Vite', 'Framer Motion'] },
    { group: 'Backend', items: ['FastAPI', 'Node', 'MongoDB'] },
    { group: 'Tools', items: ['Git', 'Figma', 'VS Code'] },
  ]

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-[var(--font-pixel)] uppercase tracking-widest text-teal-200">Toolkit</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">Skills</h2>
          <p className="mt-3 text-white/80">The technologies I work with day‑to‑day.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.group}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="panel pixel-border p-5"
            >
              <p className="text-xs uppercase tracking-widest text-white/60">{s.group}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span key={item} className="text-sm chip">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
