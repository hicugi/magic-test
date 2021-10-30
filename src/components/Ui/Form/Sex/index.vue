<script setup>
import { defineProps, defineEmits } from "vue";
import { computed } from "@vue/reactivity";
import ThisCheckbox from "./checkbox.vue";

const className = "c-formSex";

const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);

const handleChange = (v) => {
  emit("update:modelValue", String(v));
};
</script>

<template>
  <div :class="className">
    <ThisCheckbox label="female" value="0" @change="handleChange(0)">
      <svg
        :class="`${className}__item_female`"
        width="40"
        height="57"
        viewBox="0 0 40 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M34 20C34 27.732 27.732 34 20 34C12.268 34 6 27.732 6 20C6 12.268 12.268 6 20 6C27.732 6 34 12.268 34 20ZM23 39.7765C32.6225 38.329 40 30.0261 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 30.0261 7.37747 38.329 17 39.7765V41H10C8.34315 41 7 42.3431 7 44C7 45.6569 8.34315 47 10 47H17V54C17 55.6569 18.3431 57 20 57C21.6569 57 23 55.6569 23 54V47H30C31.6569 47 33 45.6569 33 44C33 42.3431 31.6569 41 30 41H23V39.7765Z"
          fill="white"
        />
      </svg>
    </ThisCheckbox>
    <ThisCheckbox label="male" value="1" @change="handleChange(1)">
      <svg
        :class="`${className}__item_male`"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30 0H46.9999C48.6568 0 49.9999 1.34315 49.9999 3V20C49.9999 21.6569 48.6568 23 46.9999 23C45.3431 23 43.9999 21.6569 43.9999 20V10.2426L36.1043 18.1382C38.5528 21.4569 40 25.5594 40 30C40 41.0457 31.0457 50 20 50C8.9543 50 0 41.0457 0 30C0 18.9543 8.9543 10 20 10C24.4405 10 28.5431 11.4472 31.8617 13.8956L39.7573 6H30C28.3431 6 27 4.65685 27 3C27 1.34315 28.3431 0 30 0ZM34 30C34 37.732 27.732 44 20 44C12.268 44 6 37.732 6 30C6 22.268 12.268 16 20 16C27.732 16 34 22.268 34 30Z"
          fill="#A6AFBD"
        />
      </svg>
    </ThisCheckbox>
  </div>
</template>

<style lang="sass">
.c-formSex
  margin-left: auto
  margin-right: auto
  max-width: 200px
  display: flex
  justify-content: space-between

  &__item
    background: no-repeat center
</style>
