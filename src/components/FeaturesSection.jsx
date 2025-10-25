import React from 'react';
import { BarChart3, TrendingUp, DollarSign, Bot } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Competitor tracking and analysis',
    points: [
      'Real-time monitoring (sales, inventory, pricing, promotions, sentiment)',
      'SKU-level tracking',
      'Multi-industry coverage'
    ],
    exampleQuery: 'Show me all competitors that dropped prices by more than 10% in the last 7 days',
    exampleReturn: 'List of SKUs, price changes, impact analysis'
  },
  {
    icon: TrendingUp,
    title: 'Product intelligence',
    points: [
      'Trend analysis (best sellers, gaps, emerging, declining)',
      'Validation with scoring',
      'Lifecycle prediction'
    ],
    exampleQuery: 'What products are trending in the electronics category?',
    exampleReturn: 'Top 10 trending products, growth rates, market gaps'
  },
  {
    icon: DollarSign,
    title: 'Dynamic pricing',
    points: [
      'AI-backed recommendations with confidence scores',
      'Competitor analysis and ROI scenarios',
      'Run tests and optimize profit'
    ],
    exampleQuery: 'What should I price Product X?',
    exampleReturn: 'Recommended price ($99.99), competitor prices, expected margin (+15%)'
  },
  {
    icon: Bot,
    title: 'AI Copilot (natural language)',
    points: [
      'Answer business questions in plain English',
      'Data-backed insights with sources',
      'Ask about pricing, trends, competitors, and gaps'
    ],
    exampleQuery: 'Which items are mispriced?',
    exampleReturn: 'List of items, recommended price changes, projected impact'
  }
];

export default function FeaturesSection() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold">Core features</h2>
        <p className="mt-2 text-slate-300 max-w-2xl">Discover, decide, and act with confidence using real-time competitive insights and AI-driven pricing intelligence.</p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, points, exampleQuery, exampleReturn }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors p-5 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-300">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <ul className="space-y-1.5 text-sm text-slate-300 list-disc pl-5">
        {points.map((p, idx) => (
          <li key={idx}>{p}</li>
        ))}
      </ul>
      <div className="mt-4 text-xs bg-slate-900/60 border border-slate-700/60 rounded-lg overflow-hidden">
        <div className="px-3 py-2 text-slate-400 font-medium">Example</div>
        <div className="px-3 py-2 border-t border-slate-700/60">
          <div className="text-slate-200">"{exampleQuery}"</div>
          <div className="mt-1 text-slate-400">→ Returns: {exampleReturn}</div>
        </div>
      </div>
    </div>
  );
}
