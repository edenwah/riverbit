import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	const [input4, onChangeInput4] = useState('');
	const [input5, onChangeInput5] = useState('');
	const [input6, onChangeInput6] = useState('');
	const [input7, onChangeInput7] = useState('');
	const [input8, onChangeInput8] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="flex flex-col self-stretch h-[1159px] gap-[55px]">
				<div className="self-stretch relative">
					<div className="self-stretch bg-white pb-[942px] rounded-lg border-2 border-solid border-[#CED4DA]">
						<div className="flex justify-between items-start self-stretch bg-[#161B22] py-3.5 px-4">
							<div className="flex shrink-0 items-start gap-8">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/gu3tyto7_expires_30_days.png"} 
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
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/9unrpe1c_expires_30_days.png"} 
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
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/li673gs9_expires_30_days.png"} 
										className="w-5 h-5 rounded-md object-fill"
									/>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/9zjkcpnk_expires_30_days.png"} 
										className="w-3 h-[15px] rounded-md object-fill"
									/>
								</div>
								<button className="flex shrink-0 items-center bg-[#161B22] text-left py-2.5 px-4 gap-2.5 rounded-md border border-solid border-[#30363D]"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/x4neq2fk_expires_30_days.png"} 
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
					</div>
					<div className="flex items-start self-stretch bg-[#0D1117] absolute bottom-[-55px] right-0 left-0 p-2 gap-2">
						<div className="flex-1">
							<div className="flex justify-between items-start self-stretch bg-[#161B22] pt-4 pb-[60px] px-3 mb-[516px] rounded-lg border border-solid border-[#30363D]">
								<div className="flex shrink-0 items-center gap-4">
									<div className="flex shrink-0 items-start pr-[1px] gap-2">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/c7vr85wq_expires_30_days.png"} 
											className="w-3 h-7 object-fill"
										/>
										<span className="text-gray-200 text-lg font-bold" >
											{"ETH-PERP"}
										</span>
									</div>
									<button className="flex shrink-0 items-center bg-[#282B2F] text-left p-3 gap-[13px] rounded-md border border-solid border-gray-700"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#A6A6B5] text-xs font-bold" >
											{"Select Asset"}
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/la7t52f9_expires_30_days.png"} 
											className="w-3 h-[15px] rounded-md object-fill"
										/>
									</button>
								</div>
								<div className="flex shrink-0 items-start gap-2.5">
									<button className="flex shrink-0 items-center bg-[#0D1117] text-left p-3 gap-[17px] rounded-md border border-solid border-[#30363D]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#A6A6B5] text-xs" >
											{"Granularity"}
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/n04wku0w_expires_30_days.png"} 
											className="w-3 h-[15px] rounded-md object-fill"
										/>
									</button>
									<button className="flex shrink-0 items-center bg-[#0D1117] text-left p-3 gap-4 rounded-md border border-solid border-[#30363D]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#A6A6B5] text-xs" >
											{"Indicator"}
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/cioz56li_expires_30_days.png"} 
											className="w-3 h-[15px] rounded-md object-fill"
										/>
									</button>
								</div>
							</div>
							<div className="self-stretch bg-[#161B22] pt-[53px] pb-[1px] rounded-md border border-solid border-[#30363D]">
								<div className="flex items-start self-stretch mb-4 mx-[13px]">
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
								<div className="flex justify-between items-start self-stretch px-3 mx-[1px]">
									<div className="flex shrink-0 items-start">
										<span className="text-white text-sm my-[15px] mx-2" >
											{"Balance"}
										</span>
										<span className="text-[#8B949E] text-sm my-[15px] mx-2" >
											{"Positions"}
										</span>
										<span className="text-[#8B949E] text-sm my-[15px] mx-2" >
											{"Open Orders"}
										</span>
										<span className="text-[#8B949E] text-sm my-[15px] mx-2" >
											{"Trade History"}
										</span>
										<span className="text-[#8B949E] text-sm my-[15px] mx-2" >
											{"Funding Rate History"}
										</span>
										<span className="text-[#8B949E] text-sm my-[15px] mx-2" >
											{"Order History"}
										</span>
									</div>
									<div className="flex shrink-0 items-center py-[15px] px-2 gap-[13px]">
										<span className="text-[#8B949E] text-sm" >
											{"Filter"}
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/0b262y8v_expires_30_days.png"} 
											className="w-3 h-[15px] object-fill"
										/>
									</div>
								</div>
								<div className="self-stretch p-3 mx-[1px]">
									<div className="flex items-center self-stretch">
										<span className="text-[#8B949E] text-xs font-bold my-2 ml-[1px]" >
											{"Currency"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold my-2.5 ml-2.5 mr-[1px]" >
											{"Available"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold my-2.5 ml-2.5" >
											{"In Orders"}
										</span>
										<span className="text-[#8B949E] text-xs font-bold my-2.5 ml-2.5" >
											{"Value($)"}
										</span>
									</div>
									<div className="self-stretch">
										<div className="flex items-center self-stretch">
											<span className="text-white text-sm my-2 ml-[1px]" >
												{"USDC"}
											</span>
											<span className="text-white text-sm my-2.5 ml-2.5 mr-[1px]" >
												{"12,345.67"}
											</span>
											<span className="text-white text-sm my-2.5 ml-2.5" >
												{"1,000.00"}
											</span>
											<span className="text-white text-sm my-2.5 ml-2.5" >
												{"$13,345.67"}
											</span>
										</div>
										<div className="flex items-center self-stretch">
											<span className="text-white text-sm my-2 ml-[1px]" >
												{"Points"}
											</span>
											<span className="text-white text-sm my-2.5 ml-2.5 mr-[1px]" >
												{"1,250,000"}
											</span>
											<span className="text-white text-sm my-2.5 ml-2.5" >
												{"0"}
											</span>
											<span className="text-white text-sm my-2.5 ml-2.5" >
												{"Points"}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col shrink-0 items-center relative">
							<div className="flex flex-col items-start bg-[#161B22] py-[1px] rounded-md border border-solid border-[#30363D]">
								<div className="flex items-start px-3 mb-1 mx-[1px]">
									<span className="text-white text-sm my-[15px] mx-[26px]" >
										{"Order Book"}
									</span>
									<span className="text-[#8B949E] text-sm my-[15px] mx-[41px]" >
										{"Trades"}
									</span>
								</div>
								<div className="flex items-center mb-1 ml-[33px]">
									<span className="text-[#8B949E] text-xs mr-[34px]" >
										{"Price"}
									</span>
									<span className="text-[#8B949E] text-xs my-1 mx-[35px]" >
										{"Size"}
									</span>
									<span className="text-[#8B949E] text-xs my-1 ml-[50px] mr-[17px]" >
										{"Total"}
									</span>
								</div>
								<div className="flex items-center mb-[1px] ml-[1px] gap-[23px]">
									<div className="flex shrink-0 items-center bg-[#EF44441A] py-[5px] px-[15px]">
										<span className="text-[#F85149] text-xs mr-[18px]" >
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
								<div className="flex items-center mx-[1px]">
									<div className="flex shrink-0 items-start bg-[#EF44441A] py-[7px] px-[15px] mr-1.5 gap-12">
										<span className="text-[#F85149] text-xs" >
											{"110,594.00"}
										</span>
										<span className="text-white text-xs" >
											{"1.359"}
										</span>
									</div>
									<span className="text-[#8B949E] text-xs my-[3px] ml-[39px] mr-[18px]" >
										{"15.200"}
									</span>
								</div>
								<div className="flex items-center mx-[1px]">
									<div className="flex shrink-0 items-start bg-[#EF44441A] py-2 pl-[15px] pr-2.5 mr-[21px] gap-[47px]">
										<span className="text-[#F85149] text-xs" >
											{"110,593.00"}
										</span>
										<span className="text-white text-xs" >
											{"0.990"}
										</span>
									</div>
									<span className="text-[#8B949E] text-xs my-1 ml-[39px] mr-[17px]" >
										{"13.900"}
									</span>
								</div>
								<div className="flex items-center mx-[1px]">
									<div className="flex flex-col shrink-0 items-start relative mr-[38px]">
										<div className="flex flex-col items-start bg-[#EF44441A] py-2 pl-[15px] pr-[72px]">
											<span className="text-[#F85149] text-xs" >
												{"110,592.00"}
											</span>
										</div>
										<span className="text-white text-xs absolute top-2 right-[-5px]" >
											{"3.025"}
										</span>
									</div>
									<span className="text-[#8B949E] text-xs my-[3px] ml-[39px] mr-[18px]" >
										{"12.600"}
									</span>
								</div>
								<div className="flex items-center mx-[1px]">
									<div className="flex flex-col shrink-0 items-start relative mr-[53px]">
										<div className="flex flex-col items-start bg-[#EF44441A] py-2 pl-4 pr-[59px]">
											<span className="text-[#F85149] text-xs" >
												{"110,591.00"}
											</span>
										</div>
										<span className="text-white text-xs absolute top-2 right-[-18px]" >
											{"1.146"}
										</span>
									</div>
									<span className="text-[#8B949E] text-xs my-[3px] ml-[41px] mr-[18px]" >
										{"11.300"}
									</span>
								</div>
								<div className="flex items-center mb-[1px] mx-[1px]">
									<div className="flex flex-col shrink-0 items-start bg-[#EF44441A] py-2 pl-[15px] pr-10 mr-[7px]">
										<span className="text-[#F85149] text-xs" >
											{"110,590.00"}
										</span>
									</div>
									<span className="text-white text-xs mr-8" >
										{"2.852"}
									</span>
									<span className="text-[#8B949E] text-xs my-2 ml-[39px] mr-[18px]" >
										{"10.000"}
									</span>
								</div>
								<div className="flex items-center mx-[1px]">
									<div className="flex flex-col shrink-0 items-start bg-[#EF44441A] py-[7px] pl-[15px] pr-10 mr-[7px]">
										<span className="text-[#F85149] text-xs" >
											{"110,590.00"}
										</span>
									</div>
									<span className="text-white text-xs mr-8" >
										{"2.852"}
									</span>
									<span className="text-[#8B949E] text-xs my-[7px] ml-[39px] mr-[18px]" >
										{"10.000"}
									</span>
								</div>
								<div className="flex items-start mx-[1px]">
									<div className="flex flex-col shrink-0 items-start bg-[#EF44441A] py-2 px-[15px] mr-[3px]">
										<span className="text-[#F85149] text-xs" >
											{"110,590.00"}
										</span>
									</div>
									<span className="text-white text-xs my-2 mx-[30px]" >
										{"2.852"}
									</span>
									<span className="text-[#8B949E] text-xs my-2 ml-[39px] mr-[18px]" >
										{"10.000"}
									</span>
								</div>
								<div className="flex items-start mx-[1px]">
									<div className="flex flex-col shrink-0 items-center relative mr-[35px]">
										<div className="bg-[#EF44441A] w-[58px] h-8">
										</div>
										<span className="text-[#F85149] text-xs absolute top-2 left-[15px]" >
											{"110,590.00"}
										</span>
									</div>
									<span className="text-white text-xs my-2 mx-[30px]" >
										{"2.852"}
									</span>
									<span className="text-[#8B949E] text-xs my-2 ml-[39px] mr-[18px]" >
										{"10.000"}
									</span>
								</div>
								<div className="flex items-center mb-3 ml-4">
									<span className="text-[#F85149] text-xs mr-[17px]" >
										{"110,590.00"}
									</span>
									<span className="text-white text-xs my-2 mx-[30px]" >
										{"2.852"}
									</span>
									<span className="text-[#8B949E] text-xs my-2 ml-[47px] mr-[18px]" >
										{"0.190"}
									</span>
								</div>
								<span className="text-[#8B949E] text-xs mb-5 ml-[17px]" >
									{"Spread: 1 (0.001%)"}
								</span>
								<div className="flex items-center mb-3 ml-4">
									<span className="text-[#2DA44E] text-xs mr-[18px]" >
										{"110,589.00"}
									</span>
									<span className="text-white text-xs my-[3px] mx-8" >
										{"1.799"}
									</span>
									<span className="text-[#8B949E] text-xs my-[3px] ml-[46px] mr-[17px]" >
										{"0.270"}
									</span>
								</div>
								<div className="flex items-center mb-1.5 ml-4">
									<span className="text-[#2DA44E] text-xs mr-[18px]" >
										{"110,589.00"}
									</span>
									<span className="text-white text-xs my-[3px] mx-8" >
										{"1.799"}
									</span>
									<span className="text-[#8B949E] text-xs my-[3px] ml-[45px] mr-[17px]" >
										{"8.000"}
									</span>
								</div>
								<div className="flex items-center mx-[1px]">
									<div className="flex flex-col shrink-0 items-start bg-[#22C55E1A] py-[9px] pl-[15px] pr-0.5 mr-4">
										<span className="text-[#2DA44E] text-xs" >
											{"110,589.00"}
										</span>
									</div>
									<span className="text-white text-xs my-[3px] mx-8" >
										{"1.799"}
									</span>
									<span className="text-[#8B949E] text-xs my-[3px] ml-[45px] mr-[17px]" >
										{"8.000"}
									</span>
								</div>
								<div className="flex items-center mb-[1px] mx-[1px]">
									<div className="flex flex-col shrink-0 items-start">
										<div className="flex flex-col items-start bg-[#22C55E1A] py-2.5 px-[15px]">
											<span className="text-[#2DA44E] text-xs" >
												{"110,589.00"}
											</span>
										</div>
										<span className="text-white text-xs my-[3px] ml-[125px] mr-8" >
											{"1.799"}
										</span>
									</div>
									<span className="text-[#8B949E] text-xs my-[3px] ml-[45px] mr-[17px]" >
										{"8.000"}
									</span>
								</div>
								<div className="flex items-center mx-[1px]">
									<div className="flex flex-col shrink-0 items-start">
										<div className="flex flex-col items-start bg-[#22C55E1A] py-[9px] px-[15px]">
											<span className="text-[#2DA44E] text-xs" >
												{"110,589.00"}
											</span>
										</div>
										<span className="text-white text-xs my-[3px] ml-[125px] mr-8" >
											{"1.799"}
										</span>
									</div>
									<span className="text-[#8B949E] text-xs my-[3px] ml-[45px] mr-[17px]" >
										{"8.000"}
									</span>
								</div>
								<div className="flex items-center mx-[1px]">
									<div className="flex flex-col shrink-0 items-start bg-[#22C55E1A] py-[9px] pl-[15px] pr-[31px] mr-[19px]">
										<span className="text-[#2DA44E] text-xs" >
											{"110,588.00"}
										</span>
									</div>
									<span className="text-white text-xs mr-[33px]" >
										{"1.755"}
									</span>
									<span className="text-[#8B949E] text-xs my-[3px] ml-[47px] mr-[18px]" >
										{"9.100"}
									</span>
								</div>
								<div className="flex items-center mb-[1px] mx-[1px]">
									<div className="flex flex-col shrink-0 items-start bg-[#22C55E1A] py-[9px] pl-4 pr-[46px] mr-[3px]">
										<span className="text-[#2DA44E] text-xs" >
											{"110,587.00"}
										</span>
									</div>
									<span className="text-white text-xs mr-[33px]" >
										{"0.351"}
									</span>
									<span className="text-[#8B949E] text-xs my-[3px] ml-[39px] mr-[18px]" >
										{"10.200"}
									</span>
								</div>
								<div className="flex items-center pr-[1px] mx-[1px]">
									<div className="flex flex-col shrink-0 items-start relative mr-[53px]">
										<div className="flex flex-col items-start bg-[#22C55E1A] py-[9px] pl-[15px] pr-[55px]">
											<span className="text-[#2DA44E] text-xs" >
												{"110,586.00"}
											</span>
										</div>
										<span className="text-white text-xs absolute top-[9px] right-[-20px]" >
											{"2.952"}
										</span>
									</div>
									<span className="text-[#8B949E] text-xs my-[3px] ml-[41px] mr-[18px]" >
										{"11.300"}
									</span>
								</div>
								<div className="flex items-center pr-[1px] mx-[1px]">
									<div className="flex flex-col shrink-0 items-start relative mr-10">
										<div className="flex flex-col items-start bg-[#22C55E1A] py-[9px] pl-[15px] pr-[68px]">
											<span className="text-[#2DA44E] text-xs" >
												{"110,585.00"}
											</span>
										</div>
										<span className="text-white text-xs absolute top-[9px] right-[-6px]" >
											{"0.172"}
										</span>
									</div>
									<span className="text-[#8B949E] text-xs my-[3px] ml-[39px] mr-[17px]" >
										{"12.400"}
									</span>
								</div>
								<div className="flex items-center pr-[1px] mx-[1px]">
									<div className="flex shrink-0 items-center bg-[#22C55E1A] py-1.5 pr-[5px] mr-[27px]">
										<span className="text-[#2DA44E] text-xs my-[3px] ml-[15px] mr-[45px]" >
											{"110,584.00"}
										</span>
										<span className="text-white text-xs" >
											{"2.474"}
										</span>
									</div>
									<span className="text-[#8B949E] text-xs my-[3px] ml-[39px] mr-[18px]" >
										{"13.500"}
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start bg-[#272B2F] w-[910px] absolute top-[58px] right-56 rounded-lg border border-solid border-gray-700">
								<div className="flex items-center self-stretch mt-[25px] mb-6 mx-[25px] gap-4">
									<div className="flex flex-1 items-center bg-[#0D1117] py-[13px] rounded-lg border border-solid border-[#30363D]">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/alyycaw7_expires_30_days.png"} 
											className="w-4 h-6 mx-4 object-fill"
										/>
										<input
											placeholder={"Search"}
											value={input1}
											onChange={(event)=>onChangeInput1(event.target.value)}
											className="flex-1 self-stretch text-[#ADAEBC] bg-transparent text-base border-0"
										/>
									</div>
									<div className="flex shrink-0 items-center bg-[#0D1117] p-1 gap-[37px] rounded-md border border-solid border-[#30363D]">
										<button className="flex flex-col shrink-0 items-start bg-[#92318D] text-left py-[11px] px-[27px] rounded border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-white text-sm" >
												{"Strict"}
											</span>
										</button>
										<span className="text-[#8B949E] text-sm" >
											{"All"}
										</span>
									</div>
								</div>
								<div className="flex items-center ml-[13px]">
									<span className="text-white text-sm my-[15px] ml-[3px] mr-[19px]" >
										{"All Coins"}
									</span>
									<span className="text-[#8B949E] text-sm my-[15px] ml-[7px] mr-[23px]" >
										{"Perps"}
									</span>
									<span className="text-[#8B949E] text-sm my-[15px] ml-[3px] mr-[19px]" >
										{"Spot"}
									</span>
									<span className="text-[#8B949E] text-sm my-[15px] ml-[9px] mr-[25px]" >
										{"Trending"}
									</span>
									<span className="text-[#8B949E] text-sm my-[15px] ml-3.5 mr-[30px]" >
										{"DEX Only"}
									</span>
									<span className="text-[#8B949E] text-sm my-[15px] ml-[9px] mr-[25px]" >
										{"Pre-launch"}
									</span>
									<span className="text-[#8B949E] text-sm my-[15px] ml-[9px] mr-[25px]" >
										{"AI"}
									</span>
									<span className="text-[#8B949E] text-sm my-[15px] ml-[9px] mr-[25px]" >
										{"DeFi"}
									</span>
									<span className="text-[#8B949E] text-sm my-[15px] ml-[9px] mr-[25px]" >
										{"Layer 1"}
									</span>
									<span className="text-[#8B949E] text-sm my-[15px] ml-[9px] mr-[34px]" >
										{"Layer 2"}
									</span>
									<span className="text-[#8B949E] text-sm" >
										{"Meme"}
									</span>
								</div>
								<div className="flex items-center mb-[1px] ml-[1px]">
									<span className="text-[#8B949E] text-xs font-bold my-[18px] ml-4 mr-28" >
										{"Symbol"}
									</span>
									<span className="text-[#8B949E] text-xs font-bold my-[18px] mx-4" >
										{"Leverage"}
									</span>
									<span className="text-[#8B949E] text-xs font-bold my-[18px] ml-[34px] mr-3" >
										{"Last Price"}
									</span>
									<span className="text-[#8B949E] text-xs font-bold my-[18px] ml-[72px] mr-3" >
										{"24h Change"}
									</span>
									<span className="text-[#8B949E] text-xs font-bold my-[18px] ml-[29px] mr-[11px]" >
										{"8h Funding"}
									</span>
									<span className="text-[#8B949E] text-xs font-bold my-[18px] ml-[52px] mr-[55px]" >
										{"24h Volume"}
									</span>
									<span className="text-[#8B949E] text-xs font-bold" >
										{"Open Interest"}
									</span>
								</div>
								<div className="flex items-center ml-[1px]">
									<div className="flex shrink-0 items-center p-4 gap-3">
										<button className="flex flex-col shrink-0 items-start bg-[#F97316] text-left py-2 px-3 rounded-[9999px] border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-white text-sm font-bold" >
												{"₿"}
											</span>
										</button>
										<div className="flex flex-col shrink-0 items-start gap-[1px]">
											<div className="flex flex-col items-center py-0.5">
												<span className="text-white text-base font-bold" >
													{"BTC-USD"}
												</span>
											</div>
											<span className="text-gray-400 text-xs mr-[30px]" >
												{"Bitcoin"}
											</span>
										</div>
									</div>
									<span className="text-white text-sm my-7 ml-4 mr-[52px]" >
										{"40x"}
									</span>
									<span className="text-white text-base font-bold my-[26px] ml-[23px] mr-3" >
										{"$113,479"}
									</span>
									<span className="text-[#2DA44E] text-base my-[26px] ml-[13px] mr-3.5" >
										{"+2,530 / +2.28%"}
									</span>
									<span className="text-white text-sm my-7 ml-[37px] mr-[13px]" >
										{"0.0100%"}
									</span>
									<span className="text-white text-sm my-7 ml-[21px] mr-[41px]" >
										{"$3,294,291,814"}
									</span>
									<span className="text-white text-sm" >
										{"$3,989,216,288"}
									</span>
								</div>
								<div className="flex items-center ml-[1px]">
									<div className="flex shrink-0 items-center p-4 gap-3">
										<button className="flex flex-col shrink-0 items-start bg-blue-500 text-left py-2 px-3 rounded-[9999px] border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-white text-sm font-bold" >
												{"E"}
											</span>
										</button>
										<div className="flex flex-col shrink-0 items-start gap-[1px]">
											<div className="flex flex-col items-center py-0.5">
												<span className="text-white text-base font-bold" >
													{"ETH-USD"}
												</span>
											</div>
											<span className="text-gray-400 text-xs mr-3.5" >
												{"Ethereum"}
											</span>
										</div>
									</div>
									<span className="text-white text-sm my-7 ml-4 mr-[53px]" >
										{"25x"}
									</span>
									<span className="text-white text-base font-bold my-[26px] ml-6 mr-3" >
										{"$4,350.7"}
									</span>
									<span className="text-[#2DA44E] text-base my-[26px] ml-[26px] mr-[27px]" >
										{"+66.3 / +1.55%"}
									</span>
									<span className="text-white text-sm my-7 ml-[37px] mr-[13px]" >
										{"0.0100%"}
									</span>
									<span className="text-white text-sm my-7 ml-4 mr-[38px]" >
										{"$2,603,760,484"}
									</span>
									<span className="text-white text-sm" >
										{"$2,911,409,736"}
									</span>
								</div>
								<div className="flex items-center ml-[1px]">
									<div className="flex shrink-0 items-center p-4 gap-3">
										<button className="flex flex-col shrink-0 items-start bg-[#A855F7] text-left py-[7px] px-[11px] rounded-[9999px] border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-white text-sm font-bold" >
												{"S"}
											</span>
										</button>
										<div className="flex flex-col shrink-0 items-start gap-[1px]">
											<div className="flex flex-col items-center py-0.5">
												<span className="text-white text-base font-bold" >
													{"SOL-USD"}
												</span>
											</div>
											<span className="text-gray-400 text-xs mr-[30px]" >
												{"Solana"}
											</span>
										</div>
									</div>
									<span className="text-white text-sm my-7 ml-4 mr-[52px]" >
										{"20x"}
									</span>
									<span className="text-white text-base font-bold my-[26px] ml-[31px] mr-[11px]" >
										{"$221.94"}
									</span>
									<span className="text-[#2DA44E] text-base my-[26px] ml-[25px] mr-[26px]" >
										{"+7.47 / +3.48%"}
									</span>
									<span className="text-white text-sm my-7 ml-[37px] mr-[13px]" >
										{"0.0100%"}
									</span>
									<span className="text-white text-sm my-7 ml-[27px] mr-[35px]" >
										{"$1,314,153,194"}
									</span>
									<span className="text-white text-sm" >
										{"$1,516,333,384"}
									</span>
								</div>
								<div className="flex items-center mb-4 ml-[1px]">
									<div className="flex shrink-0 items-center p-4 gap-3">
										<button className="flex flex-col shrink-0 items-start bg-pink-500 text-left py-2 px-[11px] rounded-[9999px] border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-white text-sm font-bold" >
												{"H"}
											</span>
										</button>
										<div className="flex flex-col shrink-0 items-start gap-[1px]">
											<div className="flex flex-col items-center py-0.5">
												<span className="text-white text-base font-bold" >
													{"HYPE-USD"}
												</span>
											</div>
											<span className="text-gray-400 text-xs mr-3.5" >
												{"Hyperliquid"}
											</span>
										</div>
									</div>
									<span className="text-white text-sm my-7 ml-4 mr-[54px]" >
										{"10x"}
									</span>
									<span className="text-white text-base font-bold my-[26px] ml-[30px] mr-[13px]" >
										{"$54.531"}
									</span>
									<span className="text-[#2DA44E] text-base my-[26px] ml-[17px] mr-[18px]" >
										{"+1.625 / +3.07%"}
									</span>
									<span className="text-white text-sm my-7 ml-[37px] mr-[13px]" >
										{"0.0100%"}
									</span>
									<span className="text-white text-sm my-7 ml-8 mr-[37px]" >
										{"$709,614,355"}
									</span>
									<span className="text-white text-sm" >
										{"$1,487,051,890"}
									</span>
								</div>
								<div className="flex items-center self-stretch mb-8 mx-[17px]">
									<div className="flex shrink-0 items-center pr-[7px] mr-8 gap-3">
										<button className="flex flex-col shrink-0 items-start bg-pink-500 text-left py-2 px-[11px] rounded-[9999px] border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-white text-sm font-bold" >
												{"H"}
											</span>
										</button>
										<div className="flex flex-col shrink-0 items-start gap-[1px]">
											<div className="flex flex-col items-center py-0.5">
												<span className="text-white text-base font-bold" >
													{"HYPE/USDC"}
												</span>
											</div>
											<span className="text-gray-400 text-xs mr-[57px]" >
												{"SPOT"}
											</span>
										</div>
									</div>
									<span className="text-white text-sm mr-[102px]" >
										{"–"}
									</span>
									<span className="text-white text-base font-bold mr-[31px]" >
										{"$54.511"}
									</span>
									<span className="text-[#2DA44E] text-base mr-[106px]" >
										{"+1.593 / +3.01%"}
									</span>
									<span className="text-white text-sm mr-[42px]" >
										{"–"}
									</span>
									<span className="text-white text-sm mr-[130px]" >
										{"$250,910,508"}
									</span>
									<span className="text-white text-sm" >
										{"–"}
									</span>
								</div>
								<div className="flex items-center self-stretch mb-4 mx-[17px]">
									<span className="flex-1 text-[#8B949E] text-sm" >
										{"Showing 5 of 247 markets"}
									</span>
									<span className="text-[#8B949E] text-sm mr-2" >
										{"Press"}
									</span>
									<button className="flex flex-col shrink-0 items-start bg-gray-600 text-left py-1 px-2 mr-[9px] rounded border-0"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#8B949E] text-xs" >
											{"ESC"}
										</span>
									</button>
									<span className="text-[#8B949E] text-sm" >
										{"to close"}
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col shrink-0 items-start bg-[#161B22] pb-4 rounded-md border border-solid border-[#30363D]">
							<div className="flex items-start p-3 gap-2">
								<button className="flex flex-col shrink-0 items-start bg-[#0D1117] text-left py-3 px-1.5 rounded border border-solid border-[#30363D]"
									onClick={()=>alert("Pressed!")}>
									<span className="text-[#A6A6B5] text-xs" >
										{"Cross Margin"}
									</span>
								</button>
								<button className="flex shrink-0 items-start bg-[#0D1117] text-left p-3 gap-[11px] rounded-md border border-solid border-[#30363D]"
									onClick={()=>alert("Pressed!")}>
									<span className="text-white text-xs" >
										{"20x"}
									</span>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/e8557dfa_expires_30_days.png"} 
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
							<div className="flex items-start pl-3 pr-[13px] mb-4">
								<span className="text-white text-sm my-[15px] mx-[19px]" >
									{"Market"}
								</span>
								<span className="text-[#8B949E] text-sm my-[15px] ml-[27px] mr-7" >
									{"Limit"}
								</span>
								<span className="text-[#8B949E] text-sm my-[15px] mx-2.5" >
									{"Advanced"}
								</span>
							</div>
							<div className="flex items-center bg-[#0D1117] py-1 pl-1 pr-[5px] mb-4 mx-4 gap-6 rounded-md">
								<div className="flex flex-col shrink-0 items-start bg-[#2DA44E33] py-[11px] px-6 rounded">
									<span className="text-[#2DA44E] text-sm" >
										{"Buy / Long"}
									</span>
								</div>
								<input
									placeholder={"Sell / Short"}
									value={input2}
									onChange={(event)=>onChangeInput2(event.target.value)}
									className="text-[#8B949E] bg-transparent text-sm w-[95px] py-[11px] border-0"
								/>
							</div>
							<div className="flex flex-col items-start mb-4 mx-4 gap-2">
								<div className="flex flex-col items-center pb-[1px]">
									<span className="text-[#9D9DAF] text-xs" >
										{"Amount"}
									</span>
								</div>
								<div className="flex flex-col items-start gap-4">
									<div className="flex items-center bg-[#0D1117] py-[9px] px-3 rounded-md border border-solid border-[#30363D]">
										<input
											placeholder={"5,000"}
											value={input3}
											onChange={(event)=>onChangeInput3(event.target.value)}
											className="text-white bg-transparent text-base w-40 py-[3px] border-0"
										/>
										<div className="flex shrink-0 items-start bg-[#30363D] py-[7px] pl-2 pr-[7px] gap-1.5 rounded">
											<span className="text-[#8B949E] text-xs font-bold" >
												{"USDT"}
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/c24jtuou_expires_30_days.png"} 
												className="w-3 h-[15px] rounded object-fill"
											/>
										</div>
									</div>
									<div className="flex flex-col items-end bg-[#30363D] pr-[162px] rounded-[9999px]">
										<div className="bg-[#92318D] w-[79px] h-2 rounded-[9999px]">
										</div>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/lmda6a6m_expires_30_days.png"} 
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
										<button className="flex flex-col shrink-0 items-start bg-[#0D1117] text-left py-[11px] px-[3px] rounded border border-solid border-[#30363D]"
											onClick={()=>alert("Pressed!")}>
											<span className="text-white text-sm" >
												{"100%"}
											</span>
										</button>
									</div>
								</div>
							</div>
							<div className="flex items-center py-2 pr-[1px] mb-4 mx-4">
								<span className="text-[#C9D1D9] text-sm mr-[123px]" >
									{"Reduce Only"}
								</span>
								<div className="shrink-0 items-start bg-[#92318D] py-0.5 pl-[22px] pr-[1px] rounded-[9999px]">
									<div className="bg-white w-5 h-5 rounded-[9999px] border border-solid border-white">
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start mb-4 mx-4 gap-2">
								<div className="flex items-center py-2 pr-[1px] gap-[58px]">
									<span className="text-[#C9D1D9] text-sm" >
										{"Take Profit / Stop Loss"}
									</span>
									<div className="shrink-0 items-start bg-[#92318D] py-0.5 pl-[22px] pr-[1px] rounded-[9999px]">
										<div className="bg-white w-5 h-5 rounded-[9999px] border border-solid border-white">
										</div>
									</div>
								</div>
								<div className="flex items-start pr-[1px] gap-2">
									<div className="flex flex-col shrink-0 items-start gap-[9px]">
										<span className="text-[#9D9DAF] text-xs mr-[29px]" >
											{"Take Profit Price"}
										</span>
										<input
											placeholder={"230.00"}
											value={input4}
											onChange={(event)=>onChangeInput4(event.target.value)}
											className="text-white bg-[#0D1117] text-base p-3 rounded-md border border-solid border-[#30363D]"
										/>
									</div>
									<div className="flex flex-col shrink-0 items-start gap-[9px]">
										<span className="text-[#9D9DAF] text-xs mr-[47px]" >
											{"Take Profit %"}
										</span>
										<div className="flex flex-col items-start bg-[#0D1117] py-[9px] pl-[66px] pr-[11px] rounded-md border border-solid border-[#30363D]">
											<div className="flex items-center bg-[#30363D] py-[7px] pl-2 pr-[7px] rounded">
												<input
													placeholder={"%"}
													value={input5}
													onChange={(event)=>onChangeInput5(event.target.value)}
													className="text-[#8B949E] bg-transparent text-xs font-bold w-[15px] py-[1px] border-0"
												/>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/a9tttlvz_expires_30_days.png"} 
													className="w-3 h-[15px] rounded object-fill"
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="flex items-start pr-[1px] gap-2">
									<div className="flex flex-col shrink-0 items-start gap-[9px]">
										<span className="text-[#9D9DAF] text-xs mr-[34px]" >
											{"Stop Loss Price"}
										</span>
										<input
											placeholder={"240.00"}
											value={input6}
											onChange={(event)=>onChangeInput6(event.target.value)}
											className="text-white bg-[#0D1117] text-base p-3 rounded-md border border-solid border-[#30363D]"
										/>
									</div>
									<div className="flex flex-col shrink-0 items-start gap-[9px]">
										<span className="text-[#9D9DAF] text-xs mr-[52px]" >
											{"Stop Loss %"}
										</span>
										<div className="flex flex-col items-start bg-[#0D1117] py-[9px] pl-[66px] pr-[11px] rounded-md border border-solid border-[#30363D]">
											<div className="flex items-center bg-[#30363D] py-[7px] pl-2 pr-[7px] rounded">
												<input
													placeholder={"%"}
													value={input7}
													onChange={(event)=>onChangeInput7(event.target.value)}
													className="text-[#8B949E] bg-transparent text-xs font-bold w-[15px] py-[1px] border-0"
												/>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/ocvhveqe_expires_30_days.png"} 
													className="w-3 h-[15px] rounded object-fill"
												/>
											</div>
										</div>
									</div>
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
									value={input8}
									onChange={(event)=>onChangeInput8(event.target.value)}
									className="text-white bg-[#0D1117] text-base p-3 rounded-md border border-solid border-[#30363D]"
								/>
							</div>
							<div className="flex flex-col items-start bg-[#0D1117] py-3 mb-4 mx-4 rounded-lg">
								<div className="flex items-center mb-2 ml-3 gap-2">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/zn1zj6me_expires_30_days.png"} 
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