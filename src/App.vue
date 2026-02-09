<template>
  <div class="app-container">
    <Toast />
    <RouterView />
  </div>
</template>

<script lang="ts" setup></script>
<style scoped lang="less">
.app-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
