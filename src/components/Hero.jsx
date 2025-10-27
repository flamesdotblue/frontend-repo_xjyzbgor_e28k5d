import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[56vh] min-h-[420px] overflow-hidden bg-[#0E0E0E]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient tint to improve text legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#0E0E0E]/90" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#CBA65C] to-amber-200/70 flex items-center justify-center shadow-[0_0_40px_rgba(203,166,92,0.35)]">
            <Sparkles className="w-5 h-5 text-black" />
          </div>
          <h1
            className="text-[22px] sm:text-2xl tracking-wide"
            style={{
              color: '#E8E6E3',
              fontFamily: 'Playfair Display, serif',
              letterSpacing: '0.02em',
            }}
          >
            Shadow Interiors AI
          </h1>
        </div>

        <p className="text-[#E8E6E3]/90 text-[18px] sm:text-[20px] font-medium leading-snug max-w-[22ch]">
          Transform your empty room into a designer masterpiece.
        </p>
        <p className="mt-2 text-[#E8E6E3]/70 text-sm max-w-[36ch]">
          Upload your room photo. Choose your dream style. Let AI do the magic.
        </p>
      </div>
    </section>
  );
};

export default Hero;
