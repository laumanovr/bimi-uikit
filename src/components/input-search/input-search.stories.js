import InputSearch from './input-search';

export default {
    title: 'input-search',
    component: InputSearch
}

export const SearchInput = (args, { argTypes }) => ({
    components: { InputSearch },
    props: Object.keys(argTypes),
    data() {
      return {
          parentValue: '',
          disabledValue: 'Disabled'
      }
    },
    template: `
      <div style="margin-top: 30px;">
        <input-search v-model="parentValue" style="margin-bottom: 30px;" />
        <input-search is-disabled v-model="disabledValue" />
      </div>
    `
})