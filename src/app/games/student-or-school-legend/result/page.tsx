"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { FloatingBackground } from "@/components/floating-background";
import { FooterDisclaimer } from "@/components/footer-disclaimer";
import { useSchoolGame } from "@/components/providers/school-game-provider";
import { StudentGameResult } from "@/components/student-game/student-game-result";

export default function StudentOrSchoolLegendResultPage() {
  const router = useRouter();
  const { result, resetGame } = useSchoolGame();

  useEffect(() => {
    if (!result) {
      router.replace("/games/student-or-school-legend/play");
    }
  }, [result, router]);

  if (!result) {
    return null;
  }

  return (
    <main className="app-shell">
      <FloatingBackground />
      <div className="relative z-10 flex min-h-screen flex-col py-6 sm:py-8">
        <StudentGameResult
          result={result}
          onRestart={() => {
            resetGame();
            router.push("/games/student-or-school-legend/play");
          }}
        />
        <div className="mt-auto pt-8">
          <FooterDisclaimer />
        </div>
      </div>
    </main>
  );
}
