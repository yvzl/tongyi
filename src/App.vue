<script setup lang="ts">
import {ConfigProvider} from "ant-design-vue"
import {theme} from "@/config"
</script>

<template>
  <ConfigProvider :theme="theme">
    <router-view/>
  </ConfigProvider>
</template>