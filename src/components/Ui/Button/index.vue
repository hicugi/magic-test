<script setup>
import { computed } from "@vue/reactivity";

const className = "ui-btn";
const props = defineProps({
  primary: Boolean,
  block: Boolean,
});

const computedClass = computed(() =>
  ["", props.primary && `_primary`, props.block && `_block`]
    .filter((v) => typeof v === "string")
    .map((v) => [className, v].join(""))
);
</script>

<template>
  <button :class="computedClass"><slot /></button>
</template>

<style lang="sass">
.ui-btn
  padding: 18px 40px 18px
  border: none
  border-radius: 10px
  font-size: 20px
  font-weight: 700
  line-height: 1.2em

  &:focus
    outline: none

  &_block
    width: 100%
    display: block

  &_primary
    background-color: var(--color-primary)
    color: var(--color-white)
</style>
