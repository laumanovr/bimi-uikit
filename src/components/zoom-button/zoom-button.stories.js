import ZoomButton from "./zoom-button";

export default {
  title: "zoom-button",
  component: ZoomButton,
};

const Template = (args, { argTypes }) => ({
  components: { ZoomButton },
  props: Object.keys(argTypes),
  template: `<zoom-button v-bind="$props" v-on="$props">Zoom</zoom-button>`,
});

export const Primary = Template.bind({});

Primary.args = {
  type: 'width',
  disabled: false,
  plus: () => { console.log('plus'); },
  minus: () => { console.log('minus'); },
  default: ''
};
