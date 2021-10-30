<script setup>
const className = "ui-block";
</script>

<template>
  <div :class="className">
    <slot />
  </div>
</template>

<style lang="sass">
@import "../../sass/_variables.sass"

.ui-block
  border: 2px solid #EDF1F7
  background-color: $color-white
</style>
