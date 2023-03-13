import VTip from "./v-tip";

export default {
  title: "v-tip",
  component: VTip,
};

const Template = (args, { argTypes }) => ({
  components: { VTip },
  props: Object.keys(argTypes),
  template: `<div style="padding: 40px;">
      <button id="tip">tip</button>
      <v-tip v-bind="$props" v-on="$props"></v-tip>
    </div>`,
});

export const Tip = Template.bind({});

Tip.args = {
  title: "To Log out press this icon",
  target: "tip",
  placement: "right",
  ok: () => {
    console.log("plus");
  },
  default: "",
};
