<template>
  <b-tooltip custom-class="hint" :target="target" :placement="placement">
    <div class="hint__title body-xs">
      <slot>{{ title }}</slot>
    </div></b-tooltip
  >
</template>

<script>
import { BTooltip } from "bootstrap-vue";
export default {
  name: "VHint",
  components: {
    BTooltip,
  },
  props: {
    target: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    placement: {
      type: String,
      default: "top",
    },
  },
};
</script>

<style lang="scss">
.hint {
  opacity: 1 !important;
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.15));
  &[x-placement^="top"] {
    .arrow::before {
      border-top-color: #ffffff;
    }
  }
  &[x-placement^="bottom"] {
    .arrow::before {
      border-bottom-color: #ffffff;
    }
  }
  &[x-placement^="right"] {
    .arrow::before {
      border-right-color: #ffffff;
    }
  }
  &[x-placement^="left"] {
    .arrow::before {
      border-left-color: #ffffff;
    }
  }
  &__wrapper {
    text-align: left;
  }
  .tooltip-inner {
    padding: 10px 15px;
    background: #ffffff;
    border-radius: 10px;
    color: #1b212d;
  }
}
</style>
