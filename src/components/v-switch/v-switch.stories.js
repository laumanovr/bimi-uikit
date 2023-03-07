import VSwitch from './v-switch';

export default {
    title: "v-switch",
    component: VSwitch,
};

export const Switch = (args, { argTypes }) => ({
    components: { VSwitch },
    props: Object.keys(argTypes),
    template: `
      <div>
        <v-switch />
        <v-switch is-checked is-disabled style="margin: 20px 0"/>
        <v-switch is-disabled/>
      </div>
    `
})
