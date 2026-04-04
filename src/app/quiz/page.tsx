import { FloatingBackground } from "@/components/floating-background";
import { FooterDisclaimer } from "@/components/footer-disclaimer";
import { QuizShell } from "@/components/quiz/quiz-shell";

export default function QuizPage() {
  return (
    <main className="app-shell">
      <FloatingBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <QuizShell />
        <FooterDisclaimer />
      </div>
    </main>
  );
}
