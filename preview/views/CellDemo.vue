<template>
  <BaseView>
    <xzy-nav-bar
      slot="header"
      :title="$t('common.cellTitle')"
      type="white"
      left-arrow
      @click-left="goBack"
    />
    <Card :title="$t('common.cellDemo1')">
      <xzy-cell-group>
        <xzy-cell
          v-for="({ title, value, label }, index) in cellList1()"
          :key="index"
          :title="title"
          :value="value"
          :label="label"
        />
      </xzy-cell-group>
    </Card>
    <Card :title="$t('common.cellDemo2')">
      <xzy-cell-group>
        <xzy-cell
          v-for="({ title, value, label }, index) in cellList1()"
          :key="index"
          :title="title"
          :value="value"
          :label="label"
          center
        />
      </xzy-cell-group>
    </Card>
    <Card :title="$t('common.cellDemo3')">
      <xzy-cell-group>
        <xzy-cell
          v-for="({ title, value, label }, index) in cellList1()"
          :key="index"
          :title="title"
          :value="value"
          :label="label"
          is-link
          center
        />
      </xzy-cell-group>
    </Card>
    <Card :title="$t('common.cellDemo4')">
      <xzy-cell-group>
        <xzy-cell
          v-for="({ title, value, label }, index) in cellList1()"
          :key="index"
          :title="title"
          :value="value"
          :label="label"
          clickable
          center
        />
      </xzy-cell-group>
    </Card>
    <Card :title="$t('common.cellDemo5')">
      <xzy-cell-group>
        <xzy-cell
          v-for="({ title, value, label }, index) in cellList1()"
          :key="index"
          :title="title"
          :value="value"
          :label="label"
          center
          required
        />
      </xzy-cell-group>
    </Card>
  </BaseView>
</template>
<script>
import { NavBar, Cell, CellGroup } from "@/index.js";
export default {
  name: "CellDemo",
  components: {
    "xzy-cell": Cell,
    "xzy-cell-group": CellGroup,
    "xzy-nav-bar": NavBar,
  },
  data() {
    return {
      cellList1: () => [
        {
          title: this.$t("common.cellDemoTitle1"),
          value: this.$t("common.cellDemoValue1"),
          label: this.$t("common.cellDemoLabel1"),
        },
        {
          title: this.$t("common.cellDemoTitle2"),
          value: this.$t("common.cellDemoValue2"),
          label: this.$t("common.cellDemoLabel2"),
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
