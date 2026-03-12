import React from 'react';

const SponsorsMarquee = () => {
  // Replace these URLs with the actual sponsor logo URLs
  const sponsors = [
    "https://lh3.googleusercontent.com/pw/AP1GczM7wm_51wD0iZRJav-5XYFzQM2-ypH_CFlwnsVxb2gO810E7Z5LjoBY9t0TgD_m1cPJpLMUxfNVsMOu7IN5F5Lc76fU2RbQX_p-1iIwnqaZH3pZ1b5OwLkegJNJG6v5HU9KdIPQGfJHXeOZDI6o3ig=w1978-h679-s-no-gm",
    "https://lh3.googleusercontent.com/pw/AP1GczOTBfCOKkrPKUh8ICsLES4esIgRoWMzVC1neYmxxT1YXqD11KY7IAL6rYKbPOTthJv1_M50ClKcJKmWN2Yacd03SV-qrZPyUV2vaAitVA7y3n-hUGmvLrfw4Z34rJjJ9r0i4CbSQOp195pDPa3XAs0=w1678-h1070-s-no-gm",
    "https://lh3.googleusercontent.com/pw/AP1GczP0zrK8VAVRhBSi5XA0QBJ36gNgoEtx2Xx4XnEqQxe2gMGP87JG-R9F4kb3XrCw8ml0yLq9rQNi7B9aoGcF2au0hNxruKkh47VjZhmMjF3UW6XB0K5HRVhF4xe4O_cydq76apZaHrBvWzKpDHANiO4=w1345-h665-s-no-gm?authuser=4",
    "https://lh3.googleusercontent.com/pw/AP1GczN_ItEKmQ5qUyhzlk57Zy7F255de289k5PTOl-GJ7dy1rLyQTHHEQCxNKhmH2rkQAvxluaCyM2qP3sWqQmyvOFgd64uibZq7QVe0uXIIG-WbV5bqn0WG9PuJUz6OFOTMJZeiHrqIG4axVzNLxwUbMA=w1499-h859-s-no-gm",
    "https://lh3.googleusercontent.com/pw/AP1GczOhbtlk9RsmfcTQU1Wr3XGquACYvoOjAndZFTTUQfwo37i6ws-zfRBuVt8DsFQjnxlzSRZFb5lyZ3NdEyHwR8VsKhN20yekqnTkdqtr4J8zXFK35bt8C8hgJDZsALzpXUnoNJO8d-_2oOBqrSTGUBRF=w512-h350-s-no-gm?authuser=4",
    "https://lh3.googleusercontent.com/pw/AP1GczN3GEifWUk62QuELBdeUci6Cmt1XTqwUyeAo4yafXPv49YugHV8C36xLfAQvSre8MNCZrHN5WPIKLvF9RVpQzbf5T5noxJ09kGtjVCXH2mESix_SVkAy18crZiwUJFXXs_HdaDXZ8yjK9AjeVg-YGrn=w678-h301-s-no-gm?authuser=2",
    "https://lh3.googleusercontent.com/pw/AP1GczOPFFH1235CfpHBsTdzVYMQEqy2A2PjgVg--fyD6Dy_qRJcBE_KJEBJ55B1LBHrYMEIPB698_-LVDIl50KJ9gtfJF_JE62bgSyHjZVbnN_zHPEbgU5yFz3meLfNQBztbkQTre8X1cdFS_FhOMT-noKG=w1280-h716-s-no-gm?authuser=2",
    "https://lh3.googleusercontent.com/pw/AP1GczPDm4YlmDg2fjtP_xe3WB5fGCmsMoTwraofjaXOSS1Dqa8cUnK-jc372hf0Es-eFta9jSABkEuzJ8qv4TbFAIo2KEzM24_C5fa8CCCoDlkZPCjzNVqsKlyqAzq6UwvcDhkjVqgQv7ULPmC-ypNebWKg=w1046-h889-s-no-gm?authuser=2",
    "https://lh3.googleusercontent.com/pw/AP1GczOGj9q5LE6V-HbMbO246XZyNPSCmRKessm3eZ6efhh8O9Q4rvi7-b_Lo2DKOZSi60pFjb-mgVcs_uo1S5pb0LCFacv17SwLjbThIcyzu_Z4Z0otHWtoDIaUdA14iX1t1uPUBI2fD3rvQds03wsOYzan=w691-h411-s-no-gm?authuser=2"
  ];

  return (
    <div className="py-12 bg-white border-y border-[#962241]/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h3 className="text-sm font-bold uppercase tracking-widest text-[#962241]/60">Our Sponsors & Collaborators</h3>
      </div>
      
      <div className="flex w-max animate-marquee">
        {/* First set of logos */}
        <div className="flex items-center shrink-0">
          {sponsors.map((logo, index) => (
            <div key={`sponsor-1-${index}`} className="mx-8 shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <img src={logo} alt={`Sponsor ${index + 1}`} className="h-16 w-auto object-contain" />
            </div>
          ))}
        </div>
        {/* Second set of logos for seamless looping */}
        <div className="flex items-center shrink-0">
          {sponsors.map((logo, index) => (
            <div key={`sponsor-2-${index}`} className="mx-8 shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <img src={logo} alt={`Sponsor ${index + 1}`} className="h-16 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsMarquee;
