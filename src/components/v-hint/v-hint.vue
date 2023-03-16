<template>
  <v-tooltip
    class="tip"
    event="hover"
    backgroundColor="#ffffff"
    color="#1b212d"
    padding="10px 15px"
    :placement="placement"
  >
    <template #handler>
      <slot name="handler"></slot>
    </template>
    <template #content>
      <div class="hint__title body-xs">
        <slot name="content">{{ title }}</slot>
      </div>
    </template>
  </v-tooltip>
</template>

<script>
import VTooltip from "../v-tooltip/v-tooltip.vue";

export default {
  name: "VHint",
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
};
</script>

<style lang="scss">
@import "../../styles/_colors";

.hint {
  filter: drop-shadow(0px 4px 20px $grey-650);
}
</style>
