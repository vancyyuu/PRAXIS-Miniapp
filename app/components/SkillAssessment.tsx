// components/SkillAssessment.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useMiniKit } from "@coinbase/onchainkit/minikit";
import { useAccount } from "wagmi"; // <-- The new, correct import

// Define a type for a badge, as we'll be displaying its properties
interface Badge {
  name: string;
  image: string;
}

const skillBadges: { [key: string]: Badge } = {
  'webdev': {
    name: 'Web Development',
    image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Web+Dev',
  },
  'blockchain': {
    name: 'Blockchain Dev',
    image: 'https://via.placeholder.com/150/008000/FFFFFF?text=Blockchain',
  },
};

export default function SkillAssessment() {
  const { context } = useMiniKit();
  const { address } = useAccount(); // <-- Correct way to get the wallet address
  
  const [assessmentState, setAssessmentState] = useState<'intro' | 'in-progress' | 'passed' | 'failed'>('intro');
  const [answer, setAnswer] = useState('');

  // Hardcoded data to simulate on-chain details
  const onChainData = {
    contractAddress: "0x1234567890abcdef1234567890abcdef12345678",
    tokenId: "84531234567890",
    badgeName: "Blockchain Developer",
  };

  // Use the address from the useAccount hook
  const walletAddress = address || 'Not connected';

  const handleStartAssessment = () => {
    setAssessmentState('in-progress');
  };

  const handleSubmitAnswer = () => {
    if (answer.toLowerCase().includes('base')) {
      setAssessmentState('passed');
    } else {
      setAssessmentState('failed');
    }
  };

  const handleReset = () => {
    setAssessmentState('intro');
    setAnswer('');
  };

  return (
    <div className="p-6 text-center">
      {assessmentState === 'intro' && (
        <>
          <h1 className="text-2xl font-bold mb-4">Skill Assessment</h1>
          <p className="text-lg text-gray-400 mb-6">
            Complete a quick challenge to earn a verifiable on-chain badge.
          </p>
          <button
            onClick={handleStartAssessment}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
          >
            Start Assessment
          </button>
        </>
      )}

      {assessmentState === 'in-progress' && (
        <>
          <h1 className="text-2xl font-bold mb-4">Blockchain Dev Challenge</h1>
          <p className="text-lg text-gray-400 mb-6">
            On which EVM-compatible L2 blockchain is this app running?
          </p>
          <input
            type="text"
            placeholder="Type your answer here"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSubmitAnswer}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
          >
            Submit Answer
          </button>
        </>
      )}

      {assessmentState === 'passed' && (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4 text-green-400">Success!</h1>
          <p className="text-lg text-gray-300 mb-6">
            Congratulations! You've earned the "{onChainData.badgeName}" badge.
          </p>

          <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center mb-6">
            <Image 
              src={skillBadges['blockchain'].image} 
              alt={skillBadges['blockchain'].name + ' Badge'} 
              width={150} 
              height={150}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{onChainData.badgeName}</h3>
            
            <div className="text-left w-full space-y-2 text-gray-400">
              <p className="text-sm">
                **Recipient:** <span className="text-white break-all">{walletAddress}</span>
              </p>
              <p className="text-sm">
                **Contract Address:** <span className="text-white break-all">{onChainData.contractAddress}</span>
              </p>
              <p className="text-sm">
                **Token ID:** <span className="text-white break-all">{onChainData.tokenId}</span>
              </p>
            </div>
          </div>
          
          <button
            onClick={() => window.open(`https://basescan.org/token/${onChainData.contractAddress}?a=${onChainData.tokenId}`, '_blank')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors mb-4"
          >
            View on BaseScan
          </button>
          <button
            onClick={handleReset}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
          >
            Go Back
          </button>
        </div>
      )}

      {assessmentState === 'failed' && (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4 text-red-400">Incorrect!</h1>
          <p className="text-lg text-gray-300 mb-6">
            Please try the challenge again.
          </p>
          <button
            onClick={handleReset}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}