import React from 'react';
import { motion } from 'motion/react';
import { Brain, Globe, Activity, Users, Shield, Network } from 'lucide-react';
import SponsorsMarquee from '../components/SponsorsMarquee';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9e8e8]">
      {/* Hero Section */}
      <section className="bg-luxury-abstract text-white py-32 lg:py-48 rounded-b-[3rem] shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 pattern-wavy opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-bold tracking-wider mb-6 uppercase">
              Neuroscience Innovation Operation Bolivia
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight">
              INOB Foundation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed mb-10">
              Promoting neuroscience innovation through research, intervention, and training to strengthen brain health.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-[#962241] px-8 py-4 rounded-full font-bold hover:bg-[#f9e8e8] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Discover Our Work
              </button>
              <button className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
                Partner With Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is INOB? */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#962241] mb-6">What is INOB Foundation?</h2>
              <div className="w-20 h-1 bg-[#2b6338] mb-8"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The INOB Foundation (Neuroscience Innovation Operation Bolivia Foundation) is a non-profit organization dedicated to promoting innovation in neurosciences through the design, execution, and evaluation of research, intervention, and training projects aimed at strengthening brain health.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We articulate science, practice, and specialized training to generate knowledge contextualized to Bolivian and Latin American cultural realities. Our approach integrates basic and applied neuroscience, with an ethical, interdisciplinary, and sustainable perspective.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The foundation not only drives scientific research but also develops evidence-based intervention programs and promotes the training of highly specialized human resources in the field of neurosciences.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="shape-arch overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczO0q3Q2fMbEZPLI65JY7AfDNdv8HFJP59dXbi3CQOqttiFz-umBMrRYsuOOjz9s3zyYiIqdeRhbbpqkWuQJRUNAqhygmzPVQK30CSyF4-6iP9mW6DnP29FHmvCszJFtYGdIoJkEm0W06WSU7yfAP647=w2560-h1349-s-no-gm?authuser=4" 
                  alt="Neuroscience Research" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-[#962241] p-3 rounded-full text-white">
                    <Brain size={24} />
                  </div>
                  <h4 className="font-bold text-[#962241]">Brain Health</h4>
                </div>
                <p className="text-sm text-gray-600">Integrating basic and applied neuroscience for a better future.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why is INOB Important? */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#962241] mb-6">Why is INOB Important?</h2>
            <p className="text-xl text-gray-600">
              In a context where investment in neuroscience research is limited, INOB represents a strategic platform for scientific development and innovation in brain health.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Activity />, title: "Reducing the Gap", desc: "Contributes to reducing the gap in neuroscience research in Bolivia." },
              { icon: <Brain />, title: "Brain Health Framework", desc: "Introduces the brain health approach as a comprehensive framework for prevention, evaluation, and optimization across the lifespan." },
              { icon: <Globe />, title: "Contextualized Evidence", desc: "Generates culturally contextualized scientific evidence." },
              { icon: <Users />, title: "Professional Training", desc: "Trains professionals in neurosciences with an interdisciplinary approach." },
              { icon: <Shield />, title: "Evidence-Based Intervention", desc: "Drives evidence-based intervention models adapted to diverse populations." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 border border-gray-100 shadow-lg group"
              >
                <div className="w-14 h-14 bg-[#f9e8e8] text-[#962241] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#962241] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#962241] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Importance */}
      <section className="py-24 bg-[#962241] text-white relative overflow-hidden rounded-t-[3rem]">
        <div className="absolute inset-0 pattern-arcs opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Global Importance</h2>
              <div className="w-20 h-1 bg-white/30 mb-8"></div>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                INOB can position itself as a Latin American reference in neuroscience innovation with global impact. At an international level, the INOB Foundation is relevant because:
              </p>
              <ul className="space-y-6">
                {[
                  "Aligns with the global brain health framework promoted by international organizations like the WHO.",
                  "Contributes scientific evidence from the Global South, expanding cultural diversity in international scientific production.",
                  "Develops culturally adapted neuroscientific intervention models, potentially replicable in other multicultural contexts.",
                  "Promotes scientific cooperation and regional and international research networks.",
                  "Integrates research, intervention, and training under an ethical and sustainable approach."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-[#2b6338] p-1 rounded-full text-white shrink-0">
                      <Network size={16} />
                    </div>
                    <span className="text-lg text-white/80 leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="shape-pill overflow-hidden h-64 mt-12 shadow-2xl border-4 border-white/10">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" alt="Global Network" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="shape-pill overflow-hidden h-80 shadow-2xl border-4 border-white/10">
                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop" alt="Research" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SponsorsMarquee />
    </div>
  );
};

export default Home;
