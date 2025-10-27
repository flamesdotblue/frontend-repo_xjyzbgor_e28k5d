import React, { useMemo, useState } from 'react';
import Hero from './components/Hero';
import UploadSection from './components/UploadSection';
import OptionsForm from './components/OptionsForm';
import ResultSection from './components/ResultSection';

function App() {
  const [image, setImage] = useState(null);
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const canGenerate = useMemo(() => !!image && settings?.roomType && settings?.theme, [image, settings]);

  const compilePrompt = (s) => {
    const parts = [];
    parts.push(`Redesign this uploaded image of a ${s.roomType || ''} in ${s.theme || ''} style`);
    if (s.furniture) parts.push(`using ${s.furniture} furniture`);
    if (s.palette) parts.push(`and ${s.palette} colors`);
    if (s.budget) parts.push(`within a ${s.budget} budget`);
    const rest = [s.ceiling && `Apply ${s.ceiling}`, s.wall && `${s.wall} walls`, s.floor && `${s.floor} flooring`, s.lighting && `${s.lighting}`]
      .filter(Boolean)
      .join(', ');
    if (rest) parts.push(rest + '.');
    if (s.addons?.length) parts.push(`Include optional elements: ${s.addons.join(', ')}`);
    parts.push('Maintain the room’s base structure (doors, windows, wall layout).');
    if (s.custom) parts.push(s.custom);
    return parts.join(', ');
  };

  const simulateGeneration = async () => {
    // This mock simulates an instant result by softly enhancing the uploaded image.
    // In production, call your backend /generate and set the returned base64 image.
    setLoading(true);
    const _prompt = compilePrompt(settings);
    console.log('[Shadow Interiors Prompt]', _prompt);
    await new Promise((r) => setTimeout(r, 1400));
    setResult(image); // Replace with model output in real integration
    setLoading(false);
  };

  const handleGenerate = () => {
    if (!canGenerate || loading) return;
    simulateGeneration();
  };

  const handleVariation = () => {
    if (!result) return;
    simulateGeneration();
  };

  const handleNew = () => {
    setImage(null);
    setResult(null);
    setSettings({});
    setLoading(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-[#E8E6E3] font-inter">
      <Hero />

      <main className="max-w-screen-sm mx-auto">
        <UploadSection image={image} onImageChange={setImage} />
        <OptionsForm
          hasImage={!!image}
          loading={loading}
          onSettingsChange={setSettings}
          onGenerate={handleGenerate}
        />

        <ResultSection
          beforeImage={image}
          resultImage={result}
          onNew={handleNew}
          onVariation={handleVariation}
        />
      </main>

      {loading && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-5 text-center shadow-xl">
            <div className="mx-auto mb-3 h-8 w-8 rounded-full border-2 border-[#CBA65C]/50 border-t-transparent animate-spin" />
            <p className="text-sm">Shadow Interiors is designing your dream room…</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
