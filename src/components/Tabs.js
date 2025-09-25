import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
const Tabs = ({ tabs, activeTab, onTabChange }) => {
    const activeIndex = tabs.indexOf(activeTab);
    return (_jsxs("div", { className: "relative w-full", children: [_jsx("div", { className: "flex border-b border-[#30363D] w-full items-end", children: tabs.map((tab) => (_jsx("button", { className: `flex-1 text-sm py-[15px] px-4 text-center focus:outline-none transition-colors duration-300 ${activeTab === tab ? "text-white font-bold" : "text-zinc-400"}`, onClick: () => onTabChange(tab), children: tab }, tab))) }), _jsx("span", { className: "absolute bottom-0 left-0 h-[2px] bg-[#92318D] transition-transform duration-300 ease-in-out", style: {
                    width: `${100 / tabs.length}%`,
                    transform: `translateX(${activeIndex * 100}%)`,
                } })] }));
};
export default Tabs;
