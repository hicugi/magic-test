<script setup>
import { ref } from "@vue/reactivity";
import UiContainer from "../../Ui/Container.vue";
import ThisPreAnimation from "./preAnimation.vue";

const props = defineProps({
  picture: String,
});

const emit = defineEmits(["animation-ended"]);

const handleAnimationEnd = () => {
  emit("animation-ended");
};
</script>

<template>
  <UiContainer>
    <ThisPreAnimation v-bind="props" @end="handleAnimationEnd" />
  </UiContainer>
</template>
