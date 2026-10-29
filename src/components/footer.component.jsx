import { react } from "react";
import { useState } from "react";

import logo from "../assets/Shri_Siddh.svg";
import footerArt from "../assets/footer_img.svg";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="18" cy="6" r="1.2" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M23 7a3 3 0 0 0-2.1-2.1C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7a31 31 0 0 0-.5 5 31 31 0 0 0 .5 5 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5A3 3 0 0 0 23 17a31 31 0 0 0 .5-5 31 31 0 0 0-.5-5ZM9.6 15.5v-7l6 3.5z" />
      </svg>
    ),
  },
];

const roomLinks = [
  {
    title: "Classic Room",
    links: ["Book for Two People", "Book for Three People", "Book for Four People"],
  },
  {
    title: "Deluxe Room",
    links: ["Book for Two People", "Book for Three People", "Book for Four People"],
  },
  {
    title: "Penthouse Suite",
    links: ["Book for Two People", "Book for Three People", "Book for Four People"],
  },
];

const navigation = [
  { label: "Rooms", href: "#rooms" },
  { label: "Services", href: "#services" },
  { label: "Dining", href: "#dining" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event) {
    event.preventDefault();
    if (!email.trim()) return;

    // Connect your newsletter API here.
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="overflow-hidden bg-[#FFF2D0] text-[#171513]">
      {/* Social links */}
      <div className="border-b border-[#e6d8b8] bg-[#fdf9ef]">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-5 px-5 py-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            FOLLOW US
          </h2>

          <div className="hidden h-px min-w-10 flex-1 bg-[#e6d8b8] lg:block" />

          <div className="flex items-center gap-4 sm:gap-7">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6d8b8] transition hover:bg-[#f1dfb5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87939]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-b border-[#e6d8b8]">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-8 sm:px-8 md:grid-cols-2 md:items-center lg:px-12 lg:py-10">
          <div className="flex items-center gap-5">
            <img
              src={logo}
              alt=""
              className="hidden h-16 w-16 shrink-0 object-contain sm:block"
            />

            <div>
              <h2 className="font-serif text-2xl font-bold">
                Stay Connected
              </h2>
              <p className="mt-3 max-w-md text-xs leading-[1.8]">
                Be the first to discover exclusive hotel offers, seasonal
                escapes, special packages, and memorable experiences.
                Subscribe to our newsletter for the latest updates and a
                little more inspiration for your next stay.
              </p>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Your email address
              </label>

              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSubscribed(false);
                }}
                placeholder="Enter your email address"
                className="min-w-0 flex-1 border border-[#ddcfb2] bg-white/80 px-4 py-3 text-xs outline-none transition focus:border-[#a87939]"
              />

              <button
                type="submit"
                className="shrink-0 bg-gradient-to-r from-[#edbd65] via-[#bd8845] to-[#6c431f] px-5 py-3 text-xs font-semibold text-white transition-opacity hover:opacity-85"
              >
                Subscribe &amp; Get 10% Off →
              </button>
            </form>

            <p aria-live="polite" className="mt-3 text-[10px] leading-relaxed">
              {subscribed
                ? "Thank you! Connect your newsletter service to complete your subscription."
                : "We value your privacy. Expect only exclusive updates, special offers, and inspiring news. Unsubscribe anytime."}
            </p>
          </div>
        </div>
      </div>

      {/* Brand story */}
      <div className="border-b border-[#e6d8b8] px-5 py-8 text-center sm:px-8 sm:py-10">
        <img
          src={logo}
          alt="Shri Siddh Hotel"
          className="mx-auto h-14 w-auto max-w-[260px] object-contain"
        />

        <h2 className="mt-4 text-base font-bold">
          A Hotel Built to Last
        </h2>

        <p className="mx-auto mt-3 max-w-4xl text-xs leading-6">
          We believe a great stay comes down to three things: the right room,
          honest food, and a team that genuinely cares. Independently owned
          and locally rooted since 2009.
        </p>

        <a
          href="#about"
          className="mt-4 inline-block border-b border-[#a88b5d] pb-1 text-xs transition-colors hover:text-[#96652c]"
        >
          Read Our Story →
        </a>
      </div>

      {/* Links and contact information */}
      <div className="border-b border-[#e6d8b8]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-5 py-8 text-xs sm:px-8 md:grid-cols-3 lg:grid-cols-6 lg:gap-6 lg:px-12 lg:py-10">
          {roomLinks.map((room) => (
            <div key={room.title}>
              <h3 className="font-bold">{room.title}</h3>
              <ul className="mt-1 space-y-1.5">
                {room.links.map((label) => (
                  <li key={label}>
                    <a href="#rooms" className="transition hover:underline">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-bold">Navigate</h3>
            <ul className="mt-1 space-y-1.5">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Address:</h3>
            <address className="mt-1 space-y-1.5 not-italic leading-relaxed">
              <p>C-8 - C-9, Hotel Shri Siddh,</p>
              <p>Krishna Sagar Colony, Dholai,</p>
              <p>Mansarovar, Jaipur, Rajasthan</p>
              <p className="pt-3">Ph no. +91-1234 567890</p>
              <p>Email: info@shrisiddh.com</p>
            </address>
          </div>

          <div>
            <h3 className="font-bold">Legal</h3>
            <ul className="mt-1 space-y-1.5">
              <li>
                <a href="#privacy" className="transition hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="transition hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-3 px-5 py-5 text-[11px] sm:flex-row sm:items-center sm:px-8 lg:px-12">
        <p>© {new Date().getFullYear()} Shri Siddh. All rights reserved.</p>
        <p>
          Crafted By : <span className="font-medium">Kontent Kraft Digital</span>
        </p>
      </div>

      {/* Decorative footer illustration */}
      <div className="h-28 w-full overflow-hidden sm:h-36 lg:h-40">
        <img
          src={footerArt}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-bottom"
        />
      </div>
    </footer>
  );
}
