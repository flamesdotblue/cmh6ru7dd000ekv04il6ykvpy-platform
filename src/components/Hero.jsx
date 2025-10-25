import React, { useState } from 'react';
import { Rocket, Search } from 'lucide-react';
import SearchBar from './SearchBar';

export default function Hero() {
  const [lastQuery, setLastQuery] = useState('');

  return (
    <section className="pt-16 md:pt-24 pb-10">
      <div className="flex items-center gap-2 text-cyan-300/90 mb-4">
        <Rocket className="h-5 w-5" />
        <span className="text-sm tracking-wide uppercase font-semibold">IntelliHub AI</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
        Competitive intelligence and pricing, powered by AI
      </h1>
      <p className="mt-4 max-w-2xl text-slate-300">
        Track competitors, analyze product trends, and optimize pricing across e-commerce, SaaS, services, and finance—
        all through a simple AI Copilot.
      </p>

      <div className="mt-8">
        <SearchBar
          placeholder="Search a company or brand (e.g., Acme, Competitor X)"
          onSearch={(q) => setLastQuery(q)}
        />
        {lastQuery && (
          <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
            <Search className="h-4 w-4" />
            <span>Showing insights for: "{lastQuery}"</span>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-slate-400">
        <span className="px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10">Real-time competitor tracking</span>
        <span className="px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10">SKU-level insights</span>
        <span className="px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10">AI pricing recommendations</span>
        <span className="px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10">Natural language Copilot</span>
      </div>
    </section>
  );
}
