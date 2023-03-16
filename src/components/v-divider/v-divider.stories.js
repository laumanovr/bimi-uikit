import VDivider from './v-divider';

export default {
    title: 'v-divider',
    component: VDivider
}

export const DividerLine = (args, { argTypes }) => ({
    components: { VDivider },
    props: Object.keys(argTypes),
    template: `
      <div>
        <v-divider style="margin-bottom: 30px"/>
        <v-divider is-bold/>
      </div>
    `
})
