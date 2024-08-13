<script setup>
import UiContainer from "../Ui/Container.vue";
import Logo from "../Logo.vue";
import ThisBtnBack from "./BtnBack.vue";
import AuthForm from "../AuthForm.vue";

const className = "c-stepAuth";

const emit = defineEmits(["submit-data"]);

const getColumnClass = (v) =>
  ["", `_${v}`].map((v) => [className, "-row__col", v].join(""));
</script>

<template>
  <UiContainer>
    <div :class="`${className}-row`">
      <div :class="getColumnClass('side')">
        <Logo />
      </div>
      <div :class="getColumnClass('middle')">
        <AuthForm @submit-data="(data) => emit('submit-data', data)" />
      </div>
      <div :class="getColumnClass('side2')">
        <ThisBtnBack @click="$emit('back')" />
      </div>
    </div>
  </UiContainer>
</template>

<style lang="scss">
.c-stepAuth {
  &-row {
    display: grid;
    row-gap: 50px;
    grid-template-areas: "side side2" "middle middle";

    &__col {
      &_side,
      &_side2 {
        overflow: hidden;
      }

      &_side {
        grid-area: side;
        opacity: 0.5;
      }
      &_middle {
        grid-area: middle;
      }
      &_side2 {
        grid-area: side2;
        padding-top: 15px;
        display: flex;
        justify-content: flex-end;
      }
    }

    @media screen and (min-width: 768px) {
      --size-side: 180px;
      display: grid;
      grid-template-areas: "side middle side2";
      grid-template-columns: var(--size-side) 1fr var(--size-side);
      row-gap: 30px;
    }
  }
}
</style>
