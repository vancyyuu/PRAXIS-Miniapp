// components/JobDetails.tsx
"use client";

// Define the type for the job data
interface Job {
  title: string;
  company: string;
  description: string;
  salary: string;
}

// Define the props for this component
interface JobDetailsProps {
    job: Job;
    onBack: () => void;
}

export default function JobDetails({ job, onBack }: JobDetailsProps) {
  return (
    <div className="p-6">
      <button onClick={onBack} className="self-start mb-4 text-blue-400">
        &lt; Back to Jobs
      </button>

      <h1 className="text-3xl font-bold mb-2 text-center">{job.title}</h1>
      <p className="text-xl text-gray-400 mb-4 text-center">{job.company}</p>
      
      <div className="bg-gray-800 p-6 rounded-lg mb-4">
        <h2 className="text-xl font-semibold mb-2 text-blue-400">Description</h2>
        <p className="text-gray-300 mb-4">{job.description}</p>
        <p className="text-lg font-semibold text-gray-500">
          Salary: <span className="text-white">{job.salary}</span>
        </p>
      </div>

      <button
        onClick={() => alert('This would open a job application form!')}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
      >
        Apply Now
      </button>
    </div>
  );
}