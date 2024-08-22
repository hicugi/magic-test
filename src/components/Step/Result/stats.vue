<script setup>
import { computed, onMounted, ref, watch } from "@vue/runtime-core";
import { getTranslate } from "../../../lang.js";

const props = defineProps({
  loading: Boolean,
});

const className = "c-stepResultStats";

const min = ref(62);
const updatedValue = ref(0);

const labels = Array.from({ length: 4 }, (_, i) =>
  getTranslate(`resultList${i + 1}`)
);
const getValue = (max = 99) =>
  Math.floor(Math.random() * (max - min.value) + min.value);

const list = computed(() => {
  return labels.map((label) => ({
    label,
    value: getValue(),
    key: updatedValue.value,
  }));
});

const titleNumber = computed(() => {
  const result = Math.floor(
    list.value.reduce((r, item) => r + Number(item.value), 0) /
      list.value.length
  ).toString();

  return result.length == 1 ? ["0", result].join("") : result;
});

// loading
const minForLoaded = 94;
let loadingInterval;
watch(
  () => props.loading,
  () => {
    min.value = minForLoaded;
    clearInterval(loadingInterval);
  }
);

onMounted(() => {
  loadingInterval = setInterval(() => {
    updatedValue.value += 1;
  }, 200);
});
</script>

<template>
  <div :class="{ [className]: true, [`${className}--loading`]: loading }">
    <h3 :class="`${className}-title`">
      <span>{{ $t("resultListTitle") }} </span>
      <span :class="`${className}-title__num`">{{ titleNumber }}</span>
      <span>%</span>
    </h3>

    <ul
      :class="[
        `${className}-list`,
        `${className}-list--updated-${updatedValue}`,
      ]"
    >
      <template v-for="item in list">
        <li
          :class="`${className}-list__item`"
          :style="{ width: `${item.value}%` }"
        >
          <span :class="`${className}-list__label`" v-text="item.label" />
          <span :class="`${className}-list__value`" v-text="`${item.value}%`" />
        </li>
      </template>
    </ul>
  </div>
</template>

<style lang="sass">
.c-stepResultStats
  position: relative

  &-title
    margin: 0 0 22px
    color: #162447
    font-size: 16px
    font-weight: 700
    line-height: 19px
    text-align: center
    text-transform: uppercase

    &__num
      width: 23px
      display: inline-block

  &-list
    $list: &
    $padding-side: 14px

    margin: 0
    padding: 0
    list-style: none

    &__item
      z-index: 0
      position: relative
      padding: 0 $padding-side
      border-radius: 15px
      display: flex
      justify-content: space-between
      color: #FFFFFF
      font-size: 12px
      font-weight: 700
      line-height: 31px
      will-change: width
      transition: linear .2s

      @mixin nthChild($index, $color)
        &:nth-child(#{$index})
          background-color: $color

      @include nthChild(1, #5A5DF6)
      @include nthChild(2, #FFBD16)
      @include nthChild(3, #FF2F63)
      @include nthChild(4, #1EF2FE)

      & + &
        margin-top: 10px
    // end item

    &__value
      position: absolute
      right: $padding-side
      width: 30px
      text-align: right
</style>
