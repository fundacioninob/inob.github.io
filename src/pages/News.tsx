import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Users, ArrowRight, Search } from 'lucide-react';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const events = [
    {
      title: "VIII National University Congress of Neuropsychology",
      date: "May 23 - 25, 2024",
      location: "Santa Cruz, Bolivia",
      role: "Promoter",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
      status: "past"
    },
    {
      title: "VII Bolivian Meeting of Neuroeducation",
      date: "September 11, 2024",
      location: "Santa Cruz, Bolivia",
      role: "Promoter",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
      status: "past"
    },
    {
      title: "XVIII Congress of the Latin American Society of Neuropsychology",
      date: "November 13 - 15, 2024",
      location: "Cuenca, Ecuador",
      role: "Participation",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=800&auto=format&fit=crop",
      status: "past"
    },
    {
      title: "II Ibero-American University of Alzheimer",
      date: "November 26 - 29, 2024",
      location: "Santa Cruz, Bolivia",
      role: "Promoter",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
      status: "past"
    },
    {
      title: "VI National Alzheimer Conference",
      date: "November 27, 2024",
      location: "Santa Cruz, Bolivia",
      role: "Promoter",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
      status: "past"
    },
    {
      title: "IX National University Congress of Neuropsychology",
      date: "May 28 - 30, 2025",
      location: "Santa Cruz, Bolivia",
      role: "Promoter",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
      status: "past"
    },
    {
      title: "VIII Bolivian Meeting of Neuroeducation",
      date: "October 29, 2025",
      location: "Santa Cruz, Bolivia",
      role: "Promoter",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
      status: "past"
    },
    {
      title: "I International Congress of Neurosciences",
      date: "November 2025",
      location: "Lima, Peru",
      role: "Participation",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800&auto=format&fit=crop",
      status: "past"
    },
    {
      title: "X National University Congress of Neuropsychology",
      date: "May 27 - 30, 2025",
      location: "Santa Cruz, Bolivia",
      role: "Promoter",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
      status: "upcoming"
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.role.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    return matchesSearch && event.status === filter;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#f9e8e8]">
      <section className="bg-luxury-abstract text-white py-32 lg:py-40 rounded-b-[3rem] shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 pattern-zigzag opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Events & Congresses
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed mb-10"
          >
            Join us in our upcoming events and explore our past participations in the global neuroscience community.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto relative flex flex-col gap-4"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-white/50" />
              </div>
              <input
                type="text"
                placeholder="Search events by title, location, or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md transition-all text-lg"
              />
            </div>
            
            <div className="flex justify-center gap-4 mt-2">
              <button 
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${filter === 'all' ? 'bg-white text-[#962241]' : 'bg-white/10 text-white hover:bg-white/20 border border-white/30'}`}
              >
                All Events
              </button>
              <button 
                onClick={() => setFilter('upcoming')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${filter === 'upcoming' ? 'bg-[#2b6338] text-white' : 'bg-white/10 text-white hover:bg-white/20 border border-white/30'}`}
              >
                Upcoming
              </button>
              <button 
                onClick={() => setFilter('past')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${filter === 'past' ? 'bg-[#962241] text-white' : 'bg-white/10 text-white hover:bg-white/20 border border-white/30'}`}
              >
                Past
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">No events found matching your search.</p>
            </div>
          ) : (
            <div className="grid gap-12">
              {filteredEvents.map((event, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row group border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                <div className="md:w-2/5 relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute top-6 left-6 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider ${event.status === 'upcoming' ? 'bg-[#2b6338]/90 text-white' : 'bg-white/90 text-[#962241]'}`}>
                    {event.status === 'upcoming' ? 'Upcoming Event' : 'Past Event'}
                  </div>
                </div>
                <div className="p-10 md:w-3/5 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <Users size={200} />
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6 font-mono text-sm">
                    <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full">
                      <Calendar size={16} className="text-[#962241]" />
                      <span className="font-semibold">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full">
                      <MapPin size={16} className="text-[#2b6338]" />
                      <span className="font-semibold">{event.location}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-[#962241] mb-4 leading-tight group-hover:text-[#2b6338] transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="inline-block bg-[#f9e8e8] text-[#962241] px-4 py-2 rounded-lg font-bold text-sm mb-8 w-fit border border-[#962241]/20">
                    Role: {event.role}
                  </div>
                  
                  <button className="inline-flex items-center gap-2 text-[#2b6338] font-bold hover:text-[#1e4627] transition-colors w-fit group/btn">
                    View Details <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;
