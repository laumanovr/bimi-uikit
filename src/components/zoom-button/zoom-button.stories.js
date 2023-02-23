import VButton from "./zoom-button";

export default {
  title: "zoom-button",
  component: VButton,
};

export const Primary = (args, { argTypes }) => ({
  components: { VButton },
  props: Object.keys(argTypes),
  template: '<zoom-button v-bind="$props" v-on="$props" />',
});
