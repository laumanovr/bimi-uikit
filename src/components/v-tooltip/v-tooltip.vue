<template>
  <div class="v-tooltip p" :class="[{ 'v-tooltip_active': isActive }]">
    <div class="v-tooltip__handler" ref="handler">
      <!-- Элемент-активатор тултипа -->
      <slot name="handler">Наведите для показа тултипа</slot>
    </div>
    <div
      class="v-tooltip__content-wrapper body-xs"
      :style="{
        maxWidth: widthTool,
        backgroundColor,
        color,
        borderRadius,
        padding: padding,
      }"
      ref="content"
    >
      <!-- Контент тултипа -->
      <slot name="content">Контент тултипа</slot>

      <div class="v-tooltip__arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";
import hoverintent from "hoverintent";

export default {
  name: "v-tooltip",
  props: {
    placement: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "right", "bottom", "left"].some((el) => el === value);
      },
    },
    event: {
      type: String,
      default: "hover",
      validator(value) {
        return ["hover", "click"].some((el) => el === value);
      },
    },
    widthTool: {
      type: String,
      default: "175px",
    },
    padding: {
      type: String,
      default: "10px 15px",
    },
    backgroundColor: {
      type: String,
      default: "white",
    },
    color: {
      type: String,
      default: "black",
    },
    borderRadius: {
      type: String,
      default: "10px",
    },
  },
  mounted() {
    switch (this.event) {
      case "hover":
        this.$hoverintent = hoverintent(
          this.$refs.handler,
          this.enable,
          this.disable
        );
        break;
      case "click":
        this.$refs.handler.addEventListener("click", this.enableClickHandler);
        break;
    }
  },
  destroyed() {
    window.removeEventListener("click", this.onWindowClick);
    this.destroy();
    if (this.$hoverintent) this.$hoverintent.remove();
  },
  data() {
    return {
      instance: null,
      isActive: false,
    };
  },
  methods: {
    init() {
      if (!this.instance) {
        this.instance = createPopper(this.$refs.handler, this.$refs.content, {
          placement: this.placement,
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [10, 15],
              },
            },
            {
              name: "preventOverflow",
              options: {
                padding: 10,
              },
            },
          ],
        });
      }
    },
    destroy() {
      if (this.instance) {
        this.instance.destroy();
        this.instance = null;
      }
    },
    enable() {
      this.init();
      this.isActive = true;
    },
    disable() {
      this.destroy();
      this.isActive = false;
    },
    enableClickHandler() {
      window.addEventListener("click", this.onWindowClick);
      this.enable();
    },
    disabledClickHandler() {
      window.removeEventListener("click", this.onWindowClick);
      this.disable();
    },
    onHandlerClick() {
      this.isActive ? this.disabledClickHandler() : this.enableClickHandler();
    },
    onWindowClick({ target }) {
      const tooltip = target.closest(".v-tooltip");
      const notInsideCurrentTooltip =
        tooltip !== this.$el || "tooltipClose" in target.dataset;
      if (notInsideCurrentTooltip) this.disabledClickHandler();
    },
  },
};
</script>

<style lang="scss">
.v-tooltip {
  &_active {
    .v-tooltip__content-wrapper {
      visibility: visible;
      opacity: 1;
    }
  }
  &__handler {
    display: inline-block;
    cursor: pointer;
  }
  &__content-wrapper {
    position: absolute;
    top: -9999px;
    left: -9999px;
    color: #fff;
    transition-property: visibility, opacity;
    outline: 0;
    box-sizing: border-box;
    visibility: hidden;
    opacity: 0;
    display: block;

    &[data-popper-placement^="top"] > .v-tooltip__arrow {
      bottom: -4px;
    }

    &[data-popper-placement^="bottom"] > .v-tooltip__arrow {
      top: -4px;
    }

    &[data-popper-placement^="left"] > .v-tooltip__arrow {
      right: -4px;
    }

    &[data-popper-placement^="right"] > .v-tooltip__arrow {
      left: -4px;
    }
  }

  &__arrow,
  &__arrow::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background: inherit;
  }

  &__arrow {
    visibility: hidden;
  }

  &__arrow::before {
    visibility: visible;
    content: "";
    transform: rotate(45deg);
  }
}
</style>
