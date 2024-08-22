<script setup>
import { computed, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

import StepHeader from "../Header.vue";
import ThisImages from "./images.vue";
import ThisStats from "./stats.vue";
import avatars from "../../../helpers/avatars";
import preloadImages from "../../../helpers/preloadImages";
import { getTranslate } from "../../../lang.js";

const env = import.meta.env;

const className = "c-stepResultPreAnimation";
const step = 5 + 1;

const props = defineProps({
  picture: String,
});

const isLoading = ref(true);
const loadingTime = 3 || env.VITE_STATS_LOADING_TIME || 4;
const rightImageIndex = ref(0);

const title = computed(() =>
  isLoading.value ? getTranslate("resultTitle1") : getTranslate("resultTitle2")
);
const imagesProps = computed(() => {
  const result = {
    leftImage: props.picture || avatars.left,
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
  <div :class="computedClass">
    <StepHeader v-bind="{ step, stepMax: step - 1 }" />

    <audio id="partnerFoundAudio" src="assets/sound/partner-found.wav" />

    <div :class="`${className}-wrapper`">
      <h3 :class="`${className}__title`" v-text="title" />

      <ThisImages :class="`${className}__images`" v-bind="imagesProps" />
      <ThisStats v-show="isImagesLoaded" :loading="isLoading" />
    </div>
  </div>
</template>

<style lang="sass">
.c-stepResultPreAnimation
  min-height: var(--ui-container-inner)
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: stretch

  &-wrapper
    margin: 0 auto
    padding: 28px 20px 40px
    border: 1px solid #EDF1F7
    width: 100%
    max-width: 422px
    border-radius: 20px
    background-color: #FFFFFF

    @media screen and (min-width: 768px)
      padding: 20px 35px 20px

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
