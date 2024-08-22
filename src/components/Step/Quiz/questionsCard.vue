<script setup>
import { computed, ref } from "@vue/reactivity";
import ThisQuestionsCardHint from "./questionsCardHint.vue";

const props = defineProps({
  title: String,
  description: String,
  options: Array,

  index: Number,
  footerTitle: {
    type: String,
    default: "",
  },
});
const requiredError = ref(false);
const emit = defineEmits(["submit-data"]);

const className = "c-stepQuizQuestionsCard";

const selectedIndex = ref();
const handleItemChnage = (index) => {
  selectedIndex.value = index;
  requiredError.value = false;
};
const handleSubmit = () => {
  if (selectedIndex.value === undefined) {
    requiredError.value = true;
    return;
  }

  emit("submit-data", selectedIndex.value);
};
</script>

<template>
  <form :class="className" @submit.prevent="handleSubmit">
    <div :class="`${className}__body`">
      <h3 :class="`${className}__title`" v-text="title" />
      <p :class="`${className}__description`" v-text="description" />

      <ul :class="`${className}-list`">
        <template v-for="(item, optionIndex) in options">
          <li :class="`${className}-list__item`">
            <label :class="`${className}-list__label`">
              <input
                :class="`${className}-list__controller`"
                type="radio"
                :name="`questionsCard${index}`"
                :value="optionIndex"
                @change="handleItemChnage(optionIndex)"
              />
              <span :class="`${className}-list__text`" v-text="item" />
            </label>
          </li>
        </template>
      </ul>
    </div>

    <div :class="`${className}__hint`">
      <ThisQuestionsCardHint :active="requiredError" />
    </div>

    <footer :class="`${className}-footer`">
      <div :class="`${className}-footer__title`">{{ footerTitle }}</div>
      <button :class="`${className}-footer__btn`" type="submit">
        {{ $t("nextQuestion") }}
      </button>
    </footer>
  </form>
</template>

<style lang="sass">
.c-stepQuizQuestionsCard
  $self: &

  &__body,
  &__body::before,
  &-footer
    border: 2px solid #EDF1F7
    border-radius: 20px
    background-color: var(--color-white)
    will-change: background-color, border-color
  // body & footer end

  &__body
    position: relative
    padding: 20px 15px

    @media screen and (min-width: 768px)
      padding: 40px 60px 46px

  &__title
    margin: 0 0 10px
    color: #162447
    font-size: 24px
    font-weight: 700
    line-height: 1.25em
    text-transform: uppercase
    text-align: center

    @media screen and (min-width: 768px)
      margin-bottom: 20px
      font-size: 34px

  &__description
    margin: 0 0
    min-height: 120px
    color: #646876
    font-size: 18px
    font-weight: 500
    line-height: 1.25em
    text-align: center

    @media screen and (min-width: 768px)
      min-height: 110px
      font-size: 28px

  &-list
    $list: &

    margin: 0
    padding: 0
    display: grid
    gap: 30px
    row-gap: 10px
    list-style: none

    @media screen and (min-width: 768px)
      grid-template-columns: repeat(3, 1fr)
      justify-content: center

    &__label
      z-index: 0
      position: relative
      height: 48px
      padding: 0 15px
      display: flex
      justify-content: center
      align-items: center
      @media screen and (min-width: 768px)
        height: 58px
    &__controller
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      opacity: 0
      &:checked ~ #{$list}__text
        color: var(--color-white)
        &::before
          background-color: var(--color-primary)
          border-color: var(--color-primary)

    &__text
      display: block
      color: #646876
      font-size: 16px
      font-weight: 500
      line-height: 1em
      text-align: center
      will-change: color

      @media screen and (min-width: 768px)
        font-size: 20px

      &::before
        z-index: -1
        position: absolute
        left: 0
        top: 0
        width: 100%
        height: 100%
        border: 2px solid #DFE4EC
        border-radius: 10px
        background: #E4EAF2
        will-change: background-color, border-color
        content: ''
  // list end

  &-footer
    padding: 20px

    @media screen and (min-width: 768px)
      display: flex
      justify-content: space-between
      align-items: center

    &__title
      padding-top: 2px
      display: none
      font-size: 24px
      font-weight: 700
      line-height: 1em
      text-transform: uppercase
      color: #646876
      @media screen and (min-width: 768px)
        display: block
    &__btn
      display: block
      padding: 0 40px
      border: 2px solid #DFE4EC
      border-radius: 8px
      width: 100%
      height: 44px
      background: #E4EAF2
      color: #646876
      font-size: 20px
      font-weight: 500
      @media screen and (min-width: 768px)
        width: auto
  // footer end


  &__hint
    padding-top: 15px
    padding-bottom: 10px

  &[disabled]
    #{$self}__body
      border-color: var(--color-white)

      &::before
        z-index: 1
        position: absolute
        left: 0
        top: 0
        width: 100%
        height: 100%
        background-color: #E4EAF2
        content: ''
    #{$self}-footer
      visibility: hidden
</style>
