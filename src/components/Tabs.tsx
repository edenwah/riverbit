import React, { useRef, useEffect, useState } from "react";

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabsRef.current) {
      const activeTabElement = tabsRef.current.querySelector<HTMLButtonElement>(
        `button[data-tab="${activeTab}"]`
      );
      if (activeTabElement) {
        const { offsetWidth, offsetLeft } = activeTabElement;
        setUnderlineStyle({ width: offsetWidth, left: offsetLeft });
      }
    }
  }, [activeTab]);

  return (
    <div className="relative w-full" ref={tabsRef}>
      <div className="flex border-b border-[#30363D] w-full items-end">
        {tabs.map((tab) => (
          <button
            key={tab}
            data-tab={tab}
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
        className="absolute bottom-0 h-[2px] bg-[#92318D] transition-all duration-300 ease-in-out"
        style={{
          width: underlineStyle.width,
          left: underlineStyle.left,
        }}
      />
    </div>
  );
};

export default Tabs;
