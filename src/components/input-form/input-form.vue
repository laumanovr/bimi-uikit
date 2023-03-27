<template>
  <div class="input-form" :class="{'input-form--linear': isLinear}">
    <div class="input-form__label" v-if="!isLinear">{{labelName}}</div>
    <div class="input-form__wrapper">
      <img
          :src="iconPath"
          class="input-form__star-icon"
      >
      <div
          class="input-form__label"
          :class="{'input-form__label-focus': isLinear && textValue, 'input-form__label-disabled': isDisabled}"
          @click="focusOnInput"
          v-if="isLinear"
      >
        {{labelName}}
      </div>
      <input
          type="text"
          class="input-form__input"
          :class="{'input-form__input--padding': isCorrect || errorMsg}"
          v-model="textValue"
          @input="$emit('input', textValue)" :placeholder="!isLinear ? 'Type here' : ''"
          ref="inputForm"
          :disabled="isDisabled"
      >
      <img
          :src="require('../../assets/img/icon/ic-error.svg')"
          class="input-form__state-icon"
          v-if="errorMsg"
      >
      <img
          :src="require('../../assets/img/icon/ic-checked-green.svg')"
          class="input-form__state-icon"
          v-if="isCorrect"
      >
      <img
          :src="require('../../assets/img/icon/rounded-gray-cross.svg')"
          class="input-form__clear-icon"
          v-show="textValue"
          @click="onClear"
      >
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
    },
    isCorrect: {
      type: Boolean,
      default: false
    },
    isLinear: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      textValue: ''
    }
  },
  computed: {
    iconPath() {
      return this.isDisabled || !this.textValue ? require('../../assets/img/icon/ic-star-gray.svg') : require('../../assets/img/icon/ic-temp.svg');
    }
  },
  methods: {
    onClear() {
      this.textValue = '';
      this.$emit('onClear', this.textValue);
    },
    focusOnInput() {
      this.$refs.inputForm.focus();
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
    color: $grey;
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
    height: 32px;
    background: $white-100;
    border: 1px solid $grey-400;
    border-radius: 100px;
    padding: 0 35px 0 42px;
    color: $black-900;
    &--padding {
      padding: 0 60px 0 42px;
    }
  }
  &__state-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 36px;
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

.input-form--linear {
  position: relative;
  .input-form__label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease-in-out;
    left: 42px;
    z-index: 999;
    margin: 0;
    &-focus {
      top: -9px;
      transform: translateY(0);
      font-size: 10px;
      font-weight: 700;
      color: $black-900;
    }
    &-disabled {
      color: $grey-700;
      cursor: default;
    }
  }
  .input-form__input {
    background: transparent;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid $grey-400;
  }
}
</style>