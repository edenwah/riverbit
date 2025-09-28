import { useState, useEffect } from "react";

type OrderRow = {
  price: string;
  size: string | number;
  total: string | number;
  barWidth?: string;
};

export default function OrderBook() {
  const [asks, setAsks] = useState<OrderRow[]>([]);
  const [bids, setBids] = useState<OrderRow[]>([]);

  const generateMockData = () => {
    // 隨機產生 asks
    const newAsks: OrderRow[] = Array.from({ length: 9 }, (_, i) => {
      const price = (110595 - i).toLocaleString();
      const size = (Math.random() * 3).toFixed(3);
      const total = (Math.random() * 16 + 0.2).toFixed(3);
      const barWidth = `${Math.random() * 100}%`;
      return { price, size, total, barWidth };
    });

    // 隨機產生 bids
    const newBids: OrderRow[] = Array.from({ length: 8 }, (_, i) => {
      const price = (110589 - i).toLocaleString();
      const size = (Math.random() * 3).toFixed(3);
      const total = (Math.random() * 12 + 0.2).toFixed(3);
      return { price, size, total };
    });

    setAsks(newAsks);
    setBids(newBids);
  };

  useEffect(() => {
    generateMockData(); // 初始化
    const interval = setInterval(generateMockData, 5000); // 每 5 秒刷新
    return () => clearInterval(interval);
  }, []);

  const maxBidTotal = Math.max(...bids.map(b => Number(b.total)));

  return (
    <div className="flex flex-col items-start w-full">
      {/* Header */}
      <div className="flex items-start py-1 pr-[1px] w-full">
        <span className="text-zinc-400 text-sm my-1 w-full">Price</span>
        <span className="text-zinc-400 text-sm my-1 w-full">Size</span>
        <span className="text-zinc-400 text-sm my-1 w-full">Total</span>
      </div>

      {/* Asks */}
      <div className="flex flex-col w-full">
        {asks.map((row, idx) => (
          <div key={idx} className="relative flex w-full items-center text-sm text-white">
            <div
              className="absolute left-0 top-0 h-full bg-[#EF44441A]"
              style={{ width: row.barWidth }}
            />
            <div className="grid grid-cols-3 w-full relative z-10 py-2">
              <span className="text-[#F85149]">{row.price}</span>
              <span>{row.size}</span>
              <span className="text-zinc-400">{row.total}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full flex-col items-center p-3">
        <span className="text-zinc-400 text-sm">Spread: 1 (0.001%)</span>
      </div>

      {/* Bids */}
      <div className="flex flex-col w-full">
        {bids.map((row, idx) => {
          const barWidth = `${(Number(row.total) / maxBidTotal) * 100}%`;
          return (
            <div key={idx} className="relative flex w-full items-center text-sm text-white">
              <div
                className="absolute left-0 top-0 h-full bg-[#22C55E1A]"
                style={{ width: barWidth }}
              />
              <div className="grid grid-cols-3 w-full relative z-10 py-2">
                <span className="text-[#2DA44E]">{row.price}</span>
                <span>{row.size}</span>
                <span className="text-zinc-400">{row.total}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
