import { useState, type JSX } from "react";
import PrimaryButton from "./Button/PrimaryButton";
import { SecondaryButton } from "./Button/SecondaryButton";

type ShareModalProps = {
  coinName: string;                     // 幣名 e.g. "ETH/USD"
  logoUrl: string | JSX.Element;        // 幣 Logo
  changePercent: string;                // e.g. "-13.2%"
  liqPrice?: string;
  onClose: () => void;                  // 關閉 modal
};

const ShareModal = ({
  coinName,
  logoUrl,
  changePercent,
  liqPrice,
  onClose,
}: ShareModalProps) => {
  const [customText, setCustomText] = useState(
    `在 @RiverBit 上无缝交易 $${coinName}，使用我`
  );
  const [overlay, setOverlay] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => setOverlay(ev.target?.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000B0]">
      <div className="w-full max-w-md mx-4 flex flex-col bg-[#272B2F] rounded-lg border border-gray-700 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className="text-white text-lg font-bold">Share</span>
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/73d3cc65_expires_30_days.png"
            className="w-9 h-9 object-fill cursor-pointer"
            onClick={onClose}
            alt="Close"
          />
        </div>

        {/* Body */}
        <div className="text-left items-start flex flex-col p-6 gap-4 text-white">
          {/* Coin Info */}
          <div className="flex flex-col items-center gap-3">
            {/* Riverbit Logo */}
            {typeof logoUrl === "string" ? (
              <img src={logoUrl} alt={coinName} className="w-10 h-10 rounded-full" />
            ) : (
              logoUrl
            )}
            {/* Coin Name and Change Percent */}
            <div>
              <div className="font-bold text-lg">{coinName}</div>
              <div className={changePercent.startsWith("-") ? "text-[#F85149]" : "text-[#2DA44E]"}>
                {changePercent}
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-[#8B949E]">Liq Price</div>
              <div className="font-bold">{liqPrice}</div>
            </div>
          </div>

          {/* Referral */}
          <div className="text-sm">
            <div className="text-[#8B949E]">Referral link:</div>
            <div className="break-all">https://app.hyperliquid.xyz/join/</div>
          </div>

          <div className="text-sm">
            <div className="text-[#8B949E]">Referral link:</div>
            <div className="break-all">https://app.hyperliquid.xyz/join/</div>
          </div>

          {/* Custom Text */}
          <div>
            <div className="text-[#8B949E] text-sm mb-1">Customize your text</div>
            <textarea
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="w-full p-2 rounded bg-[#1C1F23] border border-gray-700 text-white text-sm resize-none"
              rows={3}
            />
          </div>

          {/* Overlay Upload */}
          <div className="flex flex-col gap-2">
            <label className="text-[#8B949E] text-sm">Overlay Background Image</label>
            <input type="file" accept="image/*" onChange={handleUpload} />
            {overlay && (
              <img src={overlay} alt="Overlay" className="w-full h-32 object-cover rounded" />
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 p-6 border-t border-gray-700">
          <PrimaryButton size="large" onClick={() => alert("Save as Image")}>
            Save as Image
          </PrimaryButton>
          <SecondaryButton size="large" onClick={() => alert("Copy Link")}>
            Copy Link
          </SecondaryButton>
          <PrimaryButton size="large" onClick={() => alert("Share on X")}>
            Share on X
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
