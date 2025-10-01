import React from "react";
import PercentSlider from "./PercentSlider";

type AmountInputProps = {
    value: string;
    onChange: (val: string) => void;
    percentValue: number;
    maxAmount: number;
  };

const AmountInput: React.FC<AmountInputProps> = ({
  value,
  onChange,
  percentValue,
  maxAmount,
}) => {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      {/* Label */}
      <div className="flex flex-col items-center pb-[1px]">
        <span className="text-[#9D9DAF] text-sm">Amount</span>
      </div>

      <div className="flex flex-col items-start gap-4 w-full">
        {/* Input box */}
        <div className="flex justify-between bg-zinc-950 py-[9px] px-3 rounded-sm border border-solid border-[#30363D] w-full">
          <input
            placeholder="0"
            value={value}
            onChange={(e) => {
              const parsed = Number(e.target.value.replace(/,/g, ""));
              onChange(isNaN(parsed) ? "" : parsed.toString());
            }}
            className="w-full text-white bg-transparent text-base py-[3px] border-0"
          />
          <div className="flex shrink-0 items-center bg-zinc-700 py-[7px] pl-2 pr-[7px] gap-1.5 rounded">
            <span className="text-zinc-400 text-sm font-bold">USDT</span>
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/bvauf8h6_expires_30_days.png"
              className="w-3 h-[15px] rounded-sm object-fill"
              alt="USDT"
            />
          </div>
        </div>

        {/* Slider + quick buttons */}
        <PercentSlider
            value={percentValue}    
            maxAmount={maxAmount}
            onChangeAmount={onChange}
        />

      </div>
    </div>
  );
};

export default AmountInput;
