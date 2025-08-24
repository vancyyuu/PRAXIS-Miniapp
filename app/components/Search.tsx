// components/Search.tsx
import { useState } from 'react';
import Leaderboard from './Leaderboard';

interface SearchProps {
  onSearch: (query: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-4 p-4 rounded-lg shadow-inner bg-praxis-bg-light-900 border border-praxis-bg-light-800 dark:bg-praxis-bg-dark-800 dark:border-praxis-bg-dark-700">
        <h1 className="text-2xl font-bold text-praxis-blue-800">Find Talent</h1>
        <p className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400 text-center">
          Search for top talent by name or skill, verified by on-chain credentials.
        </p>
        <div className="flex w-full space-x-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
            placeholder="Search for a praxer or skill..."
            className="flex-1 p-3 rounded-lg bg-praxis-bg-light-800 text-praxis-bg-light-100 placeholder-praxis-bg-light-500 border border-praxis-bg-light-700 focus:outline-none focus:ring-2 focus:ring-praxis-blue-800 dark:bg-praxis-bg-dark-900 dark:text-praxis-bg-dark-100 dark:placeholder-praxis-bg-dark-500 dark:border-praxis-bg-dark-700"
          />
          <button
            onClick={handleSearch}
            className="p-3 rounded-lg bg-praxis-blue-800 text-white font-semibold hover:bg-praxis-blue-700 transition-colors"
          >
            Search
          </button>
        </div>
      </div>
      
      <Leaderboard />
      
    </div>
  );
}