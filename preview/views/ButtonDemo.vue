<template>
  <BaseView>
    <xzy-nav-bar
      slot="header"
      :title="$t('common.buttonTitle')"
      type="white"
      left-arrow
      @click-left="goBack"
    />
    <Card :title="$t('common.buttonDemo1')">
      <div class="button-wrapper">
        <xzy-button
          v-for="{ text, type } in buttonList1"
          :key="type"
          :text="text"
          :type="type"
        />
      </div>
    </Card>
    <Card :title="$t('common.buttonDemo2')">
      <div class="button-wrapper">
        <xzy-button
          v-for="({ text, type, round }, index) in buttonList2"
          :key="index"
          :text="text"
          :type="type"
          :round="round"
        />
      </div>
    </Card>
    <Card :title="$t('common.buttonDemo3')">
      <div class="button-wrapper">
        <xzy-button
          v-for="({ text, type, size }, index) in buttonList3"
          :key="index"
          :text="text"
          :type="type"
          :size="size"
        />
      </div>
    </Card>
    <Card :title="$t('common.buttonDemo4')">
      <div class="button-wrapper">
        <xzy-button
          v-for="({ text, type }, index) in buttonList1"
          :key="index"
          :text="text"
          :type="type"
          disabled
        />
      </div>
    </Card>
    <Card :title="$t('common.buttonDemo5')">
      <div class="button-wrapper">
        <xzy-button
          v-for="({ text, type }, index) in buttonList1"
          :key="index"
          :text="text"
          :type="type"
          block
        />
      </div>
    </Card>
    <Card :title="$t('common.buttonDemo6')">
      <div class="button-wrapper">
        <xzy-button
          v-for="({ text, type, icon, iconPosition }, index) in buttonList4"
          :key="index"
          :text="text"
          :type="type"
          :icon="icon"
          :icon-position="iconPosition"
        />
      </div>
    </Card>
  </BaseView>
</template>
<script>
import { NavBar, Button } from "@/index.js";
import { BUTTON_TYPE } from "@/components/button/enums.js";
export default {
  name: "NavBarDemo",
  components: { "xzy-button": Button, "xzy-nav-bar": NavBar },
  data() {
    return {
      buttonList1: [
        {
          type: BUTTON_TYPE.DEFAULT,
          text: this.$t("common.buttonDemo1Text1"),
        },
        {
          type: BUTTON_TYPE.PRIMARY,
          text: this.$t("common.buttonDemo1Text2"),
        },
        {
          type: BUTTON_TYPE.INFO,
          text: this.$t("common.buttonDemo1Text3"),
        },
        {
          type: BUTTON_TYPE.TEXT,
          text: this.$t("common.buttonDemo1Text4"),
        },
        {
          type: BUTTON_TYPE.LINK,
          text: this.$t("common.buttonDemo1Text5"),
        },
      ],
      buttonList2: [
        {
          type: BUTTON_TYPE.PRIMARY,
          text: this.$t("common.buttonDemo2Text1"),
          round: false,
        },
        {
          type: BUTTON_TYPE.PRIMARY,
          text: this.$t("common.buttonDemo2Text2"),
          round: true,
        },
      ],
      buttonList3: [
        {
          type: BUTTON_TYPE.PRIMARY,
          text: this.$t("common.buttonDemo3Text1"),
          size: "large",
        },
        {
          type: BUTTON_TYPE.PRIMARY,
          text: this.$t("common.buttonDemo3Text2"),
          size: "normal",
        },
        {
          type: BUTTON_TYPE.PRIMARY,
          text: this.$t("common.buttonDemo3Text3"),
          size: "small",
        },
      ],
      buttonList4: [
        {
          type: BUTTON_TYPE.PRIMARY,
          text: this.$t("common.buttonDemo4Text1"),
          icon: "exchange_face",
          iconPosition: "left",
        },
        {
          type: BUTTON_TYPE.PRIMARY,
          text: this.$t("common.buttonDemo4Text2"),
          icon: "exchange_face",
          iconPosition: "right",
        },
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
.button-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;

  > button {
    align-content: center;
  }
}
</style>
