import ThemeSwitch from './theme-switch';

export default {
    title: 'theme-switch',
    component: ThemeSwitch
}

export const ThemSwitch = (args, { argTypes }) => ({
    components: { ThemeSwitch },
    props: Object.keys(argTypes),
    template: `
      <div>
        <div style="margin-bottom: 15px">
          <theme-switch />
        </div>
        <div>
          <theme-switch is-checked id="2" />
        </div>
      </div>
    `
});
