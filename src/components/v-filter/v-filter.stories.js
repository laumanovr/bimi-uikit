import VFilter from "./v-filter";

export default {
  title: "v-filter",
  component: VFilter,
};

export const Filter = (args, { argTypes }) => ({
  components: { VFilter },
  props: Object.keys(argTypes),
  data() {
    return {
      model: "one",
    };
  },
  template: `<div>
      <v-filter
        title="All"
        icon="ic-temp"
        v-model="model"
        type="one"
        style="margin-bottom: 10px;"
      ></v-filter>
      <v-filter
        title="All"
        icon="ic-temp"
        v-model="model"
        type="two"
      ></v-filter>
    </div>`,
});
