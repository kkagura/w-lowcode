<template>
  <div :class="ns.b()">
    <div
      :style="{ width: labelWidth }"
      :class="ns.e('label')"
      v-if="label || $slots.label"
    >
      <label :class="ns.em('label', 'text')" :for="id">{{ label }}</label>
    </div>
    <div @change="handleChange" :class="ns.e('content')">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from "@/utils";
import { genFormItemId } from "./utils";
import { formItemProps } from "./props";
import { computed } from "vue";
import { useFormContext } from "./hooks";

const props = defineProps(formItemProps);
const formContext = useFormContext();

const ns = useNamespace("form-item");
const id = genFormItemId();
const labelWidth = computed(() => {
  return props.labelWidth || formContext?.labelWidth.value || "100px";
});

/**
 * slot中的change事件会冒泡到外层，所以这里可以直接监听
 * @param e
 */
const handleChange = (e: any) => {
  console.log(e);
};
</script>
<style scoped lang="less">
.w-form-item {
  display: flex;
  line-height: 18px;
  --w-form-item-label-color: #333;
  --w-form-item-label-font-size: 14px;
  margin-bottom: 16px;
  &__label {
    padding: 8px 4px;
    text-align: right;
    color: var(--w-form-item-label-color);
    font-size: var(--w-form-item-label-font-size);
    &::after {
      content: "：";
    }
  }
}
</style>
