// components/SkillAssessment.tsx
import { FaShieldAlt } from 'react-icons/fa';

export default function SkillAssessment() {
  return (
    <div className="space-y-6">
      <div className="text-center p-4 rounded-lg bg-praxis-bg-light-900 border border-praxis-bg-light-800 dark:bg-praxis-bg-dark-800 dark:border-praxis-bg-dark-700">
        <h1 className="text-2xl font-bold text-praxis-blue-800">Get Certified</h1>
        <p className="text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">
          Take a skills-based challenge to earn a verifiable, soul-bound badge.
        </p>
      </div>

      <div className="p-6 rounded-lg bg-praxis-bg-light-900 dark:bg-praxis-bg-dark-800 shadow-lg border border-praxis-bg-light-800 dark:border-praxis-bg-dark-700">
        <h2 className="text-xl font-semibold mb-4 text-praxis-bg-light-200 dark:text-praxis-bg-dark-200">
          Available Challenges
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg flex items-center justify-between bg-praxis-bg-light-800 dark:bg-praxis-bg-dark-900">
            <div className="flex items-center space-x-3">
              <FaShieldAlt className="text-praxis-blue-800 text-3xl" />
              <div>
                <h3 className="text-lg font-semibold text-praxis-bg-light-200 dark:text-praxis-bg-dark-200">Junior Developer</h3>
                <p className="text-sm text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">Validate your coding fundamentals.</p>
              </div>
            </div>
            <button className="py-2 px-4 rounded-lg text-white font-semibold bg-praxis-blue-800 hover:bg-praxis-blue-700 transition-colors">
              Start Assessment
            </button>
          </div>
          <div className="p-4 rounded-lg flex items-center justify-between bg-praxis-bg-light-800 dark:bg-praxis-bg-dark-900">
            <div className="flex items-center space-x-3">
              <FaShieldAlt className="text-praxis-blue-800 text-3xl" />
              <div>
                <h3 className="text-lg font-semibold text-praxis-bg-light-200 dark:text-praxis-bg-dark-200">UI/UX Designer</h3>
                <p className="text-sm text-praxis-bg-light-400 dark:text-praxis-bg-dark-400">Prove your design and prototyping skills.</p>
              </div>
            </div>
            <button className="py-2 px-4 rounded-lg text-white font-semibold bg-praxis-blue-800 hover:bg-praxis-blue-700 transition-colors">
              Start Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}