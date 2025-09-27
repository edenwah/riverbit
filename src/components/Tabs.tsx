import React, { useRef, useEffect, useState } from "react";

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const activeBtn = Array.from(containerRef.current.children).find(
      (child) => (child as HTMLElement).dataset.tab === activeTab
    ) as HTMLElement;

    if (activeBtn) {
      setUnderlineStyle({
        left: activeBtn.offsetLeft,
        width: activeBtn.offsetWidth,
      });
    }
  }, [activeTab, tabs]);

  return (
    <div className="text-nowrap relative flex border-b border-[#30363D]" ref={containerRef}>
      {/* Sliding underline */}
      <div
        className="absolute bottom-0 h-[2px] bg-[#92318D] transition-all duration-300 ease-in-out"
        style={{ left: underlineStyle.left, width: underlineStyle.width }}
      />

      {tabs.map((tab) => (
        <button
          key={tab}
          data-tab={tab}
          className={`flex-1 text-sm py-4 px-2 text-center transition-colors duration-300 ${
            activeTab === tab ? "text-white font-bold" : "text-zinc-400"
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
