import React from "react";

const StudioLoader = () => {
  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center overflow-hidden bg-navy-deep selection:bg-transparent">
      {/* inline styles for premium animations */}
      <style>{`
        @keyframes text-reveal {
          0% { clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%); transform: translateY(20px); }
          20%, 80% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); transform: translateY(0); }
          100% { clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); transform: translateY(-20px); }
        }
        @keyframes line-sweep {
          0% { width: 0%; left: 50%; transform: translateX(-50%); opacity: 0;}
          20% { width: 150px; opacity: 1; }
          80% { width: 150px; opacity: 1; left: 50%; transform: translateX(-50%); }
          100% { width: 0%; left: 100%; transform: translateX(0); opacity: 0; }
        }
        @keyframes fade-in-out {
          0%, 100% { opacity: 0; }
          20%, 80% { opacity: 1; }
        }
        .animate-brand-text {
          animation: text-reveal 2.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }
        .animate-sweep-line {
          position: relative;
          animation: line-sweep 2.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }
        .animate-subtext {
          animation: fade-in-out 2.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }
      `}</style>
      {/* loader content block */}
      <div className="relative flex h-40 flex-col items-center justify-center text-center">
        {/* main brand reveal */}
        <h1 className="animate-brand-text font-display text-3xl font-light uppercase tracking-[0.25em] text-white md:text-5xl">
          Rehab Therapist
        </h1>
        {/* gold sweeping line */}
        <div className="animate-sweep-line absolute bottom-6 h-px bg-gold"></div>
        {/* fading subtext */}
        <div className="animate-subtext absolute bottom-0 text-[10px] font-bold uppercase tracking-[0.4em] text-white/50">
          Specialist Care
        </div>
      </div>
    </div>
  );
};

export default StudioLoader;
