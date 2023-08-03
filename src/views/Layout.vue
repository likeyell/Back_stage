<template>
  <NavigationMenuView></NavigationMenuView>
  <router-view />
</template>

<script lang="ts" setup>
const route = useRoute();

const navigationDisplayHide = ref(false); // 是否显示导航列表
watch(route, () => {
  if (route.matched[0]) {
    navigationDisplayHide.value = route.matched[0].meta
      .navigationDisplayHide as boolean;
  }
});
</script>

<style lang="stylus" scoped></style>
