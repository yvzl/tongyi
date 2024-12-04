<script setup lang="ts">
import {ref} from "vue"
import {ControlOutlined} from "@ant-design/icons-vue"
import Panel from "components/panel.vue"

const state = ref(false)
</script>

<template>
  <div class="panel-button">
    <div class="btn" @click="state = true">
      <ControlOutlined/>
      管理对话记录
    </div>
    <Panel v-model:state="state"/>
  </div>
</template>

<style scoped lang="scss">
@use "styles/panelBotton.module";
</style>