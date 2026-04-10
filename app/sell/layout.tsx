import type { ReactNode } from "react";

import { HomeFooter } from "@/src/features/home/components/home-footer";
import { HomeHeader } from "@/src/features/home/components/home-header";

type Props = {
  children: ReactNode;
};

export default function SellLayout({ children }: Props) {
  return (
    <>
      <HomeHeader />
      <main className="min-h-full bg-white">{children}</main>
      <HomeFooter />
    </>
  );
}
