<script setup>
const className = "ui-container";
</script>

<template>
  <div :class="className">
    <div :class="`${className}__inner`">
      <slot />
    </div>
  </div>
</template>

<style lang="sass">
@import "../../sass/_variables.sass"

.ui-container
  position: relative
  margin-left: auto
  margin-right: auto
  padding: $container-gap
  max-width: $container-width
  animation: uiContainerAnim

  &::before
    z-index: -1
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 100%
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(237, 241, 247, 0.5) 100%)
    animation: uiContainerAnim .2s linear
    will-change: opacify
    content: ''

    @keyframes uiContainerAnim
      from
        opacity: 0
      to
        opacity: 1
</style>
