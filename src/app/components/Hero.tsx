import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-black to-zinc-900 text-white py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Discover Modern Products with <span className="text-blue-500">ShopNex</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Your destination for stylish, affordable, and high-quality tech and lifestyle gear.
        </p>
        <Link
          href="/products"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
