import VTab from "./v-tab";
import TabManager from "../tab-manager/tab-manager.vue";

export default {
  title: "v-tab",
  component: VTab,
};

export const Button = (args, { argTypes }) => ({
  components: { VTab, TabManager },
  props: Object.keys(argTypes),
  template: `<div>
      <tab-manager>
        <template #default="{ onClick, activeIndex }">
          <v-tab
            @click.native="onClick(0)"
            icon="ic-temp"
            title="one"
            :active="activeIndex === 0"
            style="margin-bottom: 10px;"
          ></v-tab>
          <v-tab
            @click.native="onClick(1)"
            icon="ic-temp"
            title="two"
            :active="activeIndex === 1"
          ></v-tab>
        </template>
      </tab-manager>
    </div>`,
});
