<template>
  <button class="c-stepBtnBack">{{ $t("back") }}</button>
</template>

<style lang="sass">
.c-stepBtnBack
  position: relative
  width: 60px
  height: 60px
  border: 1px solid #EDF1F7
  border-radius: 100%
  display: inline-block
  background-color: var(--color-white)
  overflow: hidden
  text-indent: -9999px

  &::before
    position: absolute
    left: 50%
    top: 50%
    margin-left: -2px
    transform: translate(-50%, -50%)
    width: 15px
    height: 26px
    background: url('assets/img/arrow-back.svg') no-repeat center
    content: ''
</style>
