<template>
  <BaseView>
    <xzy-nav-bar
      slot="header"
      :title="$t('common.navTitle')"
      type="white"
      left-arrow
      @click-left="goBack"
    />
    <Card :title="$t('common.navbarDemo1')">
      <xzy-nav-bar
        :title="$t('common.navbarTitle1')"
        :left-text="$t('common.navbarLeftText1')"
        :right-text="$t('common.navbarRightText1')"
        left-arrow
      />
    </Card>
    <Card :title="$t('common.navbarDemo2')">
      <xzy-nav-bar>
        <div slot="title">{{ $t("common.navbarTitle2") }}</div>
        <Icon slot="left" name="close_line" :size="42" color="primary" />
        <Icon slot="right" name="search_line" :size="42" color="primary" />
      </xzy-nav-bar>
    </Card>
    <Card :title="$t('common.navbarDemo3')">
      <xzy-nav-bar
        :title="$t('common.navbarTitle1')"
        :left-text="$t('common.navbarLeftText1')"
        :right-text="$t('common.navbarRightText1')"
        left-arrow
        type="primary"
      />
    </Card>
    <Card :title="$t('common.navbarDemo4')">
      <xzy-nav-bar
        :title="$t('common.navbarTitle1')"
        :left-text="$t('common.navbarLeftText1')"
        :right-text="$t('common.navbarRightText1')"
        left-arrow
        type="white"
      />
    </Card>
  </BaseView>
</template>
<script>
import { NavBar, Icon } from "@/index.js";
export default {
  name: "NavBarDemo",
  components: { "xzy-nav-bar": NavBar, Icon },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>
<style lang="scss" scoped>
.left-custom {
  display: flex;

  align-items: center;
}
</style>
