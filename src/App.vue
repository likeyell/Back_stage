<template>
  <navigationMenuView v-if="navigationDisplayHide()"></navigationMenuView>
  <router-view />
</template>

<script lang="ts" setup>
const route = useRoute();

const navigationDisplayHide = () => {
  // console.log(route.path); // 输出当前页面的路径部分
  if (route.path === "/" || route.path === "/LoginView") {
    return false;
  } else {
    return true;
  }
};
</script>

<style lang="scss">
/* 修改滚动条的样式 */
.scrollable-container {
  /* 添加滚动条样式（适用于 Safari 和 Edge） */
  /* 注：Safari 和 Edge 浏览器目前只支持修改滚动条的颜色，不支持修改滚动条的宽度和样式 */
  &::-webkit-scrollbar {
    width: 13px;
    height: 13px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4); /* 滚动条滑块颜色 */
    background-clip: padding-box;
    border: 3px solid transparent;
    border-radius: 7px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.5); /* 滚动条滑块鼠标悬停时的颜色 */
  }

  &::-webkit-scrollbar-track:hover {
    background-color: #f8fafc;
  }

  &::-webkit-scrollbar-track:hover {
    background-color: transparent;
  }
}
</style>
