import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	return (
		<div className="bg-white">
			<div className="flex flex-col items-center self-stretch bg-[#000000B0] py-[298px]">
				<div className="bg-[#272B2F] w-[500px] py-[1px] rounded-lg border border-solid border-gray-700">
					<div className="flex items-center self-stretch p-6 mx-[1px]">
						<span className="flex-1 text-white text-lg font-bold" >
							{"Adjust Commission Rate"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/b89pt1kr_expires_30_days.png"} 
							className="w-11 h-11 object-fill"
						/>
					</div>
					<div className="flex flex-col self-stretch py-6 mx-[1px] gap-4">
						<div className="flex flex-col items-start self-stretch mx-6 gap-2">
							<div className="flex flex-col items-center pb-[1px]">
								<span className="text-[#9D9DAF] text-xs" >
									{"User Address"}
								</span>
							</div>
							<input
								placeholder={"0x555…666"}
								value={input1}
								onChange={(event)=>onChangeInput1(event.target.value)}
								className="self-stretch text-white bg-[#0D1117] text-base py-3 pl-3 pr-6 rounded-md border border-solid border-[#30363D]"
							/>
						</div>
						<div className="flex flex-col items-start self-stretch mx-6 gap-2">
							<div className="flex flex-col items-center pb-[1px]">
								<span className="text-[#9D9DAF] text-xs" >
									{"Commission Rate (Max 40%)"}
								</span>
							</div>
							<input
								placeholder={"30%"}
								value={input2}
								onChange={(event)=>onChangeInput2(event.target.value)}
								className="self-stretch text-[#8B949E] bg-[#0D1117] text-base py-3 pl-3 pr-6 rounded-md border-0"
							/>
						</div>
						<div className="flex items-center self-stretch bg-[#0D1117] py-3 pl-3 mx-6 gap-2 rounded-lg">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/6ckwgkly_expires_30_days.png"} 
								className="w-3 h-6 object-fill"
							/>
							<div className="flex flex-col shrink-0 items-center">
								<span className="text-[#9D9DAF] text-xs font-bold" >
									{"Your Net Commission = 40% – Rate Assigned to Sub-user"}
								</span>
							</div>
						</div>
						<div className="flex items-start self-stretch mx-6 gap-4">
							<button className="flex flex-1 flex-col items-center bg-transparent text-left py-3.5 rounded-md border border-solid border-[#30363D]"
								onClick={()=>alert("Pressed!")}>
								<span className="text-white text-base font-bold" >
									{"Cancel"}
								</span>
							</button>
							<button className="flex flex-1 flex-col items-center bg-[#92318D] text-left py-3.5 rounded-md border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-white text-base font-bold" >
									{"Confirm"}
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}