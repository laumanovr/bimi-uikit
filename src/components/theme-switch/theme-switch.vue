<template>
  <div class="theme-switch">
    <input type="checkbox" :id="id" name="switch" v-model="isSelected">
    <label :for="id">
      <img class="theme-switch__icon-day" :src="require('../../assets/img/icon/sun.svg')">
      <img class="theme-switch__icon-night" :src="require('../../assets/img/icon/moon.svg')">
    </label>
  </div>
</template>

<script>
export default {
  name: 'theme-switch',
  props: {
    id: {
      type: String,
      default: '1'
    },
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isSelected: {
      get() {
        return this.isChecked;
      },
      set(val) {
        this.$emit('onChange', val);
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/_colors';
.theme-switch {
  position: relative;
  display: inline-block;
  width: 38px;
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
    background-color: $black;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 2px;
      left: 2px;
      width: 16px;
      height: 16px;
      background-color: #fff;
      border-radius: 50%;
      transition: transform 0.2s ease;
    }
  }

  &__icon-day {
    position: absolute;
    top: 3px;
    left: 3px;
    font-size: 20px;
  }

  &__icon-night {
    position: absolute;
    top: 6px;
    right: 6px;
    font-size: 20px;
  }

  input:checked + label {
    background-color: $white-100;

    .theme-switch__icon-day {
      display: block;
    }

    .theme-switch__icon-night {
      display: none;
    }

    &:after {
      transform: translateX(18px);
      background-color: $black;
    }
  }

  input:not(:checked) + label {
    .theme-switch__icon-day {
      display: none;
    }

    .theme-switch__icon-night {
      display: block;
    }

    &:after {
      transform: translateX(0px);
    }
  }
}
</style>
