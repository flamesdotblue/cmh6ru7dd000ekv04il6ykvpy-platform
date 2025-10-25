import React, { useState } from 'react';
import { Rocket } from 'lucide-react';
import SearchBar from './SearchBar';

export default function Hero() {
  const [lastQuery, setLastQuery] = useState('');

  return (
    <section className="container mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-10">
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white"><Rocket className="h-3.5 w-3.5" /></span>
        <span className="font-medium tracking-wide">IntelliHub AI</span>
      </div>

      <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-slate-900">
        Modern competitive intelligence and pricing
      </h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        Track competitors, analyze product trends, and optimize pricing across e-commerce, SaaS, services, and finance—
        all through a simple AI Copilot.
      </p>

      <div className="mt-8">
        <SearchBar
          placeholder="Search a company or brand (e.g., Acme, Competitor X)"
          onSearch={(q) => setLastQuery(q)}
        />
        {lastQuery && (
          <div className="mt-3 text-sm text-slate-600">
            Showing insights for: <span className="font-medium text-slate-900">{lastQuery}</span>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-slate-600">
        <Badge>Real-time competitor tracking</Badge>
        <Badge>SKU-level insights</Badge>
        <Badge>AI pricing recommendations</Badge>
        <Badge>Natural language Copilot</Badge>
      </div>
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="px-2.5 py-1 rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm">
      {children}
    </span>
  );
}
