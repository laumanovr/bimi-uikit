export default {
  title: "v-scroll",
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<div class="scroll" style="height: 200px; width: 200px;">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt quos quo earum! Repellendus incidunt ex esse, soluta eligendi vel officiis temporibus dolores aperiam, enim ab mollitia consequuntur aliquam reprehenderit?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt quos quo earum! Repellendus incidunt ex esse, soluta eligendi vel officiis temporibus dolores aperiam, enim ab mollitia consequuntur aliquam reprehenderit?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt quos quo earum! Repellendus incidunt ex esse, soluta eligendi vel officiis temporibus dolores aperiam, enim ab mollitia consequuntur aliquam reprehenderit?
  </div>`,
});

export const Primary = Template.bind({});
