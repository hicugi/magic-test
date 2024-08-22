import { createI18n } from "vue-i18n";

const messages = {
  en: {
    title: "Test for compatibility",
    subtitle: "Find out how compatible you are with your significant other",
    start: "Start",

    signupTitle: "Fill in all fields",
    male: "male",
    female: "female",

    dateD: "D",
    dateM: "month",
    dateY: "Year",

    name: "Name",

    month1: "January",
    month2: "February",
    month3: "March",
    month4: "April",
    month5: "May",
    month6: "June",
    month7: "July",
    month8: "August",
    month9: "September",
    month10: "October",
    month11: "November",
    month12: "December",

    zodiacAries: "Aries",
    zodiacTaurus: "Taurus",
    zodiacGemini: "Gemini",
    zodiacCancer: "Cancer",
    zodiacLeo: "Leo",
    zodiacVirgo: "Virgo",
    zodiacLibra: "Libra",
    zodiacScorpio: "Scorpio",
    zodiacSagittarius: "Sagittarius",
    zodiacCapricorn: "Capricorn",
    zodiacAquarius: "Aquarius",
    zodiacPisces: "Pisces",

    continue: "Continue",
    back: "Back",
  },
  ru: {
    title: "Тест на совместимость",
    subtitle: "Узнай на сколько ты совместим(а) со своей второй половинкой",
    start: "Начать",

    signupTitle: "Заполните все поля",
    male: "мужчина",
    female: "женщина",

    dateD: "Д",
    dateM: "месяц",
    dateY: "Год",

    name: "Имя",

    month1: "Январь",
    month2: "Февраль",
    month3: "Март",
    month4: "Апрель",
    month5: "Май",
    month6: "Июнь",
    month7: "Июль",
    month8: "Август",
    month9: "Сентябрь",
    month10: "Октябрь",
    month11: "Ноябрь",
    month12: "Декабрь",

    zodiacAries: "Овен",
    zodiacTaurus: "Телец",
    zodiacGemini: "Близнецы",
    zodiacCancer: "Рак",
    zodiacLeo: "Лев",
    zodiacVirgo: "Дева",
    zodiacLibra: "Весы",
    zodiacScorpio: "Скорпион",
    zodiacSagittarius: "Стрелец",
    zodiacCapricorn: "Козерог",
    zodiacAquarius: "Водолей",
    zodiacPisces: "Рыбы",

    continue: "Продолжить",
    back: "Назад",
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

export const getTranslate = (key) => i18n.global.t(key);
