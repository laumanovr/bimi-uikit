import * as components from './components';

const componentsList = components?.default || [];
const UIComponents = {
  install(Vue) {
    Object.entries(componentsList).forEach(([name, component]) => {
      Vue.component(name, component);
    });
  }
}

export default UIComponents;
