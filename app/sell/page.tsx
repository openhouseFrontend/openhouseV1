import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";

import { SellPageView } from "@/src/features/sell/sell-page-view";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function SellPage() {
  return (
    <div className={`${playfair.className} ${jakarta.className}`}>
      <SellPageView />
    </div>
  );
}
