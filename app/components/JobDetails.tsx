// components/JobDetails.tsx
import { FaMoneyBillWave, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface JobDetailsProps {
  job: {
    title: string;
    company: string;
    description: string;
    salary: string;
    requiredSkills: string[];
  };
  onBack: () => void;
  userSkills: string[];
}

export default function JobDetails({ job, onBack, userSkills }: JobDetailsProps) {
  const matchedSkills = job.requiredSkills.filter(skill => userSkills.includes(skill));
  const unmatchedSkills = job.requiredSkills.filter(skill => !userSkills.includes(skill));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-praxis-bg-light-900 dark:bg-praxis-bg-dark-800 p-6 rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto border border-praxis-bg-light-800 dark:border-praxis-bg-dark-700">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-bold text-praxis-blue-800">{job.title}</h2>
            <p className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">{job.company}</p>
          </div>
          <button onClick={onBack} className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400 hover:text-praxis-blue-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-4">
          <p className="text-praxis-bg-light-200 dark:text-praxis-bg-dark-200">{job.description}</p>
        </div>

        <div className="mb-4 text-praxis-bg-light-400 dark:text-praxis-bg-dark-400 flex items-center">
          <FaMoneyBillWave className="mr-2 text-praxis-blue-800" />
          <span className="font-semibold">{job.salary}</span>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-praxis-bg-light-200 dark:text-praxis-bg-dark-200 mb-2">Required Skills</h3>
          <ul className="flex flex-wrap gap-2">
            {matchedSkills.map(skill => (
              <li key={skill} className="flex items-center space-x-1 py-1 px-2 rounded-full text-sm bg-green-500/20 text-green-500">
                <FaCheckCircle />
                <span>{skill}</span>
              </li>
            ))}
            {unmatchedSkills.map(skill => (
              <li key={skill} className="flex items-center space-x-1 py-1 px-2 rounded-full text-sm bg-praxis-bg-light-800 dark:bg-praxis-bg-dark-900 text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">
                <FaTimesCircle className="text-praxis-bg-light-500 dark:text-praxis-bg-dark-500" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-end">
          <button className="py-2 px-6 rounded-lg text-white font-semibold bg-praxis-blue-800 hover:bg-praxis-blue-700 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}