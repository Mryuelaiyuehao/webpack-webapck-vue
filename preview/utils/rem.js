// 设置根字体大小
function setRootFontSize() {
  //计算出 比例来 当前分辨率的宽%设计稿宽度
  const scale = window.screen.width / 750;
  // 给根元素设置font-size
  document.documentElement.style.fontSize = 75 * Math.min(scale, 2) + "px";
}
export { setRootFontSize };
