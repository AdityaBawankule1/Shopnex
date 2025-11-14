"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">ShopNex</h3>
          <p className="text-sm mb-4">
            Your go-to online marketplace for quality products at unbeatable prices.
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook" className="hover:text-white"><Facebook className="w-5 h-5" /></Link>
            <Link href="#" aria-label="Instagram" className="hover:text-white"><Instagram className="w-5 h-5" /></Link>
            <Link href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="w-5 h-5" /></Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="w-5 h-5" /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/products" className="hover:text-white">Products</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
            <li><Link href="/shipping" className="hover:text-white">Shipping & Returns</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
          <p className="text-sm mb-4">Subscribe to get the latest offers and updates.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded-r-md hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-8 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ShopNex. All rights reserved.
      </div>
    </footer>
  );
}
