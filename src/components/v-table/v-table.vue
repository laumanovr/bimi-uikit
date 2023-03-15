<template>
  <table class="table">
    <thead>
    <tr>
      <th v-for="(field, idx) in fields" :key="idx">
        <template>
          <slot :name="`head(${field.key})`" :item="field">
            <div class="th">
              {{ field.label }}
              <i v-if="field.sorted">
                <img :src="require('../../assets/img/icon/ic-arrow-small-down.svg')" alt="">
              </i>
            </div>
          </slot>
        </template>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, idx) in items" :key="idx">
      <td v-for="field in fields" :key="field.key">
        <div>
          <slot :name="`cell(${field.key})`" :item="item">
            {{ item[field.key] }}
          </slot>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import example from "./example";
export default {
  name: "v-table",
  props: {
    fields: {
      type: Array,
      default: () => example.fields
    },
    items: {
      type: Array,
      default: () => example.items
    }
  }
}
</script>

<style scoped>

</style>
