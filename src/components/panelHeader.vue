<script setup lang="ts">
import {storeToRefs} from "pinia";
import {dialogStore} from "@/stores"
import Search from "components/Search.vue";

const {tableValue} = storeToRefs(dialogStore())
</script>

<template>
  <div class="panel-header">
    <p>管理对话记录 共2条</p>
    <Search v-model:value="tableValue" style="width: 400px;"/>
  </div>
</template>

<style scoped lang="scss">
@use "styles/panelHeader.module";
</style>