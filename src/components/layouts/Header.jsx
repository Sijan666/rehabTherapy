import { useState } from "react";
import Container from "../Container";
import Button from "../Button";

export default function Header() {
  // mobile menu state
    const [open, setOpen] = useState(false);

    // menu close handler
    const closeMenu = () => setOpen(false);

    return (
        <header className="sticky top-0 z-50 border-b border-line/80 bg-cream/90 backdrop-blur-md">
        <Container className="flex items-center justify-between py-4">
            {/* logo area */}
            <a 
            href="#top" 
            aria-label="rehab therapist home" 
            className="font-display text-xl font-bold text-navy-deep"
            >
            Rehab <span className="text-gold-deep">Therapist</span>
            </a>
            {/* main navigation */}
            <nav
            aria-label="primary navigation"
            className={`fixed inset-y-0 right-0 z-50 flex w-[70%] max-w-xs flex-col justify-center gap-7 bg-navy-deep px-8 transition-transform duration-300 md:static md:w-auto md:max-w-none md:flex-row md:items-center md:gap-9 md:bg-transparent md:px-0 md:translate-x-0 ${
                open ? "translate-x-0" : "translate-x-full"
            }`}
            >
            {/* nav links */}
            <a
                href="#about"
                onClick={closeMenu}
                className="group relative text-base font-semibold text-white md:text-sm md:text-navy"
            >
                About
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold-deep transition-all duration-300 group-hover:w-full" />
            </a>
            <a
                href="#services"
                onClick={closeMenu}
                className="group relative text-base font-semibold text-white md:text-sm md:text-navy"
            >
                Services
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold-deep transition-all duration-300 group-hover:w-full" />
            </a>
            <a
                href="#conditions"
                onClick={closeMenu}
                className="group relative text-base font-semibold text-white md:text-sm md:text-navy"
            >
                What We Treat
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold-deep transition-all duration-300 group-hover:w-full" />
            </a>
            <a
                href="#locations"
                onClick={closeMenu}
                className="group relative text-base font-semibold text-white md:text-sm md:text-navy"
            >
                Locations
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold-deep transition-all duration-300 group-hover:w-full" />
            </a>
            </nav>
            {/* right side actions */}
            <div className="flex items-center gap-4">
            {/* callable phone number */}
            <a 
                href="tel:03305513660" 
                aria-label="call us at 0330 551 3660" 
                className="hidden text-sm font-bold text-navy-deep md:inline hover:text-gold-deep transition-colors"
            >
                0330 551 3660
            </a>
            {/* cta button */}
            <Button 
                href="#contact-section" 
                className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-lg"
            >
                Enquire Now
            </Button>
            {/* mobile menu toggle */}
            <button
                aria-label="toggle mobile menu"
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
                className="text-2xl text-navy-deep md:hidden cursor-pointer"
            >
                {open ? "✕" : "☰"}
            </button>
            </div>
        </Container>
        </header>
    );
}