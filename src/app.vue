<template>
  <div class="app">
    <div class="header">
      App
    </div>
    <div class="content">
      <div
        v-for="({ path, text }, index) in btnList"
        :key="index"
        class="item"
        @click="() => onClick(path)"
      >
        {{ text }}
      </div>
    </div>
    <router-view class="child" />
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      btnList: [
        {
          path: '/nav',
          text: 'Nav'
        },
          {
          path: '/home',
          text: 'Home'
        }
      ]
    };
  },
  methods: {
    onClick(path) {
      this.$router.push({
        path
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  .header {
    font-size: 40px;
    text-align: center;
    font-weight: bolder;
    color: green;
  }

  .content {
    flex: 1;
    .item {
      background-color: skyblue;
      text-align: center;
      max-width: 60%;
      line-height: 48px;
      margin: 0 auto;
      &:not(:first-child) {
        margin-top: 12px;
      }
    }
  }

  .child{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
  }
}
</style>
