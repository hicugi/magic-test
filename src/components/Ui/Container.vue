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

  margin: 0 auto
  padding: 0 20px
  max-width: var(--container-width)
  display: grid
  justify-content: stretch
  align-items: center
  min-height: 100vh
  min-height: 100lvh

  @media screen and (min-width: 768px)
    padding: 30px

  &-wrapper
    position: relative
    padding: 20px
    border-radius: var(--border-radius)
    max-height: calc(100vh - 40px)
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
</style>
