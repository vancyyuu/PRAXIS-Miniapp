// components/JobDetails.tsx
import { FaArrowLeft, FaBriefcase, FaMoneyBill, FaCodeBranch, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { useMemo } from 'react';

interface Job {
  title: string;
  company: string;
  description: string;
  salary: string;
  requiredSkills: string[];
}

interface JobDetailsProps {
  job: Job;
  onBack: () => void;
  userSkills: string[];
}

export default function JobDetails({ job, onBack, userSkills }: JobDetailsProps) {
  const hasAllSkills = useMemo(() => 
    job.requiredSkills.every(skill => userSkills.includes(skill))
  , [job.requiredSkills, userSkills]);

  return (
    <div className="relative space-y-4">
      <button onClick={onBack} className="flex items-center space-x-2 text-praxis-bg-light-400 dark:text-praxis-bg-dark-400 hover:text-praxis-bg-light-200 dark:hover:text-praxis-bg-dark-200 transition-colors">
        <FaArrowLeft />
        <span>Back to Jobs</span>
      </button>

      <div className="p-6 rounded-lg shadow-lg border border-praxis-bg-light-800 dark:border-praxis-bg-dark-700 bg-praxis-bg-light-900 dark:bg-praxis-bg-dark-800">
        <h1 className="text-2xl font-bold text-praxis-blue-800 dark:text-praxis-blue-400 mb-2">{job.title}</h1>
        <p className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">{job.company}</p>

        <div className="flex items-center space-x-2 my-4">
          <FaMoneyBill className="text-green-500" />
          <span className="font-semibold text-praxis-bg-light-200 dark:text-praxis-bg-dark-200">{job.salary}</span>
        </div>

        <h3 className="text-lg font-semibold text-praxis-blue-800 dark:text-praxis-blue-400 mb-2">Description</h3>
        <p className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400 mb-4">{job.description}</p>

        <h3 className="text-lg font-semibold text-praxis-blue-800 dark:text-praxis-blue-400 mb-2">Required Skills</h3>
        <ul className="list-none space-y-2 mb-4">
          {job.requiredSkills.map((skill, index) => (
            <li key={index} className="flex items-center space-x-2 text-praxis-bg-light-200 dark:text-praxis-bg-dark-200">
              {userSkills.includes(skill) ? <FaCheckCircle className="text-green-500" /> : <FaTimesCircle className="text-red-500" />}
              <span>{skill}</span>
            </li>
          ))}
        </ul>

        <div className="p-4 rounded-lg bg-praxis-bg-light-800 dark:bg-praxis-bg-dark-900 text-center">
          <button className={`w-full py-2 rounded-md font-semibold transition-colors duration-200 ${hasAllSkills ? 'bg-praxis-blue-800 dark:bg-praxis-blue-400 text-white' : 'bg-praxis-bg-light-500 dark:bg-praxis-bg-dark-500 text-praxis-bg-light-800 dark:text-praxis-bg-dark-800 cursor-not-allowed'}`}>
            {hasAllSkills ? "Apply Now" : "Missing required skills"}
          </button>
        </div>
      </div>
    </div>
  );
}