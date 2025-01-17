"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

export const navbarLinks = [
  { id: 1, name: "Saraiki", href: "/products/saraiki" },
  { id: 2, name: "Sindhi", href: "/products/sindhi" },
  { id: 3, name: "Punjabi", href: "/products/punjabi" },
  { id: 4, name: "Pashtun", href: "/products/pashtun" },
  { id: 5, name: "Balochi", href: "/products/balochi" },
  { id: 6, name: "Kashmiri", href: "/products/kashmiri" },
];

export function NavbarLinks() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setMenuOpen(true);
  };

  const delayedCloseMenu = () => {
    closeTimeout.current = setTimeout(() => {
      setMenuOpen(false);
    }, 200);
  };

  const openAbout = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setAboutOpen(true);
  };

  const delayedCloseAbout = () => {
    closeTimeout.current = setTimeout(() => {
      setAboutOpen(false);
    }, 200);
  };

  return (
    <div
  className="hidden md:flex justify-center items-center gap-x-4 ml-8 relative z-50"
>
  {/* All Products Button */}
  <Link
    href="/products/all"
    className="p-2 font-medium rounded-md bg-muted hover:bg-muted/75"
  >
    All Products
  </Link>

  {/* Menu Dropdown */}
  <div
    className="relative z-50"
    onMouseEnter={openMenu}
    onMouseLeave={delayedCloseMenu}
  >
    <button className="p-2 font-medium rounded-md bg-muted hover:bg-muted/75 inline-flex items-center">
      Menu{" "}
      <motion.div
        className="ml-1"
        animate={{ rotate: menuOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown className="text-gray-400" />
      </motion.div>
    </button>
    {menuOpen && (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-0 mt-2 bg-white shadow-lg border rounded-md z-50 w-80 p-4 text-center"
      >
        <h3 className="text-lg font-semibold text-gray-700">
          Product <span className="text-primary">Categories</span>
        </h3>
        <div className="space-y-2">
          {navbarLinks.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    )}
  </div>

  {/* About Us Dropdown */}
  <div
    className="relative z-50"
    onMouseEnter={openAbout}
    onMouseLeave={delayedCloseAbout}
  >
    <button className="p-2 font-medium rounded-md bg-muted hover:bg-muted/75 inline-flex items-center">
      About Us{" "}
      <motion.div
        className="ml-1"
        animate={{ rotate: aboutOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown className="text-gray-400" />
      </motion.div>
    </button>
    {aboutOpen && (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-0 mt-2 bg-white shadow-lg border rounded-md z-50 w-80 p-4 text-center"
      >
        <h3 className="text-lg font-semibold text-gray-700">
          About <span className="text-primary">Us</span>
        </h3>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            We are a company dedicated to showcasing cultural diversity.
          </p>
          <div className="flex justify-center gap-2">
            <img
              src="/images/about1.jpg"
              alt="About 1"
              className="w-24 h-24 rounded-md object-cover"
            />
            <img
              src="/images/about2.jpg"
              alt="About 2"
              className="w-24 h-24 rounded-md object-cover"
            />
          </div>
        </div>
      </motion.div>
    )}
  </div>

  <Link
    href="/contact-us"
    className="p-2 font-medium rounded-md bg-muted hover:bg-muted/75"
  >
    Contact Us
  </Link>
</div>
  );
}
