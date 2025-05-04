import Link from "next/link";
import React from "react";

import logo from "../../public/assets/logo.svg";
import twitter from "../../public/assets/icon-twitter.svg";
import facebook from "../../public/assets/icon-facebook.svg";
import pinterest from "../../public/assets/icon-pinterest.svg";

import Image from "next/image";
const navLinks = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
];

const Footer = () => {
  return (
    <div className="bg-[var(--footer)] px-8 py-12 md:px-20 lg:px-6  flex items-center justify-center text-xl font-semibold">
      <div className="flex flex-col lg:flex-row md:justify-between items-center w-full">
        {/* logo and nav-links, address */}
        <div className="flex flex-col items-center lg:items-start md:flex-row lg:flex-row lg:space-y-10 space-y-6 md:space-y-0  md:w-full mb-6 md:mb-4 lg:mb-0">
          {/* logo-navlinks */}
          <div className="flex flex-col space-y-6 w-full items-center">
            {/* logo */}
            <Link href="/">
              <Image src={logo} className="cursor-pointer" />
            </Link>
            <div className="flex items-center space-x-8 text-2xl">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          {/* address */}
          <ul className="flex flex-col md:text-right lg:text-left text-center text-[var(--footer-text)]">
            <li>987 Hillcrest Lane</li>
            <li>Irvine, CA</li>
            <li>California 92714</li>
            <li>Call Us:949-833-7432</li>
          </ul>
        </div>
        {/* social-links & copyright */}
        <div className="flex flex-col items-center md:flex-row lg:flex-col lg:space-y-10 space-y-6 md:justify-between md:w-full lg:items-end">
          {/* social-links */}
          <div className="flex space-x-6 items-center">
            <Image
              src={facebook}
              alt="Facebook"
              className="cursor-pointer hover:"
            />
            <Image src={pinterest} alt="Pinterest" className="cursor-pointer" />
            <Image src={twitter} alt="Twitter" className="cursor-pointer" />
          </div>
          {/* copyright */}
          <div>
            <p>Copyright 2025.All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
