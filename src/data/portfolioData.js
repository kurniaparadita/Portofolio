export const navLinks = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

export const heroData = {
  name: "Frontend Engineer.",
  roles: ["Membangun UI yang Scalable", "Menciptakan Pengalaman Interaktif", "Mengoptimalkan Performa Web"],
  tagline: "Saya membangun aplikasi web yang modern, cepat, dan memiliki arsitektur yang kuat. Fokus pada performa, aksesibilitas, dan kualitas visual tingkat tinggi.",
  cta: "Lihat Karya Saya",
};

export const aboutData = {
  description: "Sebagai seorang Software Engineer, saya percaya bahwa kode yang baik tidak hanya berfungsi, tetapi juga mudah dipelihara dan memberikan pengalaman pengguna yang luar biasa. Saya memiliki passion mendalam terhadap ekosistem JavaScript/TypeScript modern dan selalu mencari cara untuk mengoptimalkan setiap piksel dan milidetik dalam aplikasi yang saya bangun.",
  stats: [
    { label: "Tahun Pengalaman", value: "3+" },
    { label: "Proyek Selesai", value: "20+" },
    { label: "Kontribusi Open Source", value: "15+" },
  ]
};

export const skillsData = [
  { name: "React / Next.js", icon: "React", category: "Frontend" },
  { name: "TypeScript", icon: "TS", category: "Language" },
  { name: "Tailwind CSS", icon: "Tailwind", category: "Frontend" },
  { name: "Framer Motion", icon: "Motion", category: "Frontend" },
  { name: "Node.js / Express", icon: "Node", category: "Backend" },
  { name: "PostgreSQL", icon: "DB", category: "Database" },
  { name: "Git / CI/CD", icon: "Git", category: "Tools" },
  { name: "Figma", icon: "Figma", category: "Design" },
];

export const projectsData = [
  {
    title: "Sistem Manajemen Enterprise",
    description: "Dashboard analitik yang kompleks dengan visualisasi data real-time, dibangun untuk performa tinggi dan skalabilitas.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    techStack: ["React", "TypeScript", "Tailwind", "Zustand"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Platform E-Commerce Premium",
    description: "Toko online headless dengan animasi halus, integrasi payment gateway, dan manajemen state yang optimal.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
    techStack: ["Next.js", "Framer Motion", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "AI Content Generator",
    description: "Aplikasi cerdas yang memanfaatkan LLM untuk membuat konten berkualitas tinggi, lengkap dengan editor rich text.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    techStack: ["React", "OpenAI", "Node.js"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

export const contactData = {
  email: "hello@developer.com",
  socials: [
    { name: "GitHub", url: "https://github.com", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
  ]
};