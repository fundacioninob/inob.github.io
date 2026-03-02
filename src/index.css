@import 'tailwindcss';

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 25s linear infinite;
}

body {
  @apply text-gray-900 antialiased bg-[#f9e8e8];
}

/* Luxury Abstract Background (Shutterstock/Vecteezy Inspiration) */
.bg-luxury-abstract {
  position: relative;
  background-color: #4a0e1c; /* Deep dark red base */
  overflow: hidden;
}

.bg-luxury-abstract::before {
  content: '';
  position: absolute;
  inset: -10%;
  background-image: url('https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2000&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  opacity: 0.6;
  mix-blend-mode: screen;
  filter: blur(4px) contrast(1.2);
  z-index: 0;
}

.bg-luxury-abstract::after {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 10% 20%, rgba(150, 34, 65, 0.6) 0%, transparent 40%),
    radial-gradient(circle at 90% 80%, rgba(249, 232, 232, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(43, 99, 56, 0.2) 0%, transparent 60%),
    linear-gradient(180deg, rgba(74, 14, 28, 0.3) 0%, rgba(74, 14, 28, 0.8) 100%);
  z-index: 0;
}

.bg-luxury-abstract > * {
  position: relative;
  z-index: 1;
}

/* Vantage-inspired Shapes */
.shape-arch {
  border-radius: 9999px 9999px 2rem 2rem;
}

.shape-arch-inverted {
  border-radius: 2rem 2rem 9999px 9999px;
}

.shape-pill {
  border-radius: 9999px;
}

.glass-card {
  @apply bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)];
}
