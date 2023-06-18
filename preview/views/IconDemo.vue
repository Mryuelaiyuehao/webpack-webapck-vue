<template>
  <BaseView>
    <xzy-nav-bar
      slot="header"
      :title="$t('common.iconTitle')"
      type="white"
      left-arrow
      @click-left="goBack"
    />
    <Card :title="$t('common.iconDemo1')">
      <div class="icon-custom">
        <div
          v-for="(item, index) in iconList1()"
          :key="index"
          class="icon-item-1"
        >
          <xzy-icon :name="item.name" :size="42"></xzy-icon>
        </div>
      </div>
    </Card>
    <Card :title="$t('common.iconDemo2')">
      <div class="icon-custom">
        <div
          v-for="(item, index) in iconList2()"
          :key="index"
          class="icon-item-1"
        >
          <xzy-icon :name="item.name" :color="item.color" :size="42"></xzy-icon>
        </div>
      </div>
    </Card>
    <Card :title="$t('common.iconDemo3')">
      <div class="icon-custom">
        <div
          v-for="(item, index) in iconList3()"
          :key="index"
          class="icon-item-1"
        >
          <xzy-icon :name="item.name" :size="item.size"></xzy-icon>
        </div>
      </div>
    </Card>
    <Card :title="$t('common.iconDemo4')">
      <div class="icon-custom">
        <div
          v-for="(item, index) in iconList4()"
          :key="index"
          class="icon-item-2"
        >
          <xzy-icon :name="item.name" :size="42"></xzy-icon>
          <div>{{ item.title }}</div>
          <div>{{ item.name }}</div>
        </div>
      </div>
    </Card>
    <Card :title="$t('common.iconDemo5')">
      <div class="icon-custom">
        <div
          v-for="(item, index) in iconList5()"
          :key="index"
          class="icon-item-2"
        >
          <xzy-icon :name="item.name" :size="42"></xzy-icon>
          <div>{{ item.title }}</div>
          <div>{{ item.name }}</div>
        </div>
      </div>
    </Card>
  </BaseView>
</template>
<script>
import { NavBar, Icon } from "@/index.js";
export default {
  name: "PopupDemo",
  components: {
    "xzy-nav-bar": NavBar,
    "xzy-icon": Icon,
  },
  data() {
    return {
      iconList1: () => [
        {
          name: "search_line",
        },
        {
          name: "select_circle_line",
        },
      ],
      iconList2: () => [
        {
          name: "radio_line",
          color: "primary",
        },
        {
          name: "unfold_line",
          color: "success",
        },
      ],
      iconList3: () => [
        {
          name: "close_line",
          size: 42,
        },
        {
          name: "arrow_top_line",
          size: 60,
        },
      ],
      iconList4: () => [
        {
          name: "select_line",
          title: "单选",
        },
        {
          name: "close_line",
          title: "关闭",
        },
        {
          name: "arrow_top_line",
          title: "上",
        },
        {
          name: "search_line",
          title: "搜索",
        },
        {
          name: "unselect_circle_line",
          title: "未选中",
        },
        {
          name: "select_circle_line",
          title: "选中",
        },
        {
          name: "arrow_right_line",
          title: "右",
        },
        {
          name: "unfold_line",
          title: "展开",
        },
        {
          name: "arrow_left_line",
          title: "左",
        },
        {
          name: "radio_line",
          title: "单选",
        },
      ],
      iconList5: () => [
        {
          name: "select_face",
          title: "单选",
        },
        {
          name: "close_face",
          title: "关闭",
        },
        {
          name: "arrow_top_face",
          title: "上",
        },
        {
          name: "search_face",
          title: "搜索",
        },
        {
          name: "unselect_circle_face",
          title: "未选中",
        },
        {
          name: "select_circle_face",
          title: "选中",
        },
        {
          name: "arrow_right_face",
          title: "右",
        },
        {
          name: "unfold_face",
          title: "展开",
        },
        {
          name: "arrow_left_face",
          title: "左",
        },
        {
          name: "radio_face",
          title: "单选",
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
.icon-custom {
  display: grid;
  grid-template-columns: repeat(5, calc(20% - 9.6px));
  justify-items: center;
  align-items: center;
  gap: $space2;
  .icon-item-1 {
    align-self: center;
    justify-self: center;
  }
  .icon-item-2 {
    align-self: self-start;
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
      margin-top: $space2;
      color: $c-text-regular;
      word-break: break-all;
      text-align: center;
    }
  }
}
</style>
