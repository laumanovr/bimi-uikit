<template>
  <div class="input-form" :class="{'input-form--linear': isLinear}" @mouseenter="onHover(true)" @mouseleave="onHover(false)">
    <div class="input-form__label" :class="{'input-form__label--small': smallLabel}" v-if="!isLinear">{{labelName}}</div>
    <div class="input-form__wrapper">
      <img
          :src="isDisabled ? disabledIcon : iconPath"
          class="input-form__star-icon"
      >
      <div
          class="input-form__label"
          :class="{'input-form__label-focus': isLinear && value, 'input-form__label-disabled': isDisabled}"
          @click="focusOnInput"
          v-if="isLinear"
      >
        {{labelName}}
      </div>
      <input
          type="text"
          class="input-form__input"
          :class="{'input-form__input--padding': isCorrect || errorMsg, 'input-form__input--disabled': isDisabled}"
          v-model="textValue"
          @input="$emit('input', $event.target.value)" :placeholder="!isLinear ? 'Type here' : ''"
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
          v-show="value && !isDisabled"
          @click="onClear"
      >
    </div>
    <div class="input-form__hint" v-if="hintMsg">{{hintMsg}}</div>
    <div class="input-form__error-msg" v-if="errorMsg">{{errorMsg}}</div>
  </div>
</template>

<script>
export default {
  name: 'input-form',
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    labelName: {
      type: String,
      default: 'Label Name'
    },
    errorMsg: {
      type: String,
      default: ''
    },
    hintMsg: {
      type: String,
      default: ''
    },
    smallLabel: {
      type: Boolean,
      default: false
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
      textValue: this.value,
      isHovered: false
    }
  },
  computed: {
    iconPath() {
      return this.isHovered || this.value ? require('../../assets/img/icon/ic-temp.svg') : require('../../assets/img/icon/ic-star-gray.svg');
    },
    disabledIcon() {
      return require('../../assets/img/icon/ic-star-disabled.svg');
    }
  },
  methods: {
    onClear() {
      this.textValue = '';
      this.$emit('input', '');
    },
    focusOnInput() {
      this.$refs.inputForm.focus();
    },
    onHover(value) {
      this.isHovered = value;
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
    &--small {
      font-weight: 700;
      font-size: 11px;
    }
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
    padding: 0 35px 0 42px;
    color: $black-900;
    &--padding {
      padding: 0 60px 0 42px;
    }
    &--disabled {
      cursor: default;
      color: $grey-700;
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
  &__hint {
    font-weight: 500;
    font-size: 11px;
    color: $grey-800;
    margin: 5px 0 0 20px;
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