// Save this file as: app/category/gaming/page.tsx (App Router)
// Or: pages/category/gaming.tsx (Pages Router)

import React from 'react';

// Define the structure for a gaming product
interface GamingProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    type: 'PC' | 'Console' | 'Accessory';
}

// Mock data for gaming products
const mockGamingProducts: GamingProduct[] = [
    { 
        id: 201, 
        name: "Phantom Rig Z-50", 
        price: 2899.00, 
        description: "High-end gaming PC with liquid cooling and RTX 4080.",
        type: 'PC' 
    },
    { 
        id: 202, 
        name: "Nova Headset Pro", 
        price: 149.99, 
        description: "7.1 Surround sound headset with noise-cancelling microphone.",
        type: 'Accessory' 
    },
    { 
        id: 203, 
        name: "Turbo Controller V2", 
        price: 79.99, 
        description: "Elite wireless controller with customizable back paddles.",
        type: 'Accessory' 
    },
    { 
        id: 204, 
        name: "Apex Console 5", 
        price: 499.00, 
        description: "Next-gen console for immersive 4K gaming experiences.",
        type: 'Console' 
    },
];

const GamingListingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <header className="max-w-7xl mx-auto text-center border-b border-red-700 pb-6 mb-10">
                <h1 className="text-4xl font-extrabold text-red-500">
                    🎮 Gaming Gear Catalog
                </h1>
                <p className="text-zinc-400 mt-2">
                    Everything you need to dominate the battlefield: PCs, consoles, and accessories.
                </p>
            </header>

            <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {mockGamingProducts.map((product) => (
                    <div 
                        key={product.id} 
                        className="bg-zinc-800 p-6 rounded-lg shadow-xl border-t-4 border-red-600 hover:shadow-red-500/50 transition-shadow duration-300"
                    >
                        <h2 className="text-2xl font-bold text-white mb-2">{product.name}</h2>
                        
                        <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-3 ${
                            product.type === 'PC' ? 'bg-red-900 text-red-300' : 
                            product.type === 'Console' ? 'bg-blue-900 text-blue-300' : 
                            'bg-yellow-900 text-yellow-300'
                        }`}>
                            {product.type}
                        </span>

                        <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                        
                        <div className="flex justify-between items-center mt-auto pt-3 border-t border-zinc-700">
                            <span className="text-2xl font-semibold text-red-500">
                                ${product.price.toFixed(2)}
                            </span>
                            <button className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition font-medium">
                                Gear Up
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            <footer className="max-w-7xl mx-auto text-center mt-16 text-zinc-500 text-sm">
                Game on! Check out our latest sales on accessories.
            </footer>
        </div>
    );
};

export default GamingListingPage;