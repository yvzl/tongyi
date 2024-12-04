<script setup lang="ts">
import {ref} from "vue"
import List from "components/list.vue";
import ToolBar from 'components/toolbar.vue'
import PanelButton from "components/panelButton.vue"

const state = ref<number>(1)
const list = [{
  id: 1,
  name: '当天',
  level: [{
    id: 1,
    name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  }, {
    id: 2,
    name: '聚焦'
  }]
}]
</script>

<template>
  <div class="aside">
    <ToolBar style="margin: 24px 0 28px 0"/>
    <List :list="list" v-model:state="state"/>
    <PanelButton/>
  </div>
</template>

<style scoped lang="scss">
@use "styles/aside.module";
</style>