// components/JobsList.tsx
import { FaBriefcase, FaUserTie, FaSearchDollar, FaStar, FaCheckCircle, FaWallet } from 'react-icons/fa';
import { useMemo, useState } from 'react';
import { Job } from '@/types'; // Make sure this import is correct

interface JobsListProps {
  onJobClick: (job: Job) => void;
  userSkills: string[];
}

const allJobs: Job[] = [
  {
    title: "Web3 Smart Contract Auditor",
    company: "Chainlink",
    description: "Audit and secure smart contracts for various DeFi protocols.",
    salary: "$150,000 - $200,000",
    requiredSkills: ["Solidity", "Hardhat", "Truffle", "EVM"],
  },
  {
    title: "On-Chain Data Analyst",
    company: "Dune Analytics",
    description: "Analyze blockchain data to provide insights for crypto projects.",
    salary: "$100,000 - $130,000",
    requiredSkills: ["SQL", "Dune Analytics", "Python", "Data Science"],
  },
  {
    title: "DeFi Frontend Developer",
    company: "Aave",
    description: "Build user-friendly interfaces for decentralized finance applications.",
    salary: "$120,000 - $160,000",
    requiredSkills: ["React", "TypeScript", "Ethers.js", "Web3.js"],
  },
  {
    title: "Blockchain Protocol Engineer",
    company: "Ethereum Foundation",
    description: "Develop and maintain core blockchain protocols and research new consensus mechanisms.",
    salary: "$180,000 - $250,000",
    requiredSkills: ["Go", "Rust", "Cryptography", "Distributed Systems"],
  },
  {
    title: "Full-Stack Web3 Developer",
    company: "Praxis",
    description: "Build both the front-end and back-end for our new decentralized application.",
    salary: "$130,000 - $170,000",
    requiredSkills: ["Web Development", "Node.js", "UI/UX Design", "Figma"],
  },
];

export default function JobsList({ onJobClick, userSkills }: JobsListProps) {
  const [qualifiedJobStatus, setQualifiedJobStatus] = useState<'unapplied' | 'accepted'>('unapplied');

  const recommendedJobs = useMemo(() => {
    return allJobs.filter(job => job.requiredSkills.some(skill => userSkills.includes(skill)));
  }, [userSkills]);

  const qualifiedJob = recommendedJobs.find(job => job.title === "Full-Stack Web3 Developer");

  const handleContractAccept = () => {
    setQualifiedJobStatus('accepted');
    alert("Smart contract transaction initiated. You are now officially hired!");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-4 p-4 rounded-lg shadow-inner bg-praxis-bg-light-950 border border-praxis-bg-light-900 dark:bg-praxis-bg-dark-900 dark:border-praxis-bg-dark-950">
        <h1 className="text-2xl font-bold text-praxis-blue-800 dark:text-praxis-blue-400">Find Work</h1>
        <p className="text-praxis-bg-light-500 dark:text-praxis-bg-dark-400 text-center">
          Explore job listings in the web3 space. We've got you covered!
        </p>
      </div>

      <div className="space-y-4">
        {recommendedJobs.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-praxis-blue-800 dark:text-praxis-blue-400 flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              Recommended for You
            </h2>
            {recommendedJobs.map((job, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow-md border border-praxis-bg-light-900 dark:border-praxis-bg-dark-950 hover:shadow-lg transition-shadow duration-200 cursor-pointer bg-praxis-bg-light-950 dark:bg-praxis-bg-dark-900"
                onClick={() => onJobClick(job)}
              >
                <h3 className="text-xl font-semibold text-praxis-bg-light-100 dark:text-praxis-bg-dark-200">{job.title}</h3>
                <p className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">{job.company}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {job.requiredSkills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
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
                {job.title === "Full-Stack Web3 Developer" && qualifiedJobStatus === 'unapplied' && (
                  <div className="mt-4 text-center">
                    <span className="text-praxis-blue-800 dark:text-praxis-blue-400 font-semibold">
                      You are highly qualified for this role!
                    </span>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleContractAccept(); }}
                      className="mt-2 py-2 px-6 rounded-lg bg-green-600 text-white font-bold transition-colors duration-200 hover:bg-green-700"
                    >
                      Accept Offer
                    </button>
                  </div>
                )}
                {job.title === "Full-Stack Web3 Developer" && qualifiedJobStatus === 'accepted' && (
                  <div className="mt-4 text-center">
                    <span className="text-green-500 font-bold flex items-center justify-center">
                      <FaCheckCircle className="mr-2" /> Contract Signed
                    </span>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="mt-2 py-2 px-6 rounded-lg bg-praxis-blue-800 text-white font-bold transition-colors duration-200 hover:bg-praxis-blue-700"
                    >
                      <FaWallet className="mr-2" /> View Contract
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <h2 className="text-lg font-bold text-praxis-blue-800 dark:text-praxis-blue-400 flex items-center gap-2">
          <FaBriefcase className="text-praxis-blue-800 dark:text-praxis-blue-400" />
          All Jobs
        </h2>
        {allJobs.map((job, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-md border border-praxis-bg-light-900 dark:border-praxis-bg-dark-950 hover:shadow-lg transition-shadow duration-200 cursor-pointer bg-praxis-bg-light-950 dark:bg-praxis-bg-dark-900"
            onClick={() => onJobClick(job)}
          >
            <h3 className="text-xl font-semibold text-praxis-bg-light-100 dark:text-praxis-bg-dark-200">{job.title}</h3>
            <p className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">{job.company}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {job.requiredSkills.map((skill, skillIndex) => (
                <span key={skillIndex} className="px-2 py-1 rounded-full text-xs font-semibold bg-praxis-bg-light-800 dark:bg-praxis-bg-dark-950 text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}