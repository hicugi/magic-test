<script setup>
import { computed, defineProps } from "vue";

const className = "ui-formSexCheckbox";

const props = defineProps({
  label: String,
  value: String,
  modelValue: Boolean,
});
</script>

<template>
  <label :class="className">
    <span>v: {{ props.modelValue }}</span>

    <input
      :class="`${className}__control`"
      :value="props.value"
      v-model="modelValue"
      type="radio"
      name="sex"
    />
    <span :class="`${className}__icon`">
      <slot />
    </span>
    <span :class="`${className}__label`" v-text="props.label" />
  </label>
</template>

<style lang="sass">
@import "../../../../sass/_variables.sass"

.ui-formSexCheckbox
  $self: &
  $size: 80px

  position: relative
  width: $size
  height: $size

  &__control
    position: absolute
    left: 0
    top: 0
    opacity: 0

    &:checked ~ #{$self}__icon
      border-color: $color-primary
      background-color: $color-primary
      color: $color-white
      path
        fill: $color-white

  &__icon
    position: absolute
    left: 0
    top: 0
    border: 2px solid #E2E9F5
    border-radius: 10px
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    background-color: #EDF1F7
    color: #C4C4C4
    overflow: hidden

    path
      fill: #C4C4C4
      will-change: fill
</style>
