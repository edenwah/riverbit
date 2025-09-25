import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
const ToggleWithText = ({ options, value, onChange }) => {
    return (_jsx("div", { className: "flex items-center gap-2 shrink-0 bg-[#0D1117] p-1 rounded-sm border border-[#30363D]", children: options.map((option) => (_jsx("button", { className: `flex-1 flex flex-col items-start py-3 px-3 rounded border-0 transition-all ${value === option ? "bg-fuchsia-800 text-white" : "bg-transparent text-zinc-400"}`, onClick: () => onChange(option), type: "button", children: _jsx("span", { className: "text-sm w-full", children: option }) }, option))) }));
};
export default ToggleWithText;
