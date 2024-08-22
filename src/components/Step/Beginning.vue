<script setup>
import UiButton from "../Ui/Button/index.vue";
import Logo from "../Logo.vue";

const className = "c-setpBeginning";
</script>

<template>
  <div :class="className">
    <div>
      <header :class="`${className}__header`">
        <Logo />
      </header>

      <div :class="`${className}__body`">
        <h1 :class="`${className}__title`">{{ $t("title") }}</h1>
        <p :class="`${className}__subtitle`">{{ $t("subtitle") }}</p>
        <UiButton primary @click="$emit('submit')">{{ $t("start") }}</UiButton>
      </div>
    </div>

    <footer :class="`${className}__footer`">33-13.32.2.13.32-20.6.2.33</footer>
  </div>
</template>

<style lang="sass">
.c-setpBeginning
  --padding: 50px 20px

  padding: var(--padding)
  min-height: 100vh
  min-height: 100lvh
  display: flex
  flex-direction: column
  justify-content: space-between

  @media screen and (min-width: 768px)
    --padding: 50px

  &__header
    margin-bottom: 100px
    @media screen and (min-width: 768px)
      margin-bottom: 50px
  &__body
    max-width: 520px

  &__title
    margin: 0 0 26px
    color: #162447
    font-size: 32px
    font-weight: 700
    line-height: 1.25em
    text-transform: uppercase
    @media screen and (min-width: 768px)
      font-size: 48px
  &__subtitle
    margin: 0 0 70px
    color: #646876
    font-size: 16px
    font-weight: 500
    line-height: 1.5
    text-transform: uppercase
    @media screen and (min-width: 768px)
      margin-bottom: 36px
      font-size: 24px

  &__footer
    color: #646876
    font-size: 14px
    line-height: 1.2em
    @media screen and (min-width: 768px)
      font-size: 28px
</style>
