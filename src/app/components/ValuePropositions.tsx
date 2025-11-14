"use client";

import React from "react";
import { Truck, ShieldCheck, Headphones, Lock } from "lucide-react";

const values = [
  {
    icon: Truck,
    text: "Free Shipping on All Orders",
  },
  {
    icon: ShieldCheck,
    text: "1-Year Tech Warranty",
  },
  {
    icon: Headphones,
    text: "24/7 Customer Support",
  },
  {
    icon: Lock,
    text: "100% Secure Payments",
  },
];

const ValuePropositions: React.FC = () => {
  return (
    <section className="bg-zinc-950 border-b border-zinc-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {values.map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex flex-col items-center justify-center gap-2 hover:text-blue-400 transition"
          >
            <Icon className="w-6 h-6 text-blue-500" />
            <p className="text-sm font-medium">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuePropositions;
