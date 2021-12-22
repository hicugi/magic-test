<script setup>
const className = "c-background";
</script>

<template>
  <div :class="className" />
</template>

<style lang="sass">
.c-background
  z-index: -1
  position: absolute
  width: 100%
  height: 100%
  background: url('/assets/img/bg/full-start.svg') no-repeat center
  background-size: cover
</style>
