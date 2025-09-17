import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	const [input4, onChangeInput4] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-white h-[1294px] rounded-lg border-2 border-solid border-[#CED4DA]">
				<div className="flex justify-between items-start self-stretch bg-[#161B22] py-3.5 px-4">
					<div className="flex shrink-0 items-start gap-8">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/b0rk8eg2_expires_30_days.png"} 
							className="w-[118px] h-10 object-fill"
						/>
						<div className="flex shrink-0 items-start">
							<div className="flex flex-col shrink-0 items-center py-[15px] mr-[30px] rounded-md">
								<span className="text-[#8B949E] text-sm" >
									{"Trading"}
								</span>
							</div>
							<div className="flex flex-col shrink-0 items-center py-[11px] mr-[30px] rounded-md">
								<span className="text-[#8B949E] text-sm" >
									{"RiverPool"}
								</span>
							</div>
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
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/3d7r757t_expires_30_days.png"} 
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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/sm02bbj3_expires_30_days.png"} 
								className="w-5 h-5 rounded-md object-fill"
							/>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/vash9qye_expires_30_days.png"} 
								className="w-3 h-[15px] rounded-md object-fill"
							/>
						</div>
						<button className="flex shrink-0 items-center bg-[#161B22] text-left py-2.5 px-4 gap-2.5 rounded-md border border-solid border-[#30363D]"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/eqg83w3x_expires_30_days.png"} 
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
					<div className="flex flex-col self-stretch bg-[#0D0F13] py-12 px-20 gap-8">
						<div className="flex flex-col items-start self-stretch mx-6 gap-4">
							<div className="flex flex-col items-center pb-[1px]">
								<span className="text-white text-3xl font-bold" >
									{"API Tools"}
								</span>
							</div>
							<div className="flex justify-between items-center self-stretch">
								<div className="flex flex-col shrink-0 items-center">
									<span className="text-[#8B949E] text-base" >
										{"Developer tools and API management"}
									</span>
								</div>
								<div className="flex shrink-0 items-start gap-4">
									<div className="flex shrink-0 items-center pr-1 gap-[11px]">
										<span className="text-[#8B949E] text-sm" >
											{"System Status:"}
										</span>
										<span className="text-[#2DA44E] text-sm font-bold" >
											{"Normal"}
										</span>
									</div>
									<div className="flex shrink-0 items-center pr-[3px] gap-[11px]">
										<span className="text-[#8B949E] text-sm" >
											{"Last Updated:"}
										</span>
										<span className="text-white text-sm" >
											{"2025-09-06"}
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col self-stretch mx-6 gap-3">
							<div className="flex flex-col items-start self-stretch bg-[#161B22] py-[25px] gap-[17px] rounded-lg border border-solid border-[#30363D]">
								<span className="text-white text-lg font-bold mx-[25px]" >
									{"Actions"}
								</span>
								<div className="flex items-start self-stretch mx-[25px]">
									<div className="flex flex-1 flex-col bg-[#92318D] py-[15px] mr-4 gap-2.5 rounded-lg">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/n9sykxhy_expires_30_days.png"} 
											className="self-stretch h-7 mx-4 rounded-lg object-fill"
										/>
										<span className="text-white text-sm font-bold text-center mx-[91px]" >
											{"Create API Key"}
										</span>
									</div>
									<div className="flex flex-1 flex-col bg-[#0D1117] py-[15px] mr-[17px] gap-2.5 rounded-lg border border-solid border-[#30363D]">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/s5g8qhzh_expires_30_days.png"} 
											className="self-stretch h-7 mx-[17px] rounded-lg object-fill"
										/>
										<span className="text-white text-sm font-bold text-center mx-[59px]" >
											{"View API Documentation"}
										</span>
									</div>
									<div className="flex flex-1 flex-col bg-[#0D1117] py-[15px] mr-4 gap-2.5 rounded-lg border border-solid border-[#30363D]">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/ayoovr7s_expires_30_days.png"} 
											className="self-stretch h-7 mx-[17px] rounded-lg object-fill"
										/>
										<span className="text-white text-sm font-bold text-center mx-[92px]" >
											{"Download SDK"}
										</span>
									</div>
									<button className="flex flex-1 flex-col items-center bg-[#0D1117] text-left py-[15px] px-[17px] gap-2.5 rounded-lg border border-solid border-[#30363D]"
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/6m5u7q1n_expires_30_days.png"} 
											className="self-stretch h-7 rounded-lg object-fill"
										/>
										<span className="text-white text-sm font-bold" >
											{"Test Tools"}
										</span>
									</button>
								</div>
							</div>
							<div className="flex items-start self-stretch gap-3">
								<div className="flex flex-col shrink-0 items-center gap-2.5">
									<div className="flex flex-col items-start bg-[#161B22] py-6 gap-4 rounded-lg border border-solid border-[#30363D]">
										<button className="flex items-start bg-[#0D1117] text-left py-3 px-4 mx-[26px] rounded-md border border-solid border-[#30363D]"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#ADAEBC] text-base mr-[157px]" >
												{"Search..."}
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/ve4zl4a6_expires_30_days.png"} 
												className="w-4 h-6 rounded-md object-fill"
											/>
										</button>
										<span className="text-white text-lg font-bold ml-[26px]" >
											{"API Key Management"}
										</span>
										<div className="flex flex-col items-start ml-[26px] gap-3">
											<span className="text-[#92318D] text-sm font-bold" >
												{"All"}
											</span>
											<span className="text-[#8B949E] text-sm" >
												{"Active Keys"}
											</span>
											<span className="text-[#8B949E] text-sm" >
												{"Disabled Keys"}
											</span>
											<span className="text-[#8B949E] text-sm" >
												{"Paused Keys"}
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start bg-[#161B22] py-[26px] gap-4 rounded-lg border border-solid border-[#30363D]">
										<span className="text-white text-lg font-bold ml-[26px]" >
											{"Usage Statistics"}
										</span>
										<div className="flex flex-col items-start mx-[26px] gap-2">
											<div className="flex items-center pr-[3px]">
												<span className="text-[#8B949E] text-sm mr-[125px]" >
													{"Requests Today:"}
												</span>
												<span className="text-white text-sm" >
													{"1,250"}
												</span>
											</div>
											<div className="flex items-center pr-[3px]">
												<span className="text-[#8B949E] text-sm mr-20" >
													{"Requests This Month:"}
												</span>
												<span className="text-white text-sm" >
													{"28,500"}
												</span>
											</div>
										</div>
									</div>
									<div className="flex flex-col items-start bg-[#161B22] py-[25px] gap-4 rounded-lg border border-solid border-[#30363D]">
										<div className="flex flex-col items-center pb-[1px] ml-[25px]">
											<span className="text-white text-lg font-bold" >
												{"Contact Us"}
											</span>
										</div>
										<div className="flex flex-col items-start mx-[25px] gap-3">
											<div className="flex items-center bg-[#0D1117] p-3 gap-3 rounded-lg">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/mmuf8gre_expires_30_days.png"} 
													className="w-6 h-6 rounded-lg object-fill"
												/>
												<input
													placeholder={"Discord"}
													value={input1}
													onChange={(event)=>onChangeInput1(event.target.value)}
													className="text-white bg-transparent text-sm w-12 py-[3px] border-0"
												/>
											</div>
											<div className="flex items-center bg-[#0D1117] p-3 gap-3 rounded-lg">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/yqwbptrv_expires_30_days.png"} 
													className="w-6 h-6 rounded-lg object-fill"
												/>
												<input
													placeholder={"X"}
													value={input2}
													onChange={(event)=>onChangeInput2(event.target.value)}
													className="text-white bg-transparent text-sm w-2 py-[3px] border-0"
												/>
											</div>
											<div className="flex items-center bg-[#0D1117] p-3 gap-3 rounded-lg">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/je4r14de_expires_30_days.png"} 
													className="w-6 h-6 rounded-lg object-fill"
												/>
												<input
													placeholder={"Telegram"}
													value={input3}
													onChange={(event)=>onChangeInput3(event.target.value)}
													className="text-white bg-transparent text-sm w-[59px] py-[3px] border-0"
												/>
											</div>
											<div className="flex items-center bg-[#0D1117] p-3 gap-3 rounded-lg">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/bj7y10zi_expires_30_days.png"} 
													className="w-6 h-6 rounded-lg object-fill"
												/>
												<input
													placeholder={"GitHub"}
													value={input4}
													onChange={(event)=>onChangeInput4(event.target.value)}
													className="text-white bg-transparent text-sm w-[45px] py-[3px] border-0"
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="flex-1 bg-[#161B22] py-0.5 rounded-lg border border-solid border-[#30363D]">
									<div className="flex flex-col items-center self-stretch py-[26px] pl-6 mx-0.5">
										<span className="text-white text-xl font-bold" >
											{"API Key Management"}
										</span>
									</div>
									<div className="self-stretch mx-0.5">
										<div className="flex items-start self-stretch p-4 mx-6">
											<span className="text-[#8B949E] text-xs font-bold mb-[1px] mr-[88px]" >
												{"Key ID"}
											</span>
											<span className="text-[#8B949E] text-xs font-bold mb-[1px] mr-[90px]" >
												{"Name"}
											</span>
											<span className="text-[#8B949E] text-xs font-bold mb-[1px]" >
												{"Permissions"}
											</span>
											<span className="text-[#8B949E] text-xs font-bold mb-[1px] mr-[85px]" >
												{"Status"}
											</span>
											<span className="text-[#8B949E] text-xs font-bold mb-[1px] mr-[57px]" >
												{"Created On"}
											</span>
											<span className="text-[#8B949E] text-xs font-bold mb-[1px] mr-[66px]" >
												{"Last Used"}
											</span>
										</div>
										<div className="flex items-center self-stretch p-4 mx-6">
											<span className="text-white text-sm my-0.5 mr-[79px]" >
												{"RB_001"}
											</span>
											<span className="text-white text-sm my-0.5 mr-[47px]" >
												{"Trading Bot"}
											</span>
											<span className="text-[#8B949E] text-sm mb-[1px]" >
												{"Read, Trade, Withdraw"}
											</span>
											<button className="flex flex-col shrink-0 items-start bg-[#2DA44E] text-left py-1 px-2 mb-[3px] mr-[70px] rounded border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-white text-xs font-bold" >
													{"Active"}
												</span>
											</button>
											<span className="text-[#8B949E] text-sm my-0.5 mr-[45px]" >
												{"2025-08-15"}
											</span>
											<div className="flex flex-col shrink-0 items-center py-0.5">
												<span className="text-[#8B949E] text-sm" >
													{"2025-09-06 16:23"}
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch p-4 mx-6">
											<span className="text-white text-sm my-0.5 mr-[76px]" >
												{"RB_002"}
											</span>
											<span className="text-white text-sm my-0.5 mr-3.5" >
												{"Portfolio Tracker"}
											</span>
											<span className="text-[#8B949E] text-sm my-0.5" >
												{"Read"}
											</span>
											<button className="flex flex-col shrink-0 items-start bg-[#2DA44E] text-left py-1 px-2 mb-[3px] mr-[70px] rounded border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-white text-xs font-bold" >
													{"Active"}
												</span>
											</button>
											<span className="text-[#8B949E] text-sm my-0.5 mr-[45px]" >
												{"2025-08-10"}
											</span>
											<div className="flex flex-col shrink-0 items-center py-0.5">
												<span className="text-[#8B949E] text-sm" >
													{"2025-09-06 15:45"}
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch p-4 mx-6">
											<span className="text-white text-sm my-0.5 mr-[76px]" >
												{"RB_003"}
											</span>
											<div className="flex flex-col shrink-0 items-center py-0.5">
												<span className="text-white text-sm" >
													{"Risk Management"}
												</span>
											</div>
											<span className="text-[#8B949E] text-sm my-0.5" >
												{"Read, Trade"}
											</span>
											<button className="flex flex-col shrink-0 items-start bg-[#2DA44E] text-left py-1 px-2 mb-[3px] mr-[70px] rounded border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-white text-xs font-bold" >
													{"Active"}
												</span>
											</button>
											<span className="text-[#8B949E] text-sm my-0.5 mr-[45px]" >
												{"2025-07-22"}
											</span>
											<div className="flex flex-col shrink-0 items-center py-0.5">
												<span className="text-[#8B949E] text-sm" >
													{"2025-09-06 14:20"}
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch p-4 mx-6">
											<span className="text-white text-sm my-0.5 mr-[75px]" >
												{"RB_004"}
											</span>
											<span className="text-white text-sm my-0.5 mr-[35px]" >
												{"Data Analysis"}
											</span>
											<span className="text-[#8B949E] text-sm my-0.5" >
												{"Read"}
											</span>
											<button className="flex flex-col shrink-0 items-start bg-[#30363D] text-left py-1 px-2 mb-[3px] mr-[63px] rounded border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#8B949E] text-xs font-bold" >
													{"Paused"}
												</span>
											</button>
											<span className="text-[#8B949E] text-sm my-0.5 mr-11" >
												{"2025-07-05"}
											</span>
											<div className="flex flex-col shrink-0 items-center py-0.5">
												<span className="text-[#8B949E] text-sm" >
													{"2025-08-28 11:30"}
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch p-4 mx-6">
											<span className="text-white text-sm my-0.5 mr-[76px]" >
												{"RB_005"}
											</span>
											<span className="text-white text-sm my-0.5 mr-[35px]" >
												{"Arbitrage Bot"}
											</span>
											<span className="text-[#8B949E] text-sm my-0.5" >
												{"Read, Trade"}
											</span>
											<button className="flex flex-col shrink-0 items-start bg-[#2DA44E] text-left py-1 px-2 mb-[3px] mr-[70px] rounded border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-white text-xs font-bold" >
													{"Active"}
												</span>
											</button>
											<span className="text-[#8B949E] text-sm my-0.5 mr-[45px]" >
												{"2025-06-18"}
											</span>
											<div className="flex flex-col shrink-0 items-center py-0.5">
												<span className="text-[#8B949E] text-sm" >
													{"2025-09-06 16:18"}
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch p-4 mx-6">
											<span className="text-white text-sm my-0.5 mr-[76px]" >
												{"RB_006"}
											</span>
											<span className="text-white text-sm my-0.5 mr-[33px]" >
												{"Market Maker"}
											</span>
											<span className="text-[#8B949E] text-sm my-0.5" >
												{"Read, Trade"}
											</span>
											<button className="flex flex-col shrink-0 items-start bg-[#2DA44E] text-left py-1 px-2 mb-[3px] mr-[70px] rounded border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-white text-xs font-bold" >
													{"Active"}
												</span>
											</button>
											<span className="text-[#8B949E] text-sm my-0.5 mr-[46px]" >
												{"2025-06-01"}
											</span>
											<div className="flex flex-col shrink-0 items-center py-0.5">
												<span className="text-[#8B949E] text-sm" >
													{"2025-09-06 16:25"}
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch p-4 mx-6">
											<span className="text-white text-sm my-0.5 mr-[77px]" >
												{"RB_007"}
											</span>
											<div className="flex flex-1 flex-col items-start">
												<span className="text-[#8B949E] text-sm my-0.5 ml-[122px]" >
													{"Read, Trade"}
												</span>
												<span className="text-white text-sm" >
													{"Order Management"}
												</span>
											</div>
											<button className="flex flex-col shrink-0 items-start bg-[#30363D] text-left py-1 px-2 mb-[3px] mr-14 rounded border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#8B949E] text-xs font-bold" >
													{"Disabled"}
												</span>
											</button>
											<span className="text-[#8B949E] text-sm my-0.5 mr-[45px]" >
												{"2025-05-10"}
											</span>
											<div className="flex flex-col shrink-0 items-center py-0.5">
												<span className="text-[#8B949E] text-sm" >
													{"2025-08-15 09:45"}
												</span>
											</div>
										</div>
									</div>
									<div className="flex flex-col items-center self-stretch pt-6 pb-[25px] pl-6 mx-0.5">
										<span className="text-[#8B949E] text-sm" >
											{"Showing 7 of 7 API keys"}
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