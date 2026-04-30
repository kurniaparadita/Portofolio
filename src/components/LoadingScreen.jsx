import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-dark z-[100] flex flex-col items-center justify-center overflow-hidden">
      {/* Background glow for loading screen */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] animate-pulse-slow"></div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="relative w-20 h-20 flex items-center justify-center mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-t-2 border-r-2 border-primary"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border-b-2 border-l-2 border-white/20"
          />
          <span className="text-2xl font-bold text-white tracking-tighter">
            D<span className="text-primary">.</span>
          </span>
        </div>
        
        <motion.div 
          className="flex gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {['L', 'O', 'A', 'D', 'I', 'N', 'G'].map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.3, y: 0 }}
              animate={{ opacity: 1, y: -5 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.1,
              }}
              className="text-xs font-mono tracking-widest text-primary uppercase"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;