// Save this file as: app/category/accessories/page.tsx (App Router)
// Or: pages/category/accessories.tsx (Pages Router)

import React from 'react';

// Define the structure for an accessory product
interface AccessoryProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    type: 'Input' | 'Audio' | 'Storage' | 'Power';
}

// Mock data for accessories
const mockAccessoryProducts: AccessoryProduct[] = [
    { 
        id: 301, 
        name: "Ergonomic Mechanical Keyboard", 
        price: 129.99, 
        description: "Tactile switches for comfortable long typing sessions.",
        type: 'Input' 
    },
    { 
        id: 302, 
        name: "Wireless ANC Earbuds", 
        price: 199.99, 
        description: "Active Noise Cancelling earbuds with 24-hour battery life.",
        type: 'Audio' 
    },
    { 
        id: 303, 
        name: "5TB Portable External HDD", 
        price: 99.50, 
        description: "Massive storage for backups and media libraries.",
        type: 'Storage' 
    },
    { 
        id: 304, 
        name: "10,000mAh Power Bank", 
        price: 45.00, 
        description: "Fast charging portable power for all your mobile devices.",
        type: 'Power' 
    },
    { 
        id: 305, 
        name: "Precision Gaming Mouse", 
        price: 65.99, 
        description: "Ultra-lightweight mouse with customizable DPI settings.",
        type: 'Input' 
    },
];

const AccessoriesListingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <header className="max-w-7xl mx-auto text-center border-b border-yellow-700 pb-6 mb-10">
                <h1 className="text-4xl font-extrabold text-yellow-500">
                    🔌 Tech Accessories Hub
                </h1>
                <p className="text-zinc-400 mt-2">
                    Enhance your setup with essential peripherals, storage, and audio gear.
                </p>
            </header>

            <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {mockAccessoryProducts.map((product) => (
                    <div 
                        key={product.id} 
                        className="bg-zinc-800 p-6 rounded-lg shadow-xl border-t-4 border-yellow-600 hover:shadow-yellow-500/50 transition-shadow duration-300"
                    >
                        <h2 className="text-2xl font-bold text-white mb-2">{product.name}</h2>
                        
                        <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-3 ${
                            product.type === 'Input' ? 'bg-indigo-900 text-indigo-300' : 
                            product.type === 'Audio' ? 'bg-green-900 text-green-300' : 
                            product.type === 'Power' ? 'bg-red-900 text-red-300' : 
                            'bg-gray-700 text-gray-300'
                        }`}>
                            {product.type}
                        </span>

                        <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                        
                        <div className="flex justify-between items-center mt-auto pt-3 border-t border-zinc-700">
                            <span className="text-2xl font-semibold text-yellow-500">
                                ${product.price.toFixed(2)}
                            </span>
                            <button className="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition font-medium">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            <footer className="max-w-7xl mx-auto text-center mt-16 text-zinc-500 text-sm">
                Peripherals and essentials to perfect your tech experience.
            </footer>
        </div>
    );
};

export default AccessoriesListingPage;