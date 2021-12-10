<script setup>
import { ref } from "@vue/reactivity";

import UiContainer from "../../Ui/Container.vue";
import Logo from "../../Logo.vue";
import StepBtnBack from "../BtnBack.vue";
import ThisProgress from "./progress.vue";
import ThisQuestionsCard from "./questionsCard.vue";

const className = "c-stepQuiz";

const emit = defineEmits(["submit-data", "back"]);

const step = ref(1);
const items = [
  {
    title: "Характер",
    description: "Как тебя могут описать окружающие?",
    options: [
      "Простой и наивный",
      "Грубый и жёсткий",
      "Честный и справедливый",
    ],
  },
  {
    title: "Взаимопонимание",
    description: "Я умею четко доносить свою мысль",
    options: [
      "Полностью согласен",
      "Трудно сказать, согласен или не согласен",
      "Совершенно не согласен",
    ],
  },
  {
    title: "Злопамятность",
    description: "Сможешь легко простить обиды?",
    options: [
      "Не прощу и не забуду, даже запишу",
      "Смотря какая обида, и смотря кто обидел",
      "Да я и не обижаюсь вовсе",
    ],
  },
  {
    title: "Чувство юмора",
    description:
      "Если мне приходит в голову плохая шутка, я не могу сдержаться и рассказываю ее, и это кого-то обижает.",
    options: ["Скорее неверно", "Затрудняюсь ответить", "Скорее верно"],
  },
  {
    title: "Самоконтроль",
    description: "Я умею контролировать свои эмоции",
    options: [
      "Совершенно не согласен",
      "Трудно сказать, согласен или не согласен",
      "Полностью согласен",
    ],
  },
];

const getColumnClass = (v) =>
  ["", `_${v}`].map((v) => [className, "-header__col", v].join(""));

const handleBack = () => {
  if (step.value === 1) {
    emit("back");
    return;
  }

  step.value -= 1;
};

// card
const { getCardProps, handleCardSubmit } = (() => {
  const data = ref([]);

  const getCardProps = (item, index) => {
    const id = index + 1;
    const result = { id, ...item };

    if (step.value > id) {
      result.passed = true;
    }
    if (step.value >= id) {
      result.active = true;
    }

    const nextItem = items[index + 1];
    if (nextItem) {
      result.footerTitle = nextItem.title;
    }

    result.lastOrder = step.value - index - 1;

    return result;
  };

  const handleCardSubmit = ({ id, value }) => {
    data.value[id - 1] = value;
    step.value += 1;
  };

  return { data, getCardProps, handleCardSubmit };
})();
</script>

<template>
  <UiContainer>
    <header :class="`${className}-header`">
      <div :class="getColumnClass('side')">
        <Logo />
      </div>
      <div :class="getColumnClass('middle')">
        <ThisProgress v-bind="{ step }" :step-max="items.length" />
      </div>
      <div :class="getColumnClass('side2')">
        <StepBtnBack @click="handleBack" />
      </div>
    </header>

    <main :class="`${className}__body`">
      <template v-for="(item, index) in items">
        <ThisQuestionsCard
          v-bind="getCardProps(item, index)"
          @submit-data="handleCardSubmit"
        />
      </template>
    </main>
  </UiContainer>
</template>

<style lang="sass">
.c-stepQuiz

  &-header
    margin-bottom: 30px
    display: flex

    &__col
      &_middle
        display: flex
        justify-content: center
        flex-grow: 1

      &_side,
      &_side2
        width: 100%
        max-width: 253px

      &_side
        opacity: 0.5
      &_side2
        display: flex
        justify-content: flex-end
  // header end

  &__body
    position: relative
</style>
