import React from 'react';

const SponsorsMarquee = () => {
  // Replace these URLs with the actual sponsor logo URLs
  const sponsors = [
    "https://lh3.googleusercontent.com/pw/AP1GczM7wm_51wD0iZRJav-5XYFzQM2-ypH_CFlwnsVxb2gO810E7Z5LjoBY9t0TgD_m1cPJpLMUxfNVsMOu7IN5F5Lc76fU2RbQX_p-1iIwnqaZH3pZ1b5OwLkegJNJG6v5HU9KdIPQGfJHXeOZDI6o3ig=w1978-h679-s-no-gm",
    "https://lh3.googleusercontent.com/pw/AP1GczOTBfCOKkrPKUh8ICsLES4esIgRoWMzVC1neYmxxT1YXqD11KY7IAL6rYKbPOTthJv1_M50ClKcJKmWN2Yacd03SV-qrZPyUV2vaAitVA7y3n-hUGmvLrfw4Z34rJjJ9r0i4CbSQOp195pDPa3XAs0=w1678-h1070-s-no-gm",
    "https://lh3.googleusercontent.com/pw/AP1GczP0zrK8VAVRhBSi5XA0QBJ36gNgoEtx2Xx4XnEqQxe2gMGP87JG-R9F4kb3XrCw8ml0yLq9rQNi7B9aoGcF2au0hNxruKkh47VjZhmMjF3UW6XB0K5HRVhF4xe4O_cydq76apZaHrBvWzKpDHANiO4=w1345-h665-s-no-gm?authuser=4",
    "https://lh3.googleusercontent.com/pw/AP1GczN_ItEKmQ5qUyhzlk57Zy7F255de289k5PTOl-GJ7dy1rLyQTHHEQCxNKhmH2rkQAvxluaCyM2qP3sWqQmyvOFgd64uibZq7QVe0uXIIG-WbV5bqn0WG9PuJUz6OFOTMJZeiHrqIG4axVzNLxwUbMA=w1499-h859-s-no-gm",
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
