import SingleDropdown from './single-dropdown';

export default {
    title: 'single-dropdown',
    component: SingleDropdown
}

export const DropdownSingle = (args, { argTypes }) => ({
    components: { SingleDropdown },
    props: Object.keys(argTypes),
    data() {
        return {
            list: [
                {name: 'Item 1', iconUrl: require('../../assets/img/icon/ic-apple.svg'), id: 1},
                {name: 'Item 2', iconUrl: require('../../assets/img/icon/ic-temp.svg'), id: 2},
                {name: 'Item 3', iconUrl: require('../../assets/img/icon/ic-list.svg'), id: 3}
            ]
        };
    },
    template: `
      <div style="display: flex">
        <single-dropdown :items="list" :dropdown-name="'Single dropdown'" style="margin-right: 80px;" />
        <single-dropdown :items="list" :dropdown-name="'Single dropdown with icon'" has-icon />
      </div>
    `
});
