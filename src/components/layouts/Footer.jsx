import Container from "../Container";

const QUICK_LINKS = [
    { label: "About Us", href: "https://rehabtherapist.co.uk/about-us/" },
    { label: "Services", href: "https://rehabtherapist.co.uk/services/" },
    { label: "Locations", href: "https://rehabtherapist.co.uk/locations/" },
    { label: "Privacy Policy", href: "https://rehabtherapist.co.uk/privacy-policy/" },
];

const USEFUL_LINKS = [
    { label: "Blogs", href: "https://rehabtherapist.co.uk/blog/" },
    { label: "Case Managers", href: "https://rehabtherapist.co.uk/rehab-for-case-managers/" },
    { label: "Terms", href: "https://rehabtherapist.co.uk/terms/" },
    { label: "Cookie Policy", href: "https://rehabtherapist.co.uk/cookie-policy/" },
];

const SERVICE_LINKS = [
    { label: "Home Visit Physiotherapy", href: "https://rehabtherapist.co.uk/home-visit-physiotherapy/" },
    { label: "Elderly Rehabilitation", href: "https://rehabtherapist.co.uk/elderly-rehabilitation/" },
    { label: "Neurological Physiotherapy", href: "https://rehabtherapist.co.uk/neurological-physiotherapy/" },
    { label: "Stroke", href: "https://rehabtherapist.co.uk/stroke/" },
];

const SOCIALS = [
    { label: "f", name: "Facebook", href: "https://www.facebook.com/people/Rehab-Therapist/61558441404743/" },
    { label: "ig", name: "Instagram", href: "https://www.instagram.com/rehab.therapist" },
    { label: "in", name: "LinkedIn", href: "https://www.linkedin.com/company/rehab-therapist/" },
    { label: "yt", name: "YouTube", href: "https://www.youtube.com/@RehabTherapist-di5ud" },
];

// link column component
function LinkColumn({ title, links }) {
    return (
        <div>
        {/* column title */}
        <h4 className="mb-4.5 text-xs font-semibold uppercase tracking-wide text-white">{title}</h4>
        {/* links list */}
        <ul className="grid gap-2.5">
            {links.map((l) => (
            <li key={l.label}>
                <a href={l.href} className="text-sm text-white/75 hover:text-gold transition-colors">
                {l.label}
                </a>
            </li>
            ))}
        </ul>
        </div>
    );
    }

    export default function Footer() {
    return (
        <footer className="bg-navy-deep pt-15 text-white/80">
        <Container>
            {/* top section */}
            <div className="grid gap-10 border-b border-white/12 pb-12.5 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            
            {/* brand and contact info */}
            <div>
                <div className="mb-3 font-display text-xl text-white">Rehab Therapist</div>
                <p className="text-sm">
                Home based neurological, elderly physiotherapy and rehabilitation across the UK.
                </p>
                
                {/* semantic address tag for seo */}
                <address className="mt-3 text-sm not-italic">
                <a href="mailto:info@rehabtherapist.co.uk" className="hover:text-gold transition-colors">
                    info@rehabtherapist.co.uk
                </a>
                <br />
                <a href="tel:03305513660" className="hover:text-gold transition-colors">
                    0330 551 3660
                </a>
                </address>
                
                {/* social links */}
                <div className="mt-4.5 flex gap-3.5">
                {SOCIALS.map((s) => (
                    <a
                    key={s.name}
                    href={s.href}
                    aria-label={`visit our ${s.name} page`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-xs transition-all hover:border-gold hover:bg-gold hover:text-navy-deep"
                    >
                    {s.label}
                    </a>
                ))}
                </div>
            </div>

            {/* link columns */}
            <LinkColumn title="Quick Links" links={QUICK_LINKS} />
            <LinkColumn title="Useful Links" links={USEFUL_LINKS} />
            <LinkColumn title="Services Offered" links={SERVICE_LINKS} />
            </div>

            {/* bottom copyright section */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 py-6 text-xs text-white/55">
            <span>
                Copyright © 2026 Rehab Therapist – All Rights Reserved. KG Healthcare Ltd trading as REHAB THERAPIST
            </span>
            <span>Company Reg. No. 16221184</span>
            </div>
        </Container>
        </footer>
    );
}