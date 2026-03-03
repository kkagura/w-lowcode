<template>
  <form :class="ns.b()"></form>
</template>

<script lang="ts" setup>
import { useNamespace } from "@/utils";

const ns = useNamespace("form");
</script>
<style scoped lang="less"></style>
