"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logo from "../../public/assets/logo.svg";
import close from "../../public/assets/icon-close.svg";
import menu from "../../public/assets/icon-hamburger.svg";

const navLinks = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full z-50 ">
      <div className="max-w-7xl mx-auto w-full space-x-6 px-6 py-8 flex items-center justify-between">
        <Link href="/">
          <Image
            src={logo}
            alt="MyTeam Logo"
            width="168"
            height="90"
            quality={100}
          />
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between w-full lg:text-2xl text-xl font-semibold">
          <div className="flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[var(--text)] hover:text-primary transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div>
            <Link
              href="/contact"
              className="bg-[var(--hero-bg)] hover:bg-[var(--text)] text-[var(--text)] hover:text-[var(--hero-bg)] px-6 py-4 border-white border-4
               rounded-full  transition"
            >
              contact us
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden block" onClick={() => setIsOpen(true)}>
          <Image
            src={menu}
            alt="Hamburger"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 rounded-2xl bg-[var(--menu)] shadow-lg transform transition-transform duration-300 text-xl z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end px-12 py-12">
          <button onClick={() => setIsOpen(false)}>
            <Image
              src={close}
              alt="Close"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </button>
        </div>
        <div className="flex flex-col space-y-8 text-2xl px-8 py-8">
          {[...navLinks, { name: "contact us", href: "/contact" }].map(
            (link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  link.name === "contact us"
                    ? "bg-transparent hover:bg-[var(--text)] text-[var(--text)] hover:text-[var(--hero-bg)] px-6 py-4 border-white border-4 rounded-4xl text-center w-1/2"
                    : "text-[var(--text)] hover:text-primary"
                } transition cursor-pointer`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
