import type { Locale } from "@/lib/i18n";

const dictionaries = {
  es: () => import("@/dictionaries/es.json").then((module) => module.default),
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
