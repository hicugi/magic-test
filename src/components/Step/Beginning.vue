<script setup>
import Logo from "../Logo.vue";
import UiButton from "../Ui/Button/index.vue";

const className = "c-setpBeginning";
</script>

<template>
  <div :class="className">
    <header :class="`${className}__header`">
      <Logo />
    </header>

    <div :class="`${className}__body`">
      <h1 :class="`${className}__title`">Тест на совместимость</h1>
      <p :class="`${className}__subtitle`">
        Узнай на сколько ты совместим(а) со своей второй половинкой
      </p>
      <UiButton primary @click="$emit('submit')">Начать</UiButton>
    </div>

    <footer :class="`${className}__footer`">33-13.32.2.13.32-20.6.2.33</footer>
  </div>
</template>

<style lang="sass">
@import "../../sass/_variables.sass"

.c-setpBeginning
  margin-left: auto
  margin-right: auto
  padding: $container-gap
  max-width: $container-width

  &__header
    margin-bottom: 70px

  &__body
    max-width: 900px

  &__title
    margin: 0 0 30px
    font-size: 80px
    font-weight: 700
    line-height: 1.2em
  &__subtitle
    margin: 0 0 50px
    font-size: 32px
    font-weight: 500

  &__footer
    margin-top: 90px
    font-size: 32px
    line-height: 1.2em
</style>
