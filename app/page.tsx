// app/page.tsx
"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { useMiniKit, useAddFrame, useOpenUrl } from "@coinbase/onchainkit/minikit";
import { Name, Identity, Address, Avatar, EthBalance } from "@coinbase/onchainkit/identity";
import { ConnectWallet, Wallet, WalletDropdown, WalletDropdownDisconnect } from "@coinbase/onchainkit/wallet";
import { FaBars } from 'react-icons/fa';

import Search from './components/Search';
import Profile from './components/Profile';
import JobsList from './components/JobsList';
import SkillAssessment from './components/SkillAssessment';
import JobDetails from './components/JobDetails';
import TaskTracker from './components/TaskTracker';
import WalletView from './components/WalletView';
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle'; // <-- New import

export type ActiveTabType = 'search' | 'jobs' | 'profile' | 'assessment' | 'job-details' | 'tracker' | 'wallet';

interface Badge {
    name: string;
}

interface ProfileData {
    name: string;
    title: string;
    avatarUrl: string;
    badges: Badge[];
    fullProfileUrl: string;
}

interface Job {
  title: string;
  company: string;
  description: string;
  salary: string;
  requiredSkills: string[];
}

export default function App() {
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const [frameAdded, setFrameAdded] = useState(false);
  
  const [activeTab, setActiveTab] = useState<ActiveTabType>('search');
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const userSkills = ["Web Development", "UI/UX Design", "Figma", "Node.js"];

  const addFrame = useAddFrame();
  const openUrl = useOpenUrl();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  const handleAddFrame = useCallback(async () => {
    const frameAdded = await addFrame();
    setFrameAdded(Boolean(frameAdded));
  }, [addFrame]);

  const saveFrameButton = useMemo(() => {
    if (context && !context.client.added) {
      return (
        <button
          onClick={handleAddFrame}
          className="text-[var(--app-accent)] p-4"
        >
          Save Frame
        </button>
      );
    }
    return null;
  }, [context, handleAddFrame]);
  
  const handleSearch = useCallback((query: string) => {
    if (query.toLowerCase() === "alex") {
      const alexData: ProfileData = {
        name: "Alex Johnson",
        title: "Full-Stack Developer",
        avatarUrl: "https://via.placeholder.com/100/3730a3/e0e7ff",
        badges: [{ name: "Web Development" }, { name: "UX/UI Design" }],
        fullProfileUrl: "https://www.your-praxis-site.com/profile/alexjohnson"
      };
      setProfileData(alexData);
      setActiveTab('profile');
    } else if (query.toLowerCase() === "sophia") {
      const sophiaData: ProfileData = {
        name: "Sophia Chen",
        title: "Digital Marketer",
        avatarUrl: "https://via.placeholder.com/100/171717/d0d0d0",
        badges: [{ name: "SEO Certification" }, { name: "Social Media Strategy" }],
        fullProfileUrl: "https://www.your-praxis-site.com/profile/sophiachen"
      };
      setProfileData(sophiaData);
      setActiveTab('profile');
    } else {
      alert("User not found! Try searching for 'Alex' or 'Sophia'.");
    }
  }, [setActiveTab, setProfileData]);

  const handleJobClick = useCallback((job: Job) => {
    setSelectedJob(job);
    setActiveTab('job-details');
  }, [setActiveTab, setSelectedJob]);

  const handleBackFromJobDetails = useCallback(() => {
    setActiveTab('jobs');
  }, [setActiveTab]);

  const handleBackFromProfile = useCallback(() => {
    setActiveTab('search');
    setProfileData(null);
  }, [setActiveTab, setProfileData]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-praxis-bg-dark-200 bg-praxis-bg-dark-950 dark:text-praxis-bg-light-800 dark:bg-praxis-bg-light-950">
      <Sidebar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      
      <div className="w-full max-w-md mx-auto px-4 py-3">
        <header className="flex justify-between items-center mb-3 h-11">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-praxis-bg-dark-200 text-2xl md:hidden"
          >
            <FaBars />
          </button>
          <div className="flex items-center space-x-2">
            <Wallet className="z-10">
              <ConnectWallet>
                <Name className="text-inherit" />
              </ConnectWallet>
              <WalletDropdown>
                <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                  <Avatar />
                  <Name />
                  <Address />
                  <EthBalance />
                </Identity>
                <WalletDropdownDisconnect />
              </WalletDropdown>
            </Wallet>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <div>{saveFrameButton}</div>
          </div>
        </header>
        
        <main className="flex-1">
          {activeTab === 'search' && <Search onSearch={handleSearch} />}
          {activeTab === 'jobs' && <JobsList onJobClick={handleJobClick} userSkills={userSkills} />}
          {activeTab === 'profile' && profileData && <Profile graduateData={profileData} onBack={handleBackFromProfile} />}
          {activeTab === 'assessment' && <SkillAssessment />}
          {activeTab === 'job-details' && selectedJob && <JobDetails job={selectedJob} onBack={handleBackFromJobDetails} />}
          {activeTab === 'tracker' && <TaskTracker />}
          {activeTab === 'wallet' && <WalletView />}
        </main>

        <footer className="mt-2 pt-4 flex justify-center">
          <button
            onClick={() => openUrl("https://base.org/builders/minikit")}
          >
            <span className="text-sm text-praxis-bg-dark-400">Built on Base with MiniKit</span>
          </button>
        </footer>
      </div>
    </div>
  );
}