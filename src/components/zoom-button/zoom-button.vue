<template>
  <div class="zoom-button" :class="{ 'zoom-button_disabled': disabled }">
    <button
      type="button"
      class="zoom-button__button zoom-button__button_minus"
      @click="minus"
    />
    <div class="zoom-button__type" :class="`zoom-button__type_${type}`"></div>
    <div class="zoom-button__text">
      <slot>{{ text }}</slot>
    </div>
    <button
      type="button"
      class="zoom-button__button zoom-button__button_plus"
      @click="plus"
    />
  </div>
</template>

<script>
export default {
  name: "ZoomButton",
  props: {
    type: {
      default: "height",
      type: String,
      validator: function (value) {
        return ["width", "height"].indexOf(value) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
  },
  methods: {
    minus() {
      this.$emit("minus");
    },
    plus() {
      this.$emit("plus");
    },
  },
};
</script>

<style lang="scss">
.zoom-button {
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  padding: 5px 10px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 100px;
  &:hover {
    transition-duration: 0.2s;
    .zoom-button__button {
      &_minus {
        background-color: #1b212d;
      }
      &_plus {
        background-color: #1b212d;
      }
    }
    .zoom-button__type {
      &::before {
        border: 1px solid #1b212d;
      }
    }
    .zoom-button__text {
      color: #1b212d;
    }
  }
  &_disabled {
    pointer-events: none;
    .zoom-button__button {
      &_minus {
        background-color: rgba(0, 0, 0, 0.2);
      }
      &_plus {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
    .zoom-button__type {
      &::before {
        border: 1px solid rgba(0, 0, 0, 0.2);
      }
    }
    .zoom-button__text {
      color: rgba(0, 0, 0, 0.25);
    }
  }
  &__button {
    border: none;
    cursor: pointer;
    outline: none;
    height: 20px;
    width: 20px;
    &:active,
    &:focus {
      outline: none;
    }
    &_minus {
      webkit-mask: url("~@/assets/img/icon/minus.svg") no-repeat 50% 50%;
      mask: url("~@/assets/img/icon/minus.svg") no-repeat 50% 50%;
      background-color: rgba(0, 0, 0, 0.45);
    }
    &_plus {
      webkit-mask: url("~@/assets/img/icon/plus.svg") no-repeat 50% 50%;
      mask: url("~@/assets/img/icon/plus.svg") no-repeat 50% 50%;
      background-color: rgba(0, 0, 0, 0.45);
    }
  }
  &__type {
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
      content: "";
      box-sizing: border-box;
      display: block;
      width: 10px;
      height: 14px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 2px;
    }
    &_width {
      &::before {
        transform: rotate(90deg);
      }
    }
  }
  &__text {
    width: 23px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    font-size: 11px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.35);
  }
}
</style>
