import React, { useMemo, useState } from 'react';
import { Download, RefreshCw, Wand2 } from 'lucide-react';

const ResultSection = ({ beforeImage, resultImage, onNew, onVariation }) => {
  const [slider, setSlider] = useState(50);

  const hasResult = !!resultImage;

  const download = () => {
    if (!hasResult) return;
    const link = document.createElement('a');
    link.href = resultImage;
    link.download = 'shadow-interiors-ai.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clipStyle = useMemo(() => ({
    clipPath: `inset(0 ${100 - slider}% 0 0)`,
  }), [slider]);

  if (!beforeImage && !hasResult) return null;

  return (
    <section className="px-4 py-6 bg-[#0E0E0E] text-[#E8E6E3]">
      <h3 className="text-[15px] font-medium mb-3">Your Redesigned Room</h3>

      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-white/[0.03]">
        {/* Before image */}
        {beforeImage && (
          <img src={beforeImage} alt="Before" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        )}
        {/* After image with clip for comparison */}
        {hasResult && (
          <img
            src={resultImage}
            alt="After"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-300"
            style={clipStyle}
          />
        )}
        {/* Divider handle */}
        {hasResult && beforeImage && (
          <div className="absolute inset-y-0" style={{ left: `${slider}%` }}>
            <div className="w-0.5 h-full bg-white/60" />
          </div>
        )}
      </div>

      {hasResult && beforeImage && (
        <input
          type="range"
          min={0}
          max={100}
          value={slider}
          onChange={(e) => setSlider(Number(e.target.value))}
          className="w-full mt-3 accent-[#CBA65C]"
        />
      )}

      <div className="mt-4 grid grid-cols-3 gap-2">
        <button
          onClick={download}
          disabled={!hasResult}
          className={`flex items-center justify-center gap-2 py-2 rounded-full border text-sm ${
            hasResult ? 'border-[#CBA65C] bg-white/[0.07]' : 'border-white/10 bg-white/[0.03] text-white/60 cursor-not-allowed'
          }`}
        >
          <Download className="w-4 h-4 text-[#CBA65C]" /> Download
        </button>
        <button
          onClick={onVariation}
          disabled={!hasResult}
          className={`flex items-center justify-center gap-2 py-2 rounded-full border text-sm ${
            hasResult ? 'border-white/10 bg-white/[0.04]' : 'border-white/10 bg-white/[0.03] text-white/60 cursor-not-allowed'
          }`}
        >
          <Wand2 className="w-4 h-4 text-[#CBA65C]" /> Variation
        </button>
        <button
          onClick={onNew}
          className="flex items-center justify-center gap-2 py-2 rounded-full border text-sm border-white/10 bg-white/[0.04]"
        >
          <RefreshCw className="w-4 h-4 text-[#CBA65C]" /> New Design
        </button>
      </div>

      <p className="mt-4 text-center text-xs text-white/50">
        Powered by Shadow Interiors AI × Gemini Flash 2.5
      </p>
    </section>
  );
};

export default ResultSection;
