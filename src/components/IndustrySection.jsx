import React from 'react';
import { ShoppingCart, Cloud, Briefcase, Banknote } from 'lucide-react';

const industries = [
  {
    title: 'E-commerce',
    icon: ShoppingCart,
    bullets: [
      'Track product prices, inventory, promotions',
      'Monitor pricing strategies, SKU demand, seasonal swings'
    ]
  },
  {
    title: 'SaaS',
    icon: Cloud,
    bullets: [
      'Track features, pricing, subscriber metrics',
      'Monitor feature releases and tier changes'
    ]
  },
  {
    title: 'Services',
    icon: Briefcase,
    bullets: [
      'Track service packages, contract values',
      'Monitor competitive offerings and pricing'
    ]
  },
  {
    title: 'Finance',
    icon: Banknote,
    bullets: [
      'Track products, rates, terms',
      'Monitor offerings and promotions'
    ]
  }
];

export default function IndustrySection() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold">Multi-industry support</h2>
        <p className="mt-2 text-slate-300 max-w-2xl">Purpose-built intelligence for your market, whether you sell products, subscriptions, or services.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((ind, i) => (
          <IndustryCard key={i} {...ind} />
        ))}
      </div>
    </section>
  );
}

function IndustryCard({ title, icon: Icon, bullets }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-300">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <ul className="space-y-1.5 text-sm text-slate-300 list-disc pl-5">
        {bullets.map((b, idx) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
