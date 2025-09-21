import React from "react";

interface PrimaryButtonLargeProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function PrimaryButtonLarge({ children, onClick }: PrimaryButtonLargeProps) {
  return (
    <button
      className="w-full flex justify-center items-center bg-fuchsia-800 py-3.5 rounded-sm border-0"
      onClick={onClick}
    >
      <span className="text-white text-base font-bold text-center">
        {children}
      </span>
    </button>
  );
}
