import React from "react";
import RiverbitLogo from "../components/RiverbitLogo";
import DesktopNav from "../components/DesktopNav";
export default (props) => {
	return (
		<div className="flex flex-col bg-black h-[100vh]">
			<div className="self-stretch">
				<div className="flex justify-between items-start self-stretch bg-[#161B22] py-3.5 px-4">
					<div className="flex shrink-0 items-start gap-8">
						<RiverbitLogo />
                        <DesktopNav />
					</div>
					<div className="flex shrink-0 items-center gap-4">
						<div className="flex flex-col shrink-0 items-start">
							<span className="text-[#8B949E] text-xs" >
								{"Balance"}
							</span>
							<span className="text-white text-sm" >
								{"$27,345.12"}
							</span>
						</div>
						<div className="w-[1px] h-8">
						</div>
						<div className="flex flex-col shrink-0 items-start">
							<span className="text-[#8B949E] text-xs" >
								{"Points"}
							</span>
							<span className="text-white text-sm" >
								{"1,250,000"}
							</span>
						</div>
						<div className="flex shrink-0 items-center bg-[#161B22] py-2.5 px-3 gap-2 rounded-md border border-solid border-[#30363D]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/683j95o1_expires_30_days.png"} 
								className="w-5 h-5 rounded-md object-fill"
							/>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/rgpeaa67_expires_30_days.png"} 
								className="w-3 h-[15px] rounded-md object-fill"
							/>
						</div>
						<button className="flex shrink-0 items-center bg-[#161B22] text-left py-2.5 px-4 gap-2.5 rounded-md border border-solid border-[#30363D]"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/rz2ki2xu_expires_30_days.png"} 
								className="w-3.5 h-[19px] rounded-md object-fill"
							/>
							<span className="text-[#C9D1D9] text-sm" >
								{"EN"}
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start bg-[#161B22] text-left py-[11px] px-4 rounded-md border border-solid border-[#30363D]"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-sm font-bold" >
								{"Withdraw"}
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start bg-[#92318D] text-left py-[11px] px-4 rounded-md border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-sm font-bold" >
								{"Deposit"}
							</span>
						</button>
					</div>
				</div>
				<div className="flex flex-col self-stretch gap-2.5">
					<div className="flex flex-col items-start self-stretch py-12 px-6 mx-20 gap-6">
						<span className="text-white text-3xl font-bold" >
							{"Earn Points"}
						</span>
						<div className="flex flex-col self-stretch gap-3">
							<div className="flex items-center self-stretch">
								<button className="flex flex-col shrink-0 items-start bg-[#161B22] text-left py-[21px] mr-3 gap-2 rounded-md border border-solid border-[#30363D]"
									onClick={()=>alert("Pressed!")}>
									<span className="text-[#8B949E] text-sm ml-[21px]" >
										{"My Points"}
									</span>
									<span className="text-white text-2xl font-bold ml-[21px]" >
										{"4,176"}
									</span>
								</button>
								<button className="flex flex-col shrink-0 items-start bg-[#161B22] text-left py-[21px] mr-3 gap-2 rounded-md border border-solid border-[#30363D]"
									onClick={()=>alert("Pressed!")}>
									<span className="text-[#8B949E] text-sm ml-[21px]" >
										{"Today's Points"}
									</span>
									<span className="text-[#2DA44E] text-2xl font-bold ml-[21px]" >
										{"+855"}
									</span>
								</button>
								<button className="flex flex-col shrink-0 items-start bg-[#161B22] text-left py-[21px] mr-[13px] gap-2 rounded-md border border-solid border-[#30363D]"
									onClick={()=>alert("Pressed!")}>
									<span className="text-[#8B949E] text-sm ml-[21px]" >
										{"Current Rank"}
									</span>
									<span className="text-white text-2xl font-bold ml-[21px]" >
										{"#1247"}
									</span>
								</button>
								<div className="flex flex-1 flex-col bg-[#161B22] py-[21px] gap-1.5 rounded-md border border-solid border-[#30363D]">
									<div className="flex items-center self-stretch mx-[21px]">
										<span className="flex-1 text-[#8B949E] text-sm" >
											{"Today’s Progress"}
										</span>
										<span className="text-[#B65EAF] text-sm" >
											{"8.55%"}
										</span>
									</div>
									<div className="items-start self-stretch bg-[#30363D] mx-[21px] rounded-[9999px]">
										<div className="bg-[#92318D] w-[15px] h-2.5 rounded-[9999px]">
										</div>
									</div>
									<div className="flex flex-col items-end self-stretch mx-[21px]">
										<span className="text-[#8B949E] text-xs mr-2" >
											{"855 / 10,000"}
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch bg-[#161B22] py-[1px] rounded-md border border-solid border-[#30363D]">
								<span className="text-white text-2xl font-bold my-6 ml-[25px] mr-[1px]" >
									{"Points Leaderboard"}
								</span>
								<div className="self-stretch px-6 mx-[1px]">
									<div className="flex items-start self-stretch mx-[1px]">
										<span className="text-[#8B949E] text-xs font-bold w-7 my-4 ml-6" >
											{"Rank"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold w-12 my-4 ml-6" >
											{"Address"}
										</span>
										<div className="flex flex-1 flex-col items-end py-4">
											<span className="text-[#8B949E] text-xs font-bold text-right w-12 mr-[19px]" >
												{"Points"}
											</span>
										</div>
										<div className="flex flex-1 flex-col items-end py-4">
											<span className="text-[#8B949E] text-xs font-bold text-right w-[87px] mr-[18px]" >
												{"24H Change"}
											</span>
										</div>
									</div>
									<div className="self-stretch mx-[1px]">
										<div className="flex items-start self-stretch py-2.5 px-6">
											<span className="text-white text-sm mr-[292px]" >
												{"1"}
											</span>
											<span className="flex-1 text-[#E0E0E0] text-sm" >
												{"0x4f8e...2a1d"}
											</span>
											<span className="text-white text-sm mr-[231px]" >
												{"3,521,087"}
											</span>
											<span className="text-[#2DA44E] text-sm" >
												{"+12,847"}
											</span>
										</div>
										<div className="flex items-start self-stretch py-2.5 px-6">
											<span className="text-white text-sm mr-[289px]" >
												{"2"}
											</span>
											<span className="flex-1 text-[#E0E0E0] text-sm" >
												{"0x7a2f...9b3c"}
											</span>
											<span className="text-white text-sm mr-[231px]" >
												{"2,847,392"}
											</span>
											<span className="text-[#2DA44E] text-sm" >
												{"+12,847"}
											</span>
										</div>
										<div className="flex items-start self-stretch py-2.5 px-6">
											<span className="text-white text-sm mr-[289px]" >
												{"3"}
											</span>
											<span className="flex-1 text-[#E0E0E0] text-sm" >
												{"0x9c6b...7e4f"}
											</span>
											<span className="text-white text-sm mr-[231px]" >
												{"2,193,746"}
											</span>
											<span className="text-[#2DA44E] text-sm" >
												{"+12,847"}
											</span>
										</div>
										<div className="flex items-start self-stretch py-2.5 px-6">
											<span className="text-white text-sm mr-72" >
												{"4"}
											</span>
											<span className="flex-1 text-[#E0E0E0] text-sm" >
												{"0x1a3e...8f2b"}
											</span>
											<span className="text-white text-sm mr-[231px]" >
												{"1,872,459"}
											</span>
											<span className="text-[#2DA44E] text-sm" >
												{"+12,847"}
											</span>
										</div>
										<div className="flex items-start self-stretch py-2.5 px-6">
											<span className="text-white text-sm mr-[289px]" >
												{"5"}
											</span>
											<span className="flex-1 text-[#E0E0E0] text-sm" >
												{"0x5d7c...4e9a"}
											</span>
											<span className="text-white text-sm mr-60" >
												{"1,634,281"}
											</span>
											<span className="text-[#2DA44E] text-sm" >
												{"+8,392"}
											</span>
										</div>
										<div className="flex items-start self-stretch py-2.5 px-6">
											<span className="text-white text-sm mr-[289px]" >
												{"6"}
											</span>
											<span className="flex-1 text-[#E0E0E0] text-sm" >
												{"0x8b4f...1c6d"}
											</span>
											<span className="text-white text-sm mr-[231px]" >
												{"1,401,928"}
											</span>
											<span className="text-[#2DA44E] text-sm" >
												{"+15,739"}
											</span>
										</div>
										<div className="flex items-start self-stretch py-2.5 px-6">
											<span className="text-white text-sm mr-[289px]" >
												{"7"}
											</span>
											<span className="flex-1 text-[#E0E0E0] text-sm" >
												{"0x2e9a...7f3b"}
											</span>
											<span className="text-white text-sm mr-60" >
												{"1,287,456"}
											</span>
											<span className="text-[#2DA44E] text-sm" >
												{"+6,284"}
											</span>
										</div>
										<div className="flex items-start self-stretch py-2.5 px-6">
											<span className="text-white text-sm mr-[289px]" >
												{"8"}
											</span>
											<span className="flex-1 text-[#E0E0E0] text-sm" >
												{"0x6c1d...9e4a"}
											</span>
											<span className="text-white text-sm mr-[231px]" >
												{"1,158,372"}
											</span>
											<span className="text-[#2DA44E] text-sm" >
												{"+11,947"}
											</span>
										</div>
										<div className="flex flex-col items-center self-stretch py-[7px]">
											<span className="text-[#8A91A0] text-sm" >
												{"..."}
											</span>
										</div>
										<div className="flex items-center self-stretch bg-[#92318D1A] px-[25px] border-2 border-solid border-[#92318D]">
											<span className="text-[#B65EAF] text-sm mr-60" >
												{"1247"}
											</span>
											<span className="text-white text-sm my-2.5 ml-6 mr-3" >
												{"You"}
											</span>
											<span className="text-white text-sm mr-[254px]" >
												{"4,176"}
											</span>
											<span className="text-[#2DA44E] text-sm" >
												{"+855"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex items-center self-stretch p-4 mx-[1px]">
									<span className="flex-1 text-[#8B949E] text-sm" >
										{"Showing 10 of 24134"}
									</span>
									<div className="flex shrink-0 items-start gap-[17px]">
										<button className="flex flex-col shrink-0 items-start bg-transparent text-left py-2.5 px-[18px] rounded-lg border border-solid border-[#30363D]"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#E6EDF3] text-base font-bold" >
												{"Previous"}
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-[#92318D] text-left py-2.5 px-[18px] rounded-lg border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-white text-base font-bold" >
												{"Next"}
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col self-stretch bg-[#0D1117] py-6 gap-2">
						<span className="text-[#8B949E] text-xs text-center mx-[372px]" >
							{"Lo‑Fi v1.4 · Based on PRD v1.4 · Points System + Additional Modules + Insurance Pool | Arbitrum One Network | USDC Only"}
						</span>
						<span className="text-[#8B949E] text-xs text-center mx-[363px]" >
							{"Three-column Trading Layout | Liquidity Pools (Foundation / Main Pool / Insurance Pool) | Asset & Points Center | Full Modules"}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}