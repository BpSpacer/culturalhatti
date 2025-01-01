"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const navbarLinks = [
  {
    id: 0,
    name: "Cakes",
    href: "/products/cakes",
  },
  {
    id: 1,
    name: "Brownies",
    href: "/products/brownies",
  },
  {
    id: 2,
    name: "Desserts",
    href: "/products/desserts",
  },
  {
    id: 3,
    name: "CupCakes",
    href: "/products/cupcakes",
  },
  {
    id: 4,
    name: "Sundae",
    href: "/products/sundae",
  },
  {
    id: 5,
    name: "Cookies",
    href: "/products/cookies",
  },
  {
    id: 6,
    name: "Donuts",
    href: "/products/donuts",
  },
];

export function NavbarLinks() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => {
    // Clear any existing close timeout
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
  return (
    <div className="hidden md:flex justify-center items-center gap-x-4 ml-8 relative">
      {/* All Products Button */}
      <Link
        href="/products/all"
        className="p-2 font-medium rounded-md bg-muted hover:bg-muted/75"
      >
        All Products
      </Link>

      {/* Menu Dropdown */}
      <div
        className="relative"
        onMouseEnter={openMenu} // Open menu immediately on hover
        onMouseLeave={delayedCloseMenu} // Close menu with delay
      >
        <button
          className="p-2 font-medium rounded-md bg-muted hover:bg-muted/75 inline-flex hover:text-gray-500 items-center"
        >
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
            className="absolute top-full left-0 mt-2 bg-white shadow-lg border rounded-md z-10 w-80 p-4 text-center"
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

      <Link
        href="/about"
        className="p-2 font-medium rounded-md bg-muted hover:bg-muted/75 inline-flex"
      >
        About Us <ChevronDown className="text-gray-400" />
      </Link>
      <Link
        href="/contact"
        className="p-2 font-medium rounded-md bg-muted hover:bg-muted/75"
      >
        Contact Us
      </Link>
    </div>
  );
}
