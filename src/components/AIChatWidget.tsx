import { useState } from "react";
import ToggleWithText from "./ToggleWithText";
import PrimaryButton from "./Button/PrimaryButton";
import { MicrophoneIcon } from "@heroicons/react/24/solid";

type AIChatWidgetProps = {
  onClose: () => void; // 父層傳入 close callback
};

const AIChatWidget = ({ onClose }: AIChatWidgetProps) => {
  const [input, setInput] = useState("");
  const [tab, setTab] = useState("Chat");

  return (
    <div className="w-full h-full bg-[#1F2226] border border-gray-700 rounded-lg shadow-lg flex flex-col overflow-hidden text-white text-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-600">
        <span className="flex items-center gap-1">
          🤖 AI Assistant Connected
        </span>
        <div className="flex gap-2">
          {/* Close Button */}
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZlYhP85oka/73d3cc65_expires_30_days.png"
            className="w-11 h-11 object-fill cursor-pointer"
            onClick={onClose}
            alt="Close"
          />
        </div>
      </div>

      {/* Body */}
      <div className="h-full flex flex-col p-4 gap-2 overflow-y-auto bg-[#181A1D]">
        <div className="font-bold">AI Trading Assistant</div>
        <div className="text-gray-400 text-xs">
          Enter trading commands to start intelligent conversation
        </div>
        <div className="text-gray-500 text-xs">
          Supports both voice and text input
        </div>
        <div className="text-gray-500 text-xs italic">
          For example: Buy $100 ETH, set 5% stop-loss...
        </div>
        {/* Chat content left empty */}
      </div>

      {/* Input + Buttons */}
      <div className="flex items-center border-t border-gray-600 p-2 gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message..."
          className="w-full px-2 py-3 rounded bg-[#0D1117] text-white text-xs outline-none border border-solid border-[#30363D]"
        />

        {/* Send Button */}
        <PrimaryButton
          size="large"
          onClick={() => {
            console.log("Send:", input);
            setInput("");
          }}
        >
          Send
        </PrimaryButton>

        {/* Voice Input Button */}
        <button
          className="p-3 rounded-full bg-zinc-950 text-white hover:bg-fuchsia-700 focus:bg-fuchsia-700 transition"
          onClick={() => {
            // 確保瀏覽器支持
            const SpeechRecognition =
              (window as any).SpeechRecognition ||
              (window as any).webkitSpeechRecognition;

            if (!SpeechRecognition) {
              alert("Your browser does not support voice recognition.");
              return;
            }

            const recognition = new SpeechRecognition();
            recognition.lang = "en-US"; // 可以改成 zh-HK, zh-CN, etc
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;

            recognition.start();

            recognition.onresult = (event: any) => {
              const transcript = event.results[0][0].transcript;
              console.log("Voice input:", transcript);
              setInput(transcript); // 將語音輸入填入 input
            };

            recognition.onerror = (event: any) => {
              console.error("Speech recognition error:", event.error);
            };
          }}
        >
          <MicrophoneIcon className="h-5 w-5 text-white" />
        </button>
      </div>


      {/* Footer Tabs */}
      <div className="p-2">
        <ToggleWithText
          options={["Chat", "Analysis", "Strategy"]}
          value={tab}
          onChange={setTab}
        />
      </div>
    </div>
  );
};

export default AIChatWidget;
