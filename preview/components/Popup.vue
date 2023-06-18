<template>
  <xzy-popup
    :value="value"
    position="bottom"
    :custom-style="customStyle"
    round
    @input="hidePopup"
  >
    <BaseView>
      <template slot="header">
        <xzy-nav-bar v-if="single" :title="title" @click-right="hidePopup">
          <xzy-icon slot="right" name="close_line" :size="42" />
        </xzy-nav-bar>
        <xzy-nav-bar
          v-else
          :title="title"
          :left-text="$t('common.cancel')"
          :right-text="$t('common.confirm')"
          @click-left="onCancel"
          @click-right="onConfirm"
        />
      </template>
      <slot />
    </BaseView>
  </xzy-popup>
</template>
<script>
import { NavBar, Popup, Icon } from "@";
export default {
  name: "Popup",
  components: { "xzy-nav-bar": NavBar, "xzy-popup": Popup, "xzy-icon": Icon },
  props: {
    value: {
      type: Boolean,
      default: () => false,
    },
    title: {
      type: String,
      default: () => "",
    },
    single: {
      type: Boolean,
      default: () => true,
    },
  },
  data() {
    return {
      customStyle: {
        width: "100%",
        height: "50%",
      },
    };
  },
  methods: {
    hidePopup() {
      this.$emit("input", false);
    },
    onConfirm() {
      this.$emit("confirm");
      this.hidePopup();
    },
    onCancel() {
      this.$emit("cancel");
      this.hidePopup();
    },
  },
};
</script>
