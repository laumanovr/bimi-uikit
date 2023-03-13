import MultipleDropdown from './multiple-dropdown';

export default {
    title: 'multiple-dropdown',
    component: MultipleDropdown
}

export const DropdownMultiple = (args, { argTypes }) => ({
    components: { MultipleDropdown },
    props: Object.keys(argTypes),
    data() {
        return {
            list: [{name: 'Item 1'}, {name: 'Item 2'}, {name: 'Item 3'}]
        };
    },
    template: `
      <div style="display: flex; align-items: flex-start">
        <multiple-dropdown :items="list" style="margin-right: 50px;" />
        <multiple-dropdown :items="list" is-reversed dropdown-name="Multiple dropdown reversed" />
      </div>
    `
})
