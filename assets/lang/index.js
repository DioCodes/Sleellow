import * as Localization from "expo-localization";
import i18n from "i18n-js";

import en from "./en.json";
import ru from "./ru.json";

i18n.translations = {
  en,
  ru,
};

i18n.locale = Localization.locale.substr(0, 2);
// i18n.fallbacks = true;

export const t = (name) => i18n.t(name);
