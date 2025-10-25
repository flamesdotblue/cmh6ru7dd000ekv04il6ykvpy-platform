import React from 'react';

const examples = [
  {
    heading: 'Competitors',
    prompt: 'How is Competitor X performing?',
    response: [
      'Revenue estimate +12% QoQ, pricing down 5% across 18 SKUs',
      '3 new launches this month; promotion window: 10/01–10/10',
      'Inventory stress on 4 SKUs; backorder risk in 2 weeks'
    ]
  },
  {
    heading: 'Pricing',
    prompt: 'Which items are mispriced?',
    response: [
      '7 SKUs underpriced vs. market by >8%',
      'Recommended increases: 3–6% (confidence: 0.82)',
      'Projected margin lift: +2.4 pp'
    ]
  },
  {
    heading: 'Trends',
    prompt: "What's hot in SaaS this quarter?",
    response: [
      'Top growth features: AI copilots, usage-based billing',
      'Churn down 1.1 pp in mid-market; enterprise flat',
      'Market gaps: SOC2-included startup plans'
    ]
  },
  {
    heading: 'Opportunities',
    prompt: 'Where are the market gaps?',
    response: [
      'Electronics: mid-tier noise-cancelling earbuds at $79–$89',
      'Finance: promo CD rates ladder (6–18 mo) under-penetrated',
      'Services: bundle onboarding + success for SMB plans'
    ]
  }
];

export default function ExamplesSection() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold">Ask the AI Copilot</h2>
        <p className="mt-2 text-slate-300 max-w-2xl">Natural language insights with sources and confidence scoring. Try queries like these:</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {examples.map((ex, i) => (
          <ExampleCard key={i} {...ex} />
        ))}
      </div>
    </section>
  );
}

function ExampleCard({ heading, prompt, response }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden">
      <div className="px-4 py-2 text-xs text-slate-400 bg-slate-900/80 border-b border-slate-800/60">{heading}</div>
      <div className="p-4 space-y-3">
        <div className="bg-white/5 rounded-lg p-3">
          <div className="text-xs text-slate-400 mb-1">You asked</div>
          <pre className="text-[13px] text-slate-200 whitespace-pre-wrap leading-relaxed">"{prompt}"</pre>
        </div>
        <div className="bg-white/5 rounded-lg p-3">
          <div className="text-xs text-slate-400 mb-1">Copilot</div>
          <ul className="list-disc pl-5 text-sm text-slate-200 space-y-1">
            {response.map((r, idx) => (
              <li key={idx}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
