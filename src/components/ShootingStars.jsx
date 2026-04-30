import { useEffect, useRef } from 'react';

const ShootingStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const stars = [];
    const starCount = 4; // Number of simultaneous shooting stars

    class ShootingStar {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.length = Math.random() * 80 + 50;
        this.speed = Math.random() * 10 + 5;
        this.opacity = 1;
        this.angle = Math.PI / 4; // 45 degrees
      }

      update() {
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
        this.opacity -= 0.01;

        if (this.opacity <= 0 || this.x > canvas.width || this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        const colorValue = getComputedStyle(document.documentElement).getPropertyValue('--primary-rgb').trim();
        // Canvas API needs commas, but our CSS variable uses spaces for Tailwind
        const color = colorValue.split(' ').join(', ');
        
        ctx.beginPath();
        const gradient = ctx.createLinearGradient(
          this.x, this.y, 
          this.x - this.length * Math.cos(this.angle), 
          this.y - this.length * Math.sin(this.angle)
        );
        gradient.addColorStop(0, `rgba(${color}, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(${color}, 0)`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x - this.length * Math.cos(this.angle), 
          this.y - this.length * Math.sin(this.angle)
        );
        ctx.stroke();
      }
    }

    for (let i = 0; i < starCount; i++) {
      stars.push(new ShootingStar());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.update();
        star.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-5] opacity-40"
    />
  );
};

export default ShootingStars;