import React, { useRef } from 'react';
import { Upload, Image as ImageIcon, RefreshCw } from 'lucide-react';

const UploadSection = ({ image, onImageChange }) => {
  const inputRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;
    const allowed = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!allowed.includes(file.type)) return;
    const reader = new FileReader();
    reader.onload = (e) => onImageChange(e.target?.result || null);
    reader.readAsDataURL(file);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer?.files?.[0];
    handleFile(file);
  };

  const onPick = (e) => {
    const file = e.target?.files?.[0];
    handleFile(file);
  };

  const triggerPick = () => inputRef.current?.click();

  return (
    <section className="px-4 py-6 bg-[#0E0E0E] text-[#E8E6E3]">
      <div
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border border-white/10 rounded-2xl p-4 bg-white/[0.03] backdrop-blur-sm flex flex-col items-center justify-center gap-3 min-h-[180px] relative overflow-hidden"
      >
        {!image ? (
          <>
            <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center">
              <Upload className="w-6 h-6 text-[#CBA65C]" />
            </div>
            <div className="text-center">
              <p className="text-[15px]">Drag & drop your room photo</p>
              <p className="text-xs text-white/60">JPG or PNG • High resolution recommended</p>
            </div>
            <button
              onClick={triggerPick}
              className="mt-1 px-4 py-2 rounded-full bg-gradient-to-r from-[#CBA65C] to-amber-300 text-black text-sm font-semibold shadow-[0_0_24px_rgba(203,166,92,0.35)] active:scale-[0.98]"
            >
              Tap to upload
            </button>
          </>
        ) : (
          <div className="w-full">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
              <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2 text-[10px] bg-black/50 px-2 py-1 rounded-full flex items-center gap-1">
                <ImageIcon className="w-3.5 h-3.5" /> Preview
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <button
                onClick={triggerPick}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/[0.06] border border-white/10 text-sm"
              >
                <RefreshCw className="w-4 h-4 text-[#CBA65C]" /> Replace Image
              </button>
              <p className="text-xs text-white/60">Tip: Wider photos work great</p>
            </div>
          </div>
        )}
        <input ref={inputRef} type="file" accept="image/png,image/jpeg" className="hidden" onChange={onPick} />
      </div>
    </section>
  );
};

export default UploadSection;
