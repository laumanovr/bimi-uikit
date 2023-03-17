import VTable from "./v-table.vue";

export default {
    title: "v-table",
    component: VTable,
};

const Template = (args, { argTypes }) => ({
    components: { VTable },
    props: Object.keys(argTypes),
    template: `<div>
    <v-table v-bind="$props" />
    </div>`,
});

export const Table = Template.bind({});
