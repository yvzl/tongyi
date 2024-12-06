<script setup lang="ts">
import {storeToRefs} from "pinia";
import {dialogStore} from "@/stores"
import {nextTick, useTemplateRef} from "vue";
import {Popover, Input, message} from "ant-design-vue";
import {DeleteOutlined, EditOutlined, EllipsisOutlined, PaperClipOutlined} from "@ant-design/icons-vue";
import type {IList, IDialog} from "@/types"

const store = dialogStore()
const {editDialog, deleteDialog, updateSelectState, findIndex} = store
const {selectState, dialogData, searchValue} = storeToRefs(store)

defineProps<{ list: IList[] }>()

const inputList = useTemplateRef("input")
const toTop = (key: IDialog["key"], state: IDialog["top"]) => editDialog(key, "top", state)

const reName = (key: IDialog["key"], index: number) => {
  editDialog(key, "edit", true)
  nextTick(() => inputList.value[index].focus())
}

const unReName = (key: IDialog["key"]) => {
  editDialog(key, "edit", false)
  message.success("修改成功")
}
</script>

<template>
  <div class="list">
    <ul>
      <template v-for="{key, name, level} in list" :key="key">
        <li v-if="level.length" :key="key">
          {{ name }}
          <ul>
            <template v-for="({key, top, name, edit}, i) in level" :key="key">
              <li v-if="name?.includes(searchValue)" @click="updateSelectState(key)"
                  :class="{active: selectState === key}">
                <p>{{ name }}</p>
                <Popover :arrow="false" trigger="click" placement="rightTop"
                         overlayClassName="level-popover">
                  <template #content>
                    <ul>
                      <li>
                        <div v-if="!edit" @click="reName(key, i)" class="rename">
                          <EditOutlined/>
                          重命名
                        </div>
                        <Input ref="input" @blur="unReName(key)" v-model:value="dialogData[findIndex(key)].name"
                               v-else/>
                      </li>
                      <li v-if="top" @click="toTop(key, false)">
                        <PaperClipOutlined/>
                        取消置顶
                      </li>
                      <li v-else @click="toTop(key, true)">
                        <PaperClipOutlined/>
                        置顶此对话
                      </li>
                      <li @click="deleteDialog(key)" class="danger">
                        <DeleteOutlined/>
                        删除此对话
                      </li>
                    </ul>
                  </template>
                  <EllipsisOutlined/>
                </Popover>
              </li>
            </template>
          </ul>
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "styles/list.module";
</style>