import type { Locale, LocalizedText } from "@/types/quiz";

export function t(text: LocalizedText, locale: Locale) {
  return text[locale];
}
