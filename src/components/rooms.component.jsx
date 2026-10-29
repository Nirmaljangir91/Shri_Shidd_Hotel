import { react } from "react";
import { memo, useState } from "react";

import room_1 from "../assets/room_1.svg";
import room_2 from "../assets/room_2.svg";
import room_3 from "../assets/room_3.svg";

const ROOMS = [
  {
    id: "classic",
    category: "Standard",
    name: "Classic Room",
    price: 1999,
    image: room_1,
    imageAlt: "Classic hotel room with a comfortable bed",
    size: "90 Sq Ft",
    beds: "1 Bed",
    guests: "3 Sleeps",
  },
  {
    id: "deluxe",
    category: "Deluxe",
    name: "Deluxe Room",
    price: 3999,
    image: room_2,
    imageAlt: "Deluxe hotel room with elegant interior design",
    size: "90 Sq Ft",
    beds: "1 Bed",
    guests: "3 Sleeps",
  },
  {
    id: "penthouse",
    category: "Suite",
    name: "Penthouse Suite",
    price: 5999,
    image: room_3,
    imageAlt: "Luxury penthouse suite with a spacious interior",
    size: "90 Sq Ft",
    beds: "1 Bed",
    guests: "3 Sleeps",
  },
];

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN").format(price);

const FeatureIcon = memo(function FeatureIcon({ type }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-5 w-5 shrink-0",
    "aria-hidden": true,
  };

  if (type === "bed") {
    return (
      <svg {...commonProps}>
        <path d="M3 18v-7h18v7M3 14h18M5 11V7a2 2 0 0 1 2-2h3a3 3 0 0 1 3 3v3M3 18v2m18-2v2" />
      </svg>
    );
  }

  if (type === "size") {
    return (
      <svg {...commonProps}>
        <rect x="5" y="5" width="14" height="14" rx="1" />
        <path d="M3 3v4m0-4h4m14 18h-4m4 0v-4M3 21v-4m0 4h4m14-18v4m0-4h-4" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <circle cx="9" cy="7" r="3" />
      <circle cx="17" cy="8" r="2.5" />
      <circle cx="4" cy="10" r="2" />
      <path d="M3 20v-3a6 6 0 0 1 12 0v3m0-3a4.5 4.5 0 0 1 7 3m-20-5a4 4 0 0 1 3-3.8" />
    </svg>
  );
});

const RoomFeatures = memo(function RoomFeatures({
  size,
  beds,
  guests,
}) {
  const features = [
    { type: "bed", label: size },
    { type: "size", label: beds },
    { type: "guests", label: guests },
  ];

  return (
    <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-[#29251f] sm:gap-x-6">
      {features.map((feature) => (
        <li key={feature.type} className="flex items-center gap-1.5">
          <FeatureIcon type={feature.type} />
          <span>{feature.label}</span>
        </li>
      ))}
    </ul>
  );
});

const RoomCard = memo(function RoomCard({
  room,
  selected,
  onSelect,
}) {
  return (
    <article className="group min-w-0">
      {/* Room image */}
      <button
        type="button"
        onClick={() => onSelect(room.id)}
        aria-expanded={selected}
        aria-label={`${selected ? "Hide" : "View"} details for ${room.name}`}
        className="relative block w-full overflow-hidden bg-[#e8dfd0] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a87939]"
      >
        <img
          src={room.image}
          alt={room.imageAlt}
          width="900"
          height="850"
          loading="lazy"
          decoding="async"
          className="aspect-[1.05/1] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
        />

        <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/15">
          <span className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white text-base font-semibold text-black shadow-lg transition-transform duration-300 group-hover:scale-105">
            {selected ? "Close" : "View"}
          </span>
        </span>
      </button>

      {/* Room category and price */}
      <div className="mt-4 flex items-center justify-between gap-3 text-xs">
        <span className="text-[#514a40]">{room.category}</span>

        <span className="whitespace-nowrap">
          Start{" "}
          <strong>₹{formatPrice(room.price)}</strong>
          /night
        </span>
      </div>

      {/* Room title */}
      <h3 className="mt-2 text-lg font-bold tracking-tight">
        {room.name}
      </h3>

      {/* Room features */}
      <RoomFeatures
        size={room.size}
        beds={room.beds}
        guests={room.guests}
      />

      {/* Expandable details */}
      {selected && (
        <div className="mt-4 border-t border-[#d8cdbb] pt-4">
          <p className="text-sm leading-6 text-[#62594d]">
            Explore the {room.name} and contact us for availability,
            amenities, and booking details.
          </p>

          <a
            href={`#contact?room=${room.id}`}
            className="mt-3 inline-flex items-center bg-[#191713] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#493722] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87939]"
          >
            Enquire Now <span className="ml-2">→</span>
          </a>
        </div>
      )}
    </article>
  );
});

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomSelect = (roomId) => {
    setSelectedRoom((current) =>
      current === roomId ? null : roomId
    );
  };

  return (
    <section
      id="rooms"
      aria-labelledby="rooms-heading"
      className="bg-[#fdf9ef] px-5 py-16 text-[#151412] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1080px]">
        {/* Section heading */}
        <div className="mb-10 flex items-end justify-between gap-5 sm:mb-12">
          <div>
            <p className="mb-4 text-base font-normal tracking-tight">
              Rooms &amp; Suites
            </p>

            <h2
              id="rooms-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Find Your Room
            </h2>
          </div>

          <a
            href="#all-rooms"
            className="hidden shrink-0 bg-gradient-to-r from-[#edbd65] via-[#bd8845] to-[#6c431f] px-7 py-4 text-xs font-semibold text-white transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87939] sm:inline-flex"
          >
            View Rooms <span className="ml-1">→</span>
          </a>
        </div>

        {/* Responsive room grid */}
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {ROOMS.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              selected={selectedRoom === room.id}
              onSelect={handleRoomSelect}
            />
          ))}
        </div>

        
        <a
          href="#all-rooms"
          className="mt-8 inline-flex bg-gradient-to-r from-[#edbd65] to-[#8b5a2b] px-6 py-4 text-xs font-semibold text-white transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87939] sm:hidden"
        >
          View Rooms <span className="ml-1">→</span>
        </a>
      </div>
    </section>
  );
}
