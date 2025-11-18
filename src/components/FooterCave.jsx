import { motion } from 'framer-motion'

export default function FooterCave(){
  return (
    <div className="relative overflow-hidden">
      <div className="absolute -top-10 inset-x-0 h-10" style={{
        background: 'radial-gradient(50% 120% at 50% 150%, rgba(0,0,0,0.6), transparent 60%)'
      }} />
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-white/70 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Your Name — All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Resume</a>
        </div>
      </motion.div>
    </div>
  )
}
