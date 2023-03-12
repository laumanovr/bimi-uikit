export default {
  title: "Icons",
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  computed: {
    iconColor() {
      return `background-color: ${this.color};`;
    },
  },
  methods: {
    iconClass(icon) {
      return `icon-${icon}`;
    },
  },
  template: `
  <div>
    <div v-for="icon in icons" :key="icon" :class="iconClass(icon)" style="width: 20px; height: 20px; margin: 10px;" :style="iconColor"></div>
  </div>`,
});

export const Icons = Template.bind({});

Icons.args = {
  color: "black",
  icons: [
    "ic-arrow-medium-down",
    "ic-arrow-medium-left",
    "ic-arrow-medium-right",
    "ic-arrow-medium-up",
    "ic-arrow-nav-back",
    "ic-arrow-nav-forward",
    "ic-arrow-small-down",
    "ic-arrow-small-left",
    "ic-arrow-small-right",
    "ic-arrow-small-up",
    "ic-download",
    "ic-clear",
    "ic-cross-medium",
    "ic-cross-small",
    "ic-drag",
    "ic-fit-on-screen",
    "ic-icons-list",
    "ic-keywords",
    "ic-list",
    "ic-minus",
    "ic-plus",
    "ic-sort-az",
    "ic-sort-za",
    "ic-apple",
    "ic-desktop",
    "ic-google-disk",
    "ic-google-play",
    "ic-checkmark",
    "ic-color",
    "ic-error",
    "ic-lock-small",
    "ic-notify",
    "ic-add-chart",
    "ic-back-time",
    "ic-calendar",
    "ic-crown",
    "ic-delete",
    "ic-earth",
    "ic-eye-off",
    "ic-eye",
    "ic-img-placeholder",
    "ic-info",
    "ic-lock",
    "ic-log-out",
    "ic-more-h",
    "ic-more",
    "ic-no-icon",
    "ic-search",
    "ic-setting-small",
    "ic-temp",
    "ic-user",
  ],
};
