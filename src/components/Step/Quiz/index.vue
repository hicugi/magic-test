<script setup>
import { computed, ref } from "@vue/reactivity";

import UiContainer from "../../Ui/Container.vue";
import StepHeader from "../Header.vue";
import StepBtnBack from "../BtnBack.vue";
import ThisQuestionsCard from "./questionsCard.vue";
import { getTranslate } from "../../../lang.js";

const items = Array.from({ length: 5 }, (_, i) => ({
  title: getTranslate(`q${i + 1}Title`),
  description: getTranslate(`q${i + 1}Description`),
  options: Array.from({ length: 3 }, (_, j) =>
    getTranslate(`q${i + 1}Option${j + 1}`)
  ),
}));

const env = import.meta.env;

const className = "c-stepQuiz";

const initialStepIndex = Number(env.VITE_ACTIVE_STEP) ? items.length : 1;
const step = ref(initialStepIndex);
const isMovedBack = ref(false);
const emit = defineEmits(["submit-data", "back"]);

const handleBackClick = () => {
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
    [`${cardClass}--active`]: step.value === index + 1,
    [`${cardClass}--to-back`]: isMovedBack.value,
    [`${cardClass}--allout`]: step.value > items.length,
  });

  const getCardProps = (item, index) => {
    const result = { ...item, index };

    const nextItem = items[index + 1];
    if (nextItem) {
      result.footerTitle = nextItem.title;
    }

    if (step.value !== index + 1 && items.length !== index + 1) {
      result.disabled = "";
    }

    return result;
  };

  const handleCardSubmit = (index, value) => {
    data.value[index] = value;
    step.value += 1;
    isMovedBack.value = false;

    if (index + 1 === items.length) {
      emit("submit-data", data.value);
    }
  };

  return { data, getCardClass, getCardProps, handleCardSubmit };
})();
</script>

<template>
  <UiContainer>
    <div class="c-stepQuiz">
      <StepHeader v-bind="{ step }" :step-max="items.length">
        <StepBtnBack @click="handleBackClick" />
      </StepHeader>

      <main :class="`${className}__body`">
        <template v-for="(item, index) in items">
          <ThisQuestionsCard
            :class="getCardClass(index)"
            v-bind="getCardProps(item, index)"
            @submit-data="(v) => handleCardSubmit(index, v)"
          />
        </template>
      </main>
    </div>
  </UiContainer>
</template>

<style lang="sass">
@use "sass:math"

.c-stepQuiz
  min-height: var(--ui-container-inner)
  display: flex
  flex-direction: column
  justify-content: space-between

  &__body
    position: relative

    @media screen and (min-width: 768px)
      min-height: 400px

  &__card
    $card: &

    @mixin getCardScale($index)
      $width: 1094
      $gap: 20
      $scaleGap: ($width - $gap * 2 * $index)
      transform: scale(#{ math.div(math.div($scaleGap, math.div($width, 100)), 100) }) translateY(#{ -($index * 0.50) * $gap * 1px })
      opacity: #{ 1 - $index * 0.35 }
    // getCardScale end

    position: relative
    display: none
    opacity: 1
    transition: ease-out .2s
    transition-property: transform opacity
    will-change: transform, opacity

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
      &_3,
      &_4,
      &_5
        opacity: 0

    &--to-back#{$card}--active
      transition-duration: 0s
    &--to-back#{$card}--passed
      &_1
        @include getCardScale(1)
      &_2
        @include getCardScale(2)
    &--allout
      opacity: 0
</style>
