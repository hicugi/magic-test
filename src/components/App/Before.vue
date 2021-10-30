<script setup>
const width = window.innerWidth;
const height = window.innerHeight;
</script>

<template>
  <div class="c-before">{{ width }}x{{ height }}</div>
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
