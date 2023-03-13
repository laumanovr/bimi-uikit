<template>
  <div class="multiple-dropdown" :class="{'multiple-dropdown__reverse': isReversed}">
    <button class="multiple-dropdown__btn" @click="isOpened = !isOpened">{{dropdownName}}</button>
    <div class="multiple-dropdown__list" v-show="isOpened">
      <label class="multiple-dropdown__container" v-for="(item, i) in items" :key="i">
        <input type="checkbox" class="multiple-dropdown__input" v-model="item.checked">
        <span class="multiple-dropdown__checkmark"/>
        <span class="multiple-dropdown__item">{{item.name}}</span>
      </label>
    </div>
  </div>
</template>

<script>
import OutsideClickMixin from '../../mixins/outside-click';
export default {
  name: 'multiple-dropdown',
  mixins: [OutsideClickMixin],
  props: {
    items: {
      type: Array,
      default: () => ([])
    },
    dropdownName: {
      type: String,
      default: 'Multiple dropdown'
    },
    isReversed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpened: false
    }
  },
  watch: {
    isOpened(isOpen) {
      if (!isOpen) {
        const selectedItems = this.items.filter((item) => item.checked);
        this.$emit('onBlur', selectedItems);
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/_colors';
.multiple-dropdown {
  display: inline-block;
  min-width: 130px;
  &__btn {
    border: 1px solid;
    border-radius: 20px;
    cursor: pointer;
    background: $white;
  }
  &__list {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    padding: 15px 25px;
    min-width: 130px;
  }
  &__container {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 18px;
  }
  &__checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: $white;
    border-radius: 50%;
    border: 1px solid $grey-400;
    &:after {
      content: "";
      position: absolute;
      display: none;
      top: 0;
      left: 4px;
      width: 5px;
      height: 10px;
      border: solid $white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
  &__input {
    display: none;
    &:checked ~ .multiple-dropdown__checkmark {
      background-color: $black;
      &:after {
        display: block;
      }
    }
  }
  &__item {
    color: $black-900;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    margin-left: 12px;
  }
  &__reverse {
    .multiple-dropdown__container {
      flex-direction: row-reverse;
      justify-content: space-between;
    }
    .multiple-dropdown__item {
      margin: 0 35px 0 0;
    }
  }
}
</style>
