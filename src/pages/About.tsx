import React from 'react';
import { motion } from 'motion/react';
import { Mail, Twitter, Linkedin, Brain, Activity } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Ninoska Ocampo-Barba",
      role: "President",
      image: "https://lh3.googleusercontent.com/pw/AP1GczNp9e53bzRfP6mS_h1HxGUPbwwadSXrvUHigFJMrT603UxEtAc2HwFDqsm_tByM-G6bUTrAcVtnMYwSN8E4IPW4GXiZh8mPlTia3kiiCdEPKtYOOG_p6bbZedl0NPSLgwbvk-ViCK5vI5H4H9bnjg7Z=w960-h1280-s-no-gm?authuser=4",
      linkedin: "https://www.linkedin.com/in/ninoska-ocampo-barba-15b1001b5/",
      email: "ninoska.ocampo@inob.org.bo"
    },
    {
      name: "Flavia Ozuna Salinas",
      role: "Executive Director",
      image: "https://lh3.googleusercontent.com/pw/AP1GczOiVor1wH7kIVVKrSEXD11297RjSfhUN-bcS1HKeQ_XasxrXOhJPmiOYoj-1GRyH33PTeVWgxCcKzddxlJN_nzaPy-dDIbaLClQ974I1YQ8n5ytYr2A_EZCFJNnNPW5YQDBy8ORUSLRydaxM7Hd6JE_=w1036-h1378-s-no-gm?authuser=4",
      linkedin: "https://www.linkedin.com/in/flavia-ozuna-salinas-a38688185/",
      email: "flavia.ozuna@inob.org.bo"
    },
    {
      name: "Andres Aracena-Ocampo",
      role: "Development Coordinator",
      image: "https://lh3.googleusercontent.com/pw/AP1GczPXXKHwQe1C73ShW5lpHygy8by-9GC5X0GjqGX-yOSbk4_Zjkjo3JOPrq_t88vZQk7vIjYHjNT6HmqmQngFWnuWNnD-xQTEAKc9cpQGCDB27SkKNc8H9Aes3Z7gASf3Dx5a4QfZGx9jFApMb2T97KYk=w1034-h1378-s-no-gm?authuser=4",
      linkedin: "https://www.linkedin.com/in/andres-aracena-ocampo-68b113257/",
      email: "andres.aracena@inob.org.bo"
    },
    {
      name: "Diana Cardenas Pereira",
      role: "Finance Coordinator",
      image: "https://lh3.googleusercontent.com/pw/AP1GczNnvpJnSfmiI10SmKJhRWX-GtjSs9z496DoVRd2_xN6CYhYDXEhro0OQhatCMUqfunoofuOtATPbSMZ2SQT9zTdURa4N1WQV2ZNghBXOlM3s0HFGqEBKlcYXYt9rkPky1_HjJHpMjynov1k6vxFlM6E=w767-h1031-s-no-gm?authuser=4",
      linkedin: "https://www.linkedin.com/in/diana-c%C3%A1rdenas-6b3563286/",
      email: "diana.cardenas@inob.org.bo"
    },
    {
      name: "Mauricio Velez Barahona",
      role: "Project Coordinator",
      image: "https://lh3.googleusercontent.com/pw/AP1GczOcj0ml6oiMQr94NO_rD8Dx2bnwhVEwngthNF2IBzCytS8OQtymLYsdCCSJ0ELF1eTHbmWE9YL4PhpPtuK4WWvYOYFC656RRx05E5RhBf869DRdSwtIZ3doVPx52gf4nw0AldU34o_RbBK6gKXNEmxt=w920-h1378-s-no-gm?authuser=4",
      linkedin: "https://www.linkedin.com/in/velez-mb/",
      email: "mauricio.velez@inob.org.bo"
    },
    {
      name: "Nicole Inclan",
      role: "Executive Assistant",
      image: "https://lh3.googleusercontent.com/pw/AP1GczMmH49xt5lj7Ejp-rhl2jf-ajQJd2xIg2LDLNqaUQJ6WBrZvbr3S4S1QIeHZFPmX1A-zgbrP91sAfvQJG2As-TNteNO_G73r15JSXetdpCvxfbQAiOQI5unaoUOqqUGyxX2jOAHxjpf8hm64dqB2WT0=w523-h679-s-no-gm?authuser=4",
      linkedin: "https://www.linkedin.com/in/nicole-inclan-652666350/",
      email: "nicole.inclan@inob.org.bo"
    },
    {
      name: "Joseph Fernandez",
      role: "Communication Lead",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      linkedin: "",
      email: "joseph.fernandez@inob.org.bo"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f9e8e8]">
      <section className="bg-luxury-abstract text-white py-32 lg:py-40 rounded-b-[3rem] shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            About INOB
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed"
          >
            A non-profit organization dedicated to promoting innovation in neurosciences.
          </motion.p>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="shape-arch overflow-hidden shadow-2xl border-8 border-white h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop" 
                  alt="Neuroscience Lab" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 glass-card p-8 rounded-3xl shadow-2xl max-w-xs border border-white/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#2b6338] p-4 rounded-2xl text-white shadow-lg">
                    <Activity size={32} />
                  </div>
                </div>
                <h4 className="font-bold text-[#962241] text-xl mb-2">Brain Health</h4>
                <p className="text-gray-600 leading-relaxed">Prevention, evaluation, and optimization across the lifespan.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#962241] mb-6">Who We Are</h2>
              <div className="w-20 h-1 bg-[#2b6338] mb-8"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The INOB Foundation (Neuroscience Innovation Operation Bolivia Foundation) articulates science, practice, and specialized training to generate knowledge contextualized to Bolivian and Latin American cultural realities.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our approach integrates basic and applied neuroscience, with an ethical, interdisciplinary, and sustainable perspective. We believe in the power of culturally adapted models to make a real difference in people's lives.
              </p>
              <div className="glass-card p-6 rounded-2xl border-l-4 border-[#962241]">
                <p className="text-[#962241] font-medium italic">
                  "In a context where investment in neuroscience research is limited, INOB represents a strategic platform for scientific development and innovation in brain health."
                </p>
              </div>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16 mt-32">
            <h2 className="text-4xl font-bold text-[#962241] mb-6">Our Leadership</h2>
            <div className="w-24 h-1 bg-[#2b6338] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 font-light">
              Guided by decades of experience in research, clinical practice, and community organizing, our leadership team is committed to creating lasting change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="relative mb-8 inline-block">
                  <div className="w-64 h-80 overflow-hidden shape-arch shadow-xl border-4 border-white">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3 bg-white p-3 rounded-full shadow-lg border border-gray-100">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#962241] transition-colors"><Linkedin size={20} /></a>
                    )}
                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-[#962241] transition-colors"><Mail size={20} /></a>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#962241] mb-2">{member.name}</h3>
                <p className="text-[#2b6338] font-mono uppercase tracking-wider text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
