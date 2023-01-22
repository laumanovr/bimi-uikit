import VButton from "./zoom-button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "zoom-button",
  component: VButton,
};

export const Primary = () => ({
  components: { VButton },
  template: '<zoom-button text="text" type="width" />',
});
