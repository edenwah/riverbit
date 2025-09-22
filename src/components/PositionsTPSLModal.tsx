import React from "react";

const InfoRow = ({ label, value, valueColor = "text-white" }) => (
  <div className="flex items-center self-stretch">
    <span className="flex-1 text-[#9D9DAF] text-sm text-left">{label}</span>
    <span className={`${valueColor} text-sm`}>{value}</span>
  </div>
);

const PositionsTPSLModal = ({
  data,            // Object with position info
  inputTPSL,          // Stop Loss Price input value
  onChangeInputTPSL,  // Stop Loss Price input handler
  onClose,         // Optional: close modal handler
  onConfirm        // Confirm button handler
}: { 
  data: any; 
  inputTPSL: string; 
  onChangeInputTPSL: (val: string) => void; 
  onClose: () => void; 
  onConfirm: () => void; 
}) => {
  const {
    coin,
    position,
    entryPrice,
    markPrice,
    takeProfit,
    expectedProfit,
  } = data;

  return (
    <div className="flex flex-col items-center self-stretch bg-[#000000B0] py-[197px]">
      <div className="flex flex-col bg-[#272B2F] w-[500px] py-[1px] rounded-lg border border-solid border-gray-700">
        
        {/* Header */}
        <div className="flex items-center self-stretch p-6 mx-[1px]">
          <span className="flex-1 text-white text-lg font-bold">Positions TP/SL</span>
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/73d3cc65_expires_30_days.png"
            className="w-11 h-11 object-fill cursor-pointer"
            onClick={onClose}
          />
        </div>

        {/* Info Rows */}
        <div className="flex flex-col self-stretch pb-6 mx-[1px] gap-4">
          <div className="flex flex-col self-stretch pt-4 mx-6 gap-1">
            <InfoRow label="Coin" value={coin} />
            <InfoRow label="Position" value={position} />
            <InfoRow label="Entry Price" value={entryPrice} />
            <InfoRow label="Mark Price" value={markPrice} />
            <InfoRow label="Take Profit" value={takeProfit} />
            <div className="flex flex-col items-end self-stretch">
              <span className="text-[#9D9DAF] text-xs mr-[3px]">
                Expected Profit: {expectedProfit}
              </span>
            </div>
          </div>

          {/* Stop Loss Inputs */}
          <div className="flex items-start self-stretch mx-6 gap-3">
            <div className="flex flex-1 flex-col items-start gap-[9px]">
              <span className="text-[#9D9DAF] text-sm">Stop Loss Price</span>
              <input
                placeholder="Price"
                value={inputTPSL}
                onChange={(e) => onChangeInputTPSL(e.target.value)}
                className="self-stretch text-[#8B949E] bg-[#0D1117] text-base py-3 pl-3 pr-6 rounded-md border border-solid border-[#30363D]"
              />
            </div>
            <div className="flex flex-1 flex-col items-start gap-[9px]">
              <span className="text-[#9D9DAF] text-sm">Stop Loss %</span>
              <button
                className="flex items-center self-stretch bg-[#0D1117] text-left p-3 rounded-md border border-solid border-[#30363D]"
                onClick={() => alert("Pressed!")}
              >
                <span className="flex-1 text-[#8B949E] text-base">Loss</span>
                <span className="text-[#8B949E] text-sm font-bold">%</span>
              </button>
            </div>
          </div>

          {/* Allocated & Limit */}
          <div className="flex items-start self-stretch mx-6 gap-3">
            <div className="flex flex-1 items-center py-2">
              <span className="flex-1 text-[#C9D1D9] text-sm">Allocated Amount</span>
              <div className="shrink-0 items-start bg-[#92318D] py-0.5 pl-[22px] pr-0.5 rounded-[9999px]">
                <div className="bg-white w-5 h-5 rounded-[9999px] border border-solid border-white" />
              </div>
            </div>
            <div className="flex flex-1 items-center py-2">
              <span className="flex-1 text-[#C9D1D9] text-sm">Limit Price</span>
              <div className="shrink-0 items-start bg-[#92318D] py-0.5 pl-[22px] pr-0.5 rounded-[9999px]">
                <div className="bg-white w-5 h-5 rounded-[9999px] border border-solid border-white" />
              </div>
            </div>
          </div>

          {/* Confirm Button */}
          <button
            className="flex flex-col items-center self-stretch bg-[#92318D] text-left py-3.5 mx-6 rounded-md border-0"
            onClick={onConfirm}
          >
            <span className="text-white text-base font-bold">Confirm</span>
          </button>
        </div>

        {/* Info Text */}
        <span className="text-[#8B949E] text-sm my-4 mx-[17px]">
          By default, take-profit and stop-loss orders apply to the entire position. Once the position is closed, TP/SL orders will be automatically cancelled. When the take-profit or stop-loss price is reached, a market order will be triggered.
          If a fixed order size is configured, the TP/SL order will always be executed with that size, regardless of future changes in the position.
        </span>
      </div>
    </div>
  );
};

export default PositionsTPSLModal;
