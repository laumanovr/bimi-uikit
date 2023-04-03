import VMultiFilter from "./v-multi-filter.vue";

export default {
    title: "v-multi-filter",
    component: VMultiFilter,
};

const Template = (args, { argTypes }) => ({
    components: { VMultiFilter },
    props: Object.keys(argTypes),
    template: `<div>
      <v-multi-filter v-bind="$props"></v-multi-filter>
    </div>`,
});

export const MultiFilter = Template.bind({});

