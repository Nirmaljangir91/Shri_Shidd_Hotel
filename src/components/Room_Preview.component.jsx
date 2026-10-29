import { react } from "react";  
import { useState } from "react";
import ROOM_IMAGE from "../assets/room_preview.svg";

export default function RoomPreview() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section
      id="room-preview"
      aria-label="Hotel room preview"
      className="bg-[#fdf9ef] px-4 py-12 sm:px-8 lg:px-12"
    >
      <div className="group relative mx-auto max-w-[1400px] overflow-hidden bg-[#e8dfd0]">
        {/* Room image */}
        <img
          src={ROOM_IMAGE}
          alt="Interior preview of a luxury hotel bedroom"
          loading="lazy"
          decoding="async"
          className="block aspect-[2.2/1] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] max-sm:aspect-[4/3]"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-black/5 transition-colors group-hover:bg-black/10" />

        {/* Play button */}
        <button
          type="button"
          onClick={() => setIsPreviewOpen(true)}
          aria-label="Open room image preview"
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#171513] shadow-xl transition-transform duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <svg
            viewBox="0 0 24 24"
            className="ml-1 h-6 w-6 fill-current"
            aria-hidden="true"
          >
            <path d="M7 4.8a2 2 0 0 1 3-1.73l10 5.77a3.6 3.6 0 0 1 0 6.24l-10 5.77A2 2 0 0 1 7 19.12Z" />
          </svg>
        </button>
      </div>

      {/* Full-size image preview */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsPreviewOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Room image preview"
        >
          <button
            type="button"
            onClick={() => setIsPreviewOpen(false)}
            aria-label="Close preview"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl text-black"
          >
            ×
          </button>

          <img
            src={ROOM_IMAGE}
            alt="Full-size luxury hotel bedroom"
            className="max-h-[90vh] max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
