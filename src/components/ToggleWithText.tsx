import React from "react";

interface ToggleWithTextProps {
  options: string[];
  value: string;
  onChange: (val: string) => void;
}

const ToggleWithText: React.FC<ToggleWithTextProps> = ({ options, value, onChange }) => {
  return (
    <div className="flex items-center gap-2 shrink-0 bg-[#0D1117] p-1 rounded-sm border border-[#30363D]">
      {options.map((option) => (
        <button
          key={option}
          className={`flex flex-col items-start py-3 px-3 rounded border-0 transition-all ${
            value === option ? "bg-fuchsia-800 text-white" : "bg-transparent text-zinc-400"
          }`}
          onClick={() => onChange(option)}
          type="button"
        >
          <span className="text-sm w-full">{option}</span>
        </button>
      ))}
    </div>
  );
};

export default ToggleWithText;
