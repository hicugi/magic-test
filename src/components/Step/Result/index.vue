<script setup>
import UiContainer from "../../Ui/Container.vue";
import StepHeader from "../Header.vue";
import ThisImages from "./images.vue";
import questions from "../../../helpers/questions.js";
import avatars from "../../../helpers/avatars.js";
import { computed, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const className = "c-stepResult";
const step = questions.length + 1;

const isLoading = ref(true);
const loadingTime = 4
const rightImageIndex = ref(0);

const computedClass = computed(() => ({
  [className]: true,
}));

const imagesProps = computed(() => {
  const result = {
    leftImage: avatars.left,
    rightImage: avatars.right,
  };

  if (isLoading.value === false) {
    result.active = true;
    return result;
  }

  const images = avatars.others;
  const index = rightImageIndex.value % images.length;
  result.rightImage = images[index];

  return result;
});

let rightImageRotateInterval;
const initedTime = new Date().getTime();
onMounted(() => {
  rightImageRotateInterval = setInterval(() => {
    const currentTime = new Date().getTime();

    rightImageIndex.value += 1;

    if (currentTime - initedTime > loadingTime * 1000) {
      isLoading.value = false;
      clearInterval(rightImageRotateInterval);
    }
  }, 80);
});
</script>

<template>
  <UiContainer>
    <StepHeader v-bind="{ step, stepMax: step - 1 }" />

    <div :class="computedClass">
      <h3 :class="`${className}__title`" v-text="'Проверка на совместимость'" />

      <ThisImages v-bind="imagesProps" />
    </div>
  </UiContainer>
</template>

<style lang="sass">
.c-stepResult
  position: absolute
  left: 50%
  transform: translateX(-50%)
  padding-top: 28px 15px 40px
  border: 1px solid #EDF1F7
  border-radius: 20px
  width: 405px
  background-color: #FFFFFF

  &__title
    color: #646876
    font-size: 22px
    font-weight: 700
    line-height: 27px
    text-align: center
</style>
