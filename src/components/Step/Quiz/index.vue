<script setup>
import { computed, ref } from "@vue/reactivity";

import UiContainer from "../../Ui/Container.vue";
import Logo from "../../Logo.vue";
import StepBtnBack from "../BtnBack.vue";
import ThisProgress from "./progress.vue";
import ThisQuestionsCard from "./questionsCard.vue";
import items from "./questions.js";

const className = "c-stepQuiz";

const step = ref(1);
const isMovedBack = ref(false);
const emit = defineEmits(["submit-data", "back"]);

const getColumnClass = (v) =>
  ["", `_${v}`].map((v) => [className, "-header__col", v].join(""));

const handleBack = () => {
  if (step.value === 1) {
    emit("back");
    return;
  }

  step.value -= 1;
  isMovedBack.value = true;
};

// card
const { getCardClass, getCardProps, handleCardSubmit } = (() => {
  const data = ref([]);

  const cardClass = `${className}__card`;
  const getCardClass = (index) => ({
    [`${cardClass}`]: true,
    [`${cardClass}--passed`]: step.value > index + 1,
    [`${cardClass}--passed_${step.value - index - 1}`]: step.value > index + 1,
    [`${cardClass}--active`]: step.value == index + 1,
    [`${cardClass}--to-back`]: isMovedBack.value,
  });

  const getCardProps = (item, index) => {
    const result = { ...item };

    const nextItem = items[index + 1];
    if (nextItem) {
      result.footerTitle = nextItem.title;
    }

    if (step.value !== index + 1) {
      result.disabled = "";
    }

    return result;
  };

  const handleCardSubmit = (index, value) => {
    data.value[index] = value;
    step.value += 1;
    isMovedBack.value = false;
  };

  return { data, getCardClass, getCardProps, handleCardSubmit };
})();
</script>

<template>
  <UiContainer>
    <header :class="`${className}-header`">
      <div :class="getColumnClass('logo')">
        <Logo />
      </div>
      <div :class="getColumnClass('middle')">
        <ThisProgress v-bind="{ step }" :step-max="items.length" />
      </div>
      <div :class="getColumnClass('controls')">
        <StepBtnBack @click="handleBack" />
      </div>
    </header>

    <main :class="`${className}__body`">
      <template v-for="(item, index) in items">
        <ThisQuestionsCard
          :class="getCardClass(index)"
          v-bind="getCardProps(item, index)"
          @submit-data="(v) => handleCardSubmit(index, v)"
        />
      </template>
    </main>
  </UiContainer>
</template>

<style lang="sass">
@use "sass:math"
@import '../../../sass/_variables.sass'

.c-stepQuiz

  &-header
    margin-bottom: 80px
    display: grid
    grid-template: "logo main controls" / 253px 1fr 253px

    &__col
      &_middle
        display: flex
        justify-content: center

      &_logo
        opacity: 0.5
      &_controls
        text-align: right
  // header end

  &__body
    position: relative

  &__card
    $card: &

    @mixin getCardScale($index)
      $width: 1094
      $gap: 20
      $scaleGap: ($width - $gap * 2 * $index)
      transform: scale(#{ math.div(math.div($scaleGap, math.div($width, 100)), 100) }) translateY(#{ -$index * $gap * 1px })
    // getCardScale end

    position: relative
    display: none
    transition: ease-out .2s
    transition-property: transform
    will-change: transform

    &--active,
    &--passed
      display: block
    &--passed
      position: absolute
      transform-origin: top center
      width: 100%
      display: block
      @include getCardScale(2)
      // self end

      &_1
        @include getCardScale(1)
      &_2
        @include getCardScale(2)

    &--to-back#{$card}--active
      transition-duration: 0s
    &--to-back#{$card}--passed
      &_1
        @include getCardScale(1)
      &_2
        @include getCardScale(2)
</style>
