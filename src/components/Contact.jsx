import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const formData = Object.fromEntries(new FormData(e.currentTarget))
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('Thanks! I\'ll get back to you soon.')
        e.currentTarget.reset()
      } else {
        setStatus('Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-[var(--font-pixel)] uppercase tracking-widest text-teal-200">Contact</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">Let’s build something</h2>
        <p className="mt-3 text-white/80">Have a project idea, internship, or collaboration in mind? Drop a message.</p>

        <motion.form onSubmit={onSubmit} className="mt-8 space-y-4 panel pixel-border p-6"
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input name="name" required className="mt-1 w-full rounded-xl bg-black/30 border border-white/15 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-300 text-white placeholder-white/50" placeholder="Terrarian" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" name="email" required className="mt-1 w-full rounded-xl bg-black/30 border border-white/15 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-300 text-white placeholder-white/50" placeholder="you@domain.com" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea name="message" rows="4" required className="mt-1 w-full rounded-xl bg-black/30 border border-white/15 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-300 text-white placeholder-white/50" placeholder="Let\'s craft something legendary..." />
          </div>
          <button className="pixel-button">Send</button>
          {status && <p className="text-sm text-white/70">{status}</p>}
        </motion.form>

        <p className="mt-8 text-sm text-white/70">Or email me at <span className="font-medium text-white">you@example.com</span></p>
      </div>
    </section>
  )
}
