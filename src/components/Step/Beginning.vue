<script setup>
import UiButton from "../Ui/Button/index.vue";

const className = "c-setpBeginning";
</script>

<template>
  <div :class="className">
    <header :class="`${className}__header`">
      <div :class="`${className}-logo`">
        <img
          :class="`${className}-logo__img`"
          src="/assets/img/logo.svg"
          alt="MagicTest logo"
        />
      </div>
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
.c-setpBeginning
  $width: 1086px
  $gap: 15px
  margin-left: auto
  margin-right: auto
  padding-left: $gap
  padding-right: $gap
  max-width: #{ $width + $gap * 2 }
  
  &__header
    margin-bottom: 80px

  &-logo__img
    display: block

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
