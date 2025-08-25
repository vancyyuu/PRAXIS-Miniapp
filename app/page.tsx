// app/page.tsx
"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { useMiniKit, useAddFrame, useOpenUrl, MiniKitProvider } from "@coinbase/onchainkit/minikit";
import { Name, Identity, Address, Avatar, EthBalance } from "@coinbase/onchainkit/identity";
import { ConnectWallet, Wallet, WalletDropdown, WalletDropdownDisconnect } from "@coinbase/onchainkit/wallet";
import { FaBars } from 'react-icons/fa';
import { baseSepolia } from "viem/chains";

// Components
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle';
import Home from './components/Home';
import Search from './components/Search';
import Profile from './components/Profile';
import MyProfile from './components/MyProfile';
import JobsList from './components/JobsList';
import SkillAssessment from './components/SkillAssessment';
import AssessmentProblem from './components/AssessmentProblem';
import JobDetails from './components/JobDetails';
import WalletView from './components/WalletView';
import JobTracker from './components/JobTracker';

// Hooks
import useTheme from './hooks/useTheme';

// Centralized Types
import { ActiveTabType, ProfileData, Job } from '@/types';

export default function App() {
  return (
    <MiniKitProvider chain={baseSepolia}>
      <MainAppContent />
    </MiniKitProvider>
  );
}

function MainAppContent() {
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const [frameAdded, setFrameAdded] = useState(false);
  
  const [activeTab, setActiveTab] = useState<ActiveTabType>('home');
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<ProfileData[]>([]);
  const [selectedProblemType, setSelectedProblemType] = useState<'onchain' | 'webdev' | null>(null);

  const myProfileData = {
    name: "John Doe",
    title: "On-Chain Enthusiast",
    avatarUrl: "https://via.placeholder.com/100/3730a3/e0e7ff",
    badges: [
      { name: "Web Development", imageUrl: "/web-dev-badge.png" },
      { name: "UI/UX Design", imageUrl: "/ui-ux-badge.png" },
      { name: "Figma", imageUrl: "/figma-badge.png" },
      { name: "Node.js", imageUrl: "/nodejs-badge.png" },
    ]
  };

  const addFrame = useAddFrame();
  const openUrl = useOpenUrl();
  const [isDarkMode] = useTheme();

  const userSkills = useMemo(() => myProfileData.badges.map(badge => badge.name), [myProfileData.badges]);

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
          style={{ color: "var(--praxis-accent)" }}
          className="p-4"
        >
          Save Frame
        </button>
      );
    }
    return null;
  }, [context, handleAddFrame]);
  
  const allProfiles: ProfileData[] = useMemo(() => ([
    {
      name: "Alex Johnson",
      title: "Full-Stack Developer",
      avatarUrl: "https://via.placeholder.com/100/3730a3/e0e7ff",
      badges: [{ name: "Web Development", imageUrl: "https://via.placeholder.com/30/f1c40f/000000?text=WD" }, { name: "UX/UI Design", imageUrl: "https://via.placeholder.com/30/2ecc71/ffffff?text=UI" }],
      fullProfileUrl: "https://www.your-praxis-site.com/profile/alexjohnson"
    },
    {
      name: "Sophia Chen",
      title: "Digital Marketer",
      avatarUrl: "https://via.placeholder.com/100/171717/d0d0d0",
      badges: [{ name: "SEO Certification", imageUrl: "https://via.placeholder.com/30/3498db/ffffff?text=SEO" }, { name: "Social Media Strategy", imageUrl: "https://via.placeholder.com/30/9b59b6/ffffff?text=SM" }],
      fullProfileUrl: "https://www.your-praxis-site.com/profile/sophiachen"
    },
  ]), []);
  
  const assessmentProblems = useMemo(() => ({
    onchain: {
      title: 'On-Chain Foundations Assessment',
      problem: `Problem Statement:
A decentralized application (DApp) needs a simple smart contract to manage a list of registered users. The contract should allow users to register their wallet address and store a username.

Requirements:
1.  Create a Solidity smart contract named 'UserRegistry'.
2.  The contract should have a public mapping to store usernames, mapping from an address to a string.
3.  Implement a function 'registerUser' that takes a string '_username' and stores it, associating it with the sender's address (msg.sender).
4.  Implement a public view function 'getUsername' that takes an address and returns the associated username.`,
    },
    webdev: {
      title: 'Web Development Assessment',
      problem: `Problem Statement:
A web page for a new crypto project needs a dynamic user interface component.

Requirements:
1.  Create a React component named 'CryptoTicker'.
2.  This component should display a mock cryptocurrency price.
3.  The price should update every 3 seconds with a new random value to simulate a real-time feed.
4.  The component should display the price with a dollar sign and two decimal places (e.g., $42,500.25).
5.  Use a simple state hook to manage the price.`,
    },
  }), []);

  const handleSearch = useCallback((query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const results = allProfiles.filter(profile => 
      profile.name.toLowerCase().includes(lowerCaseQuery) || 
      profile.title.toLowerCase().includes(lowerCaseQuery)
    );
    setSearchResults(results);
  }, [allProfiles]);

  const handleJobClick = useCallback((job: Job) => {
    setSelectedJob(job);
    setActiveTab('job-details');
  }, [setActiveTab, setSelectedJob]);

  const handleProfileClick = useCallback((profile: ProfileData) => {
    setProfileData(profile);
    setActiveTab('profile');
  }, [setProfileData, setActiveTab]);

  const handleStartAssessment = useCallback((type: 'onchain' | 'webdev') => {
    setSelectedProblemType(type);
    setActiveTab('assessment-problem');
  }, [setActiveTab]);

  const handleAssessmentSubmitted = useCallback(() => {
    setSelectedProblemType(null);
    setActiveTab('assessment');
  }, [setActiveTab]);

  const handleBackFromJobDetails = useCallback(() => {
    setActiveTab('jobs');
  }, [setActiveTab]);

  const handleBackFromProfile = useCallback(() => {
    setActiveTab('search');
    setProfileData(null);
  }, [setActiveTab, setProfileData]);


  return (
    <div className={`flex flex-col min-h-screen font-sans`} style={{ backgroundColor: "var(--praxis-bg)", color: "var(--praxis-text)" }}>
      <Sidebar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      
      <div className="w-full max-w-md mx-auto py-3">
        <header className="flex justify-between items-center mb-3 h-11 px-4">
  <button
    onClick={() => setIsSidebarOpen(true)}
    style={{ color: "var(--praxis-text)" }}
    className="text-2xl"
  >
    <FaBars />
  </button>
  <div className="flex items-center space-x-2">
    <Wallet className="z-10">
      {/* Updated styling for the Connect Wallet button */}
      <ConnectWallet className="px-4 py-2 rounded-full bg-praxis-blue-800 text-white hover:bg-praxis-blue-700 transition-colors">
        <Name className="text-white" />
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
    <ThemeToggle />
    <div>{saveFrameButton}</div>
  </div>
</header>
        
        <main className="flex-1 px-4">
          {activeTab === 'home' && <Home />}
          {activeTab === 'my-profile' && <MyProfile name={myProfileData.name} title={myProfileData.title} avatarUrl={myProfileData.avatarUrl} badges={myProfileData.badges} />}
          {activeTab === 'search' && <Search onSearch={handleSearch} onProfileClick={handleProfileClick} searchResults={searchResults} />}
          {activeTab === 'jobs' && <JobsList onJobClick={handleJobClick} userSkills={userSkills} />}
          {activeTab === 'profile' && profileData && <Profile graduateData={profileData} onBack={handleBackFromProfile} />}
          {activeTab === 'assessment' && <SkillAssessment onStartAssessment={handleStartAssessment} />}
          {activeTab === 'assessment-problem' && selectedProblemType && (
            <AssessmentProblem
              onBack={() => setActiveTab('assessment')}
              onSubmitted={handleAssessmentSubmitted}
              title={assessmentProblems[selectedProblemType].title}
              problem={assessmentProblems[selectedProblemType].problem}
            />
          )}
          {activeTab === 'job-details' && selectedJob && <JobDetails job={selectedJob} onBack={handleBackFromJobDetails} userSkills={userSkills} />}
          {activeTab === 'tracker' && <JobTracker />}
          {activeTab === 'wallet' && <WalletView />}
        </main>

        <footer className="mt-2 pt-4 flex justify-center px-4">
          <button
            onClick={() => openUrl("https://base.org/builders/minikit")}
          >
            <span style={{ color: "var(--praxis-text-muted)" }} className="text-sm">Built on Base with MiniKit</span>
          </button>
        </footer>
      </div>
    </div>
  );
}