<script setup>
const className = "c-background";
</script>

<template>
  <div :class="className">
    <span></span>
    <span></span>
    <span
      ><svg
        width="703"
        height="715"
        viewBox="0 0 703 715"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.7"
          d="M596.037 442.613C854.766 550.126 641.49 181.699 -59.0893 -0.547607L-265.373 980.176L14.3339 1075.89C119.661 1063.65 299.819 955.974 199.203 730.624C82.5125 469.273 358.264 343.809 596.037 442.613Z"
          fill="url(#paint0_linear_343_99)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_343_99"
            x1="160.306"
            y1="1076.32"
            x2="148.943"
            y2="-0.547598"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="#EDF1F7" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  </div>
</template>

<style lang="sass">
.c-background
  position: absolute
  width: 100%
  height: 100%
  z-index: -1
  overflow: hidden

  span
    position: absolute
    background-repeat: no-repeat

    svg
      position: absolute
      left: 0
      top: 0

    @mixin bgItem($num, $name, $width, $height)
      &:nth-child(#{$num})
        width: $width
        height: $height
        background-image: url('/assets/img/bg/#{$name}.svg')
        @content

    @include bgItem(1, 'red', 573px, 386px)
      right: 0
      top: 0
    @include bgItem(2, 'group', 762px, 239px)
      right: 0
      bottom: 0
    &:nth-child(3)
      left: 0
      top: -15px
</style>
