import Header from '@/components/ui/Header';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import FeatureSpotlight from '@/components/sections/FeatureSpotlight';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';
import { SparklesCore } from '@/components/ui/sparkles';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <SparklesCore
          id="page-sparkles"
          background="transparent"
          minSize={0.8}
          maxSize={2}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#a78bfa"
        />
      </div>
      
      <div className="relative" style={{ zIndex: 1 }}>
        <Header />
        <Hero />
        <HowItWorks />
        <FeatureSpotlight />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}