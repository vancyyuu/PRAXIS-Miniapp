// components/MyProfile.tsx
import Image from 'next/image';
import { FaUser, FaStar, FaGlobe } from 'react-icons/fa';

interface Badge {
    name: string;
    imageUrl: string;
}

interface MyProfileProps {
    name: string;
    title: string;
    avatarUrl: string;
    badges: Badge[];
}

export default function MyProfile({ name, title, avatarUrl, badges }: MyProfileProps) {
    return (
        <div className="space-y-6">
            <div className="flex flex-col items-center space-y-4 p-4 rounded-lg shadow-inner bg-praxis-bg-light-900 border border-praxis-bg-light-800 dark:bg-praxis-bg-dark-800 dark:border-praxis-bg-dark-700">
                <h1 className="text-2xl font-bold text-praxis-blue-800 dark:text-praxis-blue-400">My Profile</h1>
                <p className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400 text-center">
                    Your on-chain identity and skills, all in one place.
                </p>
            </div>

            <div className="bg-praxis-bg-light-900 dark:bg-praxis-bg-dark-800 rounded-lg shadow-lg p-6 space-y-4 border border-praxis-bg-light-800 dark:border-praxis-bg-dark-700">
                <div className="flex flex-col items-center space-y-3">
                    <Image
                        src={avatarUrl}
                        alt={`${name}'s avatar`}
                        width={96}
                        height={96}
                        className="rounded-full shadow-md"
                    />
                    <h2 className="text-2xl font-bold text-praxis-bg-light-200 dark:text-praxis-bg-dark-200">{name}</h2>
                    <p className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">{title}</p>
                </div>
            </div>

            <div className="bg-praxis-bg-light-900 dark:bg-praxis-bg-dark-800 rounded-lg shadow-lg p-6 space-y-4 border border-praxis-bg-light-800 dark:border-praxis-bg-dark-700">
                <h3 className="text-xl font-semibold flex items-center space-x-2 text-praxis-blue-800 dark:text-praxis-blue-400">
                    <FaStar /> <span>On-Chain Badges</span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                    {badges.map((badge) => (
                        <div key={badge.name} className="flex items-center space-x-2 p-2 rounded-lg bg-praxis-bg-light-800 dark:bg-praxis-bg-dark-900">
                            <Image
                                src={badge.imageUrl}
                                alt={`${badge.name} badge`}
                                width={40}
                                height={40}
                            />
                            <span className="text-praxis-bg-light-200 dark:text-praxis-bg-dark-200 text-sm">{badge.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-praxis-bg-light-900 dark:bg-praxis-bg-dark-800 rounded-lg shadow-lg p-6 space-y-4 border border-praxis-bg-light-800 dark:border-praxis-bg-dark-700">
                <h3 className="text-xl font-semibold flex items-center space-x-2 text-praxis-blue-800 dark:text-praxis-blue-400">
                    <FaGlobe /> <span>Web3 Profile</span>
                </h3>
                <p className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">
                    Your Web3 profile is a direct link to your on-chain activity and reputation. Connect your wallet to prove ownership.
                </p>
            </div>
        </div>
    );
}