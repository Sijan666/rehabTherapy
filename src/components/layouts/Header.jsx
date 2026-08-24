import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../Container";
import Button from "../Button";
import Image from "../Image";
import logo from "/logo.png";

export default function Header() {
    {/* router hook */}
    const navigate = useNavigate();
    
    {/* mobile menu state */}
    const [open, setOpen] = useState(false);

    {/* nav data */}
    const navItems = [
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "What We Treat", path: "/conditions" },
    ];

    {/* toggle handlers */}
    const closeMenu = () => setOpen(false);
    const handleNavigation = (path) => {
        navigate(path);
        closeMenu();
    };

    return (
        <>
            <header className="sticky top-0 z-40 w-full border-b border-line/80 bg-cream/95 py-3 backdrop-blur-xl transition-all duration-300 md:py-4">
                <Container className="flex items-center justify-between">
                    {/* logo */}
                    <Link to="/" onClick={closeMenu} className="block w-40 shrink-0 sm:w-48 md:w-52 lg:w-56">
                        <Image imgSrc={logo} alt="rehab therapist logo" className="h-auto w-full object-contain" />
                    </Link>
                    {/* desktop nav */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-6 lg:gap-8 xl:gap-10">
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <Link to={item.path} className="group relative text-[14px] font-medium text-navy-deep/85 transition-colors hover:text-navy-deep lg:text-[15px]">
                                        {item.name}
                                        <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-gold-deep transition-all duration-300 ease-out group-hover:w-full" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* right side actions */}
                    <div className="flex shrink-0 items-center justify-end gap-3 sm:gap-4 lg:gap-5">
                        {/* desktop phone */}
                        <a href="tel:03305513660" className="hidden text-[13px] font-semibold text-navy-deep transition-colors hover:text-gold-deep lg:block xl:text-[15px]">
                            0330 551 3660
                        </a>
                        {/* divider */}
                        <span className="hidden h-5 w-px bg-navy-deep/15 lg:block" />
                        {/* desktop cta */}
                        <div className="hidden md:block">
                            <Button 
                                onClick={() => handleNavigation("/contact")}
                                className="rounded-full bg-gold px-5 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-md xl:px-6 xl:text-[14px]"
                            >
                                Enquire Now
                            </Button>
                        </div>
                        {/* mobile menu toggle */}
                        <button
                            type="button"
                            aria-label="open menu"
                            aria-expanded={open}
                            onClick={() => setOpen(true)}
                            className="flex h-10 w-10 shrink-0 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full transition-colors hover:bg-black/5 md:hidden"
                        >
                            <span className="h-0.5 w-6 bg-navy-deep transition-all sm:w-7" />
                            <span className="h-0.5 w-6 bg-navy-deep transition-all sm:w-7" />
                            <span className="h-0.5 w-6 bg-navy-deep transition-all sm:w-7" />
                        </button>
                    </div>
                </Container>
            </header>
            {/* mobile overlay */}
            <div
                onClick={closeMenu}
                aria-hidden={!open}
                className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-all duration-300 md:hidden ${
                    open ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"
                }`}
            />
            {/* mobile drawer */}
            <aside
                aria-hidden={!open}
                className={`fixed top-0 right-0 z-60 flex h-dvh w-[88%] max-w-[400px] flex-col overflow-y-auto bg-cream px-6 py-6 shadow-2xl transition-transform duration-500 ease-[0.19,1,0.22,1] sm:w-[380px] sm:px-8 sm:py-8 md:hidden ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* drawer header */}
                <div className="flex items-center justify-between border-b border-line/70 pb-5">
                    <Link to="/" onClick={closeMenu} className="w-40 sm:w-44">
                        <Image imgSrc={logo} alt="rehab therapist logo" className="h-auto w-full object-contain" />
                    </Link>
                    <button
                        type="button"
                        aria-label="close menu"
                        onClick={closeMenu}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/5 text-navy-deep transition-all duration-300 hover:rotate-90 hover:bg-black/10"
                    >
                        <span className="text-xl leading-none">×</span>
                    </button>
                </div>
                {/* drawer navigation */}
                <nav className="flex flex-1 flex-col pt-8">
                    <ul className="flex flex-col gap-6 border-b border-line/70 pb-8">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link to={item.path} onClick={closeMenu} className="block text-xl font-medium tracking-tight text-navy-deep transition-colors duration-300 hover:text-gold-deep sm:text-2xl">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* drawer contact */}
                    <div className="flex flex-col gap-4 pt-8">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-deep/50 sm:text-xs">
                            Get in touch
                        </p>
                        <a href="tel:03305513660" className="w-fit text-lg font-bold text-navy-deep transition-colors hover:text-gold-deep sm:text-xl">
                            0330 551 3660
                        </a>
                        <Button 
                            onClick={() => handleNavigation("/contact")}
                            className="mt-2 w-full rounded-full bg-gold py-3 text-center text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-gold-deep hover:shadow-md sm:py-3.5 sm:text-[15px]"
                        >
                            Enquire Now
                        </Button>
                    </div>
                </nav>
                {/* drawer footer */}
                <div className="mt-8 border-t border-line/70 pt-5">
                    <p className="text-[11px] leading-relaxed text-navy-deep/50 sm:text-xs">
                        Professional rehabilitation care, tailored to your needs.
                    </p>
                </div>
            </aside>
        </>
    );
}