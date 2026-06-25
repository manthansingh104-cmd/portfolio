# Manthan Singh — Frontend Developer Portfolio

A modern, dark-themed portfolio website built with React.js, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **React.js 18** — Component-based UI
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations
- **React Icons** — Icon library
- **Vite** — Lightning-fast build tool

## 📁 Project Structure

```
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── Hero.jsx
 │    ├── About.jsx
 │    ├── Skills.jsx
 │    ├── Projects.jsx
 │    ├── Experience.jsx
 │    ├── Contact.jsx
 │    ├── Footer.jsx
 │    └── SectionHeading.jsx
 ├── hooks/
 │    └── useInView.js
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

## ⚡ Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build
```

## ✏️ Customization Guide

### Update your projects
Edit `src/components/Projects.jsx` — modify the `projects` array at the top.

### Add your resume PDF
Place your resume as `public/resume.pdf` — the Download Resume button will link to it automatically.

### Update skills / experience
Edit `src/components/Skills.jsx` and `src/components/Experience.jsx`.

### Change colors
Edit `tailwind.config.js` — update the `accent` and `accent2` colors.

## 📦 Deployment

```bash
# Deploy to Netlify
npm run build
# then drag the dist/ folder to netlify.com/drop

# Deploy to Vercel
npx vercel
```
