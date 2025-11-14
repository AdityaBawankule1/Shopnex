import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FeatureSection from "./components/FeatureSection";
import FeaturedProducts from './components/FeatureProducts';
import ProductCategories from './components/ProductCategories';
import ValuePropositions from './components/ValuePropositions';
import SocialProof from './components/SocialProof';
import NewsletterSignup from './components/NewsLetterSignup';
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      {/* <FeaturedProducts title="Best Sellers" products={[]} /> */}
      <FeatureSection />
      <ProductCategories />
      <ValuePropositions />
      {/* <FeaturedProducts title="New Arrivals" products={[]} /> */}
      <SocialProof />
      {/* <NewsletterSignup /> */}
      <Footer />
    </div>
  );
}
