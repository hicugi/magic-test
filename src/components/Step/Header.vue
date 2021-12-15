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

const handleBackClick = () => {
  emit("click-back");
};
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
  margin-bottom: 80px
  display: grid
  grid-template: "logo main controls" / 253px 1fr 253px

  &__col
    $middle-controls-top-gap: 15px
    
    &_middle
      padding-top: $middle-controls-top-gap
      display: flex
      justify-content: center
    &_logo
      opacity: 0.5
    &_controls
      padding-top: $middle-controls-top-gap
      text-align: right
</style>
