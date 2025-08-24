// components/Search.tsx
"use client";

import { useState } from 'react';

interface SearchProps {
  onSearch: (query: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    // This is the function we're calling from the parent component
    onSearch(query);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Find a PRAXIS Graduate</h1>
      <p className="text-gray-400 mb-6">
        Search by name, ID, or wallet address to verify skills.
      </p>
      
      <input
        type="text"
        placeholder="Enter name or ID..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-sm px-4 py-2 mb-4 border border-gray-600 rounded-full bg-gray-800 text-white focus:outline-none focus:border-blue-500"
      />
      
      <button 
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
      >
        Search
      </button>
    </div>
  );
}