import { useEffect, useRef, useState } from "react";
import RiverbitLogo from "../components/RiverbitLogo";
import DesktopNav from "../components/DesktopNav";
import Footer from "../components/Footer";
import DesktopNavRight from "../components/DesktopNavRight";
import MobileHeader from "../components/MobileHeader";
import MobileMenu from "../components/MobileMenu";
import PrimaryButton from "../components/Button/PrimaryButton";
import { SecondaryButton } from "../components/Button/SecondaryButton";
import Tabs from "../components/Tabs";
import Select from "../components/Select";
import Tips from "../components/Tips";

const Assets = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [language, setLanguage] = useState("EN");
	const [showLangDropdown, setShowLangDropdown] = useState(false);
	const [showWalletDropdown, setShowWalletDropdown] = useState(false);
	const [showMoreDropdown, setShowMoreDropdown] = useState(false);
	const walletDropdownRef = useRef<HTMLDivElement>(null);
	const langDropdownRef = useRef<HTMLDivElement>(null);
	const moreDropdownRef = useRef<HTMLDivElement>(null);

	{/* Close dropdowns when clicking outside */}
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

	const [assetsTab, setAssetsTab] = useState("Trade History");
	const [historyTime, setHistoryTime] = useState("")

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
                    {/* Right side (Balance, Points, Wallet, Language, Buttons) */}
					<DesktopNavRight
						balance="$27,345.12"
						points="1,250,000"
						language={language}
						setLanguage={setLanguage}
					/>
                </div>
				{/* Mobile header: show below xl */}
                <MobileHeader
                    balance="$27,345.12"
                    onDeposit={() => alert("Deposit pressed!")}
                    onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
                    />
                {/* Mobile Menu Drawer */}
                {mobileMenuOpen && (
                    <MobileMenu
                        isOpen={mobileMenuOpen}
                        onClose={() => setMobileMenuOpen(false)}
                        balance="$27,345.12"
                        points="1,250,000"
                        language={language}
						setLanguage={setLanguage}
                        />
                )}
				{/* Content */}
				<div className="w-full flex flex-col xl:flex-row items-start self-stretch p-4 gap-4">
					<div className="basis-3/4 w-full flex flex-1 flex-col gap-4">
						<div className="w-full flex flex-col items-start text-left self-stretch bg-zinc-900 py-8 px-4 lg:px-8 gap-4 rounded-md border border-solid border-[#30363D]">
							<span className="text-white text-2xl font-bold" >
								{"Assets Overview"}
							</span>
							<div className="flex flex-wrap w-full">
								{[
									{ label: "Account Value", value: "$27,345.12", valueColor: "text-white" },
									{ label: "Available Funds", value: "$12,450.00", valueColor: "text-white" },
									{ label: "Today's P&L", value: "+$234.56", valueColor: "text-[#2DA44E]" },
									{ label: "Position Value", value: "$14,895.12", valueColor: "text-white" },
									{ label: "Total Points", value: "1,250,000", valueColor: "text-white" },
									{ label: "Today's Points", value: "2,500", valueColor: "text-[#92318D]" }
								].map((item, idx) => (
									<div key={idx} className="flex flex-col items-start gap-2 my-4 w-full lg:w-1/3">
									<span className="text-[#8B949E] text-sm">{item.label}</span>
									<span className={`text-3xl font-bold ${item.valueColor}`}>{item.value}</span>
									</div>
								))}
							</div>

						</div>
						
						<div className="w-full self-stretch bg-zinc-900 px-4 lg:px-8 rounded-md border border-solid border-[#30363D]">
							<div className="overflow-x-auto flex items-start self-stretch border-b border-[#30363D] w-full">
								{/* Tabs */}
								<div className="lg:max-w-2/3 w-full ">
									<Tabs
										tabs={[
											"Trade History",
											"Funds Changes",
											"Points Center",
											"Detailed Analysis",
										]}
										activeTab={assetsTab}
										onTabChange={setAssetsTab}
										/>
								</div>
							</div>
							{/* Trade History Tab Content */}
							{assetsTab === "Trade History" && (
								<div>
									{/* Table */}
									<div className="flex flex-col self-stretch w-full py-4 overflow-x-auto">
										{/* Table */}
										<table className="text-sm text-left ">
										<thead>
											<tr className="text-[#8B949E] font-bold ">
												<th className="px-2 py-4">Time</th>
												<th className="px-2 py-4">Contract</th>
												<th className="px-2 py-4">Direction</th>
												<th className="px-2 py-4">Price</th>
												<th className="px-2 py-4">Quantity</th>
												<th className="px-2 py-4">Fee</th>
												<th className="px-2 ">P&L</th>
											</tr>
										</thead>
										<tbody className="text-white">
											{[
											{ time: "17:50:12", contract: "xAAPL", direction: "Buy", price: "227.45", quantity: "$5,000", fee: "$1.23", pl: "+$23" },
											{ time: "17:51:12", contract: "xAAPL", direction: "Sell", price: "227.20", quantity: "$8,000", fee: "$1.65", pl: "+$45" },
											{ time: "16:22:30", contract: "xTSLA", direction: "Buy", price: "213.70", quantity: "$3,000", fee: "$0.75", pl: "-$15" }
											].map((trade, idx) => (
											<tr key={idx} className="border-t border-[#30363D]">
												<td className="px-2 py-2">{trade.time}</td>
												<td className="px-2 py-2">{trade.contract}</td>
												<td className="px-2 py-2">
												<button
													className={`px-2 py-2 rounded border-0 ${
													trade.direction === "Buy" ? "bg-[#2DA44E33] text-[#2DA44E]" : "bg-[#F8514933] text-[#F85149]"
													}`}
													onClick={() => alert("Pressed!")}
												>
													{trade.direction}
												</button>
												</td>
												<td className="px-2 py-2">{trade.price}</td>
												<td className="px-2 py-2">{trade.quantity}</td>
												<td className="px-2 py-2">{trade.fee}</td>
												<td className={`px-2 py-2 font-bold ${trade.pl.startsWith("+") ? "text-[#2DA44E]" : "text-[#F85149]"}`}>
												{trade.pl}
												</td>
											</tr>
											))}
										</tbody>
										</table>
									</div>
									{/* Pagination */}
									<div className="w-full py-4 items-start text-left">
										<div className="flex justify-between items-center mt-6">
											<span className="text-[#8B949E] text-sm">Showing 10 of 156 trades</span>
											<div className="flex gap-4">
												<SecondaryButton size="small" onClick={() => alert("pressed")}>
												Previous
												</SecondaryButton>
												<PrimaryButton size="small" onClick={() => alert("pressed")}>
												Next
												</PrimaryButton>
											</div>
										</div>
									</div>
								</div>
							)}
							{/* Funds Changes */}
							{assetsTab === "Funds Changes" && (
								<div>
								{/* Table */}
								<div className="flex flex-col self-stretch w-full py-4 overflow-x-auto">
									<table className="text-sm text-left">
									<thead>
										<tr className="text-[#8B949E] font-bold">
										<th className="px-2 py-4">Time</th>
										<th className="px-2 py-4">Type</th>
										<th className="px-2 py-4">Amount</th>
										<th className="px-2 py-4">Balance</th>
										<th className="px-2 py-4">Remark</th>
										</tr>
									</thead>
									<tbody className="text-white">
										{[
										{ time: "18:06", type: "Fee", amount: "$-1.23", balance: "$27,345.12", remark: "—" },
										{ time: "17:10", type: "Funding Rate", amount: "$+3.12", balance: "$27,346.35", remark: "—" },
										{ time: "16:00", type: "Funding Rate", amount: "$-12.34", balance: "$27,343.23", remark: "xAAPL" }
										].map((row, idx) => (
										<tr key={idx} className="border-t border-[#30363D]">
											<td className="px-2 py-2">{row.time}</td>
											<td className="px-2 py-2">{row.type}</td>
											<td
											className={`px-2 py-2 font-bold ${
												row.amount.startsWith("+")
												? "text-[#2DA44E]"
												: row.amount.startsWith("-")
												? "text-[#F85149]"
												: ""
											}`}
											>
											{row.amount}
											</td>
											<td className="px-2 py-2">{row.balance}</td>
											<td className="px-2 py-2">{row.remark}</td>
										</tr>
										))}
									</tbody>
									</table>
								</div>
							
								{/* Pagination */}
								<div className="w-full py-4 items-start text-left">
									<div className="flex justify-between items-center mt-6">
									<span className="text-[#8B949E] text-sm">Showing 10 of 156 records</span>
									<div className="flex gap-4">
										<SecondaryButton size="small" onClick={() => alert("pressed")}>
										Previous
										</SecondaryButton>
										<PrimaryButton size="small" onClick={() => alert("pressed")}>
										Next
										</PrimaryButton>
									</div>
									</div>
								</div>
								</div>
							)}
							{/* Points Center */}
							{assetsTab === "Points Center" && (
								<div className="flex flex-col w-full gap-6">
									{/* Top 4 Summary Blocks */}
									<div className="flex flex-wrap w-full text-left my-4">
										<div className="w-full text-white font-bold my-2 text-left text-2xl">Points Overview</div>
										<div className="flex flex-col items-start gap-2 my-4 w-full lg:w-1/4">
											<span className="text-[#8B949E] text-sm">Total Points</span>
											<span className="text-white text-3xl font-bold ">1,250,000</span>
										</div>
										<div className="flex flex-col items-start gap-2 my-4 w-full lg:w-1/4">
											<span className="text-[#8B949E] text-sm">Earned Today</span>
											<span className="text-white text-3xl font-bold">2,500</span>
										</div>
										<div className="flex flex-col items-start gap-2 my-4 w-full lg:w-1/4">
											<span className="text-[#8B949E] text-sm">Earned This Week</span>
											<span className="text-white text-3xl font-bold">15,000</span>
										</div>
										<div className="flex flex-col items-start gap-2 my-4 w-full lg:w-1/4">
											<span className="text-[#8B949E] text-sm">Earned This Month</span>
											<span className="text-white text-3xl font-bold">45,000</span>
										</div>
									</div>
								
									{/* Title + Table */}
									<div>
									{/* Title */}
									<h2 className="text-white text-base font-bold items-start text-left">Points Source Analysis</h2>
								
									{/* Table */}
									<div className="flex flex-col self-stretch w-full py-4 overflow-x-auto">
										<table className="text-sm text-left">
										<thead>
											<tr className="text-[#8B949E] font-bold">
											<th className="px-2 py-4">Source</th>
											<th className="px-2 py-4">Total Points</th>
											<th className="px-2 py-4">Ratio %</th>
											<th className="px-2 py-4">Description</th>
											</tr>
										</thead>
										<tbody className="text-white">
											{[
											{ source: "Trading", total: "800,000", ratio: "64.0%", desc: "Earned from trading fees" },
											{ source: "Referrals", total: "300,000", ratio: "24.0%", desc: "Earned from inviting users" },
											{ source: "Liquidity Provider", total: "120,000", ratio: "9.6%", desc: "Liquidity provision" },
											{ source: "Insurance", total: "20,000", ratio: "1.6%", desc: "Participation in insurance pool" },
											{ source: "Events", total: "10,000", ratio: "0.8%", desc: "Event participation" }
											].map((row, idx) => (
											<tr key={idx} className="border-t border-[#30363D]">
												<td className="px-2 py-2">{row.source}</td>
												<td className="px-2 py-2 font-bold">{row.total}</td>
												<td className="px-2 py-2">{row.ratio}</td>
												<td className="px-2 py-2">{row.desc}</td>
											</tr>
											))}
										</tbody>
										</table>
									</div>
									</div>
								
									{/* Bottom 2 Chart Placeholders */}
									<div className="grid xl:grid-cols-2 gap-6 mt-6">
									{/* Trend Chart */}
									<div className="flex flex-col">
										<div className="flex flex-row justify-between items-end">
											<h3 className="w-full text-white font-bold mb-2 text-left">Points Trend</h3>
											<div className=" bg-zinc-900/20 flex text-[#8B949E]">
												<Select
													value={historyTime}
													onChange={setHistoryTime}
													placeholder="All Time"
													options={[
														{ label: "1D", value: "1D" },
														{ label: "7D", value: "7D" },
														{ label: "30D", value: "30D" },
														{ label: "3M", value: "3M" },
														{ label: "1Y", value: "1Y" },
														{ label: "All Time", value: "All Time" },
													]}
													minWidth="min-w-24"
													/>
											</div>
										</div>
										<div className="w-full h-60 bg-zinc-900/20 flex items-center justify-center text-[#8B949E]">
										Token-earned trend chart (MVP: points)
										</div>
									</div>
								
									{/* Pie Chart */}
									<div className="flex flex-col">
										<h3 className="text-white font-bold mb-2 text-left">Source Distribution</h3>
										<div className="w-full h-60 bg-zinc-900/20 flex items-center justify-center text-[#8B949E]">
										Source distribution pie chart
										</div>
									</div>
									</div>
								</div>							  
							)}
							{/* Detailed Analysis */}
							{assetsTab === "Detailed Analysis" && (
								<div className="flex flex-col w-full gap-6">
									{/* Top 4 Summary Blocks */}
									<div className="flex flex-col w-full text-left my-4 gap-4">
										<div className="w-full text-white font-bold my-2 text-left text-2xl">Detailed Analysis</div>
										<Tips
											iconUrl="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/1uh405kh_expires_30_days.png"
											tips={[
												"The following analysis data is for reference only. Historical data is not indicative of future performance; please use caution.",
											]}
											/>
										<div className="flex flex-wrap w-full">
											<div className="flex flex-col items-start gap-2 my-4 w-full lg:w-1/4">
												<span className="text-[#8B949E] text-sm">Total P&L</span>
												<span className="text-white text-3xl font-bold ">+$2,345.67</span>
											</div>
											<div className="flex flex-col items-start gap-2 my-4 w-full lg:w-1/4">
												<span className="text-[#8B949E] text-sm">Max Drawdown</span>
												<span className="text-white text-3xl font-bold">-12.5%</span>
											</div>
											<div className="flex flex-col items-start gap-2 my-4 w-full lg:w-1/4">
												<span className="text-[#8B949E] text-sm">Win Rate</span>
												<span className="text-white text-3xl font-bold">68.5%</span>
											</div>
											<div className="flex flex-col items-start gap-2 my-4 w-full lg:w-1/4">
												<span className="text-[#8B949E] text-sm">Sharpe Ratio</span>
												<span className="text-white text-3xl font-bold">1.24</span>
											</div>
										</div>

									</div>
								
									{/* Bottom 2 Chart Placeholders */}
									<div className="gap-6 mt-6 w-full">
									{/* Trend Chart */}
									<div className="flex flex-col w-full">
										<div className="flex flex-row justify-between w-full items-end">
											<h3 className="w-full text-white font-bold text-xl mb-2 text-left">Historical Performance Backtest</h3>
											<div className="bg-zinc-900/20 text-[#8B949E] text-right">
											<Select
												value={historyTime}
												onChange={setHistoryTime}
												placeholder="All Time"
												options={[
													{ label: "1D", value: "1D" },
													{ label: "7D", value: "7D" },
													{ label: "30D", value: "30D" },
													{ label: "3M", value: "3M" },
													{ label: "1Y", value: "1Y" },
													{ label: "All Time", value: "All Time" },
												]}
												minWidth="min-w-24"
												/>
											</div>
										</div>
										<div className="w-full h-60 bg-zinc-900/20 flex items-center justify-center text-[#8B949E]">
										Cumulative P&L Curve
										</div>
									</div>
								</div>
							</div>
							)}
						</div>
					</div>
					<div className="basis-1/4 w-full flex flex-col items-start gap-4">
						<div className="w-full flex flex-col items-start bg-zinc-900 p-4 gap-[17px] rounded-md border border-solid border-[#30363D]">
							<span className="text-white text-lg font-bold">Portfolio </span>
							
							<div className="w-full flex flex-col text-left gap-4">
								{/* Bitcoin */}
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="flex items-center justify-center bg-[#F97316] pt-1.5 pb-[9px] px-3 rounded-full">
										<span className="text-white text-sm font-bold">₿</span>
										</div>
										<div className="flex flex-col">
										<span className="text-white text-sm font-bold">Bitcoin</span>
										<span className="text-[#8B949E] text-sm">BTC</span>
										</div>
									</div>
									<div className="flex flex-col items-end">
										<span className="text-white text-sm font-bold">$15,234.56</span>
										<span className="text-[#2DA44E] text-sm">+2.34%</span>
									</div>
								</div>

								{/* Ethereum */}
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="flex items-center justify-center bg-blue-500 pt-1.5 pb-[9px] px-3 rounded-full">
										<span className="text-white text-sm font-bold">E</span>
										</div>
										<div className="flex flex-col">
										<span className="text-white text-sm font-bold">Ethereum</span>
										<span className="text-[#8B949E] text-sm">ETH</span>
										</div>
									</div>
									<div className="flex flex-col items-end">
										<span className="text-white text-sm font-bold">$8,765.43</span>
										<span className="text-[#2DA44E] text-sm">+1.87%</span>
									</div>
								</div>

								{/* USDT */}
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="flex items-center justify-center bg-green-500 pt-1.5 pb-[9px] px-[11px] rounded-full">
										<span className="text-white text-sm font-bold">U</span>
										</div>
										<div className="flex flex-col">
										<span className="text-white text-sm font-bold">USDT</span>
										<span className="text-[#8B949E] text-sm">Tether</span>
										</div>
									</div>
									<div className="flex flex-col items-end">
										<span className="text-white text-sm font-bold">$2,345.13</span>
										<span className="text-[#8B949E] text-sm">0.00%</span>
									</div>
								</div>

								{/* RiverBit Token */}
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="flex items-center justify-center bg-[#92318D] pt-1.5 pb-[9px] px-[11px] rounded-full">
										<span className="text-white text-sm font-bold">R</span>
										</div>
										<div className="flex flex-col">
										<span className="text-white text-sm font-bold">RiverBit Token</span>
										<span className="text-[#8B949E] text-sm">RBT</span>
										</div>
									</div>
									<div className="flex flex-col items-end">
										<span className="text-white text-sm font-bold">$1,000.00</span>
										<span className="text-[#2DA44E] text-sm">+5.67%</span>
									</div>
								</div>
							</div>
						</div>

						<div className="w-full flex flex-col items-start bg-zinc-900 p-4 gap-[17px] rounded-md border border-solid border-[#30363D]">
							<span className="text-white text-lg font-bold" >
								{"Quick Actions"}
							</span>
							<div className="w-full flex flex-col items-center gap-3">
								<PrimaryButton
									size="large"
									icon={
									<img
										src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/2g3b7i5w_expires_30_days.png"
										className="w-4 h-6 object-fill"
									/>
									}
									onClick={() => alert("Deposit Funds pressed")}
								>
									Deposit Funds
								</PrimaryButton>

								<SecondaryButton
									size="large"
									icon={
									<img
										src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/uo736cf0_expires_30_days.png"
										className="w-4 h-6 object-fill"
									/>
									}
									onClick={() => alert("Withdraw Funds pressed")}
								>
									Withdraw Funds
								</SecondaryButton>

								<SecondaryButton
									size="large"
									icon={
									<img
										src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/jkf3xms9_expires_30_days.png"
										className="w-4 h-6 object-fill"
									/>
									}
									onClick={() => alert("Trade Now pressed")}
								>
									Trade Now
								</SecondaryButton>
							</div>

						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default Assets