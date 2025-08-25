// components/JobDetails.tsx
import { FaArrowLeft, FaCheckCircle, FaFileContract } from 'react-icons/fa'; // Import the new icon
import { Job } from '@/types';
import { useState } from 'react';

// Correct Props Interface
interface JobDetailsProps {
  job: Job;
  onBack: () => void;
  userSkills: string[];
}

export default function JobDetails({ job, onBack, userSkills }: JobDetailsProps) {
  // New state to manage the job application status
  const [qualifiedJobStatus, setQualifiedJobStatus] = useState<'unapplied' | 'accepted'>('unapplied');

  // New function to handle the contract acceptance
  const handleContractAccept = () => {
    setQualifiedJobStatus('accepted');
    // NOTE: In a real app, this is where you'd trigger the blockchain transaction
    window.alert("Smart contract transaction initiated. You are now officially hired!");
  };

  const isRecommendedJob = job.title === "Full-Stack Web3 Developer";

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center p-4 rounded-lg shadow-inner bg-praxis-bg-light-950 border border-praxis-bg-light-900 dark:bg-praxis-bg-dark-900 dark:border-praxis-bg-dark-950">
        <button onClick={onBack} className="text-praxis-blue-800 dark:text-praxis-blue-400">
          <FaArrowLeft className="text-2xl" />
        </button>
        <h1 className="text-2xl font-bold text-praxis-blue-800 dark:text-praxis-blue-400">Job Details</h1>
        <div className="w-6"></div> {/* Spacer for alignment */}
      </div>

      <div className="p-6 rounded-lg shadow-lg bg-praxis-bg-light-950 border border-praxis-bg-light-900 dark:bg-praxis-bg-dark-900 dark:border-praxis-bg-dark-950">
        <h2 className="text-xl font-semibold text-praxis-bg-light-100 dark:text-praxis-bg-dark-200">{job.title}</h2>
        <p className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400 mb-4">{job.company}</p>

        <h3 className="text-lg font-semibold text-praxis-bg-light-100 dark:text-praxis-bg-dark-200 mt-4">Description</h3>
        <p className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">{job.description}</p>

        <h3 className="text-lg font-semibold text-praxis-bg-light-100 dark:text-praxis-bg-dark-200 mt-4">Salary</h3>
        <p className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">{job.salary}</p>

        <h3 className="text-lg font-semibold text-praxis-bg-light-100 dark:text-praxis-bg-dark-200 mt-4">Required Skills</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {job.requiredSkills.map((skill, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded-full text-xs font-semibold
                ${userSkills.includes(skill)
                  ? 'bg-praxis-blue-400 text-white'
                  : 'bg-praxis-bg-light-800 dark:bg-praxis-bg-dark-950 text-praxis-bg-light-400 dark:text-praxis-bg-dark-400'
                }`}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Conditional rendering for the "Accept Offer" button */}
        {isRecommendedJob && qualifiedJobStatus === 'unapplied' && (
          <div className="mt-6 text-center">
            <span className="text-praxis-blue-800 dark:text-praxis-blue-400 font-semibold">
              Congratulations! You are qualified for this role.
            </span>
            <button
              onClick={handleContractAccept}
              className="mt-2 py-2 px-6 rounded-lg bg-green-600 text-white font-bold transition-colors duration-200 hover:bg-green-700 w-full"
            >
              Accept Offer
            </button>
          </div>
        )}

        {/* Conditional rendering for the "Contract Signed" status */}
        {isRecommendedJob && qualifiedJobStatus === 'accepted' && (
          <div className="mt-6 text-center space-y-2">
            <span className="text-green-500 font-bold flex items-center justify-center">
              <FaCheckCircle className="mr-2" /> Contract Signed
            </span>
            <button
              className="py-2 px-6 rounded-lg bg-praxis-blue-800 text-white font-bold transition-colors duration-200 hover:bg-praxis-blue-700 w-full flex items-center justify-center"
            >
              <FaFileContract className="mr-2" /> View Contract
            </button>
          </div>
        )}
      </div>
    </div>
  );
}