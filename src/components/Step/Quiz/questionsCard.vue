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
      <button :class="`${className}-footer__btn`" type="submit">Далее</button>
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
    padding: 40px 40px 46px

  &__title
    margin: 0 0 20px
    color: #162447
    font-size: 34px
    font-weight: 700
    line-height: 1.25em
    text-transform: uppercase
    text-align: center
  &__description
    margin: 0 0 40px
    height: 70px
    color: #646876
    font-size: 28px
    font-weight: 500
    line-height: 1.25em
    text-align: center

  &-list
    $list: &
    --gap: 20px

    margin: 0 var(--gap)
    padding: 0
    display: flex
    justify-content: center
    list-style: none

    &__item
      padding-left: var(--gap)
      padding-right: var(--gap)
      width: 33.33333%

    &__label
      z-index: 0
      position: relative
      height: 58px
      padding: 0 15px
      display: flex
      justify-content: center
      align-items: center
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
      font-size: 20px
      font-weight: 500
      line-height: 1em
      text-align: center
      will-change: color

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
    display: flex
    justify-content: space-between
    align-items: center

    &__title
      padding-top: 2px
      font-size: 24px
      font-weight: 700
      line-height: 1em
      text-transform: uppercase
      color: #646876
    &__btn
      display: block
      padding: 0 40px
      border: 2px solid #DFE4EC
      border-radius: 8px
      height: 44px
      background: #E4EAF2
      color: #646876
      font-size: 20px
      font-weight: 500
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
