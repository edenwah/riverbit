import React, { useState } from "react";
import PercentSlider from "./PercentSlider";

type AmountInputProps = {
  value: string;
  onChange: (val: string) => void;
  percentValue: number;
  maxAmount: number;
  assets?: string[]; // optional
  selectedAsset: string;
};

const AmountInput: React.FC<AmountInputProps> = ({
  value,
  onChange,
  percentValue,
  maxAmount,
  assets,
  selectedAsset,
}) => {
  // 如果 assets 冇傳入，用 selectedAsset 拆開
  const derivedAssets = assets
    ? assets
    : selectedAsset.includes("-")
    ? selectedAsset.split("-")
    : [selectedAsset, "USD"]; // fallback

  const [localAsset, setLocalAsset] = useState(derivedAssets[0]);

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
              className="bg-zinc-700 text-zinc-400 text-sm font-bold px-4 py-2 rounded appearance-none pr-8"
              style={{
                backgroundImage: `url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/bvauf8h6_expires_30_days.png')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.5rem center",
                backgroundSize: "12px 15px",
              }}
            >
              {derivedAssets.map((asset) => (
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
