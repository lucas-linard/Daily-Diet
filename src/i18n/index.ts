import i18n from "i18next";

import { initReactI18next } from "react-i18next";



import pt_BR from "./pt-BR.json";
import en_US from "./en-US.json";
import moment from "moment";
import 'moment/locale/pt-br'
import { getLocales } from 'expo-localization';

//export const defaultNS = "en_US";
export const defaultNS = "en-US";
export const resources = {
  "en" : en_US,
  "pt" : pt_BR,
} as const;

 const locales = getLocales();
 const currentLanguage = locales[0].languageCode;

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: currentLanguage,
  resources,
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

moment.locale(i18n.language)

export default i18n;
