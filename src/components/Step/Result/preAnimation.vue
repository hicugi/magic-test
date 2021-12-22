<script setup>
import { computed, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import StepHeader from "../Header.vue";
import ThisImages from "./images.vue";
import ThisStats from "./stats.vue";
import questions from "../../../helpers/questions";
import avatars from "../../../helpers/avatars";
import preloadImages from "../../../helpers/preloadImages";

const env = import.meta.env;

const className = "c-stepResultPreAnimation";
const step = questions.length + 1;

const isLoading = ref(true);
const loadingTime = 3 || env.VITE_STATS_LOADING_TIME || 4;
const rightImageIndex = ref(0);

const title = computed(() =>
  isLoading.value ? "Проверка на\nсовместимость" : "Найден подходящий\nпартнер"
);
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

const isImagesLoaded = ref(false);
const runImageRotation = () =>
  new Promise((resolve) => {
    let rightImageRotateInterval;
    const initedTime = new Date().getTime();

    rightImageRotateInterval = setInterval(() => {
      const currentTime = new Date().getTime();

      rightImageIndex.value += 1;

      if (currentTime - initedTime > loadingTime * 1000) {
        isLoading.value = false;
        clearInterval(rightImageRotateInterval);
        resolve();
      }
    }, 200);
  });

const emit = defineEmits(["end"]);
onMounted(() => {
  preloadImages([avatars.left, ...avatars.others, avatars.right]).then(() => {
    isImagesLoaded.value = true;

    runImageRotation().then(() => {
      const audio = document.querySelector("#partnerFoundAudio");
      audio.play();

      setTimeout(() => {
        emit("end");
      }, 4000);
    });
  });
});

const computedClass = computed(() => ({
  [className]: true,
  [`${className}--loaded`]: isImagesLoaded,
}));
</script>

<template>
  <StepHeader v-bind="{ step, stepMax: step - 1 }" />

  <audio id="partnerFoundAudio" src="/assets/sound/partner-found.wav" />

  <div :class="computedClass">
    <h3 :class="`${className}__title`" v-text="title" />

    <ThisImages :class="`${className}__images`" v-bind="imagesProps" />
    <ThisStats v-show="isImagesLoaded" :loading="isLoading" />
  </div>
</template>

<style lang="sass">
.c-stepResultPreAnimation
  position: absolute
  left: 50%
  transform: translateX(-50%)
  padding: 28px 35px 40px
  border: 1px solid #EDF1F7
  border-radius: 20px
  width: 405px
  background-color: #FFFFFF

  &__title
    margin: 0 0 28px
    color: #646876
    font-size: 22px
    font-weight: 700
    line-height: 27px
    text-align: center
    white-space: pre-wrap

  &__images
    margin-bottom: 35px
</style>
