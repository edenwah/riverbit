import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import RiverbitLogo from "../components/RiverbitLogo";
import DesktopNav from "../components/DesktopNav";
import Footer from "../components/Footer";
import DesktopNavRight from "../components/DesktopNavRight";
import MobileHeader from "../components/MobileHeader";
import MobileMenu from "../components/MobileMenu";
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
    const [input1, onChangeInput1] = useState('');
    const [input2, onChangeInput2] = useState('');
    const [input3, onChangeInput3] = useState('');
    const [input4, onChangeInput4] = useState('');
    return (_jsx("div", { className: "flex flex-col bg-black min-h-screen", children: _jsxs("div", { className: "self-stretch", children: [_jsxs("div", { className: "hidden xl:flex justify-between items-start self-stretch bg-zinc-900 py-3.5 px-4", children: [_jsxs("div", { className: "flex shrink-0 items-start gap-8", children: [_jsx(RiverbitLogo, {}), _jsx(DesktopNav, {})] }), _jsx(DesktopNavRight, { balance: "$27,345.12", points: "1,250,000", language: language, setLanguage: setLanguage })] }), _jsx(MobileHeader, { balance: "$27,345.12", onDeposit: () => alert("Deposit pressed!"), onMenuToggle: () => setMobileMenuOpen(!mobileMenuOpen) }), mobileMenuOpen && (_jsx(MobileMenu, { isOpen: mobileMenuOpen, onClose: () => setMobileMenuOpen(false), balance: "$27,345.12", points: "1,250,000", language: language, setLanguage: setLanguage })), _jsx("div", { className: "flex flex-col self-stretch gap-2 mx-6", children: _jsxs("div", { className: "flex flex-col self-stretch py-12 lg:mx-20 gap-8", children: [_jsxs("div", { className: "flex flex-col text-left items-start self-stretch gap-4", children: [_jsx("div", { className: "flex flex-col items-center pb-[1px]", children: _jsx("span", { className: "text-white text-3xl font-bold", children: "API Tools" }) }), _jsxs("div", { className: "flex flex-col lg:flex-row gap-2 justify-between items-start self-stretch", children: [_jsx("div", { className: "flex flex-col shrink-0 items-center", children: _jsx("span", { className: "text-[#8B949E] text-base", children: "Developer tools and API management" }) }), _jsxs("div", { className: "flex max-md:flex-col shrink-0 items-start gap-2", children: [_jsxs("div", { className: "flex shrink-0 items-center pr-1 gap-[11px]", children: [_jsx("span", { className: "text-[#8B949E] text-sm", children: "System Status:" }), _jsx("span", { className: "text-[#2DA44E] text-sm font-bold", children: "Normal" })] }), _jsxs("div", { className: "flex shrink-0 items-center gap-2", children: [_jsx("span", { className: "text-[#8B949E] text-sm", children: "Last Updated:" }), _jsx("span", { className: "text-white text-sm", children: "2025-09-06" })] })] })] })] }), _jsxs("div", { className: "flex flex-col self-stretch gap-3", children: [_jsxs("div", { className: "flex flex-col items-start self-stretch bg-[#161B22] p-6 gap-4 rounded-lg border border-solid border-[#30363D]", children: [_jsx("span", { className: "text-white text-lg font-bold", children: "Actions" }), _jsxs("div", { className: "flex flex-col lg:flex-row gap-4 w-full", children: [_jsxs("div", { className: "w-full lg:w-1/4 flex flex-col p-8 gap-4 rounded-lg", style: { backgroundColor: "#92318D" }, children: [_jsx("img", { src: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/n9sykxhy_expires_30_days.png", className: "h-7 rounded-lg object-fill mx-auto" }), _jsx("span", { className: "text-white text-sm font-bold text-center", children: "Create API Key" })] }), _jsxs("div", { className: "w-full lg:w-1/4 flex flex-col p-8 gap-4 rounded-lg border border-[#30363D]", style: { backgroundColor: "#0D1117" }, children: [_jsx("img", { src: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/s5g8qhzh_expires_30_days.png", className: "h-7 rounded-lg object-fill mx-auto" }), _jsx("span", { className: "text-white text-sm font-bold text-center", children: "View API Documentation" })] }), _jsxs("div", { className: "w-full lg:w-1/4 flex flex-col p-8 gap-4 rounded-lg border border-[#30363D]", style: { backgroundColor: "#0D1117" }, children: [_jsx("img", { src: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/ayoovr7s_expires_30_days.png", className: "h-7 rounded-lg object-fill mx-auto" }), _jsx("span", { className: "text-white text-sm font-bold text-center", children: "Download SDK" })] }), _jsxs("div", { className: "w-full lg:w-1/4 flex flex-col p-8 gap-4 rounded-lg border border-[#30363D]", style: { backgroundColor: "#0D1117" }, children: [_jsx("img", { src: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/6m5u7q1n_expires_30_days.png", className: "h-7 rounded-lg object-fill mx-auto" }), _jsx("span", { className: "text-white text-sm font-bold text-center", children: "Test Tools" })] })] })] }), _jsxs("div", { className: "flex items-start self-stretch gap-3 xl:flex-row flex-col", children: [_jsxs("div", { className: "flex basis-1/3 flex-col shrink-0 items-center gap-4 w-full", children: [_jsxs("div", { className: "w-full flex flex-col items-start bg-[#161B22] p-6 gap-4 rounded-lg border border-solid border-[#30363D]", children: [_jsxs("button", { className: "w-full justify-between flex items-start bg-[#0D1117] text-left py-3 px-4 rounded-md border border-solid border-[#30363D]", onClick: () => alert("Pressed!"), children: [_jsx("span", { className: "text-[#ADAEBC] text-base ", children: "Search..." }), _jsx("img", { src: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/ve4zl4a6_expires_30_days.png", className: "w-4 h-6 rounded-md object-fill" })] }), _jsx("span", { className: "text-white text-lg font-bold ", children: "API Key Management" }), _jsxs("div", { className: "flex flex-col items-start gap-3", children: [_jsx("span", { className: "text-[#92318D] text-sm font-bold", children: "All" }), _jsx("span", { className: "text-[#8B949E] text-sm", children: "Active Keys" }), _jsx("span", { className: "text-[#8B949E] text-sm", children: "Disabled Keys" }), _jsx("span", { className: "text-[#8B949E] text-sm", children: "Paused Keys" })] })] }), _jsxs("div", { className: "w-full flex flex-col items-start bg-[#161B22] p-6 gap-4 rounded-lg border border-solid border-[#30363D]", children: [_jsx("span", { className: "text-white text-lg font-bold ", children: "Usage Statistics" }), _jsxs("div", { className: "flex flex-col items-start gap-2 w-full", children: [_jsxs("div", { className: "flex items-center w-full justify-between", children: [_jsx("span", { className: "text-[#8B949E] text-sm ", children: "Requests Today:" }), _jsx("span", { className: "text-white text-sm", children: "1,250" })] }), _jsxs("div", { className: "flex items-center w-full justify-between", children: [_jsx("span", { className: "text-[#8B949E] text-sm ", children: "Requests This Month:" }), _jsx("span", { className: "text-white text-sm", children: "28,500" })] })] })] }), _jsxs("div", { className: "w-full flex flex-col items-start bg-[#161B22] p-6 gap-4 rounded-lg border border-solid border-[#30363D]", children: [_jsx("div", { className: "flex flex-col items-center ", children: _jsx("span", { className: "text-white text-lg font-bold", children: "Contact Us" }) }), _jsxs("div", { className: "flex flex-col items-start gap-3 w-full", children: [_jsxs("div", { className: "flex items-center bg-[#0D1117] p-3 gap-3 rounded-lg w-full", children: [_jsx("img", { src: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/mmuf8gre_expires_30_days.png", className: "w-6 h-6 rounded-lg object-fill" }), _jsx("input", { placeholder: "Discord", value: input1, onChange: (event) => onChangeInput1(event.target.value), className: "text-white bg-transparent text-sm w-12 py-[3px] border-0" })] }), _jsxs("div", { className: "flex items-center bg-[#0D1117] p-3 gap-3 rounded-lg w-full", children: [_jsx("img", { src: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/yqwbptrv_expires_30_days.png", className: "w-6 h-6 rounded-lg object-fill" }), _jsx("input", { placeholder: "X", value: input2, onChange: (event) => onChangeInput2(event.target.value), className: "text-white bg-transparent text-sm w-2 py-[3px] border-0" })] }), _jsxs("div", { className: "flex items-center bg-[#0D1117] p-3 gap-3 rounded-lg w-full", children: [_jsx("img", { src: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/je4r14de_expires_30_days.png", className: "w-6 h-6 rounded-lg object-fill" }), _jsx("input", { placeholder: "Telegram", value: input3, onChange: (event) => onChangeInput3(event.target.value), className: "text-white bg-transparent text-sm w-[59px] py-[3px] border-0" })] }), _jsxs("div", { className: "flex items-center bg-[#0D1117] p-3 gap-3 rounded-lg w-full", children: [_jsx("img", { src: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/bj7y10zi_expires_30_days.png", className: "w-6 h-6 rounded-lg object-fill" }), _jsx("input", { placeholder: "GitHub", value: input4, onChange: (event) => onChangeInput4(event.target.value), className: "text-white bg-transparent text-sm w-[45px] py-[3px] border-0" })] })] })] })] }), _jsxs("div", { className: " w-full flex flex-col basis-2/3 bg-[#161B22] p-6 gap-4 text-left rounded-lg border border-solid border-[#30363D]", children: [_jsx("div", { className: "text-left flex flex-col items-start self-stretch", children: _jsx("span", { className: "text-white text-xl font-bold", children: "API Key Management" }) }), _jsx("div", { className: "overflow-x-auto w-full", children: _jsxs("table", { className: "min-w-full divide-y divide-zinc-700", children: [_jsx("thead", { children: _jsx("tr", { children: ["Key ID", "Name", "Permissions", "Status", "Created On", "Last Used"].map((header) => (_jsx("th", { className: "px-4 py-2 text-left text-sm font-bold text-[#8B949E]", children: header }, header))) }) }), _jsx("tbody", { className: "divide-y divide-zinc-700", children: [
                                                                        {
                                                                            key: "RB_001",
                                                                            name: "Trading Bot",
                                                                            permissions: "Read, Trade, Withdraw",
                                                                            status: "Active",
                                                                            statusColor: "bg-[#2DA44E]",
                                                                            created: "2025-08-15",
                                                                            lastUsed: "2025-09-06 16:23",
                                                                        },
                                                                        {
                                                                            key: "RB_002",
                                                                            name: "Portfolio Tracker",
                                                                            permissions: "Read",
                                                                            status: "Active",
                                                                            statusColor: "bg-[#2DA44E]",
                                                                            created: "2025-08-10",
                                                                            lastUsed: "2025-09-06 15:45",
                                                                        },
                                                                        {
                                                                            key: "RB_003",
                                                                            name: "Risk Management",
                                                                            permissions: "Read, Trade",
                                                                            status: "Active",
                                                                            statusColor: "bg-[#2DA44E]",
                                                                            created: "2025-07-22",
                                                                            lastUsed: "2025-09-06 14:20",
                                                                        },
                                                                        {
                                                                            key: "RB_004",
                                                                            name: "Data Analysis",
                                                                            permissions: "Read",
                                                                            status: "Paused",
                                                                            statusColor: "bg-[#30363D]",
                                                                            created: "2025-07-05",
                                                                            lastUsed: "2025-08-28 11:30",
                                                                        },
                                                                        {
                                                                            key: "RB_005",
                                                                            name: "Arbitrage Bot",
                                                                            permissions: "Read, Trade",
                                                                            status: "Active",
                                                                            statusColor: "bg-[#2DA44E]",
                                                                            created: "2025-06-18",
                                                                            lastUsed: "2025-09-06 16:18",
                                                                        },
                                                                        {
                                                                            key: "RB_006",
                                                                            name: "Market Maker",
                                                                            permissions: "Read, Trade",
                                                                            status: "Active",
                                                                            statusColor: "bg-[#2DA44E]",
                                                                            created: "2025-06-01",
                                                                            lastUsed: "2025-09-06 16:25",
                                                                        },
                                                                        {
                                                                            key: "RB_007",
                                                                            name: "Order Management",
                                                                            permissions: "Read, Trade",
                                                                            status: "Disabled",
                                                                            statusColor: "bg-[#30363D]",
                                                                            created: "2025-05-10",
                                                                            lastUsed: "2025-08-15 09:45",
                                                                        },
                                                                    ].map((item) => (_jsxs("tr", { children: [_jsx("td", { className: "px-4 py-2 text-white text-sm", children: item.key }), _jsx("td", { className: "px-4 py-2 text-white text-sm", children: item.name }), _jsx("td", { className: "px-4 py-2 text-[#8B949E] text-sm", children: item.permissions }), _jsx("td", { className: "px-4 py-2", children: _jsx("button", { className: `px-2 py-1 rounded text-white text-sm font-bold ${item.statusColor}`, onClick: () => alert("Pressed!"), children: item.status }) }), _jsx("td", { className: "px-4 py-2 text-[#8B949E] text-sm", children: item.created }), _jsx("td", { className: "px-4 py-2 text-[#8B949E] text-sm", children: item.lastUsed })] }, item.key))) })] }) }), _jsx("div", { className: "flex flex-col items-center self-stretch pt-6 pb-[25px] pl-6 mx-0.5", children: _jsx("span", { className: "text-[#8B949E] text-sm", children: "Showing 7 of 7 API keys" }) })] })] })] })] }) }), _jsx(Footer, {})] }) }));
};
