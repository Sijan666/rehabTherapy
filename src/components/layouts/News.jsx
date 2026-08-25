import Container from "../Container";
import Image from "../Image";

{/* insights data */}
const articles = [
    {
        date: "August 17, 2026",
        title: "Common Causes of Walking Problems in Older Adults",
        excerpt: "Walking problems in adults can start quietly. At first, it might be a slight change in the way someone walks…",
        img: "https://rehabtherapist.co.uk/wp-content/uploads/2026/08/blog-website-posters-45-300x196.png",
        href: "",
    },
    {
        date: "August 10, 2026",
        title: "How Physiotherapy Helps Functional Neurological Disorder",
        excerpt: "FND is a condition that can affect walking, balance and coordination, strength and self-confidence…",
        img: "https://rehabtherapist.co.uk/wp-content/uploads/2026/08/blog-website-posters-44-300x196.png",
        href: "",
    },
    {
        date: "August 5, 2026",
        title: "Why Home-Based Rehab Matters in Spinal Cord Injury",
        excerpt: "A spinal cord injury can affect your balance, movement, strength, sitting balance and confidence…",
        img: "https://rehabtherapist.co.uk/wp-content/uploads/2026/08/blog-website-posters-43-300x196.png",
        href: "",
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
                {/* grid layout */}
                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {articles.map((article, index) => (
                        <a
                            key={index}
                            href={article.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex h-full flex-col bg-navy-deep border border-transparent transition-colors duration-500 hover:border-gold-deep"
                        >
                            {/* image wrapper */}
                            <div className="relative aspect-16/10 overflow-hidden bg-navy-deep">
                                <Image 
                                    imgSrc={article.img} 
                                    alt={article.title} 
                                    className="h-full w-full object-cover opacity-70 transition-opacity duration-500 ease-out group-hover:opacity-100" 
                                />
                            </div>
                            {/* article content */}
                            <div className="flex flex-1 flex-col justify-between p-8 sm:p-10">
                                <div>
                                    <div className="text-[11px] font-bold uppercase tracking-widest text-gold-deep">
                                        {article.date}
                                    </div>
                                    <h3 className="mt-4 font-display text-2xl font-light leading-snug text-white transition-colors duration-300 group-hover:text-gold-deep">
                                        {article.title}
                                    </h3>
                                    <p className="mt-5 text-sm font-light leading-relaxed text-white/60">
                                        {article.excerpt}
                                    </p>
                                </div>
                                {/* simple text action without moving parts */}
                                <div className="mt-10 flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-white/50 transition-colors duration-300 group-hover:text-gold-deep sm:text-xs">
                                    read full article
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </Container>
        </section>
    );
}