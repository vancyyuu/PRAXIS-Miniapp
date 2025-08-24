// components/Search.tsx
import { useState } from 'react';
import Leaderboard from './Leaderboard';
import { FaUserCircle, FaCheckCircle } from 'react-icons/fa';
import { ProfileData } from '@/types';

interface SearchProps {
  onSearch: (query: string) => void;
  onProfileClick: (profile: ProfileData) => void;
  searchResults: ProfileData[];
}

export default function Search({ onSearch, onProfileClick, searchResults }: SearchProps) {
  const [query, setQuery] = useState('');

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-4 p-4 rounded-lg shadow-inner bg-praxis-bg-light-900 border border-praxis-bg-light-800 dark:bg-praxis-bg-dark-800 dark:border-praxis-bg-dark-700">
        <h1 className="text-2xl font-bold text-praxis-blue-800 dark:text-praxis-blue-400">Find Talent</h1>
        <p className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400 text-center">
          Search for top talent by name or skill, verified by on-chain credentials.
        </p>
        <div className="flex w-full space-x-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearchClick();
            }}
            placeholder="Search for a praxer or skill..."
            className="flex-1 p-3 rounded-lg bg-praxis-bg-light-800 text-praxis-bg-light-100 placeholder-praxis-bg-light-500 border border-praxis-bg-light-700 focus:outline-none focus:ring-2 focus:ring-praxis-blue-800 dark:bg-praxis-bg-dark-900 dark:text-praxis-bg-dark-100 dark:placeholder-praxis-bg-dark-500 dark:border-praxis-bg-dark-700"
          />
          <button
            onClick={handleSearchClick}
            className="p-3 rounded-lg bg-praxis-blue-800 text-white font-semibold hover:bg-praxis-blue-700 transition-colors dark:bg-praxis-blue-400 dark:hover:bg-praxis-blue-300"
          >
            Search
          </button>
        </div>
      </div>

      {searchResults.length > 0 && (
        <div className="p-4 rounded-lg bg-praxis-bg-light-900 border border-praxis-bg-light-800 dark:bg-praxis-bg-dark-800 dark:border-praxis-bg-dark-700">
          <h2 className="text-xl font-bold mb-4 text-praxis-blue-800 dark:text-praxis-blue-400">Search Results</h2>
          <ul className="space-y-4">
            {searchResults.map((profile, index) => (
              <li
                key={index}
                onClick={() => onProfileClick(profile)}
                className="flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-transform duration-200 hover:scale-[1.02] bg-praxis-bg-light-800 dark:bg-praxis-bg-dark-900 shadow"
              >
                <FaUserCircle className="text-4xl text-praxis-blue-800 dark:text-praxis-blue-400" />
                <div className="flex-1">
                  <span className="text-lg font-semibold text-praxis-bg-light-200 dark:text-praxis-bg-dark-200">{profile.name}</span>
                  <p className="text-sm text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">{profile.title}</p>
                </div>
                <FaCheckCircle className="text-praxis-blue-800 dark:text-praxis-blue-400" title="Verified" />
              </li>
            ))}
          </ul>
        </div>
      )}

      <Leaderboard onProfileClick={onProfileClick} />
    </div>
  );
}