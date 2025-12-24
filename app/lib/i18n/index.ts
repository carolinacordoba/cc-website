import { en } from "./en";
import { sv } from "./sv";

export type Locale = "sv" | "en";
export type Translations = typeof en;

export const getLocaleContent = (locale: string): Translations => {
  switch (locale) {
    case "en":
    default:
      return en;
    case "sv":
      return sv;
  }
};
