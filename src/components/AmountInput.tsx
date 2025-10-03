import React, { useState } from "react";
import PercentSlider from "./PercentSlider";

type AmountInputProps = {
  value: string;
  onChange: (val: string) => void;
  percentValue: number;
  maxAmount: number;
  assets: string[]; // ["ETH", "USD"]
  selectedAsset: string; // 外層傳入初始值
};

const AmountInput: React.FC<AmountInputProps> = ({
  value,
  onChange,
  percentValue,
  maxAmount,
  assets,
  selectedAsset,
}) => {
  const [localAsset, setLocalAsset] = useState(selectedAsset);

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
          <div className="flex shrink-0 items-center gap-1.5 rounded">
            <select
              value={localAsset}
              onChange={(e) => setLocalAsset(e.target.value)}
              className="bg-zinc-700 text-white text-sm font-bold py-[7px] pl-2 pr-[7px] rounded"
            >
              {assets.map((asset) => (
                <option key={asset} value={asset}>
                  {asset}
                </option>
              ))}
            </select>
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
