<template>
  <BaseView>
    <xzy-nav-bar
      slot="header"
      :title="$t('common.radioTitle')"
      type="white"
      left-arrow
      @click-left="goBack"
    />
    <Card :title="$t('common.radioDemo1')">
      <CellGroup>
        <Cell
          v-for="(item, index) in cellList1"
          :key="index"
          :title="item.title"
          :value="item.value"
          is-link
          center
          clickable
          @click="showPopup1"
        />
      </CellGroup>
    </Card>
    <Card :title="$t('common.radioDemo2')">
      <CellGroup>
        <Cell
          v-for="(item, index) in cellList2"
          :key="index"
          :title="item.title"
          :value="item.value"
          is-link
          center
          clickable
          @click="showPopup2"
        />
      </CellGroup>
    </Card>
    <Popup
      v-model="show1"
      :title="$t('common.radioDemo1Title1')"
      :custom-style="customStyle"
    >
      <RadioGroup v-model="value" @change="onChange1">
        <Radio
          v-for="(item, index) in radioList2"
          :key="index"
          :name="item.name"
          :label="item.label"
          :desc="item.desc"
        />
      </RadioGroup>
    </Popup>
    <Popup v-model="show2" :title="$t('common.radioDemo2Title1')">
      <RadioGroup v-model="value2" @change="onChange2">
        <Radio
          v-for="(item, index) in radioList2"
          :key="index"
          :name="item.name"
          :label="item.label"
          :desc="item.desc"
          :disabled="item.disabled"
        />
      </RadioGroup>
    </Popup>
  </BaseView>
</template>
<script>
import { Radio, RadioGroup, CellGroup, Cell, NavBar } from "@/index.js";
export default {
  name: "RadioDemo",
  components: { Radio, RadioGroup, CellGroup, Cell, "xzy-nav-bar": NavBar },
  data() {
    return {
      show1: false,
      customStyle: {
        width: "100%",
        height: "50%",
      },
      value: 0,
      radioList1: [
        {
          label: this.$t("common.radioDemo1Label1"),
          desc: this.$t("common.radioDemo1Desc1"),
          name: 1,
        },
        {
          label: this.$t("common.radioDemo1Label2"),
          desc: this.$t("common.radioDemo1Desc2"),
          name: 2,
        },
        {
          label: this.$t("common.radioDemo1Label3"),
          desc: this.$t("common.radioDemo1Desc3"),
          name: 3,
        },
        {
          label: this.$t("common.radioDemo1Label4"),
          desc: this.$t("common.radioDemo1Desc4"),
          name: 4,
        },
      ],
      cellList1: [
        {
          title: this.$t("common.radioDemo1CellTitle1"),
          value: "",
        },
      ],
      show2: false,
      cellList2: [
        {
          title: this.$t("common.radioDemo2CellTitle1"),
          value: "",
        },
      ],
      value2: 0,
      radioList2: [
        {
          label: this.$t("common.radioDemo2Label1"),
          name: 1,
          disabled: false,
        },
        {
          label: this.$t("common.radioDemo2Label2"),
          name: 2,
          disabled: false,
        },
        {
          label: this.$t("common.radioDemo2Label3"),
          name: 3,
          disabled: true,
        },
        {
          label: this.$t("common.radioDemo2Label4"),
          name: 4,
          disabled: false,
        },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    showPopup1() {
      this.show1 = true;
    },
    hidePopup() {
      this.show1 = false;
      this.show2 = false;
    },
    onChange1(value) {
      const item = this.radioList2.find((item) => item.name === value);
      this.cellList1[0].value = item.label;
      this.hidePopup();
    },
    showPopup2() {
      this.show2 = true;
    },
    onChange2(value) {
      const item = this.radioList2.find((item) => item.name === value);
      this.cellList2[0].value = item.label;
      this.hidePopup();
    },
  },
};
</script>
