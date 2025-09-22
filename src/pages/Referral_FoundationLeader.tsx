import React, {useState} from "react";
import RiverbitLogo from "../components/RiverbitLogo";
import DesktopNav from "../components/DesktopNav";
import Footer from "../components/Footer";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-white h-[1709px] rounded-lg border-2 border-solid border-[#CED4DA]">
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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/eb48i18d_expires_30_days.png"} 
								className="w-5 h-5 rounded-md object-fill"
							/>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/zf53akqs_expires_30_days.png"} 
								className="w-3 h-[15px] rounded-md object-fill"
							/>
						</div>
						<button className="flex shrink-0 items-center bg-[#161B22] text-left py-2.5 px-4 gap-2.5 rounded-md border border-solid border-[#30363D]"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/1n1ybans_expires_30_days.png"} 
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
					<div className="flex flex-col self-stretch py-12 mx-20 gap-8">
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
								<span className="text-[#8B949E] text-sm my-[7px] ml-[15px] mr-[11px]" >
									{"Candidate User"}
								</span>
								<span className="text-[#8B949E] text-sm my-[7px] mx-2.5" >
									{"C2C User"}
								</span>
								<span className="text-[#8B949E] text-sm my-[7px] mx-2.5" >
									{"Sub-Account"}
								</span>
								<span className="text-[#8B949E] text-sm my-[7px] mx-2.5" >
									{"Team Leader"}
								</span>
								<div className="flex flex-1 flex-col bg-[#92318D] py-[7px] rounded-md">
									<span className="text-white text-sm font-bold text-center mx-2.5" >
										{"Foundation Team Leader"}
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col self-stretch mx-6 gap-6">
							<div className="flex flex-col items-start self-stretch bg-[#161B22] py-[25px] gap-[17px] rounded-lg border border-solid border-[#30363D]">
								<span className="text-white text-lg font-bold mx-[25px]" >
									{"Level Info / Dashboard"}
								</span>
								<div className="flex flex-col self-stretch mx-[25px] gap-4">
									<div className="flex items-center self-stretch gap-3">
										<div className="flex flex-1 flex-col items-start">
											<span className="text-[#8B949E] text-sm" >
												{"Role"}
											</span>
											<span className="text-white text-base" >
												{"Foundation Team Leader (Max Level)"}
											</span>
										</div>
										<div className="flex flex-1 flex-col items-start">
											<span className="text-[#8B949E] text-sm" >
												{"Commission Rate"}
											</span>
											<span className="text-[#92318D] text-base font-bold" >
												{"40%"}
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
										<div className="flex flex-1 flex-col items-start gap-1">
											<span className="text-[#8B949E] text-sm" >
												{"Current Seat"}
											</span>
											<span className="text-white text-sm" >
												{"#153"}
											</span>
										</div>
									</div>
									<div className="flex items-start self-stretch gap-4">
										<div className="flex flex-1 flex-col items-start bg-[#0D1117] py-4 gap-2 rounded-lg">
											<div className="flex flex-col items-center pb-[1px] ml-4">
												<span className="text-white text-sm font-bold" >
													{"Privileges:"}
												</span>
											</div>
											<div className="flex flex-col items-start self-stretch mx-4 gap-1">
												<span className="text-[#8B949E] text-sm" >
													{"• Earn up to 40% commission"}
												</span>
												<span className="text-[#8B949E] text-sm" >
													{"• Instant Points 100,000"}
												</span>
												<span className="text-[#8B949E] text-sm" >
													{"• Today's Points 4,356"}
												</span>
											</div>
										</div>
										<div className="flex flex-1 justify-between items-center bg-[#0D1117] py-3 rounded-lg">
											<div className="flex flex-col shrink-0 items-start ml-3">
												<span className="text-[#8B949E] text-sm" >
													{"Net Commission Withdrawn"}
												</span>
												<span className="text-[#2DA44E] text-base font-bold" >
													{"$11,200"}
												</span>
											</div>
											<button className="flex flex-col shrink-0 items-start bg-transparent text-left py-[15px] px-2.5 mr-3 rounded-md border border-solid border-[#30363D]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-white text-sm" >
													{"Withdraw"}
												</span>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col self-stretch gap-3">
								<div className="flex flex-col items-start self-stretch gap-3">
									<span className="text-white text-lg font-bold" >
										{"My Commission Summary"}
									</span>
									<div className="flex items-start self-stretch">
										<div className="flex flex-1 flex-col items-start bg-[#161B22] py-6 mr-[13px] rounded-md border border-solid border-[#30363D]">
											<span className="text-[#8B949E] text-sm mb-[7px] mx-6" >
												{"Rate"}
											</span>
											<span className="text-white text-2xl font-bold mb-[3px] mx-6" >
												{"40%"}
											</span>
										</div>
										<div className="flex flex-1 flex-col items-start bg-[#161B22] py-6 mr-[11px] rounded-md border border-solid border-[#30363D]">
											<span className="text-[#8B949E] text-sm mb-[7px] mx-[23px]" >
												{"Direct Referrals"}
											</span>
											<span className="text-white text-2xl font-bold mb-[3px] mx-[23px]" >
												{"2"}
											</span>
										</div>
										<div className="flex flex-1 flex-col items-start bg-[#161B22] py-6 mr-[13px] rounded-md border border-solid border-[#30363D]">
											<span className="text-[#8B949E] text-sm mb-[7px] mx-6" >
												{"Sub-Accounts"}
											</span>
											<span className="text-white text-2xl font-bold mb-[3px] mx-6" >
												{"2"}
											</span>
										</div>
										<div className="flex flex-1 flex-col items-start bg-[#161B22] py-6 mr-3 rounded-md border border-solid border-[#30363D]">
											<span className="text-[#8B949E] text-sm mb-[7px] mx-6" >
												{"Total Net Profit"}
											</span>
											<span className="text-[#2DA44E] text-2xl font-bold mb-[3px] mx-6" >
												{"$15,600"}
											</span>
										</div>
										<div className="flex flex-1 flex-col items-start bg-[#161B22] py-6 mr-3 rounded-md border border-solid border-[#30363D]">
											<span className="text-[#8B949E] text-sm mb-[7px] mx-6" >
												{"Total Earned Points"}
											</span>
											<span className="text-[#2DA44E] text-2xl font-bold mb-[3px] mx-6" >
												{"296.8K"}
											</span>
										</div>
										<div className="flex flex-1 flex-col items-start bg-[#161B22] py-6 rounded-md border border-solid border-[#30363D]">
											<span className="text-[#8B949E] text-sm mb-[7px] mx-6" >
												{"Today Earned Points"}
											</span>
											<span className="text-[#2DA44E] text-2xl font-bold mb-[3px] mx-6" >
												{"$4,356"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex items-start self-stretch gap-3">
									<div className="flex-1 bg-[#161B22] py-[25px] rounded-lg border border-solid border-[#30363D]">
										<div className="flex flex-col items-start self-stretch mb-4 mx-[25px] gap-2">
											<span className="text-white text-lg font-bold" >
												{"My Points"}
											</span>
											<div className="flex flex-col self-stretch gap-4">
												<div className="flex items-start self-stretch gap-3">
													<div className="flex flex-1 items-center">
														<span className="text-[#8B949E] text-sm mr-[13px]" >
															{"Total Earned:"}
														</span>
														<span className="text-white text-sm mr-[85px]" >
															{"296.8K points"}
														</span>
													</div>
													<div className="flex flex-1 items-center">
														<span className="text-[#8B949E] text-sm mr-3.5" >
															{"Today:"}
														</span>
														<span className="text-[#2DA44E] text-sm mr-[75px]" >
															{"4,356 points ($435.6)"}
														</span>
													</div>
												</div>
												<div className="flex items-start self-stretch gap-3">
													<div className="flex flex-1 items-center">
														<span className="text-[#8B949E] text-sm mr-3.5" >
															{"Last 7 Days:"}
														</span>
														<span className="text-white text-sm mr-[39px]" >
															{"30.5K (avg. 4.4K/day)"}
														</span>
													</div>
													<div className="flex flex-1 items-center gap-3.5">
														<span className="text-[#8B949E] text-sm" >
															{"Last 30 Days:"}
														</span>
														<span className="flex-1 text-white text-sm" >
															{"130.7K (avg. 4.4K/day)"}
														</span>
													</div>
												</div>
											</div>
										</div>
										<div className="flex flex-col items-start self-stretch bg-[#0D1117] py-3.5 mb-3 mx-[25px] rounded">
											<span className="text-white text-sm font-bold mb-1 ml-3" >
												{"Active Address Share (20%)"}
											</span>
											<span className="text-[#8B949E] text-xs mb-[3px] ml-3" >
												{"My Active Addresses: 45 / Total: 2,250 (2.0%)"}
											</span>
											<span className="text-[#2DA44E] text-xs ml-3" >
												{"Earned Today: 871 points"}
											</span>
										</div>
										<div className="flex flex-col items-start self-stretch bg-[#0D1117] py-3.5 mx-[25px] rounded">
											<span className="text-white text-sm font-bold mb-1 ml-3" >
												{"Trading Volume Share (80%)"}
											</span>
											<span className="text-[#8B949E] text-xs mb-[3px] ml-3" >
												{"My Volume: $850K / Total: $12.8M (6.67%)"}
											</span>
											<span className="text-[#2DA44E] text-xs ml-3" >
												{"Earned Today: 3485 points"}
											</span>
										</div>
									</div>
									<div className="flex flex-1 flex-col items-start bg-[#161B22] py-[25px] rounded-lg border border-solid border-[#30363D]">
										<span className="text-white text-lg font-bold mb-[17px] mx-[25px]" >
											{"Points Rewards Rules"}
										</span>
										<div className="flex flex-col items-start self-stretch bg-[#0D1117] py-3 mb-4 mx-[25px] gap-1 rounded-lg">
											<span className="text-[#8B949E] text-sm ml-3" >
												{"Instant Reward"}
											</span>
											<span className="text-white text-base font-bold ml-3" >
												{"100,000 points ($10K)"}
											</span>
										</div>
										<div className="flex flex-col items-start self-stretch bg-[#0D1117] py-4 mb-4 mx-[25px] gap-2 rounded-lg">
											<span className="text-[#8B949E] text-sm ml-4" >
												{"Daily Pool"}
											</span>
											<span className="text-white text-base font-bold ml-4" >
												{"4% shared"}
											</span>
											<div className="flex flex-col items-start self-stretch mx-4 gap-1">
												<div className="flex flex-col items-center pb-[1px]">
													<span className="text-white text-sm" >
														{"• 20% based on active addresses"}
													</span>
												</div>
												<div className="flex flex-col items-center pb-[1px]">
													<span className="text-white text-sm" >
														{"• 80% based on trading volume"}
													</span>
												</div>
												<div className="flex flex-col items-center pb-[1px]">
													<span className="text-white text-sm" >
														{"• Shared with Foundation Leaders"}
													</span>
												</div>
											</div>
										</div>
										<div className="flex flex-col items-start self-stretch mx-[25px] gap-2">
											<span className="text-[#8B949E] text-sm" >
												{"Point Value:"}
											</span>
											<span className="text-white text-sm" >
												{"$0.10 each"}
											</span>
											<span className="text-[#92318D] text-sm" >
												{"Note: Standard Leaders share daily 4% pool but no instant rewards. Upgrade to Foundation Leader → unlock 100K points instantly."}
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch bg-[#161B22] py-[17px] gap-[17px] rounded-md border border-solid border-[#30363D]">
								<span className="text-white text-lg font-bold mx-[17px]" >
									{"Invitation Tools"}
								</span>
								<div className="flex flex-col self-stretch mx-[17px] gap-4">
									<div className="flex items-center self-stretch gap-2">
										<div className="bg-[#2DA44E] w-3 h-3 rounded-[9999px]">
										</div>
										<span className="text-[#2DA44E] text-base font-bold" >
											{"Status: Activated"}
										</span>
									</div>
									<div className="flex flex-col items-start self-stretch gap-2">
										<div className="flex flex-col items-center pb-[1px]">
											<span className="text-[#8B949E] text-sm" >
												{"Your Referral Link:"}
											</span>
										</div>
										<div className="flex items-start self-stretch gap-2">
											<input
												placeholder={"https://riverbit.com/ref/sub_0xdef456"}
												value={input1}
												onChange={(event)=>onChangeInput1(event.target.value)}
												className="flex-1 self-stretch text-white bg-[#0D1117] text-sm py-3.5 pl-3 pr-6 rounded-md border border-solid border-[#30363D]"
											/>
											<button className="flex flex-col shrink-0 items-start bg-[#92318D] text-left py-[15px] px-2.5 rounded-md border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-white text-sm" >
													{"Copy"}
												</span>
											</button>
											<button className="flex flex-col shrink-0 items-start bg-transparent text-left py-[15px] px-2.5 rounded-md border border-solid border-[#30363D]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-white text-sm" >
													{"Generate QR"}
												</span>
											</button>
											<button className="flex flex-col shrink-0 items-start bg-[#92318D] text-left py-[15px] px-[11px] rounded-md border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-white text-sm" >
													{"Share on Social"}
												</span>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="flex items-center self-stretch gap-3">
								<div className="flex flex-col shrink-0 items-start bg-[#161B22] py-[17px] rounded-md border border-solid border-[#30363D]">
									<span className="text-white text-lg font-bold mt-[3px] mb-[19px] ml-[17px] mr-[289px]" >
										{"Team Stats"}
									</span>
									<div className="flex flex-col items-start mx-[17px] gap-3">
										<div className="flex items-center pr-[3px]">
											<span className="text-[#8B949E] text-base mr-[267px]" >
												{"Members:"}
											</span>
											<span className="text-white text-base font-bold" >
												{"120"}
											</span>
										</div>
										<div className="flex items-center pr-[3px]">
											<span className="text-[#8B949E] text-base mr-[153px]" >
												{"Team Trading Volume:"}
											</span>
											<span className="text-white text-base font-bold" >
												{"$6.8M"}
											</span>
										</div>
										<div className="flex items-center pr-[3px]">
											<span className="text-[#8B949E] text-base mr-36" >
												{"Active Users (Last 3 Days):"}
											</span>
											<span className="text-white text-base font-bold" >
												{"25"}
											</span>
										</div>
										<div className="flex items-center pr-0.5">
											<span className="text-[#8B949E] text-base mr-[111px]" >
												{"Total Commission Earned:"}
											</span>
											<span className="text-[#2DA44E] text-base font-bold" >
												{"$15,600"}
											</span>
										</div>
										<div className="flex items-center pr-0.5">
											<span className="text-[#8B949E] text-base mr-[219px]" >
												{"Points Value:"}
											</span>
											<span className="text-[#2DA44E] text-base font-bold" >
												{"$29.7K"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-1 flex-col bg-[#161B22] py-[17px] gap-4 rounded-md border border-solid border-[#30363D]">
									<div className="flex items-center self-stretch mx-[17px]">
										<span className="flex-1 text-white text-lg font-bold" >
											{"Team Management"}
										</span>
										<div className="flex shrink-0 items-start gap-[18px]">
											<button className="flex flex-col shrink-0 items-start bg-transparent text-left p-[11px] rounded-md border border-solid border-[#30363D]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-white text-sm" >
													{"Export CSV"}
												</span>
											</button>
											<button className="flex flex-col shrink-0 items-start bg-[#92318D] text-left py-[11px] px-2.5 rounded-md border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-white text-sm" >
													{"Set Commission Rates"}
												</span>
											</button>
										</div>
									</div>
									<div className="self-stretch mx-[17px]">
										<div className="flex items-start self-stretch">
											<span className="text-white text-sm my-[15px] mx-2" >
												{"Direct Referrals"}
											</span>
											<span className="text-[#8B949E] text-sm my-[15px] mx-2" >
												{"Sub-Accounts"}
											</span>
											<span className="text-[#8B949E] text-sm my-[15px] mx-2" >
												{"All Members"}
											</span>
										</div>
										<div className="self-stretch">
											<div className="flex items-start self-stretch">
												<span className="text-[#8B949E] text-sm font-bold my-3 ml-4 mr-[69px]" >
													{"Address"}
												</span>
												<span className="text-[#8B949E] text-sm font-bold my-3 ml-4 mr-[75px]" >
													{"Volume"}
												</span>
												<span className="text-[#8B949E] text-sm font-bold my-3 mx-4" >
													{"Commission Rate"}
												</span>
												<span className="text-[#8B949E] text-sm font-bold my-3 ml-4 mr-8" >
													{"Your Earnings"}
												</span>
												<span className="text-[#8B949E] text-sm font-bold my-3 ml-4" >
													{"Action"}
												</span>
											</div>
											<div className="flex items-center self-stretch">
												<span className="text-white text-sm my-[15px] ml-4 mr-[45px]" >
													{"0x555...666"}
												</span>
												<span className="text-white text-sm my-[15px] ml-4 mr-[70px]" >
													{"$85,000"}
												</span>
												<span className="text-white text-sm my-[15px] ml-4 mr-24" >
													{"40%"}
												</span>
												<span className="text-[#2DA44E] text-sm font-bold my-[15px] ml-4 mr-[75px]" >
													{"$3,400"}
												</span>
												<div className="flex shrink-0 items-start py-[13px] px-4 gap-2.5">
													<button className="flex flex-col shrink-0 items-start bg-[#92318D] text-left py-[11px] px-2.5 rounded-md border-0"
														onClick={()=>alert("Pressed!")}>
														<span className="text-white text-sm" >
															{"Set Rates"}
														</span>
													</button>
													<button className="flex flex-col shrink-0 items-start bg-transparent text-left py-[11px] px-2.5 rounded-md border border-solid border-[#30363D]"
														onClick={()=>alert("Pressed!")}>
														<span className="text-white text-sm" >
															{"Set Sub-acc"}
														</span>
													</button>
												</div>
											</div>
										</div>
									</div>
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