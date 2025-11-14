import { Truck, ShieldCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    text: "Get your products delivered within 2–3 business days worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    text: "All transactions are encrypted and protected for your safety.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    text: "Our support team is available anytime to help you with your orders.",
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-blue-600 transition"
            >
              <Icon className="w-10 h-10 mx-auto text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
