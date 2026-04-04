import * as React from "react";

import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-white/45 bg-white/58 shadow-[0_18px_60px_rgba(15,23,42,0.08),0_2px_0_rgba(255,255,255,0.4)_inset] backdrop-blur-2xl",
        className,
      )}
      {...props}
    />
  );
}
