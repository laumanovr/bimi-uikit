import VButton from "./v-button";

export default {
  title: "v-button",
  component: VButton,
};

export const Button = (args, { argTypes }) => ({
  components: { VButton },
  props: Object.keys(argTypes),
  template: `<div>
      <v-button icon="ic-apple" v-bind="$props" v-on="$props" />
    </div>`,
});

export const Secondary = (args, { argTypes }) => ({
  components: { VButton },
  props: Object.keys(argTypes),
  template: `<div>
      <v-button theme="secondary" v-bind="$props" v-on="$props" />
    </div>`,
});

export const Tertiary = (args, { argTypes }) => ({
  components: { VButton },
  props: Object.keys(argTypes),
  template: `<div>
      <v-button theme="tertiary" v-bind="$props" v-on="$props" />
    </div>`,
});
export const Floating = (args, { argTypes }) => ({
  components: { VButton },
  props: Object.keys(argTypes),
  template: `<div>
      <v-button theme="floating" v-bind="$props" v-on="$props" />
    </div>`,
});
