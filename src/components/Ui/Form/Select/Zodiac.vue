<script setup>
import { computed } from "@vue/reactivity";
import ThisSelect from "./index.vue";

import preloadImages from "../../../../helpers/preloadImages";
import { getTranslate } from "../../../../lang";

const className = "ui-formSelectZodiacSelec";

const options = [
  {
    label: "zodiacAries",
    value: "aries",
  },
  {
    label: "zodiacTaurus",
    value: "taurus",
  },
  {
    label: "zodiacGemini",
    value: "gemini",
  },
  {
    label: "zodiacCancer",
    value: "cancer",
  },
  {
    label: "zodiacLeo",
    value: "leo",
  },
  {
    label: "zodiacVirgo",
    value: "virgo",
  },
  {
    label: "zodiacLibra",
    value: "libra",
  },
  {
    label: "zodiacScorpio",
    value: "scorpio",
  },
  {
    label: "zodiacSagittarius",
    value: "sagittarius",
  },
  {
    label: "zodiacCapricorn",
    value: "capricorn",
  },
  {
    label: "zodiacAquarius",
    value: "aquarius",
  },
  {
    label: "zodiacPisces",
    value: "pisces",
  },
].map((item) => ({ ...item, label: getTranslate(item.label) }));
const getImagePath = (value) => `assets/img/zodiac/${value.toLowerCase()}.svg`;

const props = defineProps({
  modelValue: {
    type: String,
    default: "aries",
  },
});
const emit = defineEmits(["update:modelValue"]);

const formattedModelValue = computed({
  get: () => options.find(({ value }) => value == props.modelValue).value,
  set: (newValue) => {
    emit("update:modelValue", newValue);
  },
});

const iconStyle = computed(() => {
  const value = options.find(
    ({ value }) => value === formattedModelValue.value
  ).value;
  return { backgroundImage: `url('${getImagePath(value)}')` };
});

const handleClick = (() => {
  let isImagesLoaded = false;

  return () => {
    if (isImagesLoaded) return;
    preloadImages(options.map(({ value }) => getImagePath(value)));
  };
})();
</script>

<template>
  <div :class="className" @click="handleClick">
    <span :class="`${className}__label`" :style="iconStyle" />
    <ThisSelect v-model="formattedModelValue" :options="options" />
  </div>
</template>

<style lang="sass">
.ui-formSelectZodiacSelec
  z-index: 0
  position: relative

  &__label
    z-index: 1
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    border-radius: 8px
    width: calc(100% - 10px)
    height: calc(100% - 10px)
    background: var(--color-gray) no-repeat center
    pointer-events: none
</style>
