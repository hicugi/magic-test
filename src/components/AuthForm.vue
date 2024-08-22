<script setup>
import { computed, ref } from "@vue/reactivity";
import UiBlock from "./Ui/Block.vue";
import UiFormFile from "./Ui/Form/File.vue";
import UiFormSex from "./Ui/Form/Sex/index.vue";
import UiFormDate from "./Ui/Form/Date.vue";
import UiFormInput from "./Ui/Form/Input.vue";
import UiFormSelectZodiac from "./Ui/Form/Select/Zodiac.vue";
import UiButton from "./Ui/Button/index.vue";

const className = "c-authForm";

const field = ref({});
const emit = defineEmits(["submit-data"]);

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
const nameModel = getComputedModel("name");
const zodiacModel = getComputedModel("zodiac");

const handleSubmit = () => {
  const data = JSON.parse(JSON.stringify(field.value));
  emit("submit-data", data);
  return;
};
</script>

<template>
  <UiBlock :class="className">
    <form :class="`${className}__inner`" @submit.prevent="handleSubmit">
      <h2 :class="`${className}__title`">{{ $t("signupTitle") }}</h2>

      <UiFormFile :class="`${className}__file`" v-model="pictureModel" />
      <UiFormSex :class="`${className}__field`" v-model="sexModel" />
      <UiFormDate :class="`${className}__field`" v-model="dateModel" />

      <div :class="`${className}-row`">
        <div :class="[`${className}-row__col`, `${className}-row__col_name`]">
          <UiFormInput v-model="nameModel" :placeholder="$t('name')" />
        </div>
        <div :class="[`${className}-row__col`, `${className}-row__col_zodiac`]">
          <UiFormSelectZodiac v-model="zodiacModel" />
        </div>
      </div>

      <UiButton type="submit" block primary>{{ $t("continue") }}</UiButton>
    </form>
  </UiBlock>
</template>

<style lang="sass">
.c-authForm
  $margin: 20px

  margin: 0 auto
  padding: 0 15px
  max-width: 520px
  min-height: 580px
  display: flex
  flex-direction: column
  justify-content: center
  border-radius: 30px

  @media screen and (min-width: 768px)
    min-height: var(--ui-container-inner)

  &__inner
    margin-left: auto
    margin-right: auto
    max-width: 400px

  &__title
    margin: 0 0 #{$margin}
    color: #646876
    font-size: 26px
    font-weight: 700
    line-height: 34px
    text-align: center
    text-transform: uppercase

  &__file
    margin: 0 auto #{$margin}
  &__field
    margin-bottom: $margin

  &-row
    margin-bottom: $margin
    display: grid
    grid-gap: 10px
    grid-template: ". ." / 1fr 118px

    @media screen and (min-width: 768px)
      grid-gap: 20px
</style>
