<script setup>
import { computed, ref } from "@vue/reactivity";
import UiBlock from "./Ui/Block.vue";
import UiFormFile from "./Ui/Form/File.vue";
import UiFormSex from "./Ui/Form/Sex/index.vue";

const className = "c-authForm";

const field = ref({
  sex: '0',
});

const sexModel = computed({
  get: () => field.value.sex,
  set: (v) => {
    field.value.sex = v;
  },
});
</script>

<template>
  <UiBlock :class="className">
    <form :class="`${className}__inner`">
      <h2 :class="`${className}__title`">Заполните все поля</h2>

      <UiFormFile :class="`${className}__file`" />
      <UiFormSex v-model="sexModel" />
    </form>
  </UiBlock>
</template>

<style lang="sass">
.c-authForm
  padding: 40px 15px 45px
  border-radius: 30px

  &__inner
    margin-left: auto
    margin-right: auto
    max-width: 400px

  &__title
    margin: 0 0 30px
    font-size: 32px
    font-weight: 700
    line-height: 1.2em
    text-align: center

  &__file
    margin: 0 auto 30px
</style>
