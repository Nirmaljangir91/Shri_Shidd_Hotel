import { react } from "react";

import journal1 from "../assets/journal/img_1.svg";
import journal2 from "../assets/journal/img_2.svg";
import journal3 from "../assets/journal/img_3.svg";

const articles = [
  {
    id: 1,
    image: journal1,
    alt: "Hotel lobby and architectural interiors",
    title: "A Local Guide to the Neighbourhood",
    description:
      "Six things worth seeing, eating, and doing within walking distance of Shri Siddh.",
    date: "Oct 15, 2026",
    href: "#article-neighbourhood",
  },
  {
    id: 2,
    image: journal2,
    alt: "Peaceful hotel surroundings and architecture",
    title: "A Local Guide to the Neighbourhood",
    description:
      "Six things worth seeing, eating, and doing within walking distance of Shri Siddh.",
    date: "Oct 15, 2026",
    href: "#article-surroundings",
  },
  {
    id: 3,
    image: journal3,
    alt: "Breakfast tray served in a hotel room",
    title: "A Local Guide to the Neighbourhood",
    description:
      "Six things worth seeing, eating, and doing within walking distance of Shri Siddh.",
    date: "Oct 15, 2026",
    href: "#article-dining",
  },
];

function ArticleCard({ article }) {
  return (
    <article className="min-w-0">
      <a
        href={article.href}
        aria-label={`Read: ${article.title}`}
        className="group block overflow-hidden bg-[#eee7dc]"
      >
        <img
          src={article.image}
          alt={article.alt}
          loading="lazy"
          decoding="async"
          className="aspect-[1.65/1] w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
        />
      </a>

      <h3 className="mt-4 text-base font-bold leading-snug tracking-tight text-[#171513]">
        <a
          href={article.href}
          className="transition-colors hover:text-[#96652c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87939]"
        >
          {article.title}
        </a>
      </h3>

      <p className="mt-4 text-xs leading-[1.8] text-[#39352f]">
        {article.description}
      </p>

      <time
        dateTime="2026-10-15"
        className="mt-4 block text-[11px] text-[#39352f]"
      >
        {article.date}
      </time>
    </article>
  );
}

export default function Journal() {
  return (
    <section
      id="journal"
      aria-labelledby="journal-heading"
      className="bg-[#fdf9ef] px-5 py-16 text-[#171513] sm:px-8 sm:py-20 lg:px-[8.1%] lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section heading */}
        <div className="mb-8">
          <p className="text-sm font-normal uppercase tracking-wide">
            From Our Journal
          </p>

          <h2
            id="journal-heading"
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Stories Worth Staying For
          </h2>
        </div>

        {/* Journal cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
