<script setup>
import { computed, ref } from "@vue/reactivity";
import helpMonths from "../../../helpers/months";
import UiFormSelect from "./Select.vue";

const className = "ui-formDate";

const [days, months, years] = (() => [
  Array(31)
    .fill("")
    .map((_, i) => i + 1),
  [...helpMonths],
  Array(62)
    .fill("")
    .map((_, i) => 15 - i)
    .map((v) => (v >= 0 ? v : 100 - Math.abs(v)))
    .map((v) => (String(v).length === 1 ? [0, v].join("") : v)),
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
    <div :class="[`${className}__col`, `${className}__col_day`]">
      <UiFormSelect label="Д" :options="days" v-model="dayModel" />
    </div>
    <div :class="[`${className}__col`, `${className}__col_month`]">
      <UiFormSelect label="месяц" :options="months" v-model="monthModel" />
    </div>
    <div :class="[`${className}__col`, `${className}__col_year`]">
      <UiFormSelect label="Год" :options="years" v-model="yearModel" />
    </div>
  </div>
</template>

<style lang="sass">
.ui-formDate
  $gap: 10px

  display: flex
  margin-left: -$gap
  margin-right: -$gap

  &__col
    padding-left: $gap
    padding-right: $gap

    &_day,
    &_year
      width: #{80px + $gap * 2}

    &_month
      flex-grow: 1
</style>
