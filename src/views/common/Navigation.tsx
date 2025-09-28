"use client"; // Only needed in app router

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="bg-backgroundColor fixed top-0 w-full z-50 text-primary">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="text-xl font-bold">
          G6 Real Estate
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href={"/listings"}>Buying</Link>
          <Link href={"#contact"}>Selling</Link>
          <Link href={"#contact"}>Consultation or Construction Services</Link>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-6 bg-black transition ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-black transition ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-black transition ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="flex flex-col p-4 space-y-2">
          <Link onClick={closeMenu} href={"/listings"}>
            Buying
          </Link>
          <Link onClick={closeMenu} href={"#contact"}>
            Selling
          </Link>
          <Link onClick={closeMenu} href={"#contact"}>
            Consultation or Construction Services
          </Link>
        </div>
      </div>
    </nav>
  );
}
