// Save this file as: app/products/page.tsx

import React from 'react';
import Link from 'next/link';
import { Cpu, Smartphone, Gamepad, Zap } from 'lucide-react';

// Define the available categories
const productCategories = [
    { name: "Laptops", href: "/category/laptops", icon: Cpu, color: "text-blue-400", description: "Powerful machines for professionals and students." },
    { name: "Smartphones", href: "/category/smartphones", icon: Smartphone, color: "text-green-400", description: "The latest mobile communication and technology." },
    { name: "Gaming Gear", href: "/category/gaming", icon: Gamepad, color: "text-red-400", description: "High-performance setups for competitive gaming." },
    { name: "Accessories", href: "/category/accessories", icon: Zap, color: "text-yellow-400", description: "Essential peripherals to complete your digital life." },
];

const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
        <header className="max-w-7xl mx-auto text-center py-10">
            <h1 className="text-5xl font-extrabold text-white mb-3">
                Explore All Products
            </h1>
            <p className="text-xl text-zinc-400">
                Browse our entire catalog across every major technology category.
            </p>
        </header>

        <main className="max-w-7xl mx-auto py-8">
            <h2 className="text-3xl font-bold mb-6 border-b border-zinc-700 pb-3">Shop by Main Category</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {productCategories.map((category) => (
                    <Link 
                        key={category.name}
                        href={category.href}
                        className="p-6 bg-zinc-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02] border border-zinc-700"
                    >
                        <div className="flex items-center space-x-4 mb-3">
                            <category.icon className={`w-8 h-8 ${category.color}`} />
                            <h3 className="text-2xl font-semibold text-white">
                                {category.name}
                            </h3>
                        </div>
                        <p className="text-zinc-400 text-sm">
                            {category.description}
                        </p>
                        <span className="mt-4 inline-block text-sm font-medium text-blue-400 hover:text-blue-300 transition">
                            View all {category.name} &rarr;
                        </span>
                    </Link>
                ))}
            </div>

            <section className="mt-16 bg-zinc-800 p-8 rounded-xl">
                <h2 className="text-3xl font-bold mb-4 text-white">New Arrivals</h2>
                <p className="text-zinc-400">
                    Stay ahead of the curve with the latest tech hitting our shelves this week.
                </p>
                {/* Placeholder for new products carousel/list */}
                <div className="mt-6 h-32 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-500">
                    [New Product Cards Placeholder]
                </div>
            </section>
        </main>
    </div>
  );
};

export default ProductsPage;