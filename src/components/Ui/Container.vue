<script setup>
const className = "ui-container";
</script>

<template>
  <div :class="className">
    <div :class="`${className}-bg`">
      <div :class="`${className}-bg__item`" />
      <div :class="`${className}-bg__item`" />
      <div :class="`${className}-bg__item`" />
    </div>

    <div :class="`${className}__inner`">
      <slot />
    </div>
  </div>
</template>

<style lang="sass">

.ui-container
  --border-radius: 26px

  position: relative
  margin-left: auto
  margin-right: auto
  padding: var(--container-gap)
  border-radius: var(--border-radius)
  max-width: var(--container-width)
  overflow: hidden

  &-bg
    &__item
      z-index: -1
      position: absolute
      left: 50%
      top: 50%
      transform: translate(-50%, -50%)
      border-radius: var(--border-radius)

      &:nth-child(1)
        width: 100%
        height: 100%
        background: linear-gradient(180deg, #FFFFFF 0%, #EDF1F7 100%)
      &:nth-child(2)
        $size: calc(100% + 40px)
        width: var(--size)
        height: var(--size)
        background: url('/assets/img/bg/full-others.svg') no-repeat center
        background-size: cover
        filter: blur(34px)
      &:nth-child(3)
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(237, 241, 247, 0.5) 100%)
        border: 0.874085px solid #FFFFFF
</style>
