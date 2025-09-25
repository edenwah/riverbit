import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import PrimaryButton from "../components/Button/PrimaryButton";
import { SecondaryButton } from "../components/Button/SecondaryButton";
export default function DesktopNavRight({ balance, points, language, setLanguage, }) {
    const [showWalletDropdown, setShowWalletDropdown] = useState(false);
    const [showLangDropdown, setShowLangDropdown] = useState(false);
    const walletDropdownRef = useRef(null);
    const langDropdownRef = useRef(null);
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
    return (_jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("div", { className: "flex flex-col shrink-0 items-start", children: [_jsx("span", { className: "text-zinc-400 text-sm", children: "Balance" }), _jsx("span", { className: "text-white text-sm", children: balance })] }), _jsx("div", { className: "w-[1px] h-8 hidden xl:block" }), _jsxs("div", { className: "flex flex-col shrink-0 items-start", children: [_jsx("span", { className: "text-zinc-400 text-sm", children: "Points" }), _jsx("span", { className: "text-white text-sm", children: points })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("div", { className: "relative", ref: walletDropdownRef, children: [_jsxs("button", { className: "flex shrink-0 items-center bg-zinc-900 py-2.5 px-3 gap-2 rounded-sm border border-solid border-[#30363D]", onClick: () => setShowWalletDropdown((v) => !v), children: [_jsx("img", { src: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/7ru13dyc_expires_30_days.png", className: "w-5 h-5 rounded-sm object-fill" }), _jsx("img", { src: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/wbxxcfe7_expires_30_days.png", className: "w-3 h-[15px] rounded-sm object-fill" })] }), showWalletDropdown && (_jsx("div", { className: "absolute right-0 mt-2 z-50 min-w-48 bg-zinc-900 border border-[#30363D] rounded shadow-lg", children: _jsx("button", { className: "w-full text-left px-4 py-2 hover:bg-zinc-800 text-sm text-red-400", onClick: handleDisconnectWallet, children: "Disconnect Wallet" }) }))] }), _jsxs("div", { className: "relative", ref: langDropdownRef, children: [_jsxs("button", { className: "flex shrink-0 items-center bg-zinc-900 text-left py-2.5 px-4 gap-2.5 rounded-sm border border-solid border-[#30363D]", onClick: () => setShowLangDropdown((v) => !v), children: [_jsx("img", { src: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/oyc1zap7_expires_30_days.png", className: "w-3.5 h-[19px] rounded-sm object-fill" }), _jsx("span", { className: "text-[#C9D1D9] text-sm", children: language }), _jsx("img", { src: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/qdm0wdb6_expires_30_days.png", className: "w-3 h-[15px] object-fill" })] }), showLangDropdown && (_jsx("div", { className: "absolute right-0 mt-2 z-50 min-w-[100px] bg-zinc-900 border border-[#30363D] rounded shadow-lg", children: ["EN", "中文"].map((lang) => (_jsx("button", { className: `w-full text-left px-4 py-2 hover:bg-zinc-800 text-sm ${language === lang ? "text-fuchsia-400 font-bold" : "text-white"}`, onClick: () => {
                                        setLanguage(lang);
                                        setShowLangDropdown(false);
                                    }, children: lang }, lang))) }))] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(SecondaryButton, { size: "medium", onClick: handleWithdraw, children: "Withdraw" }), _jsx(PrimaryButton, { size: "medium", onClick: handleDeposit, children: "Deposit" })] })] })] }));
}
