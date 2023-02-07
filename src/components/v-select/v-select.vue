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
  width: 16px;
  height: 16px;
  display: flex;
  cursor: pointer;
  &__input {
    width: 16px;
    height: 16px;
    display: inline-block;
    cursor: pointer;
    vertical-align: top;
    outline: none;
    flex-shrink: 0;
    border: 1px solid rgba(0, 0, 0, 0.07);
    border-radius: 100px;
    &:hover {
      transition: border 0.3s ease-in-out;
      border: 1px solid #1b212d;
    }
    &_selected {
      background-image: url("~@/assets/img/icon/mark-black.svg");
      background-repeat: no-repeat;
      background-position: 50% 3px;
      background-size: auto;
      border: 1px solid #1b212d;
    }
    &:checked {
      background-image: url("~@/assets/img/icon/mark.svg");
      background-repeat: no-repeat;
      background-position: 50% 3px;
      background-size: auto;
      background-color: #1b212d;
      border: 1px solid #1b212d;
    }
    &:disabled {
      opacity: 0.2;
    }
  }
}
</style>
