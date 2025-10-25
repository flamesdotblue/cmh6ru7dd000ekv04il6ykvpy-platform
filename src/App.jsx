import React from 'react';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import IndustrySection from './components/IndustrySection';
import ExamplesSection from './components/ExamplesSection';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900">
      {/* Designed white background: subtle dot grid + soft radial vignettes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute -top-36 left-1/2 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(600px_280px_at_center,rgba(0,0,0,0.06),transparent_60%)]" />
        <div className="absolute -bottom-40 left-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(300px_220px_at_center,rgba(0,0,0,0.05),transparent_60%)]" />
        <div className="absolute -bottom-32 right-10 h-[380px] w-[520px] rounded-full bg-[radial-gradient(420px_220px_at_center,rgba(0,0,0,0.04),transparent_60%)]" />
      </div>

      <header className="relative">
        <Hero />
      </header>

      <main className="relative container mx-auto px-4 md:px-6 space-y-20 pb-24">
        <FeaturesSection />
        <IndustrySection />
        <ExamplesSection />
      </main>

      <footer className="border-t border-slate-200/70 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 md:px-6 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} IntelliHub AI</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-slate-900" href="#">Privacy</a>
            <a className="hover:text-slate-900" href="#">Terms</a>
            <a className="hover:text-slate-900" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
