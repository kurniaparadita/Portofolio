import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate posisi bintang secara acak saat komponen dimuat
    const starCount = 50;
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#050505] z-[100] flex flex-col items-center justify-center overflow-hidden">
      {/* 1. Background Star Field */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white opacity-20"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}

      {/* 2. Nebula Glow Effects - Menggunakan variable primary */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* 3. Solar System Style Loader */}
        <div className="relative w-40 h-40 flex items-center justify-center mb-12">
          {/* Central Core (The Sun) - Menggunakan CSS Variable untuk Shadow */}
          <motion.div 
            className="w-12 h-12 bg-primary rounded-full relative z-10"
            style={{ 
              boxShadow: '0 0 40px var(--primary-glow)' 
            }}
            animate={{ 
              scale: [1, 1.1, 1],
              boxShadow: [
                '0 0 40px var(--primary-glow)',
                '0 0 60px var(--primary-glow)',
                '0 0 40px var(--primary-glow)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
             <div className="absolute inset-0 bg-white/20 rounded-full blur-[2px]"></div>
          </motion.div>

          {/* Inner Orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute w-24 h-24 rounded-full border border-white/10"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
          </motion.div>

          {/* Middle Orbit */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute w-32 h-32 rounded-full border border-white/5"
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-primary/40 rounded-full blur-[1px]"></div>
          </motion.div>

          {/* Outer Orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute w-40 h-40 rounded-full border border-white/5"
          >
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-400/60 rounded-full"></div>
          </motion.div>
        </div>
        
        {/* 4. Loading Text & Progress Bar */}
        <div className="flex flex-col items-center gap-4">
          <motion.div 
            className="flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-3xl font-bold tracking-[0.2em] text-white">
              DEV<span className="text-primary">.</span>
            </span>
          </motion.div>

          {/* Animated Progress Bar */}
          <div className="relative w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 2.5, 
                ease: "easeInOut",
                repeat: Infinity 
              }}
            />
          </div>

          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[10px] font-mono tracking-[0.4em] text-slate-500 uppercase mt-2"
          >
            Initializing Space
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;