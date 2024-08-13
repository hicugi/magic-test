<script setup>
import Logo from "../Logo.vue";
import ThisProgress from "./progress.vue";

const className = "c-stepHeader";

defineProps({
  step: Number,
  stepMax: Number,
});
const emit = defineEmits(["click-back"]);

const getColumnClass = (v) =>
  ["", `_${v}`].map((v) => [className, "__col", v].join(""));
</script>

<template>
  <header :class="className">
    <div :class="getColumnClass('logo')">
      <Logo />
    </div>
    <div :class="getColumnClass('middle')">
      <ThisProgress v-bind="{ step, stepMax }" />
    </div>
    <div :class="getColumnClass('controls')">
      <slot />
    </div>
  </header>
</template>

<style lang="sass">
.c-stepHeader
  display: grid
  grid-template-areas: "logo controls" "main main"
  grid-template-columns: 1fr 1fr

  @media screen and (min-width: 768px)
    grid-template-areas: "logo main controls"
    grid-template-columns: 253px 1fr 253px


  &__col
    $middle-controls-top-gap: 15px

    &_middle
      grid-area: main
      padding-top: $middle-controls-top-gap
      @media screen and (min-width: 768px)
        display: flex
        justify-content: center

    &_logo
      grid-area: logo
      opacity: 0.5
    &_controls
      grid-area: controls
      padding-top: $middle-controls-top-gap
      text-align: right
</style>
