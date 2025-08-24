// components/Profile.tsx
"use client";

import Image from 'next/image';

interface Badge {
    name: string;
}

interface ProfileProps {
    graduateData: {
        name: string;
        title: string;
        avatarUrl: string;
        badges: Badge[];
        fullProfileUrl: string;
    };
    onBack: () => void;
}

// This component displays the graduate's profile
export default function Profile({ graduateData, onBack }: ProfileProps) {
  return (
    <div className="flex flex-col items-center p-6 text-center">
      <button onClick={onBack} className="self-start mb-4 text-blue-400">
        &lt; Back to Search
      </button>

      <Image 
        src={graduateData.avatarUrl} 
        alt={`${graduateData.name}'s avatar`} 
        width={100} 
        height={100} 
        className="rounded-full mb-4"
      />
      
      <h1 className="text-2xl font-bold mb-2">{graduateData.name}</h1>
      <p className="text-lg text-gray-400 mb-4">{graduateData.title}</p>

      <h2 className="text-xl font-semibold mb-2">Verified Skills</h2>
      <ul className="list-disc list-inside text-left text-gray-300 mb-6">
        {graduateData.badges.map((badge, index) => (
          <li key={index}>
            <span className="text-green-400">&#x2713;</span> {badge.name}
          </li>
        ))}
      </ul>
      
      <a 
        href={graduateData.fullProfileUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
      >
        View Full Profile
      </a>
    </div>
  );
}