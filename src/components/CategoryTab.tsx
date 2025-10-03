import React from "react";

type CategoryTabProps = {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const CategoryTab: React.FC<CategoryTabProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="overflow-auto flex whitespace-nowrap gap-x-4 gap-y-2 px-4 py-2 mb-2 text-sm">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`my-1 px-3 py-1 rounded transition ${
            activeTab === tab
              ? "bg-fuchsia-800 text-white font-bold"
              : "bg-transparent text-zinc-400"
          }`}
          onClick={() => onTabChange(tab)}
          type="button"
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default CategoryTab;
