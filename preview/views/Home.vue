<template>
  <BaseView class="home" is-root>
    <xzy-nav-bar slot="header" :title="$t('common.title')" />
    <xzy-cell-group class="cell-group-custom">
      <xzy-cell :title="$t('common.theme')" center>
        <ul class="theme">
          <li
            v-for="color in primaryColors"
            :key="color"
            :class="[
              'theme-item',
              primaryColor === color ? 'theme-item-cur' : '',
            ]"
            :style="{ backgroundColor: color }"
            @click="changeTheme(color)"
          />
        </ul>
      </xzy-cell>
      <xzy-cell :title="$t('common.dark')">
        <xzy-switch v-model="isDark" size="normal" @input="onChange" />
      </xzy-cell>
      <xzy-cell
        :title="$t('common.language')"
        :value="langValue"
        is-link
        clickable
        @click="showLangPopup"
      />
    </xzy-cell-group>
    <xzy-cell-group
      v-for="(item, index) in list()"
      :key="index"
      class="cell-group-custom"
      :title="item.title"
    >
      <xzy-cell
        v-for="({ title, to }, subIndex) in item.children"
        :key="subIndex"
        :title="title"
        :to="to"
        is-link
        center
        clickable
      />
    </xzy-cell-group>
    <Popup v-model="langVisible" :title="$t('common.languageTitle')">
      <xzy-radio-group v-model="language" @change="changeLanguage">
        <xzy-radio
          v-for="({ desc, name, label, disabled }, index) in languageList()"
          :key="index"
          :name="name"
          :label="label"
          :desc="desc"
          :disabled="disabled"
        />
      </xzy-radio-group>
    </Popup>
  </BaseView>
</template>
<script>
import { NavBar, CellGroup, Cell, Switch, Radio, RadioGroup } from "@/index.js";
import { LANGUAGE, DARK_THEME, LIGHT_THEME } from "../statics/js/enums";
import { generateCssVars, isDarkMode } from "../utils/theme";
import { setLanguage } from "../utils/i18n";
export default {
  name: "Home",
  components: {
    "xzy-nav-bar": NavBar,
    "xzy-cell-group": CellGroup,
    "xzy-cell": Cell,
    "xzy-switch": Switch,
    "xzy-radio": Radio,
    "xzy-radio-group": RadioGroup,
  },
  data() {
    return {
      isDark: isDarkMode(),
      list: () => [
        {
          title: this.$t("common.baseComponent"),
          children: [
            {
              title: this.$t("common.cellTitle"),
              to: "/cell",
            },
            {
              title: this.$t("common.iconTitle"),
              to: "/icon",
            },
            {
              title: this.$t("common.buttonTitle"),
              to: "/button",
            },
            {
              title: this.$t("common.popupTitle"),
              to: "/popup",
            },
          ],
        },
        {
          title: this.$t("common.navComponent"),
          children: [
            {
              title: this.$t("common.navTitle"),
              to: "/navBar",
            },
          ],
        },
        {
          title: this.$t("common.formComponent"),
          children: [
            {
              title: this.$t("common.switchTitle"),
              to: "/switch",
            },
            {
              title: this.$t("common.radioTitle"),
              to: "/radio",
            },
          ],
        },
      ],
      language: LANGUAGE.CHINESE,
      langVisible: false,
      langValue: this.$t("common.chinese"),
      languageList: () => [
        {
          label: this.$t("common.chinese"),
          name: LANGUAGE.CHINESE,
        },
        {
          label: this.$t("common.english"),
          name: LANGUAGE.ENGLISH,
        },
      ],
      primaryColors: [
        "#0060a6",
        "#1374bd",
        "#007edf",
        "#ff4444",
        "#ff8000",
        "#005924",
        "#30b768",
        "#00be9d",
      ],
      primaryColor: isDarkMode() ? DARK_THEME.primary : LIGHT_THEME.primary,
    };
  },
  created() {
    this.changeTheme(this.primaryColor);
  },
  methods: {
    changeTheme(color) {
      this.primaryColor = color;
      generateCssVars(this.primaryColor, this.isDark);
    },
    onChange() {
      generateCssVars(this.primaryColor, this.isDark);
    },
    showLangPopup() {
      this.langVisible = true;
    },
    hidePopup() {
      this.langVisible = false;
    },
    changeLanguage(lang) {
      this.hidePopup();
      setLanguage(lang)
        .then(() => {
          const item = this.languageList().find((item) => item.name === lang);
          this.langValue = item.label;
        })
        .catch((e) => {
          if (e instanceof Error) {
            this.$t("common.languageTip");
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.cell-group-custom {
  margin-bottom: $space5;
}

.switch {
  color: $c-text-primary;
}

.theme {
  display: flex;
  align-items: center;

  > .theme-item {
    width: 36px;
    height: 36px;
    margin-left: $space2;
    list-style-type: none;
    border-radius: 50%;

    &-cur {
      width: 46px;
      height: 46px;
    }
  }
}
</style>
