<script setup>
const className = "c-logo";
</script>

<template>
  <div :class="className">
    <img
      :class="`${className}__img`"
      src="assets/img/logo.svg"
      alt="MagicTest logo"
    />
  </div>
</template>

<style lang="sass">
.c-logo
  width: 176px

  &__img
    max-width: 100%
    display: block
</style>
