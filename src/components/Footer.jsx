import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <button onClick={scrollTop} className="flex items-center gap-2 group">
            <span className="font-mono text-sm text-accent">&lt;</span>
            <span className="font-semibold text-white">Manthan Singh</span>
            <span className="font-mono text-sm text-accent">/&gt;</span>
          </button>

          {/* Copyright */}
          <p className="text-sm text-muted flex items-center gap-1.5">
            © 2026 Manthan Singh — Frontend Developer
            <FiHeart size={13} className="text-red-400 fill-red-400" />
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { href: 'https://github.com/manthansingh104-cmd', icon: <FiGithub size={18} />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/manthan-singh-3a7013373', icon: <FiLinkedin size={18} />, label: 'LinkedIn' },
              { href: 'mailto:manthansingh104@gmail.com', icon: <FiMail size={18} />, label: 'Email' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="p-2 rounded-lg text-muted hover:text-accent hover:bg-accent/10 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
