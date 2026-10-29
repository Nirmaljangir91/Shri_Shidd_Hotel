import { react } from "react";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Sophie Andersen",
    location: "Copenhagen, Denmark",
    room: "Deluxe Room",
    text: "Everything about the stay was considered. The room was quiet, the bed was perfect, and the staff never made us feel like we were asking for too much.",
  },
  {
    id: 2,
    name: "Oliver Bennett",
    location: "London, United Kingdom",
    room: "Classic Room",
    text: "Beautiful interiors, excellent hospitality, and a peaceful atmosphere. Every detail made our stay comfortable and memorable.",
  },
  {
    id: 3,
    name: "Emma Wilson",
    location: "Melbourne, Australia",
    room: "Deluxe Room",
    text: "The rooms were spotless, the food was wonderful, and the staff went above and beyond to make us feel welcome.",
  },
  {
    id: 4,
    name: "Lucas Martin",
    location: "Paris, France",
    room: "Penthouse Suite",
    text: "A wonderful hotel with elegant rooms and thoughtful service. We enjoyed every moment and would happily return.",
  },
  {
    id: 5,
    name: "Isabella Rossi",
    location: "Rome, Italy",
    room: "Classic Room",
    text: "From check-in to checkout, everything felt effortless. The room was beautiful, comfortable, and exceptionally well maintained.",
  },
  {
    id: 6,
    name: "Arjun Sharma",
    location: "Jaipur, India",
    room: "Deluxe Room",
    text: "Warm hospitality, a lovely atmosphere, and excellent service. The team made our family trip feel truly special.",
  },
];

const StarRating = () => (
  <div
    className="flex gap-0.5 text-3xl leading-none text-[#B8833D]"
    aria-label="5 out of 5 stars"
  >
    {Array.from({ length: 5 }, (_, index) => (
      <span key={index} aria-hidden="true">
        ★
      </span>
    ))}
  </div>
);

function ReviewCard({ review }) {
  return (
    <article className="flex h-full min-h-[300px] flex-col border border-[#e3d4b1] p-5 sm:p-6">
      <StarRating />

      <p className="mt-5 text-[13px] leading-[1.65] text-[#201d18]">
        {review.text}
      </p>

      <div className="mt-auto pt-5 text-[13px] font-semibold leading-[1.65] text-[#171513]">
        <p>{review.name}</p>
        <p>{review.location}</p>
        <p className="mt-1">Stayed at</p>
        <p>{review.room}</p>
      </div>
    </article>
  );
}

export default function GuestReviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleCount = 4;
  const maxIndex = Math.max(0, reviews.length - visibleCount);

  const goTo = (index) => {
    setActiveIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  const progress = maxIndex === 0 ? 100 : (activeIndex / maxIndex) * 100;

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="overflow-hidden border-t-2 border-[#45b6ff] bg-[#FFF2D0] px-5 py-12 text-[#171513] sm:px-8 sm:py-14 lg:px-[5.4%] lg:py-12"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Heading and rating summary */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm font-normal uppercase tracking-wide">
              Guest Reviews
            </p>

            <h2
              id="reviews-heading"
              className="mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl"
            >
              What Guests Say
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 lg:pt-1">
            <div className="flex text-lg tracking-[-3px] text-[#B8833D]" aria-hidden="true">
              ★★★★★
            </div>

            <span className="whitespace-nowrap text-base font-bold">
              4.9 out of 5
            </span>

            <span className="text-base font-medium tracking-tight">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>

            <span className="text-xs font-semibold">
              <span className="text-emerald-600">★</span> Trustpilot
            </span>

            <span className="text-xs font-semibold">
              <span className="text-emerald-600">◉</span> Tripadvisor
            </span>

            <span className="text-base font-bold tracking-tight text-[#24539A]">
              Booking<span className="text-[#2996df]">.com</span>
            </span>
          </div>
        </div>

        {/* Review slider */}
        <div className="mt-10 overflow-hidden sm:mt-12">
          <div
            className="grid grid-flow-col auto-cols-[85%] gap-5 transition-transform duration-500 ease-in-out sm:auto-cols-[calc((100%-1.25rem)/2)] lg:auto-cols-[calc((100%-4.5rem)/4)] lg:gap-6"
            style={{
              transform: `translateX(calc(${activeIndex} * (-1 * (100% + 1.5rem) / 4)))`,
            }}
          >
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>

        {/* Slider controls */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous reviews"
            className="flex h-9 w-7 items-center justify-center text-3xl font-light transition hover:text-[#a87939] disabled:cursor-not-allowed disabled:opacity-40"
          >
            ‹
          </button>

          {/* Progress track */}
          <button
            type="button"
            onClick={() => goTo(activeIndex === maxIndex ? 0 : activeIndex + 1)}
            aria-label="Advance to next review position"
            className="relative h-8 w-40 cursor-pointer sm:w-64"
          >
            <span className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-[#ddcda9]" />
            <span
              className="absolute left-0 top-1/2 h-[3px] -translate-y-1/2 bg-[#171513] transition-all duration-300"
              style={{
                width: `${100 / (maxIndex + 1)}%`,
                transform: `translateX(${progress * (1 - 1 / (maxIndex + 1))}%) translateY(-50%)`,
              }}
            />
          </button>

          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === maxIndex}
            aria-label="Next reviews"
            className="flex h-9 w-7 items-center justify-center text-3xl font-light transition hover:text-[#a87939] disabled:cursor-not-allowed disabled:opacity-40"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
