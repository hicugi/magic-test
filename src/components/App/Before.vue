<script setup>
import { onMounted, onUnmounted, ref } from "@vue/runtime-core";
const env = import.meta.env;

const size = ref();

// resize event
(() => {
  if (!env.VITE_SHOW_SCREEN_SIZE) return;

  let timeoutElm;

  const resizeFn = () => {
    clearTimeout(timeoutElm);

    timeoutElm = setTimeout(() => {
      size.value = [window.innerWidth, window.innerHeight].join("x");
    }, 256);
  };
  resizeFn();

  onMounted(() => {
    window.addEventListener("resize", resizeFn);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", resizeFn);
  });
})();
</script>

<template>
  <div class="c-before" v-show="size" v-text="size" />
</template>

<style lang="sass">
@import "../../sass/_variables.sass"

*, *::before, *::after
  box-sizing: border-box

html, body
  height: 100%

body
  z-index: 0
  position: relative
  margin: 0
  padding: 0
  background-color: $color-white
  font-family: 'Inter', sans-serif
button
  font-family: inherit

.c-before
  position: absolute
  left: 50%
  top: 0
  transform: translateX(-50%)
  font-size: 18px
  line-height: 1.5em

#app
  height: 100%
</style>
