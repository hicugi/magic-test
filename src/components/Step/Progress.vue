<script setup>
import { computed } from "@vue/reactivity";

const props = defineProps({
  step: Number,
  stepMax: Number,
});

const className = "c-setupQuizProgress";

const computedClass = computed(() =>
  ["", `--setp-${props.step}`].map((v) => [className, v].join(""))
);
const getItemClass = (index, value = "default") =>
  ["", `_${value}`, index + 1 <= props.step && "--active"]
    .filter((v) => typeof v === "string")
    .map((v) => [className, "__item", v].join(""));
</script>

<template>
  <ul :class="computedClass">
    <template v-for="(_, index) in Array(stepMax)">
      <li :class="getItemClass(index)"></li>
    </template>
    <li :class="getItemClass(stepMax, 'last')">
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.1355 1.85334L18.1356 1.85341C19.946 3.60825 19.9646 6.58727 18.1326 8.39267L11.5726 14.8575C10.7033 15.7142 9.29669 15.7142 8.42742 14.8575L1.86737 8.39267C0.035374 6.58727 0.0540481 3.60825 1.86441 1.85341L1.86448 1.85334C3.73148 0.042882 6.65155 0.0542014 8.53177 1.85545L8.53205 1.85572C9.35146 2.63949 10.6485 2.63949 11.468 1.85572L11.4682 1.85545C13.3484 0.0542014 16.2685 0.042882 18.1355 1.85334Z"
          fill="#EDF1F7"
          stroke="#E2E9F5"
        />
      </svg>
    </li>
  </ul>
</template>

<style lang="sass">
.c-setupQuizProgress
  --height: 60px
  --border-color: #E2E9F5
  --gap: 20px

  margin: 0 auto
  padding: 0 25px
  border: 1px solid var(--border-color)
  border-radius: var(--height)
  height: var(--height)
  display: flex
  justify-content: center
  align-items: center
  background-color: var(--color-white)
  list-style: none

  &__item
    $item: &

    & + &
      margin-left: var(--gap)

    &_default
      width: 50px
      height: 10px
      background-color: #EDF1F7
      border: 1px solid var(--border-color)
      border-radius: 10px
      transition: linear .2s
      transition-property: background-color, border-color
      will-will-change: background-color border-color


    &_default#{$item}--active
      background-color: var(--color-white)
      border-color: var(--color-white)

    &_last
      padding-top: 4px
      path
        transition: linear .2s
        transition-property: fill, stroke
        will-will-change: fill stroke
    &_last#{$item}--active
      path
        fill: var(--color-white)
        stroke: var(--color-white)
</style>
