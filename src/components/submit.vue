<script setup lang="ts">
import {Button as AButton} from "ant-design-vue";
import {SendOutlined} from "@ant-design/icons-vue";
</script>

<template>
  <div class="submit">
    <AButton type="primary" size="large" shape="circle">
      <SendOutlined/>
    </AButton>
  </div>
</template>