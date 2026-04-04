"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { useLocale } from "@/components/providers/locale-provider";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-[0.02em] transition-all outline-none disabled:pointer-events-none disabled:opacity-45 focus-visible:ring-2 focus-visible:ring-rose-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
  {
    variants: {
      variant: {
        primary:
          "bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(253,242,248,0.9),rgba(251,207,232,0.88))] text-zinc-950 shadow-[0_18px_50px_rgba(190,24,93,0.16)] hover:-translate-y-0.5 hover:shadow-[0_22px_65px_rgba(190,24,93,0.22)]",
        secondary:
          "border border-white/55 bg-white/45 text-zinc-800 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl hover:border-white/75 hover:bg-white/70",
        ghost:
          "text-zinc-700 hover:bg-white/50 hover:text-zinc-950",
      },
      size: {
        default: "h-12 px-6",
        lg: "h-14 px-7 text-[0.95rem]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, ...props },
  ref,
) {
  const { locale } = useLocale();

  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }), locale === "th" ? "tracking-[0.01em]" : undefined)}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
