import { useRef, useState } from "react";
import PrimaryButton from "../components/Button/PrimaryButton";
import { SecondaryButton } from "../components/Button/SecondaryButton";

interface DesktopNavRightProps {
  balance: string;
  points: string;
  language: string;
  setLanguage: (lang: string) => void;
}

export default function DesktopNavRight({
  balance,
  points,
  language,
  setLanguage,
}: DesktopNavRightProps) {
  const [showWalletDropdown, setShowWalletDropdown] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const walletDropdownRef = useRef<HTMLDivElement | null>(null);
  const langDropdownRef = useRef<HTMLDivElement | null>(null);

  const handleWithdraw = () => {
    alert("Withdraw clicked!");
  };

  const handleDeposit = () => {
    alert("Deposit clicked!");
  };

  const handleDisconnectWallet = () => {
    alert("Wallet disconnected!");
    setShowWalletDropdown(false);
  };

  return (
    <div className="flex items-center gap-4">
      {/* Balance */}
      <div className="flex flex-col shrink-0 items-start">
        <span className="text-zinc-400 text-sm">Balance</span>
        <span className="text-white text-sm">{balance}</span>
      </div>
      <div className="w-[1px] h-8 hidden xl:block" />
      {/* Points */}
      <div className="flex flex-col shrink-0 items-start">
        <span className="text-zinc-400 text-sm">Points</span>
        <span className="text-white text-sm">{points}</span>
      </div>


      <div className="flex items-center gap-4">
        {/* Wallet */}
        <div className="relative" ref={walletDropdownRef}>
          <button
            className="flex shrink-0 items-center bg-zinc-900 py-2.5 px-3 gap-2 rounded-sm border border-solid border-[#30363D]"
            onClick={() => setShowWalletDropdown((v) => !v)}
          >
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/7ru13dyc_expires_30_days.png"
              className="w-5 h-5 rounded-sm object-fill"
            />
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/wbxxcfe7_expires_30_days.png"
              className="w-3 h-[15px] rounded-sm object-fill"
            />
          </button>
          {showWalletDropdown && (
            <div className="absolute right-0 mt-2 z-50 min-w-48 bg-zinc-900 border border-[#30363D] rounded shadow-lg">
              <button
                className="w-full text-left px-4 py-2 hover:bg-zinc-800 text-sm text-red-400"
                onClick={handleDisconnectWallet}
              >
                Disconnect Wallet
              </button>
            </div>
          )}
        </div>

        {/* Language */}
        <div className="relative" ref={langDropdownRef}>
          <button
            className="flex shrink-0 items-center bg-zinc-900 text-left py-2.5 px-4 gap-2.5 rounded-sm border border-solid border-[#30363D]"
            onClick={() => setShowLangDropdown((v) => !v)}
          >
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/oyc1zap7_expires_30_days.png"
              className="w-3.5 h-[19px] rounded-sm object-fill"
            />
            <span className="text-[#C9D1D9] text-sm">{language}</span>
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/qdm0wdb6_expires_30_days.png"
              className="w-3 h-[15px] object-fill"
            />
          </button>
          {showLangDropdown && (
            <div className="absolute right-0 mt-2 z-50 min-w-[100px] bg-zinc-900 border border-[#30363D] rounded shadow-lg">
              {["EN", "中文"].map((lang) => (
                <button
                  key={lang}
                  className={`w-full text-left px-4 py-2 hover:bg-zinc-800 text-sm ${
                    language === lang ? "text-fuchsia-400 font-bold" : "text-white"
                  }`}
                  onClick={() => {
                    setLanguage(lang);
                    setShowLangDropdown(false);
                  }}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Withdraw & Deposit */}
        <div className="flex gap-2">
          <SecondaryButton size="medium" onClick={handleWithdraw}>
            Withdraw
          </SecondaryButton>
          <PrimaryButton size="medium" onClick={handleDeposit}>
            Deposit
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}