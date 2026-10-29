import { react } from "react";
import BG from "../assets/Hall_img.svg";

const services = [
  {
    id: "01",
    title: "Restaurant",
    description:
      "Seasonal ingredients, a considered wine list, and a dining room that is genuinely worth the visit.",
  },
  {
    id: "02",
    title: "Banquet Hall",
    description:
      "Secure underground parking with valet service, EV charging, and 24-hour security on each level.",
  },
  {
    id: "03",
    title: "Conference Room",
    description:
      "Same-day laundry, dry cleaning, and pressing for all garments. Drop off by 9am and back by evening.",
  },
  {
    id: "04",
    title: "Laundry and Parking",
    description:
      "A full-service spa with a pool, sauna, steam room, and a complete treatment menu for every guest.",
  },
];

function ServiceCard({ service }) {
  return (
    <article className="min-w-0 bg-white p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-4 lg:p-5">
      <span className="block text-2xl font-bold tracking-tight text-[#171717]">
        {service.id}
      </span>

      <h3 className="mt-3 text-lg font-bold tracking-tight text-[#171717] sm:text-base lg:text-lg">
        {service.title}
      </h3>

      <p className="mt-2 text-xs leading-[1.7] text-[#38342e]">
        {service.description}
      </p>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative bg-[#fdf9ef] pb-10 sm:pb-12"
    >
      {/* Background image */}
      <div
        className="h-[280px] w-full bg-cover bg-center bg-no-repeat sm:h-[340px] lg:h-[405px]"
        style={{ backgroundImage: `url(${BG})` }}
        aria-hidden="true"
      />

  
      <div className="relative z-10 mx-auto -mt-28 w-[92%] max-w-[920px] bg-[#fff1ce] px-5 py-7 sm:-mt-32 sm:px-7 sm:py-8 lg:-mt-36 lg:px-7 lg:py-8">
        <p className="text-sm font-normal tracking-tight text-[#29251f]">
          Hotel Services
        </p>

        <h2
          id="services-heading"
          className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#14110e] sm:text-4xl"
        >
          Everything You Need
        </h2>

        
        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
