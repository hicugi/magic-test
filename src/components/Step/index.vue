<script setup>
import ThisBeginning from "./Beginning.vue";

const className = "c-step";

const getItemClass = (v) =>
  ["", `_${v}`].map((v) => [className, "-item", v].join(""));
</script>

<template>
  <div :class="className">
    <div :class="getItemClass('beginning')">
      <ThisBeginning />
    </div>
  </div>
</template>

<style lang="sass">
.c-step
  $gap: 30px

  &-item
    $display: flex

    padding-top: $gap
    padding-bottom: $gap
    flex-grow: 1
    display: none
    justify-content: stretch
    align-items: stretch

    > *
      flex-grow: 1

    &_beginning
      display: $display

    &_hide
      display: none
    &_show
      display: $display
</style>
