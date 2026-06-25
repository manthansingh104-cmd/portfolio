import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const timeline = [
  {
    period: '2024 – Present',
    title: 'Started B.Tech CSE',
    org: 'PCTE Group of Institutes, Ludhiana',
    description:
      'Enrolled in Computer Science Engineering. Diving deep into programming fundamentals, DSA, and building a strong CS foundation.',
    tags: ['C', 'Python', 'DSA', 'OOP'],
    icon: '🎓',
    color: 'border-blue-500',
    dot: 'bg-blue-500',
  },
  {
    period: '2024 – Present',
    title: 'Frontend Development Journey',
    org: 'Self-Learning & Personal Projects',
    description:
      'Started learning HTML, CSS, and JavaScript from scratch. Built multiple static websites and landing pages. Discovered a genuine passion for crafting interfaces.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    icon: '🌐',
    color: 'border-emerald-500',
    dot: 'bg-emerald-500',
  },
  {
    period: '2024 – Present',
    title: 'Entered the React Ecosystem',
    org: 'React.js & Modern Frontend',
    description:
      'Learned React.js fundamentals — components, props, state, hooks, and component lifecycle. Started building interactive SPAs and reusable component libraries.',
    tags: ['React.js', 'Hooks', 'JSX', 'Components'],
    icon: '⚛️',
    color: 'border-purple-500',
    dot: 'bg-purple-500',
  },
  {
    period: '2025 – Present',
    title: 'Tailwind CSS & Modern Tooling',
    org: 'UI & Developer Workflow',
    description:
      'Adopted Tailwind CSS for utility-first styling. Learned Git & GitHub for version control. Deployed projects on Netlify and Vercel. Exploring Figma for UI design.',
    tags: ['Tailwind CSS', 'Git', 'GitHub', 'Netlify', 'Figma'],
    icon: '🛠️',
    color: 'border-amber-500',
    dot: 'bg-amber-500',
  },
  {
    period: 'Next Step',
    title: 'Seeking Frontend Internship',
    org: 'Open to Opportunities',
    description:
      'Looking for a frontend developer internship to apply my skills in real-world projects, learn from experienced teams, and grow rapidly as a developer.',
    tags: ['React.js', 'JavaScript', 'Open to Work'],
    icon: '🚀',
    color: 'border-accent',
    dot: 'bg-accent',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          eyebrow="// my journey"
          title="Frontend Development Journey"
          subtitle="How I went from zero to building full React applications."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} pl-16 md:pl-0`}
              >
                {/* Dot */}
                <div className={`absolute left-4 top-6 w-4 h-4 rounded-full ${item.dot} border-2 border-bg shadow-lg md:left-1/2 md:-translate-x-1/2 z-10`} />

                {/* Card */}
                <div className={`md:w-[calc(50%-2rem)] glass rounded-2xl p-6 border-l-2 ${item.color} hover:shadow-lg transition-all duration-300`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <span className="font-mono text-xs text-muted">{item.period}</span>
                      <h3 className="font-bold text-white text-base">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-accent text-sm font-medium mb-3">{item.org}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(t => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-surface border border-border text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
