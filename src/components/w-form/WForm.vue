<template>
  <form :class="ns.b()">
    <slot></slot>
  </form>
</template>

<script lang="ts" setup>
import { useNamespace } from "@/utils";
import { formProps } from "./props";
import { createFormContext } from "./hooks/use-form";

const ns = useNamespace("form");

const props = defineProps(formProps);

createFormContext(props);
</script>
<style scoped lang="less"></style>
