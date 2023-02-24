<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <tab-manager>
      <template #default="{ onClick, activeIndex }">
        <v-tab
          @click.native="onClick(0)"
          icon="ic-temp"
          title="lol"
          :active="activeIndex === 0"
        ></v-tab>
        <v-tab
          @click.native="onClick(1)"
          icon="ic-temp"
          title="lol"
          :active="activeIndex === 1"
        ></v-tab>
      </template>
    </tab-manager>
  </div>
</template>

<script>
import TabManager from "./components/tab-manager/tab-manager.vue";
import VTab from "./components/v-tab/v-tab.vue";

export default {
  name: "App",
  components: {
    VTab,
    TabManager,
  },
};
</script>
