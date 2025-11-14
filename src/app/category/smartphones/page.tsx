"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SmartphoneProduct {
  id: number;
  name: string;
  price: number;
  specs: string;
  brand: string;
  category: "flagship" | "midrange" | "budget";
  imageUrl: string;
}

const mockSmartphones: SmartphoneProduct[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 1099,
    specs: "A17 Pro Chip • 8GB RAM • 256GB Storage",
    brand: "Apple",
    category: "flagship",
    imageUrl: "/images/smartphones/15pro.jpg.avif",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 1299,
    specs: "Snapdragon 8 Gen 3 • 12GB RAM • 512GB Storage",
    brand: "Samsung",
    category: "flagship",
    imageUrl: "/images/smartphones/s24ultra.jpg.avif",
  },
  {
    id: 3,
    name: "Google Pixel 8",
    price: 699,
    specs: "Tensor G3 • 8GB RAM • 128GB Storage",
    brand: "Google",
    category: "midrange",
    imageUrl: "/images/smartphones/pixel8.jpg.avif",
  },
   {
    id: 4,
    name: "iPhone 14 Pro",
    price: 1099,
    specs: "A17 Pro Chip • 8GB RAM • 256GB Storage",
    brand: "Apple",
    category: "flagship",
    imageUrl: "/images/smartphones/14pro.jpg.avif",
  },
];

const SmartphoneListingPage: React.FC = () => {
  const categories = ["All", "Flagship", "Midrange", "Budget"];
  const activeCategory = "All";

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Header */}
      <header className="max-w-7xl mx-auto border-b border-zinc-700 pb-6 mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-blue-400">Smartphones 📱</h1>
        <p className="text-zinc-400 mt-2">
          Explore the latest flagship devices, mid-range champs, and budget phones.
        </p>
      </header>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Sidebar Filter */}
        <aside className="w-full md:w-64 p-4 bg-zinc-800 rounded-xl shadow-lg sticky top-8 self-start">
          <h3 className="text-xl font-bold mb-4 border-b border-zinc-700 pb-2">
            Filter by Category
          </h3>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  className={`w-full text-left py-2 px-3 rounded-lg transition ${
                    cat === activeCategory
                      ? "bg-blue-600 text-white font-semibold"
                      : "text-zinc-300 hover:bg-zinc-700"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Product Grid */}
        <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {mockSmartphones.map((phone) => (
            <Link
              href={`/product/${phone.id}`}
              key={phone.id}
              className="group block bg-zinc-800 rounded-xl shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative w-full h-40 bg-zinc-900 overflow-hidden">
                <Image
                  src={phone.imageUrl}
                  alt={phone.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-400 transition">
                  {phone.name}
                </h2>

                <span
                  className={`inline-block text-xs font-medium px-2 py-0.5 rounded mb-2 ${
                    phone.category === "flagship"
                      ? "bg-purple-900/50 text-purple-300"
                      : phone.category === "midrange"
                      ? "bg-green-900/50 text-green-300"
                      : "bg-yellow-900/50 text-yellow-300"
                  }`}
                >
                  {phone.category.charAt(0).toUpperCase() + phone.category.slice(1)}
                </span>

                <p className="text-blue-400 text-2xl font-bold mb-3">
                  ${phone.price.toFixed(2)}
                </p>

                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                  {phone.specs}
                </p>

                <span className="w-full text-center bg-blue-600 group-hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition block">
                  View Details
                </span>
              </div>
            </Link>
          ))}
        </main>
      </div>

      <footer className="max-w-7xl mx-auto text-center mt-12 text-zinc-500 border-t border-zinc-700 pt-4">
        © 2025 Tech Store. All rights reserved.
      </footer>
    </div>
  );
};

export default SmartphoneListingPage;
