import { SchoolGameProvider } from "@/components/providers/school-game-provider";

export default function SchoolGameLayout({ children }: { children: React.ReactNode }) {
  return <SchoolGameProvider>{children}</SchoolGameProvider>;
}
