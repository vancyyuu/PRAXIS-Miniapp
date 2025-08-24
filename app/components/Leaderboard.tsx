// components/Leaderboard.tsx
import { FaCrown, FaCheckCircle } from 'react-icons/fa';

const topTalent = [
  { name: 'Alex Johnson', title: 'Full-Stack Developer', rank: 1 },
  { name: 'Sophia Chen', title: 'Digital Marketer', rank: 2 },
  { name: 'Marcus Lee', title: 'Data Scientist', rank: 3 },
];

export default function Leaderboard() {
  return (
    <div className="mt-8 p-4 rounded-lg bg-praxis-bg-light-900 shadow-lg border border-praxis-bg-light-800 dark:bg-praxis-bg-dark-800 dark:border-praxis-bg-dark-700">
      <h2 className="text-xl font-bold text-praxis-blue-800 flex items-center mb-4">
        <FaCrown className="text-praxis-blue-800 mr-2" />
        Top Talent Leaderboard
      </h2>
      <ul className="space-y-4">
        {topTalent.map((talent, index) => (
          <li key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-praxis-bg-light-800 dark:bg-praxis-bg-dark-900 transition-transform duration-200 hover:scale-[1.02] shadow">
            <span className="text-2xl font-bold w-8 text-center text-praxis-blue-800">{talent.rank}</span>
            <div className="flex-1">
              <div className="flex items-center">
                <span className="text-lg font-semibold text-praxis-bg-light-200 dark:text-praxis-bg-dark-200">{talent.name}</span>
                <FaCheckCircle className="text-praxis-blue-800 ml-2" title="Skill Verified" />
              </div>
              <p className="text-sm text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">{talent.title}</p>
            </div>
            <a href="#" className="py-1 px-3 rounded-full text-sm font-semibold text-white bg-praxis-blue-800 hover:bg-praxis-blue-700 transition-colors">
              View Profile
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}