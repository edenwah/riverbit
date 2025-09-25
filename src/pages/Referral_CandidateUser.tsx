import RiverbitLogo from "../components/RiverbitLogo";
import DesktopNav from "../components/DesktopNav";
import Footer from "../components/Footer";
export default () => {
	return (
		<div className="flex flex-col bg-black min-h-screen">
			<div className="self-stretch bg-white h-[1099px] rounded-lg border-2 border-solid border-[#CED4DA]">
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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/25cqohzb_expires_30_days.png"} 
								className="w-5 h-5 rounded-md object-fill"
							/>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/v9gsbqi4_expires_30_days.png"} 
								className="w-3 h-[15px] rounded-md object-fill"
							/>
						</div>
						<button className="flex shrink-0 items-center bg-[#161B22] text-left py-2.5 px-4 gap-2.5 rounded-md border border-solid border-[#30363D]"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/puzauefh_expires_30_days.png"} 
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
				<div className="flex flex-col self-stretch bg-[#0D0F13] gap-2.5">
					<div className="flex flex-col self-stretch pt-12 pb-[411px] mx-20 gap-8">
						<div className="flex items-start self-stretch mx-6">
							<div className="flex flex-1 flex-col items-start gap-2">
								<span className="text-white text-2xl font-bold" >
									{"Referral Program"}
								</span>
								<span className="text-[#8B949E] text-base" >
									{"Earn commissions and points by referring new users to RiverBit"}
								</span>
							</div>
							<div className="flex flex-1 items-start bg-[#161B22] py-1 mt-[25px] rounded-lg">
								<button className="flex flex-col shrink-0 items-start bg-[#92318D] text-left py-[7px] px-2.5 ml-1 rounded-md border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-white text-sm font-bold" >
										{"Candidate User"}
									</span>
								</button>
								<span className="text-[#8B949E] text-sm my-[7px] mx-[11px]" >
									{"C2C User"}
								</span>
								<span className="text-[#8B949E] text-sm my-[7px] mx-2.5" >
									{"Sub-Account"}
								</span>
								<span className="text-[#8B949E] text-sm my-[7px] mx-2.5" >
									{"Team Leader"}
								</span>
								<span className="flex-1 text-[#8B949E] text-sm text-center my-[7px] mx-2.5" >
									{"Foundation Team Leader"}
								</span>
							</div>
						</div>
						<div className="flex flex-col self-stretch mx-6 gap-6">
							<div className="flex flex-col items-start self-stretch bg-[#161B22] py-[25px] gap-[17px] rounded-lg border border-solid border-[#30363D]">
								<span className="text-white text-lg font-bold mx-[25px]" >
									{"Level Info / Dashboard"}
								</span>
								<div className="flex items-center self-stretch mx-[25px] gap-3">
									<div className="flex flex-1 flex-col items-start">
										<span className="text-[#8B949E] text-sm" >
											{"Role"}
										</span>
										<span className="text-white text-base" >
											{"Candidate User"}
										</span>
									</div>
									<div className="flex flex-1 flex-col items-start">
										<span className="text-[#8B949E] text-sm" >
											{"Commission Rate"}
										</span>
										<span className="text-[#92318D] text-base font-bold" >
											{"-"}
										</span>
									</div>
									<div className="flex flex-1 flex-col items-start">
										<span className="text-[#8B949E] text-sm" >
											{"Max Difference"}
										</span>
										<span className="text-white text-sm" >
											{"Up to 40% (r2 ≤ r1 ≤ r0 ≤ 0.40)"}
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch bg-[#161B22] py-[25px] rounded-lg border border-solid border-[#30363D]">
								<span className="text-white text-lg font-bold mb-[17px] mx-[25px]" >
									{"Remain Progress to C2C User"}
								</span>
								<div className="flex flex-col self-stretch mb-4 mx-[25px] gap-1">
									<div className="flex items-center self-stretch">
										<span className="flex-1 text-[#8B949E] text-sm" >
											{"Trading Volume"}
										</span>
										<span className="text-white text-sm" >
											{"$35,000.00 / 50,000.00"}
										</span>
									</div>
									<div className="self-stretch bg-[#30363D] rounded-[9999px]">
										<div className="self-stretch bg-[#92318D] h-2 rounded-[9999px]">
										</div>
									</div>
								</div>
								<div className="flex flex-col items-start self-stretch bg-[#0D1117] py-4 mx-[25px] rounded-lg">
									<div className="flex flex-col items-center pb-[1px] mb-[9px] ml-4">
										<span className="text-[#8B949E] text-sm" >
											{"Upgrade Requirements:"}
										</span>
									</div>
									<span className="text-white text-sm mb-[1px] mx-4" >
										{"Once you reach $50,000 in trading volume, you will automatically receive an invitation link and start earning 10% commission rebates on trading fees."}
									</span>
								</div>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</div>
	)
}