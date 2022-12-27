<template>
  <div>
    <component :is="tag"><slot /></component>
  </div>
</template>

<script>
export default {
  name: 'VTitle',
  props: {
    tag: {
      type: String,
      default: 'h1',
      validator: function (value) {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(value) !== -1;
      },
    }
  }
}
</script>
