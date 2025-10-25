import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ placeholder = 'Search...', onSearch }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = value.trim();
    if (!q) return;
    onSearch && onSearch(q);
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-2xl">
      <div className="absolute inset-y-0 left-3 flex items-center">
        <Search className="h-5 w-5 text-slate-400" />
      </div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl bg-slate-800/60 backdrop-blur border border-slate-700/60 pl-11 pr-28 py-3.5 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-300/40"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 text-sm rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-colors"
      >
        Search
      </button>
    </form>
  );
}
