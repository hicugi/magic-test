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
    <ThisCheckbox :label="$t('female')" value="0" @change="handleChange(0)">
      <svg
        :class="`${className}__item_female`"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.0001 -0.000488281H37.6001C38.9256 -0.000488281 40.0001 1.07403 40.0001 2.39951V15.9995C40.0001 17.325 38.9256 18.3995 37.6001 18.3995C36.2747 18.3995 35.2001 17.325 35.2001 15.9995V8.19362L28.8837 14.5101C30.8425 17.165 32.0002 20.4471 32.0002 23.9995C32.0002 32.8361 24.8368 39.9995 16.0002 39.9995C7.16369 39.9995 0.000244141 32.8361 0.000244141 23.9995C0.000244141 15.163 7.16369 7.99953 16.0002 7.99953C19.5527 7.99953 22.8347 9.15724 25.4896 11.116L31.806 4.79951H24.0001C22.6747 4.79951 21.6001 3.72499 21.6001 2.39951C21.6001 1.07403 22.6747 -0.000488281 24.0001 -0.000488281ZM27.0406 23.9995C27.0406 30.0969 22.0976 35.0398 16.0002 35.0398C9.90284 35.0398 4.95992 30.0969 4.95992 23.9995C4.95992 17.9021 9.90284 12.9592 16.0002 12.9592C22.0976 12.9592 27.0406 17.9021 27.0406 23.9995Z"
          fill="#A6AFBD"
        />
      </svg>
    </ThisCheckbox>
    <ThisCheckbox :label="$t('male')" value="1" @change="handleChange(1)">
      <svg
        :class="`${className}__item_male`"
        width="32"
        height="47"
        viewBox="0 0 32 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M27.0403 16.6001C27.0403 22.6975 22.0974 27.6404 16 27.6404C9.9026 27.6404 4.95968 22.6975 4.95968 16.6001C4.95968 10.5027 9.9026 5.55977 16 5.55977C22.0974 5.55977 27.0403 10.5027 27.0403 16.6001ZM18.4798 32.4091C26.1388 31.2174 32 24.5932 32 16.6001C32 7.76354 24.8366 0.600098 16 0.600098C7.16344 0.600098 0 7.76354 0 16.6001C0 24.5932 5.86121 31.2174 13.5202 32.4091V33.3204H8C6.63042 33.3204 5.52016 34.4306 5.52016 35.8002C5.52016 37.1698 6.63042 38.28 8 38.28H13.5202V43.8002C13.5202 45.1698 14.6304 46.28 16 46.28C17.3696 46.28 18.4798 45.1698 18.4798 43.8002V38.28H24C25.3696 38.28 26.4798 37.1698 26.4798 35.8002C26.4798 34.4306 25.3696 33.3204 24 33.3204H18.4798V32.4091Z"
          fill="white"
        />
      </svg>
    </ThisCheckbox>
  </div>
</template>

<style lang="sass">
.c-formSex
  margin-left: auto
  margin-right: auto
  max-width: 158px
  display: flex
  justify-content: space-between

  &__item
    background: no-repeat center
</style>
