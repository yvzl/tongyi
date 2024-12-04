<script setup lang="ts">
import {storeToRefs} from "pinia";
import List from "components/list.vue";
import ToolBar from 'components/toolbar.vue'
import PanelButton from "components/panelButton.vue"
import store from "@/stores"

const Store = store()
const {listData, selectState} = storeToRefs(Store)
</script>

<template>
  <div class="aside">
    <ToolBar style="margin: 24px 0 28px 0"/>
    <List :list="listData" v-model:state="selectState"/>
    <PanelButton/>
  </div>
</template>

<style scoped lang="scss">
@use "styles/aside.module";
</style>