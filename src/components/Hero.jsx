import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[620px] w-full overflow-hidden">
      {/* Spline 3D cover */}
      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Pixelated vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(closest-side, rgba(0,0,0,0) 60%, rgba(0,0,0,0.35))',
        imageRendering: 'pixelated'
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl panel pixel-border p-6 sm:p-8"
        >
          <p className="text-xs sm:text-sm font-[var(--font-pixel)] uppercase tracking-widest text-teal-200">Aspiring Software Engineer</p>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-cyan-200 to-sky-300">Your Name</span>.
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg">
            I craft delightful, performant web experiences. Scroll to explore my world — beware of slimes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="pixel-button">View Projects</a>
            <a href="#contact" className="pixel-button" style={{ background: 'linear-gradient(180deg, #9be7ff, #3aa0f7 60%, #1a66bf)', borderColor: '#3390e6' }}>Get in Touch</a>
          </div>
        </motion.div>
      </div>

      {/* Floating pixels */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 1, 0], y: [0, -40 - (i%5)*6, -80 - (i%7)*7, -120], x: [0, (i%2?1:-1)*10, (i%3?1:-1)*20, (i%2?1:-1)*30] }}
            transition={{ duration: 6 + (i%5), delay: i * 0.2, repeat: Infinity, repeatDelay: 4 }}
            className="absolute w-1.5 h-1.5 bg-teal-200/80"
            style={{ left: `${(i*7)%100}%`, bottom: `${(i*9)%60}%`, boxShadow: '0 0 6px rgba(100,255,218,0.75)' }}
          />
        ))}
      </div>
    </section>
  )
}
