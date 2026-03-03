<template>
  <div :calss="ns.b()">
    <div :class="ns.e('label')"></div>
    <div :class="ns.e('content')"></div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from "@/utils";

const ns = useNamespace("form-item");
</script>
<style scoped lang="less"></style>
