import React from "react";

interface SecondaryButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  size?: "small" | "medium" | "large"; // 控制大小
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({ onClick, children, size = "medium" }) => {
  let sizeClasses = "";
  switch (size) {
    case "small":
      sizeClasses = "py-2 px-3 text-sm"; // 小
      break;
    case "medium":
      sizeClasses = "py-[11px] px-4 text-sm"; // 中
      break;
    case "large":
      sizeClasses = "py-3.5 px-4 text-base"; // 大
      break;
  }

  return (
    <button
      className={`flex flex-col shrink-0 items-start bg-zinc-900 text-left rounded-sm border border-solid border-[#30363D] ${sizeClasses}`}
      onClick={onClick}
    >
      <span className="text-white font-bold text-center">
        {children}
      </span>
    </button>
  );
};