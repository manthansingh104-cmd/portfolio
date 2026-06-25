import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import SectionHeading from './SectionHeading'

// ─── YOUR REAL GITHUB PROJECTS ───────────────────────────────────────────────
// To add a new project: copy one object, update the fields, push to GitHub.
// github: link to repo  |  live: deployed URL or '#' if not deployed yet
// ─────────────────────────────────────────────────────────────────────────────
const projects = [
  {
    title: 'Modern React Todo App',
    description:
      'Glassmorphism-style todo app built with React.js. Supports task creation, editing, deletion, and filtering (All / Active / Completed). Data persists via Local Storage with a fully responsive design.',
    tech: ['React.js', 'JavaScript', 'CSS3', 'Local Storage'],
    github: 'https://github.com/manthansingh104-cmd/modern-react-todo-app',
    live: '#',
    tag: 'React',
    color: 'border-blue-500/30',
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    title: 'Smart Alarm & Timer',
    description:
      'A modern web app for setting alarms using JavaScript Promises and async/await. Demonstrates asynchronous programming with input validation, real-time feedback, and a clean UI built with HTML, CSS, and JS.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Async/Await', 'Promises'],
    github: 'https://github.com/manthansingh104-cmd/Smart-Alarm-Timer',
    live: '#',
    tag: 'JavaScript',
    color: 'border-amber-500/30',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'EggShell / EcoShell Website',
    description:
      'Website for a sustainable business project converting eggshell waste into natural calcium powder for agriculture and gardening. Built with TypeScript and focused on eco-friendly branding.',
    tech: ['TypeScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/manthansingh104-cmd/eggshell-website',
    live: '#',
    tag: 'Frontend',
    color: 'border-emerald-500/30',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Aadhaar Analytics Dashboard',
    description:
      'An interactive web dashboard for analysing and visualising Aadhaar enrolment and update datasets. Generates insights for policymakers with charts and filters. Built with Python.',
    tech: ['Python', 'Data Visualisation', 'HTML5', 'CSS3'],
    github: 'https://github.com/manthansingh104-cmd/Aadhaar-Analytics-Dashboard',
    live: '#',
    tag: 'Data',
    color: 'border-purple-500/30',
    gradient: 'from-purple-600 to-indigo-600',
  },
  {
    title: 'Event-Driven 3D Molecular Dynamics Simulation',
    description:
      'High-performance event-driven 3D Molecular Dynamics (EDMD) simulation engine for modelling hard-sphere particle systems with real-time visualisation and scientific analysis tools.',
    tech: ['TypeScript', 'Simulation', 'JavaScript', '3D Graphics'],
    github: 'https://github.com/manthansingh104-cmd/Event-Driven-3D-Molecular-Dynamics-Simulation-Framework-for-Hard-Sphere-Systems',
    live: '#',
    tag: 'JavaScript',
    color: 'border-pink-500/30',
    gradient: 'from-pink-600 to-rose-600',
  },
  // ─── ADD YOUR FUTURE PROJECTS BELOW THIS LINE ───────────────────────────
  // {
  //   title: 'Your Next Project',
  //   description: 'Description here.',
  //   tech: ['React.js', 'Tailwind CSS'],
  //   github: 'https://github.com/manthansingh104-cmd/your-repo',
  //   live: 'https://your-live-url.vercel.app',
  //   tag: 'React',          // All | React | JavaScript | Frontend | Data
  //   color: 'border-blue-500/30',
  //   gradient: 'from-blue-600 to-purple-600',
  // },
]

const tags = ['All', 'React', 'JavaScript', 'Frontend', 'Data']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? projects : projects.filter(p => p.tag === active)

  return (
    <section id="projects" className="section-padding bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="// what I've built"
          title="Projects"
          subtitle="Real projects from my GitHub. Each one taught me something new."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === tag
                  ? 'bg-gradient-accent text-white shadow-lg shadow-accent/20'
                  : 'border border-border text-slate-400 hover:border-accent/50 hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`glass rounded-2xl overflow-hidden border ${project.color} hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group flex flex-col`}
              >
                {/* Gradient banner */}
                <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-white text-base leading-snug group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <span className="ml-3 shrink-0 text-xs px-2.5 py-1 rounded-full bg-card border border-border text-muted font-mono">
                      {project.tag}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-surface border border-border text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      <FiGithub size={15} /> GitHub
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm text-accent hover:text-blue-300 transition-colors ml-auto"
                      >
                        Live Demo <FiExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/manthansingh104-cmd"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-slate-400 hover:border-accent hover:text-white text-sm font-medium transition-all duration-200"
          >
            <FiGithub size={16} />
            View all 14 repos on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}