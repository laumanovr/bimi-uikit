<template>
  <div class="notification label-xmicro" :class="[`notification_${variant}`]">
    <slot>{{ text }}</slot>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: [String, Number],
      default: null,
    },
    variant: {
      type: String,
      default: "white",
      validator: function (value) {
        return ["red", "white", "green"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_colors";

.notification {
  width: fit-content;
  padding: 0 8px;
  background: #fafafa;
  outline: 1px solid $grey-400;
  border-radius: 100px;
  color: $grey;
  &_red {
    outline-color: $red;
    background-color: $red;
    color: $white;
  }
  &_green {
    outline-color: $green;
    background-color: $green;
    color: $white;
  }
}
</style>
