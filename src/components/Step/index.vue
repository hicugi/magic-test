<script setup>
import { computed, ref } from "@vue/reactivity";
import ThisBeginning from "./Beginning.vue";
import ThisAuth from "./Auth.vue";
import ThisQuiz from "./Quiz/index.vue";
import ThisResult from "./Result/index.vue";
import ThisPropose from "./Propose.vue";

const env = import.meta.env;

const items = ["beginning", "auth", "quiz", "result", "propose"];

const initialStepIndex = Number(env.VITE_ACTIVE_STEP) || 0;
const activeItem = ref(items[initialStepIndex]);

const className = "c-step";
const computedClass = computed(() => [
  className,
  `${className}_${activeItem.value}`,
]);

const userInfo = ref({});
const quizInfo = ref([]);

const getItemClass = (v) =>
  ["", `_${v}`, activeItem.value === v && "_show"]
    .filter((v) => typeof v === "string")
    .map((v) => [className, "-item", v].join(""));

const nextStep = () => {
  const nextIndex = items.findIndex((v) => v === activeItem.value);
  const nextItem = items[nextIndex + 1];

  if (!nextItem) return;

  activeItem.value = nextItem;
};
const prevStep = () => {
  const nextIndex = items.findIndex((v) => v === activeItem.value);
  const nextItem = items[nextIndex - 1];

  if (!nextItem) return;

  activeItem.value = nextItem;
};

const handleAuthSubmit = (data) => {
  userInfo.value = data;
  nextStep();
};
const handleQuizSubmit = (data) => {
  quizInfo.value = data;
  nextStep();
};
</script>

<template>
  <div :class="computedClass">
    <div :class="getItemClass('beginning')">
      <ThisBeginning v-if="activeItem === 'beginning'" @submit="nextStep" />
    </div>

    <div :class="getItemClass('auth')">
      <ThisAuth
        v-if="activeItem === 'auth'"
        @back="prevStep"
        @submit-data="handleAuthSubmit"
      />
    </div>

    <div :class="getItemClass('quiz')">
      <ThisQuiz
        v-if="activeItem === 'quiz'"
        @back="prevStep"
        @submit-data="handleQuizSubmit"
      />
    </div>

    <div :class="getItemClass('result')">
      <ThisResult v-if="activeItem === 'result'" @animation-ended="nextStep" />
    </div>

    <div :class="getItemClass('propose')">
      <ThisPropose v-if="activeItem === 'propose'" />
    </div>
  </div>
</template>

<style lang="sass">
.c-step
  $gap: 20px

  height: 100%

  &::before
    z-index: -1
    position: absolute
    width: 100%
    height: 100%
    background: url('/assets/img/bg/full-others.svg') no-repeat center
    background-size: cover
    content: ''
  &::after
    position: absolute
    background-image: url('/assets/img/bg/full-start.svg')
    opacity: 0
    content: ''
  &_beginning::before
    background-image: url('/assets/img/bg/full-start.svg')

  &-item
    $display: flex

    padding: #{$gap} 20px
    height: 100%
    flex-grow: 1
    display: none
    justify-content: stretch
    align-items: stretch

    > *
      flex-grow: 1

    &_hide
      display: none
    &_show
      display: $display

  @media (min-height: 1024px)
    &-item
      $gap: 70px
      padding-top: $gap
      padding-bottom: $gap
</style>
