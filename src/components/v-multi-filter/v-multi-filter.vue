<template>
<div class="multi-filter" ref="multi-filter" v-closable="{
  handler: 'closeFilter',
  exclude: ['multi-filter', 'filter-fields', 'filter-items']
}">
  <div class="multi-filter__input">
    <input type="text" placeholder="filters" @click="openFilter">
  </div>
  <div class="multi-filter__inner" :class="{'show': showFilterInner}">
    <div class="filter__fields" v-show="step === 1" ref="filter-fields">
      <div class="action">
        <span class="p">Filters</span>
        <i @click.prevent="showFilterInner = false">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.231232 1.34772C-0.0770772 1.03941 -0.0770772 0.53954 0.231232 0.231232C0.53954 -0.0770772 1.03941 -0.0770772 1.34772 0.231232L5 3.88352L8.65228 0.231232C8.96059 -0.0770772 9.46046 -0.0770772 9.76877 0.231232C10.0771 0.53954 10.0771 1.03941 9.76877 1.34772L6.11648 5L9.76877 8.65228C10.0771 8.96059 10.0771 9.46046 9.76877 9.76877C9.46046 10.0771 8.96059 10.0771 8.65228 9.76877L5 6.11648L1.34772 9.76877C1.03941 10.0771 0.53954 10.0771 0.231232 9.76877C-0.0770772 9.46046 -0.0770772 8.96059 0.231232 8.65228L3.88352 5L0.231232 1.34772Z" fill="black" fill-opacity="0.45"/>
          </svg>
        </i>
      </div>
      <div class="filter">
        <div class="filter__input">
          <i>
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 5.5C9.5 7.70914 7.70914 9.5 5.5 9.5C3.29086 9.5 1.5 7.70914 1.5 5.5C1.5 3.29086 3.29086 1.5 5.5 1.5C7.70914 1.5 9.5 3.29086 9.5 5.5ZM8.28962 10.2411C7.47176 10.7233 6.51819 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0C8.53757 0 11 2.46243 11 5.5C11 7.00927 10.3921 8.37655 9.40774 9.37034C9.45115 9.39851 9.49227 9.43161 9.53033 9.46967L13.0303 12.9697C13.3232 13.2626 13.3232 13.7374 13.0303 14.0303C12.7374 14.3232 12.2626 14.3232 11.9697 14.0303L8.46967 10.5303C8.38542 10.4461 8.3254 10.3468 8.28962 10.2411Z" fill="black" fill-opacity="0.3"/>
            </svg>
          </i>
          <input type="text" placeholder="Search" class="input-base" v-model="search.field">
        </div>
      </div>
      <div class="items">
        <div class="items__field" @click.prevent="setFilterKey(2, field)" v-for="(field, idx) in getFields" :key="idx">
          <p class="p">{{ field.label }}</p>
          <div class="field__action">
            <span>{{ counter[field.key] ? counter[field.key] : '0' }}</span>
            <i>
              <img :src="require('../../assets/img/icon/ic-arrow-small-right.svg')" alt="">
            </i>
          </div>
        </div>
      </div>
    </div>
    <div class="filter__items" v-show="step === 2" ref="filter-items">
      <div class="action">
        <div class="action__item">
          <i @click.prevent="setFilterKey(1, null)">
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.70709 1.70711C8.09761 1.31658 8.09761 0.683417 7.70709 0.292893C7.31656 -0.0976311 6.6834 -0.0976311 6.29288 0.292893L0.434297 6.15147C-0.0343326 6.6201 -0.0343326 7.3799 0.434297 7.84853L6.29288 13.7071C6.6834 14.0976 7.31656 14.0976 7.70709 13.7071C8.09761 13.3166 8.09761 12.6834 7.70709 12.2929L3.4142 8H15C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6H3.4142L7.70709 1.70711Z" fill="black" fill-opacity="0.45"/>
            </svg>
          </i>
          <span>{{ getChosenName }}</span>
        </div>
        <i @click.prevent="showFilterInner = false">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.231232 1.34772C-0.0770772 1.03941 -0.0770772 0.53954 0.231232 0.231232C0.53954 -0.0770772 1.03941 -0.0770772 1.34772 0.231232L5 3.88352L8.65228 0.231232C8.96059 -0.0770772 9.46046 -0.0770772 9.76877 0.231232C10.0771 0.53954 10.0771 1.03941 9.76877 1.34772L6.11648 5L9.76877 8.65228C10.0771 8.96059 10.0771 9.46046 9.76877 9.76877C9.46046 10.0771 8.96059 10.0771 8.65228 9.76877L5 6.11648L1.34772 9.76877C1.03941 10.0771 0.53954 10.0771 0.231232 9.76877C-0.0770772 9.46046 -0.0770772 8.96059 0.231232 8.65228L3.88352 5L0.231232 1.34772Z" fill="black" fill-opacity="0.45"/>
          </svg>
        </i>
      </div>
      <div class="filter">
        <div class="filter__input">
          <i>
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 5.5C9.5 7.70914 7.70914 9.5 5.5 9.5C3.29086 9.5 1.5 7.70914 1.5 5.5C1.5 3.29086 3.29086 1.5 5.5 1.5C7.70914 1.5 9.5 3.29086 9.5 5.5ZM8.28962 10.2411C7.47176 10.7233 6.51819 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0C8.53757 0 11 2.46243 11 5.5C11 7.00927 10.3921 8.37655 9.40774 9.37034C9.45115 9.39851 9.49227 9.43161 9.53033 9.46967L13.0303 12.9697C13.3232 13.2626 13.3232 13.7374 13.0303 14.0303C12.7374 14.3232 12.2626 14.3232 11.9697 14.0303L8.46967 10.5303C8.38542 10.4461 8.3254 10.3468 8.28962 10.2411Z" fill="black" fill-opacity="0.3"/>
            </svg>
          </i>
          <input type="text" placeholder="Search" class="input-base" v-model="search.item">
        </div>
      </div>
      <div class="items">
        <label class="checkbox-container" v-for="(item, idx) in getItems" :key="idx">
          <span class="checkbox-container__label">{{ item.title }}</span>
          <input type="checkbox" v-model="item.checked" @change="setCount()">
          <span class="checkbox-container__checkmark"></span>
        </label>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import example from "./example";
import closeOutsideDirective from "../../plugins/directives";

export default {
  name: "v-multi-filter",
  props: {
    fields: {
      type: Array,
      default: () => example.fields
    },
    items: {
      type: Object,
      default: () => example.items
    }
  },
  data() {
    return {
      step: 1,
      showFilterInner: false,
      chosenKey: null,
      localItems: this.constructDataFilter(this.items),
      search: {
        field: '',
        item: ''
      },
      counter: {},
      closeOutsideDirective
    }
  },
  computed: {
    getItems() {
      if (this.localItems[this.chosenKey?.key]) {
        return this.localItems[this.chosenKey.key].filter(item => item.title.toLowerCase().includes(this.search.item.toLowerCase()))
      }
      return []
    },
    getFields() {
      return this.fields.filter(item => item.label.toLowerCase().includes(this.search.field.toLowerCase()))
    },
    getChosenName() {
      return this.chosenKey ? this.chosenKey.label : 'Not found'
    },
  },
  methods: {
    constructDataFilter(items) {
      const result = {}
      if (typeof items === 'object') {
        Object.keys(items).forEach(el => {
          result[el] = items[el].map(chEl => {
            return {
              ...chEl,
              checked: false
            }
          })
        })
      }

      return result
    },
    constructDataForEmit(data) {
      const result = {}
      Object.keys(data).forEach(key => {
        if (data[key].some(e => e.checked)) {
          result[key] = data[key].filter(el => el.checked)
        }
      })

      return result
    },
    closeFilter() {
      this.showFilterInner = false
    },
    openFilter() {
      this.showFilterInner = true
    },
    setFilterKey(step, field) {
      this.chosenKey = field ?? null
      this.step = step
    },
    setCount() {
      this.counter[this.chosenKey?.key] = this.getItems.filter(el => el.checked).length
      this.$emit('change', this.constructDataForEmit(this.localItems))
    }
  },
}
</script>

<style scoped>

</style>
