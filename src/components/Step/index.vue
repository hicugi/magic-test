<script setup>
import { ref } from "@vue/reactivity";
import ThisBeginning from "./Beginning.vue";
import ThisAuth from "./Auth.vue";

const className = "c-step";
const items = ["beginning", "auth"];
const activeItem = ref(items[1]);

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
</script>

<template>
  <div :class="className">
    <div :class="getItemClass('beginning')">
      <ThisBeginning @submit="nextStep" />
    </div>
    <div :class="getItemClass('auth')">
      <ThisAuth @back="prevStep" />
    </div>
  </div>
</template>

<style lang="sass">
.c-step
  $gap: 30px
  height: 100%

  &-item
    $display: flex

    padding-top: $gap
    padding-bottom: $gap
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
</style>
