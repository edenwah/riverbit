export function PrimaryButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      className="flex flex-col shrink-0 items-start bg-fuchsia-800 text-left py-[11px] px-4 rounded-sm border-0"
      onClick={onClick}
    >
      <span className="text-white text-sm font-bold">{children}</span>
    </button>
  );
}
