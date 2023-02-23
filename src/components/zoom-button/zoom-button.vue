<template>
  <div class="zoom-button" :class="{ 'zoom-button_disabled': disabled }">
    <button
      type="button"
      class="zoom-button__button zoom-button__button_minus"
      @click="minus"
    />
    <div
      @click="changeType"
      class="zoom-button__type"
      :class="`zoom-button__type_${typeData}`"
    ></div>
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
  data() {
    return {
      typeData: this.type,
    };
  },
  methods: {
    minus() {
      this.$emit("minus", this.typeData);
    },
    plus() {
      this.$emit("plus", this.typeData);
    },
    changeType() {
      this.typeData = this.typeData === "height" ? "width" : "height";
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
  gap: 0.2rem;
  padding: 0.333rem 0.667rem;
  border: 0.067rem solid $grey-400;
  border-radius: 6.667rem;
  &:hover {
    transition-duration: 0.2s;
    .zoom-button__button {
      &_minus {
        background-color: $black-900;
      }
      &_plus {
        background-color: $black-900;
      }
    }
    .zoom-button__type {
      &::before {
        border: 0.067rem solid $black-900;
      }
    }
    .zoom-button__text {
      color: $black-900;
    }
  }
  &_disabled {
    pointer-events: none;
    .zoom-button__button {
      &_minus {
        background-color: $grey-500;
      }
      &_plus {
        background-color: $grey-500;
      }
    }
    .zoom-button__type {
      &::before {
        border: 0.067rem solid $grey-500;
      }
    }
    .zoom-button__text {
      color: $grey-700;
    }
  }
  &__button {
    border: none;
    cursor: pointer;
    outline: none;
    height: 1.333rem;
    width: 1.333rem;
    &:active,
    &:focus {
      outline: none;
    }
    &_minus {
      -webkit-mask: url("~@/assets/img/icon/ic-minus.svg") no-repeat 50% 50%;
      mask: url("~@/assets/img/icon/minus.svg") no-repeat 50% 50%;
      background-color: $grey-900;
    }
    &_plus {
      -webkit-mask: url("~@/assets/img/icon/ic-plus.svg") no-repeat 50% 50%;
      mask: url("~@/assets/img/icon/plus.svg") no-repeat 50% 50%;
      background-color: $grey-900;
    }
  }
  &__type {
    height: 1.333rem;
    width: 1.333rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &::before {
      content: "";
      box-sizing: border-box;
      display: block;
      width: 0.667rem;
      height: 0.933rem;
      border: 0.067rem solid $grey-600;
      border-radius: 0.133rem;
    }
    &_width {
      &::before {
        transform: rotate(90deg);
      }
    }
  }
  &__text {
    width: 1.533rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    font-size: 0.733rem;
    line-height: 1.333rem;
    color: $grey-800;
  }
}
</style>
