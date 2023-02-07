import vSelect from "./v-select";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "v-select",
  component: vSelect,
};

export const Primary = () => ({
  components: { vSelect },
  template: "<v-select selected />",
});
