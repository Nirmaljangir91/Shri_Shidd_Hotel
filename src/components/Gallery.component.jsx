
import { useEffect, useState } from "react";

// Replace these filenames with your existing asset filenames.
import gallery1 from "../assets/gallery-img/hotel.svg";
import gallery2 from "../assets/gallery-img/hall.svg";
import gallery3 from "../assets/gallery-img/hall_2.svg";
import gallery4 from "../assets/gallery-img/badroom.svg";
import gallery5 from "../assets/gallery-img/hall_3.svg";
import gallery6 from "../assets/gallery-img/dinning.svg";

const images = [
  { src: gallery1, alt: "Shri Siddh Hotel exterior", className: "col-span-2" },
  { src: gallery2, alt: "Luxury interior artwork", className: "" },
  { src: gallery3, alt: "Hotel reception feature wall", className: "" },
  { src: gallery4, alt: "Elegant hotel guest room", className: "" },
  { src: gallery5, alt: "Decorative luxury wall art", className: "" },
  { src: gallery6, alt: "Hotel restaurant and dining area", className: "col-span-2" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelected(null);

      if (event.key === "ArrowRight") {
        setSelected((current) => (current + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        setSelected((current) =>
          (current - 1 + images.length) % images.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  return (
    <section
      id="gallery"
      className="bg-[#fdf9ef] px-5 py-12 text-[#171513] sm:px-8 sm:py-16 lg:px-[8.2%] lg:py-20"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="mb-9 flex items-center justify-between gap-5">
          <div>
            <p className="text-sm uppercase tracking-wide">Gallery</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore Your Dream Hotel
            </h2>
          </div>

          <button
            type="button"
            onClick={() =>
              document
                .getElementById("gallery-grid")
                ?.scrollIntoView({ behavior: "smooth", block: "center" })
            }
            className="hidden shrink-0 bg-gradient-to-r from-[#edbd65] via-[#bd8845] to-[#6c431f] px-6 py-4 text-xs font-semibold text-white transition-opacity hover:opacity-85 sm:block"
          >
            View Gallery →
          </button>
        </div>

        {/* Gallery grid */}
        <div
          id="gallery-grid"
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-4"
        >
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`View image: ${image.alt}`}
              className={`group relative overflow-hidden bg-[#e8dfd0] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87939] ${
                index === 0 || index === 5
                  ? "col-span-2"
                  : "col-span-1"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  index === 0 || index === 5
                    ? "aspect-[1.65/1]"
                    : "aspect-[0.8/1]"
                }`}
              />

              <span className="absolute inset-0 flex items-end bg-black/0 p-4 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                <span className="text-sm font-medium text-white">
                  View Image ↗
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Image lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            aria-label="Close gallery"
            onClick={() => setSelected(null)}
            className="absolute right-5 top-5 text-4xl text-white hover:text-[#edbd65]"
          >
            ×
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              setSelected((selected - 1 + images.length) % images.length);
            }}
            className="absolute left-3 z-10 p-3 text-4xl text-white sm:left-8"
          >
            ‹
          </button>

          <img
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-h-[85vh] max-w-[85vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              setSelected((selected + 1) % images.length);
            }}
            className="absolute right-3 z-10 p-3 text-4xl text-white sm:right-8"
          >
            ›
          </button>

          <p className="absolute bottom-4 text-sm text-white/80">
            {selected + 1} / {images.length} — {images[selected].alt}
          </p>
        </div>
      )}
    </section>
  );
}
