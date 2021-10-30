<script setup>
import UiContainer from "../Ui/Container.vue";
import Logo from "../Logo.vue";
import ThisBtnBack from "./BtnBack.vue";

const className = "c-stepAuth";

const getColumnClass = (v) =>
  ["", `_${v}`].map((v) => [className, "-row__col", v].join(""));
</script>

<template>
  <UiContainer>
    <div :class="`${className}-row`">
      <div :class="getColumnClass('side')">
        <Logo />
      </div>
      <div :class="getColumnClass('middle')"></div>
      <div :class="getColumnClass('side2')">
        <ThisBtnBack @click="$emit('back')" />
      </div>
    </div>
  </UiContainer>
</template>

<style lang="sass">
.c-stepAuth

  &-row
    display: flex

    &__col
      width: 100%
      max-width: 253px

      &_middle
        max-width: 580px

      &_side2
        display: flex
        justify-content: flex-end
</style>
