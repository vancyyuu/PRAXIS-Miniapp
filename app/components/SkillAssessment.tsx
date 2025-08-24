// components/SkillAssessment.tsx
import { FaCode, FaCubes } from 'react-icons/fa';

interface SkillAssessmentProps {
  onStartAssessment: (type: 'onchain' | 'webdev') => void;
}

export default function SkillAssessment({ onStartAssessment }: SkillAssessmentProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-4 p-4 rounded-lg shadow-inner bg-praxis-bg-light-900 border border-praxis-bg-light-800 dark:bg-praxis-bg-dark-800 dark:border-praxis-bg-dark-700">
        <h1 className="text-2xl font-bold text-praxis-blue-800 dark:text-praxis-blue-400">Get Certified</h1>
        <p className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400 text-center">
          Complete assessments to earn on-chain badges that showcase your skills.
        </p>
      </div>

      <div className="space-y-4">
        {/* On-Chain Assessment Card */}
        <div className="p-6 rounded-lg shadow-lg border border-praxis-bg-light-800 dark:border-praxis-bg-dark-700 bg-praxis-bg-light-900 dark:bg-praxis-bg-dark-800">
          <div className="flex items-center space-x-4 mb-4">
            <FaCubes className="text-4xl text-praxis-blue-800 dark:text-praxis-blue-400" />
            <h2 className="text-xl font-bold text-praxis-bg-light-200 dark:text-praxis-bg-dark-200">On-Chain Foundations</h2>
          </div>
          <p className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400 mb-4">
            Test your knowledge of blockchain principles, smart contract development, and on-chain interactions.
          </p>
          <button 
            onClick={() => onStartAssessment('onchain')} 
            className="w-full py-2 rounded-md font-semibold bg-praxis-blue-800 dark:bg-praxis-blue-400 text-white hover:bg-praxis-blue-700 dark:hover:bg-praxis-blue-500 transition-colors duration-200"
          >
            Start Assessment
          </button>
        </div>

        {/* Web Dev Assessment Card */}
        <div className="p-6 rounded-lg shadow-lg border border-praxis-bg-light-800 dark:border-praxis-bg-dark-700 bg-praxis-bg-light-900 dark:bg-praxis-bg-dark-800">
          <div className="flex items-center space-x-4 mb-4">
            <FaCode className="text-4xl text-praxis-blue-800 dark:text-praxis-blue-400" />
            <h2 className="text-xl font-bold text-praxis-bg-light-200 dark:text-praxis-bg-dark-200">Web Development Fundamentals</h2>
          </div>
          <p className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400 mb-4">
            Demonstrate your web development skills with a practical coding problem focused on UI/UX and React.
          </p>
          <button 
            onClick={() => onStartAssessment('webdev')} 
            className="w-full py-2 rounded-md font-semibold bg-praxis-blue-800 dark:bg-praxis-blue-400 text-white hover:bg-praxis-blue-700 dark:hover:bg-praxis-blue-500 transition-colors duration-200"
          >
            Start Assessment
          </button>
        </div>
      </div>
    </div>
  );
}