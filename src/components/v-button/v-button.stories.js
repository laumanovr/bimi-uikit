import VButton from './v-button';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'v-button',
    component: VButton,
  };

  export const Primary = () => ({
    components: { VButton },
    template: '<v-button primary label="Button" />',
  });