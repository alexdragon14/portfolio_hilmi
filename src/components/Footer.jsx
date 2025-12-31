import { useState } from "react";
import logo from "../assets/logo.png";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-500/50 bg-sky-100/60 backdrop-blur-sm text-white py-6 mt-12">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img
                src={logo}
                alt="Logo"
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 center"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-sky-700 pixel-font-600">Hilmi </span>
              <span className="text-black pixel-font-600">Hashim</span>
            </span>
          </div>
          <div className="mt-4 md:mt-0 md:ml-auto ">
            <ul className="flex space-x-6">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center border-t border-slate-500/50 mt-4 pt-4">
          <p className="text-sm text-gray-400">
            © 2026 Hilmi Hashim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
