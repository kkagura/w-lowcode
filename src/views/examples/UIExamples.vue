<template>
  <div>
    <WForm>
      <WFormItem label="用户名" name="username">
        <InputText type="text" />
      </WFormItem>
    </WForm>
  </div>
</template>

<script lang="ts" setup>
import { WForm, WFormItem } from "@/components/w-form";
</script>
<style scoped lang="less"></style>
