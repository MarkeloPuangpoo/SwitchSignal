import type { ReactNode } from "react";

import { PoeticGameProvider } from "@/components/providers/poetic-game-provider";

export default function InnerLightLayout({ children }: { children: ReactNode }) {
  return <PoeticGameProvider>{children}</PoeticGameProvider>;
}
