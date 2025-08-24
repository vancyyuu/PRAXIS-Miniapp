// components/Leaderboard.tsx
import { FaUserCircle, FaStar } from 'react-icons/fa';
import { ProfileData, Badge } from '@/types';

const topPraxers: (ProfileData & { rank: number })[] = [
  { 
    name: "Charlie Green", 
    title: "Solidity Developer", 
    badges: [
      { name: "Solidity", imageUrl: "https://via.placeholder.com/30/ff5733/ffffff?text=S" }, 
      { name: "Web3", imageUrl: "https://via.placeholder.com/30/3498db/ffffff?text=W3" }
    ], 
    rank: 1, 
    avatarUrl: "https://via.placeholder.com/100/3730a3/e0e7ff",
    fullProfileUrl: "https://www.your-praxis-site.com/profile/charliegreen"
  },
  { 
    name: "Dana White", 
    title: "Rust Engineer", 
    badges: [
      { name: "Rust", imageUrl: "https://via.placeholder.com/30/e67e22/ffffff?text=R" }, 
      { name: "Backend", imageUrl: "https://via.placeholder.com/30/2ecc71/ffffff?text=B" }
    ], 
    rank: 2, 
    avatarUrl: "https://via.placeholder.com/100/171717/d0d0d0",
    fullProfileUrl: "https://www.your-praxis-site.com/profile/danawhite"
  },
  { 
    name: "Frank Black", 
    title: "Full-Stack Dev", 
    badges: [
      { name: "JavaScript", imageUrl: "https://via.placeholder.com/30/f1c40f/000000?text=JS" }, 
      { name: "Node.js", imageUrl: "https://via.placeholder.com/30/2c3e50/ffffff?text=NJS" }
    ], 
    rank: 3, 
    avatarUrl: "https://via.placeholder.com/100/a5b4fc/312e81",
    fullProfileUrl: "https://www.your-praxis-site.com/profile/frankblack"
  },
];

interface LeaderboardProps {
  onProfileClick: (profile: ProfileData) => void;
}

export default function Leaderboard({ onProfileClick }: LeaderboardProps) {
  return (
    <div className="p-4 rounded-lg shadow-inner bg-praxis-bg-light-900 border border-praxis-bg-light-800 dark:bg-praxis-bg-dark-800 dark:border-praxis-bg-dark-700">
      <h2 className="text-xl font-bold mb-4 text-praxis-blue-800 dark:text-praxis-blue-400">Top Praxers</h2>
      <ul className="space-y-4">
        {topPraxers.map((praxer) => (
          <li 
            key={praxer.name} 
            className="flex items-center space-x-4 p-3 rounded-lg bg-praxis-bg-light-800 dark:bg-praxis-bg-dark-900 shadow"
          >
            <span className="font-bold text-praxis-blue-800 dark:text-praxis-blue-400 w-6 flex-shrink-0">{praxer.rank}.</span>
            <FaUserCircle className="text-4xl text-praxis-bg-light-400 dark:text-praxis-bg-dark-400 flex-shrink-0" />
            <div className="flex-1">
              <span className="text-lg font-semibold text-praxis-bg-light-200 dark:text-praxis-bg-dark-200">{praxer.name}</span>
              <p className="text-sm text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">{praxer.title}</p>
            </div>
            <div className="flex items-center space-x-1 flex-shrink-0">
              <span className="text-md text-praxis-bg-light-200 dark:text-praxis-bg-dark-200">{praxer.badges.length}</span>
              <FaStar className="text-yellow-500" />
            </div>
            <button
              onClick={() => onProfileClick(praxer)}
              className="py-1 px-3 rounded-lg text-sm text-white font-semibold bg-praxis-blue-800 hover:bg-praxis-blue-700 transition-colors dark:bg-praxis-blue-400 dark:hover:bg-praxis-blue-300"
            >
              View Profile
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}