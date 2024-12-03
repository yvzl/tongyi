<script setup lang="ts">
import ToolBar from 'components/toolbar.vue'
import List from "components/list.vue";
import PanelButton from "components/panelButton.vue"
</script>

<template>
  <div class="aside">
    <ToolBar style="margin: 24px 0 28px 0"/>
    <List :list="[{
      id: 0,
      name: '当天',
      level: [{
        id: 1,
        name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
     }, {
        id: 1,
        name: '聚焦'
     },{
        id: 1,
        name: '聚焦'
     }, {
        id: 1,
        name: '聚焦'
     },{
        id: 1,
        name: '聚焦'
     }, {
        id: 1,
        name: '聚焦'
     },{
        id: 1,
        name: '聚焦'
     }, {
        id: 1,
        name: '聚焦'
     },{
        id: 1,
        name: '聚焦'
     }, {
        id: 1,
        name: '聚焦'
     },{
        id: 1,
        name: '聚焦'
     }, {
        id: 1,
        name: '聚焦'
     },{
        id: 1,
        name: '聚焦'
     }, {
        id: 1,
        name: '聚焦'
     },{
        id: 1,
        name: '聚焦'
     }, {
        id: 1,
        name: '聚焦'
     },{
        id: 1,
        name: '聚焦'
     }, {
        id: 1,
        name: '聚焦'
     },{
        id: 1,
        name: '聚焦'
     }, {
        id: 1,
        name: '聚焦'
     },{
        id: 1,
        name: '聚焦'
     }, {
        id: 1,
        name: '聚焦'
     }]
    }]"/>
    <PanelButton/>
  </div>
</template>

<style scoped lang="scss">
@use "styles/aside.module";
</style>