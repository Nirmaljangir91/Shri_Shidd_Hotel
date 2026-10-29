import { react } from "react";
import BG from "../assets/HeroSection_bg.svg";




export default function Hero({ OnSearchSubmit }) {
  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-[#12100e] px-4 pb-6 pt-32 text-white sm:px-6"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG})` }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center pt-1 text-center">
        <p className="mb-5 text-2xl font-semibold  tracking-wide sm:text-base">
          Welcome to Shri Siddh Hotel
        </p>

        <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          A Place Truly Worth Staying
        </h1>

        <p className="mt-5 max-w-xl text-sm leading-6 text-white/90 sm:text-base">
          Rooms, suites, and villas designed for rest. Dining worth booking.
          <br className="hidden sm:block" />
          A team that anticipates before you ask.
        </p>

        {/* buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#rooms"
            className="bg-white px-7 py-4 text-sm font-semibold text-[#17130e] transition hover:bg-[#e8d3b0]"
          >
            View Rooms →
          </a>

          <a
            href="#about"
            className="border border-white/80 bg-black/10 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* form */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          OnSearchSubmit?.({
            checkIn: event.currentTarget.checkIn.value,
            checkOut: event.currentTarget.checkOut.value,
            guests: Number(event.currentTarget.guests.value),
          });
        }}
        className="relative z-10 mt-12 grid w-full max-w-5xl grid-cols-1 gap-3 bg-white p-4 text-black shadow-xl sm:grid-cols-2 lg:grid-cols-[1fr_1fr_0.9fr_auto] lg:gap-5 lg:p-5"
      >
        <label className="flex flex-col gap-2 border border-neutral-300 px-3 py-2 text-xs text-neutral-600">
          Check in Date
          <input
            type="date"
            name="checkIn"
            required
            className="w-full bg-transparent text-sm text-black outline-none"
          />
        </label>

        <label className="flex flex-col gap-2 border border-neutral-300 px-3 py-2 text-xs text-neutral-600">
          Check out Date
          <input
            type="date"
            name="checkOut"
            required
            className="w-full bg-transparent text-sm text-black outline-none"
          />
        </label>

        <label className="flex flex-col gap-2 border border-neutral-300 px-3 py-2 text-xs text-neutral-600">
          Guests
          <select
            name="guests"
            defaultValue="2"
            className="w-full bg-white text-sm text-black outline-none"
          >
            {[1, 2, 3, 4, 5, 6].map((guest) => (
              <option key={guest} value={guest}>
                {guest} {guest === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </label>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-[#35b94b] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#279b3a]"
        >
          Booking Enquiry →
        </button>
      </form>

   
      <div className="relative z-10 mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-semibold text-white sm:text-base">
        <span className="tracking-wider text-xl">★★★★★</span>
        <span>4.9 out of 5</span>
        <span>Google</span>
        <span>★ Trustpilot</span>
        <span>◉ Tripadvisor</span>
        <span className="font-bold">Booking.com</span>
      </div>
    </section>
  );
}
