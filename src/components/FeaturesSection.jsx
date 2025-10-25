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
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Core features</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">Discover, decide, and act with confidence using real-time competitive insights and AI-driven pricing intelligence.</p>
        </div>
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
    <div className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-3 flex items-center gap-3">
        <div className="p-2 rounded-lg bg-slate-100 text-slate-900 border border-slate-200">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      <ul className="space-y-1.5 text-sm text-slate-700 list-disc pl-5">
        {points.map((p, idx) => (
          <li key={idx}>{p}</li>
        ))}
      </ul>
      <div className="mt-4 text-xs rounded-lg border border-slate-200 bg-slate-50 overflow-hidden">
        <div className="px-3 py-2 text-slate-600 font-medium border-b border-slate-200">Example</div>
        <div className="px-3 py-2">
          <div className="text-slate-900">"{exampleQuery}"</div>
          <div className="mt-1 text-slate-600">→ Returns: {exampleReturn}</div>
        </div>
      </div>
    </div>
  );
}
