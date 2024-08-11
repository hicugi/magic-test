<style lang="sass">
:root
  --color-primary: #FF2F63
  --color-white: #ffffff
  --color-gray: #EDF1F7
  --container-gap: 30px
  --container-width: 1154px

*, *::before, *::after
  box-sizing: border-box

body
  z-index: 0
  position: relative
  margin: 0
  padding: 0
  background-color: var(--color-white)
  font-family: 'Inter', sans-serif
button
  font-family: inherit

.c-before
  position: absolute
  left: 50%
  top: 0
  transform: translateX(-50%)
  font-size: 18px
  line-height: 1.5em
</style>
