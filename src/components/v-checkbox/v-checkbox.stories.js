import VCheckbox from "./v-checkbox";

export default {
  title: "v-checkbox",
  component: VCheckbox,
};

const Template = (args, { argTypes }) => ({
  components: { VCheckbox },
  props: Object.keys(argTypes),
  template: `<v-checkbox v-bind="$props" v-on="$props" />`,
});

export const Checkbox = Template.bind({});

Checkbox.args = {
  name: "",
  value: "",
  selected: true,
  checked: false,
  disabled: false,
  change: () => {
    console.log("change");
  },
};
