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
        <v-switch id="1"/>
        <v-switch id="2" is-checked is-disabled/>
        <v-switch id="3" is-disabled/>
      </div>
    `
})
