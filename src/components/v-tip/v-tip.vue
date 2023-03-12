<template>
  <b-tooltip
    :target="target"
    custom-class="tip"
    triggers="focus"
    ref="tooltip"
    :placement="placement"
  >
    <div class="tip__wrapper">
      <div class="tip__title body-xs">
        <slot>{{ title }}</slot>
      </div>

      <button class="tip__button label-xmicro" @click="onClose">OK</button>
    </div>
  </b-tooltip>
</template>

<script>
import { BTooltip } from "bootstrap-vue";

export default {
  name: "VTip",
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
  methods: {
    onClose() {
      this.$refs.tooltip.$emit("close");
      this.$emit("ok");
    },
  },
};
</script>

<style lang="scss">
.tip {
  opacity: 1 !important;
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.15));
  &[x-placement^="top"] {
    .arrow::before {
      border-top-color: #3697f1;
    }
  }
  &[x-placement^="bottom"] {
    .arrow::before {
      border-bottom-color: #3697f1;
    }
  }
  &[x-placement^="right"] {
    .arrow::before {
      border-right-color: #3697f1;
    }
  }
  &[x-placement^="left"] {
    .arrow::before {
      border-left-color: #3697f1;
    }
  }
  &__wrapper {
    text-align: left;
  }
  &__title {
    margin-bottom: 5px;
  }
  &__button {
    padding: 0px 8px;
    background: #ffffff;
    border-radius: 100px;
    color: #3697f1;
    border: none;
    cursor: pointer;
    outline: none;
  }
  .tooltip-inner {
    padding: 15px 20px;
    background: #3697f1;
    border-radius: 10px;
    color: #ffffff;
  }
}
</style>
