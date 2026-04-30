import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projectsData } from "../data/portfolioData";

// Ikon GitHub SVG manual yang identik dengan desain Lucide
// Ini digunakan karena versi lucide-react (1.14.0) di node_modules Anda tidak menyertakan ikon brand.
const GithubIcon = ({ size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="lucide lucide-github"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3.5 1.5a10.8 10.8 0 0 0-5.5 0C7.5 2 6.5 2 6.5 2c-.28 1.15-.28 2.35 0 3.5a4.6 4.8 0 0 0-1 3.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col items-start"
        >
          <div className="flex items-center gap-4 mb-4 w-full">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider whitespace-nowrap">
              Featured <span className="text-primary">Works</span>
            </h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-24">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center`}
              >
                {/* Image Section */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-3/5 relative group"
                >
                  <div className="relative rounded-2xl overflow-hidden glass-card aspect-video md:aspect-[16/9]">
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  {/* Decorative glow */}
                  <div
                    className={`absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`w-full lg:w-2/5 flex flex-col ${isEven ? "lg:items-end text-left lg:text-right" : "lg:items-start text-left"}`}
                >
                  <p className="text-primary font-mono text-sm tracking-widest mb-2">
                    Featured Project
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 hover:text-primary transition-colors cursor-pointer">
                    {project.title}
                  </h3>

                  <div
                    className={`glass-card p-6 md:p-8 mb-6 relative z-20 ${isEven ? "lg:-ml-24" : "lg:-mr-24"} shadow-2xl bg-dark/95`}
                  >
                    <p className="text-slate-300 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <ul
                    className={`flex flex-wrap gap-3 mb-8 ${isEven ? "lg:justify-end" : "justify-start"}`}
                  >
                    {project.techStack.map((tech, idx) => (
                      <li
                        key={idx}
                        className="text-sm font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-white transition-colors"
                    >
                      <GithubIcon size={24} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;