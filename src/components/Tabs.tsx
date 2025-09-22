import React from "react";

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  const activeIndex = tabs.indexOf(activeTab);

  return (
    <div className="relative w-full">
      <div className="flex border-b border-[#30363D] w-full items-end">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex-1 text-sm py-[15px] px-4 text-center focus:outline-none transition-colors duration-300 ${
              activeTab === tab ? "text-white font-bold" : "text-zinc-400"
            }`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Sliding underline */}
      <span
        className="absolute bottom-0 left-0 h-[2px] bg-[#92318D] transition-transform duration-300 ease-in-out"
        style={{
          width: `${100 / tabs.length}%`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />
    </div>
  );
};

export default Tabs;
