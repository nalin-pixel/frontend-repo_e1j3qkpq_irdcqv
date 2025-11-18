export default function Skills() {
  const skills = [
    { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'C++'] },
    { group: 'Frontend', items: ['React', 'Tailwind', 'Vite', 'Framer Motion'] },
    { group: 'Backend', items: ['FastAPI', 'Node', 'MongoDB'] },
    { group: 'Tools', items: ['Git', 'Figma', 'VS Code'] },
  ]

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-600">Toolkit</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Skills</h2>
          <p className="mt-3 text-neutral-700">The technologies I work with day‑to‑day.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s) => (
            <div key={s.group} className="rounded-2xl border border-neutral-200 p-5">
              <p className="text-xs uppercase tracking-widest text-neutral-500">{s.group}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span key={item} className="text-sm rounded-full bg-neutral-100 text-neutral-800 px-2.5 py-1.5">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
