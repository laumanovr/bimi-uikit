<template>
  <v-tooltip
    class="tip"
    event="click"
    backgroundColor="#3697F1"
    color="#ffffff"
    padding="15px 20px"
    borderRadius="15px"
    :placement="placement"
  >
    <template #handler>
      <slot name="handler"></slot>
    </template>
    <template #content>
      <div class="tip__title body-xs">
        <slot name="content">{{ title }}</slot>
      </div>

      <button
        class="tip__button label-xmicro"
        data-tooltip-close
        @click="onClose"
      >
        OK
      </button>
    </template>
  </v-tooltip>
</template>

<script>
import VTooltip from "../v-tooltip/v-tooltip.vue";

export default {
  name: "VTip",
  components: {
    VTooltip,
  },
  props: {
    title: {
      type: String,
      default: null,
    },
    placement: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "right", "bottom", "left"].some((el) => el === value);
      },
    },
  },
  methods: {
    onClose() {
      this.$emit("ok");
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/_colors";

.tip {
  filter: drop-shadow(0px 4px 20px $grey-650);
  &__wrapper {
    text-align: left;
  }
  &__title {
    margin-bottom: 5px;
  }
  &__button {
    padding: 0px 8px;
    background: $white;
    border-radius: 100px;
    color: $blue;
    border: none;
    cursor: pointer;
    outline: none;
  }
}
</style>
