<template>
  <button :class="getClasses" :disabled="disabled" @click="onButtonClick">
    <span
      v-if="icon"
      class="button__icon"
      :class="[`button__icon_${iconPosition}`]"
      :style="getIconStyle"
    />
    <slot>Текст на кнопке</slot>
  </button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    theme: {
      default: "primary",
      type: String,
      validator: function (value) {
        return (
          ["primary", "secondary", "tertiary", "floating"].indexOf(value) !== -1
        );
      },
    },
    size: {
      default: "medium",
      type: String,
      validator: function (value) {
        return ["medium", "small"].indexOf(value) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      default: false,
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
  computed: {
    getClasses() {
      return [`button_${this.theme}`, `button_${this.size}`, "button"];
    },
    getIconStyle() {
      return {
        "-webkit-mask": `url(${require(`../../assets/img/icon/${this.icon}.svg`)}) no-repeat 50% 50%`,
        mask: `url(${require(`../../assets/img/icon/${this.icon}.svg`)}) no-repeat 50% 50%`,
      };
    },
  },
  methods: {
    onButtonClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss">
@import '../../styles/_colors';

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.867rem;
  line-height: 1.333rem;
  border: none;
  color: $blue-200;
  cursor: pointer;
  outline: none;
  border: 0.067rem solid transparent;
  border-radius: 6.667rem;
  padding: 0.667rem 1.333rem;
  &_medium {
    padding: 0.667rem 1.333rem;
  }
  &_small {
    padding: 0.333rem 1.333rem;
    font-size: 0.8rem;
  }
  &_primary {
    background: $black-900;
    .button__icon {
      background-color: $blue-200;
    }
    &:hover {
      background: $lightGreen;
      color: $black;
      transition: background-color 0.2s ease-out;
      .button__icon {
        background-color: $black;
      }
    }
    &:disabled {
      background: $black-900;
      color: $blue-100;
      .button__icon {
        background: $blue-100;
      }
    }
  }
  &_secondary {
    background: $grey-300;
    color: $grey;
    .button__icon {
      background-color: $grey-900;
    }
    &:hover {
      background: $grey-300;
      color: $black-900;
      transition: background-color 0.2s ease-out;
      .button__icon {
        background-color: $black-900;
      }
    }
    &:disabled {
      background: $grey-300;
      color: $grey-700;
      .button__icon {
        background-color: $grey-500;
      }
    }
  }
  &_tertiary {
    background: transparent;
    border: 0.067rem solid $grey-400;
    color: $grey;
    .button__icon {
      background-color: $grey-900;
    }
    &:hover {
      color: $black-900;
      transition: background-color 0.2s ease-out;
      .button__icon {
        background-color: $black-900;
      }
    }
    &:disabled {
      color: $grey-700;
      .button__icon {
        background-color: $grey-500;
      }
    }
  }
  &_floating {
    background: $white;
    border: 0.067rem solid $grey-400;
    color: $grey;
    .button__icon {
      background-color: $grey-900;
    }
    &:hover {
      color: $black-900;
      transition: background-color 0.2s ease-out;
      .button__icon {
        background-color: $black-900;
      }
    }
    &:disabled {
      color: $grey-700;
      .button__icon {
        background-color: $grey-500;
      }
    }
  }
  &__icon {
    position: relative;
    display: inline-block;
    width: 1.333rem;
    height: 1.333rem;
    margin-right: 0.333rem;
    &_right {
      order: 1;
      margin: 0;
      margin-left: 0.333rem;
    }
  }
}
</style>
