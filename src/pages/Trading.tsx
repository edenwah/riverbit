import React, { useState, useRef, useEffect } from "react";
import RiverbitLogo from "../components/RiverbitLogo";
import DesktopNav from "../components/DesktopNav";
import PrimaryButton from "../components/Button/PrimaryButton";
import { SecondaryButton } from "../components/Button/SecondaryButton";
import Tabs from "../components/Tabs";
import PositionsTPSLModal from "../components/PositionsTPSLModal";
import ToggleButton from "../components/ToggleButton";
export default () => {
    const [input1, onChangeInput1] = useState('');
    const [input2, onChangeInput2] = useState('');
    const [input3, onChangeInput3] = useState('');
    const [input4, onChangeInput4] = useState('');
    const [input5, onChangeInput5] = useState('');
    const [input6, onChangeInput6] = useState('');
    const [input7, onChangeInput7] = useState('');
    const [input8, onChangeInput8] = useState('');
    const [input9, onChangeInput9] = useState('');
    const [input10, onChangeInput10] = useState('');
    const [input11, onChangeInput11] = useState('Strict');
    const [inputTPSLPrice, setInputTPSLPrice] = useState('');
    const [inputTPSLPercent, setInputTPSLPercent] = useState('');
    const [isOn, setIsOn] = useState(false);
    const [reduceOnly, setReduceOnly] = useState(false);
    const [activeOrderTab, setActiveOrderTab] = useState("Market"); 
    const [orderTab, setOrderTab] = useState("Order Book"); 
	const [activeAccountTab, setActiveAccountTab] = useState("Balance"); 
    const [granularity, setGranularity] = useState("")
    const [indicator, setIndicator] = useState("")
    const [filterValue, setFilterValue] = useState("")
    const [tif, setTif] = useState("GTC");
    const [showTifTooltip, setShowTifTooltip] = useState(false);
    const [leverage, setLeverage] = useState("20x"); // Add this state
    const [crossSelected, setCrossSelected] = useState(false);
    const [aiSelected, setAiSelected] = useState(false);
    const [showAssetPopup, setShowAssetPopup] = useState(false);
    const [activeMarketTab, setActiveMarketTab] = useState("All Coins");

    {/* Show and Hide TP/SL modal */}
    const [showTPSLModal, setShowTPSLModal] = useState(false); // 控制 modal 顯示
    const [modalData, setModalData] = useState(null); // 儲存傳遞給 modal 的資料

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [language, setLanguage] = useState("EN");
    const [showLangDropdown, setShowLangDropdown] = useState(false);
    const [showWalletDropdown, setShowWalletDropdown] = useState(false);
    const [showMoreDropdown, setShowMoreDropdown] = useState(false);

    const walletDropdownRef = useRef<HTMLDivElement>(null);
    const langDropdownRef = useRef<HTMLDivElement>(null);
    const moreDropdownRef = useRef<HTMLDivElement>(null);
    const assetPopupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                moreDropdownRef.current &&
                !moreDropdownRef.current.contains(event.target as Node)
            ) {
                setShowMoreDropdown(false);
            }
            if (
                walletDropdownRef.current &&
                !walletDropdownRef.current.contains(event.target as Node)
            ) {
                setShowWalletDropdown(false);
            }
            if (
                langDropdownRef.current &&
                !langDropdownRef.current.contains(event.target as Node)
            ) {
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

    useEffect(() => {
        function handleClickOrEsc(event: MouseEvent | KeyboardEvent) {
            // Click outside
            if (
                showAssetPopup &&
                assetPopupRef.current &&
                event instanceof MouseEvent &&
                !assetPopupRef.current.contains(event.target as Node)
            ) {
                setShowAssetPopup(false);
            }
            // ESC key
            if (
                showAssetPopup &&
                event instanceof KeyboardEvent &&
                event.key === "Escape"
            ) {
                setShowAssetPopup(false);
            }
        }
        if (showAssetPopup) {
            document.addEventListener("mousedown", handleClickOrEsc);
            document.addEventListener("keydown", handleClickOrEsc);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOrEsc);
            document.removeEventListener("keydown", handleClickOrEsc);
        };
    }, [showAssetPopup]);


    const AMOUNT_TOTAL = 1000;

    // Calculate percent from input2 (amount)
    const percentValue = input2
      ? Math.max(0, Math.min(100, Math.round((Number(input2) / AMOUNT_TOTAL) * 100)))
      : 0;

    const allMarkets = [
        {symbol:"BTC-USD",name:"Bitcoin",bg:"bg-orange-500",leverage:"40x",price:"$113,479",change:"+2,530 / +2.28%",funding:"0.0100%",volume:"$3,294,291,814",oi:"$3,989,216,288", type: "Perps"},
        {symbol:"ETH-USD",name:"Ethereum",bg:"bg-blue-500",leverage:"25x",price:"$4,350.7",change:"+66.3 / +1.55%",funding:"0.0100%",volume:"$2,603,760,484",oi:"$2,911,409,736", type: "Perps"},
        {symbol:"SOL-USD",name:"Solana",bg:"bg-purple-500",leverage:"20x",price:"$221.94",change:"+7.47 / +3.48%",funding:"0.0100%",volume:"$1,314,153,194",oi:"$1,516,333,384", type: "Perps"},
        {symbol:"HYPE-USD",name:"Hyperliquid",bg:"bg-pink-500",leverage:"10x",price:"$54.531",change:"+1.625 / +3.07%",funding:"0.0100%",volume:"$709,614,355",oi:"$1,487,051,890", type: "Perps"},
        {symbol:"HYPE/USDC",name:"SPOT",bg:"bg-pink-500",leverage:"-",price:"$54.511",change:"+1.593 / +3.01%",funding:"-",volume:"$250,910,508",oi:"-", type: "Spot"}
    ];

    const filteredMarkets = activeMarketTab === "All Coins"
        ? allMarkets
        : allMarkets.filter(m => {
            if (activeMarketTab === "Perps") return m.type === "Perps";
            if (activeMarketTab === "Spot") return m.type === "Spot";
            return false;
        });

    return (
        <div className="flex flex-col bg-black ">
            <div className="self-stretch ">
                {/* Header */}
                {/* Desktop header: show on xl and up */}
                <div className="hidden xl:flex justify-between items-start self-stretch bg-zinc-900 py-3.5 px-4">
                    {/* Left: Logo and nav */}
                    <div className="flex shrink-0 items-start gap-8">
                        <RiverbitLogo />
                        <DesktopNav />
                    </div>
                    {/* Right: Balance, Points, and buttons */}
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col shrink-0 items-start">
                            <span className="text-zinc-400 text-sm" >
                                {"Balance"}
                            </span>
                            <span className="text-white text-sm" >
                                {"$27,345.12"}
                            </span>
                        </div>
                        <div className="w-[1px] h-8 hidden xl:block" />
                        <div className="flex flex-col shrink-0 items-start">
                            <span className="text-zinc-400 text-sm" >
                                {"Points"}
                            </span>
                            <span className="text-white text-sm" >
                                {"1,250,000"}
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            {/* Wallet Icon */}
                            <div className="relative" ref={walletDropdownRef}>
                                <button
                                    className="flex shrink-0 items-center bg-zinc-900 py-2.5 px-3 gap-2 rounded-sm border border-solid border-[#30363D] focus:outline-none"
                                    onClick={() => setShowWalletDropdown((v) => !v)}
                                >
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/7ru13dyc_expires_30_days.png"} 
                                        className="w-5 h-5 rounded-sm object-fill"
                                    />
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/wbxxcfe7_expires_30_days.png"} 
                                        className="w-3 h-[15px] rounded-sm object-fill"
                                    />
                                </button>
                                {showWalletDropdown && (
                                    <div className="absolute right-0 mt-2 z-50 min-w-48 bg-zinc-900 border border-[#30363D] rounded shadow-lg">
                                        <button
                                            className="w-full text-left px-4 py-2 hover:bg-zinc-800 text-sm text-red-400"
                                            onClick={() => {
                                                // Add your disconnect wallet logic here
                                                setShowWalletDropdown(false);
                                            }}
                                        >
                                            Disconnect Wallet
                                        </button>
                                    </div>
                                )}
                            </div>
                            {/* Language Dropdown */}
                            <div className="relative" ref={langDropdownRef}>
                                <button
                                    className="flex shrink-0 items-center bg-zinc-900 text-left py-2.5 px-4 gap-2.5 rounded-sm border border-solid border-[#30363D]"
                                    onClick={() => setShowLangDropdown((v) => !v)}
                                >
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/oyc1zap7_expires_30_days.png"}
                                        className="w-3.5 h-[19px] rounded-sm object-fill"
                                    />
                                    <span className="text-[#C9D1D9] text-sm">{language}</span>
                                    <img
                                        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/qdm0wdb6_expires_30_days.png"
                                        className="w-3 h-[15px] object-fill"
                                        alt="Dropdown"
                                    />
                                </button>
                                {showLangDropdown && (
                                    <div className="absolute right-0 mt-2 z-50 min-w-[100px] bg-zinc-900 border border-[#30363D] rounded shadow-lg">
                                        {["EN", "中文"].map((lang) => (
                                            <button
                                                key={lang}
                                                className={`w-full text-left px-4 py-2 hover:bg-zinc-800 text-sm ${
                                                    language === lang ? "text-fuchsia-400 font-bold" : "text-white"
                                                }`}
                                                onClick={() => {
                                                    setLanguage(lang);
                                                    setShowLangDropdown(false);
                                                }}
                                            >
                                                {lang}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {/* Withdraw & Deposit Buttons */}
                            <div className="flex gap-2">
                                <SecondaryButton size="medium" onClick={() => alert("Pressed!")}>Withdraw</SecondaryButton>
                                <PrimaryButton size="medium" onClick={() => alert("Pressed!")}>Deposit</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile header: show below xl */}
                <div className="flex xl:hidden justify-between items-center self-stretch bg-zinc-900 py-3.5 px-4">
                    {/* Left: Logo */}
                    <div className="flex items-center gap-3">
                        <img
                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/tsg0s0tv_expires_30_days.png"} 
                            className="w-[100px] h-8 object-fill"
                        />
                    </div>
                    {/* Right: Balance, Points, Deposit, Hamburger */}
                    <div className="flex items-center gap-3">
                        <div className="flex flex-col shrink-0 items-start">
                            <span className="text-zinc-400 text-sm" >
                                {"Balance"}
                            </span>
                            <span className="text-white text-sm" >
                                {"$27,345.12"}
                            </span>
                        </div>
                        <PrimaryButton size="medium" onClick={() => alert("Pressed!")}>Deposit</PrimaryButton>
                        {/* Hamburger menu */}
                        <button
                            className="flex items-center justify-center p-2 rounded-sm focus:outline-none"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Open menu"
                        >
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile Menu Drawer */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex flex-col xl:hidden">
                        <div className="flex flex-col justify-between bg-zinc-900 w-4/5 max-w-xs h-full shadow-lg p-6">
                            {/* Top: Pages */}
                            <div>
                                <button
                                    className="self-end mb-6"
                                    onClick={() => setMobileMenuOpen(false)}
                                    aria-label="Close menu"
                                >
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <button className="flex flex-col items-start bg-zinc-700 text-left py-3 px-3 mb-2 rounded-sm border-0"
                                    onClick={()=>alert("Pressed!")}>
                                    <span className="text-white text-sm" >
                                        {"Trading"}
                                    </span>
                                </button>
                                <div className="flex flex-col items-start py-3 mb-2 rounded-sm">
                                    <span className="text-zinc-400 text-sm" >
                                        {"RiverPool"}
                                    </span>
                                </div>
                                <div className="flex flex-col items-start py-3 mb-2 rounded-sm">
                                    <span className="text-zinc-400 text-sm" >
                                        {"Earn"}
                                    </span>
                                </div>
                                <div className="flex flex-col items-start py-3 mb-2 rounded-sm">
                                    <span className="text-zinc-400 text-sm" >
                                        {"Referral"}
                                    </span>
                                </div>
                                <div className="flex flex-col items-start py-3 mb-2 rounded-sm">
                                    <span className="text-zinc-400 text-sm" >
                                        {"Assets"}
                                    </span>
                                </div>
                                <div className="flex items-center py-3 gap-3 mb-2 rounded-sm">
                                    <span className="text-zinc-400 text-sm" >
                                        {"More"}
                                    </span>
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/wo9zz3y5_expires_30_days.png"} 
                                        className="w-3 h-[15px] rounded-sm object-fill"
                                    />
                                </div>
                            </div>
                            {/* Bottom: Settings */}
                            <div className="flex flex-col gap-2 pt-4 border-t border-[#30363D]">
                                <div className="flex items-center bg-zinc-900 py-2.5 px-3 gap-2 rounded-sm border border-solid border-[#30363D]">
                                    {/* Wallet icon */}
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/7ru13dyc_expires_30_days.png"} 
                                        className="w-5 h-5 rounded-sm object-fill"
                                    />
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/wbxxcfe7_expires_30_days.png"} 
                                        className="w-3 h-[15px] rounded-sm object-fill"
                                    />
                                </div>
                                <div className="flex flex-col shrink-0 items-start">
                                    <span className="text-zinc-400 text-sm" >
                                        {"Balance"}
                                    </span>
                                    <span className="text-white text-sm" >
                                        {"$27,345.12"}
                                    </span>
                                </div>
                                <div className="flex flex-col shrink-0 items-start">
                                    <span className="text-zinc-400 text-sm" >
                                        {"Points"}
                                    </span>
                                    <span className="text-white text-sm" >
                                        {"1,250,000"}
                                    </span>
                                </div>
                                <button className="flex items-center bg-zinc-900 text-left py-2.5 px-4 gap-2.5 rounded-sm border border-solid border-[#30363D]"
                                    onClick={()=>alert("Pressed!")}>
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/oyc1zap7_expires_30_days.png"} 
                                        className="w-3.5 h-[19px] rounded-sm object-fill"
                                    />
                                    <span className="text-[#C9D1D9] text-sm" >
                                        {"EN"}
                                    </span>
                                </button>
                                <button className="flex flex-col items-start bg-zinc-900 text-left py-3 px-4 rounded-sm border border-solid border-[#30363D]"
                                    onClick={()=>alert("Pressed!")}>
                                    <span className="text-white text-sm font-bold" >
                                        {"Withdraw"}
                                    </span>
                                </button>
                                <button className="flex flex-col items-start bg-fuchsia-800 text-left py-3 px-4 rounded-sm border-0"
                                    onClick={()=>alert("Pressed!")}>
                                    <span className="text-white text-sm font-bold" >
                                        {"Deposit"}
                                    </span>
                                </button>
                            </div>
                        </div>
                        {/* Click outside to close */}
                        <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
                    </div>
                )}
                <div className="grid grid-cols-1 xl:grid-cols-5 items-start self-stretch p-2 gap-2">
                    {/* Main Chart & Account Overview (col-span-3 on desktop, full width on mobile) */}
                    <div className="md:col-span-3 flex flex-col gap-2 w-full">
                        <div className="flex flex-col self-stretch bg-zinc-900 py-4 gap-3 rounded-lg border border-solid border-[#30363D]">
                            <div className="flex flex-col md:flex-row md:items-center self-stretch mx-3 gap-2">
                                {/* Row 1: Asset Name + Select Asset */}
                                <div className="flex w-full items-center gap-2 mb-1 md:mb-0 md:mr-7">
                                    <img
                                        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/11z6u7t1_expires_30_days.png"
                                        className="w-3 h-7 object-fill"
                                    />
                                    <span className="text-gray-200 text-lg font-bold">
                                        {"ETH-PERP"}
                                    </span>
                                    {/* Select Asset */}
                                    <div className="relative">
                                        <button
                                            type="button"
                                            className="flex items-center gap-1 ml-4 px-3 py-2 bg-zinc-900 rounded-sm  text-zinc-400 text-sm font-bold focus:outline-none"
                                            onClick={() => setShowAssetPopup((v) => !v)}
                                        >
                                            <span>Select Asset</span>
                                            <img
                                                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/rnvmw36i_expires_30_days.png"
                                                className="w-3 h-[15px] rounded-sm object-fill"
                                                alt="Select Asset"
                                            />
                                        </button>
                                        {showAssetPopup && (
                                            <div className="fixed inset-0 z-50 flex items-start md:mt-40 md:ml-4">
                                                {/* 背景遮罩 */}
                                                <div
                                                    className="absolute inset-0 bg-black/50 md:bg-transparent"
                                                    // Remove onClick here, handled by effect
                                                />
                                                {/* Popup 內容 */}
                                                <div
                                                    ref={assetPopupRef}
                                                    className="relative w-full max-w-[910px] bg-[#272B2F] overflow-auto flex flex-col
                                                        md:rounded-lg md:border md:border-[#30363D] md:ml-0 md:mr-0
                                                        h-[100vh] md:h-auto
                                                        mt-auto md:mt-0
                                                        rounded-t-lg"
                                                >
                                                    {/* Close button for mobile */}
                                                    <div className="md:hidden w-full flex justify-end p-4">
                                                        <button className="text-white text-lg font-bold" onClick={() => setShowAssetPopup(false)}>
                                                        ✕
                                                        </button>
                                                    </div>

                                                    {/* Search + Filter */}
                                                    <div className="flex items-center justify-between w-full px-4 py-6 border-b border-[#374151]">
                                                        <div className="flex items-center flex-1 bg-[#0D1117] py-3 px-2 rounded-sm border border-[#30363D]">
                                                        <img
                                                            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/alyycaw7_expires_30_days.png"
                                                            className="w-4 h-6 mx-4 object-fill"
                                                        />
                                                        <input
                                                            placeholder="Search"
                                                            value={input10}
                                                            onChange={(event) => onChangeInput10(event.target.value)}
                                                            className="w-full flex-1 text-[#ADAEBC] text-base border-0"
                                                        />
                                                        </div>
                                                        <div className="flex items-center gap-2 shrink-0 bg-[#0D1117] p-1 rounded-sm border border-[#30363D]">
                                                            <button
                                                                className={`flex flex-col items-start py-3 px-3 rounded border-0 transition-all ${
                                                                    input11 === "Strict" ? "bg-[#92318D] text-white" : "bg-transparent text-zinc-400"
                                                                }`}
                                                                onClick={() => onChangeInput11("Strict")}
                                                                type="button"
                                                            >
                                                                <span className="text-sm w-full">Strict</span>
                                                            </button>
                                                            <button
                                                                className={`flex flex-col items-start py-3 px-3 rounded border-0 transition-all ${
                                                                    input11 === "All" ? "bg-[#92318D] text-white" : "bg-transparent text-zinc-400"
                                                                }`}
                                                                onClick={() => onChangeInput11("All")}
                                                                type="button"
                                                            >
                                                                <span className="text-sm w-full">All</span>
                                                            </button>
                                                        </div>

                                                    </div>

                                                    {/* Tabs */}
                                                    <div className="overflow-auto flex whitespace-nowrap gap-x-4 gap-y-2 px-4 py-2 mb-2 text-sm">
                                                        {["All Coins","Perps","Spot","Trending","DEX Only","Pre-launch","AI","DeFi","Layer 1","Layer 2","Meme"].map(tab => (
                                                            <button
                                                                key={tab}
                                                                className={`my-1 px-3 py-1 rounded transition ${
                                                                    activeMarketTab === tab
                                                                        ? "bg-[#92318D] text-white font-bold"
                                                                        : "bg-transparent text-zinc-400"
                                                                }`}
                                                                onClick={() => setActiveMarketTab(tab)}
                                                                type="button"
                                                            >
                                                                {tab}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    <div className="w-full overflow-auto text-left">
                                                        <table className="min-w-[700px] w-full text-sm">
                                                            <thead>
                                                                <tr className="text-zinc-400 font-bold border-b border-[#30363D]">
                                                                    <th className="px-4 py-3 text-left">Symbol</th>
                                                                    <th className="px-4 py-3 text-left">Leverage</th>
                                                                    <th className="px-4 py-3 text-left">Last Price</th>
                                                                    <th className="px-4 py-3 text-left">24h Change</th>
                                                                    <th className="px-4 py-3 text-left">8h Funding</th>
                                                                    <th className="px-4 py-3 text-left">24h Volume</th>
                                                                    <th className="px-4 py-3 text-left">Open Interest</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {filteredMarkets.map((row, idx) => (
                                                                    <tr key={idx} className="border-b border-[#30363D] text-white">
                                                                        <td className="px-4 py-2">
                                                                            <div className="flex items-center gap-3">
                                                                                <button className={`${row.bg} text-white py-2 px-3 rounded-full border-0`}>{row.symbol.charAt(0)}</button>
                                                                                <div className="flex flex-col">
                                                                                    <span className="font-bold">{row.symbol}</span>
                                                                                    <span className="text-gray-400 text-sm">{row.name}</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="px-4 py-2">{row.leverage}</td>
                                                                        <td className="px-4 py-2 font-bold">{row.price}</td>
                                                                        <td className="px-4 py-2 text-[#2DA44E]">{row.change}</td>
                                                                        <td className="px-4 py-2">{row.funding}</td>
                                                                        <td className="px-4 py-2">{row.volume}</td>
                                                                        <td className="px-4 py-2">{row.oi}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    {/* Footer */}
                                                    <div className="flex items-center justify-between px-4 py-2 text-sm text-zinc-400 mt-4">
                                                        <span>Showing 5 of 247 markets</span>
                                                        <span className="max-md:hidden">Press <button className="px-2 py-1 bg-gray-600 rounded text-sm">ESC</button> to close</span>
                                                    </div>

                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>
                                {/* Row 2: Granularity + Indicator */}
                                <div className="flex gap-2  md:ml-auto">
                                    {/* Granularity */}
                                    <div className="relative inline-flex min-w-32">
                                        <select
                                            className="appearance-none flex items-center bg-zinc-950 text-left p-3 pr-8 rounded-sm border border-solid border-[#30363D] text-zinc-400 text-sm w-full"
                                            value={granularity}
                                            onChange={e => setGranularity(e.target.value)}
                                        >
                                            <option value="" disabled hidden>
                                                Granularity
                                            </option>
                                            <option value="1m">1m</option>
                                            <option value="5m">5m</option>
                                            <option value="15m">15m</option>
                                            <option value="1h">1h</option>
                                            <option value="1d">1d</option>
                                        </select>
                                        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400">
                                            <img
                                                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/bvauf8h6_expires_30_days.png"
                                                className="w-3 h-[15px] rounded-sm object-fill"
                                            />
                                        </span>
                                    </div>
                                    {/* Indicator */}
                                    <div className="relative inline-flex min-w-32">
                                        <select
                                            className="appearance-none flex items-center bg-zinc-950 text-left p-3 pr-8 rounded-sm border border-solid border-[#30363D] text-zinc-400 text-sm w-full"
                                            value={indicator}
                                            onChange={e => setIndicator(e.target.value)}
                                        >
                                            <option value="" disabled hidden>
                                                Indicator
                                            </option>
                                            <option value="None">None</option>
                                            <option value="EMA">EMA</option>
                                            <option value="SMA">SMA</option>
                                            <option value="RSI">RSI</option>
                                            <option value="MACD">MACD</option>
                                        </select>
                                        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400">
                                            <img
                                                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/bvauf8h6_expires_30_days.png"
                                                className="w-3 h-[15px] rounded-sm object-fill"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-start self-stretch mx-3 gap-3 text-left">
                                <div className="flex flex-1 flex-col items-start min-w-24">
                                    <span className="text-zinc-400 text-sm " >
                                        {"Mark Price"}
                                    </span>
                                    <span className="text-gray-200 text-sm font-bold  " >
                                        {"227.34"}
                                    </span>
                                </div>
                                <div className="flex flex-1 flex-col items-start min-w-24">
                                    <span className="text-zinc-400 text-sm " >
                                        {"Index Price"}
                                    </span>
                                    <span className="text-gray-200 text-sm font-bold " >
                                        {"227.30"}
                                    </span>
                                </div>
                                <div className="flex flex-1 flex-col items-start min-w-24">
                                    <span className="text-zinc-400 text-sm " >
                                        {"24h Change"}
                                    </span>
                                    <span className="text-[#F85149] text-sm font-bold  " >
                                        {"-0.97%"}
                                    </span>
                                </div>
                                <div className="flex flex-1 flex-col items-start min-w-24">
                                    <span className="text-zinc-400 text-sm " >
                                        {"24h Volume"}
                                    </span>
                                    <span className="text-gray-200 text-sm font-bold  " >
                                        {"3.2B"}
                                    </span>
                                </div>
                                <div className="flex flex-1 flex-col items-start min-w-24">
                                    <span className="text-zinc-400 text-sm " >
                                        {"Open Interest"}
                                    </span>
                                    <span className="text-gray-200 text-sm font-bold " >
                                        {"3.5B"}
                                    </span>
                                </div>
                                <div className="flex flex-1 flex-col items-start min-w-24">
                                    <span className="text-zinc-400 text-sm " >
                                        {"Funding Rate"}
                                    </span>
                                    <span className="text-[#2DA44E] text-sm font-bold " >
                                        {"0.1300%"}
                                    </span>
                                </div>
                                <div className="flex flex-1 flex-col items-start min-w-24">
                                    <span className="text-zinc-400 text-sm " >
                                        {"Next Settlement"}
                                    </span>
                                    <span className="text-gray-200 text-sm font-bold " >
                                        {"00:52:54"}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch bg-zinc-900 h-[500px] p-[1px] rounded-sm border border-solid border-[#30363D]">
                        </div>
                        <div className="self-stretch bg-zinc-900 py-[1px] rounded-sm border border-solid border-[#30363D]">
                            <div className="flex flex-col items-start self-stretch py-4 mx-[1px] gap-2">
                                <span className="text-white text-lg ml-3" >
                                    {"Account Overview"}
                                </span>
                                <div className="flex flex-wrap justify-between items-start self-stretch mx-3 text-left gap-3">
                                    <div className="flex flex-1 flex-col items-start min-w-32">
                                        <span className="text-zinc-400 text-sm" >
                                            {"Total Account Value"}
                                        </span>
                                        <span className="text-white text-base" >
                                            {"$42,845.67"}
                                        </span>
                                    </div>
                                    <div className="flex flex-1 flex-col items-start min-w-32">
                                        <span className="text-zinc-400 text-sm" >
                                            {"Total Margin Used"}
                                        </span>
                                        <span className="text-white text-base" >
                                            {"$5,525.00"}
                                        </span>
                                    </div>
                                    <div className="flex flex-1 flex-col items-start min-w-32">
                                        <span className="text-zinc-400 text-sm" >
                                            {"Total Notional Position"}
                                        </span>
                                        <span className="text-white text-base" >
                                            {"$37,000.00"}
                                        </span>
                                    </div>
                                    <div className="flex flex-1 flex-col items-start min-w-32">
                                        <span className="text-zinc-400 text-sm" >
                                            {"Withdrawable Amount"}
                                        </span>
                                        <span className="text-white text-base" >
                                            {"$37,320.67"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full p-4">
                                {/* Tabs + Filter */}
                                <div className="overflow-x-auto">
                                    <div className="flex gap-4 justify-between items-center border-b border-[#30363D] min-w-[600px] flex-nowrap">
                                        <div className="relative w-full">
                                            <div className="flex border-b border-[#30363D] w-full gap-4 items-end">
                                                {[
                                                "Balance",
                                                "Positions",
                                                "Open Orders",
                                                "Trade History",
                                                "Funding History",
                                                "Order History",
                                                ].map(tab => (
                                                <button
                                                    key={tab}
                                                    className={`flex-1 text-sm py-3 text-center focus:outline-none transition-colors duration-300 ${
                                                    activeAccountTab === tab ? "text-white font-bold" : "text-zinc-400"
                                                    }`}
                                                    onClick={() => setActiveAccountTab(tab)}
                                                >
                                                    {tab}
                                                </button>
                                                ))}
                                            </div>

                                            {/* Sliding underline */}
                                            <span
                                                className="absolute bottom-0 left-0 gap-4 h-[2px] bg-[#92318D] transition-transform duration-300 ease-in-out"
                                                style={{
                                                width: `calc(100% / 6)`, // 6 個 tabs
                                                transform:
                                                    activeAccountTab === "Balance"
                                                    ? "translateX(0%)"
                                                    : activeAccountTab === "Positions"
                                                    ? "translateX(100%)"
                                                    : activeAccountTab === "Open Orders"
                                                    ? "translateX(200%)"
                                                    : activeAccountTab === "Trade History"
                                                    ? "translateX(300%)"
                                                    : activeAccountTab === "Funding History"
                                                    ? "translateX(400%)"
                                                    : "translateX(500%)",
                                                }}
                                            />
                                        </div>

                                        {/* Filter Selector */}
                                        <div className="relative">
                                            <select
                                                className="appearance-none bg-zinc-900 text-zinc-400 text-sm py-2 pl-3 pr-8 rounded-sm border border-solid border-[#30363D] focus:outline-none"
                                                value={filterValue}
                                                onChange={e => setFilterValue(e.target.value)}
                                            >
                                                <option value="" disabled hidden>Filter</option>
                                                <option value="All">All</option>
                                                <option value="Active">Active</option>
                                                <option value="Long">Long</option>
                                                <option value="Short">Short</option>
                                            </select>
                                            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
                                                <img
                                                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/qdm0wdb6_expires_30_days.png"
                                                    className="w-3 h-[15px] object-fill"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Tab Content */}
                                {activeAccountTab === "Balance" && (
                                    <div className="overflow-x-auto py-4 text-left">
                                        {/* Table Header */}
                                        <div className="flex text-sm text-zinc-400 font-bold mb-2 min-w-[400px] gap-2 py-2">
                                            <span className="flex-1">Currency</span>
                                            <span className="flex-1">Available</span>
                                            <span className="flex-1">In Orders</span>
                                            <span className="flex-1">Value($)</span>
                                        </div>

                                        {/* Table Rows */}
                                        <div className="flex flex-col gap-2 text-sm text-white min-w-[400px]">
                                            {[
                                            { currency: "USDC", available: "12,345.67", inOrders: "1,000.00", value: "$13,345.67" },
                                            { currency: "Points", available: "1,250,000", inOrders: "0", value: "Points" },
                                            ].map((row, idx) => (
                                            <div key={idx} className="flex">
                                                <span className="flex-1">{row.currency}</span>
                                                <span className="flex-1">{row.available}</span>
                                                <span className="flex-1">{row.inOrders}</span>
                                                <span className="flex-1">{row.value}</span>
                                            </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {/* Positions */}
                                {activeAccountTab === "Positions" && (
                                    <div className="py-4">
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left border-collapse">
                                                {/* Table Head */}
                                                <thead>
                                                <tr className="text-zinc-400 text-sm font-bold gap-2">
                                                    <th className="py-2 px-2">Coin</th>
                                                    <th className="py-2 px-2">Position</th>
                                                    <th className="py-2 px-2">Funding Rate</th>
                                                    <th className="py-2 px-2">PNL (ROE%)</th>
                                                    <th className="py-2 px-2">Liq. Price</th>
                                                    <th className="py-2 px-2">Margin</th>
                                                    <th className="py-2 px-2">TP/SL</th>
                                                    <th className="py-2 px-2">Actions</th>
                                                </tr>
                                                </thead>

                                                {/* Table Body */}
                                                <tbody className="text-white text-sm">
                                                {[
                                                    {
                                                    coin: "xAAPL",
                                                    tags: ["8x", "Cross"],
                                                    extra: "$12.50/day",
                                                    position: { value: "$25,000 @227.10", side: "Long" },
                                                    fundingRate: "+0.0100%",
                                                    pnl: { value: "+$98.00", roe: "+3.92%" },
                                                    liqPrice: "198.20",
                                                    margin: { value: "$3,125", percent: "42%" },
                                                    tpSl: "--/--",
                                                    action: "Close",
                                                    },
                                                ].map((row, idx) => (
                                                    <tr key={idx} className="border-b border-[#30363D] gap-2 py-2">
                                                    {/* Coin */}
                                                    <td>
                                                        <div className="flex flex-col items-start">
                                                        <span>{row.coin}</span>
                                                        <div className="flex gap-1 mt-1">
                                                            {row.tags.map((tag, i) => (
                                                            <div
                                                                key={i}
                                                                className="inline-flex bg-[#30363D] py-1 px-2 rounded text-zinc-400 text-[10px] font-bold"
                                                            >
                                                                {tag}
                                                            </div>
                                                            ))}
                                                        </div>
                                                        <div className="inline-flex bg-[#30363D] py-1 px-2 rounded text-zinc-400 text-[10px] font-bold mt-1">
                                                            {row.extra}
                                                        </div>
                                                        </div>
                                                    </td>

                                                    {/* Position */}
                                                    <td className="py-2 px-2">
                                                        <div className="flex flex-col gap-1 items-start">
                                                        <span>{row.position.value}</span>
                                                        <div className="inline-flex bg-[#30363D] py-1 px-2 rounded text-zinc-400 text-[10px] font-bold">
                                                            {row.position.side}
                                                        </div>
                                                        </div>
                                                    </td>

                                                    {/* Funding Rate */}
                                                    <td className="py-2 px-2">{row.fundingRate}</td>

                                                    {/* PNL */}
                                                    <td className="py-2 px-2">
                                                        <div className="flex flex-col gap-1">
                                                        <span>{row.pnl.value}</span>
                                                        <div className="inline-flex bg-[#22C55E1A] py-1 px-2 rounded text-[#2DA44E] text-[10px] font-bold">
                                                            {row.pnl.roe}
                                                        </div>
                                                        </div>
                                                    </td>

                                                    {/* Liq Price */}
                                                    <td className="py-2 px-2">{row.liqPrice}</td>

                                                    {/* Margin */}
                                                    <td className="py-2 px-2">
                                                        <div className="flex flex-col gap-1 items-start">
                                                        <span>{row.margin.value}</span>
                                                        <div className="inline-flex bg-[#30363D] py-1 px-2 rounded text-zinc-400 text-[10px] font-bold">
                                                            {row.margin.percent}
                                                        </div>
                                                        </div>
                                                    </td>

                                                    {/* TP/SL */}
                                                    <td className="py-2 px-2">
                                                        <div className="flex gap-1 items-center">
                                                            <span>{row.tpSl}</span>
                                                            <img
                                                            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/l0hc3xdh_expires_30_days.png"
                                                            className="w-4 h-4 object-fill cursor-pointer"
                                                            onClick={() => {
                                                                setModalData({
                                                                    time: "9/12/2025 17:30:13",
                                                                    coin: row.coin,
                                                                    position: row.position.value,
                                                                    entryPrice: "55.116",
                                                                    markPrice: "55.252",
                                                                    takeProfit: "Price above 60",
                                                                    stopLoss: "--",
                                                                    orderId: "160687782672",
                                                                    expectedProfit: "39.51 USDC",
                                                                } as any);
                                                                setShowTPSLModal(true);
                                                            }}
                                                            alt="TP/SL"
                                                            />
                                                        </div>
                                                    </td>

                                                    {/* Actions */}
                                                    <td className="py-2 px-2 text-[#92318D] font-bold">{row.action}</td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>

                                            {showTPSLModal && modalData && (
                                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                                            <div
                                            className="relative w-full h-full md:w-[420px] md:h-auto md:rounded-xl flex flex-col p-6 justify-center"
                                            style={{ maxWidth: "95vw", maxHeight: "95vh" }}
                                            >
                                            {/* Modal Content */}
                                            <PositionsTPSLModal
                                                data={modalData} 
                                                inputTPSLPrice={inputTPSLPrice} 
                                                onChangeInputTPSLPrice={setInputTPSLPrice} 
                                                inputTPSLPercent={inputTPSLPercent} 
                                                onChangeInputTPSLPercent={setInputTPSLPercent} 
                                                onClose={() => setShowTPSLModal(false)}
                                                onConfirm={() => {
                                                console.log("Confirmed", inputTPSLPrice, inputTPSLPercent);
                                                setShowTPSLModal(false);
                                                }}
                                            />
                                            </div>
                                        </div>
                                        )}

                                        </div>
                                        {/* Close All button */}
                                        <div className="flex justify-end mt-3">
                                            <button className="bg-[#92318D] w-[100px] py-3.5 rounded-md text-white font-bold">
                                            Close All
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {/* Open Orders */}
                                {activeAccountTab === "Open Orders" && (
                                    <div>
                                        <div className="overflow-x-auto py-4">
                                            <table className="w-full text-left border-collapse">
                                                {/* Table Head */}
                                                <thead>
                                                <tr className="text-zinc-400 text-sm font-bold">
                                                    <th className="py-2 px-2">Time</th>
                                                    <th className="py-2 px-2">Type</th>
                                                    <th className="py-2 px-2">Coin</th>
                                                    <th className="py-2 px-2">Direction</th>
                                                    <th className="py-2 px-2">Size / Original Size</th>
                                                    <th className="py-2 px-2">Order Value</th>
                                                    <th className="py-2 px-2">Price / Trigger</th>
                                                    <th className="py-2 px-2">Reduce Only</th>
                                                    <th className="py-2 px-2">TP/SL</th>
                                                    <th className="py-2 px-2">Actions</th>
                                                </tr>
                                                </thead>

                                                {/* Table Body */}
                                                <tbody className="text-sm text-white">
                                                {[
                                                    {
                                                    time: "9/12/2025 17:30:13",
                                                    type: "Take Profit Market",
                                                    coin: "HYPE",
                                                    direction: { text: "Close Long", color: "text-[#F85149]" },
                                                    size: "-- / --",
                                                    orderValue: "--",
                                                    price: "Market / Price > 60",
                                                    reduceOnly: "Yes",
                                                    tpSl: "--",
                                                    action: { text: "Cancel", color: "text-[#92318D]" },
                                                    },
                                                ].map((row, idx) => (
                                                    <tr key={idx} className="border-b border-[#30363D]">
                                                    <td className="py-2 px-2 whitespace-pre">{row.time}</td>
                                                    <td className="py-2 px-2">{row.type}</td>
                                                    <td className="py-2 px-2">{row.coin}</td>
                                                    <td className={`py-2 px-2 ${row.direction.color}`}>{row.direction.text}</td>
                                                    <td className="py-2 px-2">{row.size}</td>
                                                    <td className="py-2 px-2">{row.orderValue}</td>
                                                    <td className="py-2 px-2">{row.price}</td>
                                                    <td className="py-2 px-2">{row.reduceOnly}</td>
                                                    <td className="py-2 px-2">{row.tpSl}</td>
                                                    <td className={`py-2 px-2 font-bold ${row.action.color}`}>{row.action.text}</td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* View All button */}
                                        <div className="flex justify-end mt-3">
                                            <button className="bg-[#92318D] w-[100px] py-3.5 rounded-md text-white font-bold">
                                            View All
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {/* Trade History */}
                                {activeAccountTab === "Trade History" && (
                                    <div className="py-4">
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left border-collapse">
                                                {/* Table Head */}
                                                <thead>
                                                <tr className="text-zinc-400 text-sm font-bold">
                                                    <th className="py-2 px-2">Time</th>
                                                    <th className="py-2 px-2">Coin</th>
                                                    <th className="py-2 px-2">Direction</th>
                                                    <th className="py-2 px-2">Price</th>
                                                    <th className="py-2 px-2">Size</th>
                                                    <th className="py-2 px-2">Trade Value</th>
                                                    <th className="py-2 px-2">Fee</th>
                                                    <th className="py-2 px-2">Closed PNL</th>
                                                </tr>
                                                </thead>

                                                {/* Table Body */}
                                                <tbody className="text-sm text-white">
                                                {[
                                                    {
                                                    time: "9/12/2025 16:41:34",
                                                    coin: "HYPE",
                                                    direction: { text: "Open Long", color: "text-[#2DA44E]" },
                                                    price: "55.116",
                                                    size: "8.09 HYPE",
                                                    tradeValue: "445.89 USDC",
                                                    fee: "0.20 USDC",
                                                    pnl: "-0.20 USDC",
                                                    },
                                                ].map((row, idx) => (
                                                    <tr key={idx} className="border-b border-[#30363D]">
                                                    <td className="py-2 px-2 whitespace-pre">{row.time}</td>
                                                    <td className="py-2 px-2">{row.coin}</td>
                                                    <td className={`py-2 px-2 ${row.direction.color}`}>{row.direction.text}</td>
                                                    <td className="py-2 px-2">{row.price}</td>
                                                    <td className="py-2 px-2">{row.size}</td>
                                                    <td className="py-2 px-2">{row.tradeValue}</td>
                                                    <td className="py-2 px-2">{row.fee}</td>
                                                    <td className="py-2 px-2">{row.pnl}</td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* Buttons */}
                                        <div className="flex justify-end mt-3 gap-4">
                                            <button
                                            className="bg-[#92318D] py-3.5 px-[19px] rounded-md text-white font-bold"
                                            onClick={() => alert("Pressed!")}
                                            >
                                            View All
                                            </button>
                                            <button
                                            className="bg-[#92318D] py-3.5 px-4 rounded-md text-white font-bold"
                                            onClick={() => alert("Pressed!")}
                                            >
                                            Export as CSV
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {/* Funding History */}
                                {activeAccountTab === "Funding History" && (
                                    <div className="py-4">
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left border-collapse">
                                            {/* Table Head */}
                                            <thead>
                                                <tr className="text-zinc-400 text-sm font-bold">
                                                <th className="py-2 px-2">Time</th>
                                                <th className="py-2 px-2">Coin</th>
                                                <th className="py-2 px-2">Size</th>
                                                <th className="py-2 px-2">Position Side</th>
                                                <th className="py-2 px-2">Payment</th>
                                                <th className="py-2 px-2">Rate</th>
                                                </tr>
                                            </thead>

                                            {/* Table Body */}
                                            <tbody className="text-sm text-white">
                                                {[
                                                {
                                                    time: "9/12/2025 17:00:00",
                                                    coin: "HYPE",
                                                    size: "8.09 HYPE",
                                                    side: { text: "Long", color: "text-[#2DA44E]" },
                                                    payment: { text: "$0.0012", color: "text-[#2DA44E]" },
                                                    rate: "-0.0003%",
                                                },
                                                ].map((row, idx) => (
                                                <tr key={idx} className="border-b border-[#30363D]">
                                                    <td className="py-2 px-2 whitespace-pre">{row.time}</td>
                                                    <td className="py-2 px-2">{row.coin}</td>
                                                    <td className="py-2 px-2">{row.size}</td>
                                                    <td className={`py-2 px-2 ${row.side.color}`}>{row.side.text}</td>
                                                    <td className={`py-2 px-2 ${row.payment.color}`}>{row.payment.text}</td>
                                                    <td className="py-2 px-2">{row.rate}</td>
                                                </tr>
                                                ))}
                                            </tbody>
                                            </table>
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex justify-end mt-3 gap-4">
                                            <button
                                            className="bg-[#92318D] py-3.5 px-[19px] rounded-md text-white font-bold"
                                            onClick={() => alert("Pressed!")}
                                            >
                                            View All
                                            </button>
                                            <button
                                            className="bg-[#92318D] py-3.5 px-4 rounded-md text-white font-bold"
                                            onClick={() => alert("Pressed!")}
                                            >
                                            Export as CSV
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {/* Order History */}
                                {activeAccountTab === "Order History" && (
                                    <div className="py-4">
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left border-collapse">
                                            {/* Table Head */}
                                            <thead>
                                                <tr className="text-zinc-400 text-sm font-bold">
                                                <th className="py-2 px-2">Time</th>
                                                <th className="py-2 px-2">Type</th>
                                                <th className="py-2 px-2">Coin</th>
                                                <th className="py-2 px-2">Direction</th>
                                                <th className="py-2 px-2">Size / Filled Size</th>
                                                <th className="py-2 px-2">Order Value</th>
                                                <th className="py-2 px-2">Price / Trigger</th>
                                                <th className="py-2 px-2">Reduce Only</th>
                                                <th className="py-2 px-2">TP/SL</th>
                                                <th className="py-2 px-2">Status</th>
                                                <th className="py-2 px-2">Order ID</th>
                                                </tr>
                                            </thead>

                                            {/* Table Body */}
                                            <tbody className="text-sm text-white">
                                                {[
                                                {
                                                    time: "9/12/2025 17:30:13",
                                                    type: "Take Profit Market",
                                                    coin: "HYPE",
                                                    direction: { text: "Close Long", color: "text-[#F85149]" },
                                                    size: "-- / --",
                                                    orderValue: "--",
                                                    trigger: "Market /Price > 60",
                                                    reduceOnly: "Yes",
                                                    tpSl: "--",
                                                    status: "Open",
                                                    orderId: "160687782672",
                                                },
                                                {
                                                    time: "9/12/2025 17:03:27",
                                                    type: "Take Profit Market",
                                                    coin: "HYPE",
                                                    direction: { text: "Close Long", color: "text-[#F85149]" },
                                                    size: "-- / --",
                                                    orderValue: "--",
                                                    trigger: "Market /Price > 56",
                                                    reduceOnly: "Yes",
                                                    tpSl: "--",
                                                    status: "Cancelled",
                                                    orderId: "160656988197",
                                                },
                                                ].map((row, idx) => (
                                                <tr key={idx} className="border-b border-[#30363D]">
                                                    <td className="py-2 px-2 whitespace-pre">{row.time}</td>
                                                    <td className="py-2 px-2">{row.type}</td>
                                                    <td className="py-2 px-2">{row.coin}</td>
                                                    <td className={`py-2 px-2 ${row.direction.color}`}>{row.direction.text}</td>
                                                    <td className="py-2 px-2">{row.size}</td>
                                                    <td className="py-2 px-2">{row.orderValue}</td>
                                                    <td className="py-2 px-2">{row.trigger}</td>
                                                    <td className="py-2 px-2">{row.reduceOnly}</td>
                                                    <td className="py-2 px-2">{row.tpSl}</td>
                                                    <td className="py-2 px-2">{row.status}</td>
                                                    <td className="py-2 px-2">{row.orderId}</td>
                                                </tr>
                                                ))}
                                            </tbody>
                                            </table>
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex justify-end mt-3">
                                            <button
                                            className="bg-[#92318D] py-3.5 px-[19px] rounded-md text-white font-bold"
                                            onClick={() => alert("Pressed!")}
                                            >
                                            View All
                                            </button>
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>
                    </div>

                    {/* Order Book + Trading Form wrapper */}
                    <div className="md:col-span-2 grid 2xl:grid-cols-2 gap-2 w-full  xl:gap-2">
                        {/* Order Book/Trades (col-span-1 on desktop, full width on mobile) */}
                        <div className="flex flex-col gap-2 items-center bg-zinc-900 p-[1px] rounded-sm border border-solid border-[#30363D] w-full">
                            {/* Tabs for Order Book/Trades */}
                            <div className="relative w-full">
                                <div className="flex items-center border-b border-[#30363D]">
                                    {["Order Book", "Trades"].map(tab => (
                                    <button
                                        key={tab}
                                        className={`relative text-sm py-[15px] w-full focus:outline-none transition-colors duration-300 ${
                                        orderTab === tab ? "text-white font-bold" : "text-zinc-400"
                                        }`}
                                        onClick={() => setOrderTab(tab)}
                                    >
                                        {tab}
                                    </button>
                                    ))}
                                </div>

                                {/* Sliding underline */}
                                <span
                                    className="absolute bottom-0 left-0 h-[2px] bg-[#92318D] transition-transform duration-300 ease-in-out"
                                    style={{
                                    width: "50%",
                                    transform: orderTab === "Order Book" ? "translateX(0%)" : "translateX(100%)",
                                    }}
                                />
                            </div>

                            {/* Tab Content */}
                            {orderTab === "Order Book" && (
                                <div className="flex flex-col items-start w-full">
                                    {/* --- BEGIN Order Book Content (lines 353-640) --- */}
                                    {/* Paste all the JSX from line 353 to 640 here */}
                                    <div className="flex flex-col items-start w-full">
                                        <div className="flex flex-col items-center py-1 w-full">
                                            <div className="flex items-start pr-[1px] w-full">
                                                <span className="text-zinc-400 text-sm my-1 w-full" >
                                                    {"Price"}
                                                </span>
                                                <span className="text-zinc-400 text-sm my-1 w-full" >
                                                    {"Size"}
                                                </span>
                                                <span className="text-zinc-400 text-sm my-1 w-full" >
                                                    {"Total"}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-full">
                                            {[
                                                { price: "110,595.00", size: "2.376", total: "16.500", barWidth: "80%" },
                                                { price: "110,594.00", size: "1.359", total: "15.200", barWidth: "70%" },
                                                { price: "110,593.00", size: "0.990", total: "13.900", barWidth: "60%" },
                                                { price: "110,592.00", size: "3.025", total: "12.600", barWidth: "50%" },
                                                { price: "110,591.00", size: "1.146", total: "11.300", barWidth: "45%" },
                                                { price: "110,590.00", size: "2.852", total: "10.000", barWidth: "37%" },
                                                { price: "110,589.00", size: "2.852", total: "10.000", barWidth: "33%" },
                                                { price: "110,588.00", size: "2.852", total: "10.000", barWidth: "25%" },
                                                { price: "110,587.00", size: "2.852", total: "0.190",  barWidth: "20%" },
                                            ].map((row, idx) => (
                                                <div
                                                key={idx}
                                                className="relative flex w-full items-center text-sm text-white"
                                                >
                                                {/* 背景色 box */}
                                                <div
                                                    className="absolute left-0 top-0 h-full bg-[#EF44441A]"
                                                    style={{ width: row.barWidth }}
                                                />

                                                {/* 三欄內容 */}
                                                <div className="grid grid-cols-3 w-full relative z-10 py-2">
                                                    <span className="text-[#F85149]">{row.price}</span>
                                                    <span>{row.size}</span>
                                                    <span className="text-zinc-400">{row.total}</span>
                                                </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex w-full flex-col items-center p-3">
                                            <span className="text-zinc-400 text-sm " >
                                                {"Spread: 1 (0.001%)"}
                                            </span>
                                        </div>
                                        <div className="flex flex-col w-full">
                                            {(() => {
                                                const bids = [
                                                { price: "110,589.00", size: 1.799, total: 0.270 },
                                                { price: "110,589.00", size: 1.799, total: 8.000 },
                                                { price: "110,589.00", size: 1.799, total: 8.000 },
                                                { price: "110,588.00", size: 1.755, total: 9.100 },
                                                { price: "110,587.00", size: 0.351, total: 10.200 },
                                                { price: "110,586.00", size: 2.952, total: 11.300 },
                                                { price: "110,585.00", size: 0.172, total: 12.400 },
                                                { price: "110,584.00", size: 2.474, total: 13.500 },
                                                ];

                                                const maxTotal = Math.max(...bids.map(b => b.total));

                                                return bids.map((row, idx) => {
                                                const barWidth = `${(row.total / maxTotal) * 100}%`;

                                                return (
                                                    <div
                                                    key={idx}
                                                    className="relative flex w-full items-center text-sm text-white"
                                                    >
                                                    {/* 背景色 bar */}
                                                    <div
                                                        className="absolute left-0 top-0 h-full bg-[#22C55E1A]"
                                                        style={{ width: barWidth }}
                                                    />

                                                    {/* 三欄內容 */}
                                                    <div className="grid grid-cols-3 w-full relative z-10 py-2">
                                                        <span className="text-[#2DA44E]">{row.price}</span>
                                                        <span>{row.size}</span>
                                                        <span className="text-zinc-400">{row.total}</span>
                                                    </div>
                                                    </div>
                                                );
                                                });
                                            })()}
                                        </div>

                                    </div>
                                </div>
                            )}
                            {orderTab === "Trades" && (
                                <div className="flex flex-col items-start w-full">
                                    <div className="flex flex-col items-center py-1 w-full">
                                        <div className="flex items-start pr-[1px] w-full">
                                            <span className="text-zinc-400 text-sm my-1 w-full" >
                                                {"Price"}
                                            </span>
                                            <span className="text-zinc-400 text-sm my-1 w-full" >
                                                {"Size"}
                                            </span>
                                            <span className="text-zinc-400 text-sm my-1 w-full" >
                                                {"Time"}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        {[
                                            { price: "110,584.00", priceColor: "text-[#2DA44E]", qty: "14.35", time: "00:49:51" },
                                            { price: "110,589.00", priceColor: "text-[#2DA44E]", qty: "0.31", time: "00:49:51" },
                                            { price: "110,595.00", priceColor: "text-[#F85149]", qty: "0.20", time: "00:49:51" },
                                            { price: "110,594.00", priceColor: "text-[#F85149]", qty: "1.359", time: "00:49:51" },
                                            { price: "110,585.00", priceColor: "text-[#2DA44E]", qty: "0.172", time: "00:49:51" },
                                            { price: "110,593.00", priceColor: "text-[#F85149]", qty: "0.990", time: "00:49:51" },
                                            { price: "110,588.00", priceColor: "text-[#2DA44E]", qty: "1.755", time: "00:49:51" },
                                            { price: "110,592.00", priceColor: "text-[#F85149]", qty: "3.025", time: "00:49:51" },
                                            { price: "110,589.00", priceColor: "text-[#2DA44E]", qty: "1.799", time: "00:49:51" },
                                            { price: "110,591.00", priceColor: "text-[#F85149]", qty: "1.146", time: "00:49:51" },
                                            { price: "110,589.00", priceColor: "text-[#2DA44E]", qty: "1.799", time: "00:49:51" },
                                            { price: "110,590.00", priceColor: "text-[#F85149]", qty: "2.852", time: "00:49:51" },
                                            { price: "110,587.00", priceColor: "text-[#2DA44E]", qty: "0.351", time: "00:49:51" },
                                            { price: "110,590.00", priceColor: "text-[#F85149]", qty: "2.852", time: "00:49:51" },
                                            { price: "110,589.00", priceColor: "text-[#2DA44E]", qty: "1.799", time: "00:49:51" },
                                            { price: "110,590.00", priceColor: "text-[#F85149]", qty: "2.852", time: "00:49:51" },
                                            { price: "110,590.00", priceColor: "text-[#F85149]", qty: "2.852", time: "00:49:51" },
                                            { price: "110,586.00", priceColor: "text-[#2DA44E]", qty: "2.952", time: "00:49:51" },
                                            { price: "110,590.00", priceColor: "text-[#F85149]", qty: "2.852", time: "00:49:51" },
                                            { price: "110,589.00", priceColor: "text-[#2DA44E]", qty: "1.799", time: "00:49:51" },
                                        ].map((row, idx) => (
                                            <div key={idx} className="grid grid-cols-3 w-full text-sm py-2">
                                            <span className={row.priceColor}>{row.price}</span>
                                            <span className="text-white">{row.qty}</span>
                                            <span className="text-zinc-400">{row.time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Trading Form (col-span-1 on desktop, full width on mobile) */}
                        <div className="flex flex-col gap-2 items-center bg-zinc-900 rounded-sm border border-solid border-[#30363D] w-full ">
                            {/* Cross Margin, Leverage and AI Trading */}
                            <div className="flex items-start p-3 w-full gap-2">
                                <button
                                    className={`flex-1 flex flex-col shrink-0 text-nowrap items-start bg-zinc-950 text-left py-3 px-2 rounded-sm border ${
                                        crossSelected ? "border-fuchsia-800" : "border-[#30363D]"
                                    } border-solid`}
                                    onClick={() => setCrossSelected((v) => !v)}
                                >
                                    <span className="text-[#A6A6B5] text-sm">
                                        {"Cross Margin"}
                                    </span>
                                </button>
                                {/* Replace the button with this selector */}
                                <div className="relative flex-1">
                                    <select
                                        className={`appearance-none w-full bg-zinc-950 text-white text-sm py-3 px-2 rounded-sm border border-solid border-[#30363D] "} focus:outline-none`}
                                        value={leverage}
                                        onChange={e => {
                                            setLeverage(e.target.value);
                                        }}
                                    >
                                        <option value="5x">5x</option>
                                        <option value="10x">10x</option>
                                        <option value="20x">20x</option>
                                        <option value="50x">50x</option>
                                        <option value="100x">100x</option>
                                    </select>
                                    <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
                                        <img
                                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/jw98n908_expires_30_days.png"} 
                                            className="w-3 h-[15px] rounded-sm object-fill"
                                        />
                                    </span>
                                </div>
                                <button
                                    className={`flex-1 flex flex-col shrink-0 items-start text-nowrap bg-zinc-950 text-left py-3 px-2 rounded-sm border ${
                                        aiSelected ? "border-fuchsia-800" : "border-[#30363D]"
                                    } border-solid`}
                                    onClick={() => setAiSelected((v) => !v)}
                                >
                                    <span className="text-[#A6A6B5] text-sm">
                                        {"AI Trading"}
                                    </span>
                                </button>
                            </div>

                            {/* Tabs */}
                            <Tabs
                                tabs={["Market", "Limit", "Advanced"]}
                                activeTab={activeOrderTab}
                                onTabChange={setActiveOrderTab}
                            />

                            {/* Tab Content */}
                            {activeOrderTab === "Market" && (
                                <div className="w-full flex flex-col items-start px-4 py-4 gap-4">
                                    {/* --- BEGIN Market Tab Content --- */}
                                    <div className="flex items-center bg-zinc-950 py-1 pl-1 pr-[5px] gap-6 rounded-sm w-full">
                                        {/* Toggle Buttons */}
                                        <div className="flex w-full gap-2">
                                            <button
                                                type="button"
                                                className={`flex-1 flex flex-col items-center py-[11px] px-6 rounded-sm transition-all
                                                    ${input1 !== "Sell / Short"
                                                        ? "bg-[#2DA44E33] text-[#2DA44E]"
                                                        : "bg-transparent text-zinc-400"
                                                    }`}
                                                onClick={() => onChangeInput1("Buy / Long")}
                                            >
                                                <span className="text-sm">{"Buy / Long"}</span>
                                            </button>
                                            <button
                                                type="button"
                                                className={`flex-1 flex flex-col items-center py-[11px] px-6 rounded-sm transition-all
                                                    ${input1 === "Sell / Short"
                                                        ? "bg-[#EF444433] text-[#F85149]"
                                                        : "bg-transparent text-zinc-400"
                                                    }`}
                                                onClick={() => onChangeInput1("Sell / Short")}
                                            >
                                                <span className="text-sm">{"Sell / Short"}</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start gap-2 w-full">
                                        <div className="flex flex-col items-center pb-[1px]">
                                            <span className="text-[#9D9DAF] text-sm" >
                                                {"Amount"}
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-start gap-4 w-full">
                                            {/* 金額輸入框與貨幣標籤 */}
                                            <div className="flex justify-between bg-zinc-950 py-[9px] px-3 rounded-sm border border-solid border-[#30363D] w-full ">
                                                <input
                                                    placeholder="0"
                                                    value={input2}
                                                    onChange={(e) => {
                                                        const value = Number(e.target.value.replace(/,/g, ""));
                                                        onChangeInput2(isNaN(value) ? "" : value.toString());
                                                    }}
                                                    className="text-white bg-transparent text-base w-40 py-[3px] border-0"
                                                />
                                                <div className="flex shrink-0 items-center bg-zinc-700 py-[7px] pl-2 pr-[7px] gap-1.5 rounded">
                                                    <span className="text-zinc-400 text-sm font-bold">USDT</span>
                                                    <img
                                                        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/bvauf8h6_expires_30_days.png"
                                                        className="w-3 h-[15px] rounded-sm object-fill"
                                                    />
                                                </div>
                                            </div>
                                            {/* 滑桿與快捷百分比按鈕 */}
                                            <div className="flex flex-col w-full">
                                                <input
                                                    type="range"
                                                    min={0}
                                                    max={100}
                                                    step={1}
                                                    value={percentValue}
                                                    onChange={(e) => {
                                                        const percent = Number(e.target.value);
                                                        const amount = Math.round((percent / 100) * AMOUNT_TOTAL);
                                                        onChangeInput2(amount.toString());
                                                    }}
                                                    className="w-full accent-fuchsia-800 h-2 rounded-lg appearance-none bg-zinc-700 my-2"
                                                />
                                                <div className="flex justify-between gap-2 w-full mt-1">
                                                    {[0, 25, 50, 75, 100].map((percent) => (
                                                        <button
                                                            key={percent}
                                                            type="button"
                                                            className={`py-[11px] w-full rounded-sm border ${
                                                                percentValue === percent
                                                                    ? "border-2 border-[#92318D] font-bold"
                                                                    : "border border-[#30363D]"
                                                            } bg-zinc-900 text-white text-sm`}
                                                            onClick={() => {
                                                                const amount = Math.round((percent / 100) * AMOUNT_TOTAL);
                                                                onChangeInput2(amount.toString());
                                                            }}
                                                        >
                                                            {percent}%
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ToggleButton
                                        label="Reduce Only"
                                        value={reduceOnly}
                                        onChange={setReduceOnly}
                                        />
                                    <button
                                        type="button"
                                        className="py-2 flex items-center w-full justify-between focus:outline-none"
                                        onClick={() => setIsOn((prev) => !prev)}
                                        >
                                        <span className="text-[#C9D1D9] text-sm">Take Profit / Stop Loss</span>
                                        <div
                                            className={` shrink-0 flex items-center transition-colors duration-200 rounded-full ${
                                            isOn ? "bg-fuchsia-800" : "bg-zinc-700"
                                            } py-0.5 pl-2 pr-0.5`}
                                            style={{ width: 48, height: 28 }}
                                        >
                                            <div
                                            className={`bg-white w-5 h-5 rounded-full border border-solid border-white shadow transition-transform duration-200`}
                                            style={{
                                                transform: isOn ? "translateX(16px)" : "translateX(0)",
                                            }}
                                            />
                                        </div>
                                    </button>
                                    {/* Conditional TP/SL inputs */}
                                    {isOn && (
                                    <div className="flex flex-col gap-4 py-2 w-full">
                                        {/* Take Profit */}
                                        <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
                                        <div className="flex flex-col gap-2 min-w-0 text-left">
                                            <span className="text-[#9D9DAF] text-sm">Take Profit Price</span>
                                            <input
                                            placeholder="230.00"
                                            value={input3}
                                            onChange={(e) => onChangeInput3(e.target.value)}
                                            className="w-full text-white bg-zinc-950 text-base p-3 rounded-sm border border-[#30363D] focus:outline-none"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 min-w-0 text-left">
                                            <span className="text-[#9D9DAF] text-sm">Take Profit %</span>
                                            <div className="flex items-center bg-zinc-950 p-3 rounded-sm border border-[#30363D] w-full">
                                            <input
                                                placeholder="%"
                                                value={input4}
                                                onChange={(e) => onChangeInput4(e.target.value)}
                                                className="flex-1 text-white bg-transparent text-base font-bold border-0 focus:outline-none min-w-0"
                                            />
                                            <span className="text-white text-base ml-2">%</span>
                                            </div>
                                        </div>
                                        </div>

                                        {/* Stop Loss */}
                                        <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
                                        <div className="flex flex-col gap-2 min-w-0 text-left">
                                            <span className="text-[#9D9DAF] text-sm">Stop Loss Price</span>
                                            <input
                                            placeholder="240.00"
                                            value={input5}
                                            onChange={(e) => onChangeInput5(e.target.value)}
                                            className="w-full text-white bg-zinc-950 text-base p-3 rounded-sm border border-[#30363D] focus:outline-none"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 min-w-0 text-left">
                                            <span className="text-[#9D9DAF] text-sm">Stop Loss %</span>
                                            <div className="flex items-center bg-zinc-950 p-3 rounded-sm border border-[#30363D] w-full">
                                            <input
                                                placeholder="%"
                                                value={input6}
                                                onChange={(e) => onChangeInput6(e.target.value)}
                                                className="flex-1 text-white bg-transparent text-base font-bold border-0 focus:outline-none min-w-0"
                                            />
                                            <span className="text-white text-base ml-2">%</span>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    )}

                                    
                                    <div className="flex flex-col items-start w-full gap-2 ">
                                        <div className="flex flex-col items-center pb-[1px]">
                                            <span className="text-zinc-400 text-sm" >
                                                {"Max Slippage %"}
                                            </span>
                                        </div>
                                        <input
                                            type="number"
                                            min={0}
                                            max={100}
                                            step="0.1"
                                            placeholder={"0.5"}
                                            value={input7}
                                            onChange={(event)=>onChangeInput7(event.target.value)}
                                            className="w-full text-white bg-zinc-950 text-base p-3 rounded-sm border border-solid border-[#30363D]"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start bg-zinc-950 py-3 rounded-lg w-full">
                                        <div className="flex items-center mb-2 ml-3 gap-2">
                                            <img
                                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/1uh405kh_expires_30_days.png"} 
                                                className="w-3 h-6 object-fill"
                                            />
                                            <span className="text-white text-s text-left" >
                                                {"AI Insight"}
                                            </span>
                                        </div>
                                        <span className="text-[#9D9DAF] text-sm mx-3 text-left" >
                                            {"Bullish trend 78% · Resistance $228.50 ·"}
                                        </span>
                                        <span className="text-[#9D9DAF] text-sm ml-3 text-left" >
                                            {"Suitable for small position entry"}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-start pt-4 gap-2 w-full">
                                        <span className="text-[#9D9DAF] text-sm font-bold" >
                                            {"Estimation"}
                                        </span>
                                        <div className="flex flex-col items-start gap-1 w-full">
                                            <div className="flex justify-between items-center w-full">
                                                <span className="text-[#9D9DAF] text-sm " >
                                                    {"Liquidation Price"}
                                                </span>
                                                <span className="text-white text-sm" >
                                                    {"$39,130.00"}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center w-full">
                                                <span className="text-[#9D9DAF] text-sm " >
                                                    {"Est. Fee"}
                                                </span>
                                                <span className="text-white text-sm" >
                                                    {"$2.50"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <PrimaryButton size="large" onClick={() => alert("Pressed!")}>
                                        {input1 === "Sell / Short" ? "Sell / Short" : "Buy / Long"}
                                    </PrimaryButton>
                                    {/* --- END Market Tab Content --- */}
                                </div>
                            )}
                            {activeOrderTab === "Limit" && (
                                <div className="w-full flex flex-col items-start px-4 py-4 gap-4">
                                    {/* --- BEGIN Limit Tab Content --- */}
                                    <div className="flex items-center bg-zinc-950 py-1 pl-1 pr-[5px] gap-6 rounded-sm w-full">
                                        {/* Toggle Buttons */}
                                        <div className="flex w-full gap-2">
                                            <button
                                                type="button"
                                                className={`flex-1 flex flex-col items-center py-[11px] px-6 rounded-sm transition-all
                                                    ${input1 !== "Sell / Short"
                                                        ? "bg-[#2DA44E33] text-[#2DA44E]"
                                                        : "bg-transparent text-zinc-400"
                                                    }`}
                                                onClick={() => onChangeInput1("Buy / Long")}
                                            >
                                                <span className="text-sm">{"Buy / Long"}</span>
                                            </button>
                                            <button
                                                type="button"
                                                className={`flex-1 flex flex-col items-center py-[11px] px-6 rounded-sm transition-all
                                                    ${input1 === "Sell / Short"
                                                        ? "bg-[#EF444433] text-[#F85149]"
                                                        : "bg-transparent text-zinc-400"
                                                    }`}
                                                onClick={() => onChangeInput1("Sell / Short")}
                                            >
                                                <span className="text-sm">{"Sell / Short"}</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start gap-2 w-full">
                                        <div className="flex flex-col items-center pb-[1px]">
                                            <span className="text-[#9D9DAF] text-sm" >
                                                {"Price (USDC)"}
                                            </span>
                                        </div>
                                        <input
                                            type="number"
                                            placeholder={"227.00"}
                                            value={input3}
                                            onChange={(event)=>onChangeInput3(event.target.value)}
                                            className="text-white bg-[#0D1117] text-base p-3 rounded-md border border-solid border-[#30363D] w-full"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start gap-2 w-full">
                                        <div className="flex flex-col items-center pb-[1px]">
                                            <span className="text-[#9D9DAF] text-sm" >
                                                {"Amount"}
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-start gap-4 w-full">
                                            {/* 金額輸入框與貨幣標籤 */}
                                            <div className="flex justify-between bg-zinc-950 py-[9px] px-3 rounded-sm border border-solid border-[#30363D] w-full ">
                                                <input
                                                    placeholder="0"
                                                    value={input2}
                                                    onChange={(e) => {
                                                        const value = Number(e.target.value.replace(/,/g, ""));
                                                        onChangeInput2(isNaN(value) ? "" : value.toString());
                                                    }}
                                                    className="text-white bg-transparent text-base w-40 py-[3px] border-0"
                                                />
                                                <div className="flex shrink-0 items-center bg-zinc-700 py-[7px] pl-2 pr-[7px] gap-1.5 rounded">
                                                    <span className="text-zinc-400 text-sm font-bold">USDT</span>
                                                    <img
                                                        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/bvauf8h6_expires_30_days.png"
                                                        className="w-3 h-[15px] rounded-sm object-fill"
                                                    />
                                                </div>
                                            </div>
                                            {/* 滑桿與快捷百分比按鈕 */}
                                            <div className="flex flex-col w-full">
                                                <input
                                                    type="range"
                                                    min={0}
                                                    max={100}
                                                    step={1}
                                                    value={percentValue}
                                                    onChange={(e) => {
                                                        const percent = Number(e.target.value);
                                                        const amount = Math.round((percent / 100) * AMOUNT_TOTAL);
                                                        onChangeInput2(amount.toString());
                                                    }}
                                                    className="w-full accent-fuchsia-800 h-2 rounded-lg appearance-none bg-zinc-700 my-2"
                                                />
                                                <div className="flex justify-between gap-2 w-full mt-1">
                                                    {[0, 25, 50, 75, 100].map((percent) => (
                                                        <button
                                                            key={percent}
                                                            type="button"
                                                            className={`py-[11px] w-full rounded-sm border ${
                                                                percentValue === percent
                                                                    ? "border-2 border-[#92318D] font-bold"
                                                                    : "border border-[#30363D]"
                                                            } bg-zinc-900 text-white text-sm`}
                                                            onClick={() => {
                                                                const amount = Math.round((percent / 100) * AMOUNT_TOTAL);
                                                                onChangeInput2(amount.toString());
                                                            }}
                                                        >
                                                            {percent}%
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="py-2 w-full flex items-center  justify-between focus:outline-none"
                                        onClick={() => setReduceOnly((prev) => !prev)}
                                    >
                                        <span className="text-[#C9D1D9] text-sm">
                                        {"Reduce Only"}
                                        </span>
                                        <div
                                        className={`shrink-0 flex items-center transition-colors duration-200 rounded-full ${reduceOnly ? "bg-fuchsia-800" : "bg-zinc-700"} py-0.5 pl-2 pr-0.5`}
                                        style={{ width: 48, height: 28 }}
                                        >
                                        <div
                                            className={`bg-white w-5 h-5 rounded-full border border-solid border-white shadow transition-transform duration-200 `}
                                            style={{
                                            transform: reduceOnly ? "translateX(16px)" : "translateX(0)",
                                            }}
                                        />
                                    </div>
                                    </button>
                                    <button
                                        type="button"
                                        className="py-2 flex items-center w-full justify-between focus:outline-none"
                                        onClick={() => setIsOn((prev) => !prev)}
                                        >
                                        <span className="text-[#C9D1D9] text-sm">Take Profit / Stop Loss</span>
                                        <div
                                            className={` shrink-0 flex items-center transition-colors duration-200 rounded-full ${
                                            isOn ? "bg-fuchsia-800" : "bg-zinc-700"
                                            } py-0.5 pl-2 pr-0.5`}
                                            style={{ width: 48, height: 28 }}
                                        >
                                            <div
                                            className={`bg-white w-5 h-5 rounded-full border border-solid border-white shadow transition-transform duration-200`}
                                            style={{
                                                transform: isOn ? "translateX(16px)" : "translateX(0)",
                                            }}
                                            />
                                        </div>
                                    </button>
                                    {/* Conditional TP/SL inputs */}
                                    {isOn && (
                                    <div className="flex flex-col gap-4 py-2 w-full">
                                        {/* Take Profit */}
                                        <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
                                        <div className="flex flex-col gap-2 min-w-0 text-left">
                                            <span className="text-[#9D9DAF] text-sm">Take Profit Price</span>
                                            <input
                                            placeholder="230.00"
                                            value={input3}
                                            onChange={(e) => onChangeInput3(e.target.value)}
                                            className="w-full text-white bg-zinc-950 text-base p-3 rounded-sm border border-[#30363D] focus:outline-none"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 min-w-0 text-left">
                                            <span className="text-[#9D9DAF] text-sm">Take Profit %</span>
                                            <div className="flex items-center bg-zinc-950 p-3 rounded-sm border border-[#30363D] w-full">
                                            <input
                                                placeholder="%"
                                                value={input4}
                                                onChange={(e) => onChangeInput4(e.target.value)}
                                                className="flex-1 text-white bg-transparent text-base font-bold border-0 focus:outline-none min-w-0"
                                            />
                                            <span className="text-white text-base ml-2">%</span>
                                            </div>
                                        </div>
                                        </div>

                                        {/* Stop Loss */}
                                        <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
                                            <div className="flex flex-col gap-2 min-w-0 text-left">
                                                <span className="text-[#9D9DAF] text-sm">Stop Loss Price</span>
                                                <input
                                                placeholder="240.00"
                                                value={input5}
                                                onChange={(e) => onChangeInput5(e.target.value)}
                                                className="w-full text-white bg-zinc-950 text-base p-3 rounded-sm border border-[#30363D] focus:outline-none"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2 min-w-0 text-left">
                                                <span className="text-[#9D9DAF] text-sm">Stop Loss %</span>
                                                <div className="flex items-center bg-zinc-950 p-3 rounded-sm border border-[#30363D] w-full">
                                                <input
                                                    placeholder="%"
                                                    value={input6}
                                                    onChange={(e) => onChangeInput6(e.target.value)}
                                                    className="flex-1 text-white bg-transparent text-base font-bold border-0 focus:outline-none min-w-0"
                                                />
                                                <span className="text-white text-base ml-2">%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )}

                                    <div className="flex items-center gap-2 w-full">
                                        <div className="flex flex-col items-start w-full gap-2">
                                            <div className="flex flex-col items-center pb-[1px] h-6">
                                                <span className="text-zinc-400 text-sm " >
                                                    {"Max Slippage %"}
                                                </span>
                                            </div>
                                            <input
                                                type="number"
                                                min={0}
                                                max={100}
                                                step="0.1"
                                                placeholder={"0.5"}
                                                value={input7}
                                                onChange={(event)=>onChangeInput7(event.target.value)}
                                                className="w-full text-white bg-zinc-950 text-base p-3 rounded-sm border border-solid border-[#30363D]"
                                            />
                                        </div>
                                        <div className="flex flex-col items-start w-full gap-2">
                                            <div className="flex items-center pb-[1px] gap-2 h-6">
                                                <span className="text-[#9D9DAF] text-sm">
                                                    {"TIF"}
                                                </span>

                                                {/* Wrap icon + tooltip in relative */}
                                                <div className="relative">
                                                    <button
                                                    type="button"
                                                    className="focus:outline-none"
                                                    onClick={() => setShowTifTooltip((v) => !v)}
                                                    tabIndex={0}
                                                    >
                                                    <img
                                                        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/32hekqyb_expires_30_days.png"
                                                        className="w-3 h-3 object-fill"
                                                        alt="TIF Info"
                                                    />
                                                    </button>

                                                    {showTifTooltip && (
                                                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 bg-zinc-900 text-sm text-white rounded px-3 py-2 border border-[#30363D] shadow-lg w-56">
                                                        <span className="font-bold">TIF (Time in Force)</span>
                                                        <br />
                                                        <br />
                                                        <span>
                                                        TIF determines how long an order remains active.<br />
                                                        <b>GTC</b>: Good Till Cancelled<br />
                                                        <b>IOC</b>: Immediate Or Cancel<br />
                                                        <b>ALO</b>: Add Liquidity Only
                                                        </span>
                                                    </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="relative w-full">
                                                <select
                                                    className="appearance-none w-full flex items-center bg-zinc-950 text-left p-3 pr-8 rounded-sm border border-solid border-[#30363D] text-white text-base"
                                                    value={tif}
                                                    onChange={e => setTif(e.target.value)}
                                                >
                                                    <option value="GTC">GTC</option>
                                                    <option value="IOC">IOC</option>
                                                    <option value="ALO">ALO</option>
                                                </select>
                                                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                                                    <img
                                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/w4taczak_expires_30_days.png"}
                                                        className="w-3 h-[15px] rounded-md object-fill"
                                                        alt="Dropdown"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start bg-zinc-950 py-3 rounded-lg w-full">
                                        <div className="flex items-center mb-2 ml-3 gap-2">
                                            <img
                                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/1uh405kh_expires_30_days.png"} 
                                                className="w-3 h-6 object-fill"
                                            />
                                            <span className="text-white text-s text-left" >
                                                {"AI Insight"}
                                            </span>
                                        </div>
                                        <span className="text-[#9D9DAF] text-sm mx-3 text-left" >
                                            {"Bullish trend 78% · Resistance $228.50 ·"}
                                        </span>
                                        <span className="text-[#9D9DAF] text-sm ml-3 text-left" >
                                            {"Suitable for small position entry"}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-start pt-4 gap-2 w-full">
                                        <span className="text-[#9D9DAF] text-sm font-bold" >
                                            {"Estimation"}
                                        </span>
                                        <div className="flex flex-col items-start gap-1 w-full">
                                            <div className="flex justify-between items-center w-full">
                                                <span className="text-[#9D9DAF] text-sm " >
                                                    {"Liquidation Price"}
                                                </span>
                                                <span className="text-white text-sm" >
                                                    {"$39,130.00"}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center w-full">
                                                <span className="text-[#9D9DAF] text-sm " >
                                                    {"Est. Fee"}
                                                </span>
                                                <span className="text-white text-sm" >
                                                    {"$2.50"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="w-full flex justify-center items-center bg-fuchsia-800 py-3.5 rounded-sm border-0"
                                        onClick={() => alert("Pressed!")}
                                    >
                                        <span className="text-white text-base font-bold text-center">
                                            {input1 === "Sell / Short" ? "Sell / Short" : "Buy / Long"}
                                        </span>
                                    </button>
                                    {/* --- END Limit Tab Content --- */}
                                </div>
                            )}
                            {activeOrderTab === "Advanced" && (
                                <div className="w-full flex flex-col items-start px-4 py-4 gap-4">
                                    {/* --- BEGIN Advanced Tab Content --- */}
                                    <div className="flex items-center bg-zinc-950 py-1 pl-1 pr-[5px] gap-6 rounded-sm w-full">
                                        {/* Toggle Buttons */}
                                        <div className="flex w-full gap-2">
                                            <button
                                                type="button"
                                                className={`flex-1 flex flex-col items-center py-[11px] px-6 rounded-sm transition-all
                                                    ${input1 !== "Sell / Short"
                                                        ? "bg-[#2DA44E33] text-[#2DA44E]"
                                                        : "bg-transparent text-zinc-400"
                                                    }`}
                                                onClick={() => onChangeInput1("Buy / Long")}
                                            >
                                                <span className="text-sm">{"Buy / Long"}</span>
                                            </button>
                                            <button
                                                type="button"
                                                className={`flex-1 flex flex-col items-center py-[11px] px-6 rounded-sm transition-all
                                                    ${input1 === "Sell / Short"
                                                        ? "bg-[#EF444433] text-[#F85149]"
                                                        : "bg-transparent text-zinc-400"
                                                    }`}
                                                onClick={() => onChangeInput1("Sell / Short")}
                                            >
                                                <span className="text-sm">{"Sell / Short"}</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start gap-2 w-full">
                                        <div className="flex flex-col items-center pb-[1px]">
                                            <span className="text-[#9D9DAF] text-sm" >
                                                {"Stop-Loss Type"}
                                            </span>
                                        </div>
                                        <button className="flex w-full items-center bg-[#0D1117] text-left p-3 rounded-md border border-solid border-[#30363D]"
                                            onClick={()=>alert("Pressed!")}>
                                            <span className="text-white text-base mr-[123px]" >
                                                {"Stop Market"}
                                            </span>
                                            <img
                                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/lwwwj2o4_expires_30_days.png"} 
                                                className="w-3 h-[15px] rounded-md object-fill"
                                            />
                                        </button>
                                    </div>
                                    <div className="flex flex-col items-start gap-2 w-full">
                                        <div className="flex flex-col items-center pb-[1px]">
                                            <span className="text-[#9D9DAF] text-sm" >
                                                {"Trigger Price (USDC)"}
                                            </span>
                                        </div>
                                        <input
                                            type="number"
                                            placeholder={"226.00"}
                                            value={input8}
                                            onChange={(event)=>onChangeInput8(event.target.value)}
                                            className="w-full text-white bg-[#0D1117] text-base p-3 rounded-md border border-solid border-[#30363D]"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start gap-2 w-full">
                                        <div className="flex flex-col items-center pb-[1px]">
                                            <span className="text-[#9D9DAF] text-sm" >
                                                {"Limit Price"}
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-start gap-1 w-full">
                                            <input
                                                type="number"
                                                placeholder={"225.78"}
                                                value={input9}
                                                onChange={(event)=>onChangeInput9(event.target.value)}
                                                className="w-full text-white bg-[#0D1117] text-base p-3 rounded-md border border-solid border-[#30363D]"
                                            />
                                            <span className="text-[#9D9DAF] text-sm" >
                                                {"Limit Rule: Limit = Stop ± 0.1%"}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start gap-2 w-full">
                                        <div className="flex flex-col items-center pb-[1px]">
                                            <span className="text-[#9D9DAF] text-sm" >
                                                {"Amount"}
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-start gap-4 w-full">
                                            {/* 金額輸入框與貨幣標籤 */}
                                            <div className="flex justify-between bg-zinc-950 py-[9px] px-3 rounded-sm border border-solid border-[#30363D] w-full ">
                                                <input
                                                    placeholder="0"
                                                    value={input2}
                                                    onChange={(e) => {
                                                        const value = Number(e.target.value.replace(/,/g, ""));
                                                        onChangeInput2(isNaN(value) ? "" : value.toString());
                                                    }}
                                                    className="text-white bg-transparent text-base w-40 py-[3px] border-0"
                                                />
                                                <div className="flex shrink-0 items-center bg-zinc-700 py-[7px] pl-2 pr-[7px] gap-1.5 rounded">
                                                    <span className="text-zinc-400 text-sm font-bold">USDT</span>
                                                    <img
                                                        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/bvauf8h6_expires_30_days.png"
                                                        className="w-3 h-[15px] rounded-sm object-fill"
                                                    />
                                                </div>
                                            </div>
                                            {/* 滑桿與快捷百分比按鈕 */}
                                            <div className="flex flex-col w-full">
                                                <input
                                                    type="range"
                                                    min={0}
                                                    max={100}
                                                    step={1}
                                                    value={percentValue}
                                                    onChange={(e) => {
                                                        const percent = Number(e.target.value);
                                                        const amount = Math.round((percent / 100) * AMOUNT_TOTAL);
                                                        onChangeInput2(amount.toString());
                                                    }}
                                                    className="w-full accent-fuchsia-800 h-2 rounded-lg appearance-none bg-zinc-700 my-2"
                                                />
                                                <div className="flex justify-between gap-2 w-full mt-1">
                                                    {[0, 25, 50, 75, 100].map((percent) => (
                                                        <button
                                                            key={percent}
                                                            type="button"
                                                            className={`py-[11px] w-full rounded-sm border ${
                                                                percentValue === percent
                                                                    ? "border-2 border-[#92318D] font-bold"
                                                                    : "border border-[#30363D]"
                                                            } bg-zinc-900 text-white text-sm`}
                                                            onClick={() => {
                                                                const amount = Math.round((percent / 100) * AMOUNT_TOTAL);
                                                                onChangeInput2(amount.toString());
                                                            }}
                                                        >
                                                            {percent}%
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="py-2 w-full flex items-center  justify-between focus:outline-none"
                                        onClick={() => setReduceOnly((prev) => !prev)}
                                    >
                                        <span className="text-[#C9D1D9] text-sm">
                                        {"Reduce Only"}
                                        </span>
                                        <div
                                        className={`shrink-0 flex items-center transition-colors duration-200 rounded-full ${reduceOnly ? "bg-fuchsia-800" : "bg-zinc-700"} py-0.5 pl-2 pr-0.5`}
                                        style={{ width: 48, height: 28 }}
                                        >
                                        <div
                                            className={`bg-white w-5 h-5 rounded-full border border-solid border-white shadow transition-transform duration-200 `}
                                            style={{
                                            transform: reduceOnly ? "translateX(16px)" : "translateX(0)",
                                            }}
                                        />
                                    </div>
                                    </button>
                                    <button
                                        type="button"
                                        className="py-2 flex items-center w-full justify-between focus:outline-none"
                                        onClick={() => setIsOn((prev) => !prev)}
                                        >
                                        <span className="text-[#C9D1D9] text-sm">Take Profit / Stop Loss</span>
                                        <div
                                            className={` shrink-0 flex items-center transition-colors duration-200 rounded-full ${
                                            isOn ? "bg-fuchsia-800" : "bg-zinc-700"
                                            } py-0.5 pl-2 pr-0.5`}
                                            style={{ width: 48, height: 28 }}
                                        >
                                            <div
                                            className={`bg-white w-5 h-5 rounded-full border border-solid border-white shadow transition-transform duration-200`}
                                            style={{
                                                transform: isOn ? "translateX(16px)" : "translateX(0)",
                                            }}
                                            />
                                        </div>
                                    </button>
                                    {/* Conditional TP/SL inputs */}
                                    {isOn && (
                                    <div className="flex flex-col gap-4 py-2 w-full">
                                        {/* Take Profit */}
                                        <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
                                        <div className="flex flex-col gap-2 min-w-0 text-left">
                                            <span className="text-[#9D9DAF] text-sm">Take Profit Price</span>
                                            <input
                                            placeholder="230.00"
                                            value={input3}
                                            onChange={(e) => onChangeInput3(e.target.value)}
                                            className="w-full text-white bg-zinc-950 text-base p-3 rounded-sm border border-[#30363D] focus:outline-none"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 min-w-0 text-left">
                                            <span className="text-[#9D9DAF] text-sm">Take Profit %</span>
                                            <div className="flex items-center bg-zinc-950 p-3 rounded-sm border border-[#30363D] w-full">
                                            <input
                                                placeholder="%"
                                                value={input4}
                                                onChange={(e) => onChangeInput4(e.target.value)}
                                                className="flex-1 text-white bg-transparent text-base font-bold border-0 focus:outline-none min-w-0"
                                            />
                                            <span className="text-white text-base ml-2">%</span>
                                            </div>
                                        </div>
                                        </div>

                                        {/* Stop Loss */}
                                        <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
                                        <div className="flex flex-col gap-2 min-w-0 text-left">
                                            <span className="text-[#9D9DAF] text-sm">Stop Loss Price</span>
                                            <input
                                            placeholder="240.00"
                                            value={input5}
                                            onChange={(e) => onChangeInput5(e.target.value)}
                                            className="w-full text-white bg-zinc-950 text-base p-3 rounded-sm border border-[#30363D] focus:outline-none"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 min-w-0 text-left">
                                            <span className="text-[#9D9DAF] text-sm">Stop Loss %</span>
                                            <div className="flex items-center bg-zinc-950 p-3 rounded-sm border border-[#30363D] w-full">
                                            <input
                                                placeholder="%"
                                                value={input6}
                                                onChange={(e) => onChangeInput6(e.target.value)}
                                                className="flex-1 text-white bg-transparent text-base font-bold border-0 focus:outline-none min-w-0"
                                            />
                                            <span className="text-white text-base ml-2">%</span>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    )}

                                    <div className="flex items-center gap-2 w-full">
                                        <div className="flex flex-col items-start w-full gap-2">
                                            <div className="flex flex-col items-center pb-[1px] h-6">
                                                <span className="text-zinc-400 text-sm " >
                                                    {"Max Slippage %"}
                                                </span>
                                            </div>
                                            <input
                                                type="number"
                                                min={0}
                                                max={100}
                                                step="0.1"
                                                placeholder={"0.5"}
                                                value={input7}
                                                onChange={(event)=>onChangeInput7(event.target.value)}
                                                className="w-full text-white bg-zinc-950 text-base p-3 rounded-sm border border-solid border-[#30363D]"
                                            />
                                        </div>
                                        <div className="flex flex-col items-start w-full gap-2">
                                            <div className="flex items-center pb-[1px] gap-2 h-6">
                                                <span className="text-[#9D9DAF] text-sm">
                                                    {"TIF"}
                                                </span>

                                                {/* Wrap icon + tooltip in relative */}
                                                <div className="relative">
                                                    <button
                                                    type="button"
                                                    className="focus:outline-none"
                                                    onClick={() => setShowTifTooltip((v) => !v)}
                                                    tabIndex={0}
                                                    >
                                                    <img
                                                        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/32hekqyb_expires_30_days.png"
                                                        className="w-3 h-3 object-fill"
                                                        alt="TIF Info"
                                                    />
                                                    </button>

                                                    {showTifTooltip && (
                                                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 bg-zinc-900 text-sm text-white rounded px-3 py-2 border border-[#30363D] shadow-lg w-56">
                                                        <span className="font-bold">TIF (Time in Force)</span>
                                                        <br />
                                                        <br />
                                                        <span>
                                                        TIF determines how long an order remains active.<br />
                                                        <b>GTC</b>: Good Till Cancelled<br />
                                                        <b>IOC</b>: Immediate Or Cancel<br />
                                                        <b>ALO</b>: Add Liquidity Only
                                                        </span>
                                                    </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="relative w-full">
                                                <select
                                                    className="appearance-none w-full flex items-center bg-zinc-950 text-left p-3 pr-8 rounded-sm border border-solid border-[#30363D] text-white text-base"
                                                    value={tif}
                                                    onChange={e => setTif(e.target.value)}
                                                >
                                                    <option value="GTC">GTC</option>
                                                    <option value="IOC">IOC</option>
                                                    <option value="ALO">ALO</option>
                                                </select>
                                                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                                                    <img
                                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/w4taczak_expires_30_days.png"}
                                                        className="w-3 h-[15px] rounded-md object-fill"
                                                        alt="Dropdown"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start bg-zinc-950 py-3 rounded-lg w-full">
                                        <div className="flex items-center mb-2 ml-3 gap-2">
                                            <img
                                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/1uh405kh_expires_30_days.png"} 
                                                className="w-3 h-6 object-fill"
                                            />
                                            <span className="text-white text-s text-left" >
                                                {"AI Insight"}
                                            </span>
                                        </div>
                                        <span className="text-[#9D9DAF] text-sm mx-3 text-left" >
                                            {"Bullish trend 78% · Resistance $228.50 ·"}
                                        </span>
                                        <span className="text-[#9D9DAF] text-sm ml-3 text-left" >
                                            {"Suitable for small position entry"}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-start pt-4 gap-2 w-full">
                                        <span className="text-[#9D9DAF] text-sm font-bold" >
                                            {"Estimation"}
                                        </span>
                                        <div className="flex flex-col items-start gap-1 w-full">
                                            <div className="flex justify-between items-center w-full">
                                                <span className="text-[#9D9DAF] text-sm " >
                                                    {"Liquidation Price"}
                                                </span>
                                                <span className="text-white text-sm" >
                                                    {"$39,130.00"}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center w-full">
                                                <span className="text-[#9D9DAF] text-sm " >
                                                    {"Est. Fee"}
                                                </span>
                                                <span className="text-white text-sm" >
                                                    {"$2.50"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="w-full flex justify-center items-center bg-fuchsia-800 py-3.5 rounded-sm border-0"
                                        onClick={() => alert("Pressed!")}
                                    >
                                        <span className="text-white text-base font-bold text-center">
                                            {input1 === "Sell / Short" ? "Sell / Short" : "Buy / Long"}
                                        </span>
                                    </button>
                                    {/* --- END Advanced Tab Content --- */}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col self-stretch bg-zinc-900 py-6 px-4 gap-2">
                    <span className="text-zinc-400 text-sm text-center  sm:mx-4 xs:mx-2" >
                        {"Lo‑Fi v1.4 · Based on PRD v1.4 · Points System + Additional Modules + Insurance Pool | Arbitrum One Network | USDC Only"}
                    </span>
                    <span className="text-zinc-400 text-sm text-center sm:mx-4 xs:mx-2" >
                        {"Three-column Trading Layout | Liquidity Pools (Foundation / Main Pool / Insurance Pool) | Asset & Points Center | Full Modules"}
                    </span>
                </div>
            </div>
        </div>
    )
}