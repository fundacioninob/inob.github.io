import React from 'react';
import { motion } from 'motion/react';
import { Globe2, MapPin, ExternalLink } from 'lucide-react';

const OurWork = () => {
  const programs = [
    { year: "2016", country: "Colombia", desc: "Internship in Neuropsychology of older adults with neurocognitive disorders (1st version) - Pura Vida Day Care Center, Universidad Militar Nueva Granada. Experimental Neuropsychology Labs - Universidad de San Buenaventura.", image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=800&auto=format&fit=crop" },
    { year: "2017", country: "Argentina", desc: "Child Neuropsychology Internship - Universidad de Morón.", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" },
    { year: "2018", country: "Guatemala", desc: "Neuropsychology of older adults with neurocognitive disorders (2nd version) - Universidad Galileo, Asociación Grupo Ermita Alzheimer Guatemala.", image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=800&auto=format&fit=crop" },
    { year: "2018", country: "Chile", desc: "Neuropsychology of older adults with neurocognitive disorders (3rd version) - Corporación Alzheimer Chile.", image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop" },
    { year: "2018", country: "Peru", desc: "Clinical Neuropsychology Internship (1st version) - Institute of Memory and Depression, National Institute of Neoplastic Diseases.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop" },
    { year: "2021", country: "France", desc: "Neuroscience and Connectomics Program - Institut Pasteur.", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800&auto=format&fit=crop" },
    { year: "2022", country: "Mexico", desc: "Molecular analysis of dementias program - National Dementia Biobank.", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop" },
    { year: "2024", country: "Ecuador", desc: "Clinical Neuropsychology Internship (2nd version) - Institute of Neurosciences, Universidad Católica de Cuenca.", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop" },
    { year: "2025", country: "Brazil", desc: "Advanced Internship Program - Instituto Santos Dumont.", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=800&auto=format&fit=crop" }
  ];

  const projects = [
    {
      title: "ReConnection Program",
      desc: "Implement the ReConnection program to provide neuropsychological intervention to people with stroke sequelae, with the objective of improving their functionality, autonomy, and social integration through a specialized approach.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Grand-monitors (Abumonitores)",
      desc: "Implement a training guide for older adults through activities and tasks of exercising and stimulating their neuropsychological functions to improve their quality of life in their role as monitors for their peers with affected cognition.",
      image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Neuropsychological Central of Statistical Data in Bolivia",
      desc: "Systematize the indicators of the subjective complaint of Neuropsychological Dysregulation Syndrome, through a screening process in the Santa Cruz population, in order to create a database that serves for future research and facilitates the creation of a local epidemiological registry.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Comprehensive neuropsychological care for people with multiple disabilities",
      desc: "Determine the Neuropsychological status of people with multiple disabilities who attend the CINOMS Center, through the basic evaluation of their development to establish the baseline for future individual neuropsychological programs.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Adaptation of the EDM to the 36 indigenous nations of Bolivia",
      desc: "Adapt the EDM through cultural and linguistic adaptation to the 36 indigenous nations of Bolivia to generate relevant neuropsychological tests that guarantee equitable evaluations in the detection of cognitive alterations in indigenous populations.",
      image: "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Screening for cognitive impairment in older adults at risk in Bolivia",
      desc: "Describe the memory status of older adults living at risk in Bolivia, through the evaluation of short-term memory and long-term memory for the establishment of casuistry of cognitive impairment in this condition.",
      image: "https://images.unsplash.com/photo-1505562134526-5c5d8fa927c8?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f9e8e8]">
      <section className="bg-luxury-abstract text-white py-32 lg:py-40 rounded-b-[3rem] shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 pattern-stripes opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Our Work
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed mb-8"
          >
            Internationalizing neuroscience training and fostering global cooperation since 2016.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-16 rounded-[3rem] shadow-xl mb-24 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#962241] opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
              <div className="md:w-1/3">
                <div className="w-24 h-24 bg-[#962241] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Globe2 size={48} />
                </div>
                <h2 className="text-3xl font-bold text-[#962241] mb-4">Global Reach</h2>
              </div>
              <div className="md:w-2/3">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Since 2016, the INOB Foundation has driven the internationalization of neuroscience training, facilitating contacts and alliances with academic institutions and specialized centers abroad.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through this cooperation network, students of the Behavioral Neurosciences Institute have developed academic and research internships, strengthening their technical, scientific, and intercultural competencies, and integrating into international work teams in areas such as neurodegeneration, dementias, neuropsychology, and applied neuroscience. This work has consolidated a platform for academic mobility and regional and international scientific linkage.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Projects Section */}
          <div className="mb-24">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-[#962241] mb-4">Our Projects</h2>
              <div className="w-24 h-1 bg-[#2b6338] mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-[2rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-[#962241] mb-4 group-hover:text-[#2b6338] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      {project.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Internships Section */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-[#962241] mb-4">International Programs & Internships</h2>
            <div className="w-24 h-1 bg-[#2b6338] mx-auto"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#962241]/20 rounded-full"></div>

            <div className="space-y-12">
              {programs.map((program, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="hidden md:block w-5/12"></div>
                  
                  <div className="z-20 flex items-center order-1 bg-[#962241] shadow-xl w-16 h-16 rounded-full border-4 border-[#f9e8e8] shrink-0 justify-center">
                    <span className="text-white font-bold text-sm">{program.year}</span>
                  </div>
                  
                  <div className="order-1 glass-card rounded-3xl p-0 w-full md:w-5/12 mt-6 md:mt-0 shadow-lg hover:shadow-2xl transition-shadow border border-white/50 relative overflow-hidden group flex flex-col">
                    <div className="h-40 overflow-hidden relative">
                      <img 
                        src={program.image} 
                        alt={program.country} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                        <MapPin size={20} />
                        <h3 className="text-xl font-bold">{program.country}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        {program.desc}
                      </p>
                    </div>
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

export default OurWork;
