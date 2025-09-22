import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-white h-[1556px] rounded-lg border-2 border-solid border-[#CED4DA]">
				<div className="flex justify-between items-start self-stretch bg-[#161B22] py-3.5 px-4">
					<div className="flex shrink-0 items-start gap-8">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/98dularf_expires_30_days.png"} 
							className="w-[118px] h-10 object-fill"
						/>
						<div className="flex shrink-0 items-start gap-[30px]">
							<div className="flex flex-col shrink-0 items-center py-[15px] rounded-md">
								<span className="text-[#8B949E] text-sm" >
									{"Trading"}
								</span>
							</div>
							<div className="flex flex-col shrink-0 items-center py-[11px] rounded-md">
								<span className="text-[#8B949E] text-sm" >
									{"RiverPool"}
								</span>
							</div>
							<div className="flex flex-col shrink-0 items-center py-[11px] rounded-md">
								<span className="text-[#8B949E] text-sm" >
									{"Earn"}
								</span>
							</div>
							<button className="flex flex-col shrink-0 items-start bg-[#30363D80] text-left py-[11px] px-3 rounded-md border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-white text-sm" >
									{"Referral"}
								</span>
							</button>
							<div className="flex flex-col shrink-0 items-center py-[11px] rounded-md">
								<span className="text-[#8B949E] text-sm" >
									{"Assets"}
								</span>
							</div>
							<div className="flex shrink-0 items-center py-[11px] gap-[13px] rounded-md">
								<span className="text-[#8B949E] text-sm" >
									{"More"}
								</span>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/z58qmhhl_expires_30_days.png"} 
									className="w-3 h-[15px] rounded-md object-fill"
								/>
							</div>
						</div>
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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/0h1xzvjw_expires_30_days.png"} 
								className="w-5 h-5 rounded-md object-fill"
							/>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/kqv6xdo3_expires_30_days.png"} 
								className="w-3 h-[15px] rounded-md object-fill"
							/>
						</div>
						<button className="flex shrink-0 items-center bg-[#161B22] text-left py-2.5 px-4 gap-2.5 rounded-md border border-solid border-[#30363D]"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/7mvu1f9w_expires_30_days.png"} 
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
								<button className="flex flex-col shrink-0 items-start bg-[#92318D] text-left py-[7px] px-2.5 rounded-md border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-white text-sm font-bold" >
										{"Sub-Account"}
									</span>
								</button>
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
								<div className="flex flex-col self-stretch mx-[25px] gap-4">
									<div className="flex items-center self-stretch gap-3">
										<div className="flex flex-1 flex-col items-start">
											<span className="text-[#8B949E] text-sm" >
												{"Role"}
											</span>
											<span className="text-white text-base" >
												{"Sub-Account"}
											</span>
										</div>
										<div className="flex flex-1 flex-col items-start">
											<span className="text-[#8B949E] text-sm" >
												{"Commission Rate"}
											</span>
											<span className="text-[#92318D] text-base font-bold" >
												{"15%"}
											</span>
										</div>
										<div className="flex flex-1 flex-col items-start">
											<span className="text-gray-400 text-sm" >
												{"Max Rate You Can Assign:"}
											</span>
											<span className="text-[#92318D] text-base font-bold" >
												{"12%"}
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
									<div className="flex items-start self-stretch gap-4">
										<div className="flex flex-1 flex-col items-start bg-[#0D1117] py-4 rounded-lg">
											<div className="flex flex-col items-center pb-[1px] mb-2 ml-4">
												<span className="text-white text-sm font-bold" >
													{"Privileges:"}
												</span>
											</div>
											<span className="text-[#8B949E] text-sm mb-[1px] mx-4" >
												{"After upgrading to a Sub-Account, you can invite trading users and set their commission rebate rate (up to 12%). The difference becomes your net profit!"}
											</span>
										</div>
										<div className="flex flex-1 justify-between items-center bg-[#0D1117] py-3 rounded-lg">
											<div className="flex flex-col shrink-0 items-start ml-3">
												<span className="text-[#8B949E] text-sm" >
													{"Net Commission Withdrawn"}
												</span>
												<span className="text-[#2DA44E] text-base font-bold" >
													{"$2,850"}
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
							<div className="flex items-center self-stretch gap-3">
								<div className="flex flex-1 flex-col items-start bg-[#161B22] py-[25px] rounded-lg border border-solid border-[#30363D]">
									<span className="text-white text-lg font-bold mb-[17px] mx-[25px]" >
										{"Remain Progress to Team Leader"}
									</span>
									<div className="flex flex-col self-stretch mb-4 mx-[25px] gap-3">
										<div className="flex flex-col self-stretch gap-1">
											<div className="flex items-center self-stretch">
												<span className="flex-1 text-[#8B949E] text-sm" >
													{"Invited Users"}
												</span>
												<span className="text-white text-sm" >
													{"15 / 20"}
												</span>
											</div>
											<div className="self-stretch bg-[#30363D] rounded-[9999px]">
												<div className="self-stretch bg-[#92318D] h-2 rounded-[9999px]">
												</div>
											</div>
										</div>
										<div className="flex flex-col self-stretch gap-1">
											<div className="flex items-center self-stretch">
												<span className="flex-1 text-[#8B949E] text-sm" >
													{"Team Volume"}
												</span>
												<span className="text-white text-sm" >
													{"$680.0K / 1.0M"}
												</span>
											</div>
											<div className="self-stretch bg-[#30363D] rounded-[9999px]">
												<div className="self-stretch bg-[#92318D] h-2 rounded-[9999px]">
												</div>
											</div>
										</div>
									</div>
									<div className="flex flex-col items-start self-stretch bg-[#0D1117] py-4 mx-[25px] rounded-lg">
										<div className="flex flex-col items-center pb-[1px] mb-[9px] ml-4">
											<span className="text-[#8B949E] text-sm" >
												{"Upgrade Requirements:"}
											</span>
										</div>
										<div className="flex flex-col items-start self-stretch mb-[9px] mx-4">
											<span className="text-white text-sm mt-0.5 mb-1.5" >
												{"• Invite 20 users"}
											</span>
											<span className="text-white text-sm my-0.5" >
												{"• Team trading volume ≥ $1,000,000 USD."}
											</span>
										</div>
										<span className="text-[#8B949E] text-sm mb-[1px] mx-4" >
											{"Once all conditions met, you can apply for Team Leader!"}
										</span>
									</div>
								</div>
								<div className="flex flex-1 flex-col items-start bg-[#161B22] py-[17px] rounded-md border border-solid border-[#30363D]">
									<span className="text-white text-lg font-bold mb-[17px] mx-[17px]" >
										{"Invitation Tools"}
									</span>
									<div className="flex flex-col self-stretch mb-4 mx-[17px] gap-4">
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
											</div>
											<div className="flex items-start self-stretch gap-2">
												<button className="flex flex-1 flex-col items-center bg-transparent text-left py-[15px] rounded-md border border-solid border-[#30363D]"
													onClick={()=>alert("Pressed!")}>
													<span className="text-white text-sm" >
														{"Generate QR"}
													</span>
												</button>
												<div className="flex flex-1 flex-col bg-[#92318D] py-[15px] rounded-md">
													<span className="text-white text-sm text-center mx-[90px]" >
														{"Share on Social"}
													</span>
												</div>
											</div>
										</div>
									</div>
									<div className="flex items-center self-stretch bg-[#0D1117] p-4 mx-[17px] gap-2 rounded-lg">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/i62lhoyb_expires_30_days.png"} 
											className="w-3 h-6 rounded-lg object-fill"
										/>
										<input
											placeholder={"You can set a different commission rate for each invited user, up to 12%."}
											value={input2}
											onChange={(event)=>onChangeInput2(event.target.value)}
											className="flex-1 self-stretch text-[#8B949E] bg-transparent text-xs py-[5px] border-0"
										/>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch gap-3">
								<span className="text-white text-lg font-bold" >
									{"My Commission Summary"}
								</span>
								<div className="flex items-start self-stretch gap-3">
									<div className="flex flex-1 flex-col items-start bg-[#161B22] py-6 rounded-md border border-solid border-[#30363D]">
										<span className="text-[#8B949E] text-sm mb-[7px] mx-6" >
											{"Rate"}
										</span>
										<span className="text-white text-2xl font-bold mb-[3px] mx-6" >
											{"15%"}
										</span>
									</div>
									<div className="flex flex-1 flex-col items-start bg-[#161B22] py-6 rounded-md border border-solid border-[#30363D]">
										<span className="text-[#8B949E] text-sm mb-[7px] mx-6" >
											{"Total Net Profit"}
										</span>
										<span className="text-[#2DA44E] text-2xl font-bold mb-[3px] mx-6" >
											{"$2,850"}
										</span>
									</div>
								</div>
							</div>
							<div className="flex items-start self-stretch gap-3">
								<div className="flex flex-col shrink-0 items-start bg-[#161B22] py-[17px] rounded-md border border-solid border-[#30363D]">
									<span className="text-white text-lg font-bold mt-[3px] mb-[19px] ml-[17px] mr-[289px]" >
										{"Team Stats"}
									</span>
									<div className="flex flex-col items-start mx-[17px] gap-3">
										<div className="flex items-center pr-[3px]">
											<span className="text-[#8B949E] text-base mr-[285px]" >
												{"Members:"}
											</span>
											<span className="text-white text-base font-bold" >
												{"5"}
											</span>
										</div>
										<div className="flex items-center pr-0.5">
											<span className="text-[#8B949E] text-base mr-[152px]" >
												{"Team Trading Volume:"}
											</span>
											<span className="text-white text-base font-bold" >
												{"$100K"}
											</span>
										</div>
										<div className="flex items-center pr-[3px]">
											<span className="text-[#8B949E] text-base mr-[154px]" >
												{"Active Users (Last 3 Days):"}
											</span>
											<span className="text-white text-base font-bold" >
												{"5"}
											</span>
										</div>
										<div className="flex items-center pr-0.5">
											<span className="text-[#8B949E] text-base mr-[119px]" >
												{"Total Commission Earned:"}
											</span>
											<span className="text-[#2DA44E] text-base font-bold" >
												{"$2,850"}
											</span>
										</div>
										<div className="flex items-center pr-0.5">
											<span className="text-[#8B949E] text-base mr-[218px]" >
												{"Points Value:"}
											</span>
											<span className="text-[#2DA44E] text-base font-bold" >
												{"$28.5K"}
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
											<span className="text-[#8B949E] text-sm font-bold my-3 ml-4" >
												{"Address"}
											</span>
											<span className="text-[#8B949E] text-sm font-bold my-3 ml-4 mr-[1px]" >
												{"Volume"}
											</span>
											<span className="flex-1 text-[#8B949E] text-sm font-bold my-3 ml-4 mr-[17px]" >
												{"Commission Rate"}
											</span>
											<span className="text-[#8B949E] text-sm font-bold my-3 ml-4 mr-[1px]" >
												{"Your Earnings"}
											</span>
											<span className="text-[#8B949E] text-sm font-bold my-3 ml-4" >
												{"Action"}
											</span>
										</div>
										<div className="flex items-center self-stretch">
											<span className="text-white text-sm my-[15px] ml-4" >
												{"0x123...789"}
											</span>
											<span className="text-white text-sm my-[15px] ml-4 mr-[1px]" >
												{"$45,000"}
											</span>
											<span className="text-white text-sm my-[15px] ml-4 mr-[1px]" >
												{"8%"}
											</span>
											<span className="text-[#2DA44E] text-sm font-bold my-[15px] ml-4 mr-[1px]" >
												{"$360"}
											</span>
											<button className="flex flex-col shrink-0 items-start bg-[#92318D] text-left py-[11px] px-2.5 my-[13px] ml-4 rounded-md border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-white text-sm" >
													{"Set Rates"}
												</span>
											</button>
										</div>
										<div className="flex items-center self-stretch">
											<span className="text-white text-sm my-[15px] ml-4" >
												{"0x456...abc"}
											</span>
											<span className="text-white text-sm my-[15px] ml-4 mr-[1px]" >
												{"$32,000"}
											</span>
											<span className="text-white text-sm my-[15px] ml-4 mr-[1px]" >
												{"10%"}
											</span>
											<span className="text-[#2DA44E] text-sm font-bold my-[15px] ml-4 mr-[1px]" >
												{"$320"}
											</span>
											<button className="flex flex-col shrink-0 items-start bg-[#92318D] text-left py-[11px] px-2.5 my-[13px] ml-4 rounded-md border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-white text-sm" >
													{"Set Rates"}
												</span>
											</button>
										</div>
										<div className="flex items-center self-stretch">
											<span className="text-white text-sm my-[15px] ml-4" >
												{"0x789...def"}
											</span>
											<span className="text-white text-sm my-[15px] ml-4 mr-[1px]" >
												{"$28,000"}
											</span>
											<span className="text-white text-sm my-[15px] ml-4 mr-[1px]" >
												{"12%"}
											</span>
											<span className="text-[#2DA44E] text-sm font-bold my-[15px] ml-4 mr-[1px]" >
												{"$336"}
											</span>
											<button className="flex flex-col shrink-0 items-start bg-[#92318D] text-left py-[11px] px-2.5 my-[13px] ml-4 rounded-md border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-white text-sm" >
													{"Set Rates"}
												</span>
											</button>
										</div>
									</div>
									<div className="flex items-center self-stretch bg-[#0D1117] p-4 mx-[17px] gap-2 rounded-lg">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/iwky9dqz_expires_30_days.png"} 
											className="w-3 h-6 rounded-lg object-fill"
										/>
										<input
											placeholder={"You can set a commission rate for invited users (≤12%), and the difference will be your net earnings. For example, with a base commission of 15%, if you set 12% for the user, you earn 3% net profit. Sub-accounts can flexibly set commission rates, helping you achieve the best balance of earnings."}
											value={input3}
											onChange={(event)=>onChangeInput3(event.target.value)}
											className="flex-1 self-stretch text-[#8B949E] bg-transparent text-xs border-0"
										/>
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