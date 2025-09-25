import React from "react";
interface TabsProps {
    tabs: string[];
    activeTab: string;
    onTabChange: (tab: string) => void;
}
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
