import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import SkillChart from './SkillChart';

const Skills = () => {
  const categories = [...new Set(skillsData.map(skill => skill.category))];
  const [activeTab, setActiveTab] = useState(categories[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  };

  return (
    <section id="skills" className="section-padding relative bg-dark-lighter/20 border-y border-white/5 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-primary"></div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider font-heading">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="h-[1px] w-8 bg-primary"></div>
          </div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto font-light">
            Kumpulan teknologi dan alat yang saya kuasai untuk menghadirkan solusi digital yang efisien.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Skill Distribution Chart */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 sticky top-24"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Skill Analysis</h3>
              <p className="text-slate-400 text-sm font-light">
                Visualisasi distribusi keahlian teknis saya dalam ekosistem backend dan data.
              </p>
            </div>
            <SkillChart />
          </motion.div>

          {/* Right: Skills Tabbed Grid */}
          <div className="w-full lg:w-2/3">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-start gap-3 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-2 rounded-full text-xs font-medium transition-all duration-300 border ${
                    activeTab === category
                      ? 'bg-primary border-primary text-white shadow-[0_0_20px_var(--primary-glow)] scale-105'
                      : 'bg-dark-light/50 border-white/10 text-slate-400 hover:border-primary/50 hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                >
                  {skillsData
                    .filter(skill => skill.category === activeTab)
                    .map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="glass-card group p-4 flex flex-col items-center gap-4 border border-white/5 hover:border-primary/30 transition-all duration-300"
                      >
                        {/* Icon Container */}
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-dark/50 border border-white/5 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_var(--primary-glow)] transition-all duration-500 p-2 relative overflow-hidden">
                          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 z-10"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = `https://ui-avatars.com/api/?name=${skill.name}&background=10b981&color=fff`;
                            }}
                          />
                        </div>
                        
                        {/* Skill Info */}
                        <div className="text-center">
                          <h4 className="font-semibold text-slate-200 group-hover:text-primary transition-colors duration-300 text-xs">
                            {skill.name}
                          </h4>
                        </div>
                      </motion.div>
                    ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;