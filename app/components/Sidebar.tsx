// components/Sidebar.tsx
"use client";

import { FaBars, FaTimes } from 'react-icons/fa';
import { ActiveTabType } from '@/app/page';

interface SidebarProps {
  activeTab: ActiveTabType;
  setActiveTab: (tab: ActiveTabType) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ activeTab, setActiveTab, isSidebarOpen, setIsSidebarOpen }: SidebarProps) {
  const handleNavigation = (tab: ActiveTabType) => {
    setActiveTab(tab);
    setIsSidebarOpen(false);
  };

  const menuItems: { name: string; tab: ActiveTabType }[] = [
    { name: "Praxis", tab: "home" }, // New home tab
    { name: "Find Talent", tab: "search" }, // Renamed from Find Praxers
    { name: "Find Work", tab: "jobs" }, // Renamed from Find Jobs
    { name: "Get Certified", tab: "assessment" },
    { name: "Wallet", tab: "wallet" },
  ];

  return (
    <>
      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        ></div>
      )}

      {/* Sidebar Content */}
      <aside 
        className={`fixed inset-y-0 left-0 bg-praxis-bg-dark-900 w-64 p-6 z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-praxis-bg-dark-200">Praxis</h2>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="text-praxis-bg-dark-400 hover:text-praxis-bg-dark-200 text-2xl"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col space-y-3">
          {menuItems.map(item => (
            <button
              key={item.tab}
              onClick={() => handleNavigation(item.tab)}
              className={`text-lg font-medium py-3 px-4 rounded-lg text-left transition-colors ${
                activeTab === item.tab ? 'bg-praxis-blue-800 text-praxis-bg-dark-100' : 'hover:bg-praxis-bg-dark-800 text-praxis-bg-dark-300'
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}