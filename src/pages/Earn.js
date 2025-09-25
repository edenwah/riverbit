import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import RiverbitLogo from "../components/RiverbitLogo";
import DesktopNav from "../components/DesktopNav";
import DesktopNavRight from "../components/DesktopNavRight";
import MobileHeader from "../components/MobileHeader";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";
export default () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [language, setLanguage] = useState("EN");
    const [showLangDropdown, setShowLangDropdown] = useState(false);
    const [showWalletDropdown, setShowWalletDropdown] = useState(false);
    const [showMoreDropdown, setShowMoreDropdown] = useState(false);
    const walletDropdownRef = useRef(null);
    const langDropdownRef = useRef(null);
    const moreDropdownRef = useRef(null);
    { /* Close dropdowns when clicking outside */ }
    useEffect(() => {
        function handleClickOutside(event) {
            if (moreDropdownRef.current &&
                !moreDropdownRef.current.contains(event.target)) {
                setShowMoreDropdown(false);
            }
            if (walletDropdownRef.current &&
                !walletDropdownRef.current.contains(event.target)) {
                setShowWalletDropdown(false);
            }
            if (langDropdownRef.current &&
                !langDropdownRef.current.contains(event.target)) {
                setShowLangDropdown(false);
            }
        }
        if (showMoreDropdown || showWalletDropdown || showLangDropdown) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showMoreDropdown, showWalletDropdown, showLangDropdown]);
    return (_jsx("div", { className: "flex flex-col bg-black min-h-screen", children: _jsxs("div", { className: "self-stretch", children: [_jsxs("div", { className: "hidden xl:flex justify-between items-start self-stretch bg-zinc-900 py-3.5 px-4", children: [_jsxs("div", { className: "flex shrink-0 items-start gap-8", children: [_jsx(RiverbitLogo, {}), _jsx(DesktopNav, {})] }), _jsx(DesktopNavRight, { balance: "$27,345.12", points: "1,250,000", language: language, setLanguage: setLanguage })] }), _jsx(MobileHeader, { balance: "$27,345.12", onDeposit: () => alert("Deposit pressed!"), onMenuToggle: () => setMobileMenuOpen(!mobileMenuOpen) }), mobileMenuOpen && (_jsx(MobileMenu, { isOpen: mobileMenuOpen, onClose: () => setMobileMenuOpen(false), balance: "$27,345.12", points: "1,250,000", language: language, setLanguage: setLanguage })), _jsxs("div", { className: "flex flex-col self-stretch gap-2 mx-6", children: [_jsxs("div", { className: "flex flex-col items-start self-stretch py-12 lg:mx-20 gap-8", children: [_jsx("span", { className: "text-white text-3xl font-bold", children: "Earn Points" }), _jsxs("div", { className: "flex flex-col self-stretch gap-3", children: [_jsxs("div", { className: "flex flex-col lg:flex-row w-full items-start self-stretch gap-2", children: [_jsxs("div", { className: "lg:basis-1/2 flex flex-col lg:flex-row w-full items-center gap-2", children: [_jsxs("div", { className: "w-full flex flex-1 flex-col shrink-0 items-start bg-[#161B22] text-left py-4 gap-2 rounded-md border border-solid border-[#30363D]", children: [_jsx("span", { className: "text-[#8B949E] text-sm ml-[21px]", children: "My Points" }), _jsx("span", { className: "text-white text-2xl font-bold ml-[21px]", children: "4,176" })] }), _jsxs("div", { className: "w-full flex flex-1 flex-col shrink-0 items-start bg-[#161B22] text-left py-4 gap-2 rounded-md border border-solid border-[#30363D]", children: [_jsx("span", { className: "text-[#8B949E] text-sm ml-[21px]", children: "Today's Points" }), _jsx("span", { className: "text-[#2DA44E] text-2xl font-bold ml-[21px]", children: "+855" })] }), _jsxs("div", { className: "w-full flex flex-1 flex-col shrink-0 items-start bg-[#161B22] text-left py-4 gap-2 rounded-md border border-solid border-[#30363D]", children: [_jsx("span", { className: "text-[#8B949E] text-sm ml-[21px]", children: "Current Rank" }), _jsx("span", { className: "text-white text-2xl font-bold ml-[21px]", children: "#1247" })] })] }), _jsxs("div", { className: "lg:basis-1/2 w-full flex flex-1 flex-col bg-[#161B22] px-4 py-4 gap-2 rounded-md border border-solid border-[#30363D]", children: [_jsxs("div", { className: "flex items-center self-stretch", children: [_jsx("span", { className: "flex-1 text-[#8B949E] text-sm text-left", children: "Today\u2019s Progress" }), _jsx("span", { className: "text-[#B65EAF] text-sm", children: "8.55%" })] }), _jsx("div", { className: "w-full bg-[#30363D] rounded-[9999px] h-2.5", children: _jsx("div", { className: "bg-[#92318D] h-2.5 rounded-[9999px]", style: { width: "8.55%" } }) }), _jsx("div", { className: "flex flex-col items-end self-stretch", children: _jsx("span", { className: "text-[#8B949E] text-sm", children: "855 / 10,000" }) })] })] }), _jsxs("div", { className: "flex flex-col items-start self-stretch bg-[#161B22] py-[1px] rounded-md border border-solid border-[#30363D]", children: [_jsx("span", { className: "text-white text-2xl font-bold my-6 ml-[25px] mr-[1px]", children: "Points Leaderboard" }), _jsx("div", { className: "overflow-x-auto w-full py-4 px-6", children: _jsxs("table", { className: "min-w-full text-left border-collapse", children: [_jsx("thead", { children: _jsxs("tr", { className: "text-[#8B949E] text-sm font-bold border-b border-[#30363D]", children: [_jsx("th", { className: "py-3 px-2 w-12", children: "Rank" }), _jsx("th", { className: "py-3 px-2", children: "Address" }), _jsx("th", { className: "py-3 px-2 text-left lg:w-32", children: "Points" }), _jsx("th", { className: "py-3 px-2 text-right lg:w-32", children: "24H Change" })] }) }), _jsxs("tbody", { children: [[
                                                                        { rank: "1", address: "0x4f8e...2a1d", points: "3,521,087", change: "+12,847", changeColor: "#2DA44E" },
                                                                        { rank: "2", address: "0x7a2f...9b3c", points: "2,847,392", change: "+12,847", changeColor: "#2DA44E" },
                                                                        { rank: "3", address: "0x9c6b...7e4f", points: "2,193,746", change: "+12,847", changeColor: "#2DA44E" },
                                                                        { rank: "4", address: "0x1a3e...8f2b", points: "1,872,459", change: "+12,847", changeColor: "#2DA44E" },
                                                                        { rank: "5", address: "0x5d7c...4e9a", points: "1,634,281", change: "+8,392", changeColor: "#2DA44E" },
                                                                        { rank: "6", address: "0x8b4f...1c6d", points: "1,401,928", change: "+15,739", changeColor: "#2DA44E" },
                                                                        { rank: "7", address: "0x2e9a...7f3b", points: "1,287,456", change: "+6,284", changeColor: "#2DA44E" },
                                                                        { rank: "8", address: "0x6c1d...9e4a", points: "1,158,372", change: "+11,947", changeColor: "#2DA44E" },
                                                                    ].map((row, idx) => (_jsxs("tr", { className: "border-b border-[#30363D] text-sm", children: [_jsx("td", { className: "py-2 px-2 text-white", children: row.rank }), _jsx("td", { className: "py-2 px-2 text-[#E0E0E0]", children: row.address }), _jsx("td", { className: "py-2 px-2 text-white text-left", children: row.points }), _jsx("td", { className: "py-2 px-2 text-right", style: { color: row.changeColor }, children: row.change })] }, idx))), _jsx("tr", { children: _jsx("td", { colSpan: 4, className: "text-center text-[#8A91A0] py-2 text-sm", children: "..." }) }), _jsxs("tr", { className: "bg-[#92318D1A] border-2 border-solid border-[#92318D]", children: [_jsx("td", { className: "py-2 px-2 text-[#B65EAF]", children: "1247" }), _jsx("td", { className: "py-2 px-2 text-white", children: "You" }), _jsx("td", { className: "py-2 px-2 text-white text-left", children: "4,176" }), _jsx("td", { className: "py-2 px-2 text-[#2DA44E] text-right", children: "+855" })] })] })] }) }), _jsxs("div", { className: "flex items-center self-stretch p-4 justify-between", children: [_jsx("span", { className: "flex-1 text-[#8B949E] text-sm text-left", children: "Showing 10 of 24134" }), _jsxs("div", { className: "flex shrink-0 items-start gap-[17px]", children: [_jsx("button", { className: "flex flex-col shrink-0 items-start bg-transparent text-left py-2.5 px-[18px] rounded-lg border border-solid border-[#30363D]", onClick: () => alert("Pressed!"), children: _jsx("span", { className: "text-[#E6EDF3] text-base font-bold", children: "Previous" }) }), _jsx("button", { className: "flex flex-col shrink-0 items-start bg-[#92318D] text-left py-2.5 px-[18px] rounded-lg border-0", onClick: () => alert("Pressed!"), children: _jsx("span", { className: "text-white text-base font-bold", children: "Next" }) })] })] })] })] })] }), _jsx(Footer, {})] })] }) }));
};
