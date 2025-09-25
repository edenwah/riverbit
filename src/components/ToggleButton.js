import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
const ToggleButton = ({ label, value, onChange }) => {
    return (_jsxs("button", { type: "button", className: "py-2 flex items-center w-full justify-between focus:outline-none", onClick: () => onChange(!value), children: [_jsx("span", { className: "text-[#C9D1D9] text-sm", children: label }), _jsx("div", { className: `shrink-0 flex items-center transition-colors duration-200 rounded-full ${value ? "bg-fuchsia-800" : "bg-zinc-700"} py-0.5 pl-2 pr-0.5`, style: { width: 48, height: 28 }, children: _jsx("div", { className: "bg-white w-5 h-5 rounded-full border border-solid border-white shadow transition-transform duration-200", style: { transform: value ? "translateX(12px)" : "translateX(0)" } }) })] }));
};
export default ToggleButton;
