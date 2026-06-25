/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg:      '#080C14',
        surface: '#0D1320',
        card:    '#111827',
        border:  '#1E2D45',
        accent:  '#3B82F6',
        accent2: '#8B5CF6',
        muted:   '#64748B',
        subtle:  '#1E3A5F',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
        'gradient-glow':   'radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)',
      },
      animation: {
        'float':    'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-16px)' },
        },
      },
    },
  },
  plugins: [],
}
