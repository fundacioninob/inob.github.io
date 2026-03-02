import React from 'react';

const SponsorsMarquee = () => {
  // Replace these URLs with the actual sponsor logo URLs
  const sponsors = [
    "https://placehold.co/200x100/f9e8e8/962241?text=Sponsor+1",
    "https://placehold.co/200x100/f9e8e8/962241?text=Sponsor+2",
    "https://placehold.co/200x100/f9e8e8/962241?text=Sponsor+3",
    "https://placehold.co/200x100/f9e8e8/962241?text=Sponsor+4",
    "https://placehold.co/200x100/f9e8e8/962241?text=Sponsor+5",
    "https://placehold.co/200x100/f9e8e8/962241?text=Sponsor+6",
  ];

  return (
    <div className="py-12 bg-white border-y border-[#962241]/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h3 className="text-sm font-bold uppercase tracking-widest text-[#962241]/60">Our Sponsors & Collaborators</h3>
      </div>
      
      <div className="flex w-[200%] animate-marquee">
        {/* First set of logos */}
        <div className="flex w-1/2 justify-around items-center">
          {sponsors.map((logo, index) => (
            <div key={`sponsor-1-${index}`} className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <img src={logo} alt={`Sponsor ${index + 1}`} className="h-16 object-contain" />
            </div>
          ))}
        </div>
        {/* Second set of logos for seamless looping */}
        <div className="flex w-1/2 justify-around items-center">
          {sponsors.map((logo, index) => (
            <div key={`sponsor-2-${index}`} className="mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <img src={logo} alt={`Sponsor ${index + 1}`} className="h-16 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsMarquee;
