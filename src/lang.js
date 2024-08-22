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

    q1Title: "Character",
    q1Description: "How can you be described by others?",
    q1Option1: "Simple and naive",
    q1Option2: "Rude and tough",
    q1Option3: "Honest and fair",

    q2Title: "Communication",
    q2Description: "I can clearly convey my thought",
    q2Option1: "Completely agree",
    q2Option2: "Hard to say, agree or disagree",
    q2Option3: "Completely disagree",

    q3Title: "Grudge",
    q3Description: "Can you easily forgive insults?",
    q3Option1: "I will not forgive or forget",
    q3Option2: "It dependins what and who",
    q3Option3: "I don't get offended at all",

    q4Title: "Sense of humor",
    q4Description:
      "If a bad joke comes to my mind, I can't help but tell it, and it offends someone.",
    q4Option1: "I will definitely tell it",
    q4Option2: "I will think about it, but I will not tell it",
    q4Option3: "I will not tell it, I will keep it to myself",

    q5Title: "Jealousy",
    q5Description: "Are you jealous?",
    q5Option1: "Yes, I am very jealous",
    q5Option2: "I am jealous only when there is a reason",
    q5Option3: "I am not jealous at all",

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

    q1Title: "Характер",
    q1Description: "Как тебя могут описать окружающие?",
    q1Option1: "Простой и наивный",
    q1Option2: "Грубый и жёсткий",
    q1Option3: "Честный и справедливый",

    q2Title: "Взаимопонимание",
    q2Description: "Я умею четко доносить свою мысль",
    q2Option1: "Полностью согласен",
    q2Option2: "Трудно сказать, согласен или не согласен",
    q2Option3: "Совершенно не согласен",

    q3Title: "Злопамятность",
    q3Description: "Сможешь легко простить обиды?",
    q3Option1: "Не прощу и не забуду, даже запишу",
    q3Option2: "Смотря какая обида, и смотря кто обидел",
    q3Option3: "Да я и не обижаюсь вовсе",

    q4Title: "Чувство юмора",
    q4Description:
      "Если мне приходит в голову плохая шутка, я не могу сдержаться и рассказываю ее, и это кого-то обижает.",
    q4Option1: "Обязательно расскажу",
    q4Option2: "Подумаю, но не скажу",
    q4Option3: "Не скажу, оставлю при себе",

    q5Title: "Ревность",
    q5Description: "Ты ревнив(а)?",
    q5Option1: "Да, я очень ревнив(а)",
    q5Option2: "Ревную только когда есть повод",
    q5Option3: "Я не ревную в принципе",

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
