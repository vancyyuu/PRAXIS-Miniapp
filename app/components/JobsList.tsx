// components/JobsList.tsx
import { FaCheckCircle } from 'react-icons/fa';

interface Job {
  title: string;
  company: string;
  description: string;
  salary: string;
  requiredSkills: string[];
}

interface JobsListProps {
  onJobClick: (job: Job) => void;
  userSkills: string[];
}

export default function JobsList({ onJobClick, userSkills }: JobsListProps) {
  const jobs: Job[] = [
    {
      title: "Blockchain Developer",
      company: "Innovate Labs",
      description: "Develop and maintain smart contracts and dApps on the Base blockchain.",
      salary: "₱70,000 - ₱100,000",
      requiredSkills: ["Smart Contracts", "Solidity", "Node.js", "Web Development"]
    },
    {
      title: "UI/UX Designer",
      company: "Creative Co.",
      description: "Design intuitive and visually appealing user interfaces for web applications.",
      salary: "₱50,000 - ₱75,000",
      requiredSkills: ["UI/UX Design", "Figma", "Prototyping"]
    },
    {
      title: "Full-Stack Engineer",
      company: "Tech Solutions",
      description: "Build scalable web applications from front to back, focusing on performance.",
      salary: "₱80,000 - ₱120,000",
      requiredSkills: ["Web Development", "Node.js", "Databases"]
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center p-4 rounded-lg bg-praxis-bg-light-900 border border-praxis-bg-light-800 dark:bg-praxis-bg-dark-800 dark:border-praxis-bg-dark-700">
        <h1 className="text-2xl font-bold text-praxis-blue-800">Find Work</h1>
        <p className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">
          Apply your verified skills to jobs that match your talent.
        </p>
      </div>

      <div className="space-y-4">
        {jobs.map((job, index) => {
          const matchedSkills = job.requiredSkills.filter(skill => userSkills.includes(skill));
          const isMatch = matchedSkills.length > 0;

          return (
            <div
              key={index}
              className="p-4 rounded-lg cursor-pointer transition-transform duration-200 hover:scale-[1.02] bg-praxis-bg-light-900 border border-praxis-bg-light-800 dark:bg-praxis-bg-dark-800 dark:border-praxis-bg-dark-700"
              onClick={() => onJobClick(job)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-bold text-praxis-blue-800">{job.title}</h2>
                  <p className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">{job.company}</p>
                </div>
                {isMatch && (
                  <span className="flex items-center text-sm font-semibold text-praxis-blue-800">
                    <FaCheckCircle className="mr-1" /> Skill Match
                  </span>
                )}
              </div>
              <p className="mt-2 text-praxis-bg-light-300 dark:text-praxis-bg-dark-300 line-clamp-2">
                {job.description}
              </p>
              <div className="mt-2 text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">
                <p className="font-semibold">{job.salary}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}