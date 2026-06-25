# 🚀 Manthan Singh — Frontend Developer Portfolio

Personal developer portfolio built with **React.js**, **Tailwind CSS**, and **Framer Motion**. Features smooth animations, responsive dark UI, animated hero section, projects showcase, and a functional contact form via **EmailJS**. Built by Manthan Singh, first-year B.Tech CSE student. Deployed on Vercel. Open to frontend internship opportunities.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://your-portfolio.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-manthansingh104--cmd-181717?style=for-the-badge&logo=github)](https://github.com/manthansingh104-cmd)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Manthan%20Singh-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/manthan-singh-3a7013373)

---

## ✨ Features

- **Responsive Design** — Works seamlessly on all screen sizes
- **Dark Theme UI** — Clean and professional dark-themed interface
- **Smooth Animations** — Page transitions and scroll animations with Framer Motion
- **Animated Hero** — Interactive code editor mockup with floating badges
- **Contact Form** — Functional form powered by EmailJS (no backend needed)
- **Resume Integration** — View and download resume directly from the site
- **Fast Deployment** — Hosted on Vercel with auto-deploy on every push

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| React.js | UI framework |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| EmailJS | Contact form |
| Vite | Build tool |
| Vercel | Deployment |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Navigation with resume button
│   ├── Hero.jsx          # Landing section
│   ├── About.jsx         # About me section
│   ├── Skills.jsx        # Skills showcase
│   ├── Projects.jsx      # Projects display
│   ├── Experience.jsx    # Experience section
│   ├── Contact.jsx       # Contact form
│   └── SectionHeading.jsx
├── App.jsx
└── main.jsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/manthansingh104-cmd/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up EmailJS** (for contact form)

   - Sign up at [emailjs.com](https://www.emailjs.com)
   - Create a Gmail service and get your **Service ID**
   - Create an email template with `{{from_name}}`, `{{from_email}}`, `{{message}}` variables and get your **Template ID**
   - Get your **Public Key** from Account → API Keys
   - Update `src/components/Contact.jsx`:
   ```js
   const EMAILJS_SERVICE_ID  = 'your_service_id'
   const EMAILJS_TEMPLATE_ID = 'your_template_id'
   const EMAILJS_PUBLIC_KEY  = 'your_public_key'
   ```

4. **Run the development server**
```bash
npm run dev
```

5. **Open in browser**
```
http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🌐 Deployment

This project is deployed on **Vercel**. To deploy your own:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **New Project** → select your repo
4. Click **Deploy**

Your site will be live in under a minute! ⚡

---

## 📬 Contact

**Manthan Singh**
- 📧 Email: [manthansingh104@gmail.com](mailto:manthansingh104@gmail.com)
- 💼 LinkedIn: [manthan-singh-3a7013373](https://www.linkedin.com/in/manthan-singh-3a7013373)
- 🐙 GitHub: [manthansingh104-cmd](https://github.com/manthansingh104-cmd)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you like this project, give it a star on GitHub!
