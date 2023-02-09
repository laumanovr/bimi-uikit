<template>
  <label class="select">
    <input
      type="checkbox"
      class="select__input"
      :class="{
        select__input_selected: selected,
      }"
      :value="value"
      :name="name"
      :checked="checked"
      :disabled="disabled"
      @change="onChange"
    />
  </label>
</template>

<script>
export default {
  model: {
    prop: "checked",
    event: "change",
  },
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    value: [String, Number],
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onChange(event) {
      this.$emit("change", event.target.checked, this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  width: 1.067rem;
  height: 1.067rem;
  display: flex;
  cursor: pointer;
  &__input {
    width: 1.067rem;
    height: 1.067rem;
    display: inline-block;
    cursor: pointer;
    vertical-align: top;
    outline: none;
    flex-shrink: 0;
    border: 0.067rem solid $grey-400;
    border-radius: 6.667rem;
    &:hover {
      transition: border 0.3s ease-in-out;
      border: 0.067rem solid $black-900;
    }
    &_selected {
      background-image: url("~@/assets/img/icon/mark-black.svg");
      background-repeat: no-repeat;
      background-position: 50% 0.2rem;
      background-size: auto;
      border: 0.067rem solid $black-900;
    }
    &:checked {
      background-image: url("~@/assets/img/icon/mark.svg");
      background-repeat: no-repeat;
      background-position: 50% 0.2rem;
      background-size: auto;
      background-color: $black-900;
      border: 0.067rem solid $black-900;
    }
    &:disabled {
      opacity: 0.2;
    }
  }
}
</style>
