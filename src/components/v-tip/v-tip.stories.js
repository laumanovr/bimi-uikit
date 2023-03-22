import VTip from "./v-tip";

export default {
  title: "v-tip",
  component: VTip,
};

const Template = (args, { argTypes }) => ({
  components: { VTip },
  props: Object.keys(argTypes),
  template: `<div style="padding: 40px;">
      <v-tip v-bind="$props" v-on="$props">
        <template #handler>Нажми</template>
        <template #content>To Log out press this icon </template>
      </v-tip>
    </div>`,
});

export const Tip = Template.bind({});

Tip.args = {
  title: "To Log out press this icon",
  placement: "bottom",
  ok: () => {
    console.log("ok");
  },
  handler: "",
  content: "",
};
