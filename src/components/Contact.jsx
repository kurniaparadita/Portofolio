import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { contactData } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative bg-dark-lighter/20 border-t border-white/5">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light">
            Tertarik untuk bekerja sama atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang lainnya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Mari Terhubung</h3>
              <p className="text-slate-400 font-light mb-8 leading-relaxed">
                Apakah Anda memiliki ide proyek besar atau sekadar ingin menyapa? Silakan kirimkan pesan, dan saya akan merespons sesegera mungkin.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_var(--primary-glow)] transition-all">
                  <Mail className="text-slate-400 group-hover:text-primary transition-colors" size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-mono tracking-wider uppercase mb-1">Email</p>
                  <a href={`mailto:${contactData.email}`} className="text-white hover:text-primary transition-colors font-medium">
                    {contactData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_var(--primary-glow)] transition-all">
                  <MapPin className="text-slate-400 group-hover:text-primary transition-colors" size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-mono tracking-wider uppercase mb-1">Lokasi</p>
                  <p className="text-white font-medium">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm text-slate-500 font-mono tracking-wider uppercase mb-4">Sosial Media</p>
              <div className="flex gap-4">
                {contactData.socials.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-dark flex items-center justify-center border border-white/10 hover:border-primary/50 hover:text-primary transition-all text-slate-400 hover:-translate-y-1"
                  >
                    <span className="text-xs font-medium">{social.name.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-3 glass-card p-8 md:p-10"
          >
            <form className="flex flex-col gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-transparent border-b border-slate-600 px-0 py-3 text-white focus:outline-none focus:border-primary focus:ring-0 peer placeholder-transparent transition-colors"
                    placeholder="Name"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-0 -top-3.5 text-sm text-slate-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary transition-all cursor-text"
                  >
                    Nama Anda
                  </label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-transparent border-b border-slate-600 px-0 py-3 text-white focus:outline-none focus:border-primary focus:ring-0 peer placeholder-transparent transition-colors"
                    placeholder="Email"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 -top-3.5 text-sm text-slate-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary transition-all cursor-text"
                  >
                    Email Anda
                  </label>
                </div>
              </div>

              <div className="relative group">
                <input 
                  type="text" 
                  id="subject"
                  required
                  className="w-full bg-transparent border-b border-slate-600 px-0 py-3 text-white focus:outline-none focus:border-primary focus:ring-0 peer placeholder-transparent transition-colors"
                  placeholder="Subject"
                />
                <label 
                  htmlFor="subject" 
                  className="absolute left-0 -top-3.5 text-sm text-slate-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary transition-all cursor-text"
                >
                  Subjek Pesan
                </label>
              </div>

              <div className="relative group mt-2">
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-slate-600 px-0 py-3 text-white focus:outline-none focus:border-primary focus:ring-0 peer placeholder-transparent transition-colors resize-none"
                  placeholder="Message"
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-0 -top-3.5 text-sm text-slate-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary transition-all cursor-text"
                >
                  Tulis pesan Anda di sini...
                </label>
              </div>

              <button 
                type="button" 
                className="btn-primary mt-4 flex items-center justify-center gap-3 w-full sm:w-auto self-end"
                onClick={(e) => { e.preventDefault(); alert("Fitur pengiriman pesan dapat dihubungkan ke backend (seperti Formspree atau EmailJS)."); }}
              >
                <span>Kirim Pesan</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;