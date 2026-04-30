import { heroData } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark py-8 border-t border-white/5 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/5 rounded-t-full blur-[80px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <p className="text-slate-500 font-light text-sm">
          &copy; {currentYear} <span className="font-medium text-slate-300">{heroData.name.replace('.', '')}</span>. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2 font-mono tracking-widest uppercase">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;