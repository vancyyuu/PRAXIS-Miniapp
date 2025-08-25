// components/JobDetails.tsx
import { FaArrowLeft } from 'react-icons/fa';
import { Job } from '@/types'; // Import the Job interface

// Correct Props Interface
interface JobDetailsProps {
  job: Job;
  onBack: () => void;
  userSkills: string[];
}

export default function JobDetails({ job, onBack, userSkills }: JobDetailsProps) {
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
        <h2 className="text-xl font-bold text-praxis-bg-light-100 dark:text-praxis-bg-dark-200">{job.title}</h2>
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
                }`
              }
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}