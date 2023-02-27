import VLabel from "./v-label";

export default {
  title: "v-label",
  component: VLabel,
};

const Template = (args, { argTypes }) => ({
  components: { VLabel },
  props: Object.keys(argTypes),
  template: `<div>
      <v-label v-bind="$props" v-on="$props"></v-label>
    </div>`,
});

export const Label = Template.bind({});

Label.args = {
  title: "Label",
  size: "small",
  sticky: false,
  default: "",
};
