<template>
  <BaseView>
    <xzy-nav-bar
      slot="header"
      :title="$t('common.switchTitle')"
      type="white"
      left-arrow
      @click-left="goBack"
    />
    <Card :title="$t('common.switchDemo1')">
      <xzy-switch v-model="checked" />
    </Card>
    <Card :title="$t('common.switchDemo2')">
      <xzy-switch v-model="checked" disabled />
    </Card>
    <Card :title="$t('common.switchDemo3')">
      <div class="switch-wrapper">
        <xzy-switch
          v-for="size in switchList()"
          :key="size"
          v-model="checked"
          :size="size"
        />
      </div>
    </Card>
    <Card :title="$t('common.switchDemo4')">
      <xzy-switch
        v-model="checked"
        active-color="warning"
        inactive-color="danger"
      />
    </Card>
  </BaseView>
</template>
<script>
import { Switch, NavBar } from "@/index.js";
import { SWITCH_SIZE } from "@/components/switch/enums.js";
export default {
  name: "SwitchDemo",
  components: { "xzy-switch": Switch, "xzy-nav-bar": NavBar },
  props: {},
  data() {
    return {
      checked: true,
      switchList: () => [
        SWITCH_SIZE.SMALL,
        SWITCH_SIZE.NORMAL,
        SWITCH_SIZE.LARGE,
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>
<style lang="scss" scoped>
.switch-wrapper {
  display: flex;
  gap: $space4;
  align-items: center;
}
</style>
