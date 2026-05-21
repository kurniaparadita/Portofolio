export const navLinks = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

export const heroData = {
  name: "Yefta Kurnia Paradita.",
  roles: ["Backend & Data Engineer", "Java Spring Boot Developer", "ETL & SQL Specialist"],
  tagline: "Spesialis dalam membangun arsitektur backend yang robust, integrasi data (ETL), dan sistem database skala enterprise.",
  cta: "Lihat Karya Saya",
};

export const aboutData = {
  description: "Saya adalah seorang Software Engineer yang berfokus pada ekosistem Java dan Data Engineering. Memiliki keahlian kuat dalam mengelola seluruh lifecycle data—mulai dari ekstraksi (ETL), pemrosesan di backend menggunakan Spring Boot, hingga penyajian data yang efisien. Saya berkomitmen untuk menciptakan solusi teknologi yang stabil, aman, dan scalable.",
  stats: [
    { label: "Keahlian Utama", value: "Java & SQL" },
    { label: "Fokus Sistem", value: "Enterprise" },
    { label: "Data Integration", value: "SSIS/SSRS" },
  ]
};

export const skillsData = [
  // 1. Database & Data Engineering
  { name: "MS SQL Server", category: "Database & Data", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "PostgreSQL", category: "Database & Data", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", category: "Database & Data", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "SSIS / SSRS", category: "Database & Data", icon: "https://img.icons8.com/color/48/microsoft-sql-server.png" }, // Placeholder for SSIS/SSRS
  { name: "JDBC", category: "Database & Data", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },

  // 2. Backend Development
  { name: "Java", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Spring Security", category: "Backend", icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" },
  { name: "Spring Data JPA", category: "Backend", icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" },

  // 3. Frontend Development
  { name: "JavaScript", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React.js", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", category: "Frontend", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },

  // 4. Tools & Version Control
  { name: "Git", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Insomnia", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/insomnia/insomnia-original.svg" },
  // { name: "Postman", category: "Tools", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Figma", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },

  // 5. Web & Supporting Tech
  { name: "Laravel", category: "Supporting Tech", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "PHP", category: "Supporting Tech", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "phpMyAdmin", category: "Supporting Tech", icon: "https://www.vectorlogo.zone/logos/phpmyadmin/phpmyadmin-icon.svg" },
];

export const projectsData = [
  {
    title: "Enterprise Data Pipeline",
    description: "Membangun workflow ETL yang kompleks menggunakan SSIS untuk memproses ribuan data transaksi harian ke dalam SQL Server.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    techStack: ["SQL Server", "SSIS", "ETL"],
    github: "https://github.com/kurniaparadita",
    demo: "#"
  },
  {
    title: "Secure Banking Backend",
    description: "RESTful API menggunakan Spring Boot dan Spring Security untuk sistem otentikasi yang aman dan efisien.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
    techStack: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/kurniaparadita",
    demo: "#"
  },
  {
    title: "Modern Analytics Dashboard",
    description: "Visualisasi data laporan dari SSRS yang diintegrasikan ke dalam dashboard web berbasis React.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    techStack: ["React", "SSRS", "JavaScript"],
    github: "https://github.com/kurniaparadita",
    demo: "#"
  }
];

export const contactData = {
  email: "yeftak.paradita30@gmail.com",
  socials: [
    { name: "GitHub", url: "https://github.com/kurniaparadita", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/yefta-kurnia-paradita-55440522a/", icon: "Linkedin" },
  ]
};

export const skillStats = [
  { subject: 'Database Design', A: 95, fullMark: 100 },
  { subject: 'Backend Dev', A: 90, fullMark: 100 },
  { subject: 'ETL Pipelines', A: 85, fullMark: 100 },
  { subject: 'SQL Querying', A: 98, fullMark: 100 },
  { subject: 'API Security', A: 80, fullMark: 100 },
  { subject: 'Frontend Dev', A: 70, fullMark: 100 },
];