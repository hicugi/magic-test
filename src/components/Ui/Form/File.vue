<script setup>
import { ref } from "@vue/reactivity";

const className = "ui-formFile";
const emit = defineEmits(["update:modelValue"]);

const img = ref("");

const handleChange = ({ target }) => {
  const [file] = target.files;

  if (!file) return;

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = ({ target: t }) => {
    const { result } = t;

    img.value = result;
    emit("update:modelValue", result);
  };
};
</script>

<template>
  <div :class="className" :style="{ backgroundImage: img && `url('${img}')` }">
    <input
      :class="`${className}__control`"
      type="file"
      accept="image/png, image/jpeg, image/jpg"
      @change="handleChange"
    />
  </div>
</template>

<style lang="sass">
.ui-formFile
  $size: 200px

  position: relative
  border: 2px solid #E2E9F5
  border-radius: 100%
  width: $size
  height: $size
  display: block
  background: url('/assets/img/avatar-female.svg') #EDF1F7 no-repeat center
  background-size: cover

  &__control
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 100%
    opacity: 0
</style>
