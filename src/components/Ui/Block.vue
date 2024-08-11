<script setup>
const className = "ui-block";
</script>

<template>
  <div :class="className">
    <slot />
  </div>
</template>

<style lang="sass">
.ui-block
  border: 2px solid #EDF1F7
  background-color: var(--color-white)
</style>
