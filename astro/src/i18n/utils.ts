import { ui, defaultLocale, type Locale } from "./ui";

const slugMap: Record<string, string> = {
  "gartentisch-mit-integriertem-grill": "garden-table-with-integrated-grill",
  "gartentisch-umbauen": "garden-table-conversion",
  "sicherheit-beim-grillen": "grilling-safety-tips",
  "impressum": "imprint",
  "agb": "terms",
  "datenschutz": "privacy",
  "widerrufsrecht": "withdrawal",
};

const reverseSlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(slugMap).map(([de, en]) => [en, de])
);

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Locale;
  return defaultLocale;
}

export function useTranslations(lang: Locale) {
  return function t(key: keyof (typeof ui)[typeof defaultLocale]): string {
    return ui[lang][key] || ui[defaultLocale][key];
  };
}

export function getLocalizedPath(path: string, locale: Locale): string {
  const segments = path.split("/").filter(Boolean);
  if (segments[0] in ui) {
    segments[0] = locale;
  } else {
    segments.unshift(locale);
  }

  for (let i = 1; i < segments.length; i++) {
    const map = locale === "en" ? slugMap : reverseSlugMap;
    if (segments[i] in map) {
      segments[i] = map[segments[i]];
    }
  }

  return "/" + segments.join("/") + "/";
}
