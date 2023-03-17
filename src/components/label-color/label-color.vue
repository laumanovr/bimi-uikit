<template>
  <div :class="getClasses">
    <span v-if="icon" class="label-color__icon" :class="`icon-${icon}`"></span>
    <span v-else class="label-color__title body-xs">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "LabelColor",
  props: {
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      required: true,
      validator: function (value) {
        return ["red", "blue", "green", "black"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    getClasses() {
      return [`label-color_${this.color}`, "label-color"];
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/_colors";

.label-color {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-radius: 5px;
  color: #ecf2ff;
  &_red {
    background-color: $red;
  }
  &_blue {
    background-color: $blue;
  }
  &_green {
    background-color: $green;
  }
  &_yellow {
    background-color: $yellow;
  }
  &_black {
    background-color: $black-900;
  }
  &__icon {
    margin: 1px 2px;
    width: 16px !important;
    height: 16px !important;
    background-color: $white;
  }
  &__title {
    margin: 2px 5px;
  }
}
</style>
