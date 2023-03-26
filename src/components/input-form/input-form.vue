<template>
  <div class="input-form">
    <div class="input-form__label">{{labelName}}</div>
    <div class="input-form__wrapper">
      <img :src="require('../../assets/img/icon/ic-temp.svg')" class="input-form__star-icon">
      <input type="text" class="input-form__input" v-model="textValue" @input="$emit('input', textValue)" placeholder="Type here">
      <img :src="require('../../assets/img/icon/ic-error.svg')" class="input-form__error-icon" v-if="errorMsg">
      <img :src="require('../../assets/img/icon/rounded-gray-cross.svg')" class="input-form__clear-icon" v-show="textValue" @click="onClear">
    </div>
    <div class="input-form__error-msg" v-if="errorMsg">{{errorMsg}}</div>
  </div>
</template>

<script>
export default {
  name: 'input-form',
  props: {
    labelName: {
      type: String,
      default: 'Label Name'
    },
    errorMsg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      textValue: ''
    }
  },
  methods: {
    onClear() {
      this.textValue = '';
      this.$emit('onClear', this.textValue);
    }
  }

}
</script>

<style lang="scss">
@import "../../styles/_colors";
.input-form {
  max-width: 310px;
  &__label {
    font-weight: 500;
    font-size: 13px;
    color: $grey-800;
    margin: 0 0 5px 20px;
  }
  &__wrapper {
    display: flex;
    position: relative;
  }
  &__star-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 18px;
  }
  &__input {
    width: 100%;
    outline: none;
    height: 30px;
    background: $white-100;
    border: 1px solid $grey-400;
    border-radius: 100px;
    padding: 0 60px 0 42px;
  }
  &__error-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 36px;
    background: $white-100;
  }
  &__clear-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 13px;
    cursor: pointer;
  }
  &__error-msg {
    margin: 5px 0 0 20px;
    font-weight: 500;
    font-size: 11px;
    color: $red;
  }
}
</style>