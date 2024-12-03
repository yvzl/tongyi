<script setup lang="ts">
import {Popover} from "ant-design-vue"
import {EllipsisOutlined, EditOutlined, PaperClipOutlined, DeleteOutlined} from "@ant-design/icons-vue"
import type {ILevel} from "types/list"

defineProps<{ level: ILevel[] }>()
</script>

<template>
  <ul class="list-level">
    <li v-for="{id, name} in level" :key="id">
      <p>{{ name }}</p>
      <Popover :arrow="false" trigger="click" placement="rightTop" overlayClassName="level-popover">
        <template #content>
          <ul>
            <li>
              <EditOutlined/>
              重命名
            </li>
            <li>
              <PaperClipOutlined/>
              置顶此对话
            </li>
            <li class="danger">
              <DeleteOutlined/>
              删除此对话
            </li>
          </ul>
        </template>
        <EllipsisOutlined/>
      </Popover>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use "styles/listLevel.module";
</style>