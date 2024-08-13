<script setup>
const className = "ui-container";
</script>

<template>
  <div :class="className">
    <div :class="`${className}-wrapper`">
      <div :class="`${className}-bg`">
        <div :class="`${className}-bg__item`" />
        <div :class="`${className}-bg__item`" />
        <div :class="`${className}-bg__item`" />
      </div>

      <div :class="`${className}__inner`">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="sass">

.ui-container
  --border-radius: 26px
  --ui-container-height: 745px
  --ui-container-padding: 20px
  --ui-container-inner: calc(var(--ui-container-height) - var(--ui-container-padding) * 2)

  margin: 0 auto
  padding: 0 20px
  max-width: var(--container-width)
  display: grid
  justify-content: stretch
  align-items: center
  min-height: 100vh
  min-height: 100lvh

  @media screen and (min-width: 768px)
    --ui-container-height: 620px

    padding: 30px

  &-wrapper
    position: relative
    padding: var(--ui-container-padding)
    border-radius: var(--border-radius)
    min-height: var(--ui-container-height)
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
        background: url('/assets/img/bg/full-others.svg') no-repeat center
        background-size: cover
        filter: blur(34px)
      &:nth-child(3)
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(237, 241, 247, 0.5) 100%)
        border: 0.874085px solid #FFFFFF
  // end bg
</style>
