<script setup>
import { computed, ref } from "@vue/reactivity";
import UiBlock from "./Ui/Block.vue";
import UiFormFile from "./Ui/Form/File.vue";
import UiFormSex from "./Ui/Form/Sex/index.vue";
import UiFormDate from "./Ui/Form/Date.vue";

const className = "c-authForm";

const field = ref({
  picture: undefined,
  sex: "0",
  date: undefined,
});

const getComputedModel = (key) =>
  computed({
    get: () => field.value[key],
    set: (newValue) => {
      field.value = {
        ...field.value,
        [key]: newValue,
      };
    },
  });

const pictureModel = getComputedModel("picture");
const sexModel = getComputedModel("sex");
const dateModel = getComputedModel("date");
</script>

<template>
  <UiBlock :class="className">
    <form :class="`${className}__inner`">
      <h2 :class="`${className}__title`">Заполните все поля</h2>

      <UiFormFile :class="`${className}__file`" v-model="pictureModel" />
      <UiFormSex :class="`${className}__sex`" v-model="sexModel" />
      <UiFormDate v-model="dateModel" />
    </form>
  </UiBlock>
</template>

<style lang="sass">
.c-authForm
  $margin: 30px

  padding: 40px 15px 45px
  border-radius: 30px

  &__inner
    margin-left: auto
    margin-right: auto
    max-width: 400px

  &__title
    margin: 0 0 #{$margin}
    font-size: 32px
    font-weight: 700
    line-height: 1.2em
    text-align: center

  &__file
    margin: 0 auto #{$margin}
  &__sex,
  &__date
    margin-bottom: $margin
</style>
