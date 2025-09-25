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
    return (_jsx("div", { className: "flex flex-col bg-black min-h-screen", children: _jsxs("div", { className: "self-stretch", children: [_jsxs("div", { className: "hidden xl:flex justify-between items-start self-stretch bg-zinc-900 py-3.5 px-4", children: [_jsxs("div", { className: "flex shrink-0 items-start gap-8", children: [_jsx(RiverbitLogo, {}), _jsx(DesktopNav, {})] }), _jsx(DesktopNavRight, { balance: "$27,345.12", points: "1,250,000", language: language, setLanguage: setLanguage })] }), _jsx(MobileHeader, { balance: "$27,345.12", onDeposit: () => alert("Deposit pressed!"), onMenuToggle: () => setMobileMenuOpen(!mobileMenuOpen) }), mobileMenuOpen && (_jsx(MobileMenu, { isOpen: mobileMenuOpen, onClose: () => setMobileMenuOpen(false), balance: "$27,345.12", points: "1,250,000", language: language, setLanguage: setLanguage })), _jsx("div", { className: "flex flex-col self-stretch gap-2 mx-6", children: _jsxs("div", { className: "flex flex-col self-stretch py-12 lg:mx-20 gap-8", children: [_jsxs("div", { className: "flex flex-col text-left items-start self-stretch gap-4", children: [_jsx("span", { className: "text-white text-3xl font-bold", children: "Announcements" }), _jsxs("div", { className: "flex flex-col lg:flex-row gap-2 justify-between items-start self-stretch", children: [_jsx("div", { className: "flex flex-col shrink-0 items-center", children: _jsx("span", { className: "text-[#8B949E] text-base", children: "System notifications and product updates" }) }), _jsxs("div", { className: "flex max-md:flex-col shrink-0 items-start gap-2", children: [_jsxs("div", { className: "flex shrink-0 items-center pr-1 gap-[11px]", children: [_jsx("span", { className: "text-[#8B949E] text-sm", children: "System Status:" }), _jsx("span", { className: "text-[#2DA44E] text-sm font-bold", children: "Normal" })] }), _jsxs("div", { className: "flex shrink-0 items-center gap-2", children: [_jsx("span", { className: "text-[#8B949E] text-sm", children: "Last Updated:" }), _jsx("span", { className: "text-white text-sm", children: "2025-09-06" })] })] })] })] }), _jsxs("div", { className: "flex items-start self-stretch gap-3 flex-col xl:flex-row", children: [_jsxs("div", { className: "flex flex-col basis-1/3 items-center gap-2.5 w-full", children: [_jsxs("div", { className: "flex flex-col items-start bg-[#161B22] p-6 gap-4 rounded-lg border border-solid border-[#30363D] w-full", children: [_jsxs("button", { className: "w-full justify-between flex items-start bg-[#0D1117] text-left py-3 px-4 rounded-md border border-solid border-[#30363D]", onClick: () => alert("Pressed!"), children: [_jsx("span", { className: "text-[#ADAEBC] text-base", children: "Search..." }), _jsx("img", { src: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/rijdwqwb_expires_30_days.png", className: "w-4 h-6 rounded-md object-fill" })] }), _jsx("span", { className: "text-white text-lg font-bold", children: "Announcements" }), _jsxs("div", { className: "flex flex-col items-start gap-3", children: [_jsx("span", { className: "text-[#92318D] text-sm font-bold", children: "All" }), _jsx("span", { className: "text-[#8B949E] text-sm", children: "Product Updates" }), _jsx("span", { className: "text-[#8B949E] text-sm", children: "Maintenance Notices" }), _jsx("span", { className: "text-[#8B949E] text-sm", children: "Events" })] })] }), _jsxs("div", { className: "w-full flex flex-col items-start bg-[#161B22] p-6 gap-4 rounded-lg border border-solid border-[#30363D]", children: [_jsx("div", { className: "flex flex-col items-center", children: _jsx("span", { className: "text-white text-lg font-bold", children: "Contact Us" }) }), _jsxs("div", { className: "w-full flex flex-col items-start gap-3", children: [_jsxs("div", { className: "w-full flex items-center bg-[#0D1117] p-3 gap-3 rounded-lg", children: [_jsx("img", { src: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/46x3x7zg_expires_30_days.png", className: "w-6 h-6 rounded-lg object-fill" }), _jsx("input", { placeholder: "Discord", value: input1, onChange: (event) => onChangeInput1(event.target.value), className: "text-white bg-transparent text-sm w-12 py-[3px] border-0" })] }), _jsxs("div", { className: "w-full flex items-center bg-[#0D1117] p-3 gap-3 rounded-lg", children: [_jsx("img", { src: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/9fr0ws12_expires_30_days.png", className: "w-6 h-6 rounded-lg object-fill" }), _jsx("input", { placeholder: "X", value: input2, onChange: (event) => onChangeInput2(event.target.value), className: "text-white bg-transparent text-sm w-2 py-[3px] border-0" })] }), _jsxs("div", { className: "w-full flex items-center bg-[#0D1117] p-3 gap-3 rounded-lg", children: [_jsx("img", { src: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/5prdw6in_expires_30_days.png", className: "w-6 h-6 rounded-lg object-fill" }), _jsx("input", { placeholder: "Telegram", value: input3, onChange: (event) => onChangeInput3(event.target.value), className: "text-white bg-transparent text-sm w-[59px] py-[3px] border-0" })] }), _jsxs("div", { className: "w-full flex items-center bg-[#0D1117] p-3 gap-3 rounded-lg", children: [_jsx("img", { src: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/mjaepjda_expires_30_days.png", className: "w-6 h-6 rounded-lg object-fill" }), _jsx("input", { placeholder: "GitHub", value: input4, onChange: (event) => onChangeInput4(event.target.value), className: "text-white bg-transparent text-sm w-[45px] py-[3px] border-0" })] })] })] })] }), _jsxs("div", { className: "flex flex-col basis-2/3 w-full items-start bg-[#161B22] p-6 gap-4 rounded-lg border border-solid border-[#30363D]", children: [_jsx("span", { className: "text-white text-xl font-bold py-4 border-b border-solid border-[#30363D] w-full text-left", children: "Announcements List" }), _jsx("div", { className: "w-full flex flex-col gap-8 text-left", children: [
                                                    {
                                                        title: "RiverBit V2.0 Official Launch – Brand New Trading Engine Live",
                                                        tag: "Major Update",
                                                        date: "2025-09-06",
                                                        description: "Enhanced performance and new features for better trading experience",
                                                    },
                                                    {
                                                        title: "Foundation LP Pool Officially Open – Limited to 100 Seats",
                                                        tag: "New Feature",
                                                        date: "2025-09-05",
                                                        description: "Exclusive access to high-yield liquidity provision opportunities",
                                                    },
                                                    {
                                                        title: "System Maintenance Completed – Significant Performance Boost",
                                                        tag: "Maintenance",
                                                        date: "2025-09-04",
                                                        description: "System optimization completed with improved speed and reliability",
                                                    },
                                                    {
                                                        title: "Mid-Autumn Double Points Event – 7 Days Only",
                                                        tag: "Event",
                                                        date: "2025-09-03",
                                                        description: "Limited time event offering double points on all trading activities",
                                                    },
                                                    {
                                                        title: "Security Upgrade – Mandatory 2FA Enabled",
                                                        tag: "Security",
                                                        date: "2025-09-01",
                                                        description: "Enhanced security measures now require two-factor authentication",
                                                    },
                                                    {
                                                        title: "Major Referral System Update – 3-Level Structure Live",
                                                        tag: "Feature Update",
                                                        date: "2025-08-30",
                                                        description: "New multi-tier referral system with increased rewards",
                                                    },
                                                    {
                                                        title: "New Data Dashboard Launched – Real-Time Trading Monitoring",
                                                        tag: "New Feature",
                                                        date: "2025-08-28",
                                                        description: "Advanced analytics dashboard for comprehensive trading insights",
                                                    },
                                                    {
                                                        title: "New Data Dashboard Launched – Real-Time Trading Monitoring",
                                                        tag: "New Feature",
                                                        date: "2025-08-28",
                                                        description: "Advanced analytics dashboard for comprehensive trading insights",
                                                    },
                                                    {
                                                        title: "New Data Dashboard Launched – Real-Time Trading Monitoring",
                                                        tag: "New Feature",
                                                        date: "2025-08-28",
                                                        description: "Advanced analytics dashboard for comprehensive trading insights",
                                                    },
                                                    {
                                                        title: "New Data Dashboard Launched – Real-Time Trading Monitoring",
                                                        tag: "New Feature",
                                                        date: "2025-08-28",
                                                        description: "Advanced analytics dashboard for comprehensive trading insights",
                                                    },
                                                ].map((item, idx) => (_jsxs("div", { className: "flex flex-1 flex-col xl:flex-row justify-between bg-[#0D1117] p-4 rounded-lg border border-[#30363D] min-w-[250px]", children: [_jsxs("div", { className: "flex flex-col", children: [_jsx("span", { className: "text-white text-lg font-bold mb-2", children: item.title }), _jsxs("div", { className: "flex items-center gap-4 mb-2", children: [_jsx("button", { className: "flex flex-col shrink-0 items-start bg-[#30363D] text-left py-1 px-2 rounded border-0", onClick: () => alert("Pressed!"), children: _jsx("span", { className: "text-[#8B949E] text-xs font-bold", children: item.tag }) }), _jsx("span", { className: "text-[#8B949E] text-sm", children: `Date: ${item.date}` })] }), _jsx("span", { className: "text-[#8B949E] text-sm", children: item.description })] }), _jsx("div", { className: "flex flex-col items-start mt-2", children: _jsx("span", { className: "text-[#92318D] text-sm font-bold cursor-pointer", children: "View Details" }) })] }, idx))) }), _jsxs("div", { className: "flex justify-between items-start self-stretch flex-col lg:flex-row gap-4 mt-4\t", children: [_jsx("div", { className: "flex flex-col shrink-0 items-center", children: _jsx("span", { className: "text-[#8B949E] text-sm", children: "Showing 10 of 23 announcements" }) }), _jsxs("div", { className: "flex shrink-0 items-start gap-2", children: [_jsx("button", { className: "flex flex-col shrink-0 items-start bg-transparent text-left py-2.5 px-[18px] rounded-lg border border-solid border-[#30363D]", onClick: () => alert("Pressed!"), children: _jsx("span", { className: "text-[#E6EDF3] text-base font-bold", children: "Previous" }) }), _jsx("button", { className: "flex flex-col shrink-0 items-start bg-[#92318D] text-left py-2.5 px-[18px] rounded-lg border-0", onClick: () => alert("Pressed!"), children: _jsx("span", { className: "text-white text-base font-bold", children: "Next" }) })] })] })] })] })] }) }), _jsx(Footer, {})] }) }));
};
