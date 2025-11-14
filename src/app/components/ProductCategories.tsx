"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define the type for the mock data locally for clarity
interface Category {
  id: string;
  name: string;
  imageUrl: string;
  link: string;
  description: string;
}

// Mock data 
const mockCategories: Category[] = [
  {
    id: "cat1",
    name: "Laptops",
    imageUrl: "/images/Unknown.jpg",
    link: "/category/laptops", // <--- Redirects to the Laptop Listing Page
    description: "Powerful machines for work, gaming, and creativity.",
  },
  {
    id: "cat2",
    name: "Smartphones",
    imageUrl: "/images/Unknown-2.jpg",
    link: "/category/smartphones",
    description: "Stay connected with the latest mobile technology.",
  },
  {
    id: "cat3",
    name: "Gaming",
    imageUrl: "/images/tech-talk-gaming-pc-accessories-hero-image.jpeg",
    link: "/category/gaming",
    description: "Dominate the competition with cutting-edge gear.",
  },
  {
    id: "cat4",
    name: "Accessories",
    imageUrl: "/images/01-Tech-and-Mobile-Accessories-dropshipping.jpg",
    link: "/category/accessories",
    description: "Essential peripherals to complete your setup.",
  },
];

const ProductCategories: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {mockCategories.map((category) => (
            // This Link component wraps the image and redirects to the specified URL
            <Link
              href={category.link}
              key={category.id}
              className="group relative block overflow-hidden rounded-xl border border-zinc-800 hover:border-blue-600 transition"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] bg-zinc-900">
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay and text container */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex flex-col justify-end p-4">
                <h3 className="text-xl font-bold text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-zinc-300 opacity-90">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;