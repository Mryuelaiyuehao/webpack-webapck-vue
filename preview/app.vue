<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { setRootFontSize } from "./utils/rem";
import { generateCssVars, isDarkMode } from "./utils/theme";
import { DARK_THEME, LIGHT_THEME } from "./statics/js/enums";
export default {
  name: "App",
  created() {
    setRootFontSize();
    generateCssVars(
      isDarkMode() ? DARK_THEME.primary : LIGHT_THEME.primary,
      isDarkMode()
    );
  },
};
</script>
<style scoped lang="scss">
#app {
  height: 100%;
}
</style>
