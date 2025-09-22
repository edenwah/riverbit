import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	return (
		<div className="bg-white">
			<div className="flex flex-col items-center self-stretch bg-[#000000B0] py-[197px]">
				<div className="flex flex-col bg-[#272B2F] w-[500px] py-[1px] rounded-lg border border-solid border-gray-700">
					<div className="flex items-center self-stretch p-6 mx-[1px]">
						<span className="flex-1 text-white text-lg font-bold" >
							{"Positions TP/SL"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/73d3cc65_expires_30_days.png"} 
							className="w-11 h-11 object-fill"
						/>
					</div>
					<div className="flex flex-col self-stretch pb-6 mx-[1px] gap-4">
						<div className="flex flex-col self-stretch pt-4 mx-6 gap-1">
							<div className="flex items-center self-stretch">
								<span className="flex-1 text-[#9D9DAF] text-xs" >
									{"Coin"}
								</span>
								<span className="text-white text-xs" >
									{"HYPE"}
								</span>
							</div>
							<div className="flex items-center self-stretch">
								<span className="flex-1 text-[#9D9DAF] text-xs" >
									{"Position"}
								</span>
								<span className="text-white text-xs" >
									{"8.09 HYPE"}
								</span>
							</div>
							<div className="flex items-center self-stretch">
								<span className="flex-1 text-[#9D9DAF] text-xs" >
									{"Entry Price"}
								</span>
								<span className="text-white text-xs" >
									{"55.116"}
								</span>
							</div>
							<div className="flex items-center self-stretch">
								<span className="flex-1 text-[#9D9DAF] text-xs" >
									{"Mark Price"}
								</span>
								<span className="text-white text-xs" >
									{"55.252"}
								</span>
							</div>
							<div className="flex items-center self-stretch">
								<span className="flex-1 text-[#9D9DAF] text-xs" >
									{"Take Profit"}
								</span>
								<span className="text-white text-xs" >
									{"Price above 60"}
								</span>
							</div>
							<div className="flex flex-col items-end self-stretch">
								<span className="text-[#9D9DAF] text-xs mr-[3px]" >
									{"Expected Profit: 39.51 USDC"}
								</span>
							</div>
						</div>
						<div className="flex items-start self-stretch mx-6 gap-3">
							<div className="flex flex-1 flex-col items-start gap-[9px]">
								<span className="text-[#9D9DAF] text-xs" >
									{"Stop Loss Price"}
								</span>
								<input
									placeholder={"Price"}
									value={input1}
									onChange={(event)=>onChangeInput1(event.target.value)}
									className="self-stretch text-[#8B949E] bg-[#0D1117] text-base py-3 pl-3 pr-6 rounded-md border border-solid border-[#30363D]"
								/>
							</div>
							<div className="flex flex-1 flex-col items-start gap-[9px]">
								<span className="text-[#9D9DAF] text-xs" >
									{"Stop Loss %"}
								</span>
								<button className="flex items-center self-stretch bg-[#0D1117] text-left p-3 rounded-md border border-solid border-[#30363D]"
									onClick={()=>alert("Pressed!")}>
									<span className="flex-1 text-[#8B949E] text-base" >
										{"Loss"}
									</span>
									<span className="text-[#8B949E] text-xs font-bold" >
										{"%"}
									</span>
								</button>
							</div>
						</div>
						<div className="flex items-start self-stretch mx-6 gap-3">
							<div className="flex flex-1 items-center py-2">
								<span className="flex-1 text-[#C9D1D9] text-sm" >
									{"Allocated Amount"}
								</span>
								<div className="shrink-0 items-start bg-[#92318D] py-0.5 pl-[22px] pr-0.5 rounded-[9999px]">
									<div className="bg-white w-5 h-5 rounded-[9999px] border border-solid border-white">
									</div>
								</div>
							</div>
							<div className="flex flex-1 items-center py-2">
								<span className="flex-1 text-[#C9D1D9] text-sm" >
									{"Limit Price"}
								</span>
								<div className="shrink-0 items-start bg-[#92318D] py-0.5 pl-[22px] pr-0.5 rounded-[9999px]">
									<div className="bg-white w-5 h-5 rounded-[9999px] border border-solid border-white">
									</div>
								</div>
							</div>
						</div>
						<button className="flex flex-col items-center self-stretch bg-[#92318D] text-left py-3.5 mx-6 rounded-md border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-base font-bold" >
								{"Confirm"}
							</span>
						</button>
					</div>
					<span className="text-[#8B949E] text-sm my-4 mx-[17px]" >
						{"By default, take-profit and stop-loss orders apply to the entire position.  Once the position is closed, TP/SL orders will be automatically cancelled. When the take-profit or stop-loss price is reached, a market order will be triggered.\nIf a fixed order size is configured, the TP/SL order will always be executed with that size, regardless of future changes in the position."}
					</span>
				</div>
			</div>
		</div>
	)
}