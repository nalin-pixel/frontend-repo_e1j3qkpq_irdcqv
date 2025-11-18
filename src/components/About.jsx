export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
              <span className="text-6xl">👋</span>
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-600">About</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">A bit about me</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              I’m a computer science student who enjoys building full‑stack applications and experimenting with design systems.
              I focus on clarity, accessibility, and performance. Outside of class, I contribute to open‑source and tinker with
              new frameworks.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                { label: 'Focus', value: 'Frontend • UI • UX' },
                { label: 'Stack', value: 'React • TypeScript • Python' },
                { label: 'Interests', value: 'Design • DevTools • AI' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-neutral-200 p-4">
                  <p className="text-xs uppercase tracking-widest text-neutral-500">{item.label}</p>
                  <p className="mt-1 font-medium text-neutral-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
