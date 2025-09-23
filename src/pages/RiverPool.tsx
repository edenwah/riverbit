import { useState, useRef, useEffect } from "react";
import RiverbitLogo from "../components/RiverbitLogo";
import DesktopNav from "../components/DesktopNav";
import PrimaryButton from "../components/Button/PrimaryButton";
import { SecondaryButton } from "../components/Button/SecondaryButton";
import LeverageSlider from "../components/LeverageSlider";
import Tabs from "../components/Tabs";
import Footer from "../components/Footer";
import Tips from "../components/Tips";

export default () => {
	const [input1, onChangeInput1] = useState('');
	const [leverage, setLeverage] = useState(10);
	const [riverPoolTab, setRiverPoolTab] = useState("Foundation");
	const [depositWithdrawTab, setdepositWithdrawTab] = useState("Deposit");
	const [recordsTab, setRecordsTab] = useState("Records");

	const [language, setLanguage] = useState("EN");
	const [showLangDropdown, setShowLangDropdown] = useState(false);
	const [showWalletDropdown, setShowWalletDropdown] = useState(false);
	const [showMoreDropdown, setShowMoreDropdown] = useState(false);
	const walletDropdownRef = useRef<HTMLDivElement>(null);
	const langDropdownRef = useRef<HTMLDivElement>(null);
	const moreDropdownRef = useRef<HTMLDivElement>(null);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

	return (
		<div className="flex flex-col bg-black min-h-screen">
			<div className="self-stretch">
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
				<div className="flex flex-col self-stretch gap-2 mx-6">
					<div className="flex flex-col self-stretch py-12 lg:mx-20 gap-8">
						<div className="flex items-start self-stretch border-b border-[#30363D] w-full">
							<div className="lg:max-w-1/3 w-full">
								<Tabs
                                            tabs={[
                                                "Foundation",
                                                "Main",
                                                "Insurance",
                                            ]}
                                            activeTab={riverPoolTab}
                                            onTabChange={setRiverPoolTab}
                                            />
							</div>
						</div>
						{/* Tab Content */}
						{riverPoolTab === "Foundation" && (
							<div className="flex flex-col self-stretch gap-4">
								<div className="flex flex-col self-stretch gap-8 w-full">
									<div className="w-full flex flex-col lg:flex-row justify-between items-start self-stretch gap-4">
										<div className="flex flex-col shrink-0 items-start gap-1">
											<span className="text-white text-3xl font-bold" >
												{"Foundation LP"}
											</span>
											<div className="flex items-center gap-2.5">
												<span className="text-[#8B949E] text-base" >
													{"0x•••abcd"}
												</span>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/8y7btkl5_expires_30_days.png"} 
													className="w-3.5 h-5 object-fill"
												/>
											</div>
										</div>
										<div className="flex shrink-0 gap-2">
											<SecondaryButton size="medium" onClick={() => alert("Pressed!")}>Withdraw</SecondaryButton>
											<PrimaryButton size="medium" onClick={() => alert("Pressed!")}>Deposit</PrimaryButton>
										</div>
									</div>
									<div className="flex flex-col self-stretch gap-3">
										<div className="flex flex-col lg:flex-row items-start self-stretch gap-3">
											<div className="w-full flex lg:basis-1/4 flex-col items-start bg-[#161B22] py-6 rounded-md border border-solid border-[#30363D]">
												<span className="text-[#8B949E] text-sm mb-[7px] mx-6" >
													{"Total Value Locked (TVL)"}
												</span>
												<span className="text-white text-2xl font-bold mb-[3px] mx-6" >
													{"$8.8M"}
												</span>
											</div>
											<div className="w-full flex lg:basis-1/4 flex-col items-start bg-[#161B22] py-6 rounded-md border border-solid border-[#30363D]">
												<span className="text-[#8B949E] text-sm mb-[7px] mx-6" >
													{"Last Month’s Yield"}
												</span>
												<span className="text-[#2DA44E] text-2xl font-bold mb-[3px] mx-6" >
													{"385.2%"}
												</span>
											</div>
											<div className="w-full flex lg:basis-1/4 flex-col items-start bg-[#161B22] py-6 rounded-md border border-solid border-[#30363D]">
												<span className="text-[#8B949E] text-sm mb-[7px] mx-6" >
													{"Your Deposit"}
												</span>
												<span className="text-white text-2xl font-bold mb-[3px] mx-6" >
													{"$100,000"}
												</span>
											</div>
											<div className="w-full flex lg:basis-1/4 flex-col items-start bg-[#161B22] py-6 rounded-md border border-solid border-[#30363D]">
												<span className="text-[#8B949E] text-sm mb-[7px] mx-6" >
													{"Cumulative Earnings"}
												</span>
												<span className="text-white text-2xl font-bold mb-[3px] mx-6" >
													{"$104,000"}
												</span>
											</div>
										</div>
										<div className="w-full flex flex-col lg:flex-row items-start self-stretch gap-3">
											<div className="w-full flex lg:basis-2/3 flex-col bg-[#161B22] py-6 gap-[21px] rounded-md border border-solid border-[#30363D]">
												<div className="flex items-center self-stretch mx-6 justify-between text-left">
													<span className="flex-1 text-white text-xl font-bold" >
														{"Account Value / PNL"}
													</span>
													<button className="flex shrink-0 items-start bg-[#0D1117] text-left p-3 gap-2.5 rounded-md border border-solid border-[#30363D]"
														onClick={()=>alert("Pressed!")}>
														<span className="text-[#A6A6B5] text-sm" >
															{"All Time"}
														</span>
														<img
															src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/4oqcx3n6_expires_30_days.png"} 
															className="w-3 h-[15px] rounded-md object-fill"
														/>
													</button>
												</div>
												<div className="self-stretch h-[300px] mx-6">
												</div>
												<div className="flex flex-col xl:flex-row justify-between items-start self-stretch mx-6">
													<div className="flex shrink-0 items-center pr-0.5 gap-2">
														<span className="text-[#8B949E] text-sm" >
															{"Deposit:"}
														</span>
														<span className="text-white text-sm" >
															{"100,000 USDC / Seat"}
														</span>
													</div>
													<div className="flex shrink-0 items-center pr-0.5 gap-2.5">
														<span className="text-[#8B949E] text-sm" >
															{"Lock-up:"}
														</span>
														<span className="text-white text-sm" >
															{"180 days"}
														</span>
													</div>
													<div className="flex shrink-0 items-center pr-0.5 gap-3.5">
														<span className="text-[#8B949E] text-sm" >
															{"Drawdown (DD):"}
														</span>
														<span className="text-red-400 text-sm" >
															{"10%"}
														</span>
													</div>
												</div>
											</div>
											<div className="w-full flex lg:basis-1/3 flex-col items-center bg-[#161B22] rounded-md border border-solid border-[#30363D]">
												<Tabs
													tabs={["Deposit", "Withdraw"]}
													activeTab={depositWithdrawTab}
													onTabChange={setdepositWithdrawTab}
												/>
												
												<div className="flex flex-col items-start p-6 gap-[17px] w-full">
													<div className="flex items-center w-full justify-between">
														<span className="text-[#8B949E] text-sm " >
															{"Available Balance:"}
														</span>
														<span className="text-white text-sm font-bold" >
															{"$10,000"}
														</span>
													</div>
													<div className="flex flex-col items-start gap-2 w-full">
														<div className="flex flex-col items-center pb-[1px]">
															<span className="text-[#9D9DAF] text-sm" >
																{"Amount"}
															</span>
														</div>
														<div className="w-full flex items-center justify-between bg-[#0D1117] py-4 px-4 rounded-md border border-solid border-[#30363D]">
															<input
																placeholder={"5,000"}
																value={input1}
																onChange={(event)=>onChangeInput1(event.target.value)}
																className="text-white bg-transparent text-base py-2 border-0"
															/>
															<div className="flex items-start bg-[#30363D] py-[7px] px-2 gap-4 rounded">
																<span className="text-[#8B949E] text-sm font-bold" >
																	{"USDC (Arbitrum)"}
																</span>
																<img
																	src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/l0l6tfkv_expires_30_days.png"} 
																	className="w-3 h-[15px] rounded object-fill"
																/>
															</div>
														</div>
													</div>
													<div className="flex flex-col items-start w-full gap-4">
														<div className="flex items-center w-full self-stretch justify-between">
															<span className="text-[#8B949E] text-sm" >
																{"Leverage"}
															</span>
															<span className="text-white text-base" >
																{leverage}x
															</span>
														</div>
														
														<LeverageSlider
															value={leverage}
															onChange={setLeverage}
														/>
													</div>

													<Tips
														tips={[
															"Limited to 100 Seats – First Come, First Served",
															"Unlocks Automatically at Maturity T+1",
														]}
														/>

													<PrimaryButton size="large" onClick={() => alert("Pressed!")}>
														Deposit
													</PrimaryButton>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-start self-stretch py-4 rounded-lg border-l-4 border-solid border-fuchsia-800" 
									style={{
										background: "linear-gradient(180deg, #92318D33, #00000000)"
									}}>
									<span className="text-white text-base font-bold ml-5" >
										{"Seat #12 Activated"}
									</span>
									<span className="text-[#8B949E] text-sm ml-5" >
										{"Expected Value: 500,000 Points"}
									</span>
									<span className="text-[#8B949E] text-sm ml-5" >
										{"Earnings Start in 88 Days"}
									</span>
								</div>
								<div className="flex flex-col items-start self-stretch bg-[#161B22] py-[1px] rounded-md border border-solid border-[#30363D]">
									<span className="text-white text-2xl font-bold my-6 ml-[25px] mr-[1px]" >
										{"My Points History"}
									</span>
									<div className="overflow-x-auto w-full pb-6 px-6 mx-[1px]">
										<table className="min-w-full text-left border-collapse">
											<thead>
											<tr className="text-[#8B949E] text-sm font-bold border-b border-[#30363D]">
												<th className="py-4 px-4">Date</th>
												<th className="py-4 px-4">Earned Points</th>
												<th className="py-4 px-4">Cumulative Points</th>
												<th className="py-4 px-4">Value</th>
												<th className="py-4 px-4">Status</th>
												<th className="py-4 px-4">Notes</th>
											</tr>
											</thead>
											<tbody>
											{[
												{
												date: "2025-09-05",
												earnedPoints: "+0 Points",
												cumulativePoints: "0 Points",
												value: "$0",
												status: "Pending Launch",
												note: "No rewards before launch",
												},
												{
												date: "2025-09-04",
												earnedPoints: "+0 Points",
												cumulativePoints: "0 Points",
												value: "$0",
												status: "Pending Launch",
												note: "No rewards before launch",
												},
												{
												date: "2025-09-03",
												earnedPoints: "+0 Points",
												cumulativePoints: "0 Points",
												value: "$0",
												status: "Pending Launch",
												note: "No rewards before launch",
												},
											].map((row, idx) => (
												<tr key={idx} className="text-[#E6EDF3] text-sm border-b border-[#30363D]">
												<td className="py-4 px-4">{row.date}</td>
												<td className="py-4 px-4">{row.earnedPoints}</td>
												<td className="py-4 px-4">{row.cumulativePoints}</td>
												<td className="py-4 px-4">{row.value}</td>
												<td className="py-4 px-4">
													<button
													className="bg-[#30363D] text-[#8B949E] text-sm font-bold py-1 px-2 rounded border-0"
													onClick={() => alert("Pressed!")}
													>
													{row.status}
													</button>
												</td>
												<td className="py-4 px-4">{row.note}</td>
												</tr>
											))}
											</tbody>
										</table>
									</div>

								</div>
								<div className="w-full self-stretch bg-[#161B22] rounded-md ">

									<div className="w-full border-b border-[#30363D]">
										<div className="xl:max-w-1/2 w-full">
											<Tabs
												tabs={[
													"Records",
													"Depositors",
													"Pool Positions",
													"Trade History",
												]}
												activeTab={recordsTab}
												onTabChange={setRecordsTab}
												/>
										</div>
									</div>
									{/* Tab Content */}
									{recordsTab === "Records" && (
										<div className="overflow-x-auto w-full py-4 px-6">
											<table className="min-w-full text-left border-collapse">
												<thead>
												<tr className="text-[#8B949E] text-sm font-bold border-b border-[#30363D]">
													<th className="py-3 px-4">Time</th>
													<th className="py-3 px-4">Type</th>
													<th className="py-3 px-4">Amount</th>
													<th className="py-3 px-4">Network</th>
													<th className="py-3 px-4">Tx</th>
													<th className="py-3 px-4">Status</th>
												</tr>
												</thead>
												<tbody>
												{[
													{
													time: "2025-09-01",
													type: "Foundation LP Deposit",
													amount: "$100,000",
													network: "Arbitrum",
													tx: "0x8a…9f",
													status: "Confirmed",
													statusColor: "#2DA44E",
													},
												].map((row, idx) => (
													<tr key={idx} className="text-sm border-b border-[#30363D]">
													<td className="py-4 px-4 text-[#E6EDF3]">{row.time}</td>
													<td className="py-4 px-4 text-[#E6EDF3]">{row.type}</td>
													<td className="py-4 px-4 text-[#E6EDF3]">{row.amount}</td>
													<td className="py-4 px-4 text-[#E6EDF3]">{row.network}</td>
													<td className="py-4 px-4 text-[#E6EDF3]">{row.tx}</td>
													<td className="py-4 px-4" style={{ color: row.statusColor }}>
														{row.status}
													</td>
													</tr>
												))}
												</tbody>
											</table>
										</div>
									)}
									
								</div>
							</div>
						)}
						
						
					</div>
					<Footer />
				</div>
			</div>
		</div>
	)
}