import { FloatingBackground } from "@/components/floating-background";
import { FooterDisclaimer } from "@/components/footer-disclaimer";
import { PoeticGameShell } from "@/components/poetic-game/poetic-game-shell";

export default function InnerLightPlayPage() {
  return (
    <main className="app-shell">
      <FloatingBackground />

      <div className="relative z-10 flex min-h-screen flex-col py-6 sm:py-8">
        <PoeticGameShell />

        <div className="mt-auto pt-8">
          <FooterDisclaimer />
        </div>
      </div>
    </main>
  );
}
