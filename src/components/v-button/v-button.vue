<template>
  <button :class="[getClasses]" :disabled="disabled" @click="onButtonClick">
    <span
      v-if="icon"
      class="button__icon"
      :class="[`button__icon_${iconPosition}`]"
      :style="getIconStyle"
    />
    <!-- @slot Текст для компонента кнопки без иконки -->
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
        "-webkit-mask": `url(${require(`@/assets/img/icon/${this.icon}.svg`)}) no-repeat 50% 50%`,
        mask: `url(${require(`@/assets/img/icon/${this.icon}.svg`)}) no-repeat 50% 50%`,
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
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 13px;
  line-height: 20px;
  border: none;
  color: #ecf2ff;
  cursor: pointer;
  outline: none;
  border: 1px solid transparent;
  border-radius: 100px;
  padding: 10px 20px;
  &_medium {
    padding: 10px 20px;
  }
  &_small {
    padding: 5px 20px;
    font-size: 12px;
  }
  &_primary {
    background: #1b212d;
    .button__icon {
      background-color: #ecf2ff;
    }
    &:hover {
      background: #c8ee44;
      color: #000000;
      transition: background-color 0.2s ease-out;
      .button__icon {
        background-color: #000;
      }
    }
    &:disabled {
      background: #1b212d;
      color: rgba(248, 250, 255, 0.4);
      .button__icon {
        background: rgba(248, 250, 255, 0.4);
      }
    }
  }
  &_secondary {
    background: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.55);
    .button__icon {
      background-color: rgba(0, 0, 0, 0.45);
    }
    &:hover {
      background: rgba(0, 0, 0, 0.05);
      color: #1b212d;
      transition: background-color 0.2s ease-out;
      .button__icon {
        background-color: #1b212d;
      }
    }
    &:disabled {
      background: rgba(0, 0, 0, 0.05);
      color: rgba(0, 0, 0, 0.25);
      .button__icon {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
  &_tertiary {
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.07);
    color: rgba(0, 0, 0, 0.55);
    .button__icon {
      background-color: rgba(0, 0, 0, 0.45);
    }
    &:hover {
      color: #1b212d;
      transition: background-color 0.2s ease-out;
      .button__icon {
        background-color: #1b212d;
      }
    }
    &:disabled {
      color: rgba(0, 0, 0, 0.25);
      .button__icon {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
  &_floating {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.07);
    color: rgba(0, 0, 0, 0.55);
    .button__icon {
      background-color: rgba(0, 0, 0, 0.45);
    }
    &:hover {
      color: #1b212d;
      transition: background-color 0.2s ease-out;
      .button__icon {
        background-color: #1b212d;
      }
    }
    &:disabled {
      color: rgba(0, 0, 0, 0.25);
      .button__icon {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
  &__icon {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    &_right {
      order: 1;
      margin: 0;
      margin-left: 5px;
    }
  }
}
</style>
