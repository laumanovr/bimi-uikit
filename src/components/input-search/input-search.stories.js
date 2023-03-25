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
        <input-search @onType="onTyping" />
    `
})