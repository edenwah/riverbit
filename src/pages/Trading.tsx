import  { useState } from "react";
export default () => {
    const [input1, onChangeInput1] = useState('');
    const [input2, onChangeInput2] = useState('');
    const [input3, onChangeInput3] = useState('');
    const [input4, onChangeInput4] = useState('');
    const [input5, onChangeInput5] = useState('');
    const [input6, onChangeInput6] = useState('');
    const [input7, onChangeInput7] = useState('');
    const [isOn, setIsOn] = useState(false);
    const [reduceOnly, setReduceOnly] = useState(false);
    const [activeOrderTab, setActiveOrderTab] = useState("Market"); // NEW: tab state
    const [orderTab, setOrderTab] = useState("Order Book"); // Add this with your useState hooks
	const [activeAccountTab, setActiveAccountTab] = useState("Balance"); // Balance 為預設選中

    const AMOUNT_TOTAL = 1000;

    // Calculate percent from input2 (amount)
    const percentValue = input2
      ? Math.max(0, Math.min(100, Math.round((Number(input2) / AMOUNT_TOTAL) * 100)))
      : 0;

    return (
        <div className="flex flex-col bg-black ">
            <div className="self-stretch ">
                <div className="flex justify-between items-start self-stretch bg-[#161B22] py-3.5 px-4">
                    <div className="flex shrink-0 items-start gap-8">
                        <img
                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/tsg0s0tv_expires_30_days.png"} 
                            className="w-[118px] h-10 object-fill"
                        />
                        <div className="flex shrink-0 items-start">
                            <button className="flex flex-col shrink-0 items-start bg-neutral-700 text-left py-[11px] px-3 mr-[30px] rounded-md border-0"
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
                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/wo9zz3y5_expires_30_days.png"} 
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
                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/7ru13dyc_expires_30_days.png"} 
                                className="w-5 h-5 rounded-md object-fill"
                            />
                            <img
                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/wbxxcfe7_expires_30_days.png"} 
                                className="w-3 h-[15px] rounded-md object-fill"
                            />
                        </div>
                        <button className="flex shrink-0 items-center bg-[#161B22] text-left py-2.5 px-4 gap-2.5 rounded-md border border-solid border-[#30363D]"
                            onClick={()=>alert("Pressed!")}>
                            <img
                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/oyc1zap7_expires_30_days.png"} 
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
                <div className="grid grid-cols-1 md:grid-cols-5 items-start self-stretch p-2 gap-2">
                    {/* Main Chart & Account Overview (col-span-3 on desktop, full width on mobile) */}
                    <div className="md:col-span-3 flex flex-col gap-2 w-full">
                        <div className="flex flex-col self-stretch bg-[#161B22] py-4 gap-3 rounded-lg border border-solid border-[#30363D]">
                            <div className="flex items-center self-stretch mx-3">
                                <div className="flex shrink-0 items-start pr-[1px] mr-7 gap-2">
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/11z6u7t1_expires_30_days.png"} 
                                        className="w-3 h-7 object-fill"
                                    />
                                    <span className="text-gray-200 text-lg font-bold" >
                                        {"ETH-PERP"}
                                    </span>
                                </div>
                                <span className="text-[#A6A6B5] text-xs font-bold mr-[13px]" >
                                    {"Select Asset"}
                                </span>
                                <img
                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/rnvmw36i_expires_30_days.png"} 
                                    className="w-3 h-[15px] rounded-md object-fill"
                                />
                                <div className="flex-1 self-stretch">
                                </div>
                                <div className="flex shrink-0 items-start gap-2.5">
                                    <button className="flex shrink-0 items-center bg-[#0D1117] text-left p-3 gap-[17px] rounded-md border border-solid border-[#30363D]"
                                        onClick={()=>alert("Pressed!")}>
                                        <span className="text-[#A6A6B5] text-xs" >
                                            {"Granularity"}
                                        </span>
                                        <img
                                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/xgj953xu_expires_30_days.png"} 
                                            className="w-3 h-[15px] rounded-md object-fill"
                                        />
                                    </button>
                                    <button className="flex shrink-0 items-center bg-[#0D1117] text-left p-3 gap-4 rounded-md border border-solid border-[#30363D]"
                                        onClick={()=>alert("Pressed!")}>
                                        <span className="text-[#A6A6B5] text-xs" >
                                            {"Indicator"}
                                        </span>
                                        <img
                                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/tsge5u2t_expires_30_days.png"} 
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
                                    <span className="text-[#A6A6B5] text-xs ml-[11px]" >
                                        {"Index Price"}
                                    </span>
                                    <span className="text-gray-200 text-xs font-bold text-center mx-[11px]" >
                                        {"227.30"}
                                    </span>
                                </div>
                                <div className="flex flex-1 flex-col items-start">
                                    <span className="text-[#A6A6B5] text-xs ml-2" >
                                        {"24h Change"}
                                    </span>
                                    <span className="text-[#F85149] text-xs font-bold text-center mx-2" >
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
                            <div className="flex flex-col w-full">
								{/* Tabs + Filter */}
								<div className="flex justify-between items-center border-b border-[#30363D] px-4">
									<div className="flex gap-4">
									{["Balance", "Positions", "Open Orders", "Trade History", "Funding Rate History", "Order History"].map((tab) => (
										<button
										key={tab}
										className={`py-3 text-sm font-semibold ${
											activeAccountTab === tab ? "text-white border-b-2 border-[#92318D]" : "text-[#8B949E]"
										}`}
										onClick={() => setActiveAccountTab(tab)}
										>
										{tab}
										</button>
									))}
									</div>
									{/* Filter Selector */}
									<div className="flex items-center gap-2">
									<span className="text-[#8B949E] text-sm">Filter</span>
									<img
										src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/qdm0wdb6_expires_30_days.png"
										className="w-3 h-[15px] object-fill"
									/>
									</div>
								</div>

								{/* Tab Content */}
								{activeAccountTab === "Balance" && (
									<div className="px-4 py-3 text-left">
										{/* Table Header */}
										<div className="flex text-xs text-[#8B949E] font-bold mb-2">
											<span className="flex-1 ">Currency</span>
											<span className="flex-1">Available</span>
											<span className="flex-1">In Orders</span>
											<span className="flex-1 ">Value($)</span>
										</div>

										{/* Table Rows */}
										<div className="flex flex-col gap-2 text-sm text-white">
											<div className="flex">
											<span className="flex-1">USDC</span>
											<span className="flex-1">12,345.67</span>
											<span className="flex-1">1,000.00</span>
											<span className="flex-1">$13,345.67</span>
											</div>
											<div className="flex">
											<span className="flex-1">Points</span>
											<span className="flex-1">1,250,000</span>
											<span className="flex-1">0</span>
											<span className="flex-1">Points</span>
											</div>
										</div>
										</div>

								)}

								{activeAccountTab === "Positions" && (
									<div className="px-4 py-3 text-white">Positions content here...</div>
								)}

								{activeAccountTab === "Open Orders" && (
									<div className="px-4 py-3 text-white">Open Orders content here...</div>
								)}

								{activeAccountTab === "Trade History" && (
									<div className="px-4 py-3 text-white">Trade History content here...</div>
								)}

								{activeAccountTab === "Funding Rate History" && (
									<div className="px-4 py-3 text-white">Funding Rate History content here...</div>
								)}

								{activeAccountTab === "Order History" && (
									<div className="px-4 py-3 text-white">Order History content here...</div>
								)}
								</div>
                        	</div>
                    </div>
                    {/* Order Book/Trades (col-span-1 on desktop, full width on mobile) */}
                    <div className="md:col-span-1 flex flex-col gap-2 items-center bg-[#161B22] p-[1px] rounded-md border border-solid border-[#30363D] w-full">
                        {/* Tabs for Order Book/Trades */}
                        <div className="flex items-center pl-3 pr-[13px] border-b border-[#30363D] w-full">
                            {["Order Book", "Trades"].map(tab => (
                                <button
                                    key={tab}
                                    className={`text-sm py-[15px] w-full focus:outline-none ${
                                        orderTab === tab
                                            ? "text-white border-b-2 border-[#92318D] font-bold"
                                            : "text-[#8B949E]"
                                    }`}
                                    onClick={() => setOrderTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        {/* Tab Content */}
                        {orderTab === "Order Book" && (
                            <div className="flex flex-col items-start w-full">
                                {/* --- BEGIN Order Book Content (lines 353-640) --- */}
                                {/* Paste all the JSX from line 353 to 640 here */}
                                <div className="flex flex-col items-start w-full">
                                    <div className="flex flex-col items-start">
                                        <div className="flex flex-col items-center py-1">
                                            <div className="flex items-start pr-[1px]">
                                                <span className="text-[#8B949E] text-xs my-1 mx-8" >
                                                    {"Price"}
                                                </span>
                                                <span className="text-[#8B949E] text-xs my-1 mx-[35px]" >
                                                    {"Size"}
                                                </span>
                                                <span className="text-[#8B949E] text-xs my-1 ml-[49px] mr-[17px]" >
                                                    {"Total"}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start">
                                            <div className="flex items-center mb-[1px] gap-[22px]">
                                                <div className="flex shrink-0 items-start bg-[#EF44441A] py-[5px]">
                                                    <span className="text-[#F85149] text-xs my-[3px] mx-[15px]" >
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
                                            <div className="flex items-center pr-[1px]">
                                                <div className="flex shrink-0 items-center bg-[#EF44441A] py-1 mr-1.5">
                                                    <span className="text-[#F85149] text-xs my-[3px] ml-[15px] mr-[46px]" >
                                                        {"110,594.00"}
                                                    </span>
                                                    <span className="text-white text-xs" >
                                                        {"1.359"}
                                                    </span>
                                                </div>
                                                <span className="text-[#8B949E] text-xs my-[3px] ml-[38px] mr-[18px]" >
                                                    {"15.200"}
                                                </span>
                                            </div>
                                            <div className="flex items-center pr-[1px]">
                                                <div className="flex shrink-0 items-center bg-[#EF44441A] py-1 pr-2.5 mr-[21px]">
                                                    <span className="text-[#F85149] text-xs my-1 ml-[15px] mr-[45px]" >
                                                        {"110,593.00"}
                                                    </span>
                                                    <span className="text-white text-xs" >
                                                        {"0.990"}
                                                    </span>
                                                </div>
                                                <span className="text-[#8B949E] text-xs my-1 ml-[38px] mr-[17px]" >
                                                    {"13.900"}
                                                </span>
                                            </div>
                                            <div className="flex items-center pr-[1px]">
                                                <div className="flex flex-col shrink-0 items-start relative mr-[38px]">
                                                    <div className="flex flex-col items-start bg-[#EF44441A] py-2 pl-[15px] pr-[70px]">
                                                        <span className="text-[#F85149] text-xs" >
                                                            {"110,592.00"}
                                                        </span>
                                                    </div>
                                                    <span className="text-white text-xs absolute top-2 right-[-5px]" >
                                                        {"3.025"}
                                                    </span>
                                                </div>
                                                <span className="text-[#8B949E] text-xs my-[3px] ml-[38px] mr-[18px]" >
                                                    {"12.600"}
                                                </span>
                                            </div>
                                            <div className="flex items-center pr-[1px]">
                                                <div className="flex flex-col shrink-0 items-start relative mr-[53px]">
                                                    <div className="flex flex-col items-start bg-[#EF44441A] py-2 pl-4 pr-14">
                                                        <span className="text-[#F85149] text-xs" >
                                                            {"110,591.00"}
                                                        </span>
                                                    </div>
                                                    <span className="text-white text-xs absolute top-2 right-[-18px]" >
                                                        {"1.146"}
                                                    </span>
                                                </div>
                                                <span className="text-[#8B949E] text-xs my-[3px] ml-10 mr-[18px]" >
                                                    {"11.300"}
                                                </span>
                                            </div>
                                            <div className="flex items-center pr-[1px] mb-[1px]">
                                                <div className="flex flex-col shrink-0 items-start bg-[#EF44441A] py-2 pl-[15px] pr-[38px] mr-[7px]">
                                                        <span className="text-[#F85149] text-xs" >
                                                            {"110,590.00"}
                                                        </span>
                                                </div>
                                                <span className="text-white text-xs mr-8" >
                                                    {"2.852"}
                                                </span>
                                                <span className="text-[#8B949E] text-xs my-2 ml-[38px] mr-[18px]" >
                                                    {"10.000"}
                                                </span>
                                            </div>
                                            <div className="flex items-center pr-[1px]">
                                                <div className="flex flex-col shrink-0 items-start bg-[#EF44441A] py-[7px] pl-[15px] pr-[38px] mr-[7px]">
                                                        <span className="text-[#F85149] text-xs" >
                                                            {"110,590.00"}
                                                        </span>
                                                </div>
                                                <span className="text-white text-xs mr-8" >
                                                    {"2.852"}
                                                </span>
                                                <span className="text-[#8B949E] text-xs my-[7px] ml-[38px] mr-[18px]" >
                                                    {"10.000"}
                                                </span>
                                            </div>
                                            <div className="flex items-start pr-[1px]">
                                                <span className="text-[#F85149] text-xs my-2 mx-[15px]" >
                                                    {"110,590.00"}
                                                </span>
                                                <span className="text-white text-xs my-2 mx-[30px]" >
                                                    {"2.852"}
                                                </span>
                                                <span className="text-[#8B949E] text-xs my-2 ml-[38px] mr-[18px]" >
                                                    {"10.000"}
                                                </span>
                                            </div>
                                            <div className="flex items-start pr-[1px]">
                                                <span className="text-[#F85149] text-xs my-2 mx-[15px]" >
                                                    {"110,590.00"}
                                                </span>
                                                <span className="text-white text-xs my-2 mx-[30px]" >
                                                    {"2.852"}
                                                </span>
                                                <span className="text-[#8B949E] text-xs my-2 ml-[38px] mr-[18px]" >
                                                    {"10.000"}
                                                </span>
                                            </div>
                                            <div className="flex items-start pr-[1px]">
                                                <span className="text-[#F85149] text-xs my-2 mx-[15px]" >
                                                    {"110,590.00"}
                                                </span>
                                                <span className="text-white text-xs my-2 mx-[30px]" >
                                                    {"2.852"}
                                                </span>
                                                <span className="text-[#8B949E] text-xs my-2 ml-[46px] mr-[18px]" >
                                                    {"0.190"}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center pt-3 pb-[13px] pl-4 pr-[158px]">
                                            <span className="text-[#8B949E] text-xs " >
                                                {"Spread: 1 (0.001%)"}
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-start">
                                            <div className="flex items-start py-[7px] pr-[1px] mb-[1px]">
                                                <span className="text-[#2DA44E] text-xs my-[3px] mx-[15px]" >
                                                    {"110,589.00"}
                                                </span>
                                                <span className="text-white text-xs my-[3px] mx-8" >
                                                    {"1.799"}
                                                </span>
                                                <span className="text-[#8B949E] text-xs my-[3px] ml-[45px] mr-[17px]" >
                                                    {"0.270"}
                                                </span>
                                            </div>
                                            <div className="flex items-center pr-[1px]">
                                                <div className="flex flex-col shrink-0 items-center relative mr-[45px]">
                                                    <div className="bg-[#22C55E1A] w-12 h-[35px]">
                                                    </div>
                                                    <span className="text-[#2DA44E] text-xs absolute top-[9px] left-[15px]" >
                                                        {"110,589.00"}
                                                    </span>
                                                </div>
                                                <span className="text-white text-xs my-[3px] mx-8" >
                                                    {"1.799"}
                                                </span>
                                                <span className="text-[#8B949E] text-xs my-[3px] ml-11 mr-[17px]" >
                                                    {"8.000"}
                                                </span>
                                            </div>
                                            <div className="flex items-center pr-[1px]">
                                                <div className="flex flex-col shrink-0 items-start bg-[#22C55E1A] py-[9px] pl-[15px] pr-0.5 mr-4">
                                                    <span className="text-[#2DA44E] text-xs" >
                                                        {"110,589.00"}
                                                    </span>
                                                </div>
                                                <span className="text-white text-xs my-[3px] mx-8" >
                                                    {"1.799"}
                                                </span>
                                                <span className="text-[#8B949E] text-xs my-[3px] ml-11 mr-[17px]" >
                                                    {"8.000"}
                                                </span>
                                            </div>
                                            <div className="flex items-center pr-[1px] mb-[1px]">
                                                <div className="flex flex-col shrink-0 items-start bg-[#22C55E1A] py-[9px] pl-[15px] pr-0.5 mr-4">
                                                    <span className="text-[#2DA44E] text-xs" >
                                                        {"110,589.00"}
                                                    </span>
                                                </div>
                                                <span className="text-white text-xs my-[3px] mx-8" >
                                                    {"1.799"}
                                                </span>
                                                <span className="text-[#8B949E] text-xs my-[3px] ml-11 mr-[17px]" >
                                                    {"8.000"}
                                                </span>
                                            </div>
                                            <div className="flex items-center pr-[1px]">
                                                <div className="flex flex-col shrink-0 items-start bg-[#22C55E1A] py-[9px] pl-[15px] pr-0.5 mr-4">
                                                    <span className="text-[#2DA44E] text-xs" >
                                                        {"110,589.00"}
                                                    </span>
                                                </div>
                                                <span className="text-white text-xs my-[3px] mx-8" >
                                                    {"1.799"}
                                                </span>
                                                <span className="text-[#8B949E] text-xs my-[3px] ml-11 mr-[17px]" >
                                                    {"8.000"}
                                                </span>
                                            </div>
                                            <div className="flex items-center pr-[1px]">
                                                <div className="flex flex-col shrink-0 items-start bg-[#22C55E1A] py-[9px] pl-[15px] pr-7 mr-[19px]">
                                                    <span className="text-[#2DA44E] text-xs" >
                                                        {"110,588.00"}
                                                    </span>
                                                </div>
                                                <span className="text-white text-xs mr-[33px]" >
                                                    {"1.755"}
                                                </span>
                                                <span className="text-[#8B949E] text-xs my-[3px] ml-[46px] mr-[18px]" >
                                                    {"9.100"}
                                                </span>
                                            </div>
                                            <div className="flex items-center pr-[1px] mb-[1px]">
                                                <div className="flex flex-col shrink-0 items-start bg-[#22C55E1A] py-[9px] pl-4 pr-11 mr-[3px]">
                                                    <span className="text-[#2DA44E] text-xs" >
                                                        {"110,587.00"}
                                                    </span>
                                                </div>
                                                <span className="text-white text-xs mr-[33px]" >
                                                    {"0.351"}
                                                </span>
                                                <span className="text-[#8B949E] text-xs my-[3px] ml-[38px] mr-[18px]" >
                                                    {"10.200"}
                                                </span>
                                            </div>
                                            <div className="flex items-center pr-[1px]">
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
                                                <span className="text-[#8B949E] text-xs my-[3px] ml-10 mr-[18px]" >
                                                    {"11.300"}
                                                </span>
                                            </div>
                                            <div className="flex items-center pr-[1px]">
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
                                                <span className="text-[#8B949E] text-xs my-[3px] ml-[38px] mr-[17px]" >
                                                    {"12.400"}
                                                </span>
                                            </div>
                                            <div className="flex items-center pr-[1px]">
                                                <div className="flex shrink-0 items-center bg-[#22C55E1A] py-1.5 pr-[5px] mr-[27px]">
                                                    <span className="text-[#2DA44E] text-xs my-[3px] ml-[15px] mr-[45px]" >
                                                        {"110,584.00"}
                                                    </span>
                                                    <span className="text-white text-xs" >
                                                        {"2.474"}
                                                    </span>
                                                </div>
                                                <span className="text-[#8B949E] text-xs my-[3px] ml-[38px] mr-[18px]" >
                                                    {"13.500"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* --- END Order Book Content --- */}
                            </div>
                        )}
                        {orderTab === "Trades" && (
                            <div className="flex flex-col items-center justify-center w-full py-12">
                                <span className="text-[#8B949E] text-base">Trades coming soon.</span>
                            </div>
                        )}
                    </div>
                    {/* Trading Form (col-span-1 on desktop, full width on mobile) */}
                    <div className="md:col-span-1 flex flex-col gap-2 items-center bg-[#161B22] rounded-md border border-solid border-[#30363D] w-full">
                        {/* Tabs */}
                        <div className="flex items-start pl-3 pr-[13px] border-b border-[#30363D] w-full">
                            {["Market", "Limit", "Advanced"].map(tab => (
                                <button
                                    key={tab}
                                    className={`text-sm py-[15px] px-4 focus:outline-none ${
                                        activeOrderTab === tab
                                            ? "text-white border-b-2 border-[#92318D] font-bold"
                                            : "text-[#8B949E]"
                                    }`}
                                    onClick={() => setActiveOrderTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        {/* Tab Content */}
                        {activeOrderTab === "Market" && (
                            <div className="w-full flex flex-col items-start px-4 py-4 gap-4">
                                {/* --- BEGIN Market Tab Content --- */}
                                <div className="flex items-center bg-[#0D1117] py-1 pl-1 pr-[5px] gap-6 rounded-md">
                                    <div className="flex flex-col shrink-0 items-start bg-[#2DA44E33] py-[11px] px-6 rounded">
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
                                <div className="flex flex-col items-start gap-2 w-full">
                                    <div className="flex flex-col items-center pb-[1px]">
                                        <span className="text-[#9D9DAF] text-xs" >
                                            {"Amount"}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-start gap-4">
                                        {/* 金額輸入框與貨幣標籤 */}
                                        <div className="flex items-center bg-[#0D1117] py-[9px] px-3 rounded-md border border-solid border-[#30363D] w-full max-w-md">
                                            <input
                                                placeholder="0"
                                                value={input2}
                                                onChange={(e) => {
                                                    const value = Number(e.target.value.replace(/,/g, ""));
                                                    onChangeInput2(isNaN(value) ? "" : value.toString());
                                                }}
                                                className="text-white bg-transparent text-base w-40 py-[3px] border-0"
                                            />
                                            <div className="flex shrink-0 items-center bg-neutral-700 py-[7px] pl-2 pr-[7px] gap-1.5 rounded">
                                                <span className="text-[#8B949E] text-xs font-bold">USDT</span>
                                                <img
                                                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/bvauf8h6_expires_30_days.png"
                                                    className="w-3 h-[15px] rounded object-fill"
                                                />
                                            </div>
                                        </div>
                                        {/* 滑桿與快捷百分比按鈕 */}
                                        <div className="flex flex-col w-full">
                                            <input
                                                type="range"
                                                min={0}
                                                max={100}
                                                step={1}
                                                value={percentValue}
                                                onChange={(e) => {
                                                    const percent = Number(e.target.value);
                                                    const amount = Math.round((percent / 100) * AMOUNT_TOTAL);
                                                    onChangeInput2(amount.toString());
                                                }}
                                                className="w-full accent-[#92318D] h-2 rounded-lg appearance-none bg-neutral-700 my-2"
                                            />
                                            <div className="flex justify-between gap-2 w-full mt-1">
                                                {[0, 25, 50, 75, 100].map((percent) => (
                                                    <button
                                                        key={percent}
                                                        type="button"
                                                        className={`py-[11px] w-full rounded border ${
                                                            percentValue === percent
                                                                ? "border-2 border-[#92318D] font-bold"
                                                                : "border border-[#30363D]"
                                                        } bg-[#0D1117] text-white text-sm`}
                                                        onClick={() => {
                                                            const amount = Math.round((percent / 100) * AMOUNT_TOTAL);
                                                            onChangeInput2(amount.toString());
                                                        }}
                                                    >
                                                        {percent}%
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="py-2 w-full flex items-center  justify-between focus:outline-none"
                                    onClick={() => setReduceOnly((prev) => !prev)}
                                >
                                    <span className="text-[#C9D1D9] text-sm">
                                    {"Reduce Only"}
                                    </span>
                                    <div
                                    className={`shrink-0 flex items-center transition-colors duration-200 rounded-full ${reduceOnly ? "bg-[#92318D]" : "bg-neutral-700"} py-0.5 pl-2 pr-0.5`}
                                    style={{ width: 48, height: 28 }}
                                    >
                                    <div
                                        className={`bg-white w-5 h-5 rounded-full border border-solid border-white shadow transition-transform duration-200 `}
                                        style={{
                                        transform: reduceOnly ? "translateX(16px)" : "translateX(0)",
                                        }}
                                    />
                                    </div>
                                </button>
                                <button
                                    type="button"
                                    className="py-2 flex items-center w-full justify-between focus:outline-none"
                                    onClick={() => setIsOn((prev) => !prev)}
                                    >
                                    <span className="text-[#C9D1D9] text-sm">Take Profit / Stop Loss</span>
                                    <div
                                        className={` shrink-0 flex items-center transition-colors duration-200 rounded-full ${
                                        isOn ? "bg-[#92318D]" : "bg-neutral-700"
                                        } py-0.5 pl-2 pr-0.5`}
                                        style={{ width: 48, height: 28 }}
                                    >
                                        <div
                                        className={`bg-white w-5 h-5 rounded-full border border-solid border-white shadow transition-transform duration-200`}
                                        style={{
                                            transform: isOn ? "translateX(16px)" : "translateX(0)",
                                        }}
                                        />
                                    </div>
                                </button>
                                {/* Conditional TP/SL inputs */}
                                {isOn && (
                                <div className="flex flex-col gap-4 py-2 w-full">
                                    {/* Take Profit */}
                                    <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
                                    <div className="flex flex-col gap-2 min-w-0 text-left">
                                        <span className="text-[#9D9DAF] text-xs">Take Profit Price</span>
                                        <input
                                        placeholder="230.00"
                                        value={input3}
                                        onChange={(e) => onChangeInput3(e.target.value)}
                                        className="w-full text-white bg-[#0D1117] text-base p-3 rounded-md border border-[#30363D] focus:outline-none"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 min-w-0 text-left">
                                        <span className="text-[#9D9DAF] text-xs">Take Profit %</span>
                                        <div className="flex items-center bg-[#0D1117] p-3 rounded-md border border-[#30363D] w-full">
                                        <input
                                            placeholder="%"
                                            value={input4}
                                            onChange={(e) => onChangeInput4(e.target.value)}
                                            className="flex-1 text-white bg-transparent text-base font-bold border-0 focus:outline-none min-w-0"
                                        />
                                        <span className="text-white text-base ml-2">%</span>
                                        </div>
                                    </div>
                                    </div>

                                    {/* Stop Loss */}
                                    <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
                                    <div className="flex flex-col gap-2 min-w-0 text-left">
                                        <span className="text-[#9D9DAF] text-xs">Stop Loss Price</span>
                                        <input
                                        placeholder="240.00"
                                        value={input5}
                                        onChange={(e) => onChangeInput5(e.target.value)}
                                        className="w-full text-white bg-[#0D1117] text-base p-3 rounded-md border border-[#30363D] focus:outline-none"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 min-w-0 text-left">
                                        <span className="text-[#9D9DAF] text-xs">Stop Loss %</span>
                                        <div className="flex items-center bg-[#0D1117] p-3 rounded-md border border-[#30363D] w-full">
                                        <input
                                            placeholder="%"
                                            value={input6}
                                            onChange={(e) => onChangeInput6(e.target.value)}
                                            className="flex-1 text-white bg-transparent text-base font-bold border-0 focus:outline-none min-w-0"
                                        />
                                        <span className="text-white text-base ml-2">%</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                )}

                                
                                <div className="flex flex-col items-start w-full gap-2 ">
                                    <div className="flex flex-col items-center pb-[1px]">
                                        <span className="text-[#8B949E] text-xs" >
                                            {"Max Slippage %"}
                                        </span>
                                    </div>
                                    <input
                                        placeholder={"0.5"}
                                        value={input7}
                                        onChange={(event)=>onChangeInput7(event.target.value)}
                                        className="w-full text-white bg-[#0D1117] text-base p-3 rounded-md border border-solid border-[#30363D]"
                                    />
                                </div>
                                <div className="flex flex-col items-start bg-[#0D1117] py-3 rounded-lg">
                                    <div className="flex items-center mb-2 ml-3 gap-2">
                                        <img
                                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/1uh405kh_expires_30_days.png"} 
                                            className="w-3 h-6 object-fill"
                                        />
                                        <span className="text-white text-s text-left" >
                                            {"AI Insight"}
                                        </span>
                                    </div>
                                    <span className="text-[#9D9DAF] text-xs mx-3 text-left" >
                                        {"Bullish trend 78% · Resistance $228.50 ·"}
                                    </span>
                                    <span className="text-[#9D9DAF] text-xs ml-3 text-left" >
                                        {"Suitable for small position entry"}
                                    </span>
                                </div>
                                <div className="flex flex-col items-start pt-4 gap-2 w-full">
                                    <span className="text-[#9D9DAF] text-sm font-bold" >
                                        {"Estimation"}
                                    </span>
                                    <div className="flex flex-col items-start gap-1 w-full">
                                        <div className="flex justify-between items-center w-full">
                                            <span className="text-[#9D9DAF] text-xs " >
                                                {"Liquidation Price"}
                                            </span>
                                            <span className="text-white text-xs" >
                                                {"$39,130.00"}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <span className="text-[#9D9DAF] text-xs " >
                                                {"Est. Fee"}
                                            </span>
                                            <span className="text-white text-xs" >
                                                {"$2.50"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="w-full flex justify-center items-center bg-[#92318D] py-3.5 rounded-md border-0"
                                    onClick={() => alert("Pressed!")}
                                >
                                    <span className="text-white text-base font-bold text-center">
                                        {"Buy / Long"}
                                    </span>
                                </button>
                                {/* --- END Market Tab Content --- */}
                            </div>
                        )}
                        {activeOrderTab === "Limit" && (
                            <div className="w-full flex flex-col items-center justify-center py-12">
                                <span className="text-[#8B949E] text-base">Limit order form coming soon.</span>
                            </div>
                        )}
                        {activeOrderTab === "Advanced" && (
                            <div className="w-full flex flex-col items-center justify-center py-12">
                                <span className="text-[#8B949E] text-base">Advanced order form coming soon.</span>
                            </div>
                        )}
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