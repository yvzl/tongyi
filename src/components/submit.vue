<script setup lang="ts">
import {Button as AButton} from "ant-design-vue";
import {SendOutlined, BorderOutlined} from "@ant-design/icons-vue";

defineProps<{ state: boolean, mode: boolean }>()
</script>

<template>
  <div class="submit">
    <AButton v-if="mode" :disabled="state" type="primary" shape="circle">
      <SendOutlined/>
    </AButton>
    <AButton v-else shape="circle">
      <BorderOutlined/>
    </AButton>
  </div>
</template>

<style scoped lang="scss">
@use "styles/submit.module";
</style>