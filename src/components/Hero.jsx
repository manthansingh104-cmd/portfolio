import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

/* Animated code snippet shown in hero */
const codeLines = [
  { indent: 0, text: 'const manthan = {',          color: 'text-slate-300' },
  { indent: 1, text: 'role:    "Frontend Dev",',   color: 'text-blue-400' },
  { indent: 1, text: 'stack:   ["React", "JS"],',  color: 'text-purple-400' },
  { indent: 1, text: 'learning: ["AI", "DSA"],',   color: 'text-emerald-400' },
  { indent: 1, text: 'open:    true,',              color: 'text-amber-400' },
  { indent: 0, text: '}',                           color: 'text-slate-300' },
]

export default function Hero() {
  const scrollToProjects = () =>
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent2/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px),
                            linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            <motion.div {...fadeUp(0.1)} className="mb-4">
              <span className="font-mono text-sm text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                👋 Available for Internship
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Manthan Singh</span>
            </motion.h1>

            <motion.div {...fadeUp(0.3)} className="mb-6">
              <span className="font-mono text-xl text-accent2 font-medium">
                Frontend Developer
              </span>
              <span className="text-muted mx-3">|</span>
              <span className="text-slate-400 text-lg">B.Tech CSE Student</span>
            </motion.div>

            <motion.p
              {...fadeUp(0.4)}
              className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Building responsive and interactive web experiences with{' '}
              <span className="text-white font-medium">React.js</span> and modern
              frontend technologies. First-year CSE student at PCTE, Ludhiana.
            </motion.p>

            {/* CTA buttons */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={scrollToProjects}
                className="px-6 py-3 rounded-xl bg-gradient-accent text-white font-semibold text-sm hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-accent/20"
              >
                View Projects
              </button>
              <button
                onClick={scrollToContact}
                className="px-6 py-3 rounded-xl border border-border text-slate-300 font-semibold text-sm hover:border-accent hover:text-white transition-all duration-200"
              >
                Contact Me
              </button>
             
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.6)} className="flex items-center gap-4">
              <span className="text-muted text-sm">Find me on</span>
              {[
                { href: 'https://github.com/manthansingh104-cmd', icon: <FiGithub size={20} />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/manthan-singh-3a7013373', icon: <FiLinkedin size={20} />, label: 'LinkedIn' },
                { href: 'mailto:manthansingh104@gmail.com', icon: <FiMail size={20} />, label: 'Email' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-lg border border-border text-slate-400 hover:text-accent hover:border-accent transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Animated code card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="animate-float hidden lg:block"
          >
            {/* Code editor mockup */}
            <div className="glass rounded-2xl overflow-hidden glow-blue">
              {/* Editor title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <span className="ml-3 font-mono text-xs text-muted">manthan.js</span>
              </div>

              {/* Code lines */}
              <div className="p-6 font-mono text-sm space-y-1">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex"
                  >
                    <span className="text-muted w-6 text-right mr-4 select-none text-xs">{i + 1}</span>
                    <span style={{ paddingLeft: line.indent * 16 }} className={line.color}>
                      {line.text}
                    </span>
                  </motion.div>
                ))}

                {/* Blinking cursor */}
                <div className="flex mt-2">
                  <span className="text-muted w-6 text-right mr-4 text-xs">7</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-2 h-5 bg-accent inline-block"
                  />
                </div>
              </div>

              {/* Status bar */}
              <div className="px-4 py-2 bg-accent/10 border-t border-border flex items-center gap-4">
                <span className="font-mono text-xs text-accent">● React.js</span>
                <span className="font-mono text-xs text-muted">Ln 7, Col 1</span>
                <span className="ml-auto font-mono text-xs text-emerald-400">✓ Ready</span>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2 text-sm font-medium text-white border border-accent/30"
            >
              ⚛️ React.js
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2 text-sm font-medium text-white border border-accent2/30"
            >
              🎨 Tailwind CSS
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-muted text-xs font-mono">scroll down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown className="text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
