
import HOTEL from "../assets/Building_img.svg";

export default function OurStory() {
  return (
    <section
      id="about"
      aria-labelledby="story-heading"
      className="overflow-hidden bg-[#fdf9ef]"
    >
      <div className="grid grid-cols-1 items-center md:grid-cols-2">
        {/* Left: Story content */}
        <div className="flex items-center px-6 py-16 ml-55 sm:px-12 md:px-14 lg:px-20 xl:px-24">
          <div className="max-w-md">
            <p className="text-sm font-normal uppercase tracking-wide text-[#29251f]">
              Our Story
            </p>

            <h2
              id="story-heading"
              className="mt-5 text-3xl font-bold tracking-tight text-[#171513] sm:text-4xl"
            >
              A Hotel Built to Last
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-[1.8] text-[#39352f]">
              We believe a great stay comes down to three things: the
              right room, honest food, and a team that genuinely cares.
              Independently owned and locally rooted since 2009.
            </p>

            <a
              href="#about-details"
              className="mt-8 inline-flex items-center gap-1 bg-gradient-to-r from-[#edbd65] via-[#bd8845] to-[#6c431f] px-6 py-4 text-xs font-semibold text-white transition-opacity duration-300 hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a87939]"
            >
              Our Story <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Right: Complete hotel image */}
        <div className="flex w-full items-center justify-center p-4 sm:p-6 md:p-4 lg:p-6">
          <img
            src={HOTEL}
            alt="Exterior architecture of Shri Siddh Hotel"
            loading="lazy"
            decoding="async"
            className="block h-auto max-h-[700px] w-full object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
}
