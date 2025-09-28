import React from "react";
import PrimaryButton from "./Button/PrimaryButton";
import { SecondaryButton } from "./Button/SecondaryButton";

type ConfirmCloseModalProps = {
  coinName: string;          // 要平倉幣名
  onClose: () => void;       // 關閉 modal
  onConfirm?: () => void;    // 確認平倉
};

const ConfirmCloseModal = ({ coinName, onClose, onConfirm }: ConfirmCloseModalProps) => {
  return (
    <div className="w-full flex flex-col items-center self-stretch bg-[#000000B0] py-[197px]">
      <div className="w-full m-0 md:m-auto flex flex-col bg-[#272B2F] h-[200px] md:h-auto py-[1px] rounded-lg border border-solid border-gray-700">
        
        {/* Header */}
        <div className="flex items-center self-stretch p-6 mx-[1px]">
          <span className="flex-1 text-white text-lg font-bold">Confirm Close</span>
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/73d3cc65_expires_30_days.png"
            className="w-11 h-11 object-fill cursor-pointer"
            onClick={onClose}
            alt="Close"
          />
        </div>

        {/* Body */}
        <div className="flex flex-col items-center justify-center flex-1 px-6">
          <span className="text-white text-base text-center">
            Are you sure you want to close position <strong>{coinName}</strong>?
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4 p-6">
          <SecondaryButton size="large" onClick={onClose}>
            Cancel
          </SecondaryButton>
          <PrimaryButton
            size="large"
            onClick={() => {
              onConfirm?.();
              onClose();
            }}
          >
            Confirm
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCloseModal;
