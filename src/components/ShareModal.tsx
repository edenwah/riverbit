import { useState, type JSX } from "react";
import PrimaryButton from "./Button/PrimaryButton";
import { SecondaryButton } from "./Button/SecondaryButton";

type ShareModalProps = {
  coinName: string;                     // e.g. "ETH/USD"
  logoUrl: string | JSX.Element;        // coin logo (image URL or component)
  changePercent: string;                // e.g. "-13.2%"
  entryPrice?: string;
  markPrice?: string;
  liqPrice?: string;
  onClose: () => void;                  // close modal
};

const ShareModal = ({
  coinName,
  logoUrl,
  changePercent,
  entryPrice,
  markPrice,
  liqPrice,
  onClose,
}: ShareModalProps) => {
  const [customText, setCustomText] = useState(
    `Trade $${coinName} seamlessly on @RiverBit — join me!`
  );
  const [overlay, setOverlay] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // only accept PNG / SVG
      const allowedTypes = ["image/png", "image/svg+xml"];
      if (!allowedTypes.includes(file.type)) {
        alert("Please upload a PNG or SVG image.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (ev) => setOverlay(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  // helper to trigger hidden file input
  const handleChooseFile = () => {
    const fileInput = document.getElementById("overlay-upload");
    fileInput?.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000B0]">
      <div className="w-full max-w-3xl mx-4 flex flex-col bg-[#272B2F] rounded-lg border border-gray-700 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <span className="text-white text-lg font-bold">Share</span>
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/73d3cc65_expires_30_days.png"
            className="w-9 h-9 object-fill cursor-pointer"
            onClick={onClose}
            alt="Close"
          />
        </div>

        {/* Body */}
        <div className="text-left items-start flex flex-col m-6 gap-4">
          {/* Logo */}
          {typeof logoUrl === "string" ? (
            <img src={logoUrl} alt={coinName} className="w-10 h-10 rounded-full" />
          ) : (
            logoUrl
          )}

          <div className="flex flex-col md:flex-row gap-6 text-white w-full">
            {/* Left side: Coin info */}
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="font-bold text-xl">{coinName}</div>
              <div
                className={`text-xl ${
                  changePercent.startsWith("-") ? "text-[#F85149]" : "text-[#2DA44E]"
                }`}
              >
                {changePercent}
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                {entryPrice && (
                  <div>
                    <div className="text-[#8B949E]">Entry Price</div>
                    <div className="font-bold">{entryPrice}</div>
                  </div>
                )}
                {markPrice && (
                  <div>
                    <div className="text-[#8B949E]">Mark Price</div>
                    <div className="font-bold">{markPrice}</div>
                  </div>
                )}
                {liqPrice && (
                  <div>
                    <div className="text-[#8B949E]">Liq Price</div>
                    <div className="font-bold">{liqPrice}</div>
                  </div>
                )}
              </div>

              <div className="text-sm">
                <div className="text-[#8B949E]">Referral Code:</div>
                <div className="break-all">https://app.hyperliquid.xyz/join/</div>
              </div>
            </div>

            {/* Right side: customization */}
            <div className="flex flex-col gap-4 w-full">
              <div>
                <div className="text-[#8B949E] text-sm mb-1">Customize your text</div>
                <textarea
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  className="w-full p-2 rounded bg-[#1C1F23] border border-gray-700 text-white text-sm resize-none"
                  rows={3}
                />
              </div>

              {/* Overlay upload */}
              <div className="flex flex-col gap-2">
                <label className="text-[#8B949E] text-sm">Overlay background image</label>
                <span className="text-sm">PNG or SVG only, max 2MB</span>
                {/* Hidden input */}
                <input
                  id="overlay-upload"
                  type="file"
                  accept=".png, .svg"
                  onChange={handleUpload}
                  className="hidden"
                />

                <SecondaryButton size="small" onClick={handleChooseFile}>
                  Choose File
                </SecondaryButton>

                {overlay && (
                  <img
                    src={overlay}
                    alt="Overlay"
                    className="w-full h-32 object-cover rounded"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 p-6 border-t border-gray-700">
          <PrimaryButton size="large" onClick={() => alert("Image saved!")}>
            Save Image
          </PrimaryButton>
          <SecondaryButton size="large" onClick={() => alert("Link copied!")}>
            Copy Link
          </SecondaryButton>
          <PrimaryButton size="large" onClick={() => alert("Shared on X!")}>
            Share on X
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
