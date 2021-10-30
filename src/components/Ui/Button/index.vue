<script setup>
import { defineProps } from "vue";
import { computed } from "@vue/reactivity";

const className = "ui-btn";
const props = defineProps({
  primary: Boolean,
});

const computedClass = computed(() =>
  ["", props.primary && `_primary`]
    .filter((v) => typeof v === "string")
    .map((v) => [className, v].join(""))
);
</script>

<template>
  <button :class="computedClass"><slot /></button>
</template>

<style lang="sass">
@import "../../../sass/_variables.sass"

.ui-btn
  padding: 21px 46px 20px
  border: none
  border-radius: 10px
  font-size: 24px
  font-weight: 700
  line-height: 1.2em

  &:focus
    outline: none

  &_primary
    background-color: $color-primary
    color: $color-white
</style>
