import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Settings, X, Stars, Palette } from 'lucide-react';

const SKINS = [
  { id: 'ufo', name: 'UFO', emoji: '🛸' },
  { id: 'rocket', name: 'Rocket', emoji: '🚀' },
  { id: 'sparkles', name: 'Magic', emoji: '✨' },
  { id: 'fire', name: 'Fire', emoji: '🔥' },
  { id: 'bolt', name: 'Bolt', emoji: '⚡' },
  { id: 'robot', name: 'Robot', emoji: '🤖' },
  { id: 'alien', name: 'Alien', emoji: '👽' },
  { id: 'none', name: 'Default', emoji: '🖱️' }
];

const COLORS = [
  { name: 'Emerald', hex: '#10b981', rgb: '16 185 129', glow: 'rgba(16, 185, 129, 0.4)' },
  { name: 'Cyan', hex: '#06b6d4', rgb: '6 182 212', glow: 'rgba(6, 182, 212, 0.4)' },
  { name: 'Blue', hex: '#3b82f6', rgb: '59 130 246', glow: 'rgba(59, 130, 246, 0.4)' },
  { name: 'Indigo', hex: '#6366f1', rgb: '99 102 241', glow: 'rgba(99, 102, 241, 0.4)' },
  { name: 'Amber', hex: '#f59e0b', rgb: '245 158 11', glow: 'rgba(245, 158, 11, 0.4)' },
  { name: 'Slate', hex: '#94a3b8', rgb: '148 163 184', glow: 'rgba(148, 163, 184, 0.4)' },
];

const WebCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSkin, setActiveSkin] = useState('ufo');
  const [activeColor, setActiveColor] = useState(COLORS[0]);
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);
  
  const lastMousePos = useRef({ x: 0, y: 0 });

  // Update CSS Variables when color changes
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-rgb', activeColor.rgb);
    document.documentElement.style.setProperty('--primary-glow', activeColor.glow);
  }, [activeColor]);

  // Motion tracking for cursor
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Multiple springs for trailing effect
  const springConfigMain = { damping: 25, stiffness: 250, mass: 0.5 };
  const springConfigTrail1 = { damping: 30, stiffness: 200, mass: 0.6 };
  const springConfigTrail2 = { damping: 35, stiffness: 150, mass: 0.7 };
  const springConfigTrail3 = { damping: 40, stiffness: 100, mass: 0.8 };

  const smoothX = useSpring(mouseX, springConfigMain);
  const smoothY = useSpring(mouseY, springConfigMain);
  
  const trail1X = useSpring(mouseX, springConfigTrail1);
  const trail1Y = useSpring(mouseY, springConfigTrail1);
  
  const trail2X = useSpring(mouseX, springConfigTrail2);
  const trail2Y = useSpring(mouseY, springConfigTrail2);
  
  const trail3X = useSpring(mouseX, springConfigTrail3);
  const trail3Y = useSpring(mouseY, springConfigTrail3);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate rotation for skins that follow direction (UFO and Rocket)
      if (activeSkin === 'rocket' || activeSkin === 'ufo') {
        const dx = e.clientX - lastMousePos.current.x;
        const dy = e.clientY - lastMousePos.current.y;
        
        if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
          const angle = Math.atan2(dy, dx) * (180 / Math.PI);
          const offset = activeSkin === 'rocket' ? 45 : 0;
          setRotation(angle + offset);
        }
      } else {
        setRotation(0);
      }
      
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHoverStart = (e) => {
      if (e.target.closest('a, button, [role="button"], .glass-card')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleHoverStart);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleHoverStart);
    };
  }, [mouseX, mouseY, activeSkin]);

  const CursorFollower = () => {
    if (activeSkin === 'none') return null;
    const skin = SKINS.find(s => s.id === activeSkin);
    const emoji = skin ? skin.emoji : '🛸';
    const isTrailing = activeSkin === 'fire' || activeSkin === 'sparkles';

    return (
      <>
        {/* Trailing Effects */}
        {isTrailing && (
          <>
            <motion.div
              className="fixed top-0 left-0 pointer-events-none z-[9998] text-xl opacity-60 select-none"
              style={{ x: trail1X, y: trail1Y, translateX: '-50%', translateY: '-50%', scale: 0.8 }}
            >
              {emoji}
            </motion.div>
            <motion.div
              className="fixed top-0 left-0 pointer-events-none z-[9997] text-lg opacity-40 select-none"
              style={{ x: trail2X, y: trail2Y, translateX: '-50%', translateY: '-50%', scale: 0.6 }}
            >
              {emoji}
            </motion.div>
            <motion.div
              className="fixed top-0 left-0 pointer-events-none z-[9996] text-sm opacity-20 select-none"
              style={{ x: trail3X, y: trail3Y, translateX: '-50%', translateY: '-50%', scale: 0.4 }}
            >
              {emoji}
            </motion.div>
          </>
        )}

        {/* Main Follower */}
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] text-2xl select-none"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: '-50%',
            translateY: '-50%',
            rotate: rotation
          }}
          animate={{
            scale: isHovering ? 1.8 : 1,
          }}
          transition={{ rotate: { type: 'spring', damping: 15, stiffness: 100 } }}
        >
          <span className="block drop-shadow-[0_0_15px_var(--primary-glow)]">
            {emoji}
          </span>
        </motion.div>
      </>
    );
  };

  return (
    <>
      <CursorFollower />

      {/* Settings Toggle Button */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="p-4 rounded-full text-white shadow-xl transition-all"
          style={{ backgroundColor: activeColor.hex, boxShadow: `0 0 20px ${activeColor.glow}` }}
        >
          <Settings size={24} />
        </motion.button>
      </div>

      {/* Customizer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
            className="fixed bottom-24 right-6 z-[101] w-80 bg-dark-lighter/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10" style={{ color: activeColor.hex }}>
                  <Stars size={18} />
                </div>
                <h3 className="font-heading font-bold text-white tracking-wide">Web Experience</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/5 rounded-md text-slate-400 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Accent Color Selector */}
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-2 text-slate-500 uppercase tracking-widest text-[10px] font-bold">
                <Palette size={12} />
                <span>Accent Color</span>
              </div>
              <div className="flex gap-3 px-1">
                {COLORS.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setActiveColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                      activeColor.name === color.name ? 'scale-125 border-white' : 'border-transparent hover:scale-110'
                    }`}
                    style={{ backgroundColor: color.hex, boxShadow: `0 0 10px ${color.glow}` }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Cursor Skin Selector */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-500 uppercase tracking-widest text-[10px] font-bold">
                <Stars size={12} />
                <span>Cursor Skin</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {SKINS.map((skin) => (
                  <button
                    key={skin.id}
                    onClick={() => setActiveSkin(skin.id)}
                    className={`flex flex-col items-center justify-center p-2 rounded-xl border transition-all duration-300 ${
                      activeSkin === skin.id
                        ? 'bg-primary/10 border-primary shadow-[0_0_10px_var(--primary-glow)]'
                        : 'bg-white/5 border-transparent hover:bg-white/10'
                    }`}
                  >
                    <span className="text-xl mb-1">{skin.emoji}</span>
                    <span className="text-[8px] font-medium text-slate-400">{skin.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <p className="text-[10px] text-slate-500 italic">
                Customizations saved for your session.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        body { cursor: auto; }
        a, button, [role="button"], .glass-card { cursor: pointer; }
      `}</style>
    </>
  );
};

export default WebCustomizer;