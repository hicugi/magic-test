<script setup>
import { computed, ref } from "@vue/reactivity";
import UiContainer from "../Ui/Container.vue";

const noStepIndex = ref(0);
const isSuccess = ref(false);

const className = "c-stepResultPropose";
const computedClass = computed(() => ({
  [className]: true,
  [`${className}--step-${noStepIndex.value}`]: !isSuccess.value,
  [`${className}--step-success`]: isSuccess.value,
}));

const handleNoClick = () => {
  noStepIndex.value += 1;
};
const handleYesClick = () => {
  isSuccess.value = true;

  const audio = document.querySelector("#proposeSuccessSound");
  audio.play();
};
</script>

<template>
  <UiContainer>
    <audio id="proposeSuccessSound" src="/assets/sound/happy.wav" />

    <div :class="computedClass">
      <div :class="`${className}-wrapper`">
        <h2 :class="`${className}__title`">Любимая...</h2>
        <div :class="`${className}__image`"></div>

        <p :class="`${className}__text`">
          <span>Выходи за меня!</span>
          <span>Амал жок...</span>
          <span>🥳 урааа <span>🥳</span></span>
        </p>

        <div :class="`${className}-footer`">
          <div
            :class="[`${className}-footer__col`, `${className}-footer__col_no`]"
          >
            <button
              :class="[`${className}__btn`, `${className}__btn_no`]"
              type="button"
              @click="handleNoClick"
            >
              Нет
            </button>
          </div>
          <div
            :class="[
              `${className}-footer__col`,
              `${className}-footer__col_yes`,
            ]"
          >
            <button
              :class="[`${className}__btn`, `${className}__btn_yes`]"
              type="button"
              @click="handleYesClick"
            >
              Да
            </button>
          </div>
        </div>
      </div>
    </div>
  </UiContainer>
</template>

<style lang="sass">
.c-stepResultPropose
  display: flex
  flex-direction: column
  justify-content: center
  height: var(--ui-container-inner)

  &-wrapper
    margin: 0 auto
    padding: 30px 20px 38px
    border: 1px solid #EDF1F7
    border-radius: 23px
    width: 100%
    max-width: 450px
    background-color: var(--color-white)

    @media screen and (min-width: 768px)
      padding: 30px 38px 38px

  &__title
    margin: 0 0 30px
    color: #646876
    font-size: 25px
    font-weight: 700
    line-height: 30px
    text-align: center
    text-transform: uppercase
  &__image
    margin-bottom: 30px
    border-radius: 15px
    height: 256px
    background: url('/assets/img/rings.svg') #F7F1E8 no-repeat center
  // end image

  &__text
    --height: 51px

    position: relative
    margin: 0 0 62px
    height: var(--height)
    color: #162447
    font-size: 32px
    font-weight: 700
    line-height: var(--height)
    text-align: center
    overflow: hidden

    > span
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      transition: linear .2s
      transition-property: transform
      will-change: transform

      &:nth-child(2),
      &:nth-child(3)
        transform: translateY(100%)

    > span > span
      display: inline-block
      transform: scale(-1,1)
  // end text

  &-footer
    display: flex

    &__col
      &_no
        width: 50%
        overflow: hidden
        transition: linear .2s
        transition-property: width
        will-change: width
      &_yes
        flex-grow: 1
  // end footer

  &__btn
    padding: 12px 0 11px
    border: none
    border-radius: 8px
    width: 100%
    display: block
    font-size: 18px
    font-weight: 500
    line-height: 22px

    &_no
      background: none
      color: #A6AFBD
    &_yes
      background: var(--color-primary)
      color: var(--color-white)
  // end btn

  &--step-1 &-footer__col_no
    width: 34%
  &--step-2 &-footer__col_no
    width: 18%
  &--step-3 &
    &__text > span
      &:nth-child(1)
        transform: translateY(-100%)
      &:nth-child(2)
        transform: translateY(0%)
    &-footer__col_no
      width: 0%
  &--step-success &
    &__text > span
      &:nth-child(1)
        transform: translateY(-100%)
      &:nth-child(3)
        transform: translateY(0%)
    &-footer
      opacity: 0
      &::after
        position: absolute
        left: 0
        top: 0
        width: 100%
        height: 100%
        content: ''
</style>
