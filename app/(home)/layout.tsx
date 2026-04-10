import type { ReactNode } from "react";

import { HomeFooter } from "@/src/features/home/components/home-footer";
import { HomeHeader } from "@/src/features/home/components/home-header";

type Props = {
  children: ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <>
      <HomeHeader />
      <main className="flex-1 bg-slate-50">{children}</main>
      <HomeFooter />
    </>
  );
}
