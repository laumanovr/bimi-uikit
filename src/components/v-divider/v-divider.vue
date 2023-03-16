<template>
  <div class="divider-line" :class="{'divider-line__bold': isBold}"></div>
</template>

<script>
export default {
  name: 'v-divider',
  props: {
    isBold: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/_colors";
.divider-line {
  height: 1px;
  margin: 5px 0;
  background: $grey-300;
  &__bold {
    background: $grey-650;
  }
}
</style>
