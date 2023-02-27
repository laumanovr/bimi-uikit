<template>
  <div :class="getClasses">
    <slot>{{ title }}</slot>
  </div>
</template>

<script>
export default {
  name: "VLabel",
  props: {
    title: {
      type: String,
      default: "",
    },
    size: {
      default: "medium",
      type: String,
      validator: function (value) {
        return ["medium", "small"].indexOf(value) !== -1;
      },
    },
    sticky: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getClasses() {
      return [
        { label_sticky: this.sticky },
        this.size === "medium" ? "label-m" : "label-s",
        `label_${this.size}`,
        "label",
      ];
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/_colors";

.label {
  width: fit-content;
  background: $white;
  border: 1px solid $grey-400;
  border-radius: 100px;
  color: $black-900;
  &_sticky {
    position: sticky;
    top: 0;
    z-index: 1;
  }
  &_medium {
    padding: 5px 15px;
  }
  &_small {
    padding: 2px 15px;
  }
}
</style>
