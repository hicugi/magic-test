import { createI18n } from "vue-i18n";

const messages = {
  en: {
    title: "Test for compatibility",
  },
  ru: {
    title: "Тест на совместимость",
  },
};

let locale = "en";

if (location.hash === "#ru") {
  locale = "ru";
}

export const i18n = new createI18n({
  locale,
  fallbackLocale: locale,
  messages,
});
