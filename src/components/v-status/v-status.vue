<template>
  <div class="status" :class="[`status_${variant}`]"></div>
</template>

<script>
export default {
  props: {
    variant: {
      tyep: String,
      default: "ready",
      validator: function (value) {
        return ["ready", "prepare"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/_colors";

.status {
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: top;
  &_ready {
    background: url("../../assets/img/icon/ic-status-ready.svg") no-repeat 50%
      50%;
  }
  &_prepare {
    background: url("../../assets/img/icon/ic-status-prepare.svg") no-repeat 50%
      50%;
  }
}
</style>
