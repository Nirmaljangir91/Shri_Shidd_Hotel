
import suiteImage from "../assets/facilities-img/Suites.svg";
import banquetImage from "../assets/facilities-img/Banquethall.svg";
import poolImage from "../assets/facilities-img/Pool.svg";
import conferenceImage from "../assets/facilities-img/Confrenceroom.svg";
import staffImage from "../assets/facilities-img/Staff.svg";

const facilities = [
  {
    id: 1,
    title: "Exclusive Suites",
    description:
      "Experience refined luxury in elegantly designed suites with premium comfort and exceptional privacy.",
    image: suiteImage,
    alt: "Elegant luxury hotel suite",
  },
  {
    id: 2,
    title: "Banquet Hall",
    description:
      "Stay connected with complimentary high-speed Wi-Fi throughout your stay.",
    image: banquetImage,
    alt: "Elegant hotel banquet hall",
  },
  {
    id: 3,
    title: "Infinity Pools",
    description:
      "Relax in stunning infinity pools with breathtaking views and a serene atmosphere.",
    image: poolImage,
    alt: "Hotel swimming pool",
  },
  {
    id: 4,
    title: "Conference Room",
    description:
      "Rejuvenate your mind and body with soothing spa treatments and wellness experiences.",
    image: conferenceImage,
    alt: "Hotel conference and meeting room",
  },
  {
    id: 5,
    title: "24/7 Hotel Staff",
    description:
      "Enjoy round-the-clock assistance from our dedicated team, always ready to make your stay exceptional.",
    image: staffImage,
    alt: "Shri Siddh Hotel staff",
  },
];

function FacilityCard({ facility }) {
  return (
    <article className="group min-w-0">
      <div className="overflow-hidden bg-[#eee7dc]">
        <img
          src={facility.image}
          alt={facility.alt}
          loading="lazy"
          decoding="async"
          width="320"
          height="370"
          className="aspect-[0.85/1] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
        />
      </div>

      <h3 className="mt-5 text-lg font-bold tracking-tight text-[#171513]">
        {facility.title}
      </h3>

      <p className="mt-3 text-xs leading-[1.8] text-[#39352f] sm:text-sm">
        {facility.description}
      </p>
    </article>
  );
}

export default function Facilities() {
  return (
    <section
      id="facilities"
      aria-labelledby="facilities-heading"
      className="bg-[#fdf9ef] px-5 py-16 text-[#171513] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Section heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-normal uppercase tracking-wide">
              Hotel Facilities
            </p>

            <h2
              id="facilities-heading"
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Our Luxorefi Hotel Facilities
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#39352f] md:pb-1">
            This luxury hotel serves as the perfect retreat for both
            leisure and business guests.
          </p>
        </div>

        {/* Facilities grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
          {facilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </div>
    </section>
  );
}
