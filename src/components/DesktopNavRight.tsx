import { useEffect, useMemo, useRef, useState } from "react";
import PrimaryButton from "../components/Button/PrimaryButton";
import { SecondaryButton } from "../components/Button/SecondaryButton";
import { preloadTranslate, translatePage, revertPage } from "../utils/translatePage";
import { useWallet } from "../context/WalletContext";
import { formatTokenAmount, shortenAddress } from "../utils/format";

interface DesktopNavRightProps {
  language: string;
  setLanguage: (lang: string) => void;
}

export default function DesktopNavRight({ language, setLanguage }: DesktopNavRightProps) {
  const [showWalletDropdown, setShowWalletDropdown] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const walletDropdownRef = useRef<HTMLDivElement | null>(null);
  const langDropdownRef = useRef<HTMLDivElement | null>(null);

  const {
    account,
    isConnected,
    isConnecting,
    isCorrectNetwork,
    balances,
    balancesLoading,
    connectWallet,
    disconnectWallet,
    ensureCorrectNetwork,
    openDepositModal,
    openWithdrawModal,
  } = useWallet();

  useEffect(() => {
    preloadTranslate("en", "zh-CN");
  }, []);

  // Close dropdowns when clicking outside of them.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        walletDropdownRef.current &&
        !walletDropdownRef.current.contains(event.target as Node)
      ) {
        setShowWalletDropdown(false);
      }
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setShowLangDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayDexBalance = useMemo(() => {
    if (!isConnected || !isCorrectNetwork) {
      return "--";
    }
    if (balancesLoading) {
      return "加载中…";
    }
    const usdcBalance = formatTokenAmount(balances.dex.USDC, 6);
    const ethBalance = balances.dex.ETH > 0n ? ` / ${formatTokenAmount(balances.dex.ETH, 18)} ETH` : "";
    return `${usdcBalance} USDC${ethBalance}`;
  }, [balances, balancesLoading, isConnected, isCorrectNetwork]);

  const handleConnect = async () => {
    try {
      await connectWallet();
    } finally {
      setShowWalletDropdown(false);
    }
  };

  const handleDisconnect = () => {
    disconnectWallet();
    setShowWalletDropdown(false);
  };

  const handleDeposit = () => {
    openDepositModal();
    setShowWalletDropdown(false);
  };

  const handleWithdraw = () => {
    openWithdrawModal();
    setShowWalletDropdown(false);
  };

  return (
    <div className="flex items-center gap-4 relative">
      {!isConnected ? (
        <>
          {/* Language dropdown - always visible, login前靠右 */}
          <div className="relative ml-auto" ref={langDropdownRef}>
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
                      if (lang === "中文") translatePage();
                      else revertPage();
                    }}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Connect */}
          <PrimaryButton size="medium" onClick={() => void handleConnect()} disabled={isConnecting}>
            {isConnecting ? "连接中…" : "Connect"}
          </PrimaryButton>
        </>
      ) : (
        <>
          {/* Balance */}
          <div className="flex flex-col shrink-0 items-start">
            <span className="text-zinc-400 text-sm">Balance</span>
            <span className="text-white text-sm">{displayDexBalance}</span>
          </div>

          {/* Points */}
          <div className="flex flex-col shrink-0 items-start">
            <span className="text-zinc-400 text-sm">Points</span>
            <span className="text-white text-sm">250</span>
          </div>

          {/* Wallet dropdown */}
          <div className="relative" ref={walletDropdownRef}>
            <button
              className="flex shrink-0 items-center bg-zinc-900 py-2.5 px-3 gap-2 rounded-sm border border-solid border-[#30363D] text-sm text-white hover:border-zinc-600"
              onClick={() => setShowWalletDropdown((v) => !v)}
            >
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/7ru13dyc_expires_30_days.png"
                className="w-5 h-5 rounded-sm object-fill"
              />
              <span className="hidden md:inline font-semibold">
                {account ? shortenAddress(account) : "Wallet"}
              </span>
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/wbxxcfe7_expires_30_days.png"
                className="w-3 h-[15px] rounded-sm object-fill"
              />
            </button>
            {showWalletDropdown && (
              <div className="absolute right-0 mt-2 z-50 min-w-48 bg-zinc-900 border border-[#30363D] rounded shadow-lg">
                <div className="px-4 py-3 text-sm text-zinc-300 border-b border-[#30363D]">
                  <div className="font-semibold text-white break-words">{account}</div>
                  <div className="mt-2 text-xs text-zinc-400">
                    {balancesLoading
                      ? "余额加载中…"
                      : `DEX：${formatTokenAmount(balances.dex.USDC, 6)} USDC${
                          balances.dex.ETH > 0n
                            ? ` / ${formatTokenAmount(balances.dex.ETH, 18)} ETH`
                            : ""
                        }`}
                  </div>
                  {!isCorrectNetwork && (
                    <button
                      className="mt-3 w-full rounded-sm border border-amber-500/70 bg-amber-500/10 py-1 text-xs text-amber-300"
                      onClick={() => void ensureCorrectNetwork()}
                    >
                      切换到 Arbitrum Sepolia
                    </button>
                  )}
                </div>
                <button
                  className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-zinc-800"
                  onClick={handleDisconnect}
                >
                  Disconnect
                </button>
              </div>
            )}
          </div>

          {/* Language dropdown - 登入後排 Wallet右邊 */}
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
                      if (lang === "中文") translatePage();
                      else revertPage();
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
        </>
      )}
    </div>
  );
}
