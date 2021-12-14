<script setup>
import { computed } from "@vue/reactivity";
import ThisSelect from "./index.vue";

const className = "ui-formSelectZodiacSelec";

const options = [
  {
    label: "Aries",
    value: 1,
  },
  {
    label: "Taurus",
    value: 2,
  },
  {
    label: "Gemini",
    value: 3,
  },
  {
    label: "Cancer",
    value: 4,
  },
  {
    label: "Leo",
    value: 5,
  },
  {
    label: "Virgo",
    value: 6,
  },
  {
    label: "Libra",
    value: 7,
  },
  {
    label: "Scorpio",
    value: 8,
  },
  {
    label: "Sagittarius",
    value: 9,
  },
  {
    label: "Capricorn",
    value: 10,
  },
  {
    label: "Aquarius",
    value: 11,
  },
  {
    label: "Pisces",
    value: 12,
  },
];
const getImagePath = (value) => `/assets/img/zodiac/${value.toLowerCase()}.svg`;

const props = defineProps({
  modelValue: {
    type: Number,
    default: 1,
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
  return {
    backgroundImage: `url('${getImagePath(formattedModelValue.value)}')`,
  };
});

const handleClick = (() => {
  let isImagesLoaded = false;

  return () => {
    if (isImagesLoaded) return;

    options.forEach(({ label }) => {
      const img = document.createElement("IMG");
      img.src = getImagePath(label);
    });
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
