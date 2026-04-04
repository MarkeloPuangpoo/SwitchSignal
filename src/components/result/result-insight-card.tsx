import { Card } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";

export function ResultInsightCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <Card className="h-full p-5 sm:p-6">
      <div className="flex h-full flex-col gap-4">
        <Pill>{title}</Pill>
        <p className="text-base leading-7 text-zinc-700">{body}</p>
      </div>
    </Card>
  );
}
