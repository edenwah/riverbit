import React, {useState} from "react";
import RiverbitLogo from "../components/RiverbitLogo";
import DesktopNav from "../components/DesktopNav";
import Footer from "../components/Footer";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	const [input4, onChangeInput4] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-white h-[1898px] rounded-lg border-2 border-solid border-[#CED4DA]">
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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/ac1ta5z3_expires_30_days.png"} 
								className="w-5 h-5 rounded-md object-fill"
							/>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/bi8jcghx_expires_30_days.png"} 
								className="w-3 h-[15px] rounded-md object-fill"
							/>
						</div>
						<button className="flex shrink-0 items-center bg-[#161B22] text-left py-2.5 px-4 gap-2.5 rounded-md border border-solid border-[#30363D]"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/d4r1i1h1_expires_30_days.png"} 
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
						<div className="flex flex-col items-start self-stretch mx-6 gap-[17px]">
							<span className="text-white text-3xl font-bold" >
								{"Announcements"}
							</span>
							<div className="flex justify-between items-center self-stretch">
								<div className="flex flex-col shrink-0 items-center">
									<span className="text-[#8B949E] text-base" >
										{"System notifications and product updates"}
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
						<div className="flex items-start self-stretch mx-6 gap-3">
							<div className="flex flex-col shrink-0 items-center gap-2.5">
								<div className="flex flex-col items-start bg-[#161B22] py-[25px] gap-4 rounded-lg border border-solid border-[#30363D]">
									<button className="flex items-start bg-[#0D1117] text-left py-3 px-4 mx-[25px] rounded-md border border-solid border-[#30363D]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#ADAEBC] text-base mr-[159px]" >
											{"Search..."}
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/rijdwqwb_expires_30_days.png"} 
											className="w-4 h-6 rounded-md object-fill"
										/>
									</button>
									<span className="text-white text-lg font-bold ml-[25px]" >
										{"Announcements"}
									</span>
									<div className="flex flex-col items-start ml-[25px] gap-3">
										<span className="text-[#92318D] text-sm font-bold" >
											{"All"}
										</span>
										<span className="text-[#8B949E] text-sm" >
											{"Product Updates"}
										</span>
										<span className="text-[#8B949E] text-sm" >
											{"Maintenance Notices"}
										</span>
										<span className="text-[#8B949E] text-sm" >
											{"Events"}
										</span>
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
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/46x3x7zg_expires_30_days.png"} 
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
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/9fr0ws12_expires_30_days.png"} 
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
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/5prdw6in_expires_30_days.png"} 
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
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/mjaepjda_expires_30_days.png"} 
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
							<div className="flex flex-1 flex-col items-start bg-[#161B22] py-[1px] rounded-lg border border-solid border-[#30363D]">
								<span className="text-white text-xl font-bold my-6 ml-[25px] mr-[1px]" >
									{"Announcements List"}
								</span>
								<div className="self-stretch mx-[1px]">
									<div className="flex items-start self-stretch p-6 gap-3">
										<div className="flex flex-1 flex-col items-start">
											<span className="text-white text-lg font-bold mb-2" >
												{"RiverBit V2.0 Official Launch – Brand New Trading Engine Live"}
											</span>
											<div className="flex items-center self-stretch mb-2 gap-4">
												<button className="flex flex-col shrink-0 items-start bg-[#30363D] text-left py-1 px-2 rounded border-0"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#8B949E] text-xs font-bold" >
														{"Major Update"}
													</span>
												</button>
												<span className="text-[#8B949E] text-sm" >
													{"Date: 2025-09-06"}
												</span>
											</div>
											<span className="text-[#8B949E] text-sm my-0.5" >
												{"Enhanced performance and new features for better trading experience"}
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-center pb-[1px]">
											<span className="text-[#92318D] text-sm font-bold" >
												{"View Details"}
											</span>
										</div>
									</div>
									<div className="flex items-start self-stretch p-6 gap-3">
										<div className="flex flex-1 flex-col items-start">
											<span className="text-white text-lg font-bold mb-2" >
												{"Foundation LP Pool Officially Open – Limited to 100 Seats"}
											</span>
											<div className="flex items-center self-stretch mb-2 gap-4">
												<button className="flex flex-col shrink-0 items-start bg-[#30363D] text-left py-1 px-2 rounded border-0"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#8B949E] text-xs font-bold" >
														{"New Feature"}
													</span>
												</button>
												<span className="text-[#8B949E] text-sm" >
													{"Date: 2025-09-05"}
												</span>
											</div>
											<span className="text-[#8B949E] text-sm my-0.5" >
												{"Exclusive access to high-yield liquidity provision opportunities"}
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-center pb-[1px]">
											<span className="text-[#92318D] text-sm font-bold" >
												{"View Details"}
											</span>
										</div>
									</div>
									<div className="flex items-start self-stretch p-6 gap-3">
										<div className="flex flex-1 flex-col items-start">
											<span className="text-white text-lg font-bold mb-2" >
												{"System Maintenance Completed – Significant Performance Boost"}
											</span>
											<div className="flex items-center self-stretch mb-2 gap-[17px]">
												<button className="flex flex-col shrink-0 items-start bg-[#30363D] text-left py-1 px-2 rounded border-0"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#8B949E] text-xs font-bold" >
														{"Maintenance"}
													</span>
												</button>
												<span className="text-[#8B949E] text-sm" >
													{"Date: 2025-09-04"}
												</span>
											</div>
											<span className="text-[#8B949E] text-sm my-0.5" >
												{"System optimization completed with improved speed and reliability"}
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-center pb-[1px]">
											<span className="text-[#92318D] text-sm font-bold" >
												{"View Details"}
											</span>
										</div>
									</div>
									<div className="flex items-start self-stretch p-6 gap-3">
										<div className="flex flex-1 flex-col">
											<span className="text-white text-lg font-bold mb-2" >
												{"Mid-Autumn Double Points Event – 7 Days Only"}
											</span>
											<div className="flex items-center self-stretch mb-2 gap-4">
												<button className="flex flex-col shrink-0 items-start bg-[#30363D] text-left py-1 px-2 rounded border-0"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#8B949E] text-xs font-bold" >
														{"Event"}
													</span>
												</button>
												<span className="text-[#8B949E] text-sm" >
													{"Date: 2025-09-03"}
												</span>
											</div>
											<span className="text-[#8B949E] text-sm my-0.5" >
												{"Limited time event offering double points on all trading activities"}
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-center pb-[1px]">
											<span className="text-[#92318D] text-sm font-bold" >
												{"View Details"}
											</span>
										</div>
									</div>
									<div className="flex justify-between items-start self-stretch p-6">
										<div className="flex flex-col shrink-0 items-start gap-2">
											<span className="text-white text-lg font-bold" >
												{"Security Upgrade – Mandatory 2FA Enabled"}
											</span>
											<div className="flex items-center gap-4">
												<button className="flex flex-col shrink-0 items-start bg-[#30363D] text-left py-1 px-2 rounded border-0"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#8B949E] text-xs font-bold" >
														{"Security"}
													</span>
												</button>
												<span className="text-[#8B949E] text-sm" >
													{"Date: 2025-09-01"}
												</span>
											</div>
											<div className="flex flex-col items-center py-0.5">
												<span className="text-[#8B949E] text-sm" >
													{"Enhanced security measures now require two-factor authentication"}
												</span>
											</div>
										</div>
										<div className="flex flex-col shrink-0 items-center pb-[1px]">
											<span className="text-[#92318D] text-sm font-bold" >
												{"View Details"}
											</span>
										</div>
									</div>
									<div className="flex items-start self-stretch p-6 gap-3">
										<div className="flex flex-1 flex-col items-start">
											<span className="text-white text-lg font-bold mb-2" >
												{"Major Referral System Update – 3-Level Structure Live"}
											</span>
											<div className="flex items-center self-stretch mb-2 gap-4">
												<button className="flex flex-col shrink-0 items-start bg-[#30363D] text-left py-1 px-2 rounded border-0"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#8B949E] text-xs font-bold" >
														{"Feature Update"}
													</span>
												</button>
												<span className="text-[#8B949E] text-sm" >
													{"Date: 2025-08-30"}
												</span>
											</div>
											<span className="text-[#8B949E] text-sm my-0.5" >
												{"New multi-tier referral system with increased rewards"}
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-center pb-[1px]">
											<span className="text-[#92318D] text-sm font-bold" >
												{"View Details"}
											</span>
										</div>
									</div>
									<div className="flex items-start self-stretch p-6 gap-3">
										<div className="flex flex-1 flex-col items-start">
											<span className="text-white text-lg font-bold mb-2" >
												{"New Data Dashboard Launched – Real-Time Trading Monitoring"}
											</span>
											<div className="flex items-center self-stretch mb-2 gap-4">
												<button className="flex flex-col shrink-0 items-start bg-[#30363D] text-left py-1 px-2 rounded border-0"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#8B949E] text-xs font-bold" >
														{"New Feature"}
													</span>
												</button>
												<span className="text-[#8B949E] text-sm" >
													{"Date: 2025-08-28"}
												</span>
											</div>
											<span className="text-[#8B949E] text-sm my-0.5" >
												{"Advanced analytics dashboard for comprehensive trading insights"}
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-center pb-[1px]">
											<span className="text-[#92318D] text-sm font-bold" >
												{"View Details"}
											</span>
										</div>
									</div>
									<div className="flex items-start self-stretch p-6 gap-3">
										<div className="flex flex-1 flex-col items-start">
											<span className="text-white text-lg font-bold mb-2" >
												{"New Data Dashboard Launched – Real-Time Trading Monitoring"}
											</span>
											<div className="flex items-center self-stretch mb-2 gap-4">
												<button className="flex flex-col shrink-0 items-start bg-[#30363D] text-left py-1 px-2 rounded border-0"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#8B949E] text-xs font-bold" >
														{"New Feature"}
													</span>
												</button>
												<span className="text-[#8B949E] text-sm" >
													{"Date: 2025-08-28"}
												</span>
											</div>
											<span className="text-[#8B949E] text-sm my-0.5" >
												{"Advanced analytics dashboard for comprehensive trading insights"}
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-center pb-[1px]">
											<span className="text-[#92318D] text-sm font-bold" >
												{"View Details"}
											</span>
										</div>
									</div>
									<div className="flex items-start self-stretch p-6 gap-3">
										<div className="flex flex-1 flex-col items-start">
											<span className="text-white text-lg font-bold mb-2" >
												{"New Data Dashboard Launched – Real-Time Trading Monitoring"}
											</span>
											<div className="flex items-center self-stretch mb-2 gap-4">
												<button className="flex flex-col shrink-0 items-start bg-[#30363D] text-left py-1 px-2 rounded border-0"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#8B949E] text-xs font-bold" >
														{"New Feature"}
													</span>
												</button>
												<span className="text-[#8B949E] text-sm" >
													{"Date: 2025-08-28"}
												</span>
											</div>
											<span className="text-[#8B949E] text-sm my-0.5" >
												{"Advanced analytics dashboard for comprehensive trading insights"}
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-center pb-[1px]">
											<span className="text-[#92318D] text-sm font-bold" >
												{"View Details"}
											</span>
										</div>
									</div>
									<div className="flex items-start self-stretch p-6 gap-3">
										<div className="flex flex-1 flex-col items-start">
											<span className="text-white text-lg font-bold mb-2" >
												{"New Data Dashboard Launched – Real-Time Trading Monitoring"}
											</span>
											<div className="flex items-center self-stretch mb-2 gap-4">
												<button className="flex flex-col shrink-0 items-start bg-[#30363D] text-left py-1 px-2 rounded border-0"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#8B949E] text-xs font-bold" >
														{"New Feature"}
													</span>
												</button>
												<span className="text-[#8B949E] text-sm" >
													{"Date: 2025-08-28"}
												</span>
											</div>
											<span className="text-[#8B949E] text-sm my-0.5" >
												{"Advanced analytics dashboard for comprehensive trading insights"}
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-center pb-[1px]">
											<span className="text-[#92318D] text-sm font-bold" >
												{"View Details"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex justify-between items-start self-stretch p-6 mx-[1px]">
									<div className="flex flex-col shrink-0 items-center pb-[1px]">
										<span className="text-[#8B949E] text-sm" >
											{"Showing 10 of 23 announcements"}
										</span>
									</div>
									<div className="flex shrink-0 items-start gap-2">
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
					<Footer />
				</div>
			</div>
		</div>
	)
}