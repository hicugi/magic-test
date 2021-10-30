<script setup>
const className = "ui-formFile";
</script>

<template>
  <div :class="className">
    <input :class="`${className}__control`" type="file" />
  </div>
</template>

<style lang="sass">
.ui-formFile
  $size: 200px

  position: relative
  border-radius: 100%
  width: $size
  height: $size
  display: block
  background: url('/assets/img/avatar-female.svg') no-repeat center
  background-size: contain

  &__control
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 100%
    opacity: 0
</style>
