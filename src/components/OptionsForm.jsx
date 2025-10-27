import React, { useEffect, useMemo, useState } from 'react';
import { Sparkles } from 'lucide-react';

const chipBase =
  'shrink-0 px-3 py-2 rounded-full border text-sm transition-colors';

const SectionLabel = ({ children }) => (
  <h3 className="text-[13px] uppercase tracking-[0.12em] text-white/60 mb-2 mt-3">
    {children}
  </h3>
);

const OptionsForm = ({ onSettingsChange, onGenerate, loading, hasImage }) => {
  const [roomType, setRoomType] = useState('');
  const [theme, setTheme] = useState('');
  const [furniture, setFurniture] = useState('');
  const [budget, setBudget] = useState('');
  const [palette, setPalette] = useState('');
  const [ceiling, setCeiling] = useState('');
  const [wall, setWall] = useState('');
  const [floor, setFloor] = useState('');
  const [lighting, setLighting] = useState('');
  const [addons, setAddons] = useState([]);
  const [custom, setCustom] = useState('');

  const roomTypes = [
    'Bedroom',
    'Living Room',
    'Dining Room',
    'Kitchen',
    'Bathroom',
    'Home Office',
    'Balcony',
    'Lobby / Hallway',
    'Kids Room',
    'Walk-in Closet',
    'Home Theatre',
  ];

  const themes = [
    'Modern Luxury',
    'Minimalist',
    'Scandinavian',
    'Industrial',
    'Contemporary',
    'Bohemian',
    'Japandi',
    'Classic Indian',
    'Art Deco',
    'Rustic / Farmhouse',
    'Eclectic',
    'Futuristic',
  ];

  const furnitureTypes = [
    'Modular',
    'Wooden & Classic',
    'Upholstered / Comfort',
    'Designer / Statement',
    'Space-Saving',
    'Smart Furniture',
    'Vintage',
  ];

  const budgets = [
    '₹0–₹2 L (Basic)',
    '₹2 L–₹5 L (Mid-Range)',
    '₹5 L–₹10 L (Premium)',
    '₹10 L + (Luxury)'
  ];

  const palettes = [
    { name: 'Warm Neutrals', colors: ['#C6B299', '#DCCBBE', '#8B6E52'] },
    { name: 'Cool Greys', colors: ['#E5E7EB', '#9CA3AF', '#4B5563'] },
    { name: 'Earthy Tones', colors: ['#B08968', '#7F5539', '#E6CCB2'] },
    { name: 'Monochrome Black & White', colors: ['#000', '#777', '#fff'] },
    { name: 'Bold Vibrant', colors: ['#EF4444', '#22C55E', '#3B82F6'] },
    { name: 'Pastel Softs', colors: ['#FBCFE8', '#BFDBFE', '#BBF7D0'] },
    { name: 'Custom Color Picker', colors: ['#CBA65C', '#CBA65C', '#CBA65C'] },
  ];

  const ceilings = [
    'POP Ceiling',
    'Wooden Panels',
    'Cove Lighting',
    'False Ceiling with Recessed Lights',
    'Simple Flat',
    'No False Ceiling',
  ];

  const walls = [
    'Wooden Panel',
    'Fabric Acoustic',
    'Marble Slab Design',
    'MDF Pattern',
    'Wallpaper',
    'Plain Paint',
  ];

  const floors = [
    'Wooden Flooring',
    'Marble',
    'Vitrified Tiles',
    'Polished Concrete',
    'Vinyl / Laminate',
  ];

  const lightings = [
    'Warm Ambient',
    'Bright White',
    'Mood Lighting',
    'Decorative Chandeliers',
    'Spotlights',
    'Smart Lighting',
  ];

  const addonList = [
    'Include Plants',
    'Add Artwork',
    'Add Rugs / Carpets',
    'Include TV Unit',
    'Include Study Desk',
    'Include Bookshelf',
    'Add Storage / Wardrobe',
    'Include Mirrors',
  ];

  const canGenerate = hasImage && roomType && theme;

  const compiled = useMemo(() => ({
    roomType,
    theme,
    furniture,
    budget,
    palette,
    ceiling,
    wall,
    floor,
    lighting,
    addons,
    custom,
  }), [roomType, theme, furniture, budget, palette, ceiling, wall, floor, lighting, addons, custom]);

  useEffect(() => {
    onSettingsChange?.(compiled);
  }, [compiled, onSettingsChange]);

  const toggleAddon = (name) => {
    setAddons((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );
  };

  return (
    <section className="px-4 pb-6 pt-2 bg-[#0E0E0E] text-[#E8E6E3]">
      {/* Room Type */}
      <SectionLabel>Room Type</SectionLabel>
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {roomTypes.map((r) => (
          <button
            key={r}
            onClick={() => setRoomType(r)}
            className={
              `${chipBase} ${roomType === r ? 'border-[#CBA65C] bg-white/[0.07] text-[#E8E6E3]' : 'border-white/10 bg-white/[0.03] text-white/80'}`
            }
          >
            {r}
          </button>
        ))}
      </div>

      {/* Design Theme */}
      <SectionLabel>Design Theme</SectionLabel>
      <div className="grid grid-cols-2 gap-2">
        {themes.map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={`relative rounded-xl border ${
              theme === t ? 'border-[#CBA65C] bg-white/[0.08]' : 'border-white/10 bg-white/[0.04]'
            } px-3 py-3 text-left`}
          >
            <span className="block text-sm">{t}</span>
            <span className="mt-2 block h-1.5 rounded-full bg-gradient-to-r from-white/10 to-transparent" />
          </button>
        ))}
      </div>

      {/* Furniture Type */}
      <SectionLabel>Furniture Type</SectionLabel>
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {furnitureTypes.map((f) => (
          <button
            key={f}
            onClick={() => setFurniture(f)}
            className={
              `${chipBase} ${furniture === f ? 'border-[#CBA65C] bg-white/[0.07] text-[#E8E6E3]' : 'border-white/10 bg-white/[0.03] text-white/80'}`
            }
          >
            {f}
          </button>
        ))}
      </div>

      {/* Budget */}
      <SectionLabel>Budget Range</SectionLabel>
      <div className="grid grid-cols-2 gap-2">
        {budgets.map((b) => (
          <button
            key={b}
            onClick={() => setBudget(b)}
            className={`rounded-xl px-3 py-3 text-left border ${
              budget === b ? 'border-[#CBA65C] bg-white/[0.08]' : 'border-white/10 bg-white/[0.04]'
            }`}
          >
            <span className="text-sm">{b}</span>
          </button>
        ))}
      </div>

      {/* Color Palette */}
      <SectionLabel>Color Palette</SectionLabel>
      <div className="grid grid-cols-2 gap-2">
        {palettes.map((p) => (
          <button
            key={p.name}
            onClick={() => setPalette(p.name)}
            className={`rounded-xl border p-3 text-left ${
              palette === p.name ? 'border-[#CBA65C] bg-white/[0.08]' : 'border-white/10 bg-white/[0.04]'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              {p.colors.map((c, i) => (
                <span key={i} className="w-4 h-4 rounded-full border border-white/10" style={{ backgroundColor: c }} />
              ))}
            </div>
            <span className="text-sm">{p.name}</span>
          </button>
        ))}
      </div>

      {/* Ceiling */}
      <SectionLabel>Ceiling Design</SectionLabel>
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {ceilings.map((c) => (
          <button
            key={c}
            onClick={() => setCeiling(c)}
            className={
              `${chipBase} ${ceiling === c ? 'border-[#CBA65C] bg-white/[0.07] text-[#E8E6E3]' : 'border-white/10 bg-white/[0.03] text-white/80'}`
            }
          >
            {c}
          </button>
        ))}
      </div>

      {/* Wall */}
      <SectionLabel>Wall Paneling Type</SectionLabel>
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {walls.map((w) => (
          <button
            key={w}
            onClick={() => setWall(w)}
            className={
              `${chipBase} ${wall === w ? 'border-[#CBA65C] bg-white/[0.07] text-[#E8E6E3]' : 'border-white/10 bg-white/[0.03] text-white/80'}`
            }
          >
            {w}
          </button>
        ))}
      </div>

      {/* Floor */}
      <SectionLabel>Flooring Preference</SectionLabel>
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {floors.map((f) => (
          <button
            key={f}
            onClick={() => setFloor(f)}
            className={
              `${chipBase} ${floor === f ? 'border-[#CBA65C] bg-white/[0.07] text-[#E8E6E3]' : 'border-white/10 bg-white/[0.03] text-white/80'}`
            }
          >
            {f}
          </button>
        ))}
      </div>

      {/* Lighting */}
      <SectionLabel>Lighting Style</SectionLabel>
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {lightings.map((l) => (
          <button
            key={l}
            onClick={() => setLighting(l)}
            className={
              `${chipBase} ${lighting === l ? 'border-[#CBA65C] bg-white/[0.07] text-[#E8E6E3]' : 'border-white/10 bg-white/[0.03] text-white/80'}`
            }
          >
            {l}
          </button>
        ))}
      </div>

      {/* Addons */}
      <SectionLabel>Additional Elements</SectionLabel>
      <div className="grid grid-cols-2 gap-2">
        {addonList.map((a) => {
          const active = addons.includes(a);
          return (
            <button
              key={a}
              onClick={() => toggleAddon(a)}
              className={`rounded-xl border px-3 py-2 text-left text-sm ${
                active ? 'border-[#CBA65C] bg-white/[0.08]' : 'border-white/10 bg-white/[0.04]'
              }`}
            >
              {a}
            </button>
          );
        })}
      </div>

      {/* Custom Prompt */}
      <SectionLabel>Add any specific instructions (optional)</SectionLabel>
      <textarea
        value={custom}
        onChange={(e) => setCustom(e.target.value)}
        placeholder="Use a soft beige wall color with golden lighting accents."
        className="w-full min-h-[84px] rounded-xl bg-white/[0.04] border border-white/10 px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:border-[#CBA65C]"
      />

      {/* CTA */}
      <div className="mt-4">
        <button
          disabled={!canGenerate || loading}
          onClick={() => canGenerate && onGenerate?.(compiled)}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-full text-black font-semibold shadow-[0_0_40px_rgba(203,166,92,0.35)] transition-transform active:scale-[0.98] ${
            canGenerate && !loading
              ? 'bg-gradient-to-r from-[#CBA65C] to-amber-300 animate-[pulse_2s_ease-in-out_infinite]'
              : 'bg-white/20 text-white/70 cursor-not-allowed'
          }`}
          style={{
            backgroundImage: canGenerate && !loading ? undefined : undefined,
          }}
        >
          <Sparkles className="w-5 h-5" />
          {loading ? 'Designing your room…' : '✨ Generate Interiors'}
        </button>
      </div>
    </section>
  );
};

export default OptionsForm;
