import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, FlaskConical, ShieldAlert, GraduationCap, Handshake, Coins, Megaphone } from 'lucide-react';
import SEO from '../components/SEO';

const Mission = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9e8e8]">
      <SEO 
        title="Mission & Vision - Fundación INOB" 
        description="Learn about the mission, vision, and specific objectives of the INOB Foundation in advancing neuroscience in Latin America."
        url="https://inob.org.bo/mission"
      />
      {/* Header */}
      <section className="bg-luxury-abstract text-white py-32 lg:py-40 rounded-b-[3rem] shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 pattern-arcs opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Mission, Vision & Objectives
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Our guiding principles and strategic goals for advancing neuroscience in Latin America.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-[3rem] border-t-8 border-[#962241] shadow-xl relative overflow-hidden group flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczMeujOufC_ALZWW21bFwXFmpHGbtG_u1wtuoF5hhMvNGFgvEha_sMBxkMtca5UGdc5kxesPCTL5GxGHTg4jTvnsxq8c_d5niVuIoNQGplugu-4g3GhnO-m4aMNLrC13IOrnCegiQcZvI378JoPF6Zc=w1838-h1378-s-no-gm?authuser=4?q=80&w=800&auto=format&fit=crop" 
                  alt="Mission" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md text-white rounded-2xl flex items-center justify-center border border-white/30">
                    <Target size={32} />
                  </div>
                  <h2 className="text-4xl font-bold text-white drop-shadow-md">Mission</h2>
                </div>
              </div>
              
              <div className="p-10 flex-1">
                <p className="text-lg text-gray-700 leading-relaxed relative z-10">
                  We are a foundation dedicated to promoting neuroscience innovation through the design, execution, and evaluation of research and intervention projects, as well as the interdisciplinary training of human resources, with the purpose of strengthening brain health and improving the quality of life of people within Bolivian and Latin American cultures.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-[3rem] border-t-8 border-[#2b6338] shadow-xl relative overflow-hidden group flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczOg5lIHXP2lAQLZtv_gsBYKOMBU-Umy5WR6v8f3b9kVUHTb6XDaYwH2Z1fLiQsq7IgQDfp-iNn8zFYEnZdyM95OCOqlFWZEfMTNAk0fHZhO7fvNQmlLFbBSanlDW5ysBDnB9jp7QeQoqZQJtzWgEgs=w845-h746-s-no-gm?authuser=4?q=80&w=800&auto=format&fit=crop" 
                  alt="Vision" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md text-white rounded-2xl flex items-center justify-center border border-white/30">
                    <Eye size={32} />
                  </div>
                  <h2 className="text-4xl font-bold text-white drop-shadow-md">Vision</h2>
                </div>
              </div>
              
              <div className="p-10 flex-1">
                <p className="text-lg text-gray-700 leading-relaxed relative z-10">
                  To be a reference institution in neuroscience innovation in Bolivia and Latin America, recognized for its excellence in research, intervention, and interdisciplinary training, contributing ethically, sustainably, and culturally to the strengthening of brain health and the well-being of diverse populations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-24 bg-white relative overflow-hidden rounded-t-[3rem]">
        <div className="absolute inset-0 pattern-stripes opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-20 glass-card rounded-[3rem] overflow-hidden shadow-xl flex flex-col md:flex-row"
          >
            <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" 
                alt="General Objective" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center bg-[#f9e8e8]/50">
              <h2 className="text-4xl md:text-5xl font-bold text-[#962241] mb-6">General Objective</h2>
              <div className="w-24 h-1 bg-[#2b6338] mb-8"></div>
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Develop comprehensive neuroscience programs that articulate scientific research, evidence-based intervention, and specialized interdisciplinary training to strengthen brain health and improve the quality of life of Bolivian and Latin American populations.
              </p>
            </div>
          </motion.div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#962241] mb-10 text-center">Specific Objectives</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <FlaskConical />, text: "Design and execute research projects in basic and applied neurosciences.", image: "https://lh3.googleusercontent.com/pw/AP1GczN2KFBYPeDZYZNqKSz5JW-E1gZwnNPVGNPFrOC682pF__nwCw4ogo0LdaJ4QlzJiPXFANMQWeET6DbOAK4XJKvrxx2SlRtZGZSZLaW3HgVjZi5vCiNBKJEOwlRx-Vu8Zya-iswRL4Ilk0PiCvdoq7Kq=w1153-h865-s-no-gm?authuser=2" },
                { icon: <ShieldAlert />, text: "Implement prevention, evaluation, and intervention programs aimed at strengthening brain health.", image: "https://lh3.googleusercontent.com/pw/AP1GczMUF1BD-rWoeW70CS3WmE7df6nKb6orPTtOetCWQqZ4b32xcox47WAy01M7sX0OytJJ3AwyOKKh7Kmb3m5SKoU92ymw36DZg2lKovil4139tw0dZbBdKZb4JlxeudizVc_fXHwthxloIMZXiUhUAsLc=w1080-h810-s-no-gm?authuser=2" },
                { icon: <GraduationCap />, text: "Train and capacitate specialized human resources in neurosciences from an interdisciplinary approach.", image: "https://lh3.googleusercontent.com/pw/AP1GczOiXsmg2ZzTVY0LTHt1yJ4C60944H3rD8FGNPcRrPsQP5tG-DRG-yq8vSXZXUzgDWoE9_nF93tGOxX5Qg9qOYuZAnbnoIWl8wTPg-zlMPw7oNTnacD3joAAQpgDed12aOrCuJwld7WBswdoLhqmCJOi=w1280-h960-s-no-gm?authuser=2" },
                { icon: <Handshake />, text: "Establish national and international strategic alliances for scientific development and academic cooperation.", image: "https://lh3.googleusercontent.com/pw/AP1GczOTEo96B0w64euLNLnzrqpIK2PxiST-TNEuE8GqT51s7P1sXM83rSutFOPdOzpYr_oGixib5lhg9M7R7EPgGb0EA4ewORyJ_l1htia9wrak_EeOcoUDQ9pHvUb0UoBL1LpHH9yYOzbV4g1eJWLnRchP=w960-h720-s-no-gm?authuser=2" },
                { icon: <Coins />, text: "Manage sustainable funding to guarantee the continuity and expansion of research and intervention projects.", image: "https://lh3.googleusercontent.com/pw/AP1GczMZFM5ak73jzxIkh-Ff-3HXxk_L_ie5VTpGKGzUzJJzK3RyQvn_jR15rd2NvLhYbaPKqzoyk4XHRBdLYHxnvjBAogvH8iXRNu4vYTGAQK0TbqXPft6LVfQWc0afX0jcH_VMUbYu6JCLdNxNw2Yqlghq=w855-h641-s-no-gm?authuser=2" },
                { icon: <Megaphone />, text: "Promote scientific outreach and education in brain health in culturally diverse contexts.", image: "https://lh3.googleusercontent.com/pw/AP1GczMWr3Sjyk43xfPZc3MzGOJW6gGhvqcxcCbHYuUTuj-r1eei0XXH6ekYid6QBg9Y7J_fdBkVABJMCWLIRat2cuD2SnY-ioExJl-xFVMRUltgKLDeB1JzleFSC9f3BS3laIaaprwS-MJrQ8ljZpJs-LJu=w1280-h960-s-no-gm?authuser=2" }
              ].map((obj, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#f9e8e8] rounded-3xl overflow-hidden hover:bg-[#962241] hover:text-white transition-colors duration-300 group shadow-sm hover:shadow-xl flex flex-col"
                >
                  <div className="h-32 overflow-hidden relative">
                    <img 
                      src={obj.image} 
                      alt={`Objective ${index + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#f9e8e8] group-hover:from-[#962241] to-transparent transition-colors duration-300"></div>
                    <div className="absolute bottom-4 left-6 w-12 h-12 bg-white text-[#962241] rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      {obj.icon}
                    </div>
                  </div>
                  <div className="p-8 pt-4 flex-1">
                    <p className="text-lg font-medium leading-relaxed text-gray-800 group-hover:text-white transition-colors">
                      {obj.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Mission;
