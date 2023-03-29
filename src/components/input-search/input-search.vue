<template>
  <div class="input-search" @mouseenter="onHover(true)" @mouseleave="onHover(false)">
    <img
        :src="isDisabled ? disabledIcon : iconPath"
        class="input-search__loupe-icon"
    >
    <input
        type="text"
        class="input-search__input"
        :class="{'input-search__input--disabled': isDisabled}"
        placeholder="Type here"
        v-model="localValue"
        @input="onType"
        :disabled="isDisabled"
    >
    <img
        :src="require('../../assets/img/icon/rounded-gray-cross.svg')"
        class="input-search__clear-icon"
        @click="onClear"
        v-show="value && !isDisabled"
    >
  </div>
</template>

<script>
export default {
  name: 'input-search',
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      localValue: this.value,
      isHovered: false
    }
  },
  computed: {
    iconPath() {
      return this.isHovered || this.value ? require('../../assets/img/icon/ic-search.svg') : require('../../assets/img/icon/ic-search-gray.svg');
    },
    disabledIcon() {
      return require('../../assets/img/icon/ic-search-disabled.svg');
    }
  },
  methods: {
    onType(e) {
      this.$emit('input', e.target.value);
    },
    onClear() {
      this.localValue = '';
      this.$emit('input', '');
    },
    onHover(value) {
      this.isHovered = value;
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/_colors";
.input-search {
  position: relative;
  display: flex;
  max-width: 200px;
  &__loupe-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 17px;
  }
  &__input {
    width: 100%;
    background: $white-100;
    height: 32px;
    padding: 0 30px 0 40px;
    border: 1px solid $grey-400;
    border-radius: 100px;
    font-weight: 500;
    font-size: 12px;
    color: $black-900;
    outline: none;
    &--disabled {
      cursor: default;
      color: $grey-700;
    }
  }
  &__clear-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 9px;
    cursor: pointer;
  }
}
</style>