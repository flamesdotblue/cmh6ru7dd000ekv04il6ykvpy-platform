import React from 'react';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import IndustrySection from './components/IndustrySection';
import ExamplesSection from './components/ExamplesSection';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.15),rgba(2,6,23,0))]" />
      <header className="container mx-auto px-4">
        <Hero />
      </header>

      <main className="container mx-auto px-4 space-y-20 pb-24">
        <FeaturesSection />
        <IndustrySection />
        <ExamplesSection />
      </main>
    </div>
  );
}
