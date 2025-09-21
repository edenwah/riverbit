import React from "react";

interface RiverbitLogoProps {
  className?: string;
}

const RiverbitLogo: React.FC<RiverbitLogoProps> = ({ className }) => {
  return (
    <img
      src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/tsg0s0tv_expires_30_days.png"
      className={`w-[118px] h-10 object-fill ${className || ""}`}
      alt="Riverbit Logo"
    />
  );
};

export default RiverbitLogo;