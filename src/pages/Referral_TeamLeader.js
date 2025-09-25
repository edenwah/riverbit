import {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-white h-[2044px] rounded-lg border-2 border-solid border-[#CED4DA]">
				<div className="flex justify-between items-start self-stretch bg-[#161B22] py-3.5 px-4">
					<div className="flex shrink-0 items-start gap-8">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/sgshex50_expires_30_days.png"} 
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
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/bmxfy39i_expires_30_days.png"} 
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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/0c0hypkx_expires_30_days.png"} 
								className="w-5 h-5 rounded-md object-fill"
							/>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/caeixkpz_expires_30_days.png"} 
								className="w-3 h-[15px] rounded-md object-fill"
							/>
						</div>
						<button className="flex shrink-0 items-center bg-[#161B22] text-left py-2.5 px-4 gap-2.5 rounded-md border border-solid border-[#30363D]"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/wzmsvh4o_expires_30_days.png"} 
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
								<button className="flex flex-col shrink-0 items-start bg-[#92318D] text-left py-[7px] px-2.5 rounded-md border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-white text-sm font-bold" >
										{"Team Leader"}
									</span>
								</button>
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
												{"Team Leader"}
											</span>
										</div>
										<div className="flex flex-1 flex-col items-start">
											<span className="text-[#8B949E] text-sm" >
												{"Commission Rate"}
											</span>
											<span className="text-[#92318D] text-base font-bold" >
												{"35%"}
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
												{"You can set a commission rebate rate (≤35%) for your sub-accounts. The difference in rates will be your net profit! Build and manage your team with ease while earning more."}
											</span>
										</div>
										<div className="flex flex-1 justify-between items-center bg-[#0D1117] py-3 rounded-lg">
											<div className="flex flex-col shrink-0 items-start ml-3">
												<span className="text-[#8B949E] text-sm" >
													{"Net Commission Withdrawn"}
												</span>
												<span className="text-[#2DA44E] text-base font-bold" >
													{"$6,200"}
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
							<div className="flex items-start self-stretch gap-3">
								<div className="flex flex-1 flex-col bg-[#161B22] py-[25px] gap-4 rounded-lg border border-solid border-[#30363D]">
									<div className="flex flex-col items-start self-stretch mx-[25px] gap-2">
										<span className="text-white text-lg font-bold" >
											{"Remain Progress to Foundation Leader"}
										</span>
										<span className="text-[#8B949E] text-sm" >
											{"Remaining Seats 847 / 1000"}
										</span>
									</div>
									<div className="flex flex-col self-stretch mx-[25px] gap-3">
										<div className="flex flex-col self-stretch gap-1">
											<div className="flex items-center self-stretch">
												<span className="flex-1 text-[#8B949E] text-sm" >
													{"Invited Users"}
												</span>
												<span className="text-white text-sm" >
													{"85 / 100"}
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
													{"$3.2M / $5M"}
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
													{"3-Day Active Users"}
												</span>
												<span className="text-[#92318D] text-sm" >
													{"21 / 20"}
												</span>
											</div>
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
										<div className="flex flex-col items-start self-stretch mb-[9px] mx-4">
											<span className="text-white text-sm mt-0.5 mb-1.5" >
												{"• Invite 100+ users"}
											</span>
											<span className="text-white text-sm mt-0.5 mb-1.5" >
												{"• Team trading volume ≥ $5M"}
											</span>
											<span className="text-white text-sm my-0.5" >
												{"• 20+ active users for 3 consecutive days"}
											</span>
										</div>
										<span className="text-[#8B949E] text-sm mb-[1px] mx-4" >
											{"Once all conditions met, you can apply for Foundation Leader!"}
										</span>
									</div>
									<div className="flex items-center self-stretch bg-[#0D1117] py-3 pl-3 mx-[25px] gap-2 rounded-lg">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/k27b73mc_expires_30_days.png"} 
											className="w-3 h-6 object-fill"
										/>
										<div className="flex flex-col shrink-0 items-center">
											<span className="text-[#9D9DAF] text-xs font-bold" >
												{"Upgrade unlocks 100K points instantly"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-1 flex-col items-start bg-[#161B22] py-[17px] gap-[17px] rounded-md border border-solid border-[#30363D]">
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
								</div>
							</div>
							<div className="flex flex-col self-stretch gap-3">
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
												{"35%"}
											</span>
										</div>
										<div className="flex flex-1 flex-col items-start bg-[#161B22] py-6 rounded-md border border-solid border-[#30363D]">
											<span className="text-[#8B949E] text-sm mb-[7px] mx-6" >
												{"Direct Referrals"}
											</span>
											<span className="text-white text-2xl font-bold mb-[3px] mx-6" >
												{"2"}
											</span>
										</div>
										<div className="flex flex-1 flex-col items-start bg-[#161B22] py-6 rounded-md border border-solid border-[#30363D]">
											<span className="text-[#8B949E] text-sm mb-[7px] mx-6" >
												{"Sub-Accounts"}
											</span>
											<span className="text-white text-2xl font-bold mb-[3px] mx-6" >
												{"2"}
											</span>
										</div>
										<div className="flex flex-1 flex-col items-start bg-[#161B22] py-6 rounded-md border border-solid border-[#30363D]">
											<span className="text-[#8B949E] text-sm mb-[7px] mx-6" >
												{"Total Net Profit"}
											</span>
											<span className="text-[#2DA44E] text-2xl font-bold mb-[3px] mx-6" >
												{"$8,750"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex items-start self-stretch gap-3">
									<div className="flex flex-1 flex-col items-start bg-[#161B22] py-[25px] rounded-lg border border-solid border-[#30363D]">
										<span className="text-white text-lg font-bold mb-2 ml-[25px]" >
											{"My Points"}
										</span>
										<div className="flex items-center mb-4 ml-[25px]">
											<div className="flex shrink-0 items-start py-0.5 mr-4 gap-2">
												<span className="text-[#8B949E] text-sm" >
													{"Total Earned:"}
												</span>
												<span className="text-white text-sm" >
													{"54.0K"}
												</span>
											</div>
											<span className="text-[#8B949E] text-sm mr-2.5" >
												{"Today:"}
											</span>
											<span className="text-[#2DA44E] text-sm" >
												{"900 points ($90)"}
											</span>
										</div>
										<div className="flex items-center self-stretch mb-4 mx-[25px]">
											<div className="flex flex-1 items-start py-0.5 mr-3">
												<span className="text-[#8B949E] text-sm mr-[9px]" >
													{"Last 7 Days:"}
												</span>
												<span className="text-white text-sm mr-[93px]" >
													{"6.3K (avg. 900/day)"}
												</span>
											</div>
											<span className="text-[#8B949E] text-sm mr-[7px]" >
												{"Last 30 Days:"}
											</span>
											<span className="text-white text-sm" >
												{"27.0K (avg. 900/day)"}
											</span>
										</div>
										<div className="flex flex-col items-start self-stretch bg-[#0D1117] py-3.5 mb-3 mx-[25px] rounded">
											<span className="text-white text-sm font-bold mb-1 ml-3" >
												{"Active Address Share (20%)"}
											</span>
											<span className="text-[#8B949E] text-xs mb-[3px] ml-3" >
												{"My Active Addresses: 18 / Total: 240 (7.5%)"}
											</span>
											<span className="text-[#2DA44E] text-xs ml-3" >
												{"Earned Today: 300 points"}
											</span>
										</div>
										<div className="flex flex-col items-start self-stretch bg-[#0D1117] py-3.5 mx-[25px] rounded">
											<span className="text-white text-sm font-bold mb-1 ml-3" >
												{"Trading Volume Share (80%)"}
											</span>
											<span className="text-[#8B949E] text-xs mb-[3px] ml-3" >
												{"My Volume: $480K / Total: $12.8M (3.75%)"}
											</span>
											<span className="text-[#2DA44E] text-xs ml-3" >
												{"Earned Today: 600 points"}
											</span>
										</div>
									</div>
									<div className="flex flex-1 flex-col items-start bg-[#161B22] py-[25px] rounded-lg border border-solid border-[#30363D]">
										<span className="text-white text-lg font-bold mb-[17px] mx-[25px]" >
											{"Points Rewards Rules"}
										</span>
										<div className="flex flex-col items-start self-stretch bg-[#0D1117] py-4 mb-4 mx-[25px] gap-2 rounded-lg">
											<span className="text-[#8B949E] text-sm ml-4" >
												{"Daily Points Pool: 4% shared with Team Leaders"}
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
							<div className="flex items-start self-stretch gap-3">
								<div className="flex flex-col shrink-0 items-start bg-[#161B22] py-[17px] rounded-md border border-solid border-[#30363D]">
									<span className="text-white text-lg font-bold mt-[3px] mb-[19px] ml-[17px] mr-[289px]" >
										{"Team Stats"}
									</span>
									<div className="flex flex-col items-start mx-[17px] gap-3">
										<div className="flex items-center pr-[3px]">
											<span className="text-[#8B949E] text-base mr-[275px]" >
												{"Members:"}
											</span>
											<span className="text-white text-base font-bold" >
												{"85"}
											</span>
										</div>
										<div className="flex items-center pr-[3px]">
											<span className="text-[#8B949E] text-base mr-[153px]" >
												{"Team Trading Volume:"}
											</span>
											<span className="text-white text-base font-bold" >
												{"$3.2M"}
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
											<span className="text-[#8B949E] text-base mr-[120px]" >
												{"Total Commission Earned:"}
											</span>
											<span className="text-[#2DA44E] text-base font-bold" >
												{"$8,750"}
											</span>
										</div>
										<div className="flex items-center pr-0.5">
											<span className="text-[#8B949E] text-base mr-[227px]" >
												{"Points Value:"}
											</span>
											<span className="text-[#2DA44E] text-base font-bold" >
												{"$5.4K"}
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
												<span className="text-white text-sm my-[15px] ml-4 mr-[52px]" >
													{"0xdef…789"}
												</span>
												<span className="text-white text-sm my-[15px] ml-4 mr-[69px]" >
													{"$45,000"}
												</span>
												<span className="text-white text-sm my-[15px] ml-4 mr-[97px]" >
													{"35%"}
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
											<div className="flex items-center self-stretch">
												<span className="text-white text-sm my-[15px] ml-4 mr-[47px]" >
													{"0x456…def"}
												</span>
												<span className="text-white text-sm my-[15px] ml-4 mr-[69px]" >
													{"$32,000"}
												</span>
												<span className="text-white text-sm my-[15px] ml-4 mr-[97px]" >
													{"35%"}
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
									<div className="flex items-center self-stretch bg-[#0D1117] p-4 mx-[17px] gap-2 rounded-lg">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/lago6j2e_expires_30_days.png"} 
											className="w-3 h-6 rounded-lg object-fill"
										/>
										<input
											placeholder={"You can set a commission rate of up to 35% for sub-accounts, and the difference will be your earnings."}
											value={input2}
											onChange={(event)=>onChangeInput2(event.target.value)}
											className="flex-1 self-stretch text-[#8B949E] bg-transparent text-xs py-[5px] border-0"
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