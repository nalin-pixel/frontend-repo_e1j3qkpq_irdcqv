import { useState } from 'react'

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
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-widest text-neutral-600">Contact</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Let’s build something</h2>
        <p className="mt-3 text-neutral-700">Have a project idea, internship, or collaboration in mind? Drop a message.</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-800">Name</label>
            <input name="name" required className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-800">Email</label>
            <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-800">Message</label>
            <textarea name="message" rows="4" required className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-neutral-800 transition-colors">Send</button>
          {status && <p className="text-sm text-neutral-600">{status}</p>}
        </form>

        <p className="mt-8 text-sm text-neutral-500">Or email me at <span className="font-medium text-neutral-800">you@example.com</span></p>
      </div>
    </section>
  )
}
