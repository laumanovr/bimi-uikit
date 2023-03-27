import InputSearch from './input-search';

export default {
    title: 'input-search',
    component: InputSearch
}

export const SearchInput = (args, { argTypes }) => ({
    components: { InputSearch },
    props: Object.keys(argTypes),
    methods: {
        onTyping(text) {
            console.log(text);
        }
    },
    template: `
      <div style="margin-top: 30px;">
        <input-search @onType="onTyping" />
      </div>
    `
})