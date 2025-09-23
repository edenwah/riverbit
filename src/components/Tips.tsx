import React from "react";

interface TipsProps {
  title?: string;       // optional
  iconUrl?: string;     // optional
  tips: string[];
}

const Tips: React.FC<TipsProps> = ({ title, iconUrl, tips }) => {
  return (
    <div className="flex flex-col items-start bg-zinc-950 py-3 rounded-lg w-full">
      {(title || iconUrl) && (
        <div className="flex items-center mb-2 ml-3 gap-2">
          {iconUrl && (
            <img
              src={iconUrl}
              className="w-3 h-6 object-fill"
              alt="icon"
            />
          )}
          {title && <span className="text-white text-sm text-left">{title}</span>}
        </div>
      )}

      {tips.map((tip, i) => (
        <span key={i} className="text-[#9D9DAF] text-sm mx-3 text-left">
          {tip}
        </span>
      ))}
    </div>
  );
};

export default Tips;
