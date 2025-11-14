"use client";

import React from "react";
import { Star } from "lucide-react";
import { Testimonial } from "../types";

// Mock data
const mockTestimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "The best customer service I've ever experienced. My new laptop arrived in a day!",
    author: "Alex Johnson",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Finally found a store with all the gaming gear I need. Great prices and fast shipping.",
    author: "Samantha Bee",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "My phone was packaged perfectly and works like a dream. Will be back for accessories.",
    author: "Mike Chen",
    rating: 4,
  },
];

const SocialProof: React.FC = () => {
  return (
    <section className="bg-zinc-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          What Our Customers Say
        </h2>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 shadow-md hover:shadow-blue-500/10 transition transform hover:-translate-y-1"
            >
              {/* Star rating */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < item.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-zinc-600"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 italic mb-4 leading-relaxed">
                “{item.quote}”
              </p>

              {/* Author */}
              <p className="text-blue-400 font-medium">— {item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
