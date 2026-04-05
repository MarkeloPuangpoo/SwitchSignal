import { FloatingBackground } from "@/components/floating-background";
import { FooterDisclaimer } from "@/components/footer-disclaimer";
import { StudentGameShell } from "@/components/student-game/student-game-shell";

export default function StudentOrSchoolLegendPlayPage() {
  return (
    <main className="app-shell">
      <FloatingBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <StudentGameShell />
        <FooterDisclaimer />
      </div>
    </main>
  );
}
