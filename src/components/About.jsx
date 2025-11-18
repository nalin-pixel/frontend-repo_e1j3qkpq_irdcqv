import { motion } from 'framer-motion'

export default function About() {
  const items = [
    { label: 'Focus', value: 'Gameplay UX • Frontend • Systems' },
    { label: 'Stack', value: 'React • TypeScript • Python' },
    { label: 'Interests', value: 'Pixel Art • Tooling • AI' },
  ]

  return (
    <section id="about" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <div className="aspect-[4/3] panel pixel-border flex items-center justify-center">
              <span className="text-7xl">🧊</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7 flex flex-col justify-center"
          >
            <p className="text-xs font-[var(--font-pixel)] uppercase tracking-widest text-teal-200">About</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">A bit about me</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              I’m a computer science student who loves building playful, thoughtful interfaces and solid backend systems.
              I focus on clarity, accessibility, and performance — with a sprinkle of game feel.
            </p>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {items.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="panel pixel-border p-4"
                >
                  <p className="text-xs uppercase tracking-widest text-white/60">{item.label}</p>
                  <p className="mt-1 font-medium">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
