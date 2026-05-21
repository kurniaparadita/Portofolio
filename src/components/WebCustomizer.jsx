import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useVelocity, useTransform, useMotionValueEvent } from 'framer-motion';
import { Settings, X, Stars, Palette } from 'lucide-react';

const SKINS = [
  { id: 'ufo', name: 'UFO', emoji: '🛸' },
  { id: 'rocket', name: 'Rocket', emoji: '🚀' },
  { id: 'moon', name: 'Moon', emoji: '🌕' },
  { id: 'blackhole', name: 'Black Hole', emoji: '🕳️' },
  { id: 'saturn', name: 'Saturn', emoji: '🪐' },
  { id: 'astronot', name: 'Astronot', emoji: '👨‍🚀' },
  { id: 'star', name: 'Star', emoji: '🌟' },
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
  const [activeSkin, setActiveSkin] = useState('none');
  const [activeColor, setActiveColor] = useState(COLORS[0]);
  const [isHovering, setIsHovering] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [moonEmoji, setMoonEmoji] = useState('🌕');
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const lastMousePos = useRef({ x: 0, y: 0 });
  const lastRotation = useRef(0);
  const canvasRef = useRef(null);
  const points = useRef([]); // To store mouse history for trail
  const MAX_POINTS = 20;

  // Update CSS Variables when color changes
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', activeColor.hex);
    document.documentElement.style.setProperty('--primary-rgb', activeColor.rgb);
    document.documentElement.style.setProperty('--primary-glow', activeColor.glow);
  }, [activeColor]);

  // Motion tracking for cursor
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Spring for main follower
  const springConfigMain = { damping: 25, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfigMain);
  const smoothY = useSpring(mouseY, springConfigMain);

  // Sync moon phase to mouse position
  useMotionValueEvent(mouseX, "change", (latest) => {
    if (activeSkin !== 'moon') return;
    const phases = ['🌑', '🌒', '🌓', '🌔', '🌕'];
    const index = Math.floor((latest / windowWidth) * phases.length);
    const safeIndex = Math.min(Math.max(index, 0), phases.length - 1);
    if (phases[safeIndex] !== moonEmoji) {
      setMoonEmoji(phases[safeIndex]);
    }
  });

  // Velocity-based rotation calculation
  const velX = useVelocity(smoothX);
  const velY = useVelocity(smoothY);
  
  const directionalRotation = useTransform([velX, velY], ([vx, vy]) => {
    if (activeSkin !== 'rocket' && activeSkin !== 'ufo') return 0;
    
    // Only update if moving fast enough to determine direction
    if (Math.abs(vx) > 5 || Math.abs(vy) > 5) {
      const angle = Math.atan2(vy, vx) * (180 / Math.PI);
      const offset = activeSkin === 'rocket' ? 45 : 0;
      lastRotation.current = angle + offset;
    }
    
    return lastRotation.current;
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Update points for trail
      points.current.push({ x: e.clientX, y: e.clientY });
      if (points.current.length > MAX_POINTS) {
        points.current.shift();
      }
      
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

  // Canvas Drawing for Black Hole Trail
  useEffect(() => {
    if (activeSkin !== 'blackhole') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawTrail = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (points.current.length < 2) {
        animationFrameId = requestAnimationFrame(drawTrail);
        return;
      }

      ctx.beginPath();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Draw the streak
      for (let i = 0; i < points.current.length - 1; i++) {
        const p1 = points.current[i];
        const p2 = points.current[i + 1];
        
        // Tapering width and fading opacity
        const size = (i / points.current.length) * 12;
        const opacity = (i / points.current.length) * 0.4;
        
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineWidth = size;
        ctx.strokeStyle = `rgba(${activeColor.rgb.split(' ').join(',')}, ${opacity})`;
        ctx.stroke();
      }

      // Add a glow effect at the head
      const head = points.current[points.current.length - 1];
      const gradient = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 20);
      gradient.addColorStop(0, `rgba(${activeColor.rgb.split(' ').join(',')}, 0.5)`);
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(head.x, head.y, 20, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(drawTrail);
    };

    drawTrail();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeSkin, activeColor]);

  const CursorFollower = () => {
    if (activeSkin === 'none') return null;
    const skin = SKINS.find(s => s.id === activeSkin);
    const emoji = skin ? skin.emoji : '🛸';

    // Special effects logic
    const velocityMagnitude = useTransform([velX, velY], ([vx, vy]) => {
      return Math.sqrt(vx * vx + vy * vy);
    });

    const starScale = useTransform(velocityMagnitude, [0, 1000], [1, 2]);
    const starGlow = useTransform(velocityMagnitude, [0, 1000], [15, 40]);

    return (
      <>
        {/* Canvas for Trail */}
        {activeSkin === 'blackhole' && (
          <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[9998]"
          />
        )}

        {/* Main Follower */}
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] text-2xl select-none"
          style={{
            x: smoothX,
            y: smoothY,
            rotate: (activeSkin === 'blackhole' || activeSkin === 'saturn') ? undefined : directionalRotation,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            scale: isHovering ? 1.8 : 1,
            rotate: (activeSkin === 'blackhole' || activeSkin === 'saturn') ? 360 : undefined
          }}
          transition={{ 
            rotate: (activeSkin === 'blackhole' || activeSkin === 'saturn')
              ? { repeat: Infinity, duration: activeSkin === 'saturn' ? 10 : 2, ease: "linear" } 
              : { type: 'spring', damping: 10, stiffness: 400, mass: 0.2 },
            scale: { type: 'spring', stiffness: 300, damping: 20 }
          }}
        >
          <motion.span 
            className="block"
            style={{
              dropShadow: activeSkin === 'star' 
                ? useTransform(starGlow, (v) => `0 0 ${v}px var(--primary-glow)`)
                : '0 0 15px var(--primary-glow)',
              scale: activeSkin === 'star' ? starScale : 1
            }}
            animate={
              activeSkin === 'astronot' 
                ? { y: [0, -8, 0] } 
                : activeSkin === 'star'
                ? { opacity: [0.7, 1, 0.7], scale: [0.95, 1.05, 0.95] }
                : {}
            }
            transition={
              activeSkin === 'astronot'
                ? { repeat: Infinity, duration: 3, ease: "easeInOut" }
                : activeSkin === 'star'
                ? { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                : {}
            }
          >
            {activeSkin === 'moon' ? moonEmoji : emoji}
          </motion.span>
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