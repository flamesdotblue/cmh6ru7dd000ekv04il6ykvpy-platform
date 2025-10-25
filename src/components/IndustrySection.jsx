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
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Multi-industry support</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Purpose-built intelligence for your market, whether you sell products, subscriptions, or services.</p>
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
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-slate-100 text-slate-900 border border-slate-200">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      <ul className="space-y-1.5 text-sm text-slate-700 list-disc pl-5">
        {bullets.map((b, idx) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
