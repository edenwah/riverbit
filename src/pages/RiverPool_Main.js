import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#0D1117] h-[1293px] rounded-lg border-2 border-solid border-[#CED4DA]">
				<div className="flex justify-between items-start self-stretch bg-[#161B22] py-3.5 px-4">
					<div className="flex shrink-0 items-start gap-8">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/z040546q_expires_30_days.png"} 
							className="w-[118px] h-10 object-fill"
						/>
						<div className="flex shrink-0 items-start">
							<div className="flex flex-col shrink-0 items-center py-[15px] mr-[30px] rounded-md">
								<span className="text-[#8B949E] text-sm" >
									{"Trading"}
								</span>
							</div>
							<button className="flex flex-col shrink-0 items-start bg-[#30363D80] text-left py-[11px] px-3 mr-[30px] rounded-md border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-white text-sm" >
									{"RiverPool"}
								</span>
							</button>
							<div className="flex flex-col shrink-0 items-center py-[11px] mr-[30px] rounded-md">
								<span className="text-[#8B949E] text-sm" >
									{"Earn"}
								</span>
							</div>
							<span className="text-[#8B949E] text-sm my-3.5 ml-[1px] mr-[31px]" >
								{"Referral"}
							</span>
							<div className="flex flex-col shrink-0 items-center py-[11px] mr-[30px] rounded-md">
								<span className="text-[#8B949E] text-sm" >
									{"Assets"}
								</span>
							</div>
							<div className="flex shrink-0 items-center py-[11px] gap-[13px] rounded-md">
								<span className="text-[#8B949E] text-sm" >
									{"More"}
								</span>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/8wncjr7w_expires_30_days.png"} 
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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/4pi68cjg_expires_30_days.png"} 
								className="w-5 h-5 rounded-md object-fill"
							/>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/38cazyqu_expires_30_days.png"} 
								className="w-3 h-[15px] rounded-md object-fill"
							/>
						</div>
						<button className="flex shrink-0 items-center bg-[#161B22] text-left py-2.5 px-4 gap-2.5 rounded-md border border-solid border-[#30363D]"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/kotsrk0v_expires_30_days.png"} 
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
				<div className="flex flex-col self-stretch bg-[#0D1117] gap-2.5">
					<div className="flex flex-col self-stretch py-12 mx-20 gap-8">
						<div className="flex items-start self-stretch mx-6">
							<span className="text-[#8B949E] text-sm my-[15px] mx-2" >
								{"Foundation"}
							</span>
							<span className="text-white text-sm my-[15px] mx-2" >
								{"Main"}
							</span>
							<span className="text-[#8B949E] text-sm font-bold my-[15px] mx-2" >
								{"Insurance"}
							</span>
						</div>
						<div className="flex flex-col self-stretch mx-6 gap-3">
							<div className="flex flex-col self-stretch gap-7">
								<div className="flex justify-between items-center self-stretch">
									<div className="flex flex-col shrink-0 items-start gap-1">
										<span className="text-white text-3xl font-bold" >
											{"Main Pool"}
										</span>
										<div className="flex items-center gap-2.5">
											<span className="text-[#8B949E] text-base" >
												{"0x•••abcd"}
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/maclr3ba_expires_30_days.png"} 
												className="w-3.5 h-5 object-fill"
											/>
										</div>
									</div>
									<div className="flex shrink-0 items-start gap-[17px]">
										<button className="flex flex-col shrink-0 items-start bg-transparent text-left py-2.5 px-[18px] rounded-md border border-solid border-[#30363D]"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#E6EDF3] text-base font-bold" >
												{"Withdraw"}
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-[#92318D] text-left py-2.5 px-[18px] rounded-md border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-white text-base font-bold" >
												{"Deposit"}
											</span>
										</button>
									</div>
								</div>
								<div className="flex flex-col self-stretch gap-3">
									<div className="flex items-start self-stretch gap-3">
										<div className="flex flex-1 flex-col items-start bg-[#161B22] py-6 rounded-md border border-solid border-[#30363D]">
											<span className="text-[#8B949E] text-sm mb-[7px] mx-6" >
												{"Total Value Locked (TVL)"}
											</span>
											<span className="text-white text-2xl font-bold mb-[3px] mx-6" >
												{"$120.8M"}
											</span>
										</div>
										<div className="flex flex-1 flex-col items-start bg-[#161B22] py-6 rounded-md border border-solid border-[#30363D]">
											<span className="text-[#8B949E] text-sm mb-[7px] mx-6" >
												{"30-Day Annualised Yield"}
											</span>
											<span className="text-[#2DA44E] text-2xl font-bold mb-[3px] mx-6" >
												{"13%"}
											</span>
										</div>
										<div className="flex flex-1 flex-col items-start bg-[#161B22] py-6 rounded-md border border-solid border-[#30363D]">
											<span className="text-[#8B949E] text-sm mb-[7px] mx-6" >
												{"Your Deposit"}
											</span>
											<span className="text-white text-2xl font-bold mb-[3px] mx-6" >
												{"$5,000"}
											</span>
										</div>
										<div className="flex flex-1 flex-col items-start bg-[#161B22] py-6 rounded-md border border-solid border-[#30363D]">
											<span className="text-[#8B949E] text-sm mb-[7px] mx-6" >
												{"Cumulative Earnings"}
											</span>
											<span className="text-white text-2xl font-bold mb-[3px] mx-6" >
												{"$120"}
											</span>
										</div>
									</div>
									<div className="flex items-start self-stretch gap-3">
										<div className="flex flex-1 flex-col bg-[#161B22] py-6 gap-[21px] rounded-md border border-solid border-[#30363D]">
											<div className="flex items-center self-stretch mx-6">
												<div className="flex flex-1 flex-col items-start gap-1">
													<span className="text-white text-xl font-bold" >
														{"Account Value / PnL"}
													</span>
													<span className="text-[#8B949E] text-sm" >
														{"Net Value / PnL"}
													</span>
												</div>
												<button className="flex shrink-0 items-start bg-[#0D1117] text-left p-3 gap-2.5 rounded-md border border-solid border-[#30363D]"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#A6A6B5] text-xs" >
														{"All Time"}
													</span>
													<img
														src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/jw1qiayj_expires_30_days.png"} 
														className="w-3 h-[15px] rounded-md object-fill"
													/>
												</button>
											</div>
											<div className="self-stretch h-[300px] mx-6">
											</div>
											<div className="flex justify-between items-start self-stretch mx-6">
												<div className="flex shrink-0 items-center pr-0.5 gap-2">
													<span className="text-[#8B949E] text-sm" >
														{"Redemption:"}
													</span>
													<span className="text-white text-sm" >
														{"T+4 Settlement"}
													</span>
												</div>
												<div className="flex shrink-0 items-center pr-[1px] gap-2.5">
													<span className="text-[#8B949E] text-sm" >
														{"Daily Limit:"}
													</span>
													<span className="text-white text-sm" >
														{"15% TVL/day"}
													</span>
												</div>
												<div className="flex shrink-0 items-center pr-[1px] gap-3.5">
													<span className="text-[#8B949E] text-sm" >
														{"Cooling Period:"}
													</span>
													<span className="text-white text-sm" >
														{"Off"}
													</span>
												</div>
											</div>
										</div>
										<div className="flex flex-col shrink-0 items-center bg-[#161B22] rounded-md border border-solid border-[#30363D]">
											<div className="flex items-start">
												<span className="text-white text-sm my-[15px] ml-[72px] mr-[73px]" >
													{"Deposit"}
												</span>
												<span className="text-[#8B949E] text-sm my-[15px] mx-[65px]" >
													{"Withdraw"}
												</span>
											</div>
											<div className="flex flex-col items-start py-6 gap-[17px]">
												<div className="flex items-center pr-0.5 mx-6">
													<span className="text-[#8B949E] text-sm mr-[168px]" >
														{"Available Balance:"}
													</span>
													<span className="text-white text-sm font-bold" >
														{"$10,000"}
													</span>
												</div>
												<div className="flex flex-col items-start mx-6 gap-2">
													<div className="flex flex-col items-center pb-[1px]">
														<span className="text-[#9D9DAF] text-xs" >
															{"Amount"}
														</span>
													</div>
													<div className="flex items-center bg-[#0D1117] py-[9px] px-[13px] rounded-md border border-solid border-[#30363D]">
														<input
															placeholder={"5,000"}
															value={input1}
															onChange={(event)=>onChangeInput1(event.target.value)}
															className="text-white bg-transparent text-base w-[185px] py-2 border-0"
														/>
														<div className="flex shrink-0 items-start bg-[#30363D] py-[7px] px-2 gap-[7px] rounded">
															<span className="text-[#8B949E] text-xs font-bold" >
																{"USDC (Arbitrum)"}
															</span>
															<img
																src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/4khi79iv_expires_30_days.png"} 
																className="w-3 h-[15px] rounded object-fill"
															/>
														</div>
													</div>
												</div>
												<div className="flex flex-col items-start mx-6 gap-4">
													<div className="flex items-center pr-0.5">
														<span className="text-[#8B949E] text-xs mr-[264px]" >
															{"Leverage"}
														</span>
														<span className="text-white text-base" >
															{"10x"}
														</span>
													</div>
													<div className="flex flex-col items-end bg-[#30363D] pr-[253px] rounded-[9999px]">
														<div className="bg-[#92318D] w-[78px] h-2 rounded-[9999px]">
														</div>
														<img
															src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/ke79ww3p_expires_30_days.png"} 
															className="w-[18px] h-2 rounded-[9999px] object-fill"
														/>
													</div>
													<div className="flex items-start gap-[9px]">
														<button className="flex flex-col shrink-0 items-start bg-[#0D1117] text-left py-[11px] px-[23px] rounded border border-solid border-[#30363D]"
															onClick={()=>alert("Pressed!")}>
															<span className="text-white text-sm" >
																{"5x"}
															</span>
														</button>
														<button className="flex flex-col shrink-0 items-start bg-[#0D1117] text-left py-[11px] px-[19px] rounded border-2 border-solid border-[#92318D]"
															onClick={()=>alert("Pressed!")}>
															<span className="text-white text-sm font-bold" >
																{"10x"}
															</span>
														</button>
														<button className="flex flex-col shrink-0 items-start bg-[#0D1117] text-left py-[11px] px-[18px] rounded border border-solid border-[#30363D]"
															onClick={()=>alert("Pressed!")}>
															<span className="text-white text-sm" >
																{"20x"}
															</span>
														</button>
														<button className="flex flex-col shrink-0 items-start bg-[#0D1117] text-left py-[11px] px-[18px] rounded border border-solid border-[#30363D]"
															onClick={()=>alert("Pressed!")}>
															<span className="text-white text-sm" >
																{"50x"}
															</span>
														</button>
														<button className="flex flex-col shrink-0 items-start bg-[#0D1117] text-left py-[11px] px-[15px] rounded border border-solid border-[#30363D]"
															onClick={()=>alert("Pressed!")}>
															<span className="text-white text-sm" >
																{"100x"}
															</span>
														</button>
													</div>
												</div>
												<input
													placeholder={"Deposit: T+0 Withdraw: T+4Daily Redemption Limit: 15% TVL/day Optional Cooling Period: 24–72h"}
													value={input2}
													onChange={(event)=>onChangeInput2(event.target.value)}
													className="text-[#8B949E] bg-[#0D1117] text-xs p-3 mx-6 rounded-lg border-0"
												/>
												<button className="flex flex-col items-start bg-[#92318D] text-left py-3.5 px-[141px] mx-6 rounded-md border-0"
													onClick={()=>alert("Pressed!")}>
													<span className="text-white text-base font-bold" >
														{"Deposit"}
													</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="self-stretch bg-[#161B22] py-[1px] rounded-md border border-solid border-[#30363D]">
								<div className="flex items-start self-stretch px-6 mx-[1px]">
									<span className="text-white text-sm my-[15px] mx-2" >
										{"Deposit / Withdrawal Records"}
									</span>
									<span className="text-[#8B949E] text-sm my-[15px] mx-2" >
										{"Depositors"}
									</span>
									<span className="text-[#8B949E] text-sm my-[15px] mx-2" >
										{"Pool Positions"}
									</span>
									<span className="text-[#8B949E] text-sm my-[15px] mx-2" >
										{"Trade History"}
									</span>
								</div>
								<div className="self-stretch py-4 mx-[1px]">
									<div className="flex items-start self-stretch mx-6">
										<span className="text-[#8B949E] text-xs font-bold my-[13px] ml-4 mr-[149px]" >
											{"Time"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold my-[13px] ml-4 mr-[1px]" >
											{"Type"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold my-[13px] ml-4 mr-[95px]" >
											{"Amount"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold my-[13px] ml-4 mr-[98px]" >
											{"Network"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold my-[13px] ml-4 mr-[121px]" >
											{"Tx"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold my-[13px] ml-4 mr-[127px]" >
											{"Status"}
										</span>
									</div>
									<div className="flex items-start self-stretch mx-6">
										<span className="text-[#E6EDF3] text-sm my-4 ml-4 mr-[99px]" >
											{"2025-09-04"}
										</span>
										<span className="text-[#E6EDF3] text-sm my-4 ml-4 mr-[1px]" >
											{"Deposit"}
										</span>
										<span className="text-[#E6EDF3] text-sm my-4 ml-4 mr-[99px]" >
											{"$5,000"}
										</span>
										<span className="text-[#E6EDF3] text-sm my-4 ml-4 mr-[95px]" >
											{"Arbitrum"}
										</span>
										<span className="text-[#E6EDF3] text-sm my-4 ml-4 mr-[77px]" >
											{"0xab…cd"}
										</span>
										<span className="text-[#2DA44E] text-sm my-4 ml-4 mr-[100px]" >
											{"Confirmed"}
										</span>
									</div>
									<div className="flex items-start self-stretch mx-6">
										<span className="text-[#E6EDF3] text-sm my-4 ml-4 mr-[99px]" >
											{"2025-09-04"}
										</span>
										<span className="text-[#E6EDF3] text-sm my-4 ml-4 mr-[1px]" >
											{"Withdraw"}
										</span>
										<span className="text-[#E6EDF3] text-sm my-4 ml-4 mr-[102px]" >
											{"$1,500"}
										</span>
										<span className="text-[#E6EDF3] text-sm my-4 ml-4 mr-[95px]" >
											{"Arbitrum"}
										</span>
										<span className="text-[#E6EDF3] text-sm my-4 ml-4 mr-[83px]" >
											{"0xff…22"}
										</span>
										<span className="text-[#E6EDF3] text-sm my-4 ml-4 mr-[71px]" >
											{"In Queue (T+4)"}
										</span>
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