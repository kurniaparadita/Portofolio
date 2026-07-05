import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { heroData } from '../data/portfolioData';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseTime = 2500;

  useEffect(() => {
    const currentRole = heroData.roles[roleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % heroData.roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Central Glow - Primary */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[500px] bg-primary/20 rounded-[100%] blur-[120px] mix-blend-screen animate-pulse-slow opacity-50" />
        
        {/* Secondary Glow - Blue/Cyan for depth */}
        <div className="absolute top-1/3 left-1/3 w-[400px] md:w-[700px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen animate-float opacity-40" />
        
        {/* Accent Glows */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
        {/* Extra Ambient Light */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-30" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-xs md:text-sm tracking-widest uppercase shadow-[0_0_15px_var(--primary-glow)]">
              Welcome to my space
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight leading-tight">
            Hi, I'm <span className="text-gradient">{heroData.name.replace('.', '')}</span>
            <span className="text-primary">.</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="h-16 md:h-20 flex items-center justify-center mb-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-slate-300">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[3px] h-8 md:h-12 bg-primary ml-1 translate-y-2 md:translate-y-3"
              />
            </h2>
          </motion.div>
          
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-slate-300 text-lg md:text-xl mb-12 leading-relaxed font-light">
            {heroData.tagline}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="projects" smooth={true} offset={-70} duration={500}>
              <button className="btn-primary group flex items-center gap-3">
                {heroData.cta}
                <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </Link>
            <Link to="contact" smooth={true} offset={-70} duration={500}>
              <button className="btn-outline">
                Hubungi Saya
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <Link to="about" smooth={true} offset={-70} duration={500} className="cursor-pointer group">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest text-slate-500 group-hover:text-primary transition-colors">Scroll</span>
            <div className="p-2 rounded-full border border-white/10 group-hover:border-primary/50 text-slate-400 group-hover:text-primary transition-all bg-dark/50 backdrop-blur-sm">
              <ChevronDown size={20} />
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;