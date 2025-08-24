// components/JobsList.tsx
"use client";

import { useMemo } from 'react';

// Define a type for a job posting, including new requiredSkills
interface Job {
  title: string;
  company: string;
  description: string;
  salary: string;
  requiredSkills: string[];
}

// Define the props for this component
interface JobsListProps {
  onJobClick: (job: Job) => void;
  userSkills: string[]; // <-- New prop for user's skills
}

export default function JobsList({ onJobClick, userSkills }: JobsListProps) {
  // This is your placeholder data for job postings
  const allJobPostings: Job[] = [
    {
      title: "UI/UX Designer",
      company: "Innovate Solutions",
      description: "Design user-friendly interfaces for our new app. Flexible hours.",
      salary: "$40/hour",
      requiredSkills: ["UI/UX Design", "Figma", "Web Development"]
    },
    {
      title: "Full-Stack Developer",
      company: "Tech-Forward Agency",
      description: "Build and maintain client websites. Must know React and Node.js.",
      salary: "$55/hour",
      requiredSkills: ["Web Development", "Node.js", "React"]
    },
    {
      title: "Content Writer",
      company: "Marketing Mavericks",
      description: "Create engaging blog posts and social media content for our clients.",
      salary: "$30/hour",
      requiredSkills: ["Writing", "SEO"]
    },
    {
      title: "Blockchain Engineer",
      company: "Future Protocol",
      description: "Develop and deploy smart contracts on Base. Experience with Solidity is a plus.",
      salary: "$80/hour",
      requiredSkills: ["Blockchain Development", "Solidity"]
    },
  ];

  // The "smart" part: Filter jobs based on the user's skills
  const filteredJobs = useMemo(() => {
    if (userSkills.length === 0) {
      return allJobPostings; // If no skills, show all jobs
    }
    return allJobPostings.filter(job => 
      job.requiredSkills.some(skill => userSkills.includes(skill))
    );
  }, [userSkills, allJobPostings]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Open Freelancing Jobs</h1>
      <p className="text-sm text-gray-500 mb-4 text-center">
        Showing jobs that match your skills: {userSkills.join(', ')}
      </p>
      
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job, index) => (
          <div 
            key={index} 
            onClick={() => onJobClick(job)}
            className="bg-gray-800 p-4 rounded-lg mb-4 cursor-pointer hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-1 text-blue-400">{job.title}</h2>
            <p className="text-gray-400 mb-1">{job.company}</p>
            <p className="text-sm text-gray-500 mb-2">{job.salary}</p>
            <p className="text-gray-300">{job.description}</p>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500">
          No jobs found for your skills.
        </div>
      )}
    </div>
  );
}