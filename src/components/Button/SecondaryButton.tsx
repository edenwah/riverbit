export function SecondaryButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      className="flex flex-col shrink-0 items-start bg-zinc-900 text-left py-[11px] px-4 rounded-sm border border-solid border-[#30363D]"
      onClick={onClick}
    >
      <span className="text-white text-sm font-bold">{children}</span>
    </button>
  );
}
