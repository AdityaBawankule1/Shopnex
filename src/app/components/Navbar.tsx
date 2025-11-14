"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = 0; // replace with your cart state

  return (
    <nav className="bg-black text-white border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold tracking-tight flex items-center gap-3">
              <span className="inline-block w-8 h-8 bg-white rounded-full" aria-hidden />
              <span className="sr-only">ShopNex</span>
              <span className="text-white">ShopNex</span>
            </Link>
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-200 hover:text-white transition">
              Home
            </Link>

            <Link href="/products" className="text-sm font-medium text-gray-200 hover:text-white transition">
              Products
            </Link>

            <Link href="/about" className="text-sm font-medium text-gray-200 hover:text-white transition">
              About
            </Link>
          </div>

          {/* Right: Cart & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              className="relative flex items-center gap-2 text-gray-200 hover:text-white transition"
              aria-label="View cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm hidden sm:inline">Cart</span>

              {/* badge */}
              <span className="absolute -top-1 -right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-black bg-white rounded-full">
                {cartCount}
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Open menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black">
          <div className="px-4 py-3 space-y-1">
            <Link href="/" className="block px-2 py-2 rounded text-gray-200 hover:bg-gray-900" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/products" className="block px-2 py-2 rounded text-gray-200 hover:bg-gray-900" onClick={() => setIsOpen(false)}>
              Products
            </Link>
            <Link href="/about" className="block px-2 py-2 rounded text-gray-200 hover:bg-gray-900" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/cart" className="flex items-center px-2 py-2 rounded text-gray-200 hover:bg-gray-900" onClick={() => setIsOpen(false)}>
              <ShoppingCart className="w-5 h-5 mr-2" /> Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
