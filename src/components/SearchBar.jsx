import React, { useState } from 'react';

export default function SearchBar({ placeholder = 'Search...', onSearch }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = value.trim();
    if (!q) return;
    onSearch && onSearch(q);
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-3xl">
      <div className="group relative flex items-center gap-2 rounded-2xl border border-slate-300 bg-white p-2 shadow-sm transition-all focus-within:shadow-md">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl border-0 bg-transparent px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black"
        >
          Search
        </button>
      </div>
      <div className="pointer-events-none absolute -inset-[1px] -z-10 rounded-[22px] bg-gradient-to-tr from-black/10 via-transparent to-black/5 opacity-0 group-focus-within:opacity-100 transition-opacity" />
    </form>
  );
}
