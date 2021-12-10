<script setup>
defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);

const handleInput = (e) => {
  emit("update:modelValue", e.target.value);
};
</script>

<template>
  <input class="ui-formInput" v-model="modelValue" @input="handleInput" />
</template>

<style lang="sass">
.ui-formInput
  border: 2px solid #E2E9F5
  border-radius: 8px
  padding: 10px 22px 10px
  background: #EDF1F7
  color: #646876
  font-size: 20px
  line-height: 1.2em
</style>
