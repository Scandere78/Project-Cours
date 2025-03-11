"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-anton text-red-400 text-2xl">
              SwiftLoc
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-white hover:text-red-400 px-3 py-2 rounded-md font-medium">
                Accueil
              </Link>
              <Link href="/vehicules" className="text-white hover:text-red-400 px-3 py-2 rounded-md font-medium">
                Véhicules
              </Link>
              <Link href="/tarifs" className="text-white hover:text-red-400 px-3 py-2 rounded-md font-medium">
                Tarifs
              </Link>
              <Link href="/contact" className="text-white hover:text-red-400 px-3 py-2 rounded-md font-medium">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Login/Register Button */}
          <div className="hidden md:block">
            <button className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500 transition-colors">
              Connexion
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-white hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium">
              Accueil
            </Link>
            <Link href="/vehicules" className="text-white hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium">
              Véhicules
            </Link>
            <Link href="/tarifs" className="text-white hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium">
              Tarifs
            </Link>
            <Link href="/contact" className="text-white hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            <button className="bg-red-400 text-white mt-3 w-full px-4 py-2 rounded-md hover:bg-red-500 transition-colors">
              Connexion
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;