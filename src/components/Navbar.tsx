"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";

interface NavbarProps {
  cartItemCount?: number;
  cartTotal?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  cartItemCount = 0,
  cartTotal = "$0.00",
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "#" },
    { name: "BAG", href: "#" },
    { name: "SNEAKERS", href: "#" },
    { name: "BELT", href: "#" },
    { name: "CONTACT", href: "#" },
  ];

  return (
    <nav className="w-full bg-white shadow-xs border-b-2 border-gray-50">
      <div className="mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Logo" className="w-12 h-10" />
            <span className="text-xl font-bold text-gray-900">E-Comm</span>
          </div>

          <div className="hidden md:block text-lg">
            <div className="ml-10 flex items-baseline space-x-16">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    item.name === "HOME"
                      ? "text-[#40BFFF]"
                      : "text-gray-700 hover:text-gray-900"
                  } px-3 py-2 font-medium transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden sm:flex items-center">
            <button className="flex items-center space-x-4 text-gray-700 hover:text-gray-900 transition-colors duration-200">
              <ShoppingCart className="w-7 h-7 pr-2" />
              <span className="font-semibold text-gray-700">Items</span>
              <span className="text-gray-400">{cartTotal}</span>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {menuOpen ? (
                <X />
              ) : (
                <Menu />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-16 w-full z-50 md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border border-gray-300">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium ${
                  item.name === "HOME"
                    ? "text-blue-500 hover:text-blue-600"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
