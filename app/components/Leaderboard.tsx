// components/Leaderboard.tsx
import { FaStar } from 'react-icons/fa';
import Image from 'next/image'; // Import the Image component
import { ProfileData, Badge } from '@/types';

const topPraxers: (ProfileData & { rank: number })[] = [
  { 
    name: "Lance Joseph De Vera", 
    title: "Back-End Developer, Cybersecurity Specialist", 
    badges: [
      { name: "Node.js", imageUrl: "https://via.placeholder.com/30/ff5733/ffffff?text=S" }, 
      { name: "Linux", imageUrl: "https://via.placeholder.com/30/3498db/ffffff?text=W3" }
    ], 
    rank: 1, 
    avatarUrl: "/images/lance.png",
    fullProfileUrl: "https://www.your-praxis-site.com/profile/ljdevera"
  },
  { 
    name: "Cyrah Manongdo", 
    title: "Back-End Developer, Cybersecurity Specialist", 
    badges: [
      { name: "Node.js", imageUrl: "https://via.placeholder.com/30/e67e22/ffffff?text=R" }, 
      { name: "Linux", imageUrl: "https://via.placeholder.com/30/2ecc71/ffffff?text=B" }
    ], 
    rank: 2, 
    // FIX: Removed the incorrect '/public' from the path
    avatarUrl: "/images/cyy.png",
    fullProfileUrl: "https://www.your-praxis-site.com/profile/cyrahmanongdo"
  },
  { 
    name: "Gwyneth Zoe Basto", 
    title: "Graphics Designer, Front-End Developer", 
    badges: [
      { name: "Canva", imageUrl: "https://via.placeholder.com/30/f1c40f/000000?text=JS" }, 
      { name: "CSS/Tailwind", imageUrl: "https://via.placeholder.com/30/2c3e50/ffffff?text=NJS" }
    ], 
    rank: 3, 
    // FIX: Removed the incorrect '/public' from the path
    avatarUrl: "/images/zoe.png",
    fullProfileUrl: "https://www.your-praxis-site.com/profile/matttrinidad"
  },
  { 
    name: "Matt Jethro Trinidad", 
    title: "Front-End Developer", 
    badges: [
      { name: "ReactJS", imageUrl: "https://via.placeholder.com/30/f1c40f/000000?text=JS" }, 
      { name: "CSS/Tailwind", imageUrl: "https://via.placeholder.com/30/2c3e50/ffffff?text=NJS" }
    ], 
    rank: 4, 
    // FIX: Removed the incorrect '/public' from the path
    avatarUrl: "/images/matt.png",
    fullProfileUrl: "https://www.your-praxis-site.com/profile/matttrinidad"
  },
  { 
    name: "Juric Renz-Idly Macaranas", 
    title: "Front-End Developer", 
    badges: [
      { name: "ReactJS", imageUrl: "https://via.placeholder.com/30/f1c40f/000000?text=JS" }, 
      { name: "Next.js", imageUrl: "https://via.placeholder.com/30/2c3e50/ffffff?text=NJS" }
    ], 
    rank: 5, 
    // FIX: Removed the incorrect '/public' from the path
    avatarUrl: "/images/juric.png",
    fullProfileUrl: "https://www.your-praxis-site.com/profile/matttrinidad"
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
            
            {/* FIX: Use the next/image component to display the avatar */}
            <Image
              src={praxer.avatarUrl}
              alt={`${praxer.name}'s avatar`}
              width={40} 
              height={40}
              className="rounded-full flex-shrink-0"
            />
            
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