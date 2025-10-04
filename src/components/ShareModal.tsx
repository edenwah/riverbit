import { useState, type JSX, useRef } from "react";
import html2canvas from "html2canvas";
import PrimaryButton from "./Button/PrimaryButton";
import { SecondaryButton } from "./Button/SecondaryButton";

type ShareModalProps = {
  coinName: string;
  logoUrl: string | JSX.Element;
  changePercent: string;
  entryPrice?: string;
  markPrice?: string;
  liqPrice?: string;
  onClose: () => void;
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
    `Trade ${coinName} seamlessly on @RiverBit — join me!`
  );
  const [overlays, setOverlays] = useState<string[]>([]); // 所有上傳過嘅圖
  const [selectedOverlay, setSelectedOverlay] = useState<string | null>(null); // 現時背景圖

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 檢查類型
    const allowedTypes = ["image/png", "image/svg+xml"];
    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a PNG or SVG image.");
      return;
    }

    // 檢查大小
    if (file.size > 2 * 1024 * 1024) {
      alert("File size must be under 2MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
      const imgData = ev.target?.result as string;
      setOverlays((prev) => [...prev, imgData]);
      setSelectedOverlay(imgData); // 自動選中
    };
    reader.readAsDataURL(file);
  };

  const handleChooseFile = () => {
    const input = document.getElementById("overlay-upload");
    input?.click();
  };

  const handleDelete = (img: string) => {
    setOverlays((prev) => prev.filter((o) => o !== img));
    if (selectedOverlay === img) setSelectedOverlay(null);
  };

  const bodyRef = useRef<HTMLDivElement>(null);

  const saveAsImage = async () => {
    if (!bodyRef.current) return;
    const canvas = await html2canvas(bodyRef.current, {
      backgroundColor: null, // 保留透明
      useCORS: true,
      scale: 2,
    });
    const link = document.createElement("a");
    link.download = `${coinName}-share.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };


  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000B0]">
      <div
        className="w-full max-w-3xl mx-4 flex flex-col bg-[#272B2F] rounded-lg border border-gray-700 overflow-hidden relative"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700 bg-[#272B2FCC]">
          <span className="text-white text-lg font-bold">Share</span>
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/73d3cc65_expires_30_days.png"
            className="w-9 h-9 object-fill cursor-pointer"
            onClick={onClose}
            alt="Close"
          />
        </div>

        {/* Body */}
        <div
          ref={bodyRef}
          className="text-left items-start flex flex-col gap-4 relative rounded-lg p-6"
          style={{
            backgroundImage: selectedOverlay ? `url(${selectedOverlay})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* 半透明遮罩 */}
          <div className="absolute inset-0 bg-[#272B2F]/50 rounded-lg pointer-events-none"></div>

          {/* Body Content */}
          <div className="relative z-10 w-full flex flex-col gap-4">
            {/* Logo */}
            {typeof logoUrl === "string" ? (
              <img src={logoUrl} alt={coinName} className="w-10 h-10 rounded-full" />
            ) : (
              logoUrl
            )}

            <div className="flex flex-col md:flex-row gap-6 text-white w-full">
              {/* Left side */}
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

              {/* Right side */}
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

                {/* Upload */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#8B949E] text-sm">Overlay background image</label>
                  <span className="text-sm">PNG or SVG only, max 2MB</span>

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

                  {/* 已上傳圖片 */}
                  {overlays.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {overlays.map((img, index) => (
                        <div
                          key={index}
                          className={`relative w-20 h-20 rounded overflow-hidden border-2 cursor-pointer ${
                            selectedOverlay === img
                              ? "border-[#2DA44E]"
                              : "border-gray-600"
                          }`}
                          onClick={() => setSelectedOverlay(img)}
                        >
                          <img
                            src={img}
                            alt={`overlay-${index}`}
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(img);
                            }}
                            className="absolute top-1 right-1 bg-black/70 rounded-full p-1"
                          >
                            {/* inline Heroicon X (use inside your delete button) */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 w-3.5 text-white"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M6 18L18 6" />
                              <path d="M6 6l12 12" />
                            </svg>

                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 p-6 border-t border-gray-700 bg-[#272B2FCC]">
          <div className="flex flex-row gap-3">
            <SecondaryButton size="large" onClick={saveAsImage}>
              Save Image
            </SecondaryButton>
            <SecondaryButton size="large" onClick={() => alert("Link copied!")}>
              Copy Link
            </SecondaryButton>
          </div>
          <div className="flex flex-col gap-3">
            <PrimaryButton size="large" onClick={() => alert("Shared on X!")}>
              Share on X
            </PrimaryButton>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ShareModal;
