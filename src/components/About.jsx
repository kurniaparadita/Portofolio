import { motion } from 'framer-motion';
import { aboutData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-primary"></div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="h-[1px] w-full max-w-[200px] bg-white/10"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 aspect-square md:aspect-[4/5] bg-dark-lighter">
              <img 
                src="https://images.unsplash.com/photo-1549692520-074415565264?q=80&w=2000&auto=format&fit=crop" 
                alt="Developer Profile" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80"></div>
            </div>
            
            {/* Glow effects behind image */}
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl -z-10 group-hover:bg-primary/30 transition-colors duration-500"></div>
            <div className="absolute top-1/2 -right-6 md:-right-12 w-24 h-24 bg-dark-lighter border border-white/10 rounded-xl rotate-12 -z-10"></div>
            <div className="absolute -bottom-6 md:-bottom-12 left-1/2 w-32 h-32 bg-primary/5 rounded-full blur-xl -z-10"></div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-200">
              Transforming ideas into <span className="text-gradient-primary">digital reality.</span>
            </h3>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-10 font-light">
              {aboutData.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {aboutData.stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                  className="glass-card p-6 border-l-2 border-l-primary hover:-translate-y-2 transition-transform duration-300"
                >
                  <h4 className="text-4xl font-bold text-white mb-2">{stat.value}</h4>
                  <p className="text-sm text-slate-400 uppercase tracking-wider font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;