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
.ui-container
  padding: 0 30px

  &__inner
    margin-left: auto
    margin-right: auto
    padding: 70px
    border-radius: 30px
    max-width: 1226px
    height: 100%
    flex-grow: 1
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(237, 241, 247, 0.5) 100%)
</style>
