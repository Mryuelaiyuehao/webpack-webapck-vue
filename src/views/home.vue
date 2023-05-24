<template>
  <div class="home">Home 主页</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>

::placeholder {
  color: gray;
}
.home {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: 20px;
  width: 100vw;
  height: 100vh;
  background-color: rebeccapurple;
  transform: scale(1);
  transition: 1s;
  text-align: center;
  color: green;
  animation: none;

  > div {
    /* autoprefixer: off */
    transform: scale(1);
    transition: 1s;
  }
}
</style>
