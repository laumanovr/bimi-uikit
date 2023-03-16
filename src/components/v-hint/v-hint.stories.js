import VHint from "./v-hint";

export default {
  title: "v-hint",
  component: VHint,
};

const Template = (args, { argTypes }) => ({
  components: { VHint },
  props: Object.keys(argTypes),
  template: `<div style="padding: 40px;">
      <v-hint v-bind="$props" v-on="$props">
        <template #handler>Наведи</template>
        <template #content>File not uploaded </template>
      </v-hint>
    </div>`,
});

export const Hint = Template.bind({});

Hint.args = {
  title: "File not uploaded",
  placement: "bottom",
  handler: "",
  content: "",
};
