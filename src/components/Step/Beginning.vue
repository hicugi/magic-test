<script setup>
import Logo from "../Logo.vue";
import UiButton from "../Ui/Button/index.vue";

const className = "c-setpBeginning";
</script>

<template>
  <div :class="className">
    <div>
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
    </div>

    <footer :class="`${className}__footer`">33-13.32.2.13.32-20.6.2.33</footer>
  </div>
</template>

<style lang="sass">
.c-setpBeginning
  margin-left: auto
  margin-right: auto
  padding: var(--container-gap)
  max-width: var(--container-width)
  height: 100%
  display: flex
  flex-direction: column
  justify-content: space-between

  &__header
    margin-bottom: 60px

  &__body
    max-width: 900px

  &__title
    margin: 0 0 26px
    color: #162447
    font-size: 68px
    font-weight: 700
    line-height: 1.25em
    text-transform: uppercase
  &__subtitle
    margin: 0 0 36px
    max-width: 780px
    color: #646876
    font-size: 28px
    font-weight: 500
    line-height: 34px
    text-transform: uppercase

  &__footer
    color: #646876
    font-size: 28px
    line-height: 1.2em
</style>
