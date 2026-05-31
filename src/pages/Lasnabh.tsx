import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Users, ExternalLink, ChevronDown, ChevronUp, Brain, GraduationCap, Map as MapIcon, Clock, Network } from 'lucide-react';
import SEO from '../components/SEO';

const GOOGLE_FORM_URL = "https://forms.google.com";

const Lasnabh = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const calculateTimeLeft = () => {
    const targetDate = new Date('February 15, 2027 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const programSchedule = [
    { day: "Feb 15", time: "09:00 - 10:30", activity: "Introduction to Brain Health", coordinator: "Dr. Placeholder Name" },
    { day: "Feb 15", time: "11:00 - 12:30", activity: "Cognitive Assessment in Adults", coordinator: "Dr. Placeholder Name" },
    { day: "Feb 16", time: "09:00 - 10:30", activity: "Neurocognitive Aging Patterns", coordinator: "Dr. Placeholder Name" },
    { day: "Feb 17", time: "14:00 - 16:00", activity: "Clinical Interventions & Practices", coordinator: "Dr. Placeholder Name" },
    { day: "Feb 18", time: "09:00 - 12:00", activity: "Research Methodologies in Neuroscience", coordinator: "Dr. Placeholder Name" },
    { day: "Feb 19", time: "10:00 - 12:00", activity: "Closing Perspectives & Networking", coordinator: "Organizing Committee" }
  ];

  const committee = [
    { name: "Ninoska Ocampo-Barba", role: "Chair", image: "https://lh3.googleusercontent.com/pw/AP1GczNp9e53bzRfP6mS_h1HxGUPbwwadSXrvUHigFJMrT603UxEtAc2HwFDqsm_tByM-G6bUTrAcVtnMYwSN8E4IPW4GXiZh8mPlTia3kiiCdEPKtYOOG_p6bbZedl0NPSLgwbvk-ViCK5vI5H4H9bnjg7Z=w960-h1280-s-no-gm?authuser=4" },
    { name: "Flavia Ozuna Salinas", role: "Coordinator", image: "https://lh3.googleusercontent.com/pw/AP1GczN975QuTym5fp6A-pr-YSmKqEJEVrsihmeF8INTye60Z9qhK6DRYZ6l1oW0gxwM2pOsFlrfwsLnvI1mXkLAtO17b_jiJlQyAKHOOsQ-75dDFYYR7sQ6M8dx50nhEzHanNO017Ae4COd2Tm_MyQYfmHP=w498-h634-s-no-gm?authuser=4" },
    { name: "Committee Member Name", role: "Scientific Coordinator", image: "https://images.unsplash.com/photo-1531123897727-8f129e1bfa82?q=80&w=800&auto=format&fit=crop" },
    { name: "Joseph Fernandez Mariscal", role: "Logistics", image: "https://lh3.googleusercontent.com/pw/AP1GczOdqJpZ3bKWcfUTsqfdUMjyOz7VnNCR9i5yifRxV-3-w9wyfEp5wiYtyIKk9m0GtTHEL93PFcCOS8yiadxXRJbKFa4X43tWGVZfr0lT7ENndZabekf-qIexdsqfC9ZqKDQkJM077RJgMdh4gAtaNTyI=w983-h1280-s-no-gm?authuser=4" },
  ];

  const speakers = [
    { name: "Dr. Speaker Name", role: "Keynote Speaker", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop" },
    { name: "Dr. Speaker Name", role: "Guest Lecturer", image: "https://images.unsplash.com/photo-1594824430460-2646d5c589ab?q=80&w=800&auto=format&fit=crop" },
    { name: "Dr. Speaker Name", role: "Workshop Lead", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" },
    { name: "Dr. Speaker Name", role: "Panelist", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
    { name: "Dr. Speaker Name", role: "Lecturer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" },
    { name: "Dr. Speaker Name", role: "Guest Speaker", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
  ];

  const faqs = [
    { q: "Who can apply?", a: "Applications are open to undergraduate students, graduate students, and early-career researchers interested in neuropsychology, aging, and brain health." },
    { q: "Is there a registration fee?", a: "Information regarding registration fees and potential scholarships will be announced closer to the event date." },
    { q: "Will the school be held online or in person?", a: "This edition of the school is planned to be held entirely in person at the Institute of Behavioral Neurosciences." },
    { q: "When is the deadline to apply?", a: "The application deadline will be published soon. Please check back regularly or contact us for updates." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f9e8e8]">
      <SEO 
        title="Latin American School on Neuropsychology, Aging and Brain Health - Fundaci&oacute;n INOB" 
        description="Join us for the Latin American School on Neuropsychology, Aging and Brain Health. February 15-19 at the Institute of Behavioral Neurosciences."
        url="https://inob.org.bo/events/lasnabh"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#962241] to-[#5a1427] text-white pt-6 pb-8 md:pt-8 md:pb-12 rounded-b-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[calc(100vh-100px)]">
        {/* Decorative elements */}
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#962241]/20 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#2b6338]/20 to-transparent rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <span className="inline-block py-1 px-4 rounded-full bg-[#f9e8e8]/20 backdrop-blur-md border border-white/30 text-xs font-bold tracking-widest mb-4 uppercase text-white/90">
              Upcoming Event
            </span>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-10 mb-6 w-full max-w-6xl">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative shrink-0"
              >
                <div className="absolute inset-0 bg-white/20 blur-xl rounded-full"></div>
                <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczOnIyfdypPsQ0CO0C5jvPStTqudTm80zANvTnbmiOimXcoDV2yZ1JYtbDtt12GaYNnSgfwWs2Jj4s30l986rsDO2mfyJWttQv2_Doe8CVjqRGYxEStmsUYGWCk1W9PXjTWZyfpFZN9_b14fPf-bVthN=w819-h819-s-no-gm?authuser=4" 
                  alt="LASNABH Logo" 
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-3xl object-contain bg-white shadow-2xl p-2 relative z-10 border-4 border-white/80 transition-all duration-300" 
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight text-center md:text-left drop-shadow-lg flex-1">
                Latin American School on Neuropsychology, Aging and Brain Health
              </h1>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-2 mb-6"
            >
              <div className="flex items-center gap-2 text-sm md:text-base font-medium bg-black/20 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                <Calendar className="text-white" size={18} />
                <span>February 15 - 19</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base font-medium bg-black/20 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                <MapPin className="text-white" size={18} />
                <span>Institute of Behavioral Neurosciences</span>
              </div>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-2 md:gap-3 mb-8 justify-center items-center"
            >
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 md:p-3 min-w-[60px] md:min-w-[70px]">
                <span className="text-xl md:text-3xl font-mono font-bold">{timeLeft.days}</span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-wider mt-1 text-white/70">Days</span>
              </div>
              <div className="text-xl md:text-2xl font-bold text-white/50 pb-2 md:pb-4">:</div>
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 md:p-3 min-w-[60px] md:min-w-[70px]">
                <span className="text-xl md:text-3xl font-mono font-bold">{timeLeft.hours}</span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-wider mt-1 text-white/70">Hours</span>
              </div>
              <div className="text-xl md:text-2xl font-bold text-white/50 pb-2 md:pb-4">:</div>
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 md:p-3 min-w-[60px] md:min-w-[70px]">
                <span className="text-xl md:text-3xl font-mono font-bold">{timeLeft.minutes}</span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-wider mt-1 text-white/70">Minutes</span>
              </div>
            </motion.div>

            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              href={GOOGLE_FORM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#962241] px-6 py-2.5 md:px-8 md:py-3 rounded-full font-bold text-sm md:text-base hover:bg-gray-100 hover:scale-105 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 shadow-lg"
            >
              Apply as a Student <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-28 relative overflow-hidden">
        {/* Decorative background brain/network elements */}
        <div className="absolute top-20 right-10 text-[#962241]/5 transform rotate-12 pointer-events-none">
          <Network size={400} strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-10 left-10 text-[#2b6338]/5 transform -rotate-12 pointer-events-none">
          <Brain size={300} strokeWidth={0.5} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <h2 className="text-4xl font-bold text-[#962241] mb-6">About the School</h2>
              <div className="w-20 h-1 bg-[#2b6338] mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Latin American School on Neuropsychology, Aging and Brain Health is an intensive program designed to foster the next generation of researchers and clinicians. This program offers a unique blend of theoretical knowledge, methodological training, and practical applications tailored to the specific needs and realities of Latin America.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our objective is to create a dynamic environment where students can interact with leading experts, discuss the latest findings in neurocognitive aging, and develop strategies for effective interventions and brain health promotion.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex justify-center w-full"
            >
              <div className="relative w-full max-w-lg lg:max-w-full">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white h-80 md:h-[500px] w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Students in a lab" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-4 md:-left-8 glass-card p-6 rounded-3xl shadow-xl border border-white/60 flex items-center gap-5 z-10 bg-white/90 backdrop-blur-xl">
                  <div className="bg-gradient-to-br from-[#2b6338] to-[#1e4527] p-4 rounded-full text-white shadow-lg">
                    <Brain size={32} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#962241]">Advancing Science</h4>
                    <p className="text-base text-gray-600 font-medium">Through collaborative education</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Schedule */}
      <section className="py-16 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-[0.03]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-bold text-[#962241] mb-6">Scientific Program</h2>
            <div className="w-24 h-1 bg-[#2b6338] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A brief overview of the schedule. The full, detailed cronogram containing all session times, activities, and coordinators may be updated shortly.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full text-left border-collapse glass-card rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <thead className="bg-[#962241] text-white">
                <tr>
                  <th className="p-4 md:p-6 font-semibold uppercase tracking-wider text-sm border-b border-white/10"><div className="flex items-center gap-2"><Calendar size={16} /> Day</div></th>
                  <th className="p-4 md:p-6 font-semibold uppercase tracking-wider text-sm border-b border-white/10"><div className="flex items-center gap-2"><Clock size={16} /> Time</div></th>
                  <th className="p-4 md:p-6 font-semibold uppercase tracking-wider text-sm border-b border-white/10"><div className="flex items-center gap-2"><MapIcon size={16} /> Activity</div></th>
                  <th className="p-4 md:p-6 font-semibold uppercase tracking-wider text-sm border-b border-white/10"><div className="flex items-center gap-2"><Users size={16} /> Coordinator</div></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {programSchedule.map((item, index) => (
                  <motion.tr 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-gray-50 transition-colors group"
                  >
                    <td className="p-4 md:p-6 text-gray-600 font-mono text-sm whitespace-nowrap group-hover:text-[#962241] transition-colors">{item.day}</td>
                    <td className="p-4 md:p-6 text-gray-600 font-mono text-sm whitespace-nowrap">{item.time}</td>
                    <td className="p-4 md:p-6 text-gray-800 font-medium">{item.activity}</td>
                    <td className="p-4 md:p-6 text-gray-600 text-sm whitespace-nowrap">{item.coordinator}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Student Applications CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#962241] to-[#7a1b34] text-white relative rounded-[2rem] mx-4 sm:mx-6 lg:mx-8 my-8 md:my-16 shadow-2xl overflow-hidden shadow-[#962241]/20">
        <div className="absolute inset-0 pattern-wavy opacity-10"></div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 transform translate-y-1/4 translate-x-1/4 w-80 h-80 bg-black/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
          <GraduationCap size={64} className="mx-auto mb-8 text-[#f9e8e8] opacity-80" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Us as a Student</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed font-light">
            We invite prospective students and researchers to apply for this transformative experience. Secure your place to learn from leading neuroscientists and connect with peers from across Latin America.
          </p>
          <a 
            href={GOOGLE_FORM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#962241] px-10 py-5 rounded-full font-bold text-xl hover:bg-[#f9e8e8] hover:scale-105 transition-all shadow-xl"
          >
            Apply as a Student <ExternalLink size={24} />
          </a>
        </div>
      </section>

      {/* Organizing Committee */}
      <section className="py-16 md:py-28 relative bg-gradient-to-b from-[#f9e8e8] to-white">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white/50 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="inline-block py-1 px-4 rounded-full bg-white text-[#2b6338] text-sm font-bold tracking-widest mb-4 uppercase border border-[#2b6338]/20 shadow-sm">
              Leadership
            </span>
            <h2 className="text-4xl font-bold text-[#962241] mb-6">Organizing Committee</h2>
            <div className="w-24 h-1 bg-[#2b6338]"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {committee.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] p-6 pb-8 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group border border-gray-100 flex flex-col items-center"
              >
                <div className="w-full aspect-square rounded-[2rem] overflow-hidden mb-6 shadow-sm border border-gray-100 group-hover:border-[#f9e8e8] transition-colors duration-300 relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-snug">{member.name}</h3>
                <span className="px-4 py-1.5 bg-[#f9e8e8] text-[#962241] font-bold text-xs rounded-full uppercase tracking-wider">{member.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-16 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-10 text-gray-50 pointer-events-none transform translate-x-1/3">
           <Network size={600} strokeWidth={0.2} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="inline-block py-1 px-4 rounded-full bg-[#f9e8e8] text-[#962241] text-sm font-bold tracking-widest mb-4 uppercase border border-[#962241]/20 shadow-sm">
              Global Experts
            </span>
            <h2 className="text-4xl font-bold text-[#962241] mb-6">Confirmed Speakers</h2>
            <div className="w-24 h-1 bg-[#2b6338] mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are assembling a diverse faculty of leading experts. Their names and topics will be revealed leading up to the event.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {speakers.map((speaker, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-[2.5rem] overflow-hidden group shadow-lg shadow-gray-200/60 border border-gray-100 flex flex-col h-full bg-white hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-72 overflow-hidden relative border-b border-gray-100">
                  <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#962241]/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Hover Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10 flex flex-col items-center text-center">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white font-bold text-xs rounded-full uppercase tracking-wider border border-white/30">View Profile</span>
                  </div>
                </div>
                <div className="p-8 text-center flex-grow flex flex-col justify-center relative bg-white z-20">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#962241] transition-colors">{speaker.name}</h3>
                  <p className="text-[#2b6338] font-bold tracking-wide uppercase text-sm">{speaker.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-16 md:py-28 relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 relative overflow-hidden border border-white bg-white">
            <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center mb-12">
              <div className="md:w-1/2 relative z-10 w-full">
                <div className="inline-flex items-center gap-2 text-[#962241] font-bold tracking-widest text-sm uppercase mb-4">
                  <MapPin size={18} /> Location
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">The Venue</h2>
                <div className="w-16 h-1.5 bg-[#2b6338] mb-8 rounded-full"></div>
                <h3 className="text-2xl font-semibold mb-4 text-[#962241]">Institute of Behavioral Neurosciences</h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  The school will take place at the Institute of Behavioral Neurosciences. It provides a state-of-the-art academic environment, perfectly equipped for hosting lectures, interactive workshops, and networking events for participants.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-xl border border-gray-100">
                    <MapPin className="text-[#2b6338]" size={20} />
                    <span className="font-semibold text-gray-800">Santa Cruz, Bolivia</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full h-[300px] md:h-[450px] rounded-[2rem] overflow-hidden shadow-xl relative border-4 border-white/80">
                {/* Decorative dots pattern */}
                <div className="absolute inset-0 pattern-grid opacity-30 z-10 pointer-events-none mix-blend-overlay"></div>
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop" 
                  alt="Venue building" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </div>

            {/* Map Preview */}
            <div className="w-full h-[350px] md:h-[450px] rounded-[2rem] overflow-hidden shadow-lg border-2 border-gray-100/50 bg-gray-50 relative group">
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100 z-10 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                 Interactive Map
              </div>
              <iframe
                title="Event Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.300425407839!2d-63.19425822514687!3d-17.777572383177723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e9004ebc898d%3A0xd1ba8da49446344d!2sINSTITUTO%20DE%20NEUROCIENCIAS%20COMPORTAMENTALES!5e0!3m2!1ses!2sbr!4v1780238869031!5m2!1ses!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-28 bg-white relative">
        <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="inline-block py-1 px-4 rounded-full bg-[#f9e8e8] text-[#962241] text-sm font-bold tracking-widest mb-4 uppercase border border-[#962241]/20">
              Got Questions?
            </span>
            <h2 className="text-4xl font-bold text-[#962241] mb-6">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-[#2b6338] mx-auto"></div>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="glass-card border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-bold text-[#962241] pr-8">{faq.q}</span>
                  {openFaqIndex === i ? (
                    <ChevronUp className="text-[#2b6338] shrink-0" />
                  ) : (
                    <ChevronDown className="text-gray-400 shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaqIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t border-gray-50 mx-6">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Lasnabh;
