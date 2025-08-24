// components/Home.tsx
import Image from 'next/image';

export default function Home() {
    return (
        <div className="flex flex-col items-center text-center p-6">
            <h1 className="text-4xl font-extrabold text-praxis-blue-800 mb-4">
                <span className="text-praxis-bg-light-200 dark:text-praxis-bg-dark-200">Skill.</span>{' '}
                <span className="text-praxis-bg-light-200 dark:text-praxis-bg-dark-200">Verified.</span>{' '}
                <span className="text-praxis-bg-light-200 dark:text-praxis-bg-dark-200">Praxis.</span>
            </h1>
            <p className="text-lg text-praxis-bg-light-300 dark:text-praxis-bg-dark-300 mb-6">
                Prove your talent through practical assessments and earn blockchain-secured, soul-bound skill badges.
            </p>
            <div className="p-4 rounded-lg mb-6">
                <Image 
                    src="/praxis_logo.jpg" 
                    alt="Praxis Logo" 
                    width={200} 
                    height={200} 
                    className="rounded-full"
                />
            </div>
            <p className="text-md text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">
                A new era of hiring, where your skills are your currency.
            </p>
            <p className="mt-8 text-xl font-bold text-praxis-blue-800">
                Need a job? Just Praxis.
            </p>
        </div>
    );
}