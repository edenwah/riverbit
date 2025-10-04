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
    `Trade ${coinName} seamlessly on RiverBit — join me!`
  );
  const [overlays, setOverlays] = useState<string[]>([]);
  const [selectedOverlay, setSelectedOverlay] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const allowedTypes = ["image/png", "image/svg+xml"];
    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a PNG or SVG image.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      alert("File size must be under 2MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const imgData = ev.target?.result as string;
      setOverlays((prev) => [...prev, imgData]);
      setSelectedOverlay(imgData);
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

  // 左邊 container ref
  const leftRef = useRef<HTMLDivElement>(null);

  const saveAsImage = async () => {
    if (!leftRef.current) return;

    // 手動覆寫 oklch/oklab 顏色
    const elements = leftRef.current.querySelectorAll("*");
    elements.forEach((el) => {
      const style = window.getComputedStyle(el);
      const newStyle = el as HTMLElement;
      if (style.color.includes("oklch") || style.color.includes("oklab")) {
        newStyle.style.color = "rgb(255, 255, 255)";
      }
      if (style.backgroundColor.includes("oklch") || style.backgroundColor.includes("oklab")) {
        newStyle.style.backgroundColor = "rgb(39, 43, 47)";
      }
      if (style.borderColor.includes("oklch") || style.borderColor.includes("oklab")) {
        newStyle.style.borderColor = "rgb(39, 43, 47)";
      }
    });

    const canvas = await html2canvas(leftRef.current, {
      backgroundColor: null,
      useCORS: true,
      scale: 2,
    });

    const link = document.createElement("a");
    link.download = `${coinName}-share.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const [input1, setInput1] = useState("https://app.hyperliquid.xyz/join/");

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000B0]">
      <div className="w-full max-w-4xl mx-4 flex flex-col bg-[#272B2F] rounded-lg border border-gray-700 overflow-hidden relative">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700 ">
          <span className="text-white text-lg font-bold">Share</span>
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/73d3cc65_expires_30_days.png"
            className="w-9 h-9 object-fill cursor-pointer"
            onClick={onClose}
            alt="Close"
          />
        </div>

        {/* Body */}
        <div className="flex flex-col md:flex-row gap-4 relative text-left bg-[#272B2F]">
          {/* 左邊：logo + coin info + background */}
          <div
            ref={leftRef}
            className="relative flex flex-col gap-4 p-6 w-full md:w-1/2 rounded-lg"
            style={{
              backgroundImage: selectedOverlay ? `url(${selectedOverlay})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{ backgroundColor: "rgba(39, 43, 47, 0.8)" }}
            ></div>

            <div className="relative z-10 flex flex-col gap-4 text-white justify-between h-full">
              {typeof logoUrl === "string" ? (
                <img src={logoUrl} alt={coinName} className="w-12 h-12 rounded-full" />
              ) : (
                logoUrl
              )}
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="font-bold text-3xl">{coinName}</div>
                  <div
                    className={`px-2 py-1 text-xl text-white rounded-md ${
                      changePercent.startsWith("-") ? "bg-[#F85149]" : "bg-[#2DA44E]"
                    }`}
                  >
                    {changePercent}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-md">
                  {liqPrice && (
                    <div>
                      <div className="text-[#8B949E]">Liq Price</div>
                      <div className="font-bold text-3xl">{liqPrice}</div>
                    </div>
                  )}
                </div>

                {/* 加入 custom message */}
                <div className="mt-4 rounded-md text-white font-bold text-3xl text-wrap">
                  {customText}
                </div>

                <div className="text-sm">
                  <div className="text-[#8B949E]">Referral Link:</div>
                  <div className="break-all">{input1}</div>
                </div>
              </div>
            </div>
          </div>

          {/* 右邊：custom content */}
          <div className="flex flex-col gap-4 p-6 w-full md:w-1/2">
            {/* Referral Link */}
            <div className="flex flex-col items-start self-stretch gap-2">
              <div className="flex flex-col items-center pb-[1px]">
                <span className="text-[#8B949E] text-sm">Your Referral Link:</span>
              </div>
              <div className="flex flex-row w-full gap-4">
                <input
                  placeholder="https://app.hyperliquid.xyz/join/"
                  value={input1}
                  onChange={(event) => onChangeInput1(event.target.value)}
                  className="w-full text-white bg-[#0D1117] text-sm py-4 px-4 rounded-md border border-solid border-[#30363D]"
                />
                <PrimaryButton
                  size="small"
                  onClick={() => {
                    navigator.clipboard.writeText(input1)
                      .then(() => {
                        alert("Referral link copied!");
                      })
                      .catch(() => {
                        alert("Failed to copy. Please try manually.");
                      });
                  }}
                >
                  Copy
                </PrimaryButton>
              </div>
            </div>

            {/* Textarea */}
            <div>
              <div className="text-[#8B949E] text-sm mb-1">Customize your message</div>
              <textarea
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full p-2 rounded bg-[#1C1F23] border border-gray-700 text-white text-sm resize-none"
                rows={3}
              />
            </div>

            {/* Upload */}
            <div className="flex flex-col gap-2">
              <label className="text-[#8B949E] text-sm">Overlay</label>
              <span className="text-white text-sm">PNG or SVG only, max 2MB</span>

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

        {/* Buttons */}
        <div className="flex flex-row gap-3 p-6 border-t border-gray-700 bg-[#272B2FCC]">
          <SecondaryButton size="large" onClick={saveAsImage}>
            Save Image
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
