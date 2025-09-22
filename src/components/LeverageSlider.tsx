import React from "react";

interface LeverageSliderProps {
  value: number; // 現在杠桿，例如 10
  maxLeverage: number; // 最大杠桿，例如 100
  onChange: (val: number) => void;
}

const leverageOptions = [5, 10, 20, 50, 100];

const LeverageSlider: React.FC<LeverageSliderProps> = ({ value, maxLeverage, onChange }) => {
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="flex flex-col w-full gap-2">
      {/* Slider */}
      <input
        type="range"
        min={1}
        max={maxLeverage}
        step={1}
        value={value}
        onChange={handleSliderChange}
        className="w-full accent-fuchsia-800 h-2 rounded-lg appearance-none bg-zinc-700"
      />

      {/* Shortcut buttons */}
      <div className="flex items-start gap-2">
        {leverageOptions.map((lev) => (
          <button
            key={lev}
            type="button"
            className={`flex flex-col shrink-0 items-start py-[11px] px-4 rounded ${
              value === lev
                ? "border-2 border-fuchsia-800 font-bold text-white bg-[#0D1117]"
                : "border border-[#30363D] text-white bg-[#0D1117]"
            }`}
            onClick={() => onChange(lev)}
          >
            {lev}x
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeverageSlider;
