import React from "react";
export default (props) => {
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-white h-[1246px] rounded-lg border-2 border-solid border-[#CED4DA]">
				<div className="flex justify-between items-start self-stretch bg-[#161B22] py-3.5 px-4">
					<div className="flex shrink-0 items-start gap-8">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/1dchynud_expires_30_days.png"} 
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
							<button className="flex flex-col shrink-0 items-start bg-[#30363D80] text-left py-[11px] px-3 mr-[30px] rounded-md border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-white text-sm" >
									{"Assets"}
								</span>
							</button>
							<div className="flex shrink-0 items-center py-[11px] gap-[13px] rounded-md">
								<span className="text-[#8B949E] text-sm" >
									{"More"}
								</span>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/wbxq7v98_expires_30_days.png"} 
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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/9v5px0of_expires_30_days.png"} 
								className="w-5 h-5 rounded-md object-fill"
							/>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/8f5569cm_expires_30_days.png"} 
								className="w-3 h-[15px] rounded-md object-fill"
							/>
						</div>
						<button className="flex shrink-0 items-center bg-[#161B22] text-left py-2.5 px-4 gap-2.5 rounded-md border border-solid border-[#30363D]"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/yf4v8mev_expires_30_days.png"} 
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
				<div className="flex items-start self-stretch bg-[#0D1117] p-4 gap-3">
					<div className="flex flex-1 flex-col gap-3">
						<div className="flex flex-col items-start self-stretch bg-[#161B22] py-[25px] gap-[27px] rounded-md border border-solid border-[#30363D]">
							<span className="text-white text-2xl font-bold mx-[25px]" >
								{"Assets Overview"}
							</span>
							<div className="flex flex-col items-start self-stretch mx-[25px] gap-8">
								<div className="flex items-start">
									<div className="flex flex-col shrink-0 items-start mr-8">
										<span className="text-[#8B949E] text-sm mb-[11px] mr-[231px]" >
											{"Account Value"}
										</span>
										<span className="text-white text-3xl font-bold mb-[1px] mr-[168px]" >
											{"$27,345.12"}
										</span>
									</div>
									<div className="flex flex-col shrink-0 items-start mr-[33px]">
										<span className="text-[#8B949E] text-sm mb-[11px] mr-[222px]" >
											{"Available Funds"}
										</span>
										<span className="text-white text-3xl font-bold mb-[1px] mr-[155px]" >
											{"$12,450.00"}
										</span>
									</div>
									<div className="flex flex-col shrink-0 items-start">
										<span className="text-[#8B949E] text-sm mb-[11px] mr-[245px]" >
											{"Today's P&L"}
										</span>
										<span className="text-[#2DA44E] text-3xl font-bold mb-[1px] mr-[181px]" >
											{"+$234.56"}
										</span>
									</div>
								</div>
								<div className="flex items-start">
									<div className="flex flex-col shrink-0 items-start mr-8">
										<span className="text-[#8B949E] text-sm mb-[11px] mr-[234px]" >
											{"Position Value"}
										</span>
										<span className="text-white text-3xl font-bold mb-[1px] mr-[167px]" >
											{"$14,895.12"}
										</span>
									</div>
									<div className="flex flex-col shrink-0 items-start mr-[33px]">
										<span className="text-[#8B949E] text-sm mb-[11px] mr-[247px]" >
											{"Total Points"}
										</span>
										<span className="text-white text-3xl font-bold mb-[1px] mr-44" >
											{"1,250,000"}
										</span>
									</div>
									<div className="flex flex-col shrink-0 items-start">
										<span className="text-[#8B949E] text-sm mb-[11px] mr-[229px]" >
											{"Today's Points"}
										</span>
										<span className="text-[#92318D] text-3xl font-bold mb-[1px] mr-[238px]" >
											{"2,500"}
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="self-stretch bg-[#161B22] py-[1px] rounded-md border border-solid border-[#30363D]">
							<div className="flex items-start self-stretch px-6 mx-[1px]">
								<span className="text-white text-sm my-[15px] mx-2" >
									{"Trade History"}
								</span>
								<span className="text-[#8B949E] text-sm my-[15px] mx-2" >
									{"Funds Changes"}
								</span>
								<span className="text-[#8B949E] text-sm my-[15px] mx-2" >
									{"Points Center"}
								</span>
								<span className="text-[#8B949E] text-sm my-[15px] mx-2" >
									{"Detailed Analysis"}
								</span>
							</div>
							<div className="flex flex-col self-stretch py-6 mx-[1px] gap-6">
								<div className="self-stretch mx-6">
									<div className="flex items-start self-stretch">
										<span className="text-[#8B949E] text-xs font-bold my-3 ml-[1px]" >
											{"Time"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold my-3 mx-[1px]" >
											{"Contract"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold my-3 mx-[1px]" >
											{"Direction"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold my-3 mr-[1px]" >
											{"Price"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold my-3 mr-[1px]" >
											{"Quantity"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold my-3 mr-[1px]" >
											{"Fee"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold my-3" >
											{"P&L"}
										</span>
									</div>
									<div className="self-stretch">
										<div className="flex items-center self-stretch">
											<span className="text-white text-sm my-[19px] ml-[1px]" >
												{"17:50:12"}
											</span>
											<span className="text-white text-sm my-[19px] mx-[1px]" >
												{"xAAPL"}
											</span>
											<button className="flex flex-col shrink-0 items-start bg-[#2DA44E33] text-left py-1 px-2 my-4 mx-[1px] rounded border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#2DA44E] text-xs" >
													{"Buy"}
												</span>
											</button>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"227.45"}
											</span>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"$5,000"}
											</span>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"$1.23"}
											</span>
											<span className="text-[#2DA44E] text-sm font-bold my-[19px]" >
												{"+$23"}
											</span>
										</div>
										<div className="flex items-center self-stretch">
											<span className="text-white text-sm my-[19px] ml-[1px]" >
												{"17:50:12"}
											</span>
											<span className="text-white text-sm my-[19px] mx-[1px]" >
												{"xAAPL"}
											</span>
											<button className="flex flex-col shrink-0 items-start bg-[#2DA44E33] text-left py-1 px-2 my-4 mx-[1px] rounded border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#2DA44E] text-xs" >
													{"Buy"}
												</span>
											</button>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"227.45"}
											</span>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"$5,000"}
											</span>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"$1.23"}
											</span>
											<span className="text-[#2DA44E] text-sm font-bold my-[19px]" >
												{"+$23"}
											</span>
										</div>
										<div className="flex items-center self-stretch">
											<span className="text-white text-sm my-[19px] ml-[1px]" >
												{"17:50:12"}
											</span>
											<span className="text-white text-sm my-[19px] mx-[1px]" >
												{"xAAPL"}
											</span>
											<button className="flex flex-col shrink-0 items-start bg-[#2DA44E33] text-left py-1 px-2 my-4 mx-[1px] rounded border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#2DA44E] text-xs" >
													{"Buy"}
												</span>
											</button>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"227.45"}
											</span>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"$5,000"}
											</span>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"$1.23"}
											</span>
											<span className="text-[#2DA44E] text-sm font-bold my-[19px]" >
												{"+$23"}
											</span>
										</div>
										<div className="flex items-center self-stretch">
											<span className="text-white text-sm my-[19px] ml-[1px]" >
												{"17:50:12"}
											</span>
											<span className="text-white text-sm my-[19px] mx-[1px]" >
												{"xAAPL"}
											</span>
											<button className="flex flex-col shrink-0 items-start bg-[#2DA44E33] text-left py-1 px-2 my-4 mx-[1px] rounded border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#2DA44E] text-xs" >
													{"Buy"}
												</span>
											</button>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"227.45"}
											</span>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"$5,000"}
											</span>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"$1.23"}
											</span>
											<span className="text-[#2DA44E] text-sm font-bold my-[19px]" >
												{"+$23"}
											</span>
										</div>
										<div className="flex items-center self-stretch">
											<span className="text-white text-sm my-[19px] ml-[1px]" >
												{"17:50:12"}
											</span>
											<span className="text-white text-sm my-[19px] mx-[1px]" >
												{"xAAPL"}
											</span>
											<button className="flex flex-col shrink-0 items-start bg-[#2DA44E33] text-left py-1 px-2 my-4 mx-[1px] rounded border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#2DA44E] text-xs" >
													{"Buy"}
												</span>
											</button>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"227.45"}
											</span>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"$5,000"}
											</span>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"$1.23"}
											</span>
											<span className="text-[#2DA44E] text-sm font-bold my-[19px]" >
												{"+$23"}
											</span>
										</div>
										<div className="flex items-center self-stretch">
											<span className="text-white text-sm my-[19px] ml-[1px]" >
												{"17:51:12"}
											</span>
											<span className="text-white text-sm my-[19px] mx-[1px]" >
												{"xAAPL"}
											</span>
											<button className="flex flex-col shrink-0 items-start bg-[#F8514933] text-left py-1 px-2 my-4 mx-[1px] rounded border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#F85149] text-xs" >
													{"Sell"}
												</span>
											</button>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"227.20"}
											</span>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"$8,000"}
											</span>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"$1.65"}
											</span>
											<span className="text-[#2DA44E] text-sm font-bold my-[19px]" >
												{"+$45"}
											</span>
										</div>
										<div className="flex items-center self-stretch">
											<span className="text-white text-sm my-[19px] ml-[1px]" >
												{"17:51:12"}
											</span>
											<span className="text-white text-sm my-[19px] mx-[1px]" >
												{"xAAPL"}
											</span>
											<button className="flex flex-col shrink-0 items-start bg-[#F8514933] text-left py-1 px-2 my-4 mx-[1px] rounded border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#F85149] text-xs" >
													{"Sell"}
												</span>
											</button>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"227.20"}
											</span>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"$8,000"}
											</span>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"$1.65"}
											</span>
											<span className="text-[#2DA44E] text-sm font-bold my-[19px]" >
												{"+$45"}
											</span>
										</div>
										<div className="flex items-center self-stretch">
											<span className="text-white text-sm my-[19px] ml-[1px]" >
												{"17:51:12"}
											</span>
											<span className="text-white text-sm my-[19px] mx-[1px]" >
												{"xAAPL"}
											</span>
											<button className="flex flex-col shrink-0 items-start bg-[#F8514933] text-left py-1 px-2 my-4 mx-[1px] rounded border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#F85149] text-xs" >
													{"Sell"}
												</span>
											</button>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"227.20"}
											</span>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"$8,000"}
											</span>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"$1.65"}
											</span>
											<span className="text-[#2DA44E] text-sm font-bold my-[19px]" >
												{"+$45"}
											</span>
										</div>
										<div className="flex items-center self-stretch">
											<span className="text-white text-sm my-[19px] ml-[1px]" >
												{"17:51:12"}
											</span>
											<span className="text-white text-sm my-[19px] mx-[1px]" >
												{"xAAPL"}
											</span>
											<button className="flex flex-col shrink-0 items-start bg-[#F8514933] text-left py-1 px-2 my-4 mx-[1px] rounded border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#F85149] text-xs" >
													{"Sell"}
												</span>
											</button>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"227.20"}
											</span>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"$8,000"}
											</span>
											<span className="text-white text-sm my-[19px] mr-[1px]" >
												{"$1.65"}
											</span>
											<span className="text-[#2DA44E] text-sm font-bold my-[19px]" >
												{"+$45"}
											</span>
										</div>
										<div className="flex items-center self-stretch">
											<span className="text-white text-sm my-[18px] ml-[1px]" >
												{"16:22:30"}
											</span>
											<span className="text-white text-sm my-[18px] mx-[1px]" >
												{"xTSLA"}
											</span>
											<button className="flex flex-col shrink-0 items-start bg-[#2DA44E33] text-left py-1 px-2 my-[15px] mx-[1px] rounded border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#2DA44E] text-xs" >
													{"Buy"}
												</span>
											</button>
											<span className="text-white text-sm my-[18px] mr-[1px]" >
												{"213.70"}
											</span>
											<span className="text-white text-sm my-[18px] mr-[1px]" >
												{"$3,000"}
											</span>
											<span className="text-white text-sm my-[18px] mr-[1px]" >
												{"$0.75"}
											</span>
											<span className="text-[#F85149] text-sm font-bold my-[18px]" >
												{"-$15"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex justify-between items-center self-stretch mx-6">
									<div className="flex flex-col shrink-0 items-center">
										<span className="text-[#8B949E] text-sm" >
											{"Showing 10 of 156 trades"}
										</span>
									</div>
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
					<div className="flex flex-col shrink-0 items-start pb-[499px] gap-3">
						<div className="flex flex-col items-start bg-[#161B22] py-[25px] gap-[17px] rounded-md border border-solid border-[#30363D]">
							<span className="text-white text-lg font-bold ml-[25px] mr-[77px]" >
								{"Portfolio Breakdown"}
							</span>
							<div className="flex flex-col items-start mx-[25px] gap-4">
								<div className="flex items-center pr-[1px] gap-[62px]">
									<div className="flex shrink-0 items-center gap-3">
										<div className="flex flex-col shrink-0 items-center bg-[#F97316] pt-1.5 pb-[9px] px-3 rounded-[9999px]">
											<span className="text-white text-sm font-bold" >
												{"₿"}
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-start">
											<div className="flex flex-col items-center pb-[3px]">
												<span className="text-white text-sm font-bold" >
													{"Bitcoin"}
												</span>
											</div>
											<span className="text-[#8B949E] text-xs mb-[1px] mr-[25px]" >
												{"BTC"}
											</span>
										</div>
									</div>
									<div className="flex flex-col shrink-0 items-end">
										<span className="text-white text-sm font-bold" >
											{"$15,234.56"}
										</span>
										<span className="text-[#2DA44E] text-xs mr-0.5" >
											{"+2.34%"}
										</span>
									</div>
								</div>
								<div className="flex items-center pr-[1px] gap-[47px]">
									<div className="flex shrink-0 items-center gap-3">
										<div className="flex flex-col shrink-0 items-center bg-blue-500 pt-1.5 pb-[9px] px-3 rounded-[9999px]">
											<span className="text-white text-sm font-bold" >
												{"E"}
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-start">
											<div className="flex flex-col items-center pb-[3px]">
												<span className="text-white text-sm font-bold" >
													{"Ethereum"}
												</span>
											</div>
											<span className="text-[#8B949E] text-xs mb-[1px] mr-[46px]" >
												{"ETH"}
											</span>
										</div>
									</div>
									<div className="flex flex-col shrink-0 items-end">
										<span className="text-white text-sm font-bold" >
											{"$8,765.43"}
										</span>
										<span className="text-[#2DA44E] text-xs mr-[3px]" >
											{"+1.87%"}
										</span>
									</div>
								</div>
								<div className="flex items-center pr-[1px]">
									<div className="flex shrink-0 items-center mr-20 gap-3">
										<div className="flex flex-col shrink-0 items-center bg-green-500 pt-1.5 pb-[9px] px-[11px] rounded-[9999px]">
											<span className="text-white text-sm font-bold" >
												{"U"}
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-center">
											<div className="flex flex-col items-center pb-[3px]">
												<span className="text-white text-sm font-bold" >
													{"USDT"}
												</span>
											</div>
											<div className="flex flex-col items-center pb-[1px]">
												<span className="text-[#8B949E] text-xs" >
													{"Tether"}
												</span>
											</div>
										</div>
									</div>
									<div className="flex flex-col shrink-0 items-end">
										<span className="text-white text-sm font-bold" >
											{"$2,345.13"}
										</span>
										<span className="text-[#8B949E] text-xs mr-[1px]" >
											{"0.00%"}
										</span>
									</div>
								</div>
								<div className="flex items-center pr-[1px] gap-[18px]">
									<div className="flex shrink-0 items-center gap-3">
										<div className="flex flex-col shrink-0 items-center bg-[#92318D] pt-1.5 pb-[9px] px-[11px] rounded-[9999px]">
											<span className="text-white text-sm font-bold" >
												{"R"}
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-start">
											<div className="flex flex-col items-center pb-[3px]">
												<span className="text-white text-sm font-bold" >
													{"RiverBit Token"}
												</span>
											</div>
											<span className="text-[#8B949E] text-xs mb-[1px] mr-[77px]" >
												{"RBT"}
											</span>
										</div>
									</div>
									<div className="flex flex-col shrink-0 items-end">
										<span className="text-white text-sm font-bold" >
											{"$1,000.00"}
										</span>
										<span className="text-[#2DA44E] text-xs mr-0.5" >
											{"+5.67%"}
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-start bg-[#161B22] py-[25px] gap-[17px] rounded-md border border-solid border-[#30363D]">
							<span className="text-white text-lg font-bold ml-[25px] mr-[132px]" >
								{"Quick Actions"}
							</span>
							<div className="flex flex-col items-center mx-[25px] gap-3">
								<button className="flex items-center bg-[#92318D] text-left py-3.5 px-[47px] gap-2 rounded-md border-0"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/2g3b7i5w_expires_30_days.png"} 
										className="w-3 h-5 rounded-md object-fill"
									/>
									<span className="text-white text-base font-bold" >
										{"Deposit Funds"}
									</span>
								</button>
								<button className="flex items-center bg-transparent text-left py-3.5 px-[39px] gap-2 rounded-md border border-solid border-[#30363D]"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/uo736cf0_expires_30_days.png"} 
										className="w-3 h-5 rounded-md object-fill"
									/>
									<span className="text-white text-base font-bold" >
										{"Withdraw Funds"}
									</span>
								</button>
								<button className="flex items-center bg-transparent text-left py-3.5 px-[60px] gap-2 rounded-md border border-solid border-[#30363D]"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/jkf3xms9_expires_30_days.png"} 
										className="w-3.5 h-5 rounded-md object-fill"
									/>
									<span className="text-white text-base font-bold" >
										{"Trade Now"}
									</span>
								</button>
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
	)
}