<script setup>
import { ref } from "@vue/reactivity";

import UiContainer from "../../Ui/Container.vue";
import Logo from "../../Logo.vue";
import StepBtnBack from "../BtnBack.vue";
import ThisProgress from "./progress.vue";

const className = "c-stepQuiz";

const emit = defineEmits(["submit-data"]);

const step = ref(1);
const items = [
  {
    title: "Как тебя могут описать окружающие?",
    options: [
      "Простой и наивный",
      "Грубый и жёсткий",
      "Честный и справедливый",
    ],
  },
  {
    title: "Я умею четко доносить свою мысль",
    options: [
      "Полностью согласен",
      "Трудно сказать, согласен или не согласен",
      "Совершенно не согласен",
    ],
  },
  {
    title: "Сможешь легко простить обиды?",
    options: [
      "Нет. Не прощу и не забуду, а для надежности еще могу и записать",
      "Да я и не обижаюсь вовсе",
      "Смотря какая обида, и смотря кто обидел",
    ],
  },
  {
    title:
      "Если мне приходит в голову плохая шутка, я не могу сдержаться и рассказываю ее, и это кого-то обижает.",
    options: ["Скорее неверно", "Затрудняюсь ответить", "Скорее верно"],
  },
  {
    title: "Я умею контролировать свои эмоции",
    options: [
      "Совершенно не согласен",
      "Трудно сказать, согласен или не согласен",
      "Полностью согласен",
    ],
  },
];

const getColumnClass = (v) =>
  ["", `_${v}`].map((v) => [className, "-header__col", v].join(""));
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
        <StepBtnBack @click="$emit('back')" />
      </div>
    </header>
  </UiContainer>
</template>

<style lang="sass">
.c-stepQuiz

  &-header
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

      &_side2
        display: flex
        justify-content: flex-end
</style>
