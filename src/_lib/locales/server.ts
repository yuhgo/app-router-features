import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getCurrentLocale } = createI18nServer({
	en: () => import("@/_lib/locales/en"),
	ja: () => import("@/_lib/locales/ja"),
});

export type Locale = ReturnType<typeof getCurrentLocale>;
