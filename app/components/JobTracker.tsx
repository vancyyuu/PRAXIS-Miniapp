// components/JobTracker.tsx
import { FaBriefcase, FaHourglassHalf, FaCheckCircle, FaClipboardCheck, FaTimesCircle } from 'react-icons/fa';

interface JobApplication {
  id: number;
  jobTitle: string;
  company: string;
  status: 'Applied' | 'Interview' | 'Offer' | 'Rejected';
  date: string;
}

const jobApplications: JobApplication[] = [
  { id: 1, jobTitle: "On-Chain Smart Contract Auditor", company: "Onchain Security", status: "Applied", date: "Aug 20, 2025" },
  { id: 2, jobTitle: "Decentralized Frontend Engineer", company: "DApp Innovations", status: "Interview", date: "Aug 15, 2025" },
  { id: 3, jobTitle: "Blockchain Data Analyst", company: "Chainlink", status: "Rejected", date: "Aug 10, 2025" },
  { id: 4, jobTitle: "DeFi Product Manager", company: "Aave", status: "Offer", date: "Aug 05, 2025" },
];

const statusIcons = {
  Applied: <FaClipboardCheck className="text-praxis-blue-800 dark:text-praxis-blue-400" />,
  Interview: <FaHourglassHalf className="text-yellow-500" />,
  Offer: <FaCheckCircle className="text-green-500" />,
  Rejected: <FaTimesCircle className="text-red-500" />,
};

const statusColors = {
  Applied: 'text-praxis-blue-800 dark:text-praxis-blue-400',
  Interview: 'text-yellow-500',
  Offer: 'text-green-500',
  Rejected: 'text-red-500',
};

export default function JobTracker() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-4 p-4 rounded-lg shadow-inner bg-praxis-bg-light-900 border border-praxis-bg-light-800 dark:bg-praxis-bg-dark-800 dark:border-praxis-bg-dark-700">
        <h1 className="text-2xl font-bold text-praxis-blue-800 dark:text-praxis-blue-400">Job Tracker</h1>
        <p className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400 text-center">
          Monitor your job applications and stay on top of your search.
        </p>
      </div>

      {jobApplications.map(app => (
        <div key={app.id} className="p-4 rounded-lg shadow bg-praxis-bg-light-900 border border-praxis-bg-light-800 dark:bg-praxis-bg-dark-800 dark:border-praxis-bg-dark-700">
          <div className="flex items-center space-x-2 text-praxis-bg-light-200 dark:text-praxis-bg-dark-200 mb-2">
            <FaBriefcase className="text-praxis-blue-800 dark:text-praxis-blue-400" />
            <h2 className="text-lg font-semibold">{app.jobTitle}</h2>
          </div>
          <p className="text-sm text-praxis-bg-light-400 dark:text-praxis-bg-dark-400 mb-2">{app.company}</p>
          <div className="flex items-center space-x-2 font-semibold">
            {statusIcons[app.status]}
            <span className={statusColors[app.status]}>{app.status}</span>
          </div>
          <p className="text-xs text-praxis-bg-light-500 dark:text-praxis-bg-dark-500 mt-2">Applied: {app.date}</p>
        </div>
      ))}
    </div>
  );
}