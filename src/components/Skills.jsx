import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

const Skills = () => {
  // Mengelompokkan skill berdasarkan kategori
  const categories = [...new Set(skillsData.map(skill => skill.category))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="section-padding relative bg-dark-lighter/20 border-y border-white/5">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="inline-flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-primary"></div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="h-[1px] w-8 bg-primary"></div>
          </div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto font-light">Teknologi dan alat yang saya gunakan untuk membangun aplikasi web berkinerja tinggi.</p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {categories.map((category, idx) => (
            <div key={idx} className="w-full">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xl font-semibold text-white mb-6 uppercase tracking-widest border-l-2 border-primary pl-4"
              >
                {category}
              </motion.h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6"
              >
                {skillsData.filter(s => s.category === category).map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-card group flex flex-col items-center justify-center p-6 gap-4 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-dark border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300 z-10">
                      <span className="text-slate-300 font-bold group-hover:text-primary transition-colors">{skill.icon}</span>
                    </div>
                    <span className="font-medium text-slate-300 group-hover:text-white transition-colors z-10 text-center text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;