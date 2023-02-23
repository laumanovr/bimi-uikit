import VButton from "./v-button";

export default {
  title: "v-button",
  component: VButton,
};

export const Button = (args, { argTypes }) => ({
  components: { VButton },
  props: Object.keys(argTypes),
  template: `<div>
      <v-button v-bind="$props" v-on="$props" />
    </div>`,
});
