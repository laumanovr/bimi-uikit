import VTitle from './v-title';

export default {
  title: 'Typography/Title',
  component: VTitle
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VTitle },
  template: '<v-title v-bind="$props">UI-kit title</v-title>',
});

export const H1 = Template.bind({});
H1.args = {
  tag: 'h1',
};

export const H2 = Template.bind();
H2.args = {
  tag: 'h2',
};

export const H3 = Template.bind();
H3.args = {
  tag: 'h3',
};

export const H4 = Template.bind();
H4.args = {
  tag: 'h4',
};

export const H5 = Template.bind();
H5.args = {
  tag: 'h5',
};

export const H6 = Template.bind();
H6.args = {
  tag: 'h6',
};
