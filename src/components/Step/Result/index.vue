<script setup>
import UiContainer from "../../Ui/Container.vue";
import StepHeader from "../Header.vue";
import items from "../../../helpers/questions.js";

const step = items.length + 1;
</script>

<template>
  <UiContainer>
    <StepHeader v-bind="{ step, stepMax: step - 1 }" />

    results
  </UiContainer>
</template>
