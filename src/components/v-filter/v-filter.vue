<template>
  <div class="filter">
    <input
      type="radio"
      class="filter__radio"
      :id="type"
      :name="name"
      :checked="value === type"
      @change="onChange"
    />
    <label :for="type" class="filter__label">
      <span
        v-if="icon"
        class="filter__icon"
        :class="[`filter__icon_${iconPosition}`, `icon-${icon}`]"
      />
      <span class="filter__text label-m">{{ title }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "VFilter",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    name: {
      type: String,
      default: "selector",
    },
    title: {
      type: String,
      default: "",
    },
    type: {
      type: [String, Number],
      default: null,
    },
    value: {
      type: [String, Number],
      default: null,
    },
    disabled: {
      type: Boolean,
      default: true,
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
    onChange() {
      this.$emit("change", this.type);
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/_colors";

.filter {
  display: flex;
  &__radio {
    appearance: none;
    display: none;
  }
  &__label {
    display: flex;
    align-items: center;
    transform: none;
    padding: 4px 14px;
    border: 1px solid $grey-400;
    border-radius: 20px;
    text-align: center;
    letter-spacing: 0.5px;
    color: $grey;
    cursor: pointer;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    &:hover {
      transition: color 0.3s ease-in-out;
      color: $black-900;
      .filter__icon {
        transition: background-color 0.3s ease-in-out;
        background-color: $black-900;
      }
    }
  }
  &__radio:checked + &__label {
    background: $lightGreen;
    border-color: $lightGreen;
    color: $black;
    .filter__icon {
      background: $black;
    }
  }
  &__text {
    display: inline-block;
  }
  &__icon {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background: $grey-900;
    &_right {
      order: 1;
      margin: 0;
      margin-left: 5px;
    }
  }
}
</style>
