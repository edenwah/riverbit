import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import PrimaryButton from "./Button/PrimaryButton";
import { SecondaryButton } from "./Button/SecondaryButton";
import ToggleWithText from "./ToggleWithText";

interface NavItem {
  label: string;
  to: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  balance?: string;
  points?: string;
  language: string;
  setLanguage: (val: string) => void;
}


const navItems: NavItem[] = [
  { label: "Trading", to: "/trading" },
  { label: "RiverPool", to: "/riverpool" },
  { label: "Earn", to: "/earn" },
  { label: "Referral", to: "/referral" },
  { label: "Assets", to: "/assets" },
];

const moreItems: NavItem[] = [
  { label: "API", to: "/api" },
  { label: "Documentation", to: "/docs" },
  { label: "Announcement", to: "/announcement" },
];

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  balance = "$27,345.12",
  points = "1,250,000",
  language = "EN",
  setLanguage,
}) => {
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();
  if (!isOpen) return null;

  const isActive = (to: string) => {
    if (to === "/trading") return location.pathname === "/" || location.pathname === "/trading";
    return location.pathname === to;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex flex-col xl:hidden">
      <div className="w-[100vw] flex flex-col bg-zinc-900 h-full shadow-lg p-6">
        {/* Close button */}
        <button
          className="self-end mb-6"
          onClick={onClose}
          aria-label="Close menu"
        >
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* Menu items */}
        <div className="overflow-auto flex flex-col h-full justify-between">
          {/* Upper: Nav items */}
          <div className="flex flex-col">
            {/* Main nav items */}
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={onClose}
                className={`flex flex-col items-start py-3 px-3 mb-2 rounded-sm ${
                  isActive(item.to) ? "bg-zinc-700 text-white" : "text-zinc-400"
                }`}
              >
                <span className="text-sm">{item.label}</span>
              </Link>
            ))}

            {/* More with inline submenu */}
            <div className="flex flex-col mb-2">
              <button
                className="flex items-center justify-between py-3 px-3 rounded-sm text-zinc-400 text-sm focus:outline-none"
                onClick={() => setShowMore((v) => !v)}
                type="button"
              >
                <span>More</span>
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/wo9zz3y5_expires_30_days.png"
                  className={`w-3 h-[15px] object-fill transform transition-transform ${showMore ? "rotate-180" : ""}`}
                  alt="More"
                />
              </button>

              {showMore && (
                <div className="flex flex-col ml-6 text-left">
                  {moreItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={onClose}
                      className={`py-2 text-sm ${
                        isActive(item.to) ? "text-white font-bold" : "text-zinc-400"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Lower: Settings */}
          <div className="flex flex-col gap-4 pt-4 border-t border-[#30363D]">
            
            {/* Balance and Points */}
            <div className="flex flex-row justify-between mt-4 mb-2">
              <div className="flex flex-col flex-1 items-start">
                <span className="text-zinc-400 text-md">Balance</span>
                <span className="text-white text-md">{balance}</span>
              </div>
              <div className="flex flex-col flex-1 items-start">
                <span className="text-zinc-400 text-md">Points</span>
                <span className="text-white text-md">{points}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-row gap-2 text-center w-full">
              <PrimaryButton size="large" onClick={() => alert("Deposit clicked!")}>
                Deposit
              </PrimaryButton>
              <SecondaryButton size="large" onClick={() => alert("Withdraw clicked!")}>
                Withdraw
              </SecondaryButton>
            </div>
            
            {/* Language and Disconnect */}
            <ToggleWithText
              options={["EN", "中文"]}
              value={language}
              onChange={setLanguage} // 直接用 props
            />

            <SecondaryButton
              onClick={() => alert("Disconnect Wallet")}
              size="medium"
              icon={
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/7ru13dyc_expires_30_days.png"
                  className="w-5 h-5 object-fill"
                />
              }
            >
              Disconnect Wallet
            </SecondaryButton>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
