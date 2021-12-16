<script setup>
const className = "c-stepResultImages";

const props = defineProps({
  leftImage: String,
  rightImage: String,
  active: Boolean,
});

const getImageStyle = (key) => {
  const value = props[`${key}Image`];
  return { backgroundImage: `url('${value}')` };
};
</script>

<template>
  <div :class="{ [className]: true, [`${className}--active`]: active }">
    <div :class="`${className}__image`" :style="getImageStyle('left')" />
    <div :class="`${className}__image`" :style="getImageStyle('right')" />
  </div>
</template>

<style lang="sass">
.c-stepResultImages
  $image-size: 140px

  position: relative
  display: flex
  justify-content: space-between

  &::before
    $keyframe: 'stepResultImagesHeart'
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    width: 29px
    height: 24px
    background: url('/assets/img/heart.svg') no-repeat center
    opacity: 0
    animation: #{$keyframe} 3s ease-out 3s infinite
    content: ''

    @keyframes #{$keyframe}
      @mixin bumb($value)
        #{$value}%
          transform: translate(-50%, -50%) scale(1)
        #{$value + 5}%
          transform: translate(-50%, -50%) scale(1.1)
        #{$value + 10}%
          transform: translate(-50%, -50%) scale(1)
      @include bumb(0)
      @include bumb(10)
      100%
        transform: translate(-50%, -50%) scale(1)
  // before end

  &__image
    width: $image-size
    height: $image-size
    border: 1px solid #E2E9F5
    border-radius: 100%
    justify-self: center
    background: no-repeat center #EDF1F7
    background-size: cover

  &--active::before
    opacity: 1
</style>
