import React from 'react';
import { useNavigate } from 'react-router-dom';

const PremiumError = ({ errorCode = "404", title = "Page Not Found" }) => {
    const navigate = useNavigate();

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-deep px-6 text-white">
            {/* subtle background grid */}
            <div className="pointer-events-none absolute inset-0 grid grid-cols-4 opacity-20">
                <div className="h-full border-r border-white/10" />
                <div className="h-full border-r border-white/10" />
                <div className="h-full border-r border-white/10" />
                <div className="h-full" />
            </div>
            <div className="pointer-events-none absolute inset-0 grid grid-rows-4 opacity-20">
                <div className="w-full border-b border-white/10" />
                <div className="w-full border-b border-white/10" />
                <div className="w-full border-b border-white/10" />
                <div className="w-full" />
            </div>
            {/* glowing gold accent */}
            <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-gold/20 blur-[100px] duration-6000" />
            {/* main content block */}
            <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-between gap-12 border-y border-white/10 py-16 md:flex-row md:gap-8 md:py-24">
                {/* error code side */}
                <div className="relative flex select-none flex-col items-start">
                    <span className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
                        system error
                    </span>
                    <h1 className="font-display text-[120px] font-light leading-none text-white md:text-[180px]">
                        {errorCode}
                    </h1>
                    <div className="absolute -bottom-4 right-0 border border-white/20 bg-navy-deep px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white md:-right-8">
                        page lost
                    </div>
                </div>
                {/* details & actions side */}
                <div className="flex w-full max-w-md flex-col justify-between border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
                    <div>
                        <h2 className="mb-4 font-display text-2xl font-light text-white md:text-3xl">
                        {title}
                        </h2>
                        <p className="mb-10 text-sm font-light leading-relaxed text-white/70">
                        The page you are looking for has been moved, archived, or no longer exists. Let's guide you back to our specialized care.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <button 
                        onClick={() => navigate('/')}
                        className="w-full cursor-pointer bg-gold px-6 py-4 text-xs font-bold uppercase tracking-widest text-navy-deep transition-colors duration-300 hover:bg-white"
                        >
                        return to home
                        </button>
                        <button 
                        onClick={() => navigate('/services')}
                        className="w-full cursor-pointer border border-white/30 bg-transparent px-6 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-navy-deep"
                        >
                        view our services
                        </button>
                    </div>
                </div>
            </div>
            {/* footer watermarks */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-white/40">
                <span>© REHAB THERAPIST</span>
                <span className="hidden sm:inline">SPECIALIST CARE</span>
            </div>
        </div>
    );
};

export default PremiumError;