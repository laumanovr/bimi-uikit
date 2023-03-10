<template>
  <div class="single-dropdown">
    <button class="single-dropdown__btn" @click="isOpened=!isOpened">{{dropdownName}}</button>
    <div class="single-dropdown__list" v-show="isOpened">
      <div
          class="single-dropdown__wrapper-item"
          :class="{'single-dropdown--active': item.id === selectedItem.id}"
          v-for="(item, i) in items"
          :key="i"
          @click="onSelect(item)"
      >
        <img :src="item.iconUrl" alt="image" class="single-dropdown__icon" v-if="hasIcon">
        <span class="single-dropdown__item">
          {{item.name}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'single-dropdown',
  props: {
    items: {
      type: Array,
      default: () => ([])
    },
    dropdownName: {
      type: String,
      default: 'dropdown'
    },
    hasIcon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpened: false,
      selectedItem: {}
    }
  },
  methods: {
    onSelect(item) {
      this.selectedItem = item;
      this.$emit('onSelect', item);
      this.isOpened = false;
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/_colors';
.single-dropdown {
  display: inline-block;
  min-width: 130px;
  &__btn {
    border: 1px solid;
    border-radius: 20px;
    cursor: pointer;
  }
  &__list {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    padding: 15px 10px;
    min-width: 130px; // later modify
  }
  &__wrapper-item {
    display: flex;
    align-items: center;
    padding: 5px 15px;
    margin-bottom: 11px;
    cursor: pointer;
    &:hover {
      background: $grey-300;
      border-radius: 30px;
    }
  }
  &__item {
    font-weight: 500;
    font-size: 13px;
    color: $black-900;
  }
  &__icon {
    margin-right: 12px;
    width: 16px;
    height: 16px;
  }
  &--active {
    background: #C8EE44;
    border-radius: 100px;
    color: #000;
    &:hover {
      background: #C8EE44;
      cursor: default;
    }
  }
}
</style>
