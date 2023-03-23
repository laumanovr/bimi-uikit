import VNotification from "./v-notification";

export default {
  title: "v-notification",
  component: VNotification,
};

const Template = (args, { argTypes }) => ({
  components: { VNotification },
  props: Object.keys(argTypes),
  template: `<div>
      <v-notification v-bind="$props" v-on="$props"></v-notification>
    </div>`,
});

export const Notification = Template.bind({});

Notification.args = {
  variant: "red",
  text: "5",
  default: "",
};
