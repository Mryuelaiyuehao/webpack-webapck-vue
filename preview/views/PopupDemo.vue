<template>
  <BaseView>
    <xzy-nav-bar
      slot="header"
      :title="$t('common.popupTitle')"
      type="white"
      left-arrow
      @click-left="goBack"
    />
    <Card :title="$t('common.popupDemo1')">
      <CellGroup>
        <Cell
          v-for="(item, index) in popupList1()"
          :key="index"
          :title="item.title"
          is-link
          clickable
          @click="handleClick1"
        >
        </Cell>
      </CellGroup>
    </Card>
    <Card :title="$t('common.popupDemo2')">
      <CellGroup>
        <Cell
          v-for="(item, index) in popupList2()"
          :key="index"
          :title="item.title"
          is-link
          clickable
          @click="() => handleClick2(item.position)"
        >
        </Cell>
      </CellGroup>
    </Card>
    <Card :title="$t('common.popupDemo3')">
      <CellGroup>
        <Cell
          v-for="(item, index) in popupList3()"
          :key="index"
          :title="item.title"
          is-link
          clickable
          @click="handleClick3"
        >
        </Cell>
      </CellGroup>
    </Card>
    <Card :title="$t('common.popupDemo4')">
      <CellGroup>
        <Cell
          v-for="(item, index) in popupList4()"
          :key="index"
          :title="item.title"
          is-link
          clickable
          @click="() => handleClick4(item.iconPosition)"
        >
        </Cell>
      </CellGroup>
    </Card>
    <xzy-popup v-model="show1" :custom-style="customStyle1"></xzy-popup>
    <xzy-popup
      v-model="show2"
      :custom-style="customStyle2"
      :position="position"
    ></xzy-popup>
    <xzy-popup
      v-model="show3"
      :custom-style="customStyle1"
      :overlay="false"
      closeable
    ></xzy-popup>
    <xzy-popup
      v-model="show4"
      :custom-style="customStyle1"
      closeable
      :close-icon-position="closeIconPosition"
    ></xzy-popup>
  </BaseView>
</template>
<script>
import { POPUP_CLOSE_POSITION, POPUP_POSITION } from "@/components/popup/enums";
import { Cell, CellGroup, Popup, NavBar } from "@/index.js";
export default {
  name: "PopupDemo",
  components: {
    "xzy-popup": Popup,
    Cell,
    CellGroup,
    "xzy-nav-bar": NavBar,
  },
  data() {
    return {
      show1: false,
      popupList1: () => [{ title: this.$t("common.popupDemo1Title1") }],
      show2: false,
      position: "",
      popupList2: () => [
        {
          title: this.$t("common.popupDemo2Title1"),
          position: POPUP_POSITION.TOP,
        },
        {
          title: this.$t("common.popupDemo2Title2"),
          position: POPUP_POSITION.BOTTOM,
        },
        {
          title: this.$t("common.popupDemo2Title3"),
          position: POPUP_POSITION.LEFT,
        },
        {
          title: this.$t("common.popupDemo2Title4"),
          position: POPUP_POSITION.RIGHT,
        },
      ],
      show3: false,
      popupList3: () => [{ title: this.$t("common.popupDemo3Title1") }],
      customStyle1: {
        width: "80%",
        height: "50%",
      },
      show4: false,
      closeIconPosition: "",
      popupList4: () => [
        {
          title: this.$t("common.popupDemo4Title1"),
          iconPosition: POPUP_CLOSE_POSITION.TOP_LEFT,
        },
        {
          title: this.$t("common.popupDemo4Title2"),
          iconPosition: POPUP_CLOSE_POSITION.TOP_RIGHT,
        },
      ],
      customStyle2: {},
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    handleClick1() {
      this.show1 = true;
    },
    handleClick2(position) {
      this.show2 = true;
      this.position = position;
      if (this.position === POPUP_POSITION.CENTER) {
        this.customStyle2 = {
          width: "80%",
          height: "50%",
        };
      } else if (
        position === POPUP_POSITION.TOP ||
        position === POPUP_POSITION.BOTTOM
      ) {
        this.customStyle2 = {
          width: "100%",
          height: "50%",
        };
      } else if (
        position === POPUP_POSITION.LEFT ||
        position === POPUP_POSITION.RIGHT
      ) {
        this.customStyle2 = {
          width: "60%",
          height: "100%",
        };
      }
    },
    handleClick3() {
      this.show3 = true;
    },
    handleClick4(iconPosition) {
      this.closeIconPosition = iconPosition;
      this.show4 = true;
    },
  },
};
</script>
