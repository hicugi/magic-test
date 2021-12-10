<script setup>
import { ref } from "@vue/reactivity";
import ThisBeginning from "./Beginning.vue";
import ThisAuth from "./Auth.vue";
import ThisQuiz from "./Quiz/index.vue";

const env = import.meta.env;

const className = "c-step";
const items = ["beginning", "auth", "quiz"];

const initialStepIndex = Number(env.VITE_ACTIVE_STEP) || 0;
const activeItem = ref(items[initialStepIndex]);

const userInfo = ref({});

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
</script>

<template>
  <div :class="className">
    <div :class="getItemClass('beginning')">
      <ThisBeginning @submit="nextStep" />
    </div>

    <div :class="getItemClass('auth')">
      <ThisAuth @back="prevStep" @submit-data="handleAuthSubmit" />
    </div>

    <div :class="getItemClass('quiz')">
      <ThisQuiz @back="prevStep" />
    </div>
  </div>
</template>

<style lang="sass">
.c-step
  $gap: 30px
  height: 100%

  &-item
    $display: flex

    padding: #{$gap} 5px
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
