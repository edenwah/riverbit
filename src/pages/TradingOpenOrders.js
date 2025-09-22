import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	const [input4, onChangeInput4] = useState('');
	const [input5, onChangeInput5] = useState('');
	const [input6, onChangeInput6] = useState('');
	const [input7, onChangeInput7] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-white h-[1169px] rounded-lg border-2 border-solid border-[#CED4DA]">
				<div className="flex justify-between items-start self-stretch bg-[#161B22] py-3.5 px-4">
					<div className="flex shrink-0 items-start gap-8">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/jgoelmiw_expires_30_days.png"} 
							className="w-[118px] h-10 object-fill"
						/>
						<div className="flex shrink-0 items-start">
							<button className="flex flex-col shrink-0 items-start bg-[#30363D] text-left py-[11px] px-3 mr-[30px] rounded-md border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-white text-sm" >
									{"Trading"}
								</span>
							</button>
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
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/2pdd3e9q_expires_30_days.png"} 
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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/nm21ujti_expires_30_days.png"} 
								className="w-5 h-5 rounded-md object-fill"
							/>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/gg4mypqj_expires_30_days.png"} 
								className="w-3 h-[15px] rounded-md object-fill"
							/>
						</div>
						<button className="flex shrink-0 items-center bg-[#161B22] text-left py-2.5 px-4 gap-2.5 rounded-md border border-solid border-[#30363D]"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/sqq1dbik_expires_30_days.png"} 
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
				<div className="flex items-start self-stretch p-2">
					<div className="flex flex-1 flex-col mr-2 gap-2">
						<div className="flex flex-col self-stretch bg-[#161B22] py-4 gap-3 rounded-lg border border-solid border-[#30363D]">
							<div className="flex justify-between items-start self-stretch mx-3">
								<div className="flex shrink-0 items-center gap-4">
									<div className="flex shrink-0 items-start pr-[1px] gap-2">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/fd6x80gc_expires_30_days.png"} 
											className="w-3 h-7 object-fill"
										/>
										<span className="text-gray-200 text-lg font-bold" >
											{"ETH-PERP"}
										</span>
									</div>
									<div className="flex shrink-0 items-center p-3 gap-[13px] rounded-md">
										<span className="text-[#A6A6B5] text-xs font-bold" >
											{"Select Asset"}
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/j8qg6a63_expires_30_days.png"} 
											className="w-3 h-[15px] rounded-md object-fill"
										/>
									</div>
								</div>
								<div className="flex shrink-0 items-start gap-2.5">
									<button className="flex shrink-0 items-center bg-[#0D1117] text-left p-3 gap-[17px] rounded-md border border-solid border-[#30363D]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#A6A6B5] text-xs" >
											{"Granularity"}
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/75rgl0do_expires_30_days.png"} 
											className="w-3 h-[15px] rounded-md object-fill"
										/>
									</button>
									<button className="flex shrink-0 items-center bg-[#0D1117] text-left p-3 gap-4 rounded-md border border-solid border-[#30363D]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#A6A6B5] text-xs" >
											{"Indicator"}
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/iynkd8fv_expires_30_days.png"} 
											className="w-3 h-[15px] rounded-md object-fill"
										/>
									</button>
								</div>
							</div>
							<div className="flex items-start self-stretch mx-3 gap-3">
								<div className="flex flex-1 flex-col items-start">
									<span className="text-[#A6A6B5] text-xs ml-3.5" >
										{"Mark Price"}
									</span>
									<span className="text-gray-200 text-xs font-bold text-center mx-3.5" >
										{"227.34"}
									</span>
								</div>
								<div className="flex flex-1 flex-col items-start">
									<span className="text-[#A6A6B5] text-xs ml-3" >
										{"Index Price"}
									</span>
									<span className="text-gray-200 text-xs font-bold text-center mx-3" >
										{"227.30"}
									</span>
								</div>
								<div className="flex flex-1 flex-col items-start">
									<span className="text-[#A6A6B5] text-xs ml-[9px]" >
										{"24h Change"}
									</span>
									<span className="text-[#F85149] text-xs font-bold text-center mx-[9px]" >
										{"-0.97%"}
									</span>
								</div>
								<div className="flex flex-1 flex-col items-start">
									<span className="text-[#A6A6B5] text-xs ml-[11px]" >
										{"24h Volume"}
									</span>
									<span className="text-gray-200 text-xs font-bold text-center mx-[11px]" >
										{"3.2B"}
									</span>
								</div>
								<div className="flex flex-1 flex-col items-start">
									<span className="text-[#A6A6B5] text-xs ml-1.5" >
										{"Open Interest"}
									</span>
									<span className="text-gray-200 text-xs font-bold text-center mx-1.5" >
										{"3.5B"}
									</span>
								</div>
								<div className="flex flex-1 flex-col items-start">
									<span className="text-[#A6A6B5] text-xs ml-2" >
										{"Funding Rate"}
									</span>
									<span className="text-[#2DA44E] text-xs font-bold text-center mx-2" >
										{"0.1300%"}
									</span>
								</div>
								<div className="flex flex-1 flex-col">
									<span className="text-[#A6A6B5] text-xs text-center" >
										{"Next Settlement"}
									</span>
									<span className="text-gray-200 text-xs font-bold text-center" >
										{"00:52:54"}
									</span>
								</div>
							</div>
						</div>
						<div className="self-stretch bg-[#161B22] h-[500px] p-[1px] rounded-md border border-solid border-[#30363D]">
						</div>
						<div className="self-stretch bg-[#161B22] py-[1px] rounded-md border border-solid border-[#30363D]">
							<div className="flex flex-col items-start self-stretch py-4 mx-[1px] gap-2">
								<span className="text-white text-lg ml-3" >
									{"Account Overview"}
								</span>
								<div className="flex items-start self-stretch mx-3">
									<div className="flex flex-col shrink-0 items-start mr-[70px]">
										<span className="text-[#8B949E] text-sm" >
											{"Total Account Value"}
										</span>
										<span className="text-white text-base" >
											{"$42,845.67"}
										</span>
									</div>
									<div className="flex flex-col shrink-0 items-start mr-[70px]">
										<span className="text-[#8B949E] text-sm" >
											{"Total Margin Used"}
										</span>
										<span className="text-white text-base" >
											{"$5,525.00"}
										</span>
									</div>
									<div className="flex flex-1 flex-col items-start mr-3">
										<span className="text-[#8B949E] text-sm" >
											{"Total Notional Position"}
										</span>
										<span className="text-white text-base" >
											{"$37,000.00"}
										</span>
									</div>
									<div className="flex flex-col shrink-0 items-start">
										<span className="text-[#8B949E] text-sm" >
											{"Withdrawable Amount"}
										</span>
										<span className="text-white text-base" >
											{"$37,320.67"}
										</span>
									</div>
								</div>
							</div>
							<div className="flex justify-between items-start self-stretch px-3 mx-[1px]">
								<div className="flex shrink-0 items-start">
									<span className="text-[#8B949E] text-sm my-[15px] mx-2" >
										{"Balance"}
									</span>
									<span className="text-[#8B949E] text-sm my-[15px] mx-2" >
										{"Positions"}
									</span>
									<span className="text-white text-sm my-[15px] mx-2" >
										{"Open Orders"}
									</span>
									<span className="text-[#8B949E] text-sm my-[15px] mx-2" >
										{"Trade History"}
									</span>
									<span className="text-[#8B949E] text-sm my-[15px] mx-2" >
										{"Funding History"}
									</span>
									<span className="text-[#8B949E] text-sm my-[15px] mx-2" >
										{"Order History"}
									</span>
								</div>
								<div className="flex shrink-0 items-center py-[15px] pl-2 pr-[7px] gap-[13px]">
									<span className="text-[#8B949E] text-sm" >
										{"Filter"}
									</span>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/oyl2wsht_expires_30_days.png"} 
										className="w-3 h-[15px] object-fill"
									/>
								</div>
							</div>
							<div className="flex flex-col self-stretch py-3 mx-[1px] gap-2.5">
								<div className="self-stretch mx-3">
									<div className="flex items-center self-stretch">
										<span className="text-[#8B949E] text-xs font-bold my-2.5" >
											{"Time"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold my-2.5 ml-1 mr-[1px]" >
											{"Type"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold my-2.5 ml-1 mr-[1px]" >
											{"Coin"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold my-2.5 ml-1 mr-[1px]" >
											{"Direction"}
										</span>
										<span className="flex-1 text-[#8B949E] text-xs font-bold my-2.5 ml-1 mr-[5px]" >
											{"Size / Original Size"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold w-[35px] my-[9px] ml-1 mr-[1px]" >
											{"Order Value"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold w-[45px] my-[9px] ml-1 mr-[1px]" >
											{"Price / Trigger"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold w-[46px] my-[9px] ml-1 mr-[1px]" >
											{"Reduce Only"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold my-2.5 ml-1" >
											{"TP/SL"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold my-2.5 ml-1" >
											{"Actions"}
										</span>
									</div>
									<div className="flex items-center self-stretch">
										<span className="flex-1 text-white text-xs my-2" >
											{"9/12/2025\n17:30:13"}
										</span>
										<span className="flex-1 text-white text-xs my-2.5 ml-1 mr-[5px]" >
											{"Take Profit Market"}
										</span>
										<span className="text-white text-xs my-[9px] ml-1 mr-[1px]" >
											{"HYPE"}
										</span>
										<span className="text-[#F85149] text-xs my-[9px] ml-1 mr-[1px]" >
											{"Close Long"}
										</span>
										<span className="text-white text-xs my-[9px] ml-1 mr-[1px]" >
											{"-- / --"}
										</span>
										<span className="text-white text-xs my-[9px] ml-1 mr-[1px]" >
											{"--"}
										</span>
										<span className="flex-1 text-white text-xs my-2.5 ml-1 mr-[5px]" >
											{"Market /Price > 60"}
										</span>
										<span className="text-white text-xs my-[9px] ml-1 mr-[1px]" >
											{"Yes"}
										</span>
										<span className="text-white text-xs my-[9px] ml-1" >
											{"--"}
										</span>
										<span className="text-[#92318D] text-xs font-bold my-[9px] ml-1" >
											{"Cancel"}
										</span>
									</div>
								</div>
								<div className="flex flex-col items-end self-stretch">
									<div className="flex flex-col bg-[#92318D] w-[100px] py-3.5 mr-3 rounded-md">
										<span className="text-white text-base font-bold text-center mx-[19px]" >
											{"View All"}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col shrink-0 items-start bg-[#161B22] py-[1px] mr-[9px] rounded-md border border-solid border-[#30363D]">
						<div className="flex items-start px-3 mb-1 mx-[1px]">
							<span className="text-white text-sm my-[15px] ml-[26px] mr-[27px]" >
								{"Order Book"}
							</span>
							<span className="text-[#8B949E] text-sm my-[15px] mx-[41px]" >
								{"Trades"}
							</span>
						</div>
						<div className="flex items-center mb-1 ml-[1px]">
							<span className="text-[#8B949E] text-xs my-1 ml-8 mr-[33px]" >
								{"Price"}
							</span>
							<span className="text-[#8B949E] text-xs my-1 ml-[34px] mr-[83px]" >
								{"Size"}
							</span>
							<span className="text-[#8B949E] text-xs" >
								{"Total"}
							</span>
						</div>
						<div className="flex items-center mb-[1px] ml-[1px] gap-[23px]">
							<div className="flex shrink-0 items-start bg-[#EF44441A] py-[5px]">
								<span className="text-[#F85149] text-xs my-[3px] ml-4 mr-[17px]" >
									{"110,595.00"}
								</span>
								<span className="text-white text-xs my-[3px] mx-[30px]" >
									{"2.376"}
								</span>
							</div>
							<span className="text-[#8B949E] text-xs" >
								{"16.500"}
							</span>
						</div>
						<div className="flex items-center ml-[1px] gap-[45px]">
							<div className="flex shrink-0 items-center bg-[#EF44441A] py-1">
								<span className="text-[#F85149] text-xs my-[3px] ml-4 mr-12" >
									{"110,594.00"}
								</span>
								<span className="text-white text-xs" >
									{"1.359"}
								</span>
							</div>
							<span className="text-[#8B949E] text-xs" >
								{"15.200"}
							</span>
						</div>
						<div className="flex items-center ml-[1px] gap-[60px]">
							<div className="flex shrink-0 items-center bg-[#EF44441A] py-1 pr-[9px]">
								<span className="text-[#F85149] text-xs my-1 ml-4 mr-[47px]" >
									{"110,593.00"}
								</span>
								<span className="text-white text-xs" >
									{"0.990"}
								</span>
							</div>
							<span className="text-[#8B949E] text-xs" >
								{"13.900"}
							</span>
						</div>
						<div className="flex items-center ml-[1px]">
							<div className="flex flex-col shrink-0 items-start relative mr-[77px]">
								<div className="flex flex-col items-start bg-[#EF44441A] py-2 pl-4 pr-[71px]">
									<span className="text-[#F85149] text-xs" >
										{"110,592.00"}
									</span>
								</div>
								<span className="text-white text-xs absolute top-2 right-[-6px]" >
									{"3.025"}
								</span>
							</div>
							<span className="text-[#8B949E] text-xs" >
								{"12.600"}
							</span>
						</div>
						<div className="flex items-center ml-[1px]">
							<div className="flex flex-col shrink-0 items-start relative mr-[94px]">
								<div className="flex flex-col items-start bg-[#EF44441A] py-2 pl-[17px] pr-[57px]">
									<span className="text-[#F85149] text-xs" >
										{"110,591.00"}
									</span>
								</div>
								<span className="text-white text-xs absolute top-2 right-[-19px]" >
									{"1.146"}
								</span>
							</div>
							<span className="text-[#8B949E] text-xs" >
								{"11.300"}
							</span>
						</div>
						<div className="flex items-center mb-[1px] ml-[1px]">
							<div className="flex flex-col shrink-0 items-start bg-[#EF44441A] py-2 pl-4 pr-[39px] mr-2">
								<span className="text-[#F85149] text-xs" >
									{"110,590.00"}
								</span>
							</div>
							<span className="text-white text-xs mr-[71px]" >
								{"2.852"}
							</span>
							<span className="text-[#8B949E] text-xs" >
								{"10.000"}
							</span>
						</div>
						<div className="flex items-center ml-[1px]">
							<div className="flex flex-col shrink-0 items-start bg-[#EF44441A] py-[7px] pl-4 pr-[39px] mr-2">
								<span className="text-[#F85149] text-xs" >
									{"110,590.00"}
								</span>
							</div>
							<span className="text-white text-xs mr-[71px]" >
								{"2.852"}
							</span>
							<span className="text-[#8B949E] text-xs" >
								{"10.000"}
							</span>
						</div>
						<div className="flex items-center ml-[1px]">
							<span className="text-[#F85149] text-xs my-2 ml-4 mr-[17px]" >
								{"110,590.00"}
							</span>
							<span className="text-white text-xs my-2 ml-[30px] mr-[68px]" >
								{"2.852"}
							</span>
							<span className="text-[#8B949E] text-xs" >
								{"10.000"}
							</span>
						</div>
						<div className="flex items-center ml-[1px]">
							<span className="text-[#F85149] text-xs my-2 ml-4 mr-[17px]" >
								{"110,590.00"}
							</span>
							<span className="text-white text-xs my-2 ml-[30px] mr-[68px]" >
								{"2.852"}
							</span>
							<span className="text-[#8B949E] text-xs" >
								{"10.000"}
							</span>
						</div>
						<div className="flex items-center ml-[1px]">
							<span className="text-[#F85149] text-xs my-2 ml-4 mr-[17px]" >
								{"110,590.00"}
							</span>
							<span className="text-white text-xs my-2 ml-[30px] mr-[76px]" >
								{"2.852"}
							</span>
							<span className="text-[#8B949E] text-xs" >
								{"0.190"}
							</span>
						</div>
						<div className="flex flex-col items-center pt-3 pb-[13px] pl-4 pr-[157px] mb-[7px] mx-[1px]">
							<span className="text-[#8B949E] text-xs" >
								{"Spread: 1 (0.001%)"}
							</span>
						</div>
						<div className="flex items-center mb-1.5 ml-[1px]">
							<span className="text-[#2DA44E] text-xs my-[3px] ml-4 mr-[17px]" >
								{"110,589.00"}
							</span>
							<span className="text-white text-xs my-[3px] ml-[31px] mr-[76px]" >
								{"1.799"}
							</span>
							<span className="text-[#8B949E] text-xs" >
								{"0.270"}
							</span>
						</div>
						<div className="flex items-center ml-[1px]">
							<div className="flex flex-col shrink-0 items-center relative mr-[46px]">
								<div className="bg-[#22C55E1A] w-12 h-[35px]">
								</div>
								<span className="text-[#2DA44E] text-xs absolute top-[9px] left-4" >
									{"110,589.00"}
								</span>
							</div>
							<span className="text-white text-xs my-[3px] ml-[31px] mr-[75px]" >
								{"1.799"}
							</span>
							<span className="text-[#8B949E] text-xs" >
								{"8.000"}
							</span>
						</div>
						<div className="flex items-center ml-[1px]">
							<div className="flex flex-col shrink-0 items-start bg-[#22C55E1A] py-[9px] pl-4 pr-[1px] mr-[17px]">
								<span className="text-[#2DA44E] text-xs" >
									{"110,589.00"}
								</span>
							</div>
							<span className="text-white text-xs my-[3px] ml-[31px] mr-[75px]" >
								{"1.799"}
							</span>
							<span className="text-[#8B949E] text-xs" >
								{"8.000"}
							</span>
						</div>
						<div className="flex items-center mb-[1px] ml-[1px] gap-11">
							<div className="flex flex-col shrink-0 items-start">
								<div className="flex flex-col items-center bg-[#22C55E1A] py-[7px]">
									<span className="text-[#2DA44E] text-xs my-[3px] mx-4" >
										{"110,589.00"}
									</span>
								</div>
								<div className="flex flex-col items-end self-stretch">
									<span className="text-white text-xs my-[3px] mx-[31px]" >
										{"1.799"}
									</span>
								</div>
							</div>
							<span className="text-[#8B949E] text-xs" >
								{"8.000"}
							</span>
						</div>
						<div className="flex items-center ml-[1px] gap-11">
							<div className="flex flex-col shrink-0 items-start">
								<div className="flex flex-col items-center bg-[#22C55E1A] py-1.5">
									<span className="text-[#2DA44E] text-xs my-[3px] mx-4" >
										{"110,589.00"}
									</span>
								</div>
								<div className="flex flex-col items-end self-stretch">
									<span className="text-white text-xs my-[3px] mx-[31px]" >
										{"1.799"}
									</span>
								</div>
							</div>
							<span className="text-[#8B949E] text-xs" >
								{"8.000"}
							</span>
						</div>
						<div className="flex items-center ml-[1px]">
							<div className="flex flex-col shrink-0 items-start bg-[#22C55E1A] py-[9px] pl-4 pr-[29px] mr-[19px]">
								<span className="text-[#2DA44E] text-xs" >
									{"110,588.00"}
								</span>
							</div>
							<span className="text-white text-xs mr-[79px]" >
								{"1.755"}
							</span>
							<span className="text-[#8B949E] text-xs" >
								{"9.100"}
							</span>
						</div>
						<div className="flex items-center mb-[1px] ml-[1px]">
							<div className="flex flex-col shrink-0 items-start bg-[#22C55E1A] py-[9px] pl-[17px] pr-[45px] mr-1">
								<span className="text-[#2DA44E] text-xs" >
									{"110,587.00"}
								</span>
							</div>
							<span className="text-white text-xs mr-[72px]" >
								{"0.351"}
							</span>
							<span className="text-[#8B949E] text-xs" >
								{"10.200"}
							</span>
						</div>
						<div className="flex items-center ml-[1px]">
							<div className="flex flex-col shrink-0 items-start relative mr-[94px]">
								<div className="flex flex-col items-start bg-[#22C55E1A] py-[9px] pl-4 pr-14">
									<span className="text-[#2DA44E] text-xs" >
										{"110,586.00"}
									</span>
								</div>
								<span className="text-white text-xs absolute top-[9px] right-[-21px]" >
									{"2.952"}
								</span>
							</div>
							<span className="text-[#8B949E] text-xs" >
								{"11.300"}
							</span>
						</div>
						<div className="flex items-center ml-[1px]">
							<div className="flex flex-col shrink-0 items-start relative mr-[79px]">
								<div className="flex flex-col items-start bg-[#22C55E1A] py-[9px] pl-4 pr-[69px]">
									<span className="text-[#2DA44E] text-xs" >
										{"110,585.00"}
									</span>
								</div>
								<span className="text-white text-xs absolute top-[9px] right-[-6px]" >
									{"0.172"}
								</span>
							</div>
							<span className="text-[#8B949E] text-xs" >
								{"12.400"}
							</span>
						</div>
						<div className="flex items-center ml-[1px]">
							<div className="flex shrink-0 items-center bg-[#22C55E1A] py-1.5 pr-1 mr-[66px]">
								<span className="text-[#2DA44E] text-xs my-[3px] ml-4 mr-[47px]" >
									{"110,584.00"}
								</span>
								<span className="text-white text-xs" >
									{"2.474"}
								</span>
							</div>
							<span className="text-[#8B949E] text-xs" >
								{"13.500"}
							</span>
						</div>
					</div>
					<div className="flex flex-col shrink-0 items-center pb-2.5">
						<div className="flex flex-col items-center bg-[#161B22] rounded-md border border-solid border-[#30363D]">
							<div className="flex items-start p-3">
								<button className="flex flex-col shrink-0 items-start bg-[#0D1117] text-left py-3 px-1.5 mr-[9px] rounded border border-solid border-[#30363D]"
									onClick={()=>alert("Pressed!")}>
									<span className="text-[#A6A6B5] text-xs" >
										{"Cross Margin"}
									</span>
								</button>
								<button className="flex shrink-0 items-start bg-[#0D1117] text-left p-3 mr-2 gap-[11px] rounded-md border border-solid border-[#30363D]"
									onClick={()=>alert("Pressed!")}>
									<span className="text-white text-xs" >
										{"20x"}
									</span>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/l93zjpqt_expires_30_days.png"} 
										className="w-3 h-[15px] rounded-md object-fill"
									/>
								</button>
								<button className="flex flex-col shrink-0 items-start bg-[#0D1117] text-left py-3 px-[15px] rounded border border-solid border-[#30363D]"
									onClick={()=>alert("Pressed!")}>
									<span className="text-[#A6A6B5] text-xs" >
										{"AI Trading"}
									</span>
								</button>
							</div>
							<div className="flex items-start px-3">
								<span className="text-white text-sm my-[15px] ml-[19px] mr-5" >
									{"Market"}
								</span>
								<span className="text-[#8B949E] text-sm my-[15px] ml-[27px] mr-7" >
									{"Limit"}
								</span>
								<span className="text-[#8B949E] text-sm my-[15px] mx-[9px]" >
									{"Advanced"}
								</span>
							</div>
							<div className="flex flex-col items-start py-4">
								<div className="flex items-center bg-[#0D1117] p-1 mb-4 mx-4 gap-[25px] rounded-md">
									<div className="flex flex-col shrink-0 items-start bg-[#2DA44E33] py-[11px] px-[25px] rounded">
										<span className="text-[#2DA44E] text-sm" >
											{"Buy / Long"}
										</span>
									</div>
									<input
										placeholder={"Sell / Short"}
										value={input1}
										onChange={(event)=>onChangeInput1(event.target.value)}
										className="text-[#8B949E] bg-transparent text-sm w-[95px] py-[11px] border-0"
									/>
								</div>
								<div className="flex flex-col items-start mb-6 mx-4 gap-2">
									<div className="flex flex-col items-center pb-[1px]">
										<span className="text-[#9D9DAF] text-xs" >
											{"Amount"}
										</span>
									</div>
									<div className="flex flex-col items-start gap-4">
										<div className="flex items-center bg-[#0D1117] py-[9px] px-3 rounded-md border border-solid border-[#30363D]">
											<input
												placeholder={"5,000"}
												value={input2}
												onChange={(event)=>onChangeInput2(event.target.value)}
												className="text-white bg-transparent text-base w-40 py-[3px] border-0"
											/>
											<div className="flex shrink-0 items-start bg-[#30363D] py-[7px] px-2 gap-1.5 rounded">
												<span className="text-[#8B949E] text-xs font-bold" >
													{"USDT"}
												</span>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/ijt8icic_expires_30_days.png"} 
													className="w-3 h-[15px] rounded object-fill"
												/>
											</div>
										</div>
										<div className="flex flex-col items-end bg-[#30363D] pr-[161px] rounded-[9999px]">
											<div className="bg-[#92318D] w-[79px] h-2 rounded-[9999px]">
											</div>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/nkcq10le_expires_30_days.png"} 
												className="w-[18px] h-2 rounded-[9999px] object-fill"
											/>
										</div>
										<div className="flex items-start">
											<button className="flex flex-col shrink-0 items-start bg-[#0D1117] text-left p-[11px] mr-2 rounded border border-solid border-[#30363D]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-white text-sm" >
													{"0%"}
												</span>
											</button>
											<button className="flex flex-col shrink-0 items-start bg-[#0D1117] text-left py-[11px] px-[7px] mr-[9px] rounded border-2 border-solid border-[#92318D]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-white text-sm font-bold" >
													{"25%"}
												</span>
											</button>
											<button className="flex flex-col shrink-0 items-start bg-[#0D1117] text-left py-[11px] px-[7px] mr-2 rounded border border-solid border-[#30363D]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-white text-sm" >
													{"50%"}
												</span>
											</button>
											<button className="flex flex-col shrink-0 items-start bg-[#0D1117] text-left py-[11px] px-2 mr-[9px] rounded border border-solid border-[#30363D]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-white text-sm" >
													{"75%"}
												</span>
											</button>
											<button className="flex flex-col shrink-0 items-start bg-[#0D1117] text-left py-[11px] px-1 rounded border border-solid border-[#30363D]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-white text-sm" >
													{"100%"}
												</span>
											</button>
										</div>
									</div>
								</div>
								<div className="flex items-center mb-8 mx-4">
									<span className="text-[#C9D1D9] text-sm mr-[123px]" >
										{"Reduce Only"}
									</span>
									<div className="shrink-0 items-start bg-[#92318D] py-0.5 pl-[22px] pr-0.5 rounded-[9999px]">
										<div className="bg-white w-5 h-5 rounded-[9999px] border border-solid border-white">
										</div>
									</div>
								</div>
								<div className="flex items-center mb-4 mx-4 gap-[58px]">
									<span className="text-[#C9D1D9] text-sm" >
										{"Take Profit / Stop Loss"}
									</span>
									<div className="shrink-0 items-start bg-[#92318D] py-0.5 pl-[22px] pr-0.5 rounded-[9999px]">
										<div className="bg-white w-5 h-5 rounded-[9999px] border border-solid border-white">
										</div>
									</div>
								</div>
								<div className="flex items-start mb-2 mx-4 gap-[9px]">
									<div className="flex flex-col shrink-0 items-start gap-[9px]">
										<span className="text-[#9D9DAF] text-xs mr-7" >
											{"Take Profit Price"}
										</span>
										<input
											placeholder={"230.00"}
											value={input3}
											onChange={(event)=>onChangeInput3(event.target.value)}
											className="text-white bg-[#0D1117] text-base p-3 rounded-md border border-solid border-[#30363D]"
										/>
									</div>
									<div className="flex flex-col shrink-0 items-start gap-[9px]">
										<span className="text-[#9D9DAF] text-xs mr-[47px]" >
											{"Take Profit %"}
										</span>
										<input
											placeholder={"%"}
											value={input4}
											onChange={(event)=>onChangeInput4(event.target.value)}
											className="text-[#8B949E] bg-[#0D1117] text-xs font-bold py-4 px-[98px] rounded-md border border-solid border-[#30363D]"
										/>
									</div>
								</div>
								<div className="flex items-start mb-4 mx-4 gap-[9px]">
									<div className="flex flex-col shrink-0 items-start gap-[9px]">
										<span className="text-[#9D9DAF] text-xs mr-[33px]" >
											{"Stop Loss Price"}
										</span>
										<input
											placeholder={"240.00"}
											value={input5}
											onChange={(event)=>onChangeInput5(event.target.value)}
											className="text-white bg-[#0D1117] text-base p-3 rounded-md border border-solid border-[#30363D]"
										/>
									</div>
									<div className="flex flex-col shrink-0 items-start gap-[9px]">
										<span className="text-[#9D9DAF] text-xs mr-[52px]" >
											{"Stop Loss %"}
										</span>
										<input
											placeholder={"%"}
											value={input6}
											onChange={(event)=>onChangeInput6(event.target.value)}
											className="text-[#8B949E] bg-[#0D1117] text-xs font-bold py-4 px-[98px] rounded-md border border-solid border-[#30363D]"
										/>
									</div>
								</div>
								<div className="flex flex-col items-start mb-4 mx-4 gap-2">
									<div className="flex flex-col items-center pb-[1px]">
										<span className="text-[#8B949E] text-xs" >
											{"Max Slippage %"}
										</span>
									</div>
									<input
										placeholder={"0.5"}
										value={input7}
										onChange={(event)=>onChangeInput7(event.target.value)}
										className="text-white bg-[#0D1117] text-base p-3 rounded-md border border-solid border-[#30363D]"
									/>
								</div>
								<div className="flex flex-col items-start bg-[#0D1117] py-3 mb-4 mx-4 rounded-lg">
									<div className="flex items-center mb-2 ml-3 gap-2">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/6qxtx32u_expires_30_days.png"} 
											className="w-3 h-6 object-fill"
										/>
										<span className="text-white text-sm" >
											{"AI Insight"}
										</span>
									</div>
									<span className="text-[#9D9DAF] text-xs mx-3" >
										{"Bullish trend 78% · Resistance $228.50 ·"}
									</span>
									<span className="text-[#9D9DAF] text-xs ml-3" >
										{"Suitable for small position entry"}
									</span>
								</div>
								<div className="flex flex-col items-start pt-4 mb-4 mx-4 gap-2">
									<span className="text-[#9D9DAF] text-sm font-bold" >
										{"Estimation"}
									</span>
									<div className="flex flex-col items-start gap-1">
										<div className="flex items-center pr-0.5">
											<span className="text-[#9D9DAF] text-xs mr-[93px]" >
												{"Liquidation Price"}
											</span>
											<span className="text-white text-xs" >
												{"$39,130.00"}
											</span>
										</div>
										<div className="flex items-center pr-0.5">
											<span className="text-[#9D9DAF] text-xs mr-[172px]" >
												{"Est. Fee"}
											</span>
											<span className="text-white text-xs" >
												{"$2.50"}
											</span>
										</div>
									</div>
								</div>
								<button className="flex flex-col items-start bg-[#92318D] text-left py-3.5 px-[83px] mx-4 rounded-md border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-white text-base font-bold" >
										{"Buy / Long"}
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