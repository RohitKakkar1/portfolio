"use client";

// Course purchase button. Razorpay integration comes later — for now it shows a
// friendly "coming soon" note. Wire the real checkout in handleBuy().

import { useState } from "react";
import { ArrowRight } from "@/components/ui/icons";

export default function PurchaseButton({ price }: { price: string }) {
  const [clicked, setClicked] = useState(false);

  const handleBuy = () => {
    // TODO: launch Razorpay checkout here.
    setClicked(true);
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        onClick={handleBuy}
        className="inline-flex items-center gap-2 rounded-lg bg-black-100 px-7 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
      >
        Enrol now — {price} <ArrowRight size={18} />
      </button>
      {clicked && (
        <p className="text-xs text-neutral-500">
          Secure checkout (Razorpay) is being set up — hang tight! 🙌
        </p>
      )}
    </div>
  );
}
