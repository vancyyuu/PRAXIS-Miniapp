// components/AssessmentProblem.tsx
import { FaArrowLeft } from 'react-icons/fa';

interface AssessmentProblemProps {
  onBack: () => void;
  onSubmitted: () => void;
  title: string;
  problem: string;
}

export default function AssessmentProblem({ onBack, onSubmitted, title, problem }: AssessmentProblemProps) {
  return (
    <div className="relative space-y-4">
      <button onClick={onBack} className="flex items-center space-x-2 text-praxis-bg-light-400 dark:text-praxis-bg-dark-400 hover:text-praxis-bg-light-200 dark:hover:text-praxis-bg-dark-200 transition-colors">
        <FaArrowLeft />
        <span>Back to Assessments</span>
      </button>

      <div className="p-6 rounded-lg shadow-lg border border-praxis-bg-light-800 dark:border-praxis-bg-dark-700 bg-praxis-bg-light-900 dark:bg-praxis-bg-dark-800">
        <h1 className="text-2xl font-bold text-praxis-blue-800 dark:text-praxis-blue-400 mb-4">{title}</h1>
        
        <h3 className="text-lg font-semibold text-praxis-blue-800 dark:text-praxis-blue-400 mb-2">Problem Statement:</h3>
        <div className="bg-praxis-bg-light-800 dark:bg-praxis-bg-dark-900 p-4 rounded-md overflow-x-auto whitespace-pre-wrap text-praxis-bg-light-200 dark:text-praxis-bg-dark-200 text-sm">
          {problem}
        </div>
        
        <div className="mt-4 p-4 rounded-lg bg-praxis-bg-light-800 dark:bg-praxis-bg-dark-900 text-center">
          <button 
            onClick={onSubmitted}
            className="w-full py-2 rounded-md font-semibold bg-praxis-blue-800 dark:bg-praxis-blue-400 text-white hover:bg-praxis-blue-700 dark:hover:bg-praxis-blue-500 transition-colors duration-200"
          >
            Submit Solution
          </button>
        </div>
      </div>
    </div>
  );
}