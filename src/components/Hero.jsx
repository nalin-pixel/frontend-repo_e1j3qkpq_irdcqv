import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability, doesn't block interaction */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/70 via-white/40 to-white"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl animate-[fadeInUp_700ms_ease_100ms_both]">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-600">Aspiring Software Engineer</p>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900">
            Hi, I’m <span className="underline decoration-rose-400 decoration-4 underline-offset-4">Your Name</span>.
          </h1>
          <p className="mt-4 text-neutral-700 text-lg">
            I design and build clean, accessible web experiences. I love solving real problems with code and collaborating on products that matter.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-neutral-800 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-900 hover:border-neutral-400 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(8px);} to { opacity: 1; transform: translateY(0);} }
      `}</style>
    </section>
  )
}
