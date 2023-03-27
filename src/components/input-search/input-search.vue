<template>
  <div class="input-search">
    <img
        :src="iconPath"
        class="input-search__loupe-icon"
    >
    <input
        type="text"
        class="input-search__input"
        placeholder="Type here"
        v-model="inputText"
        @input="onType"
        :disabled="isDisabled"
    >
    <img
        :src="require('../../assets/img/icon/rounded-gray-cross.svg')"
        class="input-search__clear-icon"
        @click="onClear"
        v-show="inputText"
    >
  </div>
</template>

<script>
export default {
  name: 'input-search',
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputText: ''
    }
  },
  computed: {
    iconPath() {
      return this.isDisabled || !this.inputText ? require('../../assets/img/icon/ic-search-gray.svg') : require('../../assets/img/icon/ic-search.svg');
    }
  },
  methods: {
    onType() {
      this.$emit('input', this.inputText);
    },
    onClear() {
      this.inputText = '';
      this.$emit('onClear', '');
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
    height: 30px;
    padding: 0 30px 0 40px;
    border: 1px solid $grey-400;
    border-radius: 100px;
    font-weight: 500;
    font-size: 12px;
    color: $black-900;
    outline: none;
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