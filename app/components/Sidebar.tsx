// components/Sidebar.tsx
import { FaTimes, FaHome, FaSearch, FaBriefcase, FaCertificate, FaUser, FaChartLine, FaWallet } from 'react-icons/fa';
import Image from 'next/image';
import praxisLogo from '@/public/praxis_logo.jpg';
import type { ActiveTabType } from '@/app/page';

interface SidebarProps {
  activeTab: ActiveTabType;
  setActiveTab: (tab: ActiveTabType) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ activeTab, setActiveTab, isSidebarOpen, setIsSidebarOpen }: SidebarProps) {
  const handleTabClick = (tab: ActiveTabType) => {
    setActiveTab(tab);
    setIsSidebarOpen(false);
  };
  
  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition-transform duration-200 ease-in-out z-50 w-64 bg-praxis-bg-light-950 dark:bg-praxis-bg-dark-950 p-6 shadow-lg`}
      >
        <div className="flex justify-between items-center mb-10">
          <Image src={praxisLogo} alt="Praxis Logo" width={120} />
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-praxis-bg-light-200 dark:text-praxis-bg-dark-200 text-xl">
            <FaTimes />
          </button>
        </div>
        <nav>
          <ul className="space-y-4">
            <li className={`p-3 rounded-lg flex items-center space-x-3 transition-colors duration-200 ${activeTab === 'home' ? 'bg-praxis-blue-800 text-white' : 'hover:bg-praxis-bg-light-800 dark:hover:bg-praxis-bg-dark-800'}`}>
              <a onClick={() => handleTabClick('home')} className="flex items-center space-x-3 w-full cursor-pointer">
                <FaHome />
                <span>Home</span>
              </a>
            </li>
            <li className={`p-3 rounded-lg flex items-center space-x-3 transition-colors duration-200 ${activeTab === 'my-profile' ? 'bg-praxis-blue-800 text-white' : 'hover:bg-praxis-bg-light-800 dark:hover:bg-praxis-bg-dark-800'}`}>
              <a onClick={() => handleTabClick('my-profile')} className="flex items-center space-x-3 w-full cursor-pointer">
                <FaUser />
                <span>My Profile</span>
              </a>
            </li>
            <li className={`p-3 rounded-lg flex items-center space-x-3 transition-colors duration-200 ${activeTab === 'search' ? 'bg-praxis-blue-800 text-white' : 'hover:bg-praxis-bg-light-800 dark:hover:bg-praxis-bg-dark-800'}`}>
              <a onClick={() => handleTabClick('search')} className="flex items-center space-x-3 w-full cursor-pointer">
                <FaSearch />
                <span>Find Talent</span>
              </a>
            </li>
            <li className={`p-3 rounded-lg flex items-center space-x-3 transition-colors duration-200 ${activeTab === 'jobs' ? 'bg-praxis-blue-800 text-white' : 'hover:bg-praxis-bg-light-800 dark:hover:bg-praxis-bg-dark-800'}`}>
              <a onClick={() => handleTabClick('jobs')} className="flex items-center space-x-3 w-full cursor-pointer">
                <FaBriefcase />
                <span>Find Work</span>
              </a>
            </li>
            <li className={`p-3 rounded-lg flex items-center space-x-3 transition-colors duration-200 ${activeTab === 'assessment' ? 'bg-praxis-blue-800 text-white' : 'hover:bg-praxis-bg-light-800 dark:hover:bg-praxis-bg-dark-800'}`}>
              <a onClick={() => handleTabClick('assessment')} className="flex items-center space-x-3 w-full cursor-pointer">
                <FaCertificate />
                <span>Get Certified</span>
              </a>
            </li>
            <li className={`p-3 rounded-lg flex items-center space-x-3 transition-colors duration-200 ${activeTab === 'tracker' ? 'bg-praxis-blue-800 text-white' : 'hover:bg-praxis-bg-light-800 dark:hover:bg-praxis-bg-dark-800'}`}>
              <a onClick={() => handleTabClick('tracker')} className="flex items-center space-x-3 w-full cursor-pointer">
                <FaChartLine />
                <span>Job Tracker</span>
              </a>
            </li>
            <li className={`p-3 rounded-lg flex items-center space-x-3 transition-colors duration-200 ${activeTab === 'wallet' ? 'bg-praxis-blue-800 text-white' : 'hover:bg-praxis-bg-light-800 dark:hover:bg-praxis-bg-dark-800'}`}>
              <a onClick={() => handleTabClick('wallet')} className="flex items-center space-x-3 w-full cursor-pointer">
                <FaWallet />
                <span>Wallet</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
    </>
  );
}