<template>
  <table class="table">
    <thead>
    <tr>
      <th v-for="(field, idx) in fields" :key="idx">
        <template>
          <slot :name="`head(${field.key})`" :item="field">
            {{ field.label }}
          </slot>
          <i v-if="field.sorted">
            <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.57576 0.375733C0.810075 0.141418 1.18997 0.141418 1.42429 0.375733L4.00002 2.95147L6.57576 0.375733C6.81007 0.141418 7.18997 0.141418 7.42429 0.375733C7.6586 0.610047 7.6586 0.989946 7.42429 1.22426L4.56571 4.08284C4.25329 4.39526 3.74676 4.39526 3.43434 4.08284L0.57576 1.22426C0.341446 0.989946 0.341446 0.610047 0.57576 0.375733Z" fill="black" fill-opacity="0.45"/>
            </svg>
          </i>
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
