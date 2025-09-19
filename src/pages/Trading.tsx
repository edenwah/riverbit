import { useState } from "react";
export default () => {
    const [input1, onChangeInput1] = useState('');
    const [input2, onChangeInput2] = useState('');
    const [input3, onChangeInput3] = useState('');
    const [input4, onChangeInput4] = useState('');
    const [input5, onChangeInput5] = useState('');
    const [input6, onChangeInput6] = useState('');
    const [input7, onChangeInput7] = useState('');
    const [isOn, setIsOn] = useState(false);
    const [reduceOnly, setReduceOnly] = useState(false);
    const [activeOrderTab, setActiveOrderTab] = useState("Market"); // NEW: tab state
    const [orderTab, setOrderTab] = useState("Order Book"); // Add this with your useState hooks
	const [activeAccountTab, setActiveAccountTab] = useState("Balance"); // Balance 為預設選中
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Add this line
    const [granularity, setGranularity] = useState("")
    const [indicator, setIndicator] = useState("")
    const [filterValue, setFilterValue] = useState("")
    const [pressedButton, setPressedButton] = useState(""); // For tracking which button is pressed
    const [tif, setTif] = useState("GTC");
    const [showTifTooltip, setShowTifTooltip] = useState(false);

    const AMOUNT_TOTAL = 1000;

    // Calculate percent from input2 (amount)
    const percentValue = input2
      ? Math.max(0, Math.min(100, Math.round((Number(input2) / AMOUNT_TOTAL) * 100)))
      : 0;

    return (
        <div className="flex flex-col bg-black ">
            <div className="self-stretch ">
                {/* Header */}
                {/* Desktop header: show on xl and up */}
                <div className="hidden xl:flex justify-between items-start self-stretch bg-zinc-900 py-3.5 px-4">
                    {/* Left: Logo and nav */}
                    <div className="flex shrink-0 items-start gap-8">
                        <img
                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/tsg0s0tv_expires_30_days.png"} 
                            className="w-[118px] h-10 object-fill"
                        />
                        {/* Desktop nav */}
                        <div className="flex shrink-0 items-start">
                            {/* ...nav buttons... */}
                            <button className="flex flex-col shrink-0 items-start bg-zinc-700 text-left py-[11px] px-3 mr-[30px] rounded-sm border-0"
                                onClick={()=>alert("Pressed!")}>
                                <span className="text-white text-sm" >
                                    {"Trading"}
                                </span>
                            </button>
                            <div className="flex flex-col shrink-0 items-center py-[11px] mr-[30px] rounded-sm">
                                <span className="text-zinc-400 text-sm" >
                                    {"RiverPool"}
                                </span>
                            </div>
                            <div className="flex flex-col shrink-0 items-center py-[11px] mr-[30px] rounded-sm">
                                <span className="text-zinc-400 text-sm" >
                                    {"Earn"}
                                </span>
                            </div>
                            <div className="flex flex-col shrink-0 items-center py-[11px] mr-[30px] rounded-sm">
                                <span className="text-zinc-400 text-sm" >
                                    {"Referral"}
                                </span>
                            </div>
                            <div className="flex flex-col shrink-0 items-center py-[11px] mr-[30px] rounded-sm">
                                <span className="text-zinc-400 text-sm" >
                                    {"Assets"}
                                </span>
                            </div>
                            <div className="flex shrink-0 items-center py-[11px] gap-[13px] rounded-sm">
                                <span className="text-zinc-400 text-sm" >
                                    {"More"}
                                </span>
                                <img
                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/wo9zz3y5_expires_30_days.png"} 
                                    className="w-3 h-[15px] rounded-sm object-fill"
                                />
                            </div>
                        </div>
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
                            <div className="flex shrink-0 items-center bg-zinc-900 py-2.5 px-3 gap-2 rounded-sm border border-solid border-[#30363D]">
                                <img
                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/7ru13dyc_expires_30_days.png"} 
                                    className="w-5 h-5 rounded-sm object-fill"
                                />
                                <img
                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/wbxxcfe7_expires_30_days.png"} 
                                    className="w-3 h-[15px] rounded-sm object-fill"
                                />
                            </div>
                            <button className="flex shrink-0 items-center bg-zinc-900 text-left py-2.5 px-4 gap-2.5 rounded-sm border border-solid border-[#30363D]"
                                onClick={()=>alert("Pressed!")}>
                                <img
                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/oyc1zap7_expires_30_days.png"} 
                                    className="w-3.5 h-[19px] rounded-sm object-fill"
                                />
                                <span className="text-[#C9D1D9] text-sm" >
                                    {"EN"}
                                </span>
                            </button>
                            <button className="flex flex-col shrink-0 items-start bg-zinc-900 text-left py-[11px] px-4 rounded-sm border border-solid border-[#30363D]"
                                onClick={()=>alert("Pressed!")}>
                                <span className="text-white text-sm font-bold" >
                                    {"Withdraw"}
                                </span>
                            </button>
                            <button className="flex flex-col shrink-0 items-start bg-fuchsia-800 text-left py-[11px] px-4 rounded-sm border-0"
                                onClick={()=>alert("Pressed!")}>
                                <span className="text-white text-sm font-bold" >
                                    {"Deposit"}
                                </span>
                            </button>
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
                        <button className="flex flex-col shrink-0 items-start bg-fuchsia-800 text-left py-[11px] px-4 rounded-sm border-0"
                            onClick={()=>alert("Pressed!")}>
                            <span className="text-white text-sm font-bold" >
                                {"Deposit"}
                            </span>
                        </button>
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
                                    <div className="flex items-center gap-1 ml-4">
                                        <span className="text-zinc-400 text-sm font-bold">
                                            {"Select Asset"}
                                        </span>
                                        <img
                                            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/rnvmw36i_expires_30_days.png"
                                            className="w-3 h-[15px] rounded-sm object-fill"
                                        />
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
                            <div className="flex flex-col w-full">
                                {/* Tabs + Filter */}
                                <div className="overflow-x-auto">
                                    <div className="flex justify-between items-center border-b border-[#30363D] px-4 min-w-[600px] flex-nowrap">
                                        <div className="flex gap-4 whitespace-nowrap mr-4">
                                            {[
                                            "Balance",
                                            "Positions",
                                            "Open Orders",
                                            "Trade History",
                                            "Funding Rate History",
                                            "Order History",
                                            ].map((tab) => (
                                            <button
                                                key={tab}
                                                className={`py-3 text-sm font-semibold ${
                                                activeAccountTab === tab
                                                    ? "text-white border-b-2 border-[#92318D]"
                                                    : "text-zinc-400"
                                                }`}
                                                onClick={() => setActiveAccountTab(tab)}
                                            >
                                                {tab}
                                            </button>
                                            ))}
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
                                    <div className="overflow-x-auto px-4 py-3 text-left">
                                    {/* Table Header */}
                                    <div className="flex text-sm text-zinc-400 font-bold mb-2 min-w-[400px]">
                                        <span className="flex-1">Currency</span>
                                        <span className="flex-1">Available</span>
                                        <span className="flex-1">In Orders</span>
                                        <span className="flex-1">Value($)</span>
                                    </div>

                                    {/* Table Rows */}
                                    <div className="flex flex-col gap-2 text-sm text-white min-w-[400px]">
                                        <div className="flex">
                                        <span className="flex-1">USDC</span>
                                        <span className="flex-1">12,345.67</span>
                                        <span className="flex-1">1,000.00</span>
                                        <span className="flex-1">$13,345.67</span>
                                        </div>
                                        <div className="flex">
                                        <span className="flex-1">Points</span>
                                        <span className="flex-1">1,250,000</span>
                                        <span className="flex-1">0</span>
                                        <span className="flex-1">Points</span>
                                        </div>
                                    </div>
                                    </div>
                                )}
                                </div>

                        </div>
                    </div>

                    {/* Order Book + Trading Form wrapper */}
                    <div className="md:col-span-2 grid 2xl:grid-cols-2 flex flex-col gap-2 w-full  xl:gap-2">
                        {/* Order Book/Trades (col-span-1 on desktop, full width on mobile) */}
                        <div className="flex flex-col gap-2 items-center bg-zinc-900 p-[1px] rounded-sm border border-solid border-[#30363D] w-full">
                            {/* Tabs for Order Book/Trades */}
                            <div className="flex items-center pl-3 pr-[13px] border-b border-[#30363D] w-full">
                                {["Order Book", "Trades"].map(tab => (
                                    <button
                                        key={tab}
                                        className={`text-sm py-[15px] w-full focus:outline-none ${
                                            orderTab === tab
                                                ? "text-white border-b-2 border-[#92318D] font-bold"
                                                : "text-zinc-400"
                                        }`}
                                        onClick={() => setOrderTab(tab)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                            {/* Tab Content */}
                            {orderTab === "Order Book" && (
                                <div className="flex flex-col items-start w-full">
                                    {/* --- BEGIN Order Book Content (lines 353-640) --- */}
                                    {/* Paste all the JSX from line 353 to 640 here */}
                                    <div className="flex flex-col items-start w-full">
                                        <div className="flex flex-col items-center py-1 w-full">
                                            <div className="flex items-start pr-[1px] ">
                                                <span className="text-zinc-400 text-sm my-1 mx-8" >
                                                    {"Price"}
                                                </span>
                                                <span className="text-zinc-400 text-sm my-1 mx-[35px]" >
                                                    {"Size"}
                                                </span>
                                                <span className="text-zinc-400 text-sm my-1 ml-[49px] mr-[17px]" >
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
                                                <div className="grid grid-cols-3 w-full relative z-10 px-4 py-2">
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
                                                    <div className="grid grid-cols-3 w-full relative z-10 px-4 py-2">
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
                                <div className="flex flex-col items-center justify-center w-full py-12">
                                    <span className="text-zinc-400 text-base">Trades coming soon.</span>
                                </div>
                            )}
                        </div>
                        {/* Trading Form (col-span-1 on desktop, full width on mobile) */}
                        <div className="flex flex-col gap-2 items-center bg-zinc-900 rounded-sm border border-solid border-[#30363D] w-full ">
                            {/* Cross Margin, Leverage and AI Trading */}
                            <div className="flex items-start p-3 w-full gap-2">
                                <button
                                    className={`flex-1 flex flex-col shrink-0 text-nowrap items-start bg-zinc-950 text-left py-3 px-2  rounded-sm border ${
                                        pressedButton === "cross" ? "border-fuchsia-800" : "border-[#30363D]"
                                    } border-solid`}
                                    onClick={() => setPressedButton("cross")}
                                >
                                    <span className="text-[#A6A6B5] text-sm">
                                        {"Cross Margin"}
                                    </span>
                                </button>
                                <button
                                    className={`flex-1 justify-between flex shrink-0 items-start bg-zinc-950 text-left py-3 px-2 gap-[11px] rounded-sm border ${
                                        pressedButton === "leverage" ? "border-fuchsia-800" : "border-[#30363D]"
                                    } border-solid`}
                                    onClick={() => setPressedButton("leverage")}
                                >
                                    <span className="text-white text-sm">
                                        {"20x"}
                                    </span>
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/jw98n908_expires_30_days.png"} 
                                        className="w-3 h-[15px] rounded-sm object-fill"
                                    />
                                </button>
                                <button
                                    className={`flex-1 flex flex-col shrink-0 items-start text-nowrap bg-zinc-950 text-left py-3 px-2 rounded-sm border ${
                                        pressedButton === "ai" ? "border-fuchsia-800" : "border-[#30363D]"
                                    } border-solid`}
                                    onClick={() => setPressedButton("ai")}
                                >
                                    <span className="text-[#A6A6B5] text-sm">
                                        {"AI Trading"}
                                    </span>
                                </button>
                            </div>

                            {/* Tabs */}
                            <div className="flex items-start justify-between pl-3 pr-[13px] border-b border-[#30363D] w-full">
                                {["Market", "Limit", "Advanced"].map(tab => (
                                    <button
                                        key={tab}
                                        className={`w-full text-sm py-[15px] px-4 focus:outline-none ${
                                            activeOrderTab === tab
                                                ? "text-white border-b-2 border-[#92318D] font-bold"
                                                : "text-zinc-400"
                                        }`}
                                        onClick={() => setActiveOrderTab(tab)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
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
                                    <button
                                        className="w-full flex justify-center items-center bg-fuchsia-800 py-3.5 rounded-sm border-0"
                                        onClick={() => alert("Pressed!")}
                                    >
                                        <span className="text-white text-base font-bold text-center">
                                            {input1 === "Sell / Short" ? "Sell / Short" : "Buy / Long"}
                                        </span>
                                    </button>
                                    {/* --- END Market Tab Content --- */}
                                </div>
                            )}
                            {activeOrderTab === "Limit" && (
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
                                        <div className="flex flex-col items-start w-full gap-2">
                                            <div className="flex items-center pb-[1px] gap-2">
                                                <span className="text-[#9D9DAF] text-xs">
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
                                                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 bg-zinc-900 text-xs text-white rounded px-3 py-2 border border-[#30363D] shadow-lg w-56">
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
                                    {/* --- END Market Tab Content --- */}
                                </div>
                            )}
                            {activeOrderTab === "Advanced" && (
                                <div className="w-full flex flex-col items-center justify-center py-12">
                                    <span className="text-zinc-400 text-base">Advanced order form coming soon.</span>
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