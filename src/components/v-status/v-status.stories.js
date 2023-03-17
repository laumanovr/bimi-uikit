import VStatus from "./v-status";

export default {
  title: "v-status",
  component: VStatus,
};

const Template = (args, { argTypes }) => ({
  components: { VStatus },
  props: Object.keys(argTypes),
  template: `<div>
      <v-status v-bind="$props" v-on="$props"></v-status>
    </div>`,
});

export const Status = Template.bind({});

Status.args = {
  variant: "prepare",
};
