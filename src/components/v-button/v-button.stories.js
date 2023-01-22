import VButton from "./v-button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "v-button",
  component: VButton,
};

export const Primary = () => ({
  components: { VButton },
  template: `<div>
      <v-button icon="star" />
      <v-button disabled icon="star" iconPosition="right" />
      <v-button theme="secondary" icon="star" iconPosition="right" />
      <v-button theme="tertiary" icon="star" iconPosition="right" />
      <v-button theme="floating" icon="star" iconPosition="right" />
    </div>`,
});
