<script setup>
import { computed } from "@vue/reactivity";

const className = "ui-formSelect";

const props = defineProps({
  label: String,
  modelValue: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);

const handleChange = ({ target }) => {
  emit("update:modelValue", target.value);
};
</script>

<template>
  <div :class="className">
    <select
      :class="`${className}__controller`"
      :value="modelValue"
      @change="handleChange"
    >
      <option v-if="label" value="" disabled>{{ label }}</option>
      <option v-for="item in options" :value="item.value">
        {{ item.label }}
      </option>
    </select>
    <span />
  </div>
</template>

<style lang="sass">
.ui-formSelect
  $border-width: 2px
  $background-color: #EDF1F7

  z-index: 0
  position: relative
  border: $border-width solid #E2E9F5
  background: $background-color
  overflow: hidden

  &__controller
    position: relative
    border: none
    padding: 10px 20px 10px 15px
    width: calc(100% + 16px)
    display: block
    background: none
    color: #646876
    font-size: 20px
    line-height: 1.2em
    text-align: center

    &:focus
      outline: none
      & + span
        z-index: -1
        position: absolute
        left: 0
        top: 0
        width: 100%
        height: 100%
        outline: 1px solid


  &, &__controller
    border-radius: 8px
</style>
