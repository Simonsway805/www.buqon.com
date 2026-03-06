import { ui, defaultLocale, type Locale } from "./ui";

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
  return "/" + segments.join("/") + "/";
}
