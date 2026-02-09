<template>
  <div class="blank-layout-container">
    <router-view v-slot="{ Component }">
      <transition
        @after-enter="handleTransitionAppreared"
        :name="themeStore.routeTransition"
        mode="out-in"
      >
        <keep-alive :include="[]">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import { useThemeStore } from "@/store/theme";

const themeStore = useThemeStore();

const handleTransitionAppreared = () => {
  console.log("transition appeared");
};
</script>
<style scoped lang="less">
.blank-layout-container {
  width: 100%;
  height: 100%;
}
</style>
