import React, { useState } from "react";
import PrimaryButton from "./Button/PrimaryButton";

interface AdjustMarginModalProps {
  coin: string; 
  currentMargin: number;   // 當前 margin
  availableMargin: number; // 可用 margin
  onClose: () => void;
  onConfirm?: (amount: number) => void;
}

const AdjustMarginModal: React.FC<AdjustMarginModalProps> = ({
  coin,
  currentMargin,
  availableMargin,
  onClose,
  onConfirm,
}) => {
  const [amount, setAmount] = useState<number>(0);

  const handleMax = () => {
    setAmount(availableMargin);
  };

  return (
    <div className="w-full fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div
      className="relative w-full h-full md:w-[500px] md:h-auto md:rounded-xl flex flex-col justify-center"
      style={{ maxWidth: "100vw", maxHeight: "100vh" }}
      >
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#272B2F] rounded-lg border border-gray-700 w-full max-w-md p-6 flex flex-col gap-4">
            
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-lg font-bold">Adjust Margin</h2>
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/73d3cc65_expires_30_days.png"
                alt="close"
                className="w-8 h-8 cursor-pointer"
                onClick={onClose}
              />
            </div>

            {/* Description */}
            <p className="text-[#8B949E] text-sm">
              Decrease the chance of liquidation by adding more margin or remove excess margin to use for other positions.
            </p>

            {/* Amount Input */}
            <div className="flex flex-col gap-2">
              <span className="text-[#9D9DAF] text-sm">Amount</span>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="0"
                  value={amount}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    setAmount(isNaN(val) ? 0 : val);
                  }}
                  className="flex-1 bg-zinc-950 text-white p-3 rounded-sm border border-[#30363D] focus:outline-none"
                />
                <button
                  onClick={handleMax}
                  className="bg-zinc-700 text-white px-3 py-2 rounded"
                >
                  MAX
                </button>
              </div>
            </div>

            {/* Info Rows */}
            <div className="flex flex-col gap-1 text-sm text-[#9D9DAF]">
              <div className="flex justify-between">
                <span>Current margin for {coin}</span>
                <span>${currentMargin.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Margin available to add</span>
                <span>${availableMargin.toFixed(2)}</span>
              </div>
            </div>

            {/* Confirm */}
            <PrimaryButton
              size="large"
              onClick={() => onConfirm && onConfirm(amount)}
            >
              Confirm
            </PrimaryButton>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdjustMarginModal;
