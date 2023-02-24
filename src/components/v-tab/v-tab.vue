<template>
  <div class="tab" :class="{ tab_active: active }" @click="onClick">
    <span
      v-if="icon"
      class="tab__icon"
      :class="[`tab__icon_${iconPosition}`, `icon-${icon}`]"
    />
    <span class="label-m"> {{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "VTab",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    iconPosition: {
      type: String,
      default: "left",
      validator: function (value) {
        return ["left", "right"].indexOf(value) !== -1;
      },
    },
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss">
.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 5px 15px 2px;
  color: $grey;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  &:hover {
    color: $black-900;
    transition: color 0.2s ease-out;
    .tab__icon {
      transition: background-color 0.2s ease-out;
      background-color: $black-900;
    }
  }
  &_active {
    border-bottom: 3px solid $lightGreen;
    color: $black-900;
    .tab__icon {
      background-color: $black-900;
    }
  }
  &__icon {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background-color: $grey-900;
    &_right {
      order: 1;
      margin: 0;
      margin-left: 5px;
    }
  }
}
</style>
