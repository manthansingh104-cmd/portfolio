import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const highlights = [
  { label: 'Year of Study', value: '1st Year', icon: '🎓' },
  { label: 'Institute',     value: 'PCTE, Ludhiana', icon: '🏛️' },
  { label: 'Degree',        value: 'B.Tech CSE', icon: '💻' },
  { label: 'Status',        value: 'Open to Intern', icon: '✅' },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="// who I am"
          title="About Me"
          subtitle="A glimpse into my journey, my passion, and what drives me to build great software."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-slate-400 leading-relaxed"
          >
            <p>
              I'm <span className="text-white font-medium">Manthan Singh</span>, a first-year
              B.Tech Computer Science Engineering student at{' '}
              <span className="text-accent">PCTE Group of Institutes, Ludhiana</span>. My journey
              into tech started with a simple HTML page and quickly grew into a genuine passion for
              building things on the web.
            </p>
            <p>
              I focus on <span className="text-white font-medium">Frontend Development</span> —
              turning ideas into responsive, accessible, and visually polished interfaces. I work
              primarily with <span className="text-accent">React.js, JavaScript, Tailwind CSS</span>,
              and keep improving my fundamentals in DSA and Python.
            </p>
            <p>
              My goal is to land a <span className="text-white font-medium">frontend developer internship</span>{' '}
              where I can contribute to real products, collaborate with experienced engineers, and
              grow rapidly as a developer.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, solving problems, and transforming
              creative ideas into meaningful digital experiences.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              {['React.js', 'JavaScript', 'Tailwind CSS', 'Git', 'Problem Solving', 'UI Design'].map(tag => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-accent/40 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{h.icon}</div>
                <div className="font-semibold text-white text-base group-hover:gradient-text transition-all">
                  {h.value}
                </div>
                <div className="text-muted text-sm mt-1">{h.label}</div>
              </motion.div>
            ))}

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="col-span-2 glass rounded-2xl p-6 border-l-2 border-accent"
            >
              <p className="text-slate-300 italic text-sm leading-relaxed">
                "Always learning, always building, and always exploring new possibilities in technology."
              </p>
              <p className="text-muted text-xs mt-2 font-mono">— Manthan Singh</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
