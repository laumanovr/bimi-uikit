import LabelColor from "./label-color";

export default {
  title: "label-color",
  component: LabelColor,
};

const Template = (args, { argTypes }) => ({
  components: { LabelColor },
  props: Object.keys(argTypes),
  template: `<div>
      <label-color v-bind="$props" v-on="$props"></label-color>
    </div>`,
});

export const Label = Template.bind({});

Label.args = {
  title: "Label",
  color: "green",
  icon: "",
};
