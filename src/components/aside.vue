<script setup lang="ts">
import {computed} from "vue"
import {storeToRefs} from "pinia";
import {dialogStore} from "@/stores"
import {diffDay, getContent} from "@/utils";
import List from "components/list.vue";
import ToolBar from 'components/toolbar.vue'
import PanelButton from "components/panelButton.vue"
import type {IList, IDialog} from "@/types";

const store = dialogStore()
const {dialogData, searchValue} = storeToRefs(store)

const initListData = (): IList[] => {
  const dateMap = new Map([
    [(_: number, top: boolean) => top, 0],
    [(diff: number) => diff === 0, 1],
    [(diff: number) => diff === 0, 1],
    [(diff: number) => diff === 1, 2],
    [(diff: number) => diff <= 7, 3],
    [(diff: number) => diff <= 30, 4],
    [(diff: number) => diff > 30, 5],
  ]);

  return dialogData.value.reduce((acc: IList[], {key, name, time, data, top, edit}: IDialog) => {
    for (const [fun, result] of dateMap) {
      if (fun(diffDay(new Date().setHours(0, 0, 0, 0).valueOf(), new Date(time.split(" ")[0]).setHours(0, 0, 0, 0).valueOf()), top)) {
        acc[result].level.push({key, name: name || (getContent(data, "user") || ""), top, edit})
        return acc
      }
    }
  }, ["置顶", "今天", "昨天", "7天内", "30天内", "很久以前"].map((name, key): IList => ({
    key,
    name,
    level: []
  })))
}

const listData = computed<IList[]>(() => initListData())
</script>

<template>
  <div class="aside">
    <ToolBar style="margin: 24px 0 28px 0"/>
    <List @changeData="" :list="listData"/>
    <PanelButton/>
  </div>
</template>

<style scoped lang="scss">
@use "styles/aside.module";
</style>