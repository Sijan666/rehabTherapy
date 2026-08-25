import Container from "../Container";
import Image from "../Image";

{/* insights data */}
const articles = [
    {
        date: "August 17, 2026",
        title: "Common Causes of Walking Problems in Older Adults",
        excerpt: "Walking problems in adults can start quietly. At first, it might be a slight change in the way someone walks…",
        img: "https://rehabtherapist.co.uk/wp-content/uploads/2026/08/blog-website-posters-45-300x196.png",
        href: "https://rehabtherapist.co.uk/common-causes-of-walking-problems-in-older-adults/",
    },
    {
        date: "August 10, 2026",
        title: "How Physiotherapy Helps Functional Neurological Disorder",
        excerpt: "FND is a condition that can affect walking, balance and coordination, strength and self-confidence…",
        img: "https://rehabtherapist.co.uk/wp-content/uploads/2026/08/blog-website-posters-44-300x196.png",
        href: "https://rehabtherapist.co.uk/how-physiotherapy-helps-functional-neurological-disorder/",
    },
    {
        date: "August 5, 2026",
        title: "Why Home-Based Rehab Matters in Spinal Cord Injury",
        excerpt: "A spinal cord injury can affect your balance, movement, strength, sitting balance and confidence…",
        img: "https://rehabtherapist.co.uk/wp-content/uploads/2026/08/blog-website-posters-43-300x196.png",
        href: "https://rehabtherapist.co.uk/why-home-based-rehab-matters-in-spinal-cord-injury/",
    },
];

export default function News() {
    return (
        <section className="bg-cream py-20 md:py-28 lg:py-32">
            <Container>
                {/* section heading */}
                <div className="flex flex-col items-center text-center">
                    <div className="mb-6 flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-gold-deep sm:text-xs">
                        <span aria-hidden="true" className="h-0.5 w-10 bg-gold-deep sm:w-12" />
                        insights
                        <span aria-hidden="true" className="h-0.5 w-10 bg-gold-deep sm:w-12" />
                    </div>
                    <h2 className="font-display text-4xl font-light leading-tight text-navy-deep sm:text-5xl lg:text-[52px]">
                        News & Articles
                    </h2>
                </div>
                {/* news grid layout */}
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                    {articles.map((article, index) => (
                        <a
                            key={index}
                            href={article.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex h-full flex-col bg-white shadow-lg shadow-navy-deep/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy-deep/10"
                        >
                            {/* image wrapper */}
                            <div className="relative aspect-16/10 overflow-hidden">
                                <Image 
                                    imgSrc={article.img} 
                                    alt={article.title} 
                                    className="h-full w-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0" 
                                />
                                <div className="absolute inset-0 bg-navy-deep/10 transition-opacity duration-500 group-hover:opacity-0" />
                            </div>
                            {/* article content */}
                            <div className="flex flex-1 flex-col justify-between p-8 sm:p-10">
                                <div>
                                    <div className="text-[11px] font-bold uppercase tracking-widest text-gold-deep">
                                        {article.date}
                                    </div>
                                    <h3 className="mt-4 font-display text-2xl font-light leading-snug text-navy-deep transition-colors duration-300 group-hover:text-gold-deep">
                                        {article.title}
                                    </h3>
                                    <p className="mt-5 text-sm font-light leading-relaxed text-navy-deep/70">
                                        {article.excerpt}
                                    </p>
                                </div>
                                {/* animated read more link */}
                                <div className="mt-10 flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-navy-deep transition-colors duration-300 group-hover:text-gold-deep sm:text-xs">
                                    read more
                                    <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-2">
                                        →
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </Container>
        </section>
    );
}