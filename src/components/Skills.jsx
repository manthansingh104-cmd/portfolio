import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'from-blue-500/20 to-blue-600/5',
    border: 'border-blue-500/30',
    skills: [
      { name: 'React.js',    level: 75, icon: '⚛️' },
      { name: 'JavaScript', level: 80, icon: '🟨' },
      { name: 'HTML5',       level: 90, icon: '🟧' },
      { name: 'CSS3',        level: 85, icon: '🟦' },
      { name: 'Tailwind',    level: 80, icon: '💨' },
      { name: 'Bootstrap',   level: 75, icon: '🅱️' },
    ],
  },
  {
    title: 'Programming',
    icon: '💻',
    color: 'from-purple-500/20 to-purple-600/5',
    border: 'border-purple-500/30',
    skills: [
      { name: 'C',           level: 70, icon: '⚙️' },
      { name: 'Python',      level: 55, icon: '🐍' },
    ],
  },
  {
    title: 'Tools & Design',
    icon: '🛠️',
    color: 'from-emerald-500/20 to-emerald-600/5',
    border: 'border-emerald-500/30',
    skills: [
      { name: 'Git',    level: 75, icon: '🔀' },
      { name: 'GitHub', level: 80, icon: '🐙' },
      { name: 'VS Code',level: 90, icon: '💙' },
      { name: 'Figma',  level: 60, icon: '🎭' },
      { name: 'Canva',  level: 70, icon: '🖌️' },
    ],
  },
  {
    title: 'Deployment',
    icon: '🚀',
    color: 'from-amber-500/20 to-amber-600/5',
    border: 'border-amber-500/30',
    skills: [
      { name: 'Netlify', level: 75, icon: '🌐' },
      { name: 'Vercel',  level: 75, icon: '▲' },
    ],
  },
]

function SkillBar({ name, level, icon, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="flex items-center gap-2 text-sm text-slate-300 group-hover:text-white transition-colors">
          <span>{icon}</span>
          {name}
        </span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div className="h-1.5 bg-surface rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full bg-gradient-accent rounded-full"
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="// what I work with"
          title="Technical Skills"
          subtitle="Technologies and tools I use to build modern web applications."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className={`glass rounded-2xl p-6 bg-gradient-to-br ${cat.color} border ${cat.border} hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    delay={ci * 0.1 + si * 0.06}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Git', 'GitHub', 'VS Code', 'Figma', 'Python', 'C', 'Netlify', 'Vercel'].map(t => (
            <span
              key={t}
              className="font-mono text-xs px-3 py-1.5 rounded-lg bg-card border border-border text-slate-400 hover:text-white hover:border-accent/50 transition-all duration-200 cursor-default"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
