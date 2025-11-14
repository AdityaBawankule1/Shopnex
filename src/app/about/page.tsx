// Save this file as: app/about/page.tsx

import React from 'react';
import Link from 'next/link';
import { Rocket, Users, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
        <header className="max-w-4xl mx-auto text-center py-12">
            <h1 className="text-5xl font-extrabold text-blue-400 mb-4">
                Our Story: ShopNex
            </h1>
            <p className="text-xl text-zinc-400">
                Driven by innovation, powered by commitment. We are more than just a store—we are your partners in technology.
            </p>
        </header>

        <main className="max-w-5xl mx-auto space-y-12">
            
            {/* Mission Section */}
            <section className="p-8 bg-zinc-800 rounded-xl shadow-2xl">
                <div className="flex items-center mb-4 space-x-4">
                    <Rocket className="w-8 h-8 text-red-500" />
                    <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                    Our mission is to democratize technology by providing access to the latest gadgets and computing solutions at competitive prices. We strive to simplify the complex world of tech, ensuring every customer finds the perfect tool to fuel their creativity, productivity, or passion for gaming.
                </p>
            </section>

            {/* Values Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-zinc-700 rounded-xl">
                    <Users className="w-7 h-7 text-green-400 mb-3" />
                    <h3 className="text-xl font-semibold mb-2 text-white">Customer Focus</h3>
                    <p className="text-zinc-400 text-sm">
                        Putting our community first with personalized recommendations and responsive support.
                    </p>
                </div>
                <div className="p-6 bg-zinc-700 rounded-xl">
                    <Shield className="w-7 h-7 text-yellow-400 mb-3" />
                    <h3 className="text-xl font-semibold mb-2 text-white">Quality Assurance</h3>
                    <p className="text-zinc-400 text-sm">
                        We only stock products that meet our rigorous standards for performance and reliability.
                    </p>
                </div>
                <div className="p-6 bg-zinc-700 rounded-xl">
                    <Rocket className="w-7 h-7 text-blue-400 mb-3" />
                    <h3 className="text-xl font-semibold mb-2 text-white">Innovation</h3>
                    <p className="text-zinc-400 text-sm">
                        Always hunting for the next big thing so you don't have to.
                    </p>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center pt-8">
                <h2 className="text-2xl font-bold mb-4">Ready to find your next piece of tech?</h2>
                <Link href="/products" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105">
                    Start Shopping Now
                </Link>
            </section>
        </main>
    </div>
  );
};

export default AboutPage;