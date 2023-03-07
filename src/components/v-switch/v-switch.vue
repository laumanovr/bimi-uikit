<template>
  <div>
    <div class="checkbox-switch">
      <input
          type="checkbox"
          :id="id"
          name="switch"
          v-model="isSelected"
          :disabled="isDisabled"
      >
      <label :for="id" :class="{'checkbox-switch--disabled': isDisabled}"></label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-switch',
  props: {
    id: {
      type: String,
      default: '1'
    },
    isChecked: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isSelected: {
      get() {
        return this.isChecked;
      },
      set(val){
        this.$emit('onChange', val);
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/_colors';
.checkbox-switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 20px;

  input {
    display: none;
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $black-900;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 3px;
      left: 2px;
      width: 14px;
      height: 14px;
      background-color: $blue-200;
      border-radius: 50%;
      transition: transform 0.2s ease;
    }

    &.checkbox-switch--disabled {
      background-color: $grey-400;
      cursor: default;
      &:after {
        background-color: $grey-500;
      }
    }
  }

  input:checked + label {
    background-color: $green;

    &:after {
      transform: translateX(12px);
    }

    &.checkbox-switch--disabled {
      background-color: $grey-400;
      cursor: default;
      &:after {
        background-color: $grey-500;
      }
    }
  }

  input:not(:checked) + label:after {
    transform: translateX(0px);
  }
}
</style>
