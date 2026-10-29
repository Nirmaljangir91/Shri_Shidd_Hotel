import { react } from "react";

import logo from "../assets/Shri_Siddh.svg";

const leftLinks = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "Services", href: "#services" },
  { label: "Dining", href: "#dining" },
];

const rightLinks = [
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

function NavLinks({ links, onClick, className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      {links.map((link) => (
        <a key={link.label} href={link.href} onClick={onClick}>
          {link.label}
        </a>
      ))}
    </div>
  );
}

const Navbar = () => {
    
  return (
    <header className=" absolute top-0 left-0 z-50 w-full bg-transparent h-35" >
      <nav className=" bg-transparent   w-full gap-2 flex items-center justify-center text-white text-2xl font-sans">
        <div className="nav-links left-links px-5 py-5 ">
          <NavLinks
            links={leftLinks}
            className="flex items-center justify-center gap-20 color-white "
          />
        </div>

        {/* logo */}
        <a
          href="#Home"
          className="flex justify-center items-center"
          aria-label="Shri siddh "
        >
          <img
            src={logo}
            alt="Shri Siddh"
            className="block h-auto w-[230px] max-w-full object-contain mx-15"
          />
        </a>

        <div className="nav-links  right-links ">
          <NavLinks
            links={rightLinks}
            className="flex items-center justify-center gap-20"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
