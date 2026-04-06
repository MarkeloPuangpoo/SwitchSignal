"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { FloatingBackground } from "@/components/floating-background";
import { FooterDisclaimer } from "@/components/footer-disclaimer";
import { usePoeticGame } from "@/components/providers/poetic-game-provider";
import { PoeticGameResult } from "@/components/poetic-game/poetic-game-result";

export default function InnerLightResultPage() {
  const router = useRouter();
  const { result, resetGame } = usePoeticGame();

  useEffect(() => {
    if (!result) {
      router.replace("/games/inner-light/play");
    }
  }, [result, router]);

  if (!result) {
    return null;
  }

  return (
    <main className="app-shell">
      <FloatingBackground />

      <div className="relative z-10 flex min-h-screen flex-col py-6 sm:py-8">
        <PoeticGameResult
          result={result}
          onRestart={() => {
            resetGame();
            router.push("/games/inner-light/play");
          }}
        />

        <div className="mt-auto pt-8">
          <FooterDisclaimer />
        </div>
      </div>
    </main>
  );
}
