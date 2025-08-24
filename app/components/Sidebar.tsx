// components/Sidebar.tsx
"use client";

import { FaBars, FaTimes } from 'react-icons/fa';
import { ActiveTabType } from '@/app/page'; // <-- New import from your main page file

interface SidebarProps {
  activeTab: ActiveTabType; // <-- Now uses the shared type
  setActiveTab: (tab: ActiveTabType) => void; // <-- Now uses the shared type
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ activeTab, setActiveTab, isSidebarOpen, setIsSidebarOpen }: SidebarProps) {
  const handleNavigation = (tab: ActiveTabType) => {
    setActiveTab(tab);
    setIsSidebarOpen(false); // Close the sidebar after navigating
  };

  const menuItems: { name: string; tab: ActiveTabType }[] = [
    { name: "Find Praxers", tab: "search" },
    { name: "Find Jobs", tab: "jobs" },
    { name: "Get Certified", tab: "assessment" },
    { name: "Task Tracker", tab: "tracker" },
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
        className={`fixed inset-y-0 left-0 bg-gray-900 w-64 p-6 z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Praxis</h2>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-400 hover:text-white text-2xl"
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
                activeTab === item.tab ? 'bg-blue-600 text-white' : 'hover:bg-gray-800 text-gray-300'
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