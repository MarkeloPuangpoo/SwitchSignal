import { cn } from "@/lib/utils";

export function FloatingBackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <div className="absolute left-1/2 top-[-7rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(251,207,232,0.58),rgba(251,207,232,0)_70%)] blur-3xl" />
      <div className="absolute right-[-6rem] top-[10%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(191,219,254,0.36),rgba(191,219,254,0)_72%)] blur-3xl" />
      <div className="absolute bottom-[-10rem] left-[-5rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(253,224,71,0.16),rgba(253,224,71,0)_74%)] blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.24),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.62)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.62)_1px,transparent_1px)] [background-size:4.5rem_4.5rem] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.72),rgba(0,0,0,0.2)_45%,transparent_88%)]" />
    </div>
  );
}
