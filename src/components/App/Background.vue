<script setup>
const className = "c-background";
</script>

<template>
  <div :class="className">
    <span></span>
    <span
      ><svg
        width="832"
        height="972"
        viewBox="0 0 832 972"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.7"
          d="M710.5 507C1006.5 630 762.5 208.5 -39 0L-275 1122L45 1231.5C165.5 1217.5 371.61 1094.31 256.5 836.5C123 537.5 438.475 393.962 710.5 507Z"
          fill="url(#paint0_linear_106:1507)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_106:1507"
            x1="212"
            y1="1232"
            x2="199"
            y2="1.12852e-05"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="#EDF1F7" />
          </linearGradient>
        </defs>
      </svg>
    </span>
    <span></span><span></span><span></span>
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

    @include bgItem(1, 'red', 656px, 441px)
      right: 0
      top: 0
    &:nth-child(2)
      left: 0
      top: 52px
      width: 832px
      height: 972px
    @include bgItem(3, 'light-blue', 441px, 288px)
      left: 50%
      bottom: 0
      margin-right: -15px
      transform: translateX(-50%)
    @include bgItem(4, 'blue', 204px, 399px)
      right: 268px
      bottom: 0
    @include bgItem(5, 'yellow', 298px, 374px)
      right: 0
      bottom: 0
</style>
