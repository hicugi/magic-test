<script setup>
import { computed } from "@vue/reactivity";
import ThisSelect from "./index.vue";
import preloadImages from "../../../../helpers/preloadImages";

const className = "ui-formSelectZodiacSelec";

const options = [
  {
    label: "Овен",
    value: "aries",
  },
  {
    label: "Телец",
    value: "taurus",
  },
  {
    label: "Близнецы",
    value: "gemini",
  },
  {
    label: "Рак",
    value: "cancer",
  },
  {
    label: "Лев",
    value: "leo",
  },
  {
    label: "Дева",
    value: "virgo",
  },
  {
    label: "Весы",
    value: "libra",
  },
  {
    label: "Скорпион",
    value: "scorpio",
  },
  {
    label: "Стрелец",
    value: "sagittarius",
  },
  {
    label: "Козерог",
    value: "capricorn",
  },
  {
    label: "Водолей",
    value: "aquarius",
  },
  {
    label: "Рыбы",
    value: "pisces",
  },
];
const getImagePath = (value) => `/assets/img/zodiac/${value.toLowerCase()}.svg`;

const props = defineProps({
  modelValue: {
    type: String,
    default: "aries",
  },
});
const emit = defineEmits(["update:modelValue"]);

const formattedModelValue = computed({
  get: () => options.find(({ value }) => value == props.modelValue).label,
  set: (newValue) => {
    const itemValue = options.find(({ label }) => label === newValue);
    emit("update:modelValue", itemValue.value);
  },
});
const formattedOptions = computed(() => options.map(({ label }) => label));

const iconStyle = computed(() => {
  const value = options.find(
    ({ label }) => label === formattedModelValue.value
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
    <ThisSelect v-model="formattedModelValue" :options="formattedOptions" />
  </div>
</template>

<style lang="sass">
@import '../../../../sass/_variables.sass'

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
    background: $color-gray no-repeat center
    pointer-events: none
</style>
