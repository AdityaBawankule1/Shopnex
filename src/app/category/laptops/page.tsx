// This file is located at: app/category/laptops/page.tsx or pages/category/laptops.tsx

import React from 'react';
import Image from 'next/image'; // Import Next/Image for better performance
import Link from 'next/link'; // Use Link for navigation if clicking on a product

// 1. ADDED: TypeScript Interface for strong typing
interface LaptopProduct {
    id: number;
    name: string;
    price: number;
    specs: string;
    category: 'gaming' | 'macbook' | 'budget';
    imageUrl: string; // Added image URL
}

// Mock data with new fields
const mockLaptops: LaptopProduct[] = [
    { 
        id: 1, 
        name: "MacBook Air 13-inch M4 Chip", 
        price: 999, 
        specs: "M4 chip, 16GB RAM, 256GB SSD",
        category: 'macbook',
        imageUrl: "/images/laptops/macair.png" // Placeholder image path
    },
    { 
        id: 2, 
        name: "MacBook Air 13-inch M1 Chip", 
        price: 599, 
        specs: "M1 chip, 16GB RAM, 256GB SSD",
        category: 'macbook',
        imageUrl: "/images/laptops/macm1.jpg.avif" // Placeholder image path
    },
    { 
        id: 3, 
        name: "MacBook Air 13-inch M2 Chip", 
        price: 699, 
        specs: "M2 chip, 16GB RAM, 256GB SSD",
        category: 'macbook',
        imageUrl: "/images/laptops/macm2.jpg.avif" // Placeholder image path
    },
    { 
        id: 4, 
        name: "MacBook Air 13-inch M2 Chip", 
        price: 899, 
        specs: "M3 chip, 16GB RAM, 256GB SSD",
        category: 'macbook',
        imageUrl: "/images/laptops/macm3.jpg.avif" // Placeholder image path
    },
];

const LaptopListingPage: React.FC = () => {
    // In a real app, you would have state and handlers for filtering here
    const categories = ['All', 'Ultrabook', 'Gaming', 'Budget'];
    const activeCategory = 'All'; // Mock active filter

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            {/* Header remains clean */}
            <header className="max-w-7xl mx-auto border-b border-zinc-700 pb-6 mb-8 text-center">
                <h1 className="text-4xl font-extrabold text-blue-400">
                    All Laptops 💻
                </h1>
                <p className="text-zinc-400 mt-2">
                    Browse our extensive collection of notebooks, ultrabooks, and gaming powerhouses.
                </p>
            </header>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
                
                {/* 2. ADDED: Filter Sidebar */}
                <aside className="w-full md:w-64 p-4 bg-zinc-800 rounded-xl shadow-lg self-start sticky top-8">
                    <h3 className="text-xl font-bold mb-4 border-b border-zinc-700 pb-2">Filter by Category</h3>
                    <ul className="space-y-2">
                        {categories.map((cat) => (
                            <li key={cat}>
                                <button
                                    className={`w-full text-left py-2 px-3 rounded-lg transition ${
                                        cat === activeCategory 
                                        ? 'bg-blue-600 text-white font-semibold' 
                                        : 'text-zinc-300 hover:bg-zinc-700'
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
                    {mockLaptops.map((laptop) => (
                        // 3. IMPROVED: Product card uses Link for better accessibility/routing
                        <Link 
                            href={`/product/${laptop.id}`} // Example detail page link
                            key={laptop.id}
                            className="group block bg-zinc-800 rounded-xl shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300 overflow-hidden"
                        >
                            {/* Image with Next/Image */}
                            <div className="relative w-full h-40 bg-zinc-900 overflow-hidden">
                                <Image
                                    src={laptop.imageUrl}
                                    alt={laptop.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Card Details */}
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-400 transition">
                                    {laptop.name}
                                </h2>
                                <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${
                                    laptop.category === 'gaming' ? 'bg-red-900/50 text-red-300' :
                                    laptop.category === 'macbook' ? 'bg-green-900/50 text-green-300' :
                                    'bg-yellow-900/50 text-yellow-300'
                                } mb-2`}>
                                    {laptop.category.charAt(0).toUpperCase() + laptop.category.slice(1)}
                                </span>
                                
                                <p className="text-blue-400 text-2xl font-bold mb-3">
                                    ${laptop.price.toFixed(2)}
                                </p>
                                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                                    **Specs:** {laptop.specs}
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

export default LaptopListingPage;