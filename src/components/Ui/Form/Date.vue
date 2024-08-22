<script setup>
import { computed, ref } from "@vue/reactivity";

import UiFormSelect from "./Select/index.vue";
import { getTranslate } from "../../../lang.js";

const className = "ui-formDate";

const currentYear = new Date().getFullYear() - 6;
const [days, months, years] = (() => [
  Array.from({ length: 31 }, (_, i) => ({ label: i + 1, value: i + 1 })),
  Array.from({ length: 12 }, (_, i) => ({
    label: getTranslate(`month${i + 1}`),
    value: i + 1,
  })),
  Array.from({ length: 94 }, (_, i) => ({
    label: currentYear - i,
    value: currentYear - i,
  })),
])();

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
});
const emit = defineEmits(["update:modelValue"]);

const innerValue = ref({ ...props.modelValue });

const getComputedModel = (key) =>
  computed({
    get: () => {
      return innerValue.value[key] || "";
    },
    set: (newValue) => {
      const result = {
        ...innerValue.value,
        [key]: newValue,
      };
      innerValue.value = { ...result };

      emit("update:modelValue", { ...result });
    },
  });

const dayModel = getComputedModel("day");
const monthModel = getComputedModel("month");
const yearModel = getComputedModel("year");
</script>

<template>
  <div :class="className">
    <div :class="`${className}__col`">
      <UiFormSelect :label="$t('dateD')" :options="days" v-model="dayModel" />
    </div>
    <div :class="`${className}__col`">
      <UiFormSelect
        :label="$t('dateM')"
        :options="months"
        v-model="monthModel"
      />
    </div>
    <div :class="`${className}__col`">
      <UiFormSelect :label="$t('dateY')" :options="years" v-model="yearModel" />
    </div>
  </div>
</template>

<style lang="sass">
.ui-formDate
  display: grid
  grid-template: "day month year" / 64px 1fr 118px
  grid-gap: 10px

  @media screen and (min-width: 768px)
    grid-gap: 20px
</style>
